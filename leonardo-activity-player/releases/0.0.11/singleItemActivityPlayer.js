define(function() { return /******/ (function(modules) { // webpackBootstrap
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


var __extends = this && this.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var EventArgs =
/** @class */
function () {
  function EventArgs(args) {
    this.launchId = args.launchId;
    this.type = args.type;
  }

  return EventArgs;
}();

exports.EventArgs = EventArgs;

var SubmitEventArgs =
/** @class */
function (_super) {
  __extends(SubmitEventArgs, _super);

  function SubmitEventArgs(args) {
    var _this = _super.call(this, args) || this;

    _this.itemId = args.itemId;
    _this.response = args.response;
    return _this;
  }

  return SubmitEventArgs;
}(EventArgs);

exports.SubmitEventArgs = SubmitEventArgs;

var ReadyEventArgs =
/** @class */
function (_super) {
  __extends(ReadyEventArgs, _super);

  function ReadyEventArgs(args) {
    var _this = _super.call(this, args) || this;

    _this.playerInstance = args.playerInstance;
    return _this;
  }

  return ReadyEventArgs;
}(EventArgs);

exports.ReadyEventArgs = ReadyEventArgs;

var ErrorEventArgs =
/** @class */
function (_super) {
  __extends(ErrorEventArgs, _super);

  function ErrorEventArgs(args) {
    var _this = _super.call(this, args) || this;

    _this.error = args.exception;
    return _this;
  }

  return ErrorEventArgs;
}(EventArgs);

exports.ErrorEventArgs = ErrorEventArgs;

/***/ }),

/***/ "./node_modules/libs-base-activity-player/src/EventManager/event.enum.ts":
/*!*******************************************************************************!*\
  !*** ./node_modules/libs-base-activity-player/src/EventManager/event.enum.ts ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EVENTS = {
  READY: "ready",
  ERROR: "error",
  CHECK_ANSWER: "checkAnswer",
  RETRY: "retry",
  RESET: "reset",
  SUBMIT: "submit",
  HINT_CONSUMED: "hintConsumed",
  DESTROY: "destroy"
};

/***/ }),

/***/ "./node_modules/libs-base-activity-player/src/base-activity-player.ts":
/*!****************************************************************************!*\
  !*** ./node_modules/libs-base-activity-player/src/base-activity-player.ts ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var item_app_1 = __webpack_require__(/*! ./item-app */ "./node_modules/libs-base-activity-player/src/item-app.ts");

var event_enum_1 = __webpack_require__(/*! ./EventManager/event.enum */ "./node_modules/libs-base-activity-player/src/EventManager/event.enum.ts");

var event_args_1 = __webpack_require__(/*! ./EventManager/event-args */ "./node_modules/libs-base-activity-player/src/EventManager/event-args.ts");

var BaseActivityPlayer =
/** @class */
function () {
  function BaseActivityPlayer() {
    this.items = []; // var to hold items whose init is complete

    this.initializedItems = []; // Assigning Global Event Manager Object to a variable so that it can be accessed locally.

    this.eventMgr = new LeonardoApp.EventEmitter();
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


  BaseActivityPlayer.prototype.init = function (launchId, items, args1, args2) {
    var options = null;
    this.launchId = launchId;

    if (args2) {
      this.container = args1;
      options = args2;
    } else {
      if (args1 instanceof HTMLElement) {
        this.container = args1;
      } else {
        options = args1;
      }
    } // Subscribing to events handler provided by the Consumer App.


    if (options && options.events) {
      for (var event_1 in options.events) {
        this.subscribe(event_1, options.events[event_1]);
      }
    }

    try {
      var itemInitPromiseArr = [];
      var self_1 = this;

      var _loop_1 = function (idx) {
        this_1.items[idx] = new item_app_1.ItemApp();
        var events = options && options.events ? options.events : null;
        var uiStyles = options && options.playerConfig && options.playerConfig.uiStyles ? options.playerConfig.uiStyles : null;
        var itemInitPromise = this_1.items[idx].init(items[idx], launchId, {
          events: events,
          uiStyle: uiStyles,
          eventMgr: self_1.eventMgr
        });
        itemInitPromiseArr.push(itemInitPromise);
        itemInitPromise.then(function () {
          self_1.initializedItems[idx] = self_1.items[idx];
        });
      };

      var this_1 = this; // todo: fill this.items using items attr
      // init one itemApp for each item

      for (var idx = 0; idx < items.length; idx++) {
        _loop_1(idx);
      }

      Promise.all(itemInitPromiseArr).then(function (values) {
        // trigger ready event
        if (options && options.events && options.events.ready) {
          var eventArgs = {
            launchId: launchId,
            type: event_enum_1.EVENTS.READY,
            playerInstance: self_1
          };
          self_1.eventMgr.emit(event_enum_1.EVENTS.READY, new event_args_1.ReadyEventArgs(eventArgs));
        }
      });
    } catch (exception) {
      this.errorHandler(launchId, exception);
    }
  };

  ;

  BaseActivityPlayer.prototype.destroy = function () {
    this.currentItem.destroy();
    this.currentItem = null;
    this.initializedItems = [];
    this.items = [];
    this.itemsAPI = null;
    this.attemptsAPI = null;
    var destroyEventArgs = {
      launchId: this.launchId,
      type: event_enum_1.EVENTS.DESTROY
    };
    this.eventMgr.emit(event_enum_1.EVENTS.DESTROY, new event_args_1.EventArgs(destroyEventArgs));
  };

  ;

  BaseActivityPlayer.prototype.renderItem = function (index, container) {
    var self = this;
    return new Promise(function (resolve, reject) {
      if (self.initializedItems[index]) {
        // calls render function of itemApp instance belonging to the item to be rendererd
        self.items[index].render(container).then(function () {
          // sending itemApp instance to the Activity Player
          resolve(self.items[index]);
        });
      } else {
        // keep polling untill this.initializedItems[index] becomes available
        var inv_1 = setInterval(function () {
          if (self.initializedItems[index]) {
            clearInterval(inv_1);
            self.currentItem = self.items[index];
            self.items[index].render(container).then(function () {
              // sending itemApp instance to the Activity Player
              resolve(self.items[index]);
            });
          }
        }, 50);
      }
    });
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

  BaseActivityPlayer.prototype.displayHints = function () {
    return this.getCurrentItem().showHints();
  };

  BaseActivityPlayer.prototype.getItemCount = function () {
    return this.items.length;
  };

  BaseActivityPlayer.prototype.getItems = function () {
    // returns array of itemApp instances
    return this.items;
  };

  BaseActivityPlayer.prototype.getCurrentItem = function () {
    // return currentItem;
    return this.currentItem;
  };

  BaseActivityPlayer.prototype.getItem = function (itemId) {
    // returns the item object for given itenmId
    // Returns Item Object
    return this.items[itemId];
  };

  BaseActivityPlayer.prototype.save = function (callback) {// todo: saves user response to the Attempts Service
    // loop on _itmes        
    // call _item.save();
    // end loop
  };

  BaseActivityPlayer.prototype.submit = function (callback, options) {
    this.getCurrentItem().submit(callback, options); // options = {	consumeAttempt: true | false }
    // loop on _itmes        
    // call _item.submit( options );
    // end loop
  };

  BaseActivityPlayer.prototype.retry = function (callback) {
    this.getCurrentItem().retry(callback); // launch new attempt
  };

  BaseActivityPlayer.prototype.getResponses = function () {
    // todo: Obtains an object containing responses for each Item.
    // Returns Object
    return {
      "launchId": "<launchId>",
      "items": [{
        "itemId": "<itemId>",
        "responseId": "<ResponseId>",
        "maxScore": "<item-max-score>",
        "gotScore": "<got-score>",
        "status": "NotAttempted | InProgress | Submitted"
      }]
    };
  }; // Error Handler to emit all error events from single point.


  BaseActivityPlayer.prototype.errorHandler = function (launchId, exception) {
    var errorEventArgs = {
      launchId: launchId,
      type: event_enum_1.EVENTS.ERROR,
      exception: exception
    };
    this.eventMgr.emit(event_enum_1.EVENTS.ERROR, new event_args_1.ErrorEventArgs(errorEventArgs));
  };

  return BaseActivityPlayer;
}();

exports.BaseActivityPlayer = BaseActivityPlayer;

/***/ }),

/***/ "./node_modules/libs-base-activity-player/src/item-app.ts":
/*!****************************************************************!*\
  !*** ./node_modules/libs-base-activity-player/src/item-app.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var event_args_1 = __webpack_require__(/*! ./EventManager/event-args */ "./node_modules/libs-base-activity-player/src/EventManager/event-args.ts");

var event_enum_1 = __webpack_require__(/*! ./EventManager/event.enum */ "./node_modules/libs-base-activity-player/src/EventManager/event.enum.ts");

var ItemApp =
/** @class */
function () {
  function ItemApp() {
    // init is an asynchronous process
    // this flag helps itemApp determine whether init is complete or in progress
    this._initComplete = false;
  }

  ItemApp.prototype.init = function (item, launchId, options) {
    this.launchId = launchId;
    this.options = options;
    this.itemsAPI = LeonardoApp.Services.get("items");
    this.attemptsAPI = LeonardoApp.Services.get("attempts");

    if (options && options.eventMgr) {
      this.eventMgr = options.eventMgr;
    }

    try {
      var self_1 = this;
      return new Promise(function (resolve, reject) {
        self_1.fetchItemJSON(item).then(function (item) {
          self_1.itemJSON = item; // loads the respective item renderer

          var itemType = self_1.getItemType(item);
          return self_1.loadItemPlayer(itemType);
        }).then(function (Player) {
          if (Player.init) {
            self_1.itemPlayer = Player.init();
          } else {
            self_1.itemPlayer = Player;
          }

          self_1._initComplete = true;
          resolve();
        });
      });
    } catch (exception) {
      this.errorHandler(launchId, exception);
    }
  };

  ItemApp.prototype.render = function (container) {
    var _this = this;

    try {
      if (this.options && this.options.uiStyle) {
        if (this.options.uiStyle.dimensions && this.options.uiStyle.dimensions.includes('content')) {
          this.options.uiStyle.height = "expand";
        } else {
          this.options.uiStyle.dimensions = this.options.uiStyle.dimensions && this.options.uiStyle.dimensions.split('-')[0] + "-space";
        }
      }

      var options_1 = {
        config: this.itemJSON,
        events: this.options.callbacks,
        uiStyle: this.options.uiStyle,
        playerButtons: {
          visible: false
        }
      };
      options_1.uiStyle["widgetStyles"] = {
        "box-shadow": "none",
        "border": "none"
      };
      var self_2 = this;
      return new Promise(function (resolve, reject) {
        if (_this._initComplete) {
          // render the item in container and call the callback when rendering is done
          if (self_2.itemPlayer.addWidget) {
            self_2.itemPlayer = self_2.itemPlayer.addWidget("WB2", container, options_1);
          } else {
            self_2.itemPlayer = new self_2.itemPlayer();
            options_1.itemJSON = options_1.config;
            self_2.itemPlayer.initItem("WB2", container, options_1);
          }

          resolve();
        } else {
          // waits for init (loading of item JSON and Player) of item to complete
          var inv_1 = setInterval(function () {
            if (self_2._initComplete) {
              clearInterval(inv_1);

              if (self_2.itemPlayer.addWidget) {
                self_2.itemPlayer = self_2.itemPlayer.addWidget("WB2", container, options_1);
              } else {
                self_2.itemPlayer = new self_2.itemPlayer();
                options_1.itemJSON = options_1.config;
                self_2.itemPlayer.initItem("WB2", container, options_1);
              } // render the item in container and call the callback when rendering is done


              resolve();
            }
          }, 50);
        }
      });
    } catch (exception) {
      this.errorHandler(this.launchId, exception);
    }
  };

  ItemApp.prototype.fetchItemJSON = function (item) {
    try {
      var self_3 = this;
      return new Promise(function (resolve, reject) {
        if (typeof item == "object") {
          resolve(item);
        } else if (typeof item == "string") {
          // uses this.itemsAPI to fetch item JSON
          self_3.itemsAPI.getItem(item).then(function (item) {
            return resolve(item);
          });
        }
      });
    } catch (exception) {
      this.errorHandler(this.launchId, exception);
    }
  };

  ItemApp.prototype.getItemType = function (itemJSON) {
    return itemJSON.type;
  };

  ItemApp.prototype.loadItemPlayer = function (type) {
    var moduleLoader = LeonardoApp.ModuleLoader;
    return new Promise(function (resolve, reject) {
      moduleLoader && moduleLoader.loadModule(type).then(function (Player) {
        return resolve(Player);
      });
    });
  };

  ItemApp.prototype.save = function (callback) {// todo: saves user response to the Attempts Service
  };

  ItemApp.prototype.submit = function (callback, options) {
    try {
      var score = this.itemPlayer.score();
      this.itemPlayer.displayFeedback(score); // response object required by Submit/CheckMyWork Event Handler.

      var response = {
        id: score.scoringId,
        launchId: this.launchId,
        score: [{
          itemId: this.itemJSON.leonardoId,
          maxScore: score.scoredJson.score,
          gotScore: score.scoredJson.gotScore
        }]
      };

      if (callback) {
        callback(response);
      } else {
        var eventArgs = {
          launchId: this.launchId,
          type: event_enum_1.EVENTS.CHECK_ANSWER,
          itemId: this.itemJSON.leonardoId,
          response: response
        }; // TODO: options.isSubmit is a assumed key which is used to check whether submit button is clicked or check my work is clicked.

        this.eventMgr.emit(options.isSubmit == true ? event_enum_1.EVENTS.SUBMIT : event_enum_1.EVENTS.CHECK_ANSWER, new event_args_1.SubmitEventArgs(eventArgs));
      }
    } catch (exception) {
      this.errorHandler(this.launchId, exception);
    }
  };

  ItemApp.prototype.getResponse = function () {
    // todo: Obtains an object containing response for this Item.
    // Returns Object
    return {
      "launchId": "<launchId>",
      "items": {
        "itemId": "<itemId>",
        "responseId": "<ResponseId>",
        "maxScore": "<item-max-score>",
        "gotScore": "<got-score>",
        "status": "NotAttempted | InProgress | Submitted"
      }
    };
  };

  ItemApp.prototype.getResponses = function () {
    // todo: Obtains an object containing response for this Item.
    // Returns Object
    return {
      "launchId": "<launchId>",
      "items": [{
        "itemId": "<itemId>",
        "responseId": "<ResponseId>",
        "maxScore": "<item-max-score>",
        "gotScore": "<got-score>",
        "status": "NotAttempted | InProgress | Submitted"
      }]
    };
  };

  ItemApp.prototype.retry = function (callback) {
    try {
      // launch new attempt
      this.itemPlayer.clearFeedback();

      if (callback) {
        callback();
      } else {
        var eventArgs = {
          launchId: this.launchId,
          type: event_enum_1.EVENTS.RETRY
        };
        this.eventMgr.emit(event_enum_1.EVENTS.RETRY, new event_args_1.EventArgs(eventArgs));
      }
    } catch (exception) {
      this.errorHandler(this.launchId, exception);
    }
  };

  ItemApp.prototype.reset = function () {
    try {
      this.itemPlayer.reset();
      var eventArgs = {
        launchId: this.launchId,
        type: event_enum_1.EVENTS.RESET
      };
      this.eventMgr.emit(event_enum_1.EVENTS.RESET, new event_args_1.EventArgs(eventArgs));
    } catch (exception) {
      this.errorHandler(this.launchId, exception);
    }
  };

  ItemApp.prototype.showHints = function () {
    // display hints for the current item
    // returns remaining hints count
    this.itemPlayer.displayHints();
    return -1;
  };

  ItemApp.prototype.hideHints = function () {// hide hints from the current item
  };

  ItemApp.prototype.hasHints = function () {
    // returns if the current item has hints
    return true;
  };

  ItemApp.prototype.remainingHints = function () {
    // returns the count of remaining hints
    return 1;
  };

  ItemApp.prototype.subscribe = function (eventName, eventHandler) {};

  ItemApp.prototype.unsubscribe = function (eventName, eventHandler) {};

  ItemApp.prototype.destroy = function () {
    try {
      this.itemPlayer.destroy();
    } catch (exception) {
      this.errorHandler(this.launchId, exception);
    } // TODO - destroy it's own private variables.

  };

  ItemApp.prototype.focalise = function () {
    try {
      this.itemPlayer.focalise();
    } catch (exception) {
      this.errorHandler(this.launchId, exception);
    }
  };

  ItemApp.prototype.hide = function () {};

  ItemApp.prototype.show = function () {}; // Error Handler to emit all error events from single point.


  ItemApp.prototype.errorHandler = function (launchId, exception) {
    var errorEventArgs = {
      launchId: launchId,
      type: event_enum_1.EVENTS.ERROR,
      exception: exception
    };
    this.eventMgr.emit(event_enum_1.EVENTS.ERROR, new event_args_1.ErrorEventArgs(errorEventArgs));
  };

  return ItemApp;
}();

exports.ItemApp = ItemApp;

/***/ }),

/***/ "./node_modules/preact/dist/preact.umd.js":
/*!************************************************!*\
  !*** ./node_modules/preact/dist/preact.umd.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? factory(exports) :
	undefined;
}(this, (function (exports) { 'use strict';

	var VNode = function VNode() {};

	var options = {};

	var stack = [];

	var EMPTY_CHILDREN = [];

	function h(nodeName, attributes) {
		var children = EMPTY_CHILDREN,
		    lastSimple = void 0,
		    child = void 0,
		    simple = void 0,
		    i = void 0;
		for (i = arguments.length; i-- > 2;) {
			stack.push(arguments[i]);
		}
		if (attributes && attributes.children != null) {
			if (!stack.length) stack.push(attributes.children);
			delete attributes.children;
		}
		while (stack.length) {
			if ((child = stack.pop()) && child.pop !== undefined) {
				for (i = child.length; i--;) {
					stack.push(child[i]);
				}
			} else {
				if (typeof child === 'boolean') child = null;

				if (simple = typeof nodeName !== 'function') {
					if (child == null) child = '';else if (typeof child === 'number') child = String(child);else if (typeof child !== 'string') simple = false;
				}

				if (simple && lastSimple) {
					children[children.length - 1] += child;
				} else if (children === EMPTY_CHILDREN) {
					children = [child];
				} else {
					children.push(child);
				}

				lastSimple = simple;
			}
		}

		var p = new VNode();
		p.nodeName = nodeName;
		p.children = children;
		p.attributes = attributes == null ? undefined : attributes;
		p.key = attributes == null ? undefined : attributes.key;

		if (options.vnode !== undefined) options.vnode(p);

		return p;
	}

	function extend(obj, props) {
	  for (var i in props) {
	    obj[i] = props[i];
	  }return obj;
	}

	function applyRef(ref, value) {
	  if (ref) {
	    if (typeof ref == 'function') ref(value);else ref.current = value;
	  }
	}

	var defer = typeof Promise == 'function' ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;

	function cloneElement(vnode, props) {
	  return h(vnode.nodeName, extend(extend({}, vnode.attributes), props), arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children);
	}

	var NO_RENDER = 0;

	var SYNC_RENDER = 1;

	var FORCE_RENDER = 2;

	var ASYNC_RENDER = 3;

	var ATTR_KEY = '__preactattr_';

	var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;

	var items = [];

	function enqueueRender(component) {
		if (!component._dirty && (component._dirty = true) && items.push(component) == 1) {
			(options.debounceRendering || defer)(rerender);
		}
	}

	function rerender() {
		var p = void 0;
		while (p = items.pop()) {
			if (p._dirty) renderComponent(p);
		}
	}

	function isSameNodeType(node, vnode, hydrating) {
		if (typeof vnode === 'string' || typeof vnode === 'number') {
			return node.splitText !== undefined;
		}
		if (typeof vnode.nodeName === 'string') {
			return !node._componentConstructor && isNamedNode(node, vnode.nodeName);
		}
		return hydrating || node._componentConstructor === vnode.nodeName;
	}

	function isNamedNode(node, nodeName) {
		return node.normalizedNodeName === nodeName || node.nodeName.toLowerCase() === nodeName.toLowerCase();
	}

	function getNodeProps(vnode) {
		var props = extend({}, vnode.attributes);
		props.children = vnode.children;

		var defaultProps = vnode.nodeName.defaultProps;
		if (defaultProps !== undefined) {
			for (var i in defaultProps) {
				if (props[i] === undefined) {
					props[i] = defaultProps[i];
				}
			}
		}

		return props;
	}

	function createNode(nodeName, isSvg) {
		var node = isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName);
		node.normalizedNodeName = nodeName;
		return node;
	}

	function removeNode(node) {
		var parentNode = node.parentNode;
		if (parentNode) parentNode.removeChild(node);
	}

	function setAccessor(node, name, old, value, isSvg) {
		if (name === 'className') name = 'class';

		if (name === 'key') {} else if (name === 'ref') {
			applyRef(old, null);
			applyRef(value, node);
		} else if (name === 'class' && !isSvg) {
			node.className = value || '';
		} else if (name === 'style') {
			if (!value || typeof value === 'string' || typeof old === 'string') {
				node.style.cssText = value || '';
			}
			if (value && typeof value === 'object') {
				if (typeof old !== 'string') {
					for (var i in old) {
						if (!(i in value)) node.style[i] = '';
					}
				}
				for (var _i in value) {
					node.style[_i] = typeof value[_i] === 'number' && IS_NON_DIMENSIONAL.test(_i) === false ? value[_i] + 'px' : value[_i];
				}
			}
		} else if (name === 'dangerouslySetInnerHTML') {
			if (value) node.innerHTML = value.__html || '';
		} else if (name[0] == 'o' && name[1] == 'n') {
			var useCapture = name !== (name = name.replace(/Capture$/, ''));
			name = name.toLowerCase().substring(2);
			if (value) {
				if (!old) node.addEventListener(name, eventProxy, useCapture);
			} else {
				node.removeEventListener(name, eventProxy, useCapture);
			}
			(node._listeners || (node._listeners = {}))[name] = value;
		} else if (name !== 'list' && name !== 'type' && !isSvg && name in node) {
			try {
				node[name] = value == null ? '' : value;
			} catch (e) {}
			if ((value == null || value === false) && name != 'spellcheck') node.removeAttribute(name);
		} else {
			var ns = isSvg && name !== (name = name.replace(/^xlink:?/, ''));

			if (value == null || value === false) {
				if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase());else node.removeAttribute(name);
			} else if (typeof value !== 'function') {
				if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase(), value);else node.setAttribute(name, value);
			}
		}
	}

	function eventProxy(e) {
		return this._listeners[e.type](options.event && options.event(e) || e);
	}

	var mounts = [];

	var diffLevel = 0;

	var isSvgMode = false;

	var hydrating = false;

	function flushMounts() {
		var c = void 0;
		while (c = mounts.shift()) {
			if (options.afterMount) options.afterMount(c);
			if (c.componentDidMount) c.componentDidMount();
		}
	}

	function diff(dom, vnode, context, mountAll, parent, componentRoot) {
		if (!diffLevel++) {
			isSvgMode = parent != null && parent.ownerSVGElement !== undefined;

			hydrating = dom != null && !(ATTR_KEY in dom);
		}

		var ret = idiff(dom, vnode, context, mountAll, componentRoot);

		if (parent && ret.parentNode !== parent) parent.appendChild(ret);

		if (! --diffLevel) {
			hydrating = false;

			if (!componentRoot) flushMounts();
		}

		return ret;
	}

	function idiff(dom, vnode, context, mountAll, componentRoot) {
		var out = dom,
		    prevSvgMode = isSvgMode;

		if (vnode == null || typeof vnode === 'boolean') vnode = '';

		if (typeof vnode === 'string' || typeof vnode === 'number') {
			if (dom && dom.splitText !== undefined && dom.parentNode && (!dom._component || componentRoot)) {
				if (dom.nodeValue != vnode) {
					dom.nodeValue = vnode;
				}
			} else {
				out = document.createTextNode(vnode);
				if (dom) {
					if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
					recollectNodeTree(dom, true);
				}
			}

			out[ATTR_KEY] = true;

			return out;
		}

		var vnodeName = vnode.nodeName;
		if (typeof vnodeName === 'function') {
			return buildComponentFromVNode(dom, vnode, context, mountAll);
		}

		isSvgMode = vnodeName === 'svg' ? true : vnodeName === 'foreignObject' ? false : isSvgMode;

		vnodeName = String(vnodeName);
		if (!dom || !isNamedNode(dom, vnodeName)) {
			out = createNode(vnodeName, isSvgMode);

			if (dom) {
				while (dom.firstChild) {
					out.appendChild(dom.firstChild);
				}
				if (dom.parentNode) dom.parentNode.replaceChild(out, dom);

				recollectNodeTree(dom, true);
			}
		}

		var fc = out.firstChild,
		    props = out[ATTR_KEY],
		    vchildren = vnode.children;

		if (props == null) {
			props = out[ATTR_KEY] = {};
			for (var a = out.attributes, i = a.length; i--;) {
				props[a[i].name] = a[i].value;
			}
		}

		if (!hydrating && vchildren && vchildren.length === 1 && typeof vchildren[0] === 'string' && fc != null && fc.splitText !== undefined && fc.nextSibling == null) {
			if (fc.nodeValue != vchildren[0]) {
				fc.nodeValue = vchildren[0];
			}
		} else if (vchildren && vchildren.length || fc != null) {
				innerDiffNode(out, vchildren, context, mountAll, hydrating || props.dangerouslySetInnerHTML != null);
			}

		diffAttributes(out, vnode.attributes, props);

		isSvgMode = prevSvgMode;

		return out;
	}

	function innerDiffNode(dom, vchildren, context, mountAll, isHydrating) {
		var originalChildren = dom.childNodes,
		    children = [],
		    keyed = {},
		    keyedLen = 0,
		    min = 0,
		    len = originalChildren.length,
		    childrenLen = 0,
		    vlen = vchildren ? vchildren.length : 0,
		    j = void 0,
		    c = void 0,
		    f = void 0,
		    vchild = void 0,
		    child = void 0;

		if (len !== 0) {
			for (var i = 0; i < len; i++) {
				var _child = originalChildren[i],
				    props = _child[ATTR_KEY],
				    key = vlen && props ? _child._component ? _child._component.__key : props.key : null;
				if (key != null) {
					keyedLen++;
					keyed[key] = _child;
				} else if (props || (_child.splitText !== undefined ? isHydrating ? _child.nodeValue.trim() : true : isHydrating)) {
					children[childrenLen++] = _child;
				}
			}
		}

		if (vlen !== 0) {
			for (var _i = 0; _i < vlen; _i++) {
				vchild = vchildren[_i];
				child = null;

				var _key = vchild.key;
				if (_key != null) {
					if (keyedLen && keyed[_key] !== undefined) {
						child = keyed[_key];
						keyed[_key] = undefined;
						keyedLen--;
					}
				} else if (min < childrenLen) {
						for (j = min; j < childrenLen; j++) {
							if (children[j] !== undefined && isSameNodeType(c = children[j], vchild, isHydrating)) {
								child = c;
								children[j] = undefined;
								if (j === childrenLen - 1) childrenLen--;
								if (j === min) min++;
								break;
							}
						}
					}

				child = idiff(child, vchild, context, mountAll);

				f = originalChildren[_i];
				if (child && child !== dom && child !== f) {
					if (f == null) {
						dom.appendChild(child);
					} else if (child === f.nextSibling) {
						removeNode(f);
					} else {
						dom.insertBefore(child, f);
					}
				}
			}
		}

		if (keyedLen) {
			for (var _i2 in keyed) {
				if (keyed[_i2] !== undefined) recollectNodeTree(keyed[_i2], false);
			}
		}

		while (min <= childrenLen) {
			if ((child = children[childrenLen--]) !== undefined) recollectNodeTree(child, false);
		}
	}

	function recollectNodeTree(node, unmountOnly) {
		var component = node._component;
		if (component) {
			unmountComponent(component);
		} else {
			if (node[ATTR_KEY] != null) applyRef(node[ATTR_KEY].ref, null);

			if (unmountOnly === false || node[ATTR_KEY] == null) {
				removeNode(node);
			}

			removeChildren(node);
		}
	}

	function removeChildren(node) {
		node = node.lastChild;
		while (node) {
			var next = node.previousSibling;
			recollectNodeTree(node, true);
			node = next;
		}
	}

	function diffAttributes(dom, attrs, old) {
		var name = void 0;

		for (name in old) {
			if (!(attrs && attrs[name] != null) && old[name] != null) {
				setAccessor(dom, name, old[name], old[name] = undefined, isSvgMode);
			}
		}

		for (name in attrs) {
			if (name !== 'children' && name !== 'innerHTML' && (!(name in old) || attrs[name] !== (name === 'value' || name === 'checked' ? dom[name] : old[name]))) {
				setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode);
			}
		}
	}

	var recyclerComponents = [];

	function createComponent(Ctor, props, context) {
		var inst = void 0,
		    i = recyclerComponents.length;

		if (Ctor.prototype && Ctor.prototype.render) {
			inst = new Ctor(props, context);
			Component.call(inst, props, context);
		} else {
			inst = new Component(props, context);
			inst.constructor = Ctor;
			inst.render = doRender;
		}

		while (i--) {
			if (recyclerComponents[i].constructor === Ctor) {
				inst.nextBase = recyclerComponents[i].nextBase;
				recyclerComponents.splice(i, 1);
				return inst;
			}
		}

		return inst;
	}

	function doRender(props, state, context) {
		return this.constructor(props, context);
	}

	function setComponentProps(component, props, renderMode, context, mountAll) {
		if (component._disable) return;
		component._disable = true;

		component.__ref = props.ref;
		component.__key = props.key;
		delete props.ref;
		delete props.key;

		if (typeof component.constructor.getDerivedStateFromProps === 'undefined') {
			if (!component.base || mountAll) {
				if (component.componentWillMount) component.componentWillMount();
			} else if (component.componentWillReceiveProps) {
				component.componentWillReceiveProps(props, context);
			}
		}

		if (context && context !== component.context) {
			if (!component.prevContext) component.prevContext = component.context;
			component.context = context;
		}

		if (!component.prevProps) component.prevProps = component.props;
		component.props = props;

		component._disable = false;

		if (renderMode !== NO_RENDER) {
			if (renderMode === SYNC_RENDER || options.syncComponentUpdates !== false || !component.base) {
				renderComponent(component, SYNC_RENDER, mountAll);
			} else {
				enqueueRender(component);
			}
		}

		applyRef(component.__ref, component);
	}

	function renderComponent(component, renderMode, mountAll, isChild) {
		if (component._disable) return;

		var props = component.props,
		    state = component.state,
		    context = component.context,
		    previousProps = component.prevProps || props,
		    previousState = component.prevState || state,
		    previousContext = component.prevContext || context,
		    isUpdate = component.base,
		    nextBase = component.nextBase,
		    initialBase = isUpdate || nextBase,
		    initialChildComponent = component._component,
		    skip = false,
		    snapshot = previousContext,
		    rendered = void 0,
		    inst = void 0,
		    cbase = void 0;

		if (component.constructor.getDerivedStateFromProps) {
			state = extend(extend({}, state), component.constructor.getDerivedStateFromProps(props, state));
			component.state = state;
		}

		if (isUpdate) {
			component.props = previousProps;
			component.state = previousState;
			component.context = previousContext;
			if (renderMode !== FORCE_RENDER && component.shouldComponentUpdate && component.shouldComponentUpdate(props, state, context) === false) {
				skip = true;
			} else if (component.componentWillUpdate) {
				component.componentWillUpdate(props, state, context);
			}
			component.props = props;
			component.state = state;
			component.context = context;
		}

		component.prevProps = component.prevState = component.prevContext = component.nextBase = null;
		component._dirty = false;

		if (!skip) {
			rendered = component.render(props, state, context);

			if (component.getChildContext) {
				context = extend(extend({}, context), component.getChildContext());
			}

			if (isUpdate && component.getSnapshotBeforeUpdate) {
				snapshot = component.getSnapshotBeforeUpdate(previousProps, previousState);
			}

			var childComponent = rendered && rendered.nodeName,
			    toUnmount = void 0,
			    base = void 0;

			if (typeof childComponent === 'function') {

				var childProps = getNodeProps(rendered);
				inst = initialChildComponent;

				if (inst && inst.constructor === childComponent && childProps.key == inst.__key) {
					setComponentProps(inst, childProps, SYNC_RENDER, context, false);
				} else {
					toUnmount = inst;

					component._component = inst = createComponent(childComponent, childProps, context);
					inst.nextBase = inst.nextBase || nextBase;
					inst._parentComponent = component;
					setComponentProps(inst, childProps, NO_RENDER, context, false);
					renderComponent(inst, SYNC_RENDER, mountAll, true);
				}

				base = inst.base;
			} else {
				cbase = initialBase;

				toUnmount = initialChildComponent;
				if (toUnmount) {
					cbase = component._component = null;
				}

				if (initialBase || renderMode === SYNC_RENDER) {
					if (cbase) cbase._component = null;
					base = diff(cbase, rendered, context, mountAll || !isUpdate, initialBase && initialBase.parentNode, true);
				}
			}

			if (initialBase && base !== initialBase && inst !== initialChildComponent) {
				var baseParent = initialBase.parentNode;
				if (baseParent && base !== baseParent) {
					baseParent.replaceChild(base, initialBase);

					if (!toUnmount) {
						initialBase._component = null;
						recollectNodeTree(initialBase, false);
					}
				}
			}

			if (toUnmount) {
				unmountComponent(toUnmount);
			}

			component.base = base;
			if (base && !isChild) {
				var componentRef = component,
				    t = component;
				while (t = t._parentComponent) {
					(componentRef = t).base = base;
				}
				base._component = componentRef;
				base._componentConstructor = componentRef.constructor;
			}
		}

		if (!isUpdate || mountAll) {
			mounts.push(component);
		} else if (!skip) {

			if (component.componentDidUpdate) {
				component.componentDidUpdate(previousProps, previousState, snapshot);
			}
			if (options.afterUpdate) options.afterUpdate(component);
		}

		while (component._renderCallbacks.length) {
			component._renderCallbacks.pop().call(component);
		}if (!diffLevel && !isChild) flushMounts();
	}

	function buildComponentFromVNode(dom, vnode, context, mountAll) {
		var c = dom && dom._component,
		    originalComponent = c,
		    oldDom = dom,
		    isDirectOwner = c && dom._componentConstructor === vnode.nodeName,
		    isOwner = isDirectOwner,
		    props = getNodeProps(vnode);
		while (c && !isOwner && (c = c._parentComponent)) {
			isOwner = c.constructor === vnode.nodeName;
		}

		if (c && isOwner && (!mountAll || c._component)) {
			setComponentProps(c, props, ASYNC_RENDER, context, mountAll);
			dom = c.base;
		} else {
			if (originalComponent && !isDirectOwner) {
				unmountComponent(originalComponent);
				dom = oldDom = null;
			}

			c = createComponent(vnode.nodeName, props, context);
			if (dom && !c.nextBase) {
				c.nextBase = dom;

				oldDom = null;
			}
			setComponentProps(c, props, SYNC_RENDER, context, mountAll);
			dom = c.base;

			if (oldDom && dom !== oldDom) {
				oldDom._component = null;
				recollectNodeTree(oldDom, false);
			}
		}

		return dom;
	}

	function unmountComponent(component) {
		if (options.beforeUnmount) options.beforeUnmount(component);

		var base = component.base;

		component._disable = true;

		if (component.componentWillUnmount) component.componentWillUnmount();

		component.base = null;

		var inner = component._component;
		if (inner) {
			unmountComponent(inner);
		} else if (base) {
			if (base[ATTR_KEY] != null) applyRef(base[ATTR_KEY].ref, null);

			component.nextBase = base;

			removeNode(base);
			recyclerComponents.push(component);

			removeChildren(base);
		}

		applyRef(component.__ref, null);
	}

	function Component(props, context) {
		this._dirty = true;

		this.context = context;

		this.props = props;

		this.state = this.state || {};

		this._renderCallbacks = [];
	}

	extend(Component.prototype, {
		setState: function setState(state, callback) {
			if (!this.prevState) this.prevState = this.state;
			this.state = extend(extend({}, this.state), typeof state === 'function' ? state(this.state, this.props) : state);
			if (callback) this._renderCallbacks.push(callback);
			enqueueRender(this);
		},
		forceUpdate: function forceUpdate(callback) {
			if (callback) this._renderCallbacks.push(callback);
			renderComponent(this, FORCE_RENDER);
		},
		render: function render() {}
	});

	function render(vnode, parent, merge) {
	  return diff(merge, vnode, {}, false, parent, false);
	}

	function createRef() {
		return {};
	}

	var preact = {
		h: h,
		createElement: h,
		cloneElement: cloneElement,
		createRef: createRef,
		Component: Component,
		render: render,
		rerender: rerender,
		options: options
	};

	exports.default = preact;
	exports.h = h;
	exports.createElement = h;
	exports.cloneElement = cloneElement;
	exports.createRef = createRef;
	exports.Component = Component;
	exports.render = render;
	exports.rerender = rerender;
	exports.options = options;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=preact.umd.js.map


/***/ }),

/***/ "./src/components/activity-player/meta/button.config.ts":
/*!**************************************************************!*\
  !*** ./src/components/activity-player/meta/button.config.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var button_enums_1 = __webpack_require__(/*! ../../button-bar/button.enums */ "./src/components/button-bar/button.enums.ts");

exports.checkMyWorkBtn = [{
  id: button_enums_1.ButtonBarIcons.checkMyWork,
  tooltip: "Check my work",
  className: "defaultBtn-check-mywork-icon",
  text: "Check my work",
  icon: {
    iconCls_left: "la la-tick"
  }
}, {
  id: button_enums_1.ButtonBarIcons.tryAgain,
  tooltip: "Try Again",
  className: "defaultBtn-tryAgain",
  text: "Try again",
  icon: {
    iconCls_left: "la la-try-again"
  }
}];
exports.hintsBtn = [{
  id: button_enums_1.ButtonBarIcons.showHint,
  tooltip: "Hint",
  className: "defaultBtn-hint-icon",
  text: "Hint",
  icon: {
    iconCls_left: "la la-hintDefault"
  }
}, {
  id: button_enums_1.ButtonBarIcons.closeHint,
  tooltip: "Close hint",
  className: "defaultBtn-hintEnabled-icon",
  text: "Hint",
  icon: {
    iconCls_left: "la la-hintDefault",
    iconCls_right: "la la-close"
  }
}];
exports.resetBtn = [{
  id: button_enums_1.ButtonBarIcons.reset,
  tooltip: "Reset",
  className: "defaultBtn-reset-icon",
  text: "Reset",
  icon: {
    iconCls_left: "la la-reset"
  }
}];

/***/ }),

/***/ "./src/components/activity-player/single-item-activity-player.tsx":
/*!************************************************************************!*\
  !*** ./src/components/activity-player/single-item-activity-player.tsx ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var base_activity_player_1 = __webpack_require__(/*! libs-base-activity-player/src/base-activity-player */ "./node_modules/libs-base-activity-player/src/base-activity-player.ts");

var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.umd.js");

var singleItemActivityPlayer_component_1 = __webpack_require__(/*! ./singleItemActivityPlayer.component */ "./src/components/activity-player/singleItemActivityPlayer.component.tsx");

var SingleItemActivityPlayer =
/** @class */
function (_super) {
  __extends(SingleItemActivityPlayer, _super);

  function SingleItemActivityPlayer() {
    var _this = _super.call(this) || this;

    _this.options = null;
    return _this;
  }
  /**
  * allowed init params are ( launchId, items [, container] [, options] )
  * container and options are optional params
  * @param launchId
  * @param items
  * @param args1
  * @param args2
  */


  SingleItemActivityPlayer.prototype.init = function (launchId, items, args1, args2) {
    _super.prototype.init.call(this, launchId, items, args1, args2);

    this.options = args2 ? args2 : args1 instanceof HTMLElement ? args2 : args1;
  };

  SingleItemActivityPlayer.prototype.render = function (launchId, container) {
    try {
      if (!container) {
        if (!this.container) {
          throw new Error('Container not present to render Activity Player');
        } else {
          container = this.container;
        }
      }

      preact_1.render(preact_1.h(singleItemActivityPlayer_component_1.SingleItemActivityComponent, {
        renderItemFuncProp: this.renderItem.bind(this),
        getItems: this.getItems.bind(this),
        launchId: launchId,
        eventMgr: this.eventMgr,
        options: this.options
      }), container);
    } catch (exception) {
      this.errorHandler(this.launchId, exception);
    }
  };

  SingleItemActivityPlayer.prototype.focalise = function () {
    this.getItems()[0].focalise();
  };

  return SingleItemActivityPlayer;
}(base_activity_player_1.BaseActivityPlayer);

exports.default = SingleItemActivityPlayer;

/***/ }),

/***/ "./src/components/activity-player/singleItemActivityPlayer.component.tsx":
/*!*******************************************************************************!*\
  !*** ./src/components/activity-player/singleItemActivityPlayer.component.tsx ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.umd.js");

var itemPlayer_component_1 = __webpack_require__(/*! ../item-player/itemPlayer.component */ "./src/components/item-player/itemPlayer.component.tsx");

var button_enums_1 = __webpack_require__(/*! ../button-bar/button.enums */ "./src/components/button-bar/button.enums.ts");

var button_config_1 = __webpack_require__(/*! ./meta/button.config */ "./src/components/activity-player/meta/button.config.ts");

__webpack_require__(/*! ./../../style/index.less */ "./src/style/index.less");

__webpack_require__(/*! ./styles/style.less */ "./src/components/activity-player/styles/style.less");

var button_bar_component_1 = __webpack_require__(/*! ../button-bar/button-bar.component */ "./src/components/button-bar/button-bar.component.tsx");

var SingleItemActivityComponent =
/** @class */
function (_super) {
  __extends(SingleItemActivityComponent, _super);

  function SingleItemActivityComponent(props) {
    var _this = _super.call(this, props) || this; // Buttons visible at init.


    _this.defaultButtonsArray = button_config_1.checkMyWorkBtn.concat(button_config_1.resetBtn); // Buttons that can be either hidden or visible as per user interaction.

    _this.hiddenButtons = [button_enums_1.ButtonBarIcons.tryAgain];
    _this.state = {
      'isTryAgainEnabled': false,
      'isHintsAvailable': false
    };
    _this._item = _this.props.getItems()[0];
    return _this;
  }

  SingleItemActivityComponent.prototype.render = function (props, state) {
    var activityContainerCls = "activity-player-container";
    var uiStyles;
    var playerConfig = props.options && props.options.playerConfig;
    playerConfig.uiStyles && (uiStyles = playerConfig.uiStyles);
    var playerBtns = playerConfig.buttons;
    var isButtonBarVisible = playerBtns && playerBtns.visible != undefined ? playerBtns.visible : true;

    if (!isButtonBarVisible) {
      activityContainerCls += ' without-button-bar';
    }

    if (uiStyles && uiStyles.dimensions && uiStyles.dimensions == 'content-dim') {
      activityContainerCls += ' ap-content-dim';
    }

    return preact_1.h("div", {
      class: activityContainerCls,
      style: this.getUiStyles(uiStyles)
    }, preact_1.h(itemPlayer_component_1.ItemPlayerComponent, {
      uiStyles: uiStyles,
      isButtonBarVisible: isButtonBarVisible,
      item: this._item,
      renderItemFuncProp: props.renderItemFuncProp,
      setState: this.setState.bind(this)
    }), isButtonBarVisible && preact_1.h(button_bar_component_1.ButtonBarComponent, {
      item: this._item,
      eventMgr: props.eventMgr,
      launchId: props.launchId
    }));
  };
  /**
  * The styles passed in playerConfig is converted in obj. and returned
  * @param uiStyles passed in playerConfig
  */


  SingleItemActivityComponent.prototype.getUiStyles = function (styles) {
    var activityPlayerStyles = "";

    if (styles) {
      var allowedUiStyle = ['border', 'box-shadow'];
      var parsedStyles = styles;

      for (var property in parsedStyles) {
        if (allowedUiStyle.indexOf(property) >= 0) {
          activityPlayerStyles += property + ":" + parsedStyles[property] + ";";
        }
      }
    }

    return activityPlayerStyles;
  };

  return SingleItemActivityComponent;
}(preact_1.Component);

exports.SingleItemActivityComponent = SingleItemActivityComponent;

/***/ }),

/***/ "./src/components/activity-player/styles/style.less":
/*!**********************************************************!*\
  !*** ./src/components/activity-player/styles/style.less ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/button-bar/button-bar.component.tsx":
/*!************************************************************!*\
  !*** ./src/components/button-bar/button-bar.component.tsx ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.umd.js");

var button_component_1 = __webpack_require__(/*! ./button.component */ "./src/components/button-bar/button.component.tsx");

var button_enums_1 = __webpack_require__(/*! ./button.enums */ "./src/components/button-bar/button.enums.ts");

var button_config_1 = __webpack_require__(/*! ../activity-player/meta/button.config */ "./src/components/activity-player/meta/button.config.ts");

var event_enum_1 = __webpack_require__(/*! libs-base-activity-player/src/EventManager/event.enum */ "./node_modules/libs-base-activity-player/src/EventManager/event.enum.ts");

var event_args_1 = __webpack_require__(/*! libs-base-activity-player/src/EventManager/event-args */ "./node_modules/libs-base-activity-player/src/EventManager/event-args.ts");

var ButtonBarComponent =
/** @class */
function (_super) {
  __extends(ButtonBarComponent, _super);

  function ButtonBarComponent(props) {
    var _this = _super.call(this, props) || this; // Buttons visible at init.


    _this.defaultButtonsArray = button_config_1.checkMyWorkBtn.concat(button_config_1.resetBtn);
    _this.state = {
      'isTryAgainEnabled': false
    };
    _this._item = _this.props.item;
    _this.eventMgr = _this.props.eventMgr;
    _this.launchId = _this.props.launchId;
    return _this;
  }

  ButtonBarComponent.prototype.createButtonJSX = function (buttonConfig) {
    return preact_1.h(button_component_1.ButtonComponent, {
      id: buttonConfig.id,
      leftIcon: buttonConfig.icon ? buttonConfig.icon.iconCls_left : null,
      rightIcon: buttonConfig.icon ? buttonConfig.icon.iconCls_right : null,
      label: buttonConfig.text,
      tooltip: buttonConfig.tooltip,
      onButtonClick: this.onClick.bind(this)
    });
  };

  ButtonBarComponent.prototype.createButtons = function () {
    var _this = this;

    var hiddenButtons = this.state.isTryAgainEnabled ? button_enums_1.ButtonBarIcons.checkMyWork : button_enums_1.ButtonBarIcons.tryAgain;
    var buttons = [];
    var defaultButtonsArray = hiddenButtons.length > 0 ? this.removeHiddenButtons(hiddenButtons) : this.defaultButtonsArray;
    defaultButtonsArray.map(function (value, index) {
      buttons.push(_this.createButtonJSX(value), index < defaultButtonsArray.length - 1 ? preact_1.h("div", {
        class: "vertical-seperator"
      }) : null);
    });
    return buttons;
  }; // Handling Button clicks by user and performing specific operations and API calls.


  ButtonBarComponent.prototype.onClick = function (event) {
    var _this = this;

    var iconId = event.currentTarget.getAttribute("id");
    var buttonType = button_enums_1.ButtonBarIcons[iconId];

    switch (buttonType) {
      case button_enums_1.ButtonBarIcons.checkMyWork:
        {
          this._item.submit(function (response) {
            if (response) {
              var eventArgs = {
                launchId: _this.launchId,
                type: event_enum_1.EVENTS.CHECK_ANSWER,
                itemId: _this._item.leonardoId,
                response: response
              };

              _this.eventMgr.emit(event_enum_1.EVENTS.CHECK_ANSWER, new event_args_1.SubmitEventArgs(eventArgs));
            }

            _this.setState({
              'isTryAgainEnabled': true
            });
          }, '');

          break;
        }

      case button_enums_1.ButtonBarIcons.reset:
        {
          this._item.reset();

          this.setState({
            'isTryAgainEnabled': false
          });
          break;
        }

      case button_enums_1.ButtonBarIcons.tryAgain:
        {
          this._item.retry(function (response) {
            if (response) {
              var eventArgs = {
                launchId: _this.launchId,
                type: event_enum_1.EVENTS.RETRY
              };

              _this.eventMgr.emit(event_enum_1.EVENTS.RETRY, new event_args_1.EventArgs(eventArgs));
            }

            _this.setState({
              'isTryAgainEnabled': false
            });
          });

          break;
        }

      case button_enums_1.ButtonBarIcons.showHint:
        {
          break;
        }

      case button_enums_1.ButtonBarIcons.closeHint:
        {
          break;
        }
    }
  };

  ButtonBarComponent.prototype.removeHiddenButtons = function (hiddenButtons) {
    return this.defaultButtonsArray.filter(function (btn) {
      return hiddenButtons.indexOf(btn["id"]) == -1;
    });
  };

  ButtonBarComponent.prototype.render = function () {
    return preact_1.h("div", {
      class: "buttons-container"
    }, this.createButtons());
  };

  return ButtonBarComponent;
}(preact_1.Component);

exports.ButtonBarComponent = ButtonBarComponent;

/***/ }),

/***/ "./src/components/button-bar/button.component.tsx":
/*!********************************************************!*\
  !*** ./src/components/button-bar/button.component.tsx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.umd.js");

__webpack_require__(/*! ./styles/style.less */ "./src/components/button-bar/styles/style.less");

var ButtonComponent =
/** @class */
function (_super) {
  __extends(ButtonComponent, _super);

  function ButtonComponent() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  ButtonComponent.prototype.render = function (props, state) {
    return preact_1.h("div", {
      id: props.id,
      class: "default-btn " + props.leftIcon,
      title: props.tooltip,
      onClick: function (e) {
        return props.onButtonClick(e);
      }
    }, preact_1.h("span", {
      class: "default-btn-label"
    }, " ", props.label, " "), props.rightIcon && preact_1.h("span", {
      class: props.rightIcon
    }));
  };

  return ButtonComponent;
}(preact_1.Component);

exports.ButtonComponent = ButtonComponent;

/***/ }),

/***/ "./src/components/button-bar/button.enums.ts":
/*!***************************************************!*\
  !*** ./src/components/button-bar/button.enums.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonBarIcons = {
  reset: "reset",
  checkMyWork: "checkMyWork",
  tryAgain: "tryAgain",
  showHint: "showHint",
  closeHint: "closeHint"
};

/***/ }),

/***/ "./src/components/button-bar/styles/style.less":
/*!*****************************************************!*\
  !*** ./src/components/button-bar/styles/style.less ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/item-player/itemPlayer.component.tsx":
/*!*************************************************************!*\
  !*** ./src/components/item-player/itemPlayer.component.tsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.umd.js");

var ItemPlayerComponent =
/** @class */
function (_super) {
  __extends(ItemPlayerComponent, _super);

  function ItemPlayerComponent(props) {
    return _super.call(this, props) || this;
  }

  ItemPlayerComponent.prototype.componentDidMount = function () {
    var _this = this;

    var uiStyles = this.props.uiStyles;
    var renderPromsise = this.props.renderItemFuncProp(0, this.base);
    renderPromsise.then(function (itemAppInstance) {
      _this._item = itemAppInstance;
      uiStyles && uiStyles.dimensions && uiStyles.dimensions == 'content-dim' && (_this.base.style.display = 'inline-block');

      _this.base.classList.remove("item-loader");

      setTimeout(function () {
        _this._item.focalise();
      }, 100);
    });
  };

  ItemPlayerComponent.prototype.render = function (props) {
    var itemPlayerContainerCls = "item-player-container item-loader";
    var uiStyles = props.uiStyles;

    if (uiStyles && uiStyles.dimensions && uiStyles.dimensions == 'content-dim') {
      itemPlayerContainerCls += ' ip-content-dim';
    }

    return preact_1.h("div", {
      class: itemPlayerContainerCls
    });
  };

  return ItemPlayerComponent;
}(preact_1.Component);

exports.ItemPlayerComponent = ItemPlayerComponent;

/***/ }),

/***/ "./src/style/index.less":
/*!******************************!*\
  !*** ./src/style/index.less ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!**************************************************************************!*\
  !*** multi ./src/components/activity-player/single-item-activity-player ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/components/activity-player/single-item-activity-player */"./src/components/activity-player/single-item-activity-player.tsx");


/***/ })

/******/ })["default"]});;
//# sourceMappingURL=singleItemActivityPlayer.js.map