/*global LearnosityAmd*/
LearnosityAmd.define([], function () {
    'use strict';
    import { XAPIRunner } from "./libs/libs-frontend-xapi-3/dist/js/xapirunner";
    const state = { xapiLO1: XAPIRunner }
    let uniqueLOId = '1519132651151/1519132667943'; // Unique LO Id.

    function LeonardoQuestion(init, lrnUtils) {
        this.init = init;
        this.lrnUtils = lrnUtils;
        this.question = init.question;
        this.$el = init.$el;
        this.$el[0].innerHTML = "Learnosity <b>Demo</b>!";
        launchLO();
        init.events.trigger('ready');
    }

    function launchLO() {

        //Setup initialization params.
        var initParams = {
            "paths": {
                "dependencyBase": window.location.origin + "/libs", //FQDN path for xAPIRunner dependencies.
                "contentAssetBase": "./" //FQDN path for contentAssest dependencies.
            },
            "userId": "", //Unique User ID
            "productId": "", //Unique Product ID
            "classId": "" //Unique Class ID
        };

        var itemParams = {
            'learningObject': {
                'path': "http://192.168.1.2:5001",
                //   'path': 'https://cdn1.comprodls.com/cosmatt1-qa/products/biology_and_geology/1/assets/LO-Test4',
                'contentType': 'ext-cup-xapiscoreable',
                'code': '1519132851151', //Item-code
                'name': 'IC5_OWB_L0_U01_Ex01', //Optional.
                'status': 'not_started' //String - not_started/in_complete/completed
            },
            //Optionally specify container configurations.
            'container': {
                'type': "generic-content", //Possible types - generic-content
                'config': {
                    'disableLOButtons': true //Boolean. Default value - false.
                }
            }
        };

        //Setup event handlers for receiving events from LO.
        var eventCallbacks = {
            'newState': function (uniqueId, newState) {
                /*                   setItemState(productId, props.status.itemCode,newState).then((data)=>{
                                    props.currentState.setFetchedState(newState)
                                  }).catch(e=>console.log(e)) */
            },
            'newStatements': function (uniqueId, newStatements) {
                if (newStatements && newStatements.length) {
                    let event = newStatements[0].json.verb.display.und;
                    if (event == 'launched') {
                        callAction('currentScreen');
                        callAction('totalScreens');
                    }
                    else if (event == 'started') {
                    }
                }
            },
            'newInterpretedStatements': function (uniqueId, newInterpretedStatements, newInterpretedVerbs) {
                //   console.log('new interpreted statements received');
            },
            'newDimension': function (uniqueId, dimensions) {
                //   console.log('new dimension received');
            },
            'containerNotification': function (uniqueId, containerEvent, containerEventData) {
                if (containerEvent === 'generic_controls') {
                    /* updateBtnState(containerEventData); */
                }
            },
            messageFromContent: function (uniqueId, newMessageFromContent) {
                // console.log("message from content: ", uniqueId, newMessageFromContent);
                if (newMessageFromContent && newMessageFromContent.length) {
                    let containerEvent = newMessageFromContent[0].request.type;
                    let containerEventData = newMessageFromContent[0].request.data;
                    if (containerEvent === 'showResult') {
                        callAction("close");
                    }
                }
            },
            messageToContent: function (uniqueId, newMessageToContent) {
                // console.log("message to content: ", uniqueId, newMessageToContent);
                if (newMessageToContent && newMessageToContent.length) {
                    let containerEvent = newMessageToContent[0].request.type;
                    let containerEventData = newMessageToContent[0].response;
                    console.log("messageToContent", containerEvent + " ,data: " + containerEventData);
                }
            }
        };

        var containerElementRef = 'container-lo'; //Unique Container Id.

        // Initialize XAPIRunner Instance & setup event handlers.
        state.xapiLO1 = new XAPIRunner(initParams, eventCallbacks, function () {
            //    console.log("XapiRunner Callback Function ")
        });
        // Initialize and paint the activity.
        state.xapiLO1.paintActivity(uniqueLOId, this.$el[0], itemParams, { id: 1519132851151, loWithoutControls: true, state: null });
        //  setState({...state});

    }

    function callAction(action) {
        state.xapiLO1.containerInvocation(uniqueLOId, "generic_controls", { type: action });
    }

    return {
        Question: LeonardoQuestion
    };
});
