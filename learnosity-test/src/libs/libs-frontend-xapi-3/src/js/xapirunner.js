/* global $ */
/* global visibly */

import 'script-loader!babel-polyfill/browser-polyfill.js';
import 'script-loader!visibly.js/visibly.js';
import 'script-loader!jschannel/src/jschannel.js';

/** container-adapter reference */
import ContainerAdapter from './container-adapter.js';
/** generic-container reference */
import GenericContainer from './generic-container.js';

let adaptermap = {};
let eventContextObj;

/**
 *  XAPIRunner initialization Class. Provides public functions
 *  -paintActivity()
 *  -captureContainerEvents()
 *  -generateCustomStatement()
 *  -containerInvocation()
 */
class XAPIRunner {

    /**  XAPIRunner CONSTRUCTOR FUNCTION
     *   @constructor
     *   @param {Object} initParams - Initialization parameters passed by platform. Include the following sets of parameters:
     *                   (a) paths {Object} - Contains key 'dependencyBase' - FQDN path for xAPIRunner dependencies
     *                   (b) userId {String}
     *                   (c) productId {String}
     *                   (d) classId {String}
     *                   (e) config {Object} - Optional config for timers and intervals.
     *                                         Contains key accTimeUnit, timeRecordingInterval, inactiveUserTimeThreshold, sendStateInterval and completedInterval.
     *   @param {Object} eventContext - Event handlers for receiving events from LO. (newState, newStatements, newInterpretedStatements, containerNotification).
     *   @param {Function} callback - To inform the container that constructor initiliazation is complete.
     */

    constructor(initParams, eventContext, callback = () => {}) {

        /** Platform or Container base path (shared/common dependencies) for bower components. */
        if (initParams && initParams.paths && initParams.paths.dependencyBase) {
            this.dependencyBase = `${initParams.paths.dependencyBase}/libs-frontend-xapi-3/`;
        } else {
            this.dependencyBase = '../';
        }

        /** Event Context Object. */
        eventContextObj = eventContext;

        if(initParams.config) {
          this.config = initParams.config;
        }
        if(initParams.userId) {
          this.userId = initParams.userId;
        }
        if(initParams.productId) {
          this.productId = initParams.productId;
        }
        if(initParams.classId) {
          this.classId = initParams.classId;
        }

        /** Inform the container that initialization is complete */
        callback();

    };

    /**
     *  Function used to paint the LO.
     *  @param {String} uniqueLOId - Unique LO/Item ID.
     *  @param {String} containerElementRef - DOM Element reference where the LO should launch itself.
     *  @param {Object} itemParams - Initialization parameters passed by platform. Include the following sets of parameters:
     *                   (a) learningObject {Object} - Contains keys 'path', 'name', 'code', 'contentType', 'state' and 'status'
     *                                               - Package path {String}, name {String}, code{String}, contentType, state and status respectively.
     *                                               - Supported contentType {String} - ext-cup-xapiscoreable.
     *                                               - State {Object} - State from where to launch/resume the LO.
     *                                               - Status {String} - not_started,in_complete, completed
     *                   (b) container {Object} - Contains keys type and config.
     *                                          - Supported type {String} - generic-content
     *                                          - config {Object} Contains various params to configure LO behaviour and tracking.
     *                                            - Contains disableLOButtons.
     *                                            - disableLOButtons - {Boolean} with default value false.
     *                   (c) LOInitParams {Object} - Content Initialization object, is returned to content in channel sendMessageToContainer - init event
     */

    paintActivity(uniqueLOId, containerElementRef, itemParams, LOInitParams) {

        let containerID = `#${containerElementRef}`;
        let iframeId = `#iframe_${uniqueLOId.replace(new RegExp('[/ ()]', 'g'), '-')}`;

        /** Setup Adapter */
        if($.isEmptyObject(adaptermap[uniqueLOId])) {
            const adapter = new ContainerAdapter(uniqueLOId);
            const activityadapter = adapter.getActivityAdapter({
              'iframeContainerId': containerID,
              'iframeId': iframeId,
              'sendStatements': this.sendStatements,
              'sendInterpretedStatements': this.sendInterpretedStatements,
              'sendState': this.sendState,
              'containerNotification': this.containerNotification,
              'notifyMessageFromContent': this.notifyMessageFromContent,
              'notifyMessageToContent': this.notifyMessageToContent,
              'errorHandler': this.errorHandler,
              'config': this.config,
              'userId': this.userId,
              'productId': this.productId,
              'classId': this.classId,
              'dependencyBase': this.dependencyBase
            });
            adaptermap[uniqueLOId] = activityadapter;
        }

        const myadapter = adaptermap[uniqueLOId];
        if(itemParams.container && itemParams.container.type === 'generic-content') {
          const genericContainer = new GenericContainer(uniqueLOId, this.dependencyBase, LOInitParams);
          genericContainer.launchLO(itemParams, myadapter, () => this.captureIframeEvents(uniqueLOId));
        }
    };

    /**
     * Function used to capture iFrame events - used in active time tracking.
     * @param {String} uniqueLOId
     */
    captureIframeEvents(uniqueLOId) {
      let adapter = adaptermap[uniqueLOId];

      $(adapter.adapterConfig.iframeId).on('load.loaded', () => {
        let iframe = $(adapter.adapterConfig.iframeId);
        let iframeContents = iframe.contents();

        iframe[0].contentWindow.onunload = () => {
            if(adapter.launched === true) {
              let containerMethod = (adapter.itemParamsObj.container.type === 'generic-content') ? 'generic_controls' : '';
              this.closeLO(uniqueLOId, {containerMethod});
            }
            $(adapter.adapterConfig.iframeId).unbind('load.loaded');
        };

        iframeContents.on('click', (e) => {
          adapter.eventOccured();
          if(eventContextObj && eventContextObj.containerNotification) {
            eventContextObj.containerNotification(uniqueLOId, 'iframeEvents', 'click');
          }
        });
        iframeContents.on('mousewheel', (e) => {
          adapter.eventOccured();
        });
        iframeContents.on('keydown', (e) => {
          adapter.eventOccured();
        });
        iframeContents.on('DOMMouseScroll', (e) => {
          adapter.eventOccured();
        });
        iframeContents.on('mousemove', (e) => {
          adapter.eventOccured();
        });
        iframeContents.on('touchstart', (e) => {
          adapter.eventOccured();
          if(eventContextObj && eventContextObj.containerNotification) {
            eventContextObj.containerNotification(uniqueLOId, 'iframeEvents', 'touchstart');
          }
        });
        iframeContents.on('touchend', (e) => {
          adapter.eventOccured();
        });
        iframeContents.on('touchmove', (e) => {
          adapter.eventOccured();
        });
        visibly.onVisible(() => {
          if(adapter.launched) {
            adapter.eventOccured();
          }
        });
        visibly.onHidden(() => {
          if(adapter.launched) {
            adapter.stopTimer();
          }
        });
      });
    };

    /**
     * Functions used to capture container events. APP calls this function to notify that the user is active.
     * @param {String} uniqueLOId
     */
    captureContainerEvents(uniqueLOId) {
      let adapter = adaptermap[uniqueLOId];
      if(adapter && adapter.eventOccured) {
        adapter.eventOccured();
      }
    };

    /**
     * Activity adapter notifies this function of statements which are then send to APP using eventContext object.
     * @param {String} uniqueLOId
     * @param {Array} statements
     */
    sendStatements(uniqueLOId, statements) {
      if(eventContextObj && eventContextObj.newStatements) {
          eventContextObj.newStatements(uniqueLOId, statements);
      }
    };

    /**
     * Activity adapter notifies this function of interpreted statements which are then send to APP using eventContext object.
     * @param {String} uniqueLOId
     * @param {Array} interpretedStatements
     */
    sendInterpretedStatements(uniqueLOId, interpretedStatements) {
      if(eventContextObj && eventContextObj.newInterpretedStatements) {
          eventContextObj.newInterpretedStatements(uniqueLOId, interpretedStatements);
      }
    };

    /**
     * Activity adapter notifies this function of new message from conmtent which are then send to APP using eventContext object.
     * @param {String} uniqueLOId
     * @param {Object} msgFromContent
     */
    notifyMessageFromContent(uniqueLOId, msgFromContent) {
      if(eventContextObj && eventContextObj.messageFromContent) {
          eventContextObj.messageFromContent(uniqueLOId, msgFromContent);
      }
    };

    /**
     * Activity adapter notifies this function of new message sent to content which are then send to APP using eventContext object.
     * @param {String} uniqueLOId
     * @param {Object} msgToContent
     */
    notifyMessageToContent(uniqueLOId, msgToContent) {
      if(eventContextObj && eventContextObj.messageToContent) {
          eventContextObj.messageToContent(uniqueLOId, msgToContent);
      }
    };

    /**
     * Activity adapter notifies this function of state which is then send to APP using eventContext object. Also, a callback is send along which deletes state
     * from local storage when adapter.launched is false that is the activity has been closed.
     * @param {String} uniqueLOId
     * @param {Object} state
     */
    sendState(uniqueLOId, state) {
      if(eventContextObj && eventContextObj.newState) {
          eventContextObj.newState(uniqueLOId, state);
      }
    };

    /**
     * Activity adapter notifies this function of events (ControlsChange, SizeChange) which are then send to APP using eventContext object.
     * @param {String} uniqueLOId
     * @param {String} containerEvent
     * @param {Object} containerEventData
     */
    containerNotification(uniqueLOId, containerEvent, containerEventData) {
      if(eventContextObj && eventContextObj.containerNotification) {
        eventContextObj.containerNotification(uniqueLOId, containerEvent, containerEventData);
      }
    }

    /**
     * Function called by APP to generate a custom statement.
     * @param {String} uniqueLOId
     * @param {String} verb
     * @param {Object} options
     */
    generateCustomStatement(uniqueLOId, verb, options = {}) {
      const adapter = adaptermap[uniqueLOId];
      $.extend(true, options, {
        description: verb,
        mode: 'Container'
      });
      adapter.generateStatement(verb, options);
    }

    /**
     * Function invoked by APP. When APP recieves a containerNotification, for instance checkAnswer control then onClick of the button,
     * APP again invokes this function to perfortm respective action.
     * @param {String} uniqueLOId
     * @param {String} containerMethod
     * @param {Object} containerMethodData
     */
    containerInvocation(uniqueLOId, containerMethod, containerMethodData) {
      const adapter = adaptermap[uniqueLOId];
      if(adapter && adapter.launched) {
        if(containerMethod === 'generic_controls') {
          let params = {
            type: containerMethodData.type
          };
          adapter.genericContainer.triggerLOControlEventListener(params, adapter);
        }
      } else {
        if(containerMethodData.type === 'close') {
          this.closeLO(uniqueLOId, {containerMethod});
        }
      }
    }

    simulateAction(uniqueLOId, containerMethod, data) {
      const adapter = adaptermap[uniqueLOId];
      if(adapter && adapter.launched) {
        if(containerMethod === 'generic_controls') {
          adapter.genericContainer.triggerLOControlEventListener(data, adapter);
        }
      }
    }

    /* Function called to close LO */
    closeLO(uniqueLOId, options) {
      const adapter = adaptermap[uniqueLOId];

      let removeIframe = () => {
        if(adapter && adapter.adapterConfig && adapter.adapterConfig.iframeId) {
          let iframeId = adapter.adapterConfig.iframeId;
          if($(iframeId).length) {
              $(iframeId).remove();
          }
        }
      };

      if(adapter && adapter.launched) {
        if(options.containerMethod === 'generic_controls') {
          adapter.generateStatement('closed', {description: 'Closed', mode: 'Container'});
          this.containerNotification(uniqueLOId, options.containerMethod, 'activityClosed');
        }
      } else {
          removeIframe();
          this.containerNotification(uniqueLOId, options.containerMethod, 'activityClosed');
      }
    }

    errorHandler(uniqueLOId, err) {
      if (eventContextObj && eventContextObj.errorHandler) {
        eventContextObj.errorHandler(uniqueLOId, err);
      }
    }
}

export default XAPIRunner;
