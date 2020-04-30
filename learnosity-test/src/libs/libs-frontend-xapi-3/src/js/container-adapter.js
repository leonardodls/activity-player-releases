/* global $ */

import Settings from './localStorage.js';

class ContainerAdapter {

    constructor(id) {
        this.id = id;
        this.userAgent = window.navigator.userAgent;
        this.settings = new Settings();
        // Adapter configuration with default values
        this.adapterConfig = {
            config: {
                'accTimeUnit': 10,
                'timeRecordingInterval': 60,
                'inactiveUserTimeThreshold': 120
            }
        };

        /**
         * Purpose: platform Adapter which acts as interface between LO and LMS parent Window.
         */
        this.platformAdapter = {
            /**
             * Purpose: State received from within the LO are interepreted and passed to APP.
             * Input:   jsonObject: state object received from the LO.
             * Output:  Passes the interpreted state to xapirunner.
             */
            bubbleState: (jsonObject) => {
              if(!$.isEmptyObject(jsonObject)) {
                this.adapterConfig.sendState(this.id, jsonObject);
              }
            },
            /**
             * Purpose: Statements received from within the LO are interepreted and passed to APP.
             * Input:   jsonArray: statements array received from the LO.
             * Output:  Passes the interpreted statements to xapirunner.
             */
            bubbleStatements: (jsonArray) => {
                let interpretedStatementsArray = [], interpretedStatement = {}, statementsArray = [], statement = {};
                const container = 'Container';
                const lo = 'LO';
                const businessRule = 'Business rule';
                let dateTime, options;

                for(let i = 0; i < jsonArray.length; ++i) {
                    dateTime = new Date();
                    statement = {'json': jsonArray[i], 'generatedTimestamp': this.getCurrentTime(dateTime) };
                    statementsArray.push(statement);

                    if(jsonArray[i].verb.display.und === 'started') {
                      /** Launched statement */
                      interpretedStatement = $.extend(true, {}, jsonArray[i]);
                      options = {
                          description: 'Launched',
                          mode: container,
                          date: dateTime
                      };
                      interpretedStatement = this.generateStatement('launched', options, interpretedStatement);
                      interpretedStatementsArray.push(interpretedStatement);

                    } else if(jsonArray[i].verb.display.und === 'scored') {
                        /** Attempted statement */
                        interpretedStatement = $.extend(true, {}, jsonArray[i]);
                        const percentage = ((interpretedStatement.result.score.raw / interpretedStatement.result.score.max) * 100).toFixed(2);
                        options = {
                            description: 'Attempted <span>(Scored: ' + percentage + '%)</span>',
                            mode: lo,
                            date: dateTime
                        };
                        interpretedStatement = this.generateStatement('attempted', options, interpretedStatement);
                        interpretedStatementsArray.push(interpretedStatement);

                        /** Completed statement */
                        interpretedStatement = $.extend(true, {}, jsonArray[i]);
                        options = {
                            description: 'Completed <span> (Attempted == Completed) </span>',
                            mode: businessRule,
                            date: dateTime
                        };
                        interpretedStatement = this.generateStatement('completed', options, interpretedStatement);
                        interpretedStatementsArray.push(interpretedStatement);

                        //for scoreable
                        this.adapterConfig.containerNotification(this.id, 'container_controls', 'activityCompleted');
                    }
                }

                if(!$.isEmptyObject(statementsArray)) {
                    this.adapterConfig.sendStatements(this.id, statementsArray);
                }

                if(!$.isEmptyObject(interpretedStatementsArray)) {
                  this.adapterConfig.sendInterpretedStatements(this.id, interpretedStatementsArray);
                }
            },
            bubbleControlsChange: (params) => {
                let generateControlsChangeEvent = (controlsEvent) => {
                    const newControlsEvent = Object.assign({}, controlsEvent);
                    if (newControlsEvent.active !== undefined && !newControlsEvent.active) {
                      newControlsEvent.visible = false;
                    }
                    this.adapterConfig.containerNotification(this.id, 'generic_controls', newControlsEvent);
                };

                if(Array.isArray(params)) {
                    params.forEach(element => generateControlsChangeEvent(element));
                } else {
                    generateControlsChangeEvent(params);
                }
            },
            bubbleMessageFromContent: (request, response) => {
                let params = [{
                    request: request,
                    response: response,
                    timestamp: this.getCurrentTime(new Date())
                }];
                this.adapterConfig.notifyMessageFromContent(this.id, params);
            },
            bubbleMessageToContent: (request, response) => {
                let params = [{
                    request: request,
                    response: response,
                    timestamp: this.getCurrentTime(new Date())
                }];
                this.adapterConfig.notifyMessageToContent(this.id, params);
            },
            bubbleSizeChange: (params) => {
              this.adapterConfig.containerNotification(this.id, 'size', params);
            },
            bubbleTerminated: () => {
                let options = {
                    description: 'Closed',
                    mode: 'Container'
                };
                this.generateStatement('closed', options);
                /* Remove Iframe */
                if(this.adapterConfig && this.adapterConfig.iframeId) {
                    let iframeId = this.adapterConfig.iframeId;
                    if($(iframeId).length) {
                        $(iframeId).remove();
                    }
                }
                /* Notify APP with activityClosed event */
                this.adapterConfig.containerNotification(this.id, 'generic_controls', 'activityClosed');
            },
            bubbleFeedbackChange: (params) => {
                this.adapterConfig.containerNotification(this.id, 'generic_feedback', params);
            }
        };
    }

    /* Activity launcher platform pass its options which overrides default adapter configuration and returns platform adapter.
        */
    getActivityAdapter(options) {
        $.extend(true, this.adapterConfig, options);
        return this;
    };

    /* Method to populate adapter parameters with the activity parameters
     */
    populateAdapterParameters(itemParams, genericContainerInstance) {
      this.itemParamsObj = itemParams;
      // Boolean variable to check if the session is active.
      this.inactiveUserTime = 0;
      this.worker;
      this.launched = false;

      this.timespentKey = 'timespent' + '-';
      if(this.adapterConfig.userId && this.adapterConfig.productId && this.adapterConfig.classId) {
        this.timespentKey += this.adapterConfig.userId + '-' + this.adapterConfig.productId + '-' + this.adapterConfig.classId;
      } else if(this.adapterConfig.userId && this.adapterConfig.productId) {
        this.timespentKey += this.adapterConfig.userId + '-' + this.adapterConfig.productId;
      }
      this.timespentKey += '-' + this.itemParamsObj.learningObject.code;

      if(genericContainerInstance) {
        this.genericContainer = genericContainerInstance;
      }
    }

    launchNewLO(itemParams, genericContainerInstance) {
        this.populateAdapterParameters(itemParams, genericContainerInstance);
    }

    // This function is called when any event is occurred.
    eventOccured() {
        this.inactiveUserTime = 0;
        let initParams = {
            'inactiveUserTime': this.inactiveUserTime
        };
        if(this.worker) {
          this.worker.postMessage(initParams);
        }
    };

    // This function stores the accumulated time.
    storeAccTime(accTimeUnit) {
        try {
            this.settings.getData(this.timespentKey, (lsResults) => {
                if(lsResults) {
                    lsResults = lsResults + accTimeUnit;
                } else {
                    /* If nothing exists in localStorage. */
                    lsResults = accTimeUnit;
                }
                this.settings.putData(this.timespentKey, lsResults);
            });
        } catch(e) {
            console.log('Error: ' + e);
        }
    };

    //This function will publish results to LRS.
    publishSavedResults() {
        this.settings.getData(this.timespentKey, (results) => {
            if(results) {
                this.generateExperiencedStatement(results);
                this.settings.removeData(this.timespentKey);
            }
        });
    };

    //This function stops the timer.
    stopTimer() {
      if(this.worker) {
        this.publishSavedResults();
        this.worker.postMessage('stopTimer');
      }
    }

    //This function destroys the worker.
    destroyWorker() {
        if(this.worker) {
            this.worker.terminate();
            this.worker = undefined;
        }
    };

    //This function starts the timer.
    startTimer() {
        if(typeof (Worker) !== 'undefined') {
          if(this.worker) {
              this.worker.terminate();
              this.worker = undefined;
          }
          if(typeof (this.worker) === 'undefined') {
              this.worker = new Worker(this.adapterConfig.dependencyBase + 'dist/js/active_time_worker.js');
          }
        } else {
          console.log('Error');
        }

        let accTimeUnit = this.adapterConfig.config.accTimeUnit;
        let timeRecordingInterval = this.adapterConfig.config.timeRecordingInterval;
        let inactiveUserTimeThreshold = this.adapterConfig.config.inactiveUserTimeThreshold;

        try {
            let initParams = {
                'accTimeUnit': accTimeUnit,
                'timeRecordingInterval': timeRecordingInterval,
                'inactiveUserTimeThreshold': inactiveUserTimeThreshold,
                'inactiveUserTime': this.inactiveUserTime
            };

            if(this.worker) {
                this.worker.postMessage(initParams);

                //Receiving Messages from worker.
                this.worker.onmessage = (event) => {
                    if(event.data === 'storeAccTime') {
                        this.storeAccTime(accTimeUnit);
                    }else if(event.data === 'publishSavedResults') {
                        this.publishSavedResults();
                    }
                };
            }
        } catch(e) {
            console.log('Error: ' + e);
        }
    };

    //options - description, mode and other keys, if any
    //statementObject optional param if present then objectId and score fetched from it
    generateStatement(verb, options, statementObject) {

        let interpretedStatementsArray = [], interpretedStatement = {};
        const dateTime = options.date || new Date();

        interpretedStatement.json = {'actor': {}, 'context': {}, 'verb': {}, 'object': {}, 'timestamp': ''};

        if(verb === 'launched') {
            this.launched = true;
            this.startTimer();
        } else if(verb === 'closed') {
            this.launched = false;
            this.publishSavedResults();
            this.destroyWorker();
        } else if(verb === 'attempted' || verb === 'completed') {
            interpretedStatement.json.result = {'score': {}};
            if(statementObject.result.score.hasOwnProperty('scaled')) {
                interpretedStatement.json.result.score.scaled = statementObject.result.score.scaled;
            }
            interpretedStatement.json.result.score.max = statementObject.result.score.max;
            interpretedStatement.json.result.score.raw = statementObject.result.score.raw;
            if(statementObject.result.score.hasOwnProperty('min')) {
                interpretedStatement.json.result.score.min = statementObject.result.score.min;
            }
        }

        interpretedStatement.json.context.platform = {};
        interpretedStatement.json.context.platform.ua = this.userAgent;
        interpretedStatement.json.verb.id = 'http://adlnet.gov/expapi/verbs/' + verb;

        let objectId = this.itemParamsObj.learningObject.code;

        if(statementObject && statementObject.object) {
            objectId = statementObject.object.id;
        }
        if($.isEmptyObject(objectId)) {
            objectId = '';
        }
        interpretedStatement.json.object.id = objectId;
        interpretedStatement.json.timestamp = this.getCurrentTimeISOStandard(dateTime);

        interpretedStatement.description = options.description;
        interpretedStatement.mode = options.mode;
        interpretedStatement.generatedTimestamp = this.getCurrentTime(dateTime);

        if(statementObject) {
            return interpretedStatement;
        } else {
            interpretedStatementsArray.push(interpretedStatement);
            this.adapterConfig.sendInterpretedStatements(this.id, interpretedStatementsArray);
        }
    }

    generateExperiencedStatement(timespent) {

      let interpretedStatementsArray = [], interpretedStatement = {};

      const verb = 'experienced';
      const mode = 'Container';
      const description = 'Experienced';
      const duration = this.getDuration(timespent * 1000);
      const objectType = 'Activity';
      const dateTime = new Date();

      interpretedStatement.json = { 'actor': {},
                                    'context': {},
                                    'verb': {
                                       'display': {}
                                     },
                                     'object': {
                                       'definition': {
                                         'name': {}
                                       },
                                       'objectType': objectType
                                     },
                                     'timestamp': '',
                                     'result': {
                                        'duration': duration
                                      }
                                    };

      interpretedStatement.json.context.platform = {};
      interpretedStatement.json.context.platform.ua = this.userAgent;
      interpretedStatement.json.verb.id = 'http://adlnet.gov/expapi/verbs/' + verb;
      interpretedStatement.json.verb.display.en = verb;

      let objectName = this.itemParamsObj.learningObject.name;
      if($.isEmptyObject(objectName)) {
        objectName = '';
      }
      let objectId = this.itemParamsObj.learningObject.code;
      if($.isEmptyObject(objectId)) {
          objectId = '';
      }

      interpretedStatement.json.object.id = objectId;
      interpretedStatement.json.object.definition.name.und = objectName;

      interpretedStatement.json.timestamp = this.getCurrentTimeISOStandard(dateTime);
      interpretedStatement.description = description;
      interpretedStatement.mode = mode;
      interpretedStatement.generatedTimestamp = this.getCurrentTime(dateTime);
      interpretedStatementsArray.push(interpretedStatement);

      this.adapterConfig.sendInterpretedStatements(this.id, interpretedStatementsArray);
    }

    /* Helper functions */

    getCurrentTimeISOStandard(date) {
      let timezoneOffsetMin = date.getTimezoneOffset(),
          offsetHrs = parseInt(Math.abs(timezoneOffsetMin / 60), 10),
          offsetMin = Math.abs(timezoneOffsetMin % 60),
          timezoneStandard;

      if(offsetHrs < 10) {
          offsetHrs = '0' + offsetHrs;
      }

      if(offsetMin < 10) {
          offsetMin = '0' + offsetMin;
      }

      // Add an opposite sign to the offset // If offset is 0, it means timezone is UTC
      // Timezone difference in hours and minutes // String such as +5:30 or -6:00 or Z
      if(timezoneOffsetMin < 0) {
          timezoneStandard = '+' + offsetHrs + ':' + offsetMin;
      } else if(timezoneOffsetMin > 0) {
          timezoneStandard = '-' + offsetHrs + ':' + offsetMin;
      } else if(timezoneOffsetMin === 0) {
          timezoneStandard = 'Z';
      }

      let dt = date,
      currentDate = dt.getDate(),
      currentMonth = dt.getMonth() + 1,
      currentYear = dt.getFullYear(),
      currentHrs = dt.getHours(),
      currentMins = dt.getMinutes(),
      currentSecs = dt.getSeconds(),
      currentMillisecs = dt.getMilliseconds(),
      currentDatetime;

      // Add 0 before date, month, hrs, mins or secs if they are less than 0
      currentDate = currentDate < 10 ? '0' + currentDate : currentDate;
      currentMonth = currentMonth < 10 ? '0' + currentMonth : currentMonth;
      currentHrs = currentHrs < 10 ? '0' + currentHrs : currentHrs;
      currentMins = currentMins < 10 ? '0' + currentMins : currentMins;
      currentSecs = currentSecs < 10 ? '0' + currentSecs : currentSecs;
      currentMillisecs = currentMillisecs < 10 ? '0' + currentMillisecs : currentMillisecs;
      currentMillisecs = currentMillisecs < 100 ? '0' + currentMillisecs : currentMillisecs;

      currentDatetime = currentYear + '-' + currentMonth + '-' + currentDate + 'T' + currentHrs + ':' + currentMins + ':' + currentSecs + '.' + currentMillisecs;

      return currentDatetime + timezoneStandard;
    }

    getCurrentTime(date) {
        let hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
        let amPm = date.getHours() >= 12 ? 'PM' : 'AM';
        hours = hours < 10 ? '0' + hours : hours;
        let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
        let seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
        let time = /* date.toLocaleDateString() + */ hours + ':' + minutes + ':' + seconds + ' ' + amPm;
        return time;
    }

    getDuration(dt) {
      let duration = 'PT';
      let secs = Math.floor(dt / 1000);
      let milliSecs = Math.floor((dt % 1000) / 10);
      let hrs = Math.floor(secs / 3600);
      let mins = Math.floor(secs % 3600 / 60);
      secs = Math.floor(secs % 3600 % 60);

      if(hrs !== 0) {
          duration += hrs + 'H' + mins + 'M' + secs + '.' + milliSecs + 'S';
      } else if(mins !== 0) {
          duration += mins + 'M' + secs + '.' + milliSecs + 'S';
      } else {
          duration += secs + '.' + milliSecs + 'S';
      }
      return duration;
    }
}

export default ContainerAdapter;
