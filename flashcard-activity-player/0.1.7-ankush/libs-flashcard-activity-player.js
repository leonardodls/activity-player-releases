(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["libs-flashcard-activity-player"] = factory(require("react"), require("react-dom"));
	else
		root["libs-flashcard-activity-player"] = factory(root["react"], root["react-dom"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/libs-base-activity-player/src/EventManager/event-args.ts":
/*!*******************************************************************************!*\
  !*** ./node_modules/libs-base-activity-player/src/EventManager/event-args.ts ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var EventArgs = /** @class */ (function () {
    function EventArgs(args) {
        this.launchId = args.launchId;
        this.type = args.type;
    }
    return EventArgs;
}());
exports.EventArgs = EventArgs;
var SubmitEventArgs = /** @class */ (function (_super) {
    __extends(SubmitEventArgs, _super);
    function SubmitEventArgs(args) {
        var _this = _super.call(this, args) || this;
        _this.response = args.response;
        return _this;
    }
    return SubmitEventArgs;
}(EventArgs));
exports.SubmitEventArgs = SubmitEventArgs;
var ReadyEventArgs = /** @class */ (function (_super) {
    __extends(ReadyEventArgs, _super);
    function ReadyEventArgs(args) {
        var _this = _super.call(this, args) || this;
        //Item Id for which this event has been triggered.
        _this.itemId = '';
        _this.playerInstance = args.playerInstance;
        return _this;
    }
    return ReadyEventArgs;
}(EventArgs));
exports.ReadyEventArgs = ReadyEventArgs;
var ErrorEventArgs = /** @class */ (function (_super) {
    __extends(ErrorEventArgs, _super);
    function ErrorEventArgs(args) {
        var _this = _super.call(this, args) || this;
        _this.error = args.exception;
        return _this;
    }
    return ErrorEventArgs;
}(EventArgs));
exports.ErrorEventArgs = ErrorEventArgs;
var InteractedEventArgs = /** @class */ (function (_super) {
    __extends(InteractedEventArgs, _super);
    function InteractedEventArgs(args) {
        var _this = _super.call(this, args) || this;
        _this.itemId = args.itemId;
        _this.itemPayload = args.itemPayload;
        return _this;
    }
    return InteractedEventArgs;
}(EventArgs));
exports.InteractedEventArgs = InteractedEventArgs;
var NavigationEventArgs = /** @class */ (function (_super) {
    __extends(NavigationEventArgs, _super);
    function NavigationEventArgs(args) {
        var _this = _super.call(this, args) || this;
        _this.previousItem = args.previousItem;
        _this.currentItem = args.currentItem;
        return _this;
    }
    return NavigationEventArgs;
}(EventArgs));
exports.NavigationEventArgs = NavigationEventArgs;
var SizeEventArgs = /** @class */ (function (_super) {
    __extends(SizeEventArgs, _super);
    function SizeEventArgs(args) {
        var _this = _super.call(this, args) || this;
        _this.size = args.size;
        return _this;
    }
    return SizeEventArgs;
}(EventArgs));
exports.SizeEventArgs = SizeEventArgs;


/***/ }),

/***/ "./node_modules/libs-base-activity-player/src/EventManager/event.enum.ts":
/*!*******************************************************************************!*\
  !*** ./node_modules/libs-base-activity-player/src/EventManager/event.enum.ts ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EVENTS = {
    ERROR: "error",
    INTERACTED: "interacted",
    LAUNCHED: "launched",
    SIZE: "size",
    READY: "ready",
    CHECK_ANSWER: "checkAnswer",
    RETRY: "retry",
    RESET: "reset",
    SUBMIT: "submit",
    HINT_CONSUMED: "hintConsumed",
    DESTROY: "destroy",
    ITEM_NAVIGATION: "itemNavigation",
    CHANGE: "change"
};


/***/ }),

/***/ "./node_modules/libs-base-activity-player/src/activity-state-service.ts":
/*!******************************************************************************!*\
  !*** ./node_modules/libs-base-activity-player/src/activity-state-service.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = __webpack_require__(/*! ./enums/enums */ "./node_modules/libs-base-activity-player/src/enums/enums.ts");
var ActivityStateService = /** @class */ (function () {
    function ActivityStateService(activityJson) {
        this.type = activityJson.type;
        this.subType = activityJson.subType;
        this.itemId = activityJson.itemId;
        this.itemMeta = new ItemMeta(activityJson.itemMeta);
        this.itemFragments = {};
        for (var itemFragment in activityJson.itemFragments) {
            this.itemFragments[itemFragment] = new ItemFragment(activityJson.itemFragments[itemFragment]);
        }
    }
    ActivityStateService.prototype.setActivityState = function (activityState) {
        if (activityState.itemId != this.itemId) {
            throw new Error("The given state doesn't belong to this activity. Please pass correct state.");
        }
        else if (this.itemMeta.getStatus() != enums_1.Status.COMPLETED) {
            if (activityState.itemMeta) {
                activityState.itemMeta.status ? this.itemMeta.setStatus(activityState.itemMeta.status) : null;
                activityState.itemMeta.selectedItemIndex ? this.itemMeta.setSelectedItemIndex(activityState.itemMeta.selectedItemIndex) : null;
            }
            if (activityState.itemFragments) {
                for (var itemFragment in activityState.itemFragments) {
                    if (this.itemFragments[itemFragment]) {
                        this.itemFragments[itemFragment].setState(activityState.itemFragments[itemFragment]);
                    }
                }
            }
        }
    };
    ActivityStateService.prototype.getActivityState = function () {
        return this;
    };
    ActivityStateService.prototype.setSelectedItemIndex = function (index) {
        this.itemMeta.setSelectedItemIndex(index);
    };
    ActivityStateService.prototype.getSelectedItemIndex = function () {
        return this.itemMeta.getSelectedItemIndex();
    };
    ActivityStateService.prototype.setActivityScore = function (score) {
        this.itemMeta.setScore(score);
        this.itemMeta.setStatus(enums_1.Status.COMPLETED);
    };
    ActivityStateService.prototype.getActivityScore = function () {
        return this.itemMeta.getScore();
    };
    ActivityStateService.prototype.getActivityStatus = function () {
        return this.itemMeta.getStatus();
    };
    ActivityStateService.prototype.setItemScore = function (itemFragmentId, itemScore) {
        if (this.checkItemUpdationStatus(itemFragmentId)) {
            this.itemFragments[itemFragmentId].setItemScore(itemScore);
        }
    };
    ActivityStateService.prototype.getItemScore = function (itemFragmentId) {
        return this.itemFragments[itemFragmentId].getItemScore();
    };
    ActivityStateService.prototype.setItemStatus = function (itemFragmentId, itemStatus) {
        if (this.getActivityStatus() != enums_1.Status.COMPLETED && this.itemFragments[itemFragmentId]) {
            this.itemFragments[itemFragmentId].setItemStatus(itemStatus);
        }
    };
    ActivityStateService.prototype.getItemStatus = function (itemFragmentId) {
        return this.itemFragments[itemFragmentId].getItemStatus();
    };
    ActivityStateService.prototype.setItemState = function (itemFragmentId, itemState) {
        if (this.checkItemUpdationStatus(itemFragmentId)) {
            this.itemFragments[itemFragmentId].setItemState(itemState);
            this.itemFragments[itemFragmentId].setItemStatus(enums_1.Status.INPROGRESS);
        }
    };
    ActivityStateService.prototype.getItemState = function (itemFragmentId) {
        return this.itemFragments[itemFragmentId].getItemState();
    };
    ActivityStateService.prototype.checkItemUpdationStatus = function (itemFragmentId) {
        return (this.getActivityStatus() != enums_1.Status.COMPLETED && this.itemFragments[itemFragmentId] != null
            && this.itemFragments[itemFragmentId].getItemStatus() != enums_1.Status.COMPLETED);
    };
    return ActivityStateService;
}());
exports.ActivityStateService = ActivityStateService;
var ItemMeta = /** @class */ (function () {
    function ItemMeta(itemMeta) {
        this.score = itemMeta.score;
        this.selectedItemIndex = itemMeta.selectedItemIndex || 0;
        this.status = itemMeta.status || enums_1.Status.INPROGRESS;
    }
    ItemMeta.prototype.setState = function (itemMeta) {
        itemMeta.score ? this.score = itemMeta.score : null;
        itemMeta.selectedItemIndex ? this.selectedItemIndex = itemMeta.selectedItemIndex : null;
        itemMeta.status ? this.status = itemMeta.status : null;
    };
    ItemMeta.prototype.setScore = function (score) {
        this.score = score;
    };
    ItemMeta.prototype.getScore = function () {
        return this.score;
    };
    ItemMeta.prototype.setSelectedItemIndex = function (selectedItemIndex) {
        this.selectedItemIndex = selectedItemIndex;
    };
    ItemMeta.prototype.getSelectedItemIndex = function () {
        return this.selectedItemIndex;
    };
    ItemMeta.prototype.setStatus = function (status) {
        this.status = status;
    };
    ItemMeta.prototype.getStatus = function () {
        return this.status;
    };
    return ItemMeta;
}());
var ItemFragment = /** @class */ (function () {
    function ItemFragment(itemFragment) {
        this.state = itemFragment.state;
        this.status = itemFragment.status || enums_1.Status.NOTSTARTED;
        this.score = itemFragment.score;
    }
    ItemFragment.prototype.setState = function (itemFragment) {
        itemFragment.state ? this.state = itemFragment.state : null;
        itemFragment.status ? this.status = itemFragment.status : null;
        itemFragment.score ? this.score = itemFragment.score : null;
    };
    ItemFragment.prototype.setItemState = function (state) {
        this.state = state;
    };
    ItemFragment.prototype.getItemState = function () {
        return this.state;
    };
    ItemFragment.prototype.setItemStatus = function (status) {
        this.status = status;
    };
    ItemFragment.prototype.getItemStatus = function () {
        return this.status;
    };
    ItemFragment.prototype.setItemScore = function (score) {
        this.score = score;
    };
    ItemFragment.prototype.getItemScore = function () {
        return this.score;
    };
    return ItemFragment;
}());


/***/ }),

/***/ "./node_modules/libs-base-activity-player/src/base-activity-player.ts":
/*!****************************************************************************!*\
  !*** ./node_modules/libs-base-activity-player/src/base-activity-player.ts ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var item_app_1 = __webpack_require__(/*! ./item-app */ "./node_modules/libs-base-activity-player/src/item-app.ts");
var event_enum_1 = __webpack_require__(/*! ./EventManager/event.enum */ "./node_modules/libs-base-activity-player/src/EventManager/event.enum.ts");
var EventArguments = __importStar(__webpack_require__(/*! ./EventManager/event-args */ "./node_modules/libs-base-activity-player/src/EventManager/event-args.ts"));
var activity_state_service_1 = __webpack_require__(/*! ./activity-state-service */ "./node_modules/libs-base-activity-player/src/activity-state-service.ts");
var enums_1 = __webpack_require__(/*! ./enums/enums */ "./node_modules/libs-base-activity-player/src/enums/enums.ts");
var BaseActivityPlayer = /** @class */ (function () {
    function BaseActivityPlayer() {
        this.items = [];
        // An Id to uniquely identify a particular launch of Item.
        this.launchId = '';
        this.container = null;
        // Creating an instance of Event Manager to be used inside Activity Player
        this.eventMgr = new LeonardoApp.EventEmitter;
        this.manageActivityState = true;
        this.firstItemIndexToLaunch = 0;
    }
    /**
     *
     * allowed init params are ( launchId, items [, container] [, options] )
     * container and options are optional params
     * @param launchId
     * @param items
     * @param args1
     * @param args2
     * options: http://jsoneditoronline.org/?id=041bd0acb8ff4fa49dbe0c2c45bb0d78
     */
    BaseActivityPlayer.prototype.init = function (launchId, activityJson, args1, args2) {
        var _this = this;
        this.launchId = launchId;
        this.activityJson = activityJson;
        if (this.manageActivityState) {
            /** Later on, at the time of creating instance of ActivityStateService itemFragments will not be initialized.
             *  Base Activity Player will iterate over item Fragments and setState of ItemFragments so that itemFragments
             *  will only contains the state of the items which are actually required.
             */
            this.activityStateService = new activity_state_service_1.ActivityStateService(activityJson);
        }
        if (args2) {
            this.container = args1;
            this.options = args2;
        }
        else {
            if (args1 instanceof HTMLElement) {
                this.container = args1;
            }
            else {
                this.options = args1;
            }
        }
        if (this.options && this.options.state) {
            this.setState(this.options.state);
        }
        this.firstItemIndexToLaunch = this.getFirstItemToLaunch();
        // Subscribing to events handler provided by the Consumer App.
        if (this.options && this.options.events) {
            for (var event_1 in this.options.events) {
                this.subscribe(event_1, this.options.events[event_1]);
            }
        }
        var events = this.getItemEvents();
        return new Promise(function (resolve, reject) {
            try {
                var self_1 = _this;
                var uiStyles = _this.options && _this.options.playerConfig && _this.options.playerConfig.uiStyles ? _this.options.playerConfig.uiStyles : null;
                if (activityJson) {
                    self_1.initItem(self_1.firstItemIndexToLaunch, activityJson, events, uiStyles).then(function () {
                        self_1.currentItem = self_1.items[self_1.firstItemIndexToLaunch];
                        resolve(self_1);
                    }).catch(function () {
                        var err = new Error('Invalid Item Json');
                        self_1.onErrorHandler(launchId, err);
                        reject(err);
                    });
                    self_1.initUnselectedItems(self_1.firstItemIndexToLaunch, activityJson, events, uiStyles);
                }
                else {
                    var err = new Error('Invalid Activity Json');
                    _this.onErrorHandler(launchId, err);
                    reject(err);
                }
            }
            catch (exception) {
                _this.onErrorHandler(launchId, exception);
            }
        });
    };
    ;
    BaseActivityPlayer.prototype.destroy = function () {
        var destroyEventArgs = {
            launchId: this.launchId,
            type: event_enum_1.EVENTS.DESTROY
        };
        this.eventMgr.emit(event_enum_1.EVENTS.DESTROY, new EventArguments.EventArgs(destroyEventArgs));
    };
    ;
    BaseActivityPlayer.prototype.subscribe = function (eventName, eventHandler) {
        // Register an event handler fn.
        this.eventMgr.on(eventName, eventHandler);
    };
    BaseActivityPlayer.prototype.unsubscribe = function (eventName, eventHandler) {
        // Remove an event listener.
        this.eventMgr.off(eventName, eventHandler);
    };
    BaseActivityPlayer.prototype.getItems = function () {
        // returns array of itemApp instances
        return this.items;
    };
    BaseActivityPlayer.prototype.getCurrentItem = function () {
        // return currentItem;
        return this.currentItem;
    };
    BaseActivityPlayer.prototype.getCurrentItemIndex = function () {
        return this.currentItem.index;
    };
    BaseActivityPlayer.prototype.getItem = function (itemIndex) {
        // returns the item object for given itemIndex
        // Returns Item Object
        return this.items[itemIndex];
    };
    BaseActivityPlayer.prototype.reset = function () {
        this.currentItem.reset();
        if (this.manageActivityState) {
            var itemFragmentId = this.getFragmentIdFromIndex(this.getCurrentItemIndex());
            this.activityStateService.setItemStatus(itemFragmentId, enums_1.Status.INPROGRESS);
            this.updateCurrentItemState();
        }
        var eventArgs = {
            launchId: this.launchId,
            type: event_enum_1.EVENTS.RESET
        };
        this.eventMgr.emit(event_enum_1.EVENTS.RESET, new EventArguments.EventArgs(eventArgs));
    };
    BaseActivityPlayer.prototype.save = function (callback) {
        // todo: saves user response to the Attempts Service
        // loop on _itmes        
        // call _item.save();
        // end loop
    };
    BaseActivityPlayer.prototype.submit = function (callback, options) {
        if (this.manageActivityState) {
            //Submit all the items if not submitted already
            var itemCount = this.getItemCount();
            for (var idx = 0; idx < itemCount; idx++) {
                var itemFragmentId = this.getFragmentIdFromIndex(idx);
                if (this.activityStateService.getItemStatus(itemFragmentId) != enums_1.Status.COMPLETED) {
                    var score = void 0;
                    if (this.items[idx]) {
                        var item = this.items[idx];
                        score = item.getScore();
                        this.activityStateService.setItemState(itemFragmentId, item.getState());
                    }
                    if (!score) {
                        score = this.getItemDefaultScore(idx);
                    }
                    this.activityStateService.setItemScore(itemFragmentId, score);
                    this.activityStateService.setItemStatus(itemFragmentId, enums_1.Status.COMPLETED);
                }
            }
        }
        this.submitActivity(callback);
    };
    BaseActivityPlayer.prototype.checkAnswer = function (callback, options) {
        var response = this.getCurrentItem().submit();
        if (response && this.manageActivityState) {
            var itemFragmentId = this.getFragmentIdFromIndex(this.getCurrentItemIndex());
            this.updateCurrentItemState();
            this.activityStateService.setItemStatus(itemFragmentId, enums_1.Status.COMPLETED);
        }
        var checkAnswerPayload = {
            launchId: this.launchId,
            type: event_enum_1.EVENTS.CHECK_ANSWER,
            status: response ? 'success' : 'error'
        };
        response ? checkAnswerPayload["response"] = { score: this.currentItem.getScore().score } : null;
        if (callback) {
            callback(checkAnswerPayload);
        }
        else {
            this.eventMgr.emit(event_enum_1.EVENTS.CHECK_ANSWER, new EventArguments.SubmitEventArgs(checkAnswerPayload));
        }
    };
    BaseActivityPlayer.prototype.retry = function (callback) {
        if (this.manageActivityState) {
            // Updating the Question State before calling the retry method as Item Player might provide a new state
            // from retry method which will be ingored by Activity State Service, if the Item's Status is completed.        
            var itemFragmentId = this.getFragmentIdFromIndex(this.getCurrentItemIndex());
            this.activityStateService.setItemStatus(itemFragmentId, enums_1.Status.INPROGRESS);
        }
        this.getCurrentItem().retry();
        if (callback) {
            callback();
        }
        else {
            var eventArgs = {
                launchId: this.launchId,
                type: event_enum_1.EVENTS.RETRY
            };
            this.eventMgr.emit(event_enum_1.EVENTS.RETRY, new EventArguments.EventArgs(eventArgs));
        }
        // launch new attempt
    };
    BaseActivityPlayer.prototype.getResponse = function () {
        if (this.manageActivityState) {
            var activityScore = {
                min: 0,
                max: 0,
                raw: 0,
                scaled: 0
            };
            var itemCount = this.getItemCount();
            for (var idx = 0; idx < itemCount; idx++) {
                var itemScore = this.activityStateService.getItemScore(this.getFragmentIdFromIndex(idx));
                if (!itemScore) {
                    var itemFragmentId = this.getFragmentIdFromIndex(idx);
                    itemScore = this.getItemDefaultScore(idx);
                    this.activityStateService.setItemScore(itemFragmentId, itemScore);
                }
                activityScore.min += itemScore.score.min / itemScore.score.max;
                activityScore.raw += itemScore.score.scaled;
            }
            activityScore.max = itemCount;
            activityScore.scaled = activityScore.raw / activityScore.max;
            return activityScore;
        }
        else {
            return {
                min: 0,
                max: this.getItemCount(),
                raw: 0,
                scaled: 0
            };
        }
    };
    BaseActivityPlayer.prototype.getState = function () {
        if (this.manageActivityState) {
            return JSON.parse(JSON.stringify(this.activityStateService.getActivityState()));
        }
    };
    BaseActivityPlayer.prototype.setState = function (state) {
        if (this.manageActivityState) {
            this.activityStateService.setActivityState(state);
            var itemCount = this.getItemCount();
            for (var idx = 0; idx < itemCount; idx++) {
                if (this.items[idx]) {
                    var questionState = this.activityStateService.getItemState(this.getFragmentIdFromIndex(idx));
                    var launchMode = this.isReviewMode() ? enums_1.LaunchModes.REVIEW : enums_1.LaunchModes.ATTEMPT;
                    this.items[idx].setState(questionState, launchMode);
                }
            }
        }
    };
    BaseActivityPlayer.prototype.getCurrentItemStatus = function () {
        var status = enums_1.Status.NOTSTARTED;
        if (this.manageActivityState) {
            var itemFragmentId = this.getFragmentIdFromIndex(this.getCurrentItemIndex());
            status = this.activityStateService.getItemStatus(itemFragmentId);
        }
        return status;
    };
    BaseActivityPlayer.prototype.destroyItems = function () {
        this.items.forEach(function (item) {
            item.destroy();
        });
        delete this.currentItem;
        this.items = [];
    };
    BaseActivityPlayer.prototype.updateCurrentItemState = function () {
        if (this.manageActivityState) {
            var itemFragmentId = this.getFragmentIdFromIndex(this.getCurrentItemIndex());
            this.activityStateService.setItemState(itemFragmentId, this.getCurrentItem().getState());
            this.activityStateService.setItemScore(itemFragmentId, this.getCurrentItem().getScore());
        }
    };
    // Error Handler to emit all error events from single point.
    BaseActivityPlayer.prototype.onErrorHandler = function (launchId, exception) {
        var errorEventArgs = {
            launchId: launchId,
            type: event_enum_1.EVENTS.ERROR,
            exception: exception
        };
        this.eventMgr.emit(event_enum_1.EVENTS.ERROR, new EventArguments.ErrorEventArgs(errorEventArgs));
    };
    BaseActivityPlayer.prototype.onInteractedHandler = function (payload) {
        if (this.manageActivityState) {
            var itemFragmentId = this.getFragmentIdFromIndex(this.getCurrentItemIndex());
            this.activityStateService.setItemState(itemFragmentId, payload.state);
        }
        var interactedEventArgs = {
            launchId: this.launchId,
            type: event_enum_1.EVENTS.CHANGE,
            state: this.getState()
        };
        this.eventMgr.emit(event_enum_1.EVENTS.CHANGE, new EventArguments.InteractedEventArgs(interactedEventArgs));
    };
    BaseActivityPlayer.prototype.onSizeHandler = function (payload) {
        var sizeEventArgs = {
            launchId: this.launchId,
            type: event_enum_1.EVENTS.INTERACTED,
            size: payload.size
        };
        this.eventMgr.emit(event_enum_1.EVENTS.SIZE, new EventArguments.SizeEventArgs(sizeEventArgs));
    };
    BaseActivityPlayer.prototype.onRedoHandler = function (payload) {
        if (this.manageActivityState) {
            var itemFragmentId = this.getFragmentIdFromIndex(this.getCurrentItemIndex());
            this.activityStateService.setItemState(itemFragmentId, this.currentItem.getState());
        }
    };
    /**
     *
     */
    BaseActivityPlayer.prototype.getItemEvents = function () {
        return {
            interacted: this.onInteractedHandler.bind(this),
            size: this.onSizeHandler.bind(this),
            error: this.onErrorHandler.bind(this),
            redo: this.onRedoHandler.bind(this)
        };
    };
    BaseActivityPlayer.prototype.getItemState = function (itemIndex) {
        var state = null;
        if (this.manageActivityState) {
            var fragID = this.getFragmentIdFromIndex(itemIndex);
            state = this.activityStateService.getItemState(fragID);
        }
        return state;
    };
    BaseActivityPlayer.prototype.displayHints = function () {
        return this.getCurrentItem().showHints();
    };
    // setter function to update currentItem property.
    BaseActivityPlayer.prototype.setCurrentItem = function (item) {
        this.currentItem = item;
        this.manageActivityState && this.activityStateService.setSelectedItemIndex(item.index);
    };
    // init one itemApp for each item
    BaseActivityPlayer.prototype.initUnselectedItems = function (selectedItemIndex, activityJson, events, uiStyles) {
        var itemCount = this.getItemCount();
        for (var idx = 0; idx < itemCount; idx++) {
            if (idx != selectedItemIndex) {
                this.initItem(idx, activityJson, events, uiStyles);
            }
        }
    };
    /**
     *
     * @param itemIndex
     * @param activityJson
     * @param events
     * @param uiStyles
     */
    BaseActivityPlayer.prototype.initItem = function (itemIndex, activityJson, events, uiStyles) {
        var itemApp = new item_app_1.ItemApp();
        var launchMode = this.isReviewMode() ? enums_1.LaunchModes.REVIEW : enums_1.LaunchModes.ATTEMPT;
        itemApp.setState(this.getItemState(itemIndex), launchMode);
        var itemFragID = this.getFragmentIdFromIndex(itemIndex);
        var itemFragment = activityJson.itemFragments[itemFragID];
        this.items[itemIndex] = itemApp;
        return itemApp.init(itemFragID, itemIndex, itemFragment.itemId, this.launchId, { events: events, uiStyle: uiStyles, eventMgr: this.eventMgr });
    };
    /**
     *
     * @param callback
     */
    BaseActivityPlayer.prototype.submitActivity = function (callback) {
        var activityScore = this.getResponse();
        this.manageActivityState && this.activityStateService.setActivityScore(activityScore);
        var submitPayload = {
            launchId: this.launchId,
            type: event_enum_1.EVENTS.SUBMIT,
            response: {
                score: activityScore
            }
        };
        if (callback) {
            callback(submitPayload);
        }
        else {
            this.eventMgr.emit(event_enum_1.EVENTS.SUBMIT, new EventArguments.SubmitEventArgs(submitPayload));
        }
    };
    /**
     *
     * @param activityJson
     * Returns the index of the first item to be launched
     */
    BaseActivityPlayer.prototype.getFirstItemToLaunch = function () {
        if (this.manageActivityState) {
            if (this.isReviewMode()) {
                return 0;
            }
            return this.activityStateService.getSelectedItemIndex();
        }
        else {
            return 0;
        }
    };
    BaseActivityPlayer.prototype.isReviewMode = function () {
        if (this.manageActivityState && this.activityStateService.getActivityStatus() == enums_1.Status.COMPLETED) {
            return true;
        }
        else {
            return false;
        }
    };
    BaseActivityPlayer.prototype.getFragmentIdFromIndex = function (itemIndex) {
        var retValue = "";
        if (this.items[itemIndex]) {
            retValue = this.items[itemIndex].uid;
        }
        else {
            retValue = this.getItemFragmentIdFromItemIndex(itemIndex);
        }
        return retValue;
    };
    return BaseActivityPlayer;
}());
exports.BaseActivityPlayer = BaseActivityPlayer;


/***/ }),

/***/ "./node_modules/libs-base-activity-player/src/enums/enums.ts":
/*!*******************************************************************!*\
  !*** ./node_modules/libs-base-activity-player/src/enums/enums.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Status;
(function (Status) {
    Status["NOTSTARTED"] = "NotStarted";
    Status["INPROGRESS"] = "InProgress";
    Status["COMPLETED"] = "Completed";
})(Status = exports.Status || (exports.Status = {}));
var LaunchModes;
(function (LaunchModes) {
    LaunchModes["ATTEMPT"] = "attempt";
    LaunchModes["REVIEW"] = "review";
})(LaunchModes = exports.LaunchModes || (exports.LaunchModes = {}));
var ScoreStatus;
(function (ScoreStatus) {
    ScoreStatus["CORRECT"] = "correct";
    ScoreStatus["INCORRECT"] = "incorrect";
    ScoreStatus["PARTIALLY_CORRECT"] = "partiallyCorrect";
})(ScoreStatus = exports.ScoreStatus || (exports.ScoreStatus = {}));
var CompletionStatus;
(function (CompletionStatus) {
    CompletionStatus["COMPLETE"] = "complete";
    CompletionStatus["INCOMPLETE"] = "incomplete";
    CompletionStatus["NOT_ATTEMPTED"] = "notAttempted";
})(CompletionStatus = exports.CompletionStatus || (exports.CompletionStatus = {}));


/***/ }),

/***/ "./node_modules/libs-base-activity-player/src/item-app.ts":
/*!****************************************************************!*\
  !*** ./node_modules/libs-base-activity-player/src/item-app.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var event_args_1 = __webpack_require__(/*! ./EventManager/event-args */ "./node_modules/libs-base-activity-player/src/EventManager/event-args.ts");
var event_enum_1 = __webpack_require__(/*! ./EventManager/event.enum */ "./node_modules/libs-base-activity-player/src/EventManager/event.enum.ts");
var utils_1 = __webpack_require__(/*! ./utilities/utils */ "./node_modules/libs-base-activity-player/src/utilities/utils.ts");
var enums_1 = __webpack_require__(/*! ./enums/enums */ "./node_modules/libs-base-activity-player/src/enums/enums.ts");
var ItemLifeCycleStates;
(function (ItemLifeCycleStates) {
    ItemLifeCycleStates[ItemLifeCycleStates["INITIAL"] = 0] = "INITIAL";
    ItemLifeCycleStates[ItemLifeCycleStates["LOADED"] = 1] = "LOADED";
    ItemLifeCycleStates[ItemLifeCycleStates["RENDERED"] = 2] = "RENDERED";
})(ItemLifeCycleStates || (ItemLifeCycleStates = {}));
var ItemApp = /** @class */ (function () {
    function ItemApp() {
        this.uid = "";
        this.index = -1;
        // Item Initialization is an asynchronous process
        // this flag helps itemApp determine the current state of the Item
        this.ItemLifeCycleState = ItemLifeCycleStates.INITIAL;
        // An Id to uniquely identify a particular launch of Item.
        this.launchId = '';
        this.state = null;
        this.launchMode = enums_1.LaunchModes.ATTEMPT;
        /**
         * This property is used to maintain the state of hints displayed for the item-player.
         * Later on, this state management will be moved inside item-player as it's item-player responsibility to maintain it.
         */
        this.isHintsDisplayed = false;
    }
    ItemApp.prototype.init = function (uid, index, item, launchId, options) {
        this.uid = uid;
        this.index = index;
        this.launchId = launchId;
        this.options = options;
        if (options && options.eventMgr) {
            this.eventMgr = options.eventMgr;
        }
        var self = this;
        return new Promise(function (resolve, reject) {
            self.fetchItemJSON(item)
                .then(function (item) {
                self.itemJSON = item;
                // loads the respective item renderer
                if (self.isItemJsonValid()) {
                    var itemModel = self.getItemModel(item);
                    return self.loadItemPlayer(itemModel);
                }
                else {
                    throw new Error("Invalid Item Json");
                }
            })
                .then(function (player) {
                self.itemPlayer = new player();
                self.ItemLifeCycleState = ItemLifeCycleStates.LOADED;
                resolve();
            })
                .catch(function (err) {
                self.errorHandler(launchId, err);
                reject();
            });
        });
    };
    ItemApp.prototype.render = function (container) {
        var options = {
            events: this.options.events,
            uiStyle: this.options.uiStyle,
            playerButtons: { visible: false }
        };
        options.uiStyle = new Object(options.uiStyle);
        options.uiStyle['widgetStyles'] = {
            "box-shadow": "none",
            "border": "none"
        };
        var self = this;
        return new Promise(function (resolve, reject) {
            if (self.ItemLifeCycleState == ItemLifeCycleStates.LOADED) {
                self.renderItemPlayer(container, options);
                resolve(self);
            }
            else {
                // waits for init (loading of item JSON and Player) of item to complete
                var inv_1 = setInterval(function () {
                    if (self.ItemLifeCycleState == ItemLifeCycleStates.LOADED) {
                        clearInterval(inv_1);
                        self.renderItemPlayer(container, options);
                        resolve(self);
                    }
                }, 50);
            }
        });
    };
    ItemApp.prototype.save = function () {
        // todo: saves user response to the Attempts Service
    };
    ItemApp.prototype.submit = function () {
        var response = false;
        var options = { displayFeedback: true };
        if (this.ItemLifeCycleState == ItemLifeCycleStates.RENDERED) {
            response = this.itemPlayer.validateResponse(options);
            // lock the Item Player if the response is true
            if (response) {
                this.itemPlayer.lock();
            }
        }
        return response;
    };
    ItemApp.prototype.retry = function () {
        try {
            // launch new attempt
            if (this.ItemLifeCycleState == ItemLifeCycleStates.RENDERED) {
                this.itemPlayer.redo({ retainUserResponse: true });
                this.itemPlayer.unlock();
            }
        }
        catch (exception) {
            this.errorHandler(this.launchId, exception);
        }
    };
    ItemApp.prototype.reset = function () {
        try {
            if (this.ItemLifeCycleState == ItemLifeCycleStates.RENDERED) {
                this.itemPlayer.redo();
            }
        }
        catch (exception) {
            this.errorHandler(this.launchId, exception);
        }
    };
    ItemApp.prototype.resetDimensions = function () {
        if (this.ItemLifeCycleState == ItemLifeCycleStates.RENDERED) {
            this.itemPlayer.resetDimensions();
        }
    };
    // display hints for the current item
    // returns remaining hints count
    ItemApp.prototype.showHints = function () {
        if (this.ItemLifeCycleState == ItemLifeCycleStates.RENDERED) {
            this.isHintsDisplayed = true;
            return this.itemPlayer.showHints();
        }
    };
    // hide hints from the current item
    ItemApp.prototype.hideHints = function () {
        if (this.ItemLifeCycleState == ItemLifeCycleStates.RENDERED) {
            this.isHintsDisplayed = false;
            this.itemPlayer.hideHints();
        }
    };
    // returns if the current item has hints
    ItemApp.prototype.hasHints = function () {
        if (this.ItemLifeCycleState >= ItemLifeCycleStates.LOADED) {
            return this.itemPlayer.hasHints();
        }
        else {
            return false;
        }
    };
    // returns the count of remaining hints
    ItemApp.prototype.remainingHints = function () {
        if (this.ItemLifeCycleState >= ItemLifeCycleStates.LOADED) {
            return this.itemPlayer.remainingHints();
        }
        else {
            return 0;
        }
    };
    /**
     *
     */
    ItemApp.prototype.destroy = function () {
        try {
            if (this.ItemLifeCycleState >= ItemLifeCycleStates.LOADED) {
                //resetting ItemLifeCycleState to ItemLifeCycleStates.LOADED so that it can be re-rendered if required.
                this.ItemLifeCycleState = ItemLifeCycleStates.LOADED;
                this.itemPlayer.destroy();
            }
        }
        catch (exception) {
            this.errorHandler(this.launchId, exception);
        }
    };
    ItemApp.prototype.focalise = function () {
        try {
            if (this.ItemLifeCycleState == ItemLifeCycleStates.RENDERED) {
                this.itemPlayer.focalise();
            }
        }
        catch (exception) {
            this.errorHandler(this.launchId, exception);
        }
    };
    // Function to hide Item Player
    ItemApp.prototype.hide = function () {
        if (this.ItemLifeCycleState == ItemLifeCycleStates.RENDERED) {
            this.itemPlayer.hide();
        }
    };
    // Function to show Item Player
    ItemApp.prototype.show = function () {
        if (this.ItemLifeCycleState == ItemLifeCycleStates.RENDERED) {
            this.itemPlayer.show();
        }
    };
    /**
     * Return the state of the item based on the passed mode.
     */
    ItemApp.prototype.getState = function () {
        if (this.ItemLifeCycleState == ItemLifeCycleStates.RENDERED) {
            return this.itemPlayer.getState();
        }
        else {
            return this.state;
        }
    };
    /**
     * This method can be used to set the state of an item programmatically.
     * This method is expected to be used by a Consumer App, which saves the user attempts data with itself
     * and not on the LeonardoDLS™ Attempts Service, for restoring a user response state.
     * @param state
     * @param launchMode
     */
    ItemApp.prototype.setState = function (state, launchMode) {
        if (state || launchMode == enums_1.LaunchModes.REVIEW) {
            if (this.ItemLifeCycleState == ItemLifeCycleStates.RENDERED) {
                this.itemPlayer.setState(state, launchMode);
            }
            else {
                this.state = state;
                this.launchMode = launchMode;
            }
        }
    };
    /**
     *
     */
    ItemApp.prototype.getOptimumDimensions = function () {
        if (this.ItemLifeCycleState == ItemLifeCycleStates.RENDERED) {
            return this.itemPlayer.getOptimumDimensions();
        }
        else {
            return {
                height: 0,
                width: 0
            };
        }
    };
    /**
     *
     */
    ItemApp.prototype.canShowAnswer = function () {
        if (this.ItemLifeCycleState >= ItemLifeCycleStates.LOADED) {
            return this.itemPlayer.canShowAnswer();
        }
        else {
            return false;
        }
    };
    ItemApp.prototype.getScore = function () {
        var scoreResp = null;
        if (this.ItemLifeCycleState >= ItemLifeCycleStates.LOADED) {
            scoreResp = this.itemPlayer.getScore();
        }
        return scoreResp;
    };
    ItemApp.prototype.hasUserResponse = function () {
        if (this.ItemLifeCycleState >= ItemLifeCycleStates.LOADED) {
            return this.itemPlayer.hasUserResponse();
        }
        else {
            return false;
        }
    };
    ItemApp.prototype.hideAnswer = function () {
        if (this.ItemLifeCycleState == ItemLifeCycleStates.RENDERED) {
            this.itemPlayer.hideAnswer();
        }
    };
    ItemApp.prototype.showAnswer = function () {
        if (this.ItemLifeCycleState == ItemLifeCycleStates.RENDERED) {
            this.itemPlayer.showAnswer();
        }
    };
    /**
     * Returns true if the item json provided is valid otherwise false
     */
    ItemApp.prototype.isItemJsonValid = function () {
        // Check if item json exist and the value of type is 'item'. Also check if subType is present and is not an empty string.
        if (this.itemJSON && this.itemJSON.type == "item" && this.itemJSON.subType) {
            return true;
        }
        return false;
    };
    /**
     *
     * @param item
     */
    ItemApp.prototype.fetchItemJSON = function (item) {
        var self = this;
        return new Promise(function (resolve, reject) {
            if (typeof item == "object") {
                resolve(item);
            }
            else if (utils_1.isURL(item)) {
                fetch(item)
                    .then(function (res) { return res.json(); })
                    .then(function (itemJSON) { return resolve(itemJSON); })
                    .catch(function (err) {
                    self.errorHandler(event_enum_1.EVENTS.ERROR, err);
                    reject(err);
                });
            }
            else if (typeof item == "string") {
                // uses itemsAPI to fetch item JSON
                var itemsAPI = LeonardoApp.Services.get("items");
                itemsAPI
                    .getItem(item)
                    .then(function (item) {
                    if (!item.message) {
                        resolve(item);
                    }
                    else {
                        throw new Error(item.message);
                    }
                })
                    .catch(function (err) {
                    self.errorHandler(event_enum_1.EVENTS.ERROR, err);
                    reject(err);
                });
            }
        });
    };
    ItemApp.prototype.getItemModel = function (itemJSON) {
        return itemJSON.subType;
    };
    ItemApp.prototype.loadItemPlayer = function (itemModel) {
        var self = this;
        var playerLoader = LeonardoApp.PlayerLoader;
        return new Promise(function (resolve, reject) {
            if (playerLoader) {
                playerLoader.loadPlayer(itemModel)
                    .then(function (player) { return resolve(player); })
                    .catch(function (err) {
                    self.errorHandler(event_enum_1.EVENTS.ERROR, err);
                    reject();
                });
            }
            else {
                self.errorHandler(event_enum_1.EVENTS.ERROR, "Module Loader not available");
                reject();
            }
        });
    };
    // Error Handler to emit all error events from single point.
    ItemApp.prototype.errorHandler = function (launchId, exception) {
        var errorEventArgs = {
            launchId: launchId,
            type: event_enum_1.EVENTS.ERROR,
            exception: exception
        };
        this.eventMgr.emit(event_enum_1.EVENTS.ERROR, new event_args_1.ErrorEventArgs(errorEventArgs));
    };
    /**
     *
     * @param uid Unique Identifier
     * @param itemJSON
     * @param container HTML Conatiner in which Item is to be rendered
     * @param options InitOptions required to laucnh the item
     */
    ItemApp.prototype.renderItemPlayer = function (container, options) {
        // render the item in container and call the callback when rendering is done
        this.itemPlayer.initItem(this.uid, this.itemJSON, container, options);
        this.ItemLifeCycleState = ItemLifeCycleStates.RENDERED;
        if (this.launchMode == enums_1.LaunchModes.REVIEW || this.state != null) {
            this.setState(this.state, this.launchMode);
        }
    };
    //===============Futuristic Functions==============================================    
    ItemApp.prototype.subscribe = function (eventName, eventHandler) { };
    ItemApp.prototype.unsubscribe = function (eventName, eventHandler) { };
    return ItemApp;
}());
exports.ItemApp = ItemApp;


/***/ }),

/***/ "./node_modules/libs-base-activity-player/src/utilities/utils.ts":
/*!***********************************************************************!*\
  !*** ./node_modules/libs-base-activity-player/src/utilities/utils.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Function to test if the given string is an URL or not.
 *
 * We are accepting the URL's created by considering the below provided format:
 * scheme:[//[user:password@]host[:port]]path[?query]
 *
 * Ref: 1. https://www.urlencoder.io/learn/
 *      2. https://tools.ietf.org/html/rfc3986
 * @param url
 */
function isURL(url) {
    // regular expression of URL.
    var urlRegex = new RegExp('(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])', 'i');
    return urlRegex.test(url);
}
exports.isURL = isURL;


/***/ }),

/***/ "./src/components/activity-player/flashcard-activity.component.tsx":
/*!*************************************************************************!*\
  !*** ./src/components/activity-player/flashcard-activity.component.tsx ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(/*! react */ "react"));
var item_container_component_1 = __webpack_require__(/*! ../item-player/item-container.component */ "./src/components/item-player/item-container.component.tsx");
var enums_1 = __webpack_require__(/*! ../../utils/enums */ "./src/utils/enums.ts");
var react_dom_1 = __webpack_require__(/*! react-dom */ "react-dom");
var FlashCardActivityComponent = /** @class */ (function (_super) {
    __extends(FlashCardActivityComponent, _super);
    function FlashCardActivityComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.isRenderingComplete = false;
        _this.selectedSectionIndex = props.startingSectionIndex;
        _this.ref = react_1.default.createRef();
        _this.fapVersion = "0.0.5";
        return _this;
    }
    FlashCardActivityComponent.prototype.render = function () {
        this.props.callback.registerChildComp(enums_1.Components.ACTIVITY_PLAYER, this);
        var isButtonBarVisible = false;
        var itemContainerCallback = {
            registerChildComp: this.registerChildComp.bind(this),
            renderItem: this.props.callback.renderItem,
            destroyItem: this.props.callback.destroyItem,
            getItemCountInSection: this.props.callback.getItemCountInSection,
            getItemIndex: this.props.callback.getItemIndex,
            itemNavigated: this.itemNavigated.bind(this),
            onItemRendered: this.onItemRendered.bind(this),
            sectionOver: this.sectionOver.bind(this)
        };
        return (react_1.default.createElement("div", { ref: this.ref, "fcp-version": this.fapVersion, className: 'activity-player-container', "data-tid": 'container-flashcard-activity-player' },
            react_1.default.createElement(item_container_component_1.ItemContainerComponent, { startingSectionIndex: this.props.startingSectionIndex, startingCardIndex: this.props.startingCardIndex, callback: itemContainerCallback })));
    };
    /**
     * Function to register child component instances with parent.
     * @param compType
     * @param instance
     */
    FlashCardActivityComponent.prototype.registerChildComp = function (compType, instance) {
        switch (compType) {
            case enums_1.Components.ITEM_PLAYER: {
                this.itemContainerComp = instance;
                break;
            }
            case enums_1.Components.BUTTON_BAR: {
                this.buttonBarComp = instance;
                break;
            }
            case enums_1.Components.LOADER: {
                this.loaderComp = instance;
                break;
            }
        }
    };
    /**
     * Destroy the Activity Player and it's children
     */
    FlashCardActivityComponent.prototype.destroy = function () {
        this.itemContainerComp.destroy();
        this.itemContainerComp = null;
        this.buttonBarComp = null;
        var Nothing = function () { return null; };
        react_dom_1.render(react_1.default.createElement(Nothing, null), document.body);
    };
    FlashCardActivityComponent.prototype.onItemNavigation = function (navigationDirection) {
        var currentItemIndex = this.props.callback.getCurrentItemIndex();
        switch (navigationDirection) {
            case enums_1.NavigationDirection.NEXT: {
                if (this.props.callback.getItems()[currentItemIndex + 1]) {
                    this.itemContainerComp.goToNextCard();
                }
                else {
                    console.log('Already on Last Item');
                }
                break;
            }
            case enums_1.NavigationDirection.PREVIOUS: {
                if (this.props.callback.getItems()[currentItemIndex - 1]) {
                    this.itemContainerComp.goToPreviousCard();
                }
                else {
                    console.log('Already on First Item');
                }
                break;
            }
        }
    };
    FlashCardActivityComponent.prototype.onItemRendered = function () {
        if (!this.isRenderingComplete) {
            this.isRenderingComplete = true;
            this.props.callback.launchedEventHandler();
        }
    };
    /**
     * Emits a Navigation Event whenever item navigation is performed
     * @param navigationType
     */
    FlashCardActivityComponent.prototype.itemNavigated = function (navigationType) {
        var itemsArray = this.props.callback.getItems();
        var lastCurrentItem = this.props.callback.getCurrentItem();
        var newCurrentItem;
        switch (navigationType.direction) {
            case enums_1.NavigationDirection.NEXT: {
                newCurrentItem = itemsArray[lastCurrentItem.index + 1];
                break;
            }
            case enums_1.NavigationDirection.PREVIOUS: {
                newCurrentItem = itemsArray[lastCurrentItem.index - 1];
                break;
            }
        }
        if (newCurrentItem) {
            this.props.callback.setCurrentItem(newCurrentItem);
            this.props.callback.navigationEventHandler(lastCurrentItem, newCurrentItem);
        }
    };
    /**
     *
     * @param navigationDirection
     */
    FlashCardActivityComponent.prototype.sectionOver = function (navigationDirection) {
        switch (navigationDirection.direction) {
            case enums_1.NavigationDirection.NEXT: {
                this.renderNextSection();
                break;
            }
            case enums_1.NavigationDirection.PREVIOUS: {
                this.renderPreviousSection();
                break;
            }
        }
    };
    /**
     * this function render next section when goToNextCard called on the last card of the current section.
     */
    FlashCardActivityComponent.prototype.renderNextSection = function () {
        if (this.selectedSectionIndex < this.props.totalSections - 1) {
            this.selectedSectionIndex = this.selectedSectionIndex + 1;
            this.itemContainerComp.renderNextStack(this.selectedSectionIndex);
        }
        else {
            this.props.callback.submitEventHandler();
        }
    };
    /**
     * this function render previous section when goTONextcard is called on the first card of the current section
     */
    FlashCardActivityComponent.prototype.renderPreviousSection = function () {
        if (this.selectedSectionIndex != 0) {
            this.selectedSectionIndex = this.selectedSectionIndex - 1;
            this.itemContainerComp.renderPreviousStack(this.selectedSectionIndex);
        }
    };
    return FlashCardActivityComponent;
}(react_1.Component));
exports.FlashCardActivityComponent = FlashCardActivityComponent;


/***/ }),

/***/ "./src/components/item-player/item-container.component.tsx":
/*!*****************************************************************!*\
  !*** ./src/components/item-player/item-container.component.tsx ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(/*! react */ "react"));
var enums_1 = __webpack_require__(/*! ../../utils/enums */ "./src/utils/enums.ts");
var stackedCard_1 = __importDefault(__webpack_require__(/*! ../../libs/stacked-card/stackedCard */ "./src/libs/stacked-card/stackedCard.ts"));
var ItemContainerComponent = /** @class */ (function (_super) {
    __extends(ItemContainerComponent, _super);
    function ItemContainerComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isRenderingComplete = false;
        return _this;
    }
    ItemContainerComponent.prototype.componentDidMount = function () {
        this.stackedCardInstance = new stackedCard_1.default(this.ref.current.parentElement);
        this.stackedCardInstance.on(enums_1.CARD_EVENTS.DESTROY, this.props.callback.destroyItem);
        this.stackedCardInstance.on(enums_1.CARD_EVENTS.ITEM_NAVIGATON, this.props.callback.itemNavigated);
        this.stackedCardInstance.on(enums_1.CARD_EVENTS.SECTION_OVER, this.props.callback.sectionOver);
        this.renderSection(this.props.startingSectionIndex, this.props.startingCardIndex);
        this.stackedCardInstance.createStackedCard(this.ref.current, this.props.startingCardIndex);
    };
    ItemContainerComponent.prototype.render = function () {
        this.props.callback.registerChildComp(enums_1.Components.ITEM_PLAYER, this);
        this.ref = react_1.default.createRef();
        return (react_1.default.createElement("div", { className: "item-player-container" },
            react_1.default.createElement("div", { className: "item-player-stacked-cards-container", ref: this.ref })));
    };
    ItemContainerComponent.prototype.destroy = function () {
        this.stackedCardInstance.destroy();
        this.stackedCardInstance = null;
        this.stackedCardInstance.off(enums_1.CARD_EVENTS.DESTROY);
        this.stackedCardInstance.off(enums_1.CARD_EVENTS.ITEM_NAVIGATON);
        this.stackedCardInstance.off(enums_1.CARD_EVENTS.SECTION_OVER);
    };
    ItemContainerComponent.prototype.renderSection = function (sectionIndex, startingIndex, isPrevious) {
        var _this = this;
        if (startingIndex === void 0) { startingIndex = 0; }
        if (isPrevious === void 0) { isPrevious = false; }
        var itemCountInSection = this.props.callback.getItemCountInSection(sectionIndex);
        for (var i = 0; i <= itemCountInSection - 1; i++) {
            var translateY = isPrevious ? "-1000" : i < startingIndex ? "-1000" : "1000";
            var itemIndex = this.props.callback.getItemIndex(sectionIndex, i);
            var itemContainer = this.createItemContainer(itemIndex, translateY);
            this.props.callback.renderItem(itemIndex, itemContainer)
                .then(function (itemInstance) {
                _this.props.callback.onItemRendered();
            });
        }
    };
    /**
     * Function to create the DOM container in which item-player will be rendered.
     * @param itemIndex
     */
    ItemContainerComponent.prototype.createItemContainer = function (itemIndex, translateY) {
        var container = document.createElement('div');
        container.style.height = '100%';
        container.style.width = '100%';
        container.style.position = 'absolute';
        container.style.webkitTransform = ' translateX(0) translateY(' + translateY + 'px) translateZ(0)';
        container.setAttribute('index', itemIndex);
        container.setAttribute('data-tid', 'container-card-' + (itemIndex + 1));
        this.ref.current.appendChild(container);
        return container;
    };
    /**
     *
     * @param index render Next section when items on current section gets over
     */
    ItemContainerComponent.prototype.renderNextStack = function (index) {
        this.renderSection(index);
        this.stackedCardInstance.createStackedCard(this.ref.current);
    };
    /**
     *
     * @param index render previous section
     */
    ItemContainerComponent.prototype.renderPreviousStack = function (index) {
        var itemCountInSection = this.props.callback.getItemCountInSection(index);
        this.renderSection(index, itemCountInSection - 1, true);
        this.stackedCardInstance.createStackedCard(this.ref.current, itemCountInSection - 1);
    };
    /**
     * goes to next card on current section
     */
    ItemContainerComponent.prototype.goToNextCard = function () {
        this.stackedCardInstance.goToNextCard();
    };
    /**
     * go to previous card on current section
     */
    ItemContainerComponent.prototype.goToPreviousCard = function () {
        this.stackedCardInstance.goToPreviousCard();
    };
    return ItemContainerComponent;
}(react_1.Component));
exports.ItemContainerComponent = ItemContainerComponent;


/***/ }),

/***/ "./src/container/flashcard-activity-container.tsx":
/*!********************************************************!*\
  !*** ./src/container/flashcard-activity-container.tsx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var base_activity_player_1 = __webpack_require__(/*! libs-base-activity-player/src/base-activity-player */ "./node_modules/libs-base-activity-player/src/base-activity-player.ts");
var flashcard_activity_component_1 = __webpack_require__(/*! ../components/activity-player/flashcard-activity.component */ "./src/components/activity-player/flashcard-activity.component.tsx");
var enums_1 = __webpack_require__(/*! ../utils/enums */ "./src/utils/enums.ts");
var react_dom_1 = __webpack_require__(/*! react-dom */ "react-dom");
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
__webpack_require__(/*! ./styles/index.less */ "./src/container/styles/index.less");
var enums_2 = __webpack_require__(/*! libs-base-activity-player/src/enums/enums */ "./node_modules/libs-base-activity-player/src/enums/enums.ts");
var event_enum_1 = __webpack_require__(/*! libs-base-activity-player/src/EventManager/event.enum */ "./node_modules/libs-base-activity-player/src/EventManager/event.enum.ts");
var event_args_1 = __webpack_require__(/*! libs-base-activity-player/src/EventManager/event-args */ "./node_modules/libs-base-activity-player/src/EventManager/event-args.ts");
var FlashCardContainer = /** @class */ (function (_super) {
    __extends(FlashCardContainer, _super);
    function FlashCardContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.itemMap = [];
        return _this;
    }
    FlashCardContainer.prototype.init = function (launchId, activityJson, args1, args2) {
        this.createItemMap(activityJson);
        this.totalSections = activityJson.itemBody.cards.length;
        return _super.prototype.init.call(this, launchId, activityJson, args1, args2);
    };
    FlashCardContainer.prototype.render = function (launchId, container) {
        try {
            if (!container) {
                if (!this.container) {
                    throw new Error('Container not present to render Activity Player');
                }
                else {
                    container = this.container;
                }
            }
            var _a = this.getIndexFromItemMap(this.firstItemIndexToLaunch), sectionIndex = _a[0], cardIndex = _a[1];
            var activityPlayerCallback = {
                registerChildComp: this.registerChildComp.bind(this),
                renderItem: this.renderItem.bind(this),
                destroyItem: this.destroyItem.bind(this),
                getItemIndex: this.getItemIndex.bind(this),
                getItemCountInSection: this.getItemCountInSection.bind(this),
                getCurrentItemIndex: this.getCurrentItemIndex.bind(this),
                getItems: this.getItems.bind(this),
                getCurrentItem: this.getCurrentItem.bind(this),
                setCurrentItem: this.setCurrentItem.bind(this),
                navigationEventHandler: this.triggerNavigationEvent.bind(this),
                launchedEventHandler: this.triggerLaunchedEvent.bind(this),
                submitEventHandler: this.triggerSubmitEvent.bind(this)
            };
            react_dom_1.render(react_1.default.createElement(flashcard_activity_component_1.FlashCardActivityComponent, { startingSectionIndex: sectionIndex, startingCardIndex: cardIndex, launchId: this.launchId, eventMgr: this.eventMgr, callback: activityPlayerCallback, totalSections: this.totalSections }), container);
        }
        catch (exception) {
            console.log(exception);
        }
    };
    /**
     *
     * @param index
     * @param container
     */
    FlashCardContainer.prototype.renderItem = function (index, container) {
        return this.items[index].render(container);
    };
    /**
    * Function to register child component instances with parent.
    * @param compType
    * @param instance
    */
    FlashCardContainer.prototype.registerChildComp = function (compType, instance) {
        switch (compType) {
            case enums_1.Components.ACTIVITY_PLAYER: {
                this.activityPlayerComp = instance;
                break;
            }
        }
    };
    /**
     * this function display next card of the section
     */
    FlashCardContainer.prototype.goToNextItem = function () {
        this.activityPlayerComp.onItemNavigation(enums_1.NavigationDirection.NEXT);
    };
    /**
     * this function display previous card of the section
     */
    FlashCardContainer.prototype.goToPreviousItem = function () {
        this.activityPlayerComp.onItemNavigation(enums_1.NavigationDirection.PREVIOUS);
    };
    /**
     * abstract function
     */
    FlashCardContainer.prototype.focalise = function () {
    };
    /**
     * abstract function
     */
    FlashCardContainer.prototype.getOptimumDimensions = function () {
        return {
            height: 0,
            width: 0
        };
    };
    /**
     * this function return total item in activity json
     */
    FlashCardContainer.prototype.getItemCount = function () {
        return this.itemMap.length;
    };
    /**
     * return itemindex based on the curent section and item
     * @param section
     * @param index
     */
    FlashCardContainer.prototype.getItemIndex = function (section, index) {
        return this.itemMap.findIndex(function (currentItem, i, array) {
            return currentItem.itemId == section + "." + index;
        });
    };
    /**
     * abstract function
     */
    FlashCardContainer.prototype.getItemDefaultScore = function (idx) {
        return {
            score: {
                min: 0,
                max: 0,
                raw: 0,
                scaled: 0
            },
            status: enums_2.ScoreStatus.INCORRECT,
            interacted: false,
            completion: enums_2.CompletionStatus.NOT_ATTEMPTED
        };
    };
    /**
     * abstract function
     * @param itemIndex
     */
    FlashCardContainer.prototype.getItemFragmentIdFromItemIndex = function (itemIndex) {
        return this.itemMap[itemIndex].fragmentID;
    };
    /**
     * this function return total item count in current section
     * @param index
     */
    FlashCardContainer.prototype.getItemCountInSection = function (sectionIndex) {
        return this.activityJson.itemBody.cards[sectionIndex].cards.length;
    };
    /**
     * overriding the setState of base avitivity player.
     */
    FlashCardContainer.prototype.setState = function (state) {
        if (this.manageActivityState) {
            this.activityStateService.setActivityState(state);
        }
    };
    /**
     *
     * @param lastCurrentItem
     * @param newCurrentItem
     */
    FlashCardContainer.prototype.triggerNavigationEvent = function (lastCurrentItem, newCurrentItem) {
        var itemsArray = this.getItems();
        var navigationEventArgs = {
            launchId: this.launchId,
            previousItem: {
                'id': lastCurrentItem.uid,
                'index': itemsArray.indexOf(lastCurrentItem)
            },
            currentItem: {
                'id': newCurrentItem.uid,
                'index': itemsArray.indexOf(newCurrentItem)
            },
            type: event_enum_1.EVENTS.ITEM_NAVIGATION
        };
        this.eventMgr.emit(event_enum_1.EVENTS.ITEM_NAVIGATION, new event_args_1.NavigationEventArgs(navigationEventArgs));
    };
    /**
     *
     */
    FlashCardContainer.prototype.triggerLaunchedEvent = function () {
        var launchedEventArgs = {
            launchId: this.launchId,
            type: event_enum_1.EVENTS.LAUNCHED
        };
        this.eventMgr.emit(event_enum_1.EVENTS.LAUNCHED, new event_args_1.EventArgs(launchedEventArgs));
    };
    /**
     *
     */
    FlashCardContainer.prototype.triggerSubmitEvent = function () {
        var submitPayload = {
            launchId: this.launchId,
            type: event_enum_1.EVENTS.SUBMIT,
            response: {
                score: {
                    min: 0,
                    max: 0,
                    raw: 0,
                    scaled: 0
                }
            }
        };
        this.eventMgr.emit(event_enum_1.EVENTS.SUBMIT, new event_args_1.SubmitEventArgs(submitPayload));
    };
    /**
     * creating an itemMapArray so that this.item can be maped with section and its items
     * @param activityJson
     */
    FlashCardContainer.prototype.createItemMap = function (activityJson) {
        for (var i = 0; i < activityJson.itemBody.cards.length; i++) {
            var section = activityJson.itemBody.cards[i];
            for (var j = 0; j < section.cards.length; j++) {
                this.itemMap.push({
                    itemId: i + "." + j,
                    fragmentID: section.cards[j].itemId
                });
            }
        }
    };
    /**
     * function returns sectionIndex and cardIndex based on the firstItemIndexToLaunch
     * @param index
     */
    FlashCardContainer.prototype.getIndexFromItemMap = function (index) {
        var indexes = this.itemMap[index].itemId.split('.');
        return [parseInt(indexes[0]), parseInt(indexes[1])];
    };
    /**
     * function is used to destroy itemPlayer instance
     * @param index
     */
    FlashCardContainer.prototype.destroyItem = function (index) {
        this.items[index.itemIndex].destroy();
    };
    return FlashCardContainer;
}(base_activity_player_1.BaseActivityPlayer));
exports.default = FlashCardContainer;


/***/ }),

/***/ "./src/container/styles/index.less":
/*!*****************************************!*\
  !*** ./src/container/styles/index.less ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/libs/eventEmitter.js":
/*!**********************************!*\
  !*** ./src/libs/eventEmitter.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var EventEmitter;

EventEmitter = function () {
    var eventEmitter = {},
        events = {};

    /**
     * @name handler
     * @function
     * @param {Object} data Event data.
     */

    /**
     * @param {String} name Event name.
     * @param {handler} handler
     * @return {listener}
     */
    eventEmitter.on = function (name, handler) {
        var listener = { name: name, handler: handler };
        events[name] = events[name] || [];
        events[name].unshift(listener);
        return listener;
    };

    /**
     * @param {listener}
     */
    eventEmitter.off = function (listener) {
        var index = events[listener.name].indexOf(listener);

        if (index !== -1) {
            events[listener.name].splice(index, 1);
        }
    };

    /**
     * @param {String} name Event name.
     * @param {Object} data Event data.
     */
    eventEmitter.trigger = function (name, data) {
        var listeners = events[name],
            i;

        if (listeners) {
            i = listeners.length;
            while (i--) {
                listeners[i].handler(data);
            }
        }
    };

    return eventEmitter;
};

module.exports = EventEmitter;


/***/ }),

/***/ "./src/libs/stacked-card/stackedCard.less":
/*!************************************************!*\
  !*** ./src/libs/stacked-card/stackedCard.less ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/libs/stacked-card/stackedCard.ts":
/*!**********************************************!*\
  !*** ./src/libs/stacked-card/stackedCard.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// JavaScript Document
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./stackedCard.less */ "./src/libs/stacked-card/stackedCard.less");
var eventEmitter_1 = __importDefault(__webpack_require__(/*! ../eventEmitter */ "./src/libs/eventEmitter.js"));
var enums_1 = __webpack_require__(/*! ../../utils/enums */ "./src/utils/enums.ts");
var NAVIGATION_TYPE;
(function (NAVIGATION_TYPE) {
    NAVIGATION_TYPE["NEXT"] = "next";
    NAVIGATION_TYPE["PREVIOUS"] = "previous";
})(NAVIGATION_TYPE || (NAVIGATION_TYPE = {}));
var StackedCards = /** @class */ (function () {
    function StackedCards(obj) {
        var _this = this;
        this.stackedOptions = 'Bottom'; //Change stacked cards view from 'Bottom', 'Top' or 'None'.
        this.rotate = true; //Activate the elements' rotation for each move on stacked cards.
        this.items = 6; //Number of visible elements when the stacked options are bottom or top.
        this.elementsMargin = 8; //Define the distance of each element when the stacked options are bottom or top.
        this.useOverlays = false; //Enable or disable the overlays for swipe elements.
        this.currentPosition = 0; //Keep the position of active stacked card.
        this.velocity = 0.3; //Minimum this.velocity allowed to trigger a swipe.
        this.isFirstTime = true;
        this.isTransitionInProgress = false;
        this.touchingElement = false;
        this.gesturesEnabled = true;
        /**
         * Proxy to the instance of the event emitter.
         *
         * @param {string} eventName
         * @param {string} listener
         * @returns {undefined}
         */
        this.on = function (eventName, listener) {
            _this.eventEmitter.on(eventName, listener);
        };
        this.off = function (listener) {
            _this.eventEmitter.off(listener);
        };
        this.eventEmitter = eventEmitter_1.default();
        this.isUndoInProgress = null;
        this.addGestures(obj);
    }
    /**
     * PUBLIC METHODS START
     */
    StackedCards.prototype.createStackedCard = function (container, startingIndex) {
        if (startingIndex === void 0) { startingIndex = 0; }
        this.items = 5;
        this.currentPosition = startingIndex;
        this.stackedCardsObj = container;
        this.listElNodesObj = this.stackedCardsObj.children;
        // this.topObj = this.obj.querySelector('.stackedcards-overlay.top');
        // this.rightObj = this.obj.querySelector('.stackedcards-overlay.right');
        // this.leftObj = this.obj.querySelector('.stackedcards-overlay.left');
        this.countElements();
        this.currentElement();
        this.changeBackground();
        this.listElNodesWidth = this.stackedCardsObj.offsetWidth;
        // this.currentElementObj = this.listElNodesObj[this.currentPosition];
        this.onTransitionStart(this.currentPosition);
        this.updateUi();
        //Prepare elements on DOM
        var addMargin = this.elementsMargin * (this.items - 1) + 'px';
        if (this.stackedOptions === "Top") {
            for (var i = this.items; i < this.maxElements; i++) {
                this.listElNodesObj[i].classList.add('stackedcards-top', 'stackedcards--animatable', 'stackedcards-origin-top');
            }
            this.elTrans = this.elementsMargin * (this.items - 1);
            this.stackedCardsObj.style.marginBottom = addMargin;
            this.stackedCardsObj.style.height = 'calc(100% - ' + addMargin + ')';
        }
        else if (this.stackedOptions === "Bottom") {
            for (var i = this.items; i < this.maxElements; i++) {
                this.listElNodesObj[i].classList.add('stackedcards-bottom', 'stackedcards--animatable', 'stackedcards-origin-bottom');
            }
            this.elTrans = 0;
            this.stackedCardsObj.style.marginBottom = addMargin;
            this.stackedCardsObj.style.height = 'calc(100% - ' + addMargin + ')';
        }
        else if (this.stackedOptions === "None") {
            for (var i = this.items; i < this.maxElements; i++) {
                this.listElNodesObj[i].classList.add('stackedcards-none', 'stackedcards--animatable');
            }
            this.elTrans = 0;
        }
        for (var i = this.items; i < this.maxElements; i++) {
            this.listElNodesObj[i].style.zIndex = 0;
            this.listElNodesObj[i].style.opacity = 0;
            this.listElNodesObj[i].style.webkitTransform = 'scale(' + (1 - (this.items * 0.04)) + ') translateX(0) translateY(' + this.elTrans + 'px) translateZ(0)';
            this.listElNodesObj[i].style.transform = 'scale(' + (1 - (this.items * 0.04)) + ') translateX(0) translateY(' + this.elTrans + 'px) translateZ(0)';
        }
        if (this.listElNodesObj[this.currentPosition]) {
            this.listElNodesObj[this.currentPosition].classList.add('stackedcards-active');
        }
        if (this.useOverlays) {
            this.leftObj.style.transform = 'translateX(0px) translateY(' + this.elTrans + 'px) translateZ(0px) rotate(0deg)';
            this.leftObj.style.webkitTransform = 'translateX(0px) translateY(' + this.elTrans + 'px) translateZ(0px) rotate(0deg)';
            this.rightObj.style.transform = 'translateX(0px) translateY(' + this.elTrans + 'px) translateZ(0px) rotate(0deg)';
            this.rightObj.style.webkitTransform = 'translateX(0px) translateY(' + this.elTrans + 'px) translateZ(0px) rotate(0deg)';
            this.topObj.style.transform = 'translateX(0px) translateY(' + this.elTrans + 'px) translateZ(0px) rotate(0deg)';
            this.topObj.style.webkitTransform = 'translateX(0px) translateY(' + this.elTrans + 'px) translateZ(0px) rotate(0deg)';
        }
        //  else {
        // 	this.leftObj.className = '';
        // 	this.rightObj.className = '';
        // 	this.topObj.className = '';
        // 	this.leftObj.classList.add('stackedcards-overlay-hidden');
        // 	this.rightObj.classList.add('stackedcards-overlay-hidden');
        // 	this.topObj.classList.add('stackedcards-overlay-hidden');
        // }
        //Remove class init
        // setTimeout(()=> {
        //     this.obj.classList.remove('init');
        // },150);
    };
    //Functions to swipe top elements on logic external action.
    StackedCards.prototype.goToNextCard = function () {
        if (!(this.currentPosition >= this.maxElements) && !this.isTransitionInProgress) {
            this.isTransitionInProgress = true;
            this.onSwipeTop();
        }
    };
    /**
     * Compro-start : this function render previous card
     */
    StackedCards.prototype.goToPreviousCard = function () {
        if (this.currentElementObj.getAttribute("index") == "0") {
            return;
        }
        else if (!this.isTransitionInProgress) {
            this.isTransitionInProgress = true;
            this.onSwipeDown();
        }
    };
    /**
     * PUBLIC METHODS END
     */
    StackedCards.prototype.backToMiddle = function () {
        this.removeNoTransition();
        this.transformUi(0, 0, 1, this.currentElementObj);
        if (this.useOverlays) {
            this.transformUi(0, 0, 0, this.leftObj);
            this.transformUi(0, 0, 0, this.rightObj);
            this.transformUi(0, 0, 0, this.topObj);
        }
        this.setZindex(5);
        if (!(this.currentPosition >= this.maxElements)) {
            //roll back the opacity of second element
            if ((this.currentPosition + 1) < this.maxElements) {
                this.listElNodesObj[this.currentPosition + 1].style.opacity = '.8';
            }
        }
    };
    ;
    // Usable functions
    StackedCards.prototype.countElements = function () {
        this.maxElements = this.listElNodesObj.length;
        if (this.items > this.maxElements) {
            this.items = this.maxElements;
        }
    };
    ;
    //Keep the active card.
    StackedCards.prototype.currentElement = function () {
        this.currentElementObj = this.listElNodesObj[this.currentPosition];
    };
    ;
    //Change background for each swipe.
    StackedCards.prototype.changeBackground = function () {
        //   document.body.classList.add("background-" + this.currentPosition + "");
    };
    ;
    //Change states
    StackedCards.prototype.changeStages = function () {
        if (this.currentPosition == this.maxElements) {
            //Event listener created to know when transition ends and changes states
            this.listElNodesObj[this.maxElements - 1].addEventListener('transitionend', function () {
                // document.body.classList.add("background-7");
                // document.querySelector('.stage').classList.add('hidden'); 
                // document.querySelector('.final-state').classList.remove('hidden');
                // document.querySelector('.final-state').classList.add('active');
                // this.listElNodesObj[this.maxElements - 1].removeEventListener('transitionend', null, false); 
            });
        }
    };
    ;
    //Functions to swipe left elements on logic external action.
    StackedCards.prototype.onActionLeft = function () {
        var _this = this;
        if (!(this.currentPosition >= this.maxElements)) {
            if (this.useOverlays) {
                this.leftObj.classList.remove('no-transition');
                this.topObj.classList.remove('no-transition');
                this.leftObj.style.zIndex = '8';
                this.transformUi(0, 0, 1, this.leftObj);
            }
            setTimeout(function () {
                _this.onSwipeLeft();
                _this.resetOverlayLeft();
            }, 300);
        }
    };
    //Functions to swipe right elements on logic external action.
    StackedCards.prototype.onActionRight = function () {
        var _this = this;
        if (!(this.currentPosition >= this.maxElements)) {
            if (this.useOverlays) {
                this.rightObj.classList.remove('no-transition');
                this.topObj.classList.remove('no-transition');
                this.rightObj.style.zIndex = '8';
                this.transformUi(0, 0, 1, this.rightObj);
            }
            setTimeout(function () {
                _this.onSwipeRight();
                _this.resetOverlayRight();
            }, 300);
        }
    };
    //Swipe active card to left.
    StackedCards.prototype.onSwipeLeft = function () {
        this.removeNoTransition();
        this.transformUi(-1000, 0, 0, this.currentElementObj);
        if (this.useOverlays) {
            this.transformUi(-1000, 0, 0, this.leftObj); //Move leftOverlay
            this.transformUi(-1000, 0, 0, this.topObj); //Move topOverlay
            this.resetOverlayLeft();
        }
        this.onTransitionStart(this.currentPosition);
        this.postionElementToTop(this.currentElementObj);
        this.currentPosition = this.currentPosition + 1;
        this.updateUi();
        this.currentElement();
        // this.changeBackground();
        // this.changeStages();
        this.setActiveHidden();
        this.isSectionOver();
        this.eventEmitter.trigger(enums_1.CARD_EVENTS.ITEM_NAVIGATON, { direction: NAVIGATION_TYPE.NEXT });
    };
    ;
    //Swipe active card to right.
    StackedCards.prototype.onSwipeRight = function () {
        this.removeNoTransition();
        this.transformUi(1000, 0, 0, this.currentElementObj);
        if (this.useOverlays) {
            this.transformUi(1000, 0, 0, this.rightObj); //Move rightOverlay
            this.transformUi(1000, 0, 0, this.topObj); //Move topOverlay
            this.resetOverlayRight();
        }
        this.onTransitionStart(this.currentPosition);
        this.postionElementToTop(this.currentElementObj);
        this.currentPosition = this.currentPosition + 1;
        this.updateUi();
        this.currentElement();
        // this.changeBackground();
        // this.changeStages();
        this.setActiveHidden();
        this.eventEmitter.trigger(enums_1.CARD_EVENTS.ITEM_NAVIGATON, { direction: NAVIGATION_TYPE.NEXT });
    };
    ;
    //Swipe active card to top.
    StackedCards.prototype.onSwipeTop = function () {
        this.removeNoTransition();
        this.transformUi(0, -1000, 0, this.currentElementObj);
        if (this.useOverlays) {
            this.transformUi(0, -1000, 0, this.leftObj); //Move leftOverlay
            this.transformUi(0, -1000, 0, this.rightObj); //Move rightOverlay
            this.transformUi(0, -1000, 0, this.topObj); //Move topOverlay
            this.resetOverlays();
        }
        this.onTransitionStart(this.currentPosition);
        this.currentPosition = this.currentPosition + 1;
        this.updateUi();
        this.currentElement();
        // this.changeBackground();
        // this.changeStages();
        this.setActiveHidden();
        this.eventEmitter.trigger(enums_1.CARD_EVENTS.ITEM_NAVIGATON, { direction: NAVIGATION_TYPE.NEXT });
    };
    //Swipe previous card to top.
    StackedCards.prototype.onSwipeDown = function () {
        if (this.currentPosition != 0) {
            ////Removing no transition from currently top card.
            ////Issue: on updateUi reduces its z-index 1 and animation is scaled similar to its bottom card with no delay hence the bottom cards appears
            this.currentElementObj.classList.remove("no-transition");
            this.currentPosition = this.currentPosition - 1;
            this.onTransitionStart(this.currentPosition);
            this.currentElement();
            this.transformUi(0, 0, 1, this.currentElementObj);
            this.updateUi();
        }
        else {
            this.renderPreviousSection();
        }
        this.eventEmitter.trigger(enums_1.CARD_EVENTS.ITEM_NAVIGATON, { direction: NAVIGATION_TYPE.PREVIOUS });
    };
    StackedCards.prototype.onUndoGesture = function () {
        this.goToPreviousCard();
    };
    //Remove transitions from all elements to be moved in each swipe movement to improve perfomance of stacked cards.
    StackedCards.prototype.removeNoTransition = function () {
        if (this.listElNodesObj[this.currentPosition]) {
            if (this.useOverlays) {
                this.leftObj.classList.remove('no-transition');
                this.rightObj.classList.remove('no-transition');
                this.topObj.classList.remove('no-transition');
            }
            this.listElNodesObj[this.currentPosition].classList.remove('no-transition');
            this.listElNodesObj[this.currentPosition].style.zIndex = 6;
        }
    };
    ;
    //Move the overlay left to initial position.
    StackedCards.prototype.resetOverlayLeft = function () {
        var _this = this;
        if (!(this.currentPosition >= this.maxElements)) {
            if (this.useOverlays) {
                setTimeout(function () {
                    if (_this.stackedOptions === "Top") {
                        _this.elTrans = _this.elementsMargin * (_this.items - 1);
                    }
                    else if (_this.stackedOptions === "Bottom" || _this.stackedOptions === "None") {
                        _this.elTrans = 0;
                    }
                    if (!_this.isFirstTime) {
                        _this.leftObj.classList.add('no-transition');
                        _this.topObj.classList.add('no-transition');
                    }
                    requestAnimationFrame(function () {
                        _this.leftObj.style.transform = "translateX(0) translateY(" + _this.elTrans + "px) translateZ(0)";
                        _this.leftObj.style.webkitTransform = "translateX(0) translateY(" + _this.elTrans + "px) translateZ(0)";
                        _this.leftObj.style.opacity = '0';
                        _this.topObj.style.transform = "translateX(0) translateY(" + _this.elTrans + "px) translateZ(0)";
                        _this.topObj.style.webkitTransform = "translateX(0) translateY(" + _this.elTrans + "px) translateZ(0)";
                        _this.topObj.style.opacity = '0';
                    });
                }, 300);
                this.isFirstTime = false;
            }
        }
    };
    ;
    //Move the overlay right to initial position.
    StackedCards.prototype.resetOverlayRight = function () {
        var _this = this;
        if (!(this.currentPosition >= this.maxElements)) {
            if (this.useOverlays) {
                setTimeout(function () {
                    if (_this.stackedOptions === "Top") {
                        _this.elTrans = _this.elementsMargin * (_this.items - 1);
                    }
                    else if (_this.stackedOptions === "Bottom" || _this.stackedOptions === "None") {
                        _this.elTrans = 0;
                    }
                    if (!_this.isFirstTime) {
                        _this.rightObj.classList.add('no-transition');
                        _this.topObj.classList.add('no-transition');
                    }
                    requestAnimationFrame(function () {
                        _this.rightObj.style.transform = "translateX(0) translateY(" + _this.elTrans + "px) translateZ(0)";
                        _this.rightObj.style.webkitTransform = "translateX(0) translateY(" + _this.elTrans + "px) translateZ(0)";
                        _this.rightObj.style.opacity = '0';
                        _this.topObj.style.transform = "translateX(0) translateY(" + _this.elTrans + "px) translateZ(0)";
                        _this.topObj.style.webkitTransform = "translateX(0) translateY(" + _this.elTrans + "px) translateZ(0)";
                        _this.topObj.style.opacity = '0';
                    });
                }, 300);
                this.isFirstTime = false;
            }
        }
    };
    ;
    //Move the overlays to initial position.
    StackedCards.prototype.resetOverlays = function () {
        var _this = this;
        if (!(this.currentPosition >= this.maxElements)) {
            if (this.useOverlays) {
                setTimeout(function () {
                    if (_this.stackedOptions === "Top") {
                        _this.elTrans = _this.elementsMargin * (_this.items - 1);
                    }
                    else if (_this.stackedOptions === "Bottom" || _this.stackedOptions === "None") {
                        _this.elTrans = 0;
                    }
                    if (!_this.isFirstTime) {
                        _this.leftObj.classList.add('no-transition');
                        _this.rightObj.classList.add('no-transition');
                        _this.topObj.classList.add('no-transition');
                    }
                    requestAnimationFrame(function () {
                        _this.leftObj.style.transform = "translateX(0) translateY(" + _this.elTrans + "px) translateZ(0)";
                        _this.leftObj.style.webkitTransform = "translateX(0) translateY(" + _this.elTrans + "px) translateZ(0)";
                        _this.leftObj.style.opacity = '0';
                        _this.rightObj.style.transform = "translateX(0) translateY(" + _this.elTrans + "px) translateZ(0)";
                        _this.rightObj.style.webkitTransform = "translateX(0) translateY(" + _this.elTrans + "px) translateZ(0)";
                        _this.rightObj.style.opacity = '0';
                        _this.topObj.style.transform = "translateX(0) translateY(" + _this.elTrans + "px) translateZ(0)";
                        _this.topObj.style.webkitTransform = "translateX(0) translateY(" + _this.elTrans + "px) translateZ(0)";
                        _this.topObj.style.opacity = '0';
                    });
                }, 300); // wait for animations time
                this.isFirstTime = false;
            }
        }
    };
    ;
    StackedCards.prototype.setActiveHidden = function () {
        if (!(this.currentPosition >= this.maxElements)) {
            this.listElNodesObj[this.currentPosition - 1].classList.remove('stackedcards-active');
            this.listElNodesObj[this.currentPosition - 1].classList.add('stackedcards-hidden');
            this.listElNodesObj[this.currentPosition].classList.add('stackedcards-active');
        }
    };
    ;
    //Set the new z-index for specific card.
    StackedCards.prototype.setZindex = function (zIndex) {
        if (this.listElNodesObj[this.currentPosition]) {
            this.listElNodesObj[this.currentPosition].style.zIndex = zIndex;
        }
    };
    ;
    // Remove element from the DOM after swipe. To use this method you need to call this function in this.onSwipeLeft, this.onSwipeRight and this.onSwipeTop and put the method just above the variable 'this.currentPosition = this.currentPosition + 1'. 
    //On the actions this.onSwipeLeft, this.onSwipeRight and this.onSwipeTop you need to remove the this.currentPosition variable (this.currentPosition = this.currentPosition + 1) and the function this.setActiveHidden
    StackedCards.prototype.removeElement = function () {
        this.currentElementObj.remove();
        if (!(this.currentPosition >= this.maxElements)) {
            this.listElNodesObj[this.currentPosition].classList.add('stackedcards-active');
        }
    };
    ;
    //Add translate X and Y to active card for each frame.
    StackedCards.prototype.transformUi = function (moveX, moveY, opacity, elementObj) {
        var _this = this;
        requestAnimationFrame(function () {
            var element = elementObj;
            // Function to generate rotate value 
            function RotateRegulator(value) {
                if (value / 10 > 15) {
                    return 15;
                }
                else if (value / 10 < -15) {
                    return -15;
                }
                return value / 10;
            }
            var rotateElement;
            if (_this.rotate) {
                rotateElement = RotateRegulator(moveX);
            }
            else {
                rotateElement = 0;
            }
            if (_this.stackedOptions === "Top") {
                _this.elTrans = _this.elementsMargin * (_this.items - 1);
                if (element) {
                    element.style.webkitTransform = "translateX(" + moveX + "px) translateY(" + (moveY + _this.elTrans) + "px) translateZ(0) rotate(" + rotateElement + "deg)";
                    element.style.transform = "translateX(" + moveX + "px) translateY(" + (moveY + _this.elTrans) + "px) translateZ(0) rotate(" + rotateElement + "deg)";
                    element.style.opacity = opacity;
                }
            }
            else if (_this.stackedOptions === "Bottom" || _this.stackedOptions === "None") {
                if (element) {
                    element.style.webkitTransform = "translateX(" + moveX + "px) translateY(" + (moveY) + "px) translateZ(0) rotate(" + rotateElement + "deg)";
                    element.style.transform = "translateX(" + moveX + "px) translateY(" + (moveY) + "px) translateZ(0) rotate(" + rotateElement + "deg)";
                    element.style.opacity = opacity;
                }
            }
        });
    };
    ;
    //Action to update all elements on the DOM for each stacked card.
    StackedCards.prototype.updateUi = function () {
        var _this = this;
        requestAnimationFrame(function () {
            _this.elTrans = 0;
            var elZindex = 5;
            var elScale = 1;
            var elOpac = 1;
            var elTransTop = _this.items;
            var elTransInc = _this.elementsMargin;
            for (var i = _this.currentPosition; i < (_this.currentPosition + _this.items); i++) {
                if (_this.listElNodesObj[i]) {
                    if (_this.stackedOptions === "Top") {
                        _this.listElNodesObj[i].classList.add('stackedcards-top', 'stackedcards--animatable', 'stackedcards-origin-top');
                        if (_this.useOverlays) {
                            _this.leftObj.classList.add('stackedcards-origin-top');
                            _this.rightObj.classList.add('stackedcards-origin-top');
                            _this.topObj.classList.add('stackedcards-origin-top');
                        }
                        _this.elTrans = elTransInc * elTransTop;
                        elTransTop--;
                    }
                    else if (_this.stackedOptions === "Bottom") {
                        _this.listElNodesObj[i].classList.add('stackedcards-bottom', 'stackedcards--animatable', 'stackedcards-origin-bottom');
                        if (_this.useOverlays) {
                            _this.leftObj.classList.add('stackedcards-origin-bottom');
                            _this.rightObj.classList.add('stackedcards-origin-bottom');
                            _this.topObj.classList.add('stackedcards-origin-bottom');
                        }
                        _this.elTrans = _this.elTrans + elTransInc;
                    }
                    else if (_this.stackedOptions === "None") {
                        _this.listElNodesObj[i].classList.add('stackedcards-none', 'stackedcards--animatable');
                        _this.elTrans = _this.elTrans + elTransInc;
                    }
                    _this.listElNodesObj[i].style.transform = 'scale(' + elScale + ') translateX(0) translateY(' + (_this.elTrans - elTransInc) + 'px) translateZ(0)';
                    _this.listElNodesObj[i].style.webkitTransform = 'scale(' + elScale + ') translateX(0) translateY(' + (_this.elTrans - elTransInc) + 'px) translateZ(0)';
                    _this.listElNodesObj[i].style.opacity = elOpac;
                    _this.listElNodesObj[i].style.zIndex = elZindex;
                    elScale = elScale - 0.035;
                    // elOpac = elOpac - (1 / this.items);
                    //removing opticity factor
                    elZindex--;
                }
            }
        });
    };
    ;
    //Touch events block
    StackedCards.prototype.setOverlayOpacity = function () {
        this.topOpacity = (((this.translateY + (this.elementHeight) / 2) / 100) * -1);
        this.rightOpacity = this.translateX / 100;
        this.leftOpacity = ((this.translateX / 100) * -1);
        if (this.topOpacity > 1) {
            this.topOpacity = 1;
        }
        if (this.rightOpacity > 1) {
            this.rightOpacity = 1;
        }
        if (this.leftOpacity > 1) {
            this.leftOpacity = 1;
        }
    };
    StackedCards.prototype.gestureStart = function (evt) {
        console.log("gestureStart", this.isTransitionInProgress, !this.gesturesEnabled);
        if (this.isTransitionInProgress || !this.gesturesEnabled) {
            evt.preventDefault();
            return;
        }
        this.startTime = new Date().getTime();
        this.startX = evt.changedTouches[0].clientX;
        this.startY = evt.changedTouches[0].clientY;
        this.currentX = this.startX;
        this.currentY = this.startY;
        this.setOverlayOpacity();
        this.touchingElement = true;
        if (!(this.currentPosition >= this.maxElements)) {
            if (this.listElNodesObj[this.currentPosition]) {
                this.listElNodesObj[this.currentPosition].classList.add('no-transition');
                this.setZindex(6);
                if (this.useOverlays) {
                    this.leftObj.classList.add('no-transition');
                    this.rightObj.classList.add('no-transition');
                    this.topObj.classList.add('no-transition');
                }
                if ((this.currentPosition + 1) < this.maxElements) {
                    this.listElNodesObj[this.currentPosition + 1].style.opacity = '1';
                }
                this.elementHeight = this.listElNodesObj[this.currentPosition].offsetHeight / 3;
            }
        }
    };
    ;
    StackedCards.prototype.gestureMove = function (evt) {
        console.log("gestureMove", this.isTransitionInProgress, !this.gesturesEnabled);
        if (this.isTransitionInProgress || !this.gesturesEnabled || !this.touchingElement) {
            evt.preventDefault();
            return;
        }
        this.currentX = evt.changedTouches[0].pageX;
        this.currentY = evt.changedTouches[0].pageY;
        this.translateX = this.currentX - this.startX;
        this.translateY = this.currentY - this.startY;
        this.setOverlayOpacity();
        if (!(this.currentPosition >= this.maxElements)) {
            evt.preventDefault();
            ////Checking if this is gesture is for getting the last card 
            var swipingAngle = Math.atan2(this.translateY, this.translateX) * 180 / Math.PI;
            if (this.isUndoInProgress == null) {
                this.isUndoInProgress = (swipingAngle > 45 && swipingAngle < 135);
            }
            if (!this.isUndoInProgress) {
                this.transformUi(this.translateX, this.translateY, 1, this.currentElementObj);
                if (this.useOverlays) {
                    this.transformUi(this.translateX, this.translateY, this.topOpacity, this.topObj);
                    if (this.translateX < 0) {
                        this.transformUi(this.translateX, this.translateY, this.leftOpacity, this.leftObj);
                        this.transformUi(0, 0, 0, this.rightObj);
                    }
                    else if (this.translateX > 0) {
                        this.transformUi(this.translateX, this.translateY, this.rightOpacity, this.rightObj);
                        this.transformUi(0, 0, 0, this.leftObj);
                    }
                    if (this.useOverlays) {
                        this.leftObj.style.zIndex = 8;
                        this.rightObj.style.zIndex = 8;
                        this.topObj.style.zIndex = 7;
                    }
                }
            }
        }
    };
    ;
    StackedCards.prototype.gestureEnd = function (evt) {
        console.log("gestureEnd", this.isTransitionInProgress, !this.gesturesEnabled);
        if (this.isTransitionInProgress || !this.gesturesEnabled || !this.touchingElement) {
            evt.preventDefault();
            return;
        }
        this.translateX = this.currentX - this.startX;
        this.translateY = this.currentY - this.startY;
        this.timeTaken = new Date().getTime() - this.startTime;
        this.touchingElement = false;
        if (!(this.currentPosition >= this.maxElements)) {
            /// Checking if this is a isUndoGesture 
            if (this.isUndoInProgress) {
                ///Checking if the current y is below the starting point then undo last card, else do nothing
                (this.translateY > 0) ? this.onUndoGesture() : null;
            }
            else if (this.translateY < (this.elementHeight * -1) && this.translateX > ((this.listElNodesWidth / 2) * -1) && this.translateX < (this.listElNodesWidth / 2)) { //is Top?
                this.removeGestures();
                this.onSwipeTop();
                // if(this.translateY < (this.elementHeight * -1) || (Math.abs(this.translateY) / this.timeTaken > this.velocity)){ // Did It Move To Top?
                // } else {
                // 	this.backToMiddle();
                // }
            }
            else {
                if (this.translateX < 0) {
                    this.removeGestures();
                    this.onSwipeLeft();
                    // if(this.translateX < ((this.listElNodesWidth / 2) * -1) || (Math.abs(this.translateX) / this.timeTaken > this.velocity)){ // Did It Move To Left?
                    // } else {
                    // 	this.backToMiddle();
                    // }
                }
                else if (this.translateX > 0) {
                    this.removeGestures();
                    this.onSwipeRight();
                    // if (this.translateX > (this.listElNodesWidth / 2) && (Math.abs(this.translateX) / this.timeTaken > this.velocity)){ // Did It Move To Right?
                    // } else {
                    // 	this.backToMiddle();
                    // }
                }
            }
        }
        this.isUndoInProgress = null;
    };
    ;
    StackedCards.prototype.removeGestures = function () {
        console.log("this.gesturesEnabled -> false");
        this.gesturesEnabled = false;
        setTimeout(function () {
            console.log("this.gesturesEnabled -> true");
            this.gesturesEnabled = true;
        }.bind(this), 850);
    };
    StackedCards.prototype.addGestures = function (obe) {
        this.element = obe;
        this.element.addEventListener('touchstart', this.gestureStart.bind(this), false);
        this.element.addEventListener('touchmove', this.gestureMove.bind(this), false);
        this.element.addEventListener('touchend', this.gestureEnd.bind(this), false);
    };
    // this.element.addEventListener('touchstart', this.gestureStart, false);
    // element.addEventListener('touchmove', this.gestureMove, false);
    // element.addEventListener('touchend', this.gestureEnd, false);
    // //Add listeners to call global action for swipe cards
    // var buttonLeft = document.querySelector('.left-action');
    // var buttonTop = document.querySelector('.top-action');
    // var buttonRight = document.querySelector('.right-action');
    // buttonLeft.addEventListener('click', onActionLeft, false);
    // buttonTop.addEventListener('click', onActionTop, false);
    // buttonRight.addEventListener('click', onActionRight, false);
    /**
     * Compro-start: this function check for the last card in the section and render next section
     */
    StackedCards.prototype.isSectionOver = function () {
        if (this.currentElementObj == null) {
            this.isTransitionInProgress = true;
            while (this.listElNodesObj.length != 0) {
                var itemIndex = this.listElNodesObj[0].getAttribute("index");
                this.eventEmitter.trigger(enums_1.CARD_EVENTS.DESTROY, { 'itemIndex': itemIndex });
                this.listElNodesObj[0].remove();
            }
            this.eventEmitter.trigger(enums_1.CARD_EVENTS.SECTION_OVER, { direction: NAVIGATION_TYPE.NEXT });
        }
    };
    /**
     * this function removes current section from DOM after translating elemet to buttom
     */
    StackedCards.prototype.renderPreviousSection = function () {
        var _this = this;
        for (var i = 0; i < this.maxElements; i++) {
            this.transformUi(0, 1000, 0, this.listElNodesObj[i]);
        }
        setTimeout(function () {
            while (_this.listElNodesObj.length != 0) {
                var itemIndex = _this.listElNodesObj[0].getAttribute("index");
                _this.eventEmitter.trigger(enums_1.CARD_EVENTS.DESTROY, { 'itemIndex': itemIndex });
                _this.listElNodesObj[0].remove();
            }
            _this.eventEmitter.trigger(enums_1.CARD_EVENTS.SECTION_OVER, { direction: NAVIGATION_TYPE.PREVIOUS });
        }, 400);
    };
    /**
     * @param ElementObj
     * this function postion every swiped element to top.
     */
    StackedCards.prototype.postionElementToTop = function (ElementObj) {
        var _this = this;
        setTimeout(function () {
            _this.transformUi(0, -1000, 0, ElementObj);
        }, 400);
    };
    /**
     * this function add EventListener of transitionend on element
     * on receiving transitionend event it excecute the callback in which this.isTransitionInProgress is set to false.
     * after that is remove the transitionend event Listener from the element.
     * @param position
     */
    StackedCards.prototype.onTransitionStart = function (position) {
        var _this = this;
        //Event listener created to know when transition ends
        this.listElNodesObj[position].addEventListener('transitionend', function (event) {
            if (event.propertyName == "transform") {
                _this.isTransitionInProgress = false;
                _this.listElNodesObj[position].removeEventListener('transitionend', null, false);
                _this.isSectionOver();
            }
        });
    };
    StackedCards.prototype.destroy = function () {
        while (this.listElNodesObj.length != 0) {
            var itemIndex = this.listElNodesObj[0].getAttribute("index");
            this.eventEmitter.trigger(enums_1.CARD_EVENTS.DESTROY, { 'itemIndex': itemIndex });
            this.listElNodesObj[0].remove();
        }
    };
    return StackedCards;
}());
exports.default = StackedCards;


/***/ }),

/***/ "./src/utils/enums.ts":
/*!****************************!*\
  !*** ./src/utils/enums.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Components = {
    ACTIVITY_PLAYER: 'activity-player',
    ITEM_PLAYER: 'item-player',
    BUTTON_BAR: 'button-bar',
    LOADER: 'loader'
};
exports.NavigationDirection = {
    PREVIOUS: 'previous',
    NEXT: 'next'
};
var CARD_EVENTS;
(function (CARD_EVENTS) {
    CARD_EVENTS["ITEM_NAVIGATON"] = "itemNavigation";
    CARD_EVENTS["SECTION_OVER"] = "sectionOver";
    CARD_EVENTS["DESTROY"] = "destroy";
})(CARD_EVENTS = exports.CARD_EVENTS || (exports.CARD_EVENTS = {}));
;


/***/ }),

/***/ 0:
/*!**********************************************************!*\
  !*** multi ./src/container/flashcard-activity-container ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/container/flashcard-activity-container */"./src/container/flashcard-activity-container.tsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom__;

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=libs-flashcard-activity-player.js.map