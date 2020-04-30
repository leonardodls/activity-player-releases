let accTimeUnit;
let timeRecordingInterval;
let inactiveUserTimeThreshold;
let inactiveUserTime;

let accTimeCounter;
let timeRecordingCounter;
let accTimeInterval;

startTimer = function() {
    try {
        accTimeInterval = setInterval(function() {
            inactiveUserTime++;
            accTimeCounter--;
            if(!accTimeCounter) {
                accTimeCounter = accTimeUnit;
                postMessage('storeAccTime');
            }

            timeRecordingCounter--;
            if(!timeRecordingCounter || inactiveUserTime === inactiveUserTimeThreshold) {
                postMessage('publishSavedResults');
            }
            if(!timeRecordingCounter) {
                timeRecordingCounter = timeRecordingInterval;
            }

            if(inactiveUserTime === inactiveUserTimeThreshold) {
                stopTimer();
            }
        }, 1000);
    } catch(e) {
        console.log("Error: " + e);
    }
}

onmessage = function(initParams) {
    if(initParams.data === 'stopTimer') {
        stopTimer();
    } else {
        if(initParams.data.accTimeUnit) {
            accTimeUnit = initParams.data.accTimeUnit;
            accTimeCounter = accTimeUnit;
        }
        if(initParams.data.timeRecordingInterval) {
            timeRecordingInterval = initParams.data.timeRecordingInterval;
            timeRecordingCounter = timeRecordingInterval;
        }
        if(initParams.data.inactiveUserTimeThreshold) {
            inactiveUserTimeThreshold = initParams.data.inactiveUserTimeThreshold;
        }
        if(initParams.data.hasOwnProperty('inactiveUserTime')) {
            inactiveUserTime = initParams.data.inactiveUserTime;
        }
        if(!accTimeInterval) {
            //accTimeCounter = accTimeUnit;
            //timeRecordingCounter = timeRecordingInterval;
            startTimer();
        }
    }
}

stopTimer = function() {
    if(accTimeInterval && clearInterval) {
        clearInterval(accTimeInterval);
        accTimeInterval = undefined;
    }
}
