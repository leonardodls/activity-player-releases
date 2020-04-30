(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function(src) {
	function log(error) {
		(typeof console !== "undefined")
		&& (console.error || console.log)("[Script Loader]", error);
	}

	// Check for IE =< 8
	function isIE() {
		return typeof attachEvent !== "undefined" && typeof addEventListener === "undefined";
	}

	try {
		if (typeof execScript !== "undefined" && isIE()) {
			execScript(src);
		} else if (typeof eval !== "undefined") {
			eval.call(null, src);
		} else {
			log("EvalError: No eval function available");
		}
	} catch (error) {
		log(error);
	}
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.XAPIRunner = undefined;

var _xapirunner = __webpack_require__(2);

var _xapirunner2 = _interopRequireDefault(_xapirunner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.XAPIRunner = _xapirunner2.default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* global $ */
/* global visibly */

/** container-adapter reference */

/** generic-container reference */


__webpack_require__(3);

__webpack_require__(5);

__webpack_require__(7);

var _containerAdapter = __webpack_require__(9);

var _containerAdapter2 = _interopRequireDefault(_containerAdapter);

var _genericContainer = __webpack_require__(11);

var _genericContainer2 = _interopRequireDefault(_genericContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var adaptermap = {};
var eventContextObj = void 0;

/**
 *  XAPIRunner initialization Class. Provides public functions
 *  -paintActivity()
 *  -captureContainerEvents()
 *  -generateCustomStatement()
 *  -containerInvocation()
 */

var XAPIRunner = function () {

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

  function XAPIRunner(initParams, eventContext) {
    var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

    _classCallCheck(this, XAPIRunner);

    /** Platform or Container base path (shared/common dependencies) for bower components. */
    if (initParams && initParams.paths && initParams.paths.dependencyBase) {
      this.dependencyBase = initParams.paths.dependencyBase + '/libs-frontend-xapi-3/';
    } else {
      this.dependencyBase = '../';
    }

    /** Event Context Object. */
    eventContextObj = eventContext;

    if (initParams.config) {
      this.config = initParams.config;
    }
    if (initParams.userId) {
      this.userId = initParams.userId;
    }
    if (initParams.productId) {
      this.productId = initParams.productId;
    }
    if (initParams.classId) {
      this.classId = initParams.classId;
    }

    /** Inform the container that initialization is complete */
    callback();
  }

  _createClass(XAPIRunner, [{
    key: 'paintActivity',


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

    value: function paintActivity(uniqueLOId, containerElementRef, itemParams, LOInitParams) {
      var _this = this;

      var containerID = '#' + containerElementRef;
      var iframeId = '#iframe_' + uniqueLOId.replace(new RegExp('[/ ()]', 'g'), '-');

      /** Setup Adapter */
      if ($.isEmptyObject(adaptermap[uniqueLOId])) {
        var adapter = new _containerAdapter2.default(uniqueLOId);
        var activityadapter = adapter.getActivityAdapter({
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

      var myadapter = adaptermap[uniqueLOId];
      if (itemParams.container && itemParams.container.type === 'generic-content') {
        var genericContainer = new _genericContainer2.default(uniqueLOId, this.dependencyBase, LOInitParams);
        genericContainer.launchLO(itemParams, myadapter, function () {
          return _this.captureIframeEvents(uniqueLOId);
        });
      }
    }
  }, {
    key: 'captureIframeEvents',


    /**
     * Function used to capture iFrame events - used in active time tracking.
     * @param {String} uniqueLOId
     */
    value: function captureIframeEvents(uniqueLOId) {
      var _this2 = this;

      var adapter = adaptermap[uniqueLOId];

      $(adapter.adapterConfig.iframeId).on('load.loaded', function () {
        var iframe = $(adapter.adapterConfig.iframeId);
        var iframeContents = iframe.contents();

        iframe[0].contentWindow.onunload = function () {
          if (adapter.launched === true) {
            var containerMethod = adapter.itemParamsObj.container.type === 'generic-content' ? 'generic_controls' : '';
            _this2.closeLO(uniqueLOId, { containerMethod: containerMethod });
          }
          $(adapter.adapterConfig.iframeId).unbind('load.loaded');
        };

        iframeContents.on('click', function (e) {
          adapter.eventOccured();
          if (eventContextObj && eventContextObj.containerNotification) {
            eventContextObj.containerNotification(uniqueLOId, 'iframeEvents', 'click');
          }
        });
        iframeContents.on('mousewheel', function (e) {
          adapter.eventOccured();
        });
        iframeContents.on('keydown', function (e) {
          adapter.eventOccured();
        });
        iframeContents.on('DOMMouseScroll', function (e) {
          adapter.eventOccured();
        });
        iframeContents.on('mousemove', function (e) {
          adapter.eventOccured();
        });
        iframeContents.on('touchstart', function (e) {
          adapter.eventOccured();
          if (eventContextObj && eventContextObj.containerNotification) {
            eventContextObj.containerNotification(uniqueLOId, 'iframeEvents', 'touchstart');
          }
        });
        iframeContents.on('touchend', function (e) {
          adapter.eventOccured();
        });
        iframeContents.on('touchmove', function (e) {
          adapter.eventOccured();
        });
        visibly.onVisible(function () {
          if (adapter.launched) {
            adapter.eventOccured();
          }
        });
        visibly.onHidden(function () {
          if (adapter.launched) {
            adapter.stopTimer();
          }
        });
      });
    }
  }, {
    key: 'captureContainerEvents',


    /**
     * Functions used to capture container events. APP calls this function to notify that the user is active.
     * @param {String} uniqueLOId
     */
    value: function captureContainerEvents(uniqueLOId) {
      var adapter = adaptermap[uniqueLOId];
      if (adapter && adapter.eventOccured) {
        adapter.eventOccured();
      }
    }
  }, {
    key: 'sendStatements',


    /**
     * Activity adapter notifies this function of statements which are then send to APP using eventContext object.
     * @param {String} uniqueLOId
     * @param {Array} statements
     */
    value: function sendStatements(uniqueLOId, statements) {
      if (eventContextObj && eventContextObj.newStatements) {
        eventContextObj.newStatements(uniqueLOId, statements);
      }
    }
  }, {
    key: 'sendInterpretedStatements',


    /**
     * Activity adapter notifies this function of interpreted statements which are then send to APP using eventContext object.
     * @param {String} uniqueLOId
     * @param {Array} interpretedStatements
     */
    value: function sendInterpretedStatements(uniqueLOId, interpretedStatements) {
      if (eventContextObj && eventContextObj.newInterpretedStatements) {
        eventContextObj.newInterpretedStatements(uniqueLOId, interpretedStatements);
      }
    }
  }, {
    key: 'notifyMessageFromContent',


    /**
     * Activity adapter notifies this function of new message from conmtent which are then send to APP using eventContext object.
     * @param {String} uniqueLOId
     * @param {Object} msgFromContent
     */
    value: function notifyMessageFromContent(uniqueLOId, msgFromContent) {
      if (eventContextObj && eventContextObj.messageFromContent) {
        eventContextObj.messageFromContent(uniqueLOId, msgFromContent);
      }
    }
  }, {
    key: 'notifyMessageToContent',


    /**
     * Activity adapter notifies this function of new message sent to content which are then send to APP using eventContext object.
     * @param {String} uniqueLOId
     * @param {Object} msgToContent
     */
    value: function notifyMessageToContent(uniqueLOId, msgToContent) {
      if (eventContextObj && eventContextObj.messageToContent) {
        eventContextObj.messageToContent(uniqueLOId, msgToContent);
      }
    }
  }, {
    key: 'sendState',


    /**
     * Activity adapter notifies this function of state which is then send to APP using eventContext object. Also, a callback is send along which deletes state
     * from local storage when adapter.launched is false that is the activity has been closed.
     * @param {String} uniqueLOId
     * @param {Object} state
     */
    value: function sendState(uniqueLOId, state) {
      if (eventContextObj && eventContextObj.newState) {
        eventContextObj.newState(uniqueLOId, state);
      }
    }
  }, {
    key: 'containerNotification',


    /**
     * Activity adapter notifies this function of events (ControlsChange, SizeChange) which are then send to APP using eventContext object.
     * @param {String} uniqueLOId
     * @param {String} containerEvent
     * @param {Object} containerEventData
     */
    value: function containerNotification(uniqueLOId, containerEvent, containerEventData) {
      if (eventContextObj && eventContextObj.containerNotification) {
        eventContextObj.containerNotification(uniqueLOId, containerEvent, containerEventData);
      }
    }

    /**
     * Function called by APP to generate a custom statement.
     * @param {String} uniqueLOId
     * @param {String} verb
     * @param {Object} options
     */

  }, {
    key: 'generateCustomStatement',
    value: function generateCustomStatement(uniqueLOId, verb) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var adapter = adaptermap[uniqueLOId];
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

  }, {
    key: 'containerInvocation',
    value: function containerInvocation(uniqueLOId, containerMethod, containerMethodData) {
      var adapter = adaptermap[uniqueLOId];
      if (adapter && adapter.launched) {
        if (containerMethod === 'generic_controls') {
          var params = {
            type: containerMethodData.type
          };
          adapter.genericContainer.triggerLOControlEventListener(params, adapter);
        }
      } else {
        if (containerMethodData.type === 'close') {
          this.closeLO(uniqueLOId, { containerMethod: containerMethod });
        }
      }
    }
  }, {
    key: 'simulateAction',
    value: function simulateAction(uniqueLOId, containerMethod, data) {
      var adapter = adaptermap[uniqueLOId];
      if (adapter && adapter.launched) {
        if (containerMethod === 'generic_controls') {
          adapter.genericContainer.triggerLOControlEventListener(data, adapter);
        }
      }
    }

    /* Function called to close LO */

  }, {
    key: 'closeLO',
    value: function closeLO(uniqueLOId, options) {
      var adapter = adaptermap[uniqueLOId];

      var removeIframe = function removeIframe() {
        if (adapter && adapter.adapterConfig && adapter.adapterConfig.iframeId) {
          var iframeId = adapter.adapterConfig.iframeId;
          if ($(iframeId).length) {
            $(iframeId).remove();
          }
        }
      };

      if (adapter && adapter.launched) {
        if (options.containerMethod === 'generic_controls') {
          adapter.generateStatement('closed', { description: 'Closed', mode: 'Container' });
          this.containerNotification(uniqueLOId, options.containerMethod, 'activityClosed');
        }
      } else {
        removeIframe();
        this.containerNotification(uniqueLOId, options.containerMethod, 'activityClosed');
      }
    }
  }, {
    key: 'errorHandler',
    value: function errorHandler(uniqueLOId, err) {
      if (eventContextObj && eventContextObj.errorHandler) {
        eventContextObj.errorHandler(uniqueLOId, err);
      }
    }
  }]);

  return XAPIRunner;
}();

exports.default = XAPIRunner;
module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0)(__webpack_require__(4))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = "(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require==\"function\"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error(\"Cannot find module '\"+o+\"'\");throw f.code=\"MODULE_NOT_FOUND\",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require==\"function\"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){(function(global){\"use strict\";if(global._babelPolyfill){throw new Error(\"only one instance of babel/polyfill is allowed\")}global._babelPolyfill=true;require(\"core-js/shim\");require(\"regenerator/runtime\")}).call(this,typeof global!==\"undefined\"?global:typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:{})},{\"core-js/shim\":72,\"regenerator/runtime\":73}],2:[function(require,module,exports){\"use strict\";var $=require(\"./$\");module.exports=function(IS_INCLUDES){return function(el){var O=$.toObject(this),length=$.toLength(O.length),index=$.toIndex(arguments[1],length),value;if(IS_INCLUDES&&el!=el)while(length>index){value=O[index++];if(value!=value)return true}else for(;length>index;index++)if(IS_INCLUDES||index in O){if(O[index]===el)return IS_INCLUDES||index}return!IS_INCLUDES&&-1}}},{\"./$\":16}],3:[function(require,module,exports){\"use strict\";var $=require(\"./$\"),ctx=require(\"./$.ctx\");module.exports=function(TYPE){var IS_MAP=TYPE==1,IS_FILTER=TYPE==2,IS_SOME=TYPE==3,IS_EVERY=TYPE==4,IS_FIND_INDEX=TYPE==6,NO_HOLES=TYPE==5||IS_FIND_INDEX;return function(callbackfn){var O=Object($.assertDefined(this)),self=$.ES5Object(O),f=ctx(callbackfn,arguments[1],3),length=$.toLength(self.length),index=0,result=IS_MAP?Array(length):IS_FILTER?[]:undefined,val,res;for(;length>index;index++)if(NO_HOLES||index in self){val=self[index];res=f(val,index,O);if(TYPE){if(IS_MAP)result[index]=res;else if(res)switch(TYPE){case 3:return true;case 5:return val;case 6:return index;case 2:result.push(val)}else if(IS_EVERY)return false}}return IS_FIND_INDEX?-1:IS_SOME||IS_EVERY?IS_EVERY:result}}},{\"./$\":16,\"./$.ctx\":10}],4:[function(require,module,exports){var $=require(\"./$\");function assert(condition,msg1,msg2){if(!condition)throw TypeError(msg2?msg1+msg2:msg1)}assert.def=$.assertDefined;assert.fn=function(it){if(!$.isFunction(it))throw TypeError(it+\" is not a function!\");return it};assert.obj=function(it){if(!$.isObject(it))throw TypeError(it+\" is not an object!\");return it};assert.inst=function(it,Constructor,name){if(!(it instanceof Constructor))throw TypeError(name+\": use the 'new' operator!\");return it};module.exports=assert},{\"./$\":16}],5:[function(require,module,exports){var $=require(\"./$\");module.exports=Object.assign||function assign(target,source){var T=Object($.assertDefined(target)),l=arguments.length,i=1;while(l>i){var S=$.ES5Object(arguments[i++]),keys=$.getKeys(S),length=keys.length,j=0,key;while(length>j)T[key=keys[j++]]=S[key]}return T}},{\"./$\":16}],6:[function(require,module,exports){var $=require(\"./$\"),TAG=require(\"./$.wks\")(\"toStringTag\"),toString={}.toString;function cof(it){return toString.call(it).slice(8,-1)}cof.classof=function(it){var O,T;return it==undefined?it===undefined?\"Undefined\":\"Null\":typeof(T=(O=Object(it))[TAG])==\"string\"?T:cof(O)};cof.set=function(it,tag,stat){if(it&&!$.has(it=stat?it:it.prototype,TAG))$.hide(it,TAG,tag)};module.exports=cof},{\"./$\":16,\"./$.wks\":27}],7:[function(require,module,exports){\"use strict\";var $=require(\"./$\"),ctx=require(\"./$.ctx\"),safe=require(\"./$.uid\").safe,assert=require(\"./$.assert\"),$iter=require(\"./$.iter\"),has=$.has,set=$.set,isObject=$.isObject,hide=$.hide,step=$iter.step,isFrozen=Object.isFrozen||$.core.Object.isFrozen,ID=safe(\"id\"),O1=safe(\"O1\"),LAST=safe(\"last\"),FIRST=safe(\"first\"),ITER=safe(\"iter\"),SIZE=$.DESC?safe(\"size\"):\"size\",id=0;function fastKey(it,create){if(!isObject(it))return(typeof it==\"string\"?\"S\":\"P\")+it;if(isFrozen(it))return\"F\";if(!has(it,ID)){if(!create)return\"E\";hide(it,ID,++id)}return\"O\"+it[ID]}function getEntry(that,key){var index=fastKey(key),entry;if(index!=\"F\")return that[O1][index];for(entry=that[FIRST];entry;entry=entry.n){if(entry.k==key)return entry}}module.exports={getConstructor:function(NAME,IS_MAP,ADDER){function C(iterable){var that=assert.inst(this,C,NAME);set(that,O1,$.create(null));set(that,SIZE,0);set(that,LAST,undefined);set(that,FIRST,undefined);if(iterable!=undefined)$iter.forOf(iterable,IS_MAP,that[ADDER],that)}$.mix(C.prototype,{clear:function clear(){for(var that=this,data=that[O1],entry=that[FIRST];entry;entry=entry.n){entry.r=true;if(entry.p)entry.p=entry.p.n=undefined;delete data[entry.i]}that[FIRST]=that[LAST]=undefined;that[SIZE]=0},\"delete\":function(key){var that=this,entry=getEntry(that,key);if(entry){var next=entry.n,prev=entry.p;delete that[O1][entry.i];entry.r=true;if(prev)prev.n=next;if(next)next.p=prev;if(that[FIRST]==entry)that[FIRST]=next;if(that[LAST]==entry)that[LAST]=prev;that[SIZE]--}return!!entry},forEach:function forEach(callbackfn){var f=ctx(callbackfn,arguments[1],3),entry;while(entry=entry?entry.n:this[FIRST]){f(entry.v,entry.k,this);while(entry&&entry.r)entry=entry.p}},has:function has(key){return!!getEntry(this,key)}});if($.DESC)$.setDesc(C.prototype,\"size\",{get:function(){return assert.def(this[SIZE])}});return C},def:function(that,key,value){var entry=getEntry(that,key),prev,index;if(entry){entry.v=value}else{that[LAST]=entry={i:index=fastKey(key,true),k:key,v:value,p:prev=that[LAST],n:undefined,r:false};if(!that[FIRST])that[FIRST]=entry;if(prev)prev.n=entry;that[SIZE]++;if(index!=\"F\")that[O1][index]=entry}return that},getEntry:getEntry,getIterConstructor:function(){return function(iterated,kind){set(this,ITER,{o:iterated,k:kind})}},next:function(){var iter=this[ITER],kind=iter.k,entry=iter.l;while(entry&&entry.r)entry=entry.p;if(!iter.o||!(iter.l=entry=entry?entry.n:iter.o[FIRST])){iter.o=undefined;return step(1)}if(kind==\"key\")return step(0,entry.k);if(kind==\"value\")return step(0,entry.v);return step(0,[entry.k,entry.v])}}},{\"./$\":16,\"./$.assert\":4,\"./$.ctx\":10,\"./$.iter\":15,\"./$.uid\":25}],8:[function(require,module,exports){\"use strict\";var $=require(\"./$\"),safe=require(\"./$.uid\").safe,assert=require(\"./$.assert\"),forOf=require(\"./$.iter\").forOf,_has=$.has,isObject=$.isObject,hide=$.hide,isFrozen=Object.isFrozen||$.core.Object.isFrozen,id=0,ID=safe(\"id\"),WEAK=safe(\"weak\"),LEAK=safe(\"leak\"),method=require(\"./$.array-methods\"),find=method(5),findIndex=method(6);function findFrozen(store,key){return find.call(store.array,function(it){return it[0]===key})}function leakStore(that){return that[LEAK]||hide(that,LEAK,{array:[],get:function(key){var entry=findFrozen(this,key);if(entry)return entry[1]},has:function(key){return!!findFrozen(this,key)},set:function(key,value){var entry=findFrozen(this,key);if(entry)entry[1]=value;else this.array.push([key,value])},\"delete\":function(key){var index=findIndex.call(this.array,function(it){return it[0]===key});if(~index)this.array.splice(index,1);return!!~index}})[LEAK]}module.exports={getConstructor:function(NAME,IS_MAP,ADDER){function C(iterable){$.set(assert.inst(this,C,NAME),ID,id++);if(iterable!=undefined)forOf(iterable,IS_MAP,this[ADDER],this)}$.mix(C.prototype,{\"delete\":function(key){if(!isObject(key))return false;if(isFrozen(key))return leakStore(this)[\"delete\"](key);return _has(key,WEAK)&&_has(key[WEAK],this[ID])&&delete key[WEAK][this[ID]]},has:function has(key){if(!isObject(key))return false;if(isFrozen(key))return leakStore(this).has(key);return _has(key,WEAK)&&_has(key[WEAK],this[ID])}});return C},def:function(that,key,value){if(isFrozen(assert.obj(key))){leakStore(that).set(key,value)}else{_has(key,WEAK)||hide(key,WEAK,{});key[WEAK][that[ID]]=value}return that},leakStore:leakStore,WEAK:WEAK,ID:ID}},{\"./$\":16,\"./$.array-methods\":3,\"./$.assert\":4,\"./$.iter\":15,\"./$.uid\":25}],9:[function(require,module,exports){\"use strict\";var $=require(\"./$\"),$def=require(\"./$.def\"),$iter=require(\"./$.iter\"),assertInstance=require(\"./$.assert\").inst;module.exports=function(NAME,methods,common,IS_MAP,isWeak){var Base=$.g[NAME],C=Base,ADDER=IS_MAP?\"set\":\"add\",proto=C&&C.prototype,O={};function fixMethod(KEY,CHAIN){var method=proto[KEY];if($.FW)proto[KEY]=function(a,b){var result=method.call(this,a===0?0:a,b);return CHAIN?this:result}}if(!$.isFunction(C)||!(isWeak||!$iter.BUGGY&&proto.forEach&&proto.entries)){C=common.getConstructor(NAME,IS_MAP,ADDER);$.mix(C.prototype,methods)}else{var inst=new C,chain=inst[ADDER](isWeak?{}:-0,1),buggyZero;if(!require(\"./$.iter-detect\")(function(iter){new C(iter)})){C=function(iterable){assertInstance(this,C,NAME);var that=new Base;if(iterable!=undefined)$iter.forOf(iterable,IS_MAP,that[ADDER],that);return that};C.prototype=proto;if($.FW)proto.constructor=C}isWeak||inst.forEach(function(val,key){buggyZero=1/key===-Infinity});if(buggyZero){fixMethod(\"delete\");fixMethod(\"has\");IS_MAP&&fixMethod(\"get\")}if(buggyZero||chain!==inst)fixMethod(ADDER,true)}require(\"./$.cof\").set(C,NAME);require(\"./$.species\")(C);O[NAME]=C;$def($def.G+$def.W+$def.F*(C!=Base),O);if(!isWeak)$iter.std(C,NAME,common.getIterConstructor(),common.next,IS_MAP?\"key+value\":\"value\",!IS_MAP,true);return C}},{\"./$\":16,\"./$.assert\":4,\"./$.cof\":6,\"./$.def\":11,\"./$.iter\":15,\"./$.iter-detect\":14,\"./$.species\":22}],10:[function(require,module,exports){var assertFunction=require(\"./$.assert\").fn;module.exports=function(fn,that,length){assertFunction(fn);if(~length&&that===undefined)return fn;switch(length){case 1:return function(a){return fn.call(that,a)};case 2:return function(a,b){return fn.call(that,a,b)};case 3:return function(a,b,c){return fn.call(that,a,b,c)}}return function(){return fn.apply(that,arguments)}}},{\"./$.assert\":4}],11:[function(require,module,exports){var $=require(\"./$\"),global=$.g,core=$.core,isFunction=$.isFunction;function ctx(fn,that){return function(){return fn.apply(that,arguments)}}global.core=core;$def.F=1;$def.G=2;$def.S=4;$def.P=8;$def.B=16;$def.W=32;function $def(type,name,source){var key,own,out,exp,isGlobal=type&$def.G,target=isGlobal?global:type&$def.S?global[name]:(global[name]||{}).prototype,exports=isGlobal?core:core[name]||(core[name]={});if(isGlobal)source=name;for(key in source){own=!(type&$def.F)&&target&&key in target;out=(own?target:source)[key];if(type&$def.B&&own)exp=ctx(out,global);else exp=type&$def.P&&isFunction(out)?ctx(Function.call,out):out;if(target&&!own){if(isGlobal)target[key]=out;else delete target[key]&&$.hide(target,key,out)}if(exports[key]!=out)$.hide(exports,key,exp)}}module.exports=$def},{\"./$\":16}],12:[function(require,module,exports){module.exports=function($){$.FW=true;$.path=$.g;return $}},{}],13:[function(require,module,exports){module.exports=function(fn,args,that){var un=that===undefined;switch(args.length){case 0:return un?fn():fn.call(that);case 1:return un?fn(args[0]):fn.call(that,args[0]);case 2:return un?fn(args[0],args[1]):fn.call(that,args[0],args[1]);case 3:return un?fn(args[0],args[1],args[2]):fn.call(that,args[0],args[1],args[2]);case 4:return un?fn(args[0],args[1],args[2],args[3]):fn.call(that,args[0],args[1],args[2],args[3]);case 5:return un?fn(args[0],args[1],args[2],args[3],args[4]):fn.call(that,args[0],args[1],args[2],args[3],args[4])}return fn.apply(that,args)}},{}],14:[function(require,module,exports){var SYMBOL_ITERATOR=require(\"./$.wks\")(\"iterator\"),SAFE_CLOSING=false;try{var riter=[7][SYMBOL_ITERATOR]();riter[\"return\"]=function(){SAFE_CLOSING=true};Array.from(riter,function(){throw 2})}catch(e){}module.exports=function(exec){if(!SAFE_CLOSING)return false;var safe=false;try{var arr=[7],iter=arr[SYMBOL_ITERATOR]();iter.next=function(){safe=true};arr[SYMBOL_ITERATOR]=function(){return iter};exec(arr)}catch(e){}return safe}},{\"./$.wks\":27}],15:[function(require,module,exports){\"use strict\";var $=require(\"./$\"),ctx=require(\"./$.ctx\"),cof=require(\"./$.cof\"),$def=require(\"./$.def\"),assertObject=require(\"./$.assert\").obj,SYMBOL_ITERATOR=require(\"./$.wks\")(\"iterator\"),FF_ITERATOR=\"@@iterator\",Iterators={},IteratorPrototype={};var BUGGY=\"keys\"in[]&&!(\"next\"in[].keys());setIterator(IteratorPrototype,$.that);function setIterator(O,value){$.hide(O,SYMBOL_ITERATOR,value);if(FF_ITERATOR in[])$.hide(O,FF_ITERATOR,value)}function defineIterator(Constructor,NAME,value,DEFAULT){var proto=Constructor.prototype,iter=proto[SYMBOL_ITERATOR]||proto[FF_ITERATOR]||DEFAULT&&proto[DEFAULT]||value;if($.FW)setIterator(proto,iter);if(iter!==value){var iterProto=$.getProto(iter.call(new Constructor));cof.set(iterProto,NAME+\" Iterator\",true);if($.FW)$.has(proto,FF_ITERATOR)&&setIterator(iterProto,$.that)}Iterators[NAME]=iter;Iterators[NAME+\" Iterator\"]=$.that;return iter}function getIterator(it){var Symbol=$.g.Symbol,ext=it[Symbol&&Symbol.iterator||FF_ITERATOR],getIter=ext||it[SYMBOL_ITERATOR]||Iterators[cof.classof(it)];return assertObject(getIter.call(it))}function closeIterator(iterator){var ret=iterator[\"return\"];if(ret!==undefined)assertObject(ret.call(iterator))}function stepCall(iterator,fn,value,entries){try{return entries?fn(assertObject(value)[0],value[1]):fn(value)}catch(e){closeIterator(iterator);throw e}}var $iter=module.exports={BUGGY:BUGGY,Iterators:Iterators,prototype:IteratorPrototype,step:function(done,value){return{value:value,done:!!done}},stepCall:stepCall,close:closeIterator,is:function(it){var O=Object(it),Symbol=$.g.Symbol,SYM=Symbol&&Symbol.iterator||FF_ITERATOR;return SYM in O||SYMBOL_ITERATOR in O||$.has(Iterators,cof.classof(O))},get:getIterator,set:setIterator,create:function(Constructor,NAME,next,proto){Constructor.prototype=$.create(proto||$iter.prototype,{next:$.desc(1,next)});cof.set(Constructor,NAME+\" Iterator\")},define:defineIterator,std:function(Base,NAME,Constructor,next,DEFAULT,IS_SET,FORCE){function createIter(kind){return function(){return new Constructor(this,kind)}}$iter.create(Constructor,NAME,next);var entries=createIter(\"key+value\"),values=createIter(\"value\"),proto=Base.prototype,methods,key;if(DEFAULT==\"value\")values=defineIterator(Base,NAME,values,\"values\");else entries=defineIterator(Base,NAME,entries,\"entries\");if(DEFAULT){methods={entries:entries,keys:IS_SET?values:createIter(\"key\"),values:values};$def($def.P+$def.F*BUGGY,NAME,methods);if(FORCE)for(key in methods){if(!(key in proto))$.hide(proto,key,methods[key])}}},forOf:function(iterable,entries,fn,that){var iterator=getIterator(iterable),f=ctx(fn,that,entries?2:1),step;while(!(step=iterator.next()).done){if(stepCall(iterator,f,step.value,entries)===false){return closeIterator(iterator)}}}}},{\"./$\":16,\"./$.assert\":4,\"./$.cof\":6,\"./$.ctx\":10,\"./$.def\":11,\"./$.wks\":27}],16:[function(require,module,exports){\"use strict\";var global=typeof self!=\"undefined\"?self:Function(\"return this\")(),core={},defineProperty=Object.defineProperty,hasOwnProperty={}.hasOwnProperty,ceil=Math.ceil,floor=Math.floor,max=Math.max,min=Math.min;var DESC=!!function(){try{return defineProperty({},\"a\",{get:function(){return 2}}).a==2}catch(e){}}();var hide=createDefiner(1);function toInteger(it){return isNaN(it=+it)?0:(it>0?floor:ceil)(it)}function desc(bitmap,value){return{enumerable:!(bitmap&1),configurable:!(bitmap&2),writable:!(bitmap&4),value:value}}function simpleSet(object,key,value){object[key]=value;return object}function createDefiner(bitmap){return DESC?function(object,key,value){return $.setDesc(object,key,desc(bitmap,value))}:simpleSet}function isObject(it){return it!==null&&(typeof it==\"object\"||typeof it==\"function\")}function isFunction(it){return typeof it==\"function\"}function assertDefined(it){if(it==undefined)throw TypeError(\"Can't call method on  \"+it);return it}var $=module.exports=require(\"./$.fw\")({g:global,core:core,html:global.document&&document.documentElement,isObject:isObject,isFunction:isFunction,it:function(it){return it},that:function(){return this},toInteger:toInteger,toLength:function(it){return it>0?min(toInteger(it),9007199254740991):0},toIndex:function(index,length){index=toInteger(index);return index<0?max(index+length,0):min(index,length)},has:function(it,key){return hasOwnProperty.call(it,key)},create:Object.create,getProto:Object.getPrototypeOf,DESC:DESC,desc:desc,getDesc:Object.getOwnPropertyDescriptor,setDesc:defineProperty,getKeys:Object.keys,getNames:Object.getOwnPropertyNames,getSymbols:Object.getOwnPropertySymbols,assertDefined:assertDefined,ES5Object:Object,toObject:function(it){return $.ES5Object(assertDefined(it))},hide:hide,def:createDefiner(0),set:global.Symbol?simpleSet:hide,mix:function(target,src){for(var key in src)hide(target,key,src[key]);return target},each:[].forEach});if(typeof __e!=\"undefined\")__e=core;if(typeof __g!=\"undefined\")__g=global},{\"./$.fw\":12}],17:[function(require,module,exports){var $=require(\"./$\");module.exports=function(object,el){var O=$.toObject(object),keys=$.getKeys(O),length=keys.length,index=0,key;while(length>index)if(O[key=keys[index++]]===el)return key}},{\"./$\":16}],18:[function(require,module,exports){var $=require(\"./$\"),assertObject=require(\"./$.assert\").obj;module.exports=function ownKeys(it){assertObject(it);return $.getSymbols?$.getNames(it).concat($.getSymbols(it)):$.getNames(it)}},{\"./$\":16,\"./$.assert\":4}],19:[function(require,module,exports){\"use strict\";var $=require(\"./$\"),invoke=require(\"./$.invoke\"),assertFunction=require(\"./$.assert\").fn;module.exports=function(){var fn=assertFunction(this),length=arguments.length,pargs=Array(length),i=0,_=$.path._,holder=false;while(length>i)if((pargs[i]=arguments[i++])===_)holder=true;return function(){var that=this,_length=arguments.length,j=0,k=0,args;if(!holder&&!_length)return invoke(fn,pargs,that);args=pargs.slice();if(holder)for(;length>j;j++)if(args[j]===_)args[j]=arguments[k++];while(_length>k)args.push(arguments[k++]);return invoke(fn,args,that)}}},{\"./$\":16,\"./$.assert\":4,\"./$.invoke\":13}],20:[function(require,module,exports){\"use strict\";module.exports=function(regExp,replace,isStatic){var replacer=replace===Object(replace)?function(part){return replace[part]}:replace;return function(it){return String(isStatic?it:this).replace(regExp,replacer)}}},{}],21:[function(require,module,exports){var $=require(\"./$\"),assert=require(\"./$.assert\");function check(O,proto){assert.obj(O);assert(proto===null||$.isObject(proto),proto,\": can't set as prototype!\")}module.exports={set:Object.setPrototypeOf||(\"__proto__\"in{}?function(buggy,set){try{set=require(\"./$.ctx\")(Function.call,$.getDesc(Object.prototype,\"__proto__\").set,2);set({},[])}catch(e){buggy=true}return function setPrototypeOf(O,proto){check(O,proto);if(buggy)O.__proto__=proto;else set(O,proto);return O}}():undefined),check:check}},{\"./$\":16,\"./$.assert\":4,\"./$.ctx\":10}],22:[function(require,module,exports){var $=require(\"./$\");module.exports=function(C){if($.DESC&&$.FW)$.setDesc(C,require(\"./$.wks\")(\"species\"),{configurable:true,get:$.that})}},{\"./$\":16,\"./$.wks\":27}],23:[function(require,module,exports){\"use strict\";var $=require(\"./$\");module.exports=function(TO_STRING){return function(pos){var s=String($.assertDefined(this)),i=$.toInteger(pos),l=s.length,a,b;if(i<0||i>=l)return TO_STRING?\"\":undefined;a=s.charCodeAt(i);return a<55296||a>56319||i+1===l||(b=s.charCodeAt(i+1))<56320||b>57343?TO_STRING?s.charAt(i):a:TO_STRING?s.slice(i,i+2):(a-55296<<10)+(b-56320)+65536}}},{\"./$\":16}],24:[function(require,module,exports){\"use strict\";var $=require(\"./$\"),ctx=require(\"./$.ctx\"),cof=require(\"./$.cof\"),invoke=require(\"./$.invoke\"),global=$.g,isFunction=$.isFunction,html=$.html,document=global.document,process=global.process,setTask=global.setImmediate,clearTask=global.clearImmediate,postMessage=global.postMessage,addEventListener=global.addEventListener,MessageChannel=global.MessageChannel,counter=0,queue={},ONREADYSTATECHANGE=\"onreadystatechange\",defer,channel,port;function run(){var id=+this;if($.has(queue,id)){var fn=queue[id];delete queue[id];fn()}}function listner(event){run.call(event.data)}if(!isFunction(setTask)||!isFunction(clearTask)){setTask=function(fn){var args=[],i=1;while(arguments.length>i)args.push(arguments[i++]);queue[++counter]=function(){invoke(isFunction(fn)?fn:Function(fn),args)};defer(counter);return counter};clearTask=function(id){delete queue[id]};if(cof(process)==\"process\"){defer=function(id){process.nextTick(ctx(run,id,1))}}else if(addEventListener&&isFunction(postMessage)&&!global.importScripts){defer=function(id){postMessage(id,\"*\")};addEventListener(\"message\",listner,false)}else if(isFunction(MessageChannel)){channel=new MessageChannel;port=channel.port2;channel.port1.onmessage=listner;defer=ctx(port.postMessage,port,1)}else if(document&&ONREADYSTATECHANGE in document.createElement(\"script\")){defer=function(id){html.appendChild(document.createElement(\"script\"))[ONREADYSTATECHANGE]=function(){html.removeChild(this);run.call(id)}}}else{defer=function(id){setTimeout(ctx(run,id,1),0)}}}module.exports={set:setTask,clear:clearTask}},{\"./$\":16,\"./$.cof\":6,\"./$.ctx\":10,\"./$.invoke\":13}],25:[function(require,module,exports){var sid=0;function uid(key){return\"Symbol(\"+key+\")_\"+(++sid+Math.random()).toString(36)}uid.safe=require(\"./$\").g.Symbol||uid;module.exports=uid},{\"./$\":16}],26:[function(require,module,exports){var $=require(\"./$\"),UNSCOPABLES=require(\"./$.wks\")(\"unscopables\");if($.FW&&!(UNSCOPABLES in[]))$.hide(Array.prototype,UNSCOPABLES,{});module.exports=function(key){if($.FW)[][UNSCOPABLES][key]=true}},{\"./$\":16,\"./$.wks\":27}],27:[function(require,module,exports){var global=require(\"./$\").g,store={};module.exports=function(name){return store[name]||(store[name]=global.Symbol&&global.Symbol[name]||require(\"./$.uid\").safe(\"Symbol.\"+name))}},{\"./$\":16,\"./$.uid\":25}],28:[function(require,module,exports){var $=require(\"./$\"),cof=require(\"./$.cof\"),$def=require(\"./$.def\"),invoke=require(\"./$.invoke\"),arrayMethod=require(\"./$.array-methods\"),IE_PROTO=require(\"./$.uid\").safe(\"__proto__\"),assert=require(\"./$.assert\"),assertObject=assert.obj,ObjectProto=Object.prototype,A=[],slice=A.slice,indexOf=A.indexOf,classof=cof.classof,defineProperties=Object.defineProperties,has=$.has,defineProperty=$.setDesc,getOwnDescriptor=$.getDesc,isFunction=$.isFunction,toObject=$.toObject,toLength=$.toLength,IE8_DOM_DEFINE=false;if(!$.DESC){try{IE8_DOM_DEFINE=defineProperty(document.createElement(\"div\"),\"x\",{get:function(){return 8}}).x==8}catch(e){}$.setDesc=function(O,P,Attributes){if(IE8_DOM_DEFINE)try{return defineProperty(O,P,Attributes)}catch(e){}if(\"get\"in Attributes||\"set\"in Attributes)throw TypeError(\"Accessors not supported!\");if(\"value\"in Attributes)assertObject(O)[P]=Attributes.value;return O};$.getDesc=function(O,P){if(IE8_DOM_DEFINE)try{return getOwnDescriptor(O,P)}catch(e){}if(has(O,P))return $.desc(!ObjectProto.propertyIsEnumerable.call(O,P),O[P])};defineProperties=function(O,Properties){assertObject(O);var keys=$.getKeys(Properties),length=keys.length,i=0,P;while(length>i)$.setDesc(O,P=keys[i++],Properties[P]);return O}}$def($def.S+$def.F*!$.DESC,\"Object\",{getOwnPropertyDescriptor:$.getDesc,defineProperty:$.setDesc,defineProperties:defineProperties});var keys1=(\"constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,\"+\"toLocaleString,toString,valueOf\").split(\",\"),keys2=keys1.concat(\"length\",\"prototype\"),keysLen1=keys1.length;var createDict=function(){var iframe=document.createElement(\"iframe\"),i=keysLen1,gt=\">\",iframeDocument;iframe.style.display=\"none\";$.html.appendChild(iframe);iframe.src=\"javascript:\";iframeDocument=iframe.contentWindow.document;iframeDocument.open();iframeDocument.write(\"<script>document.F=Object</script\"+gt);iframeDocument.close();createDict=iframeDocument.F;while(i--)delete createDict.prototype[keys1[i]];return createDict()};function createGetKeys(names,length){return function(object){var O=toObject(object),i=0,result=[],key;for(key in O)if(key!=IE_PROTO)has(O,key)&&result.push(key);while(length>i)if(has(O,key=names[i++])){~indexOf.call(result,key)||result.push(key)}return result}}function isPrimitive(it){return!$.isObject(it)}function Empty(){}$def($def.S,\"Object\",{getPrototypeOf:$.getProto=$.getProto||function(O){O=Object(assert.def(O));if(has(O,IE_PROTO))return O[IE_PROTO];if(isFunction(O.constructor)&&O instanceof O.constructor){return O.constructor.prototype}return O instanceof Object?ObjectProto:null},getOwnPropertyNames:$.getNames=$.getNames||createGetKeys(keys2,keys2.length,true),create:$.create=$.create||function(O,Properties){var result;if(O!==null){Empty.prototype=assertObject(O);result=new Empty;Empty.prototype=null;result[IE_PROTO]=O}else result=createDict();return Properties===undefined?result:defineProperties(result,Properties)},keys:$.getKeys=$.getKeys||createGetKeys(keys1,keysLen1,false),seal:$.it,freeze:$.it,preventExtensions:$.it,isSealed:isPrimitive,isFrozen:isPrimitive,isExtensible:$.isObject});$def($def.P,\"Function\",{bind:function(that){var fn=assert.fn(this),partArgs=slice.call(arguments,1);function bound(){var args=partArgs.concat(slice.call(arguments));return invoke(fn,args,this instanceof bound?$.create(fn.prototype):that)}if(fn.prototype)bound.prototype=fn.prototype;return bound}});function arrayMethodFix(fn){return function(){return fn.apply($.ES5Object(this),arguments)}}if(!(0 in Object(\"z\")&&\"z\"[0]==\"z\")){$.ES5Object=function(it){return cof(it)==\"String\"?it.split(\"\"):Object(it)}}$def($def.P+$def.F*($.ES5Object!=Object),\"Array\",{slice:arrayMethodFix(slice),join:arrayMethodFix(A.join)});$def($def.S,\"Array\",{isArray:function(arg){return cof(arg)==\"Array\"}});function createArrayReduce(isRight){return function(callbackfn,memo){assert.fn(callbackfn);var O=toObject(this),length=toLength(O.length),index=isRight?length-1:0,i=isRight?-1:1;if(arguments.length<2)for(;;){if(index in O){memo=O[index];index+=i;break}index+=i;assert(isRight?index>=0:length>index,\"Reduce of empty array with no initial value\")}for(;isRight?index>=0:length>index;index+=i)if(index in O){memo=callbackfn(memo,O[index],index,this)}return memo}}$def($def.P,\"Array\",{forEach:$.each=$.each||arrayMethod(0),map:arrayMethod(1),filter:arrayMethod(2),some:arrayMethod(3),every:arrayMethod(4),reduce:createArrayReduce(false),reduceRight:createArrayReduce(true),indexOf:indexOf=indexOf||require(\"./$.array-includes\")(false),lastIndexOf:function(el,fromIndex){var O=toObject(this),length=toLength(O.length),index=length-1;if(arguments.length>1)index=Math.min(index,$.toInteger(fromIndex));if(index<0)index=toLength(length+index);for(;index>=0;index--)if(index in O)if(O[index]===el)return index;return-1}});$def($def.P,\"String\",{trim:require(\"./$.replacer\")(/^\\s*([\\s\\S]*\\S)?\\s*$/,\"$1\")});$def($def.S,\"Date\",{now:function(){return+new Date}});function lz(num){return num>9?num:\"0\"+num}$def($def.P,\"Date\",{toISOString:function(){if(!isFinite(this))throw RangeError(\"Invalid time value\");var d=this,y=d.getUTCFullYear(),m=d.getUTCMilliseconds(),s=y<0?\"-\":y>9999?\"+\":\"\";return s+(\"00000\"+Math.abs(y)).slice(s?-6:-4)+\"-\"+lz(d.getUTCMonth()+1)+\"-\"+lz(d.getUTCDate())+\"T\"+lz(d.getUTCHours())+\":\"+lz(d.getUTCMinutes())+\":\"+lz(d.getUTCSeconds())+\".\"+(m>99?m:\"0\"+lz(m))+\"Z\"}});if(classof(function(){return arguments}())==\"Object\")cof.classof=function(it){var tag=classof(it);return tag==\"Object\"&&isFunction(it.callee)?\"Arguments\":tag}},{\"./$\":16,\"./$.array-includes\":2,\"./$.array-methods\":3,\"./$.assert\":4,\"./$.cof\":6,\"./$.def\":11,\"./$.invoke\":13,\"./$.replacer\":20,\"./$.uid\":25}],29:[function(require,module,exports){\"use strict\";var $=require(\"./$\"),$def=require(\"./$.def\"),toIndex=$.toIndex;$def($def.P,\"Array\",{copyWithin:function copyWithin(target,start){var O=Object($.assertDefined(this)),len=$.toLength(O.length),to=toIndex(target,len),from=toIndex(start,len),end=arguments[2],fin=end===undefined?len:toIndex(end,len),count=Math.min(fin-from,len-to),inc=1;if(from<to&&to<from+count){inc=-1;from=from+count-1;to=to+count-1}while(count-->0){if(from in O)O[to]=O[from];else delete O[to];to+=inc;from+=inc}return O}});require(\"./$.unscope\")(\"copyWithin\")},{\"./$\":16,\"./$.def\":11,\"./$.unscope\":26}],30:[function(require,module,exports){\"use strict\";var $=require(\"./$\"),$def=require(\"./$.def\"),toIndex=$.toIndex;$def($def.P,\"Array\",{fill:function fill(value){var O=Object($.assertDefined(this)),length=$.toLength(O.length),index=toIndex(arguments[1],length),end=arguments[2],endPos=end===undefined?length:toIndex(end,length);while(endPos>index)O[index++]=value;return O}});require(\"./$.unscope\")(\"fill\")},{\"./$\":16,\"./$.def\":11,\"./$.unscope\":26}],31:[function(require,module,exports){var $def=require(\"./$.def\");$def($def.P,\"Array\",{findIndex:require(\"./$.array-methods\")(6)});require(\"./$.unscope\")(\"findIndex\")},{\"./$.array-methods\":3,\"./$.def\":11,\"./$.unscope\":26}],32:[function(require,module,exports){var $def=require(\"./$.def\");$def($def.P,\"Array\",{find:require(\"./$.array-methods\")(5)});require(\"./$.unscope\")(\"find\")},{\"./$.array-methods\":3,\"./$.def\":11,\"./$.unscope\":26}],33:[function(require,module,exports){var $=require(\"./$\"),ctx=require(\"./$.ctx\"),$def=require(\"./$.def\"),$iter=require(\"./$.iter\"),stepCall=$iter.stepCall;$def($def.S+$def.F*!require(\"./$.iter-detect\")(function(iter){Array.from(iter)}),\"Array\",{from:function from(arrayLike){var O=Object($.assertDefined(arrayLike)),mapfn=arguments[1],mapping=mapfn!==undefined,f=mapping?ctx(mapfn,arguments[2],2):undefined,index=0,length,result,step,iterator;if($iter.is(O)){iterator=$iter.get(O);result=new(typeof this==\"function\"?this:Array);for(;!(step=iterator.next()).done;index++){result[index]=mapping?stepCall(iterator,f,[step.value,index],true):step.value}}else{result=new(typeof this==\"function\"?this:Array)(length=$.toLength(O.length));for(;length>index;index++){result[index]=mapping?f(O[index],index):O[index]}}result.length=index;return result}})},{\"./$\":16,\"./$.ctx\":10,\"./$.def\":11,\"./$.iter\":15,\"./$.iter-detect\":14}],34:[function(require,module,exports){var $=require(\"./$\"),setUnscope=require(\"./$.unscope\"),ITER=require(\"./$.uid\").safe(\"iter\"),$iter=require(\"./$.iter\"),step=$iter.step,Iterators=$iter.Iterators;$iter.std(Array,\"Array\",function(iterated,kind){$.set(this,ITER,{o:$.toObject(iterated),i:0,k:kind})},function(){var iter=this[ITER],O=iter.o,kind=iter.k,index=iter.i++;if(!O||index>=O.length){iter.o=undefined;return step(1)}if(kind==\"key\")return step(0,index);if(kind==\"value\")return step(0,O[index]);return step(0,[index,O[index]])},\"value\");Iterators.Arguments=Iterators.Array;setUnscope(\"keys\");setUnscope(\"values\");setUnscope(\"entries\")},{\"./$\":16,\"./$.iter\":15,\"./$.uid\":25,\"./$.unscope\":26}],35:[function(require,module,exports){var $def=require(\"./$.def\");$def($def.S,\"Array\",{of:function of(){var index=0,length=arguments.length,result=new(typeof this==\"function\"?this:Array)(length);while(length>index)result[index]=arguments[index++];result.length=length;return result}})},{\"./$.def\":11}],36:[function(require,module,exports){require(\"./$.species\")(Array)},{\"./$.species\":22}],37:[function(require,module,exports){\"use strict\";var $=require(\"./$\"),NAME=\"name\",setDesc=$.setDesc,FunctionProto=Function.prototype;NAME in FunctionProto||$.FW&&$.DESC&&setDesc(FunctionProto,NAME,{configurable:true,get:function(){var match=String(this).match(/^\\s*function ([^ (]*)/),name=match?match[1]:\"\";$.has(this,NAME)||setDesc(this,NAME,$.desc(5,name));return name},set:function(value){$.has(this,NAME)||setDesc(this,NAME,$.desc(0,value))}})},{\"./$\":16}],38:[function(require,module,exports){\"use strict\";var strong=require(\"./$.collection-strong\");require(\"./$.collection\")(\"Map\",{get:function get(key){var entry=strong.getEntry(this,key);return entry&&entry.v},set:function set(key,value){return strong.def(this,key===0?0:key,value)}},strong,true)},{\"./$.collection\":9,\"./$.collection-strong\":7}],39:[function(require,module,exports){var Infinity=1/0,$def=require(\"./$.def\"),E=Math.E,pow=Math.pow,abs=Math.abs,exp=Math.exp,log=Math.log,sqrt=Math.sqrt,ceil=Math.ceil,floor=Math.floor,EPSILON=pow(2,-52),EPSILON32=pow(2,-23),MAX32=pow(2,127)*(2-EPSILON32),MIN32=pow(2,-126);function roundTiesToEven(n){return n+1/EPSILON-1/EPSILON}function sign(x){return(x=+x)==0||x!=x?x:x<0?-1:1;\n\n}function asinh(x){return!isFinite(x=+x)||x==0?x:x<0?-asinh(-x):log(x+sqrt(x*x+1))}function expm1(x){return(x=+x)==0?x:x>-1e-6&&x<1e-6?x+x*x/2:exp(x)-1}$def($def.S,\"Math\",{acosh:function acosh(x){return(x=+x)<1?NaN:isFinite(x)?log(x/E+sqrt(x+1)*sqrt(x-1)/E)+1:x},asinh:asinh,atanh:function atanh(x){return(x=+x)==0?x:log((1+x)/(1-x))/2},cbrt:function cbrt(x){return sign(x=+x)*pow(abs(x),1/3)},clz32:function clz32(x){return(x>>>=0)?31-floor(log(x+.5)*Math.LOG2E):32},cosh:function cosh(x){return(exp(x=+x)+exp(-x))/2},expm1:expm1,fround:function fround(x){var $abs=abs(x),$sign=sign(x),a,result;if($abs<MIN32)return $sign*roundTiesToEven($abs/MIN32/EPSILON32)*MIN32*EPSILON32;a=(1+EPSILON32/EPSILON)*$abs;result=a-(a-$abs);if(result>MAX32||result!=result)return $sign*Infinity;return $sign*result},hypot:function hypot(value1,value2){var sum=0,len1=arguments.length,len2=len1,args=Array(len1),larg=-Infinity,arg;while(len1--){arg=args[len1]=+arguments[len1];if(arg==Infinity||arg==-Infinity)return Infinity;if(arg>larg)larg=arg}larg=arg||1;while(len2--)sum+=pow(args[len2]/larg,2);return larg*sqrt(sum)},imul:function imul(x,y){var UInt16=65535,xn=+x,yn=+y,xl=UInt16&xn,yl=UInt16&yn;return 0|xl*yl+((UInt16&xn>>>16)*yl+xl*(UInt16&yn>>>16)<<16>>>0)},log1p:function log1p(x){return(x=+x)>-1e-8&&x<1e-8?x-x*x/2:log(1+x)},log10:function log10(x){return log(x)/Math.LN10},log2:function log2(x){return log(x)/Math.LN2},sign:sign,sinh:function sinh(x){return abs(x=+x)<1?(expm1(x)-expm1(-x))/2:(exp(x-1)-exp(-x-1))*(E/2)},tanh:function tanh(x){var a=expm1(x=+x),b=expm1(-x);return a==Infinity?1:b==Infinity?-1:(a-b)/(exp(x)+exp(-x))},trunc:function trunc(it){return(it>0?floor:ceil)(it)}})},{\"./$.def\":11}],40:[function(require,module,exports){\"use strict\";var $=require(\"./$\"),isObject=$.isObject,isFunction=$.isFunction,NUMBER=\"Number\",Number=$.g[NUMBER],Base=Number,proto=Number.prototype;function toPrimitive(it){var fn,val;if(isFunction(fn=it.valueOf)&&!isObject(val=fn.call(it)))return val;if(isFunction(fn=it.toString)&&!isObject(val=fn.call(it)))return val;throw TypeError(\"Can't convert object to number\")}function toNumber(it){if(isObject(it))it=toPrimitive(it);if(typeof it==\"string\"&&it.length>2&&it.charCodeAt(0)==48){var binary=false;switch(it.charCodeAt(1)){case 66:case 98:binary=true;case 79:case 111:return parseInt(it.slice(2),binary?2:8)}}return+it}if($.FW&&!(Number(\"0o1\")&&Number(\"0b1\"))){Number=function Number(it){return this instanceof Number?new Base(toNumber(it)):toNumber(it)};$.each.call($.DESC?$.getNames(Base):(\"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,\"+\"EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,\"+\"MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger\").split(\",\"),function(key){if($.has(Base,key)&&!$.has(Number,key)){$.setDesc(Number,key,$.getDesc(Base,key))}});Number.prototype=proto;proto.constructor=Number;$.hide($.g,NUMBER,Number)}},{\"./$\":16}],41:[function(require,module,exports){var $=require(\"./$\"),$def=require(\"./$.def\"),abs=Math.abs,floor=Math.floor,_isFinite=$.g.isFinite,MAX_SAFE_INTEGER=9007199254740991;function isInteger(it){return!$.isObject(it)&&_isFinite(it)&&floor(it)===it}$def($def.S,\"Number\",{EPSILON:Math.pow(2,-52),isFinite:function isFinite(it){return typeof it==\"number\"&&_isFinite(it)},isInteger:isInteger,isNaN:function isNaN(number){return number!=number},isSafeInteger:function isSafeInteger(number){return isInteger(number)&&abs(number)<=MAX_SAFE_INTEGER},MAX_SAFE_INTEGER:MAX_SAFE_INTEGER,MIN_SAFE_INTEGER:-MAX_SAFE_INTEGER,parseFloat:parseFloat,parseInt:parseInt})},{\"./$\":16,\"./$.def\":11}],42:[function(require,module,exports){var $def=require(\"./$.def\");$def($def.S,\"Object\",{assign:require(\"./$.assign\")})},{\"./$.assign\":5,\"./$.def\":11}],43:[function(require,module,exports){var $def=require(\"./$.def\");$def($def.S,\"Object\",{is:function is(x,y){return x===y?x!==0||1/x===1/y:x!=x&&y!=y}})},{\"./$.def\":11}],44:[function(require,module,exports){var $def=require(\"./$.def\");$def($def.S,\"Object\",{setPrototypeOf:require(\"./$.set-proto\").set})},{\"./$.def\":11,\"./$.set-proto\":21}],45:[function(require,module,exports){var $=require(\"./$\"),$def=require(\"./$.def\"),isObject=$.isObject,toObject=$.toObject;function wrapObjectMethod(METHOD,MODE){var fn=($.core.Object||{})[METHOD]||Object[METHOD],f=0,o={};o[METHOD]=MODE==1?function(it){return isObject(it)?fn(it):it}:MODE==2?function(it){return isObject(it)?fn(it):true}:MODE==3?function(it){return isObject(it)?fn(it):false}:MODE==4?function getOwnPropertyDescriptor(it,key){return fn(toObject(it),key)}:MODE==5?function getPrototypeOf(it){return fn(Object($.assertDefined(it)))}:function(it){return fn(toObject(it))};try{fn(\"z\")}catch(e){f=1}$def($def.S+$def.F*f,\"Object\",o)}wrapObjectMethod(\"freeze\",1);wrapObjectMethod(\"seal\",1);wrapObjectMethod(\"preventExtensions\",1);wrapObjectMethod(\"isFrozen\",2);wrapObjectMethod(\"isSealed\",2);wrapObjectMethod(\"isExtensible\",3);wrapObjectMethod(\"getOwnPropertyDescriptor\",4);wrapObjectMethod(\"getPrototypeOf\",5);wrapObjectMethod(\"keys\");wrapObjectMethod(\"getOwnPropertyNames\")},{\"./$\":16,\"./$.def\":11}],46:[function(require,module,exports){\"use strict\";var $=require(\"./$\"),cof=require(\"./$.cof\"),tmp={};tmp[require(\"./$.wks\")(\"toStringTag\")]=\"z\";if($.FW&&cof(tmp)!=\"z\")$.hide(Object.prototype,\"toString\",function toString(){return\"[object \"+cof.classof(this)+\"]\"})},{\"./$\":16,\"./$.cof\":6,\"./$.wks\":27}],47:[function(require,module,exports){\"use strict\";var $=require(\"./$\"),ctx=require(\"./$.ctx\"),cof=require(\"./$.cof\"),$def=require(\"./$.def\"),assert=require(\"./$.assert\"),$iter=require(\"./$.iter\"),SPECIES=require(\"./$.wks\")(\"species\"),RECORD=require(\"./$.uid\").safe(\"record\"),forOf=$iter.forOf,PROMISE=\"Promise\",global=$.g,process=global.process,asap=process&&process.nextTick||require(\"./$.task\").set,P=global[PROMISE],Base=P,isFunction=$.isFunction,isObject=$.isObject,assertFunction=assert.fn,assertObject=assert.obj,test;function getConstructor(C){var S=assertObject(C)[SPECIES];return S!=undefined?S:C}function isThenable(it){var then;if(isObject(it))then=it.then;return isFunction(then)?then:false}function isUnhandled(promise){var record=promise[RECORD],chain=record.c,i=0,react;if(record.h)return false;while(chain.length>i){react=chain[i++];if(react.fail||!isUnhandled(react.P))return false}return true}function notify(record,isReject){var chain=record.c;if(isReject||chain.length)asap(function(){var promise=record.p,value=record.v,ok=record.s==1,i=0;if(isReject&&isUnhandled(promise)){setTimeout(function(){if(isUnhandled(promise)){if(cof(process)==\"process\"){process.emit(\"unhandledRejection\",value,promise)}else if(global.console&&isFunction(console.error)){console.error(\"Unhandled promise rejection\",value)}}},1e3)}else while(chain.length>i)!function(react){var cb=ok?react.ok:react.fail,ret,then;try{if(cb){if(!ok)record.h=true;ret=cb===true?value:cb(value);if(ret===react.P){react.rej(TypeError(PROMISE+\"-chain cycle\"))}else if(then=isThenable(ret)){then.call(ret,react.res,react.rej)}else react.res(ret)}else react.rej(value)}catch(err){react.rej(err)}}(chain[i++]);chain.length=0})}function $reject(value){var record=this;if(record.d)return;record.d=true;record=record.r||record;record.v=value;record.s=2;notify(record,true)}function $resolve(value){var record=this,then,wrapper;if(record.d)return;record.d=true;record=record.r||record;try{if(then=isThenable(value)){wrapper={r:record,d:false};then.call(value,ctx($resolve,wrapper,1),ctx($reject,wrapper,1))}else{record.v=value;record.s=1;notify(record)}}catch(err){$reject.call(wrapper||{r:record,d:false},err)}}if(!(isFunction(P)&&isFunction(P.resolve)&&P.resolve(test=new P(function(){}))==test)){P=function Promise(executor){assertFunction(executor);var record={p:assert.inst(this,P,PROMISE),c:[],s:0,d:false,v:undefined,h:false};$.hide(this,RECORD,record);try{executor(ctx($resolve,record,1),ctx($reject,record,1))}catch(err){$reject.call(record,err)}};$.mix(P.prototype,{then:function then(onFulfilled,onRejected){var S=assertObject(assertObject(this).constructor)[SPECIES];var react={ok:isFunction(onFulfilled)?onFulfilled:true,fail:isFunction(onRejected)?onRejected:false};var promise=react.P=new(S!=undefined?S:P)(function(res,rej){react.res=assertFunction(res);react.rej=assertFunction(rej)});var record=this[RECORD];record.c.push(react);record.s&&notify(record);return promise},\"catch\":function(onRejected){return this.then(undefined,onRejected)}})}$def($def.G+$def.W+$def.F*(P!=Base),{Promise:P});cof.set(P,PROMISE);require(\"./$.species\")(P);$def($def.S,PROMISE,{reject:function reject(r){return new(getConstructor(this))(function(res,rej){rej(r)})},resolve:function resolve(x){return isObject(x)&&RECORD in x&&$.getProto(x)===this.prototype?x:new(getConstructor(this))(function(res){res(x)})}});$def($def.S+$def.F*!require(\"./$.iter-detect\")(function(iter){P.all(iter)[\"catch\"](function(){})}),PROMISE,{all:function all(iterable){var C=getConstructor(this),values=[];return new C(function(res,rej){forOf(iterable,false,values.push,values);var remaining=values.length,results=Array(remaining);if(remaining)$.each.call(values,function(promise,index){C.resolve(promise).then(function(value){results[index]=value;--remaining||res(results)},rej)});else res(results)})},race:function race(iterable){var C=getConstructor(this);return new C(function(res,rej){forOf(iterable,false,function(promise){C.resolve(promise).then(res,rej)})})}})},{\"./$\":16,\"./$.assert\":4,\"./$.cof\":6,\"./$.ctx\":10,\"./$.def\":11,\"./$.iter\":15,\"./$.iter-detect\":14,\"./$.species\":22,\"./$.task\":24,\"./$.uid\":25,\"./$.wks\":27}],48:[function(require,module,exports){var $=require(\"./$\"),$def=require(\"./$.def\"),setProto=require(\"./$.set-proto\"),$iter=require(\"./$.iter\"),ITER=require(\"./$.uid\").safe(\"iter\"),step=$iter.step,assert=require(\"./$.assert\"),isObject=$.isObject,getDesc=$.getDesc,setDesc=$.setDesc,getProto=$.getProto,apply=Function.apply,assertObject=assert.obj,_isExtensible=Object.isExtensible||$.it;function Enumerate(iterated){var keys=[],key;for(key in iterated)keys.push(key);$.set(this,ITER,{o:iterated,a:keys,i:0})}$iter.create(Enumerate,\"Object\",function(){var iter=this[ITER],keys=iter.a,key;do{if(iter.i>=keys.length)return step(1)}while(!((key=keys[iter.i++])in iter.o));return step(0,key)});function wrap(fn){return function(it){assertObject(it);try{fn.apply(undefined,arguments);return true}catch(e){return false}}}function get(target,propertyKey){var receiver=arguments.length<3?target:arguments[2],desc=getDesc(assertObject(target),propertyKey),proto;if(desc)return $.has(desc,\"value\")?desc.value:desc.get===undefined?undefined:desc.get.call(receiver);return isObject(proto=getProto(target))?get(proto,propertyKey,receiver):undefined}function set(target,propertyKey,V){var receiver=arguments.length<4?target:arguments[3],ownDesc=getDesc(assertObject(target),propertyKey),existingDescriptor,proto;if(!ownDesc){if(isObject(proto=getProto(target))){return set(proto,propertyKey,V,receiver)}ownDesc=$.desc(0)}if($.has(ownDesc,\"value\")){if(ownDesc.writable===false||!isObject(receiver))return false;existingDescriptor=getDesc(receiver,propertyKey)||$.desc(0);existingDescriptor.value=V;setDesc(receiver,propertyKey,existingDescriptor);return true}return ownDesc.set===undefined?false:(ownDesc.set.call(receiver,V),true)}var reflect={apply:require(\"./$.ctx\")(Function.call,apply,3),construct:function construct(target,argumentsList){var proto=assert.fn(arguments.length<3?target:arguments[2]).prototype,instance=$.create(isObject(proto)?proto:Object.prototype),result=apply.call(target,instance,argumentsList);return isObject(result)?result:instance},defineProperty:wrap(setDesc),deleteProperty:function deleteProperty(target,propertyKey){var desc=getDesc(assertObject(target),propertyKey);return desc&&!desc.configurable?false:delete target[propertyKey]},enumerate:function enumerate(target){return new Enumerate(assertObject(target))},get:get,getOwnPropertyDescriptor:function getOwnPropertyDescriptor(target,propertyKey){return getDesc(assertObject(target),propertyKey)},getPrototypeOf:function getPrototypeOf(target){return getProto(assertObject(target))},has:function has(target,propertyKey){return propertyKey in target},isExtensible:function isExtensible(target){return!!_isExtensible(assertObject(target))},ownKeys:require(\"./$.own-keys\"),preventExtensions:wrap(Object.preventExtensions||$.it),set:set};if(setProto)reflect.setPrototypeOf=function setPrototypeOf(target,proto){setProto.check(target,proto);try{setProto.set(target,proto);return true}catch(e){return false}};$def($def.G,{Reflect:{}});$def($def.S,\"Reflect\",reflect)},{\"./$\":16,\"./$.assert\":4,\"./$.ctx\":10,\"./$.def\":11,\"./$.iter\":15,\"./$.own-keys\":18,\"./$.set-proto\":21,\"./$.uid\":25}],49:[function(require,module,exports){var $=require(\"./$\"),cof=require(\"./$.cof\"),RegExp=$.g.RegExp,Base=RegExp,proto=RegExp.prototype;if($.FW&&$.DESC){if(!function(){try{return RegExp(/a/g,\"i\")==\"/a/i\"}catch(e){}}()){RegExp=function RegExp(pattern,flags){return new Base(cof(pattern)==\"RegExp\"&&flags!==undefined?pattern.source:pattern,flags)};$.each.call($.getNames(Base),function(key){key in RegExp||$.setDesc(RegExp,key,{configurable:true,get:function(){return Base[key]},set:function(it){Base[key]=it}})});proto.constructor=RegExp;RegExp.prototype=proto;$.hide($.g,\"RegExp\",RegExp)}if(/./g.flags!=\"g\")$.setDesc(proto,\"flags\",{configurable:true,get:require(\"./$.replacer\")(/^.*\\/(\\w*)$/,\"$1\")})}require(\"./$.species\")(RegExp)},{\"./$\":16,\"./$.cof\":6,\"./$.replacer\":20,\"./$.species\":22}],50:[function(require,module,exports){\"use strict\";var strong=require(\"./$.collection-strong\");require(\"./$.collection\")(\"Set\",{add:function add(value){return strong.def(this,value=value===0?0:value,value)}},strong)},{\"./$.collection\":9,\"./$.collection-strong\":7}],51:[function(require,module,exports){var $def=require(\"./$.def\");$def($def.P,\"String\",{codePointAt:require(\"./$.string-at\")(false)})},{\"./$.def\":11,\"./$.string-at\":23}],52:[function(require,module,exports){\"use strict\";var $=require(\"./$\"),cof=require(\"./$.cof\"),$def=require(\"./$.def\"),toLength=$.toLength;$def($def.P,\"String\",{endsWith:function endsWith(searchString){if(cof(searchString)==\"RegExp\")throw TypeError();var that=String($.assertDefined(this)),endPosition=arguments[1],len=toLength(that.length),end=endPosition===undefined?len:Math.min(toLength(endPosition),len);searchString+=\"\";return that.slice(end-searchString.length,end)===searchString}})},{\"./$\":16,\"./$.cof\":6,\"./$.def\":11}],53:[function(require,module,exports){var $def=require(\"./$.def\"),toIndex=require(\"./$\").toIndex,fromCharCode=String.fromCharCode;$def($def.S,\"String\",{fromCodePoint:function fromCodePoint(x){var res=[],len=arguments.length,i=0,code;while(len>i){code=+arguments[i++];if(toIndex(code,1114111)!==code)throw RangeError(code+\" is not a valid code point\");res.push(code<65536?fromCharCode(code):fromCharCode(((code-=65536)>>10)+55296,code%1024+56320))}return res.join(\"\")}})},{\"./$\":16,\"./$.def\":11}],54:[function(require,module,exports){\"use strict\";var $=require(\"./$\"),cof=require(\"./$.cof\"),$def=require(\"./$.def\");$def($def.P,\"String\",{includes:function includes(searchString){if(cof(searchString)==\"RegExp\")throw TypeError();return!!~String($.assertDefined(this)).indexOf(searchString,arguments[1])}})},{\"./$\":16,\"./$.cof\":6,\"./$.def\":11}],55:[function(require,module,exports){var set=require(\"./$\").set,at=require(\"./$.string-at\")(true),ITER=require(\"./$.uid\").safe(\"iter\"),$iter=require(\"./$.iter\"),step=$iter.step;$iter.std(String,\"String\",function(iterated){set(this,ITER,{o:String(iterated),i:0})},function(){var iter=this[ITER],O=iter.o,index=iter.i,point;if(index>=O.length)return step(1);point=at.call(O,index);iter.i+=point.length;return step(0,point)})},{\"./$\":16,\"./$.iter\":15,\"./$.string-at\":23,\"./$.uid\":25}],56:[function(require,module,exports){var $=require(\"./$\"),$def=require(\"./$.def\");$def($def.S,\"String\",{raw:function raw(callSite){var tpl=$.toObject(callSite.raw),len=$.toLength(tpl.length),sln=arguments.length,res=[],i=0;while(len>i){res.push(String(tpl[i++]));if(i<sln)res.push(String(arguments[i]))}return res.join(\"\")}})},{\"./$\":16,\"./$.def\":11}],57:[function(require,module,exports){\"use strict\";var $=require(\"./$\"),$def=require(\"./$.def\");$def($def.P,\"String\",{repeat:function repeat(count){var str=String($.assertDefined(this)),res=\"\",n=$.toInteger(count);if(n<0||n==Infinity)throw RangeError(\"Count can't be negative\");for(;n>0;(n>>>=1)&&(str+=str))if(n&1)res+=str;return res}})},{\"./$\":16,\"./$.def\":11}],58:[function(require,module,exports){\"use strict\";var $=require(\"./$\"),cof=require(\"./$.cof\"),$def=require(\"./$.def\");$def($def.P,\"String\",{startsWith:function startsWith(searchString){if(cof(searchString)==\"RegExp\")throw TypeError();var that=String($.assertDefined(this)),index=$.toLength(Math.min(arguments[1],that.length));searchString+=\"\";return that.slice(index,index+searchString.length)===searchString}})},{\"./$\":16,\"./$.cof\":6,\"./$.def\":11}],59:[function(require,module,exports){\"use strict\";var $=require(\"./$\"),setTag=require(\"./$.cof\").set,uid=require(\"./$.uid\"),$def=require(\"./$.def\"),keyOf=require(\"./$.keyof\"),has=$.has,hide=$.hide,getNames=$.getNames,toObject=$.toObject,Symbol=$.g.Symbol,Base=Symbol,setter=false,TAG=uid.safe(\"tag\"),SymbolRegistry={},AllSymbols={};function wrap(tag){var sym=AllSymbols[tag]=$.set($.create(Symbol.prototype),TAG,tag);$.DESC&&setter&&$.setDesc(Object.prototype,tag,{configurable:true,set:function(value){hide(this,tag,value)}});return sym}if(!$.isFunction(Symbol)){Symbol=function Symbol(description){if(this instanceof Symbol)throw TypeError(\"Symbol is not a constructor\");return wrap(uid(description))};hide(Symbol.prototype,\"toString\",function(){return this[TAG]})}$def($def.G+$def.W,{Symbol:Symbol});var symbolStatics={\"for\":function(key){return has(SymbolRegistry,key+=\"\")?SymbolRegistry[key]:SymbolRegistry[key]=Symbol(key)},keyFor:function keyFor(key){return keyOf(SymbolRegistry,key)},pure:uid.safe,set:$.set,useSetter:function(){setter=true},useSimple:function(){setter=false}};$.each.call((\"hasInstance,isConcatSpreadable,iterator,match,replace,search,\"+\"species,split,toPrimitive,toStringTag,unscopables\").split(\",\"),function(it){var sym=require(\"./$.wks\")(it);symbolStatics[it]=Symbol===Base?sym:wrap(sym)});setter=true;$def($def.S,\"Symbol\",symbolStatics);$def($def.S+$def.F*(Symbol!=Base),\"Object\",{getOwnPropertyNames:function getOwnPropertyNames(it){var names=getNames(toObject(it)),result=[],key,i=0;while(names.length>i)has(AllSymbols,key=names[i++])||result.push(key);return result},getOwnPropertySymbols:function getOwnPropertySymbols(it){var names=getNames(toObject(it)),result=[],key,i=0;while(names.length>i)has(AllSymbols,key=names[i++])&&result.push(AllSymbols[key]);return result}});setTag(Symbol,\"Symbol\");setTag(Math,\"Math\",true);setTag($.g.JSON,\"JSON\",true)},{\"./$\":16,\"./$.cof\":6,\"./$.def\":11,\"./$.keyof\":17,\"./$.uid\":25,\"./$.wks\":27}],60:[function(require,module,exports){\"use strict\";var $=require(\"./$\"),weak=require(\"./$.collection-weak\"),leakStore=weak.leakStore,ID=weak.ID,WEAK=weak.WEAK,has=$.has,isObject=$.isObject,isFrozen=Object.isFrozen||$.core.Object.isFrozen,tmp={};var WeakMap=require(\"./$.collection\")(\"WeakMap\",{get:function get(key){if(isObject(key)){if(isFrozen(key))return leakStore(this).get(key);if(has(key,WEAK))return key[WEAK][this[ID]]}},set:function set(key,value){return weak.def(this,key,value)}},weak,true,true);if($.FW&&(new WeakMap).set((Object.freeze||Object)(tmp),7).get(tmp)!=7){$.each.call([\"delete\",\"has\",\"get\",\"set\"],function(key){var method=WeakMap.prototype[key];WeakMap.prototype[key]=function(a,b){if(isObject(a)&&isFrozen(a)){var result=leakStore(this)[key](a,b);return key==\"set\"?this:result}return method.call(this,a,b)}})}},{\"./$\":16,\"./$.collection\":9,\"./$.collection-weak\":8}],61:[function(require,module,exports){\"use strict\";var weak=require(\"./$.collection-weak\");require(\"./$.collection\")(\"WeakSet\",{add:function add(value){return weak.def(this,value,true)}},weak,false,true)},{\"./$.collection\":9,\"./$.collection-weak\":8}],62:[function(require,module,exports){var $def=require(\"./$.def\");$def($def.P,\"Array\",{includes:require(\"./$.array-includes\")(true)});require(\"./$.unscope\")(\"includes\")},{\"./$.array-includes\":2,\"./$.def\":11,\"./$.unscope\":26}],63:[function(require,module,exports){var $=require(\"./$\"),$def=require(\"./$.def\"),ownKeys=require(\"./$.own-keys\");$def($def.S,\"Object\",{getOwnPropertyDescriptors:function getOwnPropertyDescriptors(object){var O=$.toObject(object),result={};$.each.call(ownKeys(O),function(key){$.setDesc(result,key,$.desc(0,$.getDesc(O,key)))});return result}})},{\"./$\":16,\"./$.def\":11,\"./$.own-keys\":18}],64:[function(require,module,exports){var $=require(\"./$\"),$def=require(\"./$.def\");function createObjectToArray(isEntries){return function(object){var O=$.toObject(object),keys=$.getKeys(object),length=keys.length,i=0,result=Array(length),key;if(isEntries)while(length>i)result[i]=[key=keys[i++],O[key]];else while(length>i)result[i]=O[keys[i++]];return result}}$def($def.S,\"Object\",{values:createObjectToArray(false),entries:createObjectToArray(true)})},{\"./$\":16,\"./$.def\":11}],65:[function(require,module,exports){var $def=require(\"./$.def\");$def($def.S,\"RegExp\",{escape:require(\"./$.replacer\")(/([\\\\\\-[\\]{}()*+?.,^$|])/g,\"\\\\$1\",true)})},{\"./$.def\":11,\"./$.replacer\":20}],66:[function(require,module,exports){var $def=require(\"./$.def\"),forOf=require(\"./$.iter\").forOf;$def($def.P,\"Set\",{toJSON:function(){var arr=[];forOf(this,false,arr.push,arr);return arr}})},{\"./$.def\":11,\"./$.iter\":15}],67:[function(require,module,exports){var $def=require(\"./$.def\");$def($def.P,\"String\",{at:require(\"./$.string-at\")(true)})},{\"./$.def\":11,\"./$.string-at\":23}],68:[function(require,module,exports){var $=require(\"./$\"),$def=require(\"./$.def\"),$Array=$.core.Array||Array,statics={};function setStatics(keys,length){$.each.call(keys.split(\",\"),function(key){if(length==undefined&&key in $Array)statics[key]=$Array[key];else if(key in[])statics[key]=require(\"./$.ctx\")(Function.call,[][key],length)})}setStatics(\"pop,reverse,shift,keys,values,entries\",1);setStatics(\"indexOf,every,some,forEach,map,filter,find,findIndex,includes\",3);setStatics(\"join,slice,concat,push,splice,unshift,sort,lastIndexOf,\"+\"reduce,reduceRight,copyWithin,fill,turn\");$def($def.S,\"Array\",statics)},{\"./$\":16,\"./$.ctx\":10,\"./$.def\":11}],69:[function(require,module,exports){require(\"./es6.array.iterator\");var $=require(\"./$\"),Iterators=require(\"./$.iter\").Iterators,ITERATOR=require(\"./$.wks\")(\"iterator\"),NodeList=$.g.NodeList;if($.FW&&NodeList&&!(ITERATOR in NodeList.prototype)){$.hide(NodeList.prototype,ITERATOR,Iterators.Array)}Iterators.NodeList=Iterators.Array},{\"./$\":16,\"./$.iter\":15,\"./$.wks\":27,\"./es6.array.iterator\":34}],70:[function(require,module,exports){var $def=require(\"./$.def\"),$task=require(\"./$.task\");$def($def.G+$def.B,{setImmediate:$task.set,clearImmediate:$task.clear})},{\"./$.def\":11,\"./$.task\":24}],71:[function(require,module,exports){var $=require(\"./$\"),$def=require(\"./$.def\"),invoke=require(\"./$.invoke\"),partial=require(\"./$.partial\"),MSIE=!!$.g.navigator&&/MSIE .\\./.test(navigator.userAgent);function wrap(set){return MSIE?function(fn,time){return set(invoke(partial,[].slice.call(arguments,2),$.isFunction(fn)?fn:Function(fn)),time)}:set}$def($def.G+$def.B+$def.F*MSIE,{setTimeout:wrap($.g.setTimeout),setInterval:wrap($.g.setInterval)})},{\"./$\":16,\"./$.def\":11,\"./$.invoke\":13,\"./$.partial\":19}],72:[function(require,module,exports){require(\"./modules/es5\");require(\"./modules/es6.symbol\");require(\"./modules/es6.object.assign\");require(\"./modules/es6.object.is\");require(\"./modules/es6.object.set-prototype-of\");require(\"./modules/es6.object.to-string\");require(\"./modules/es6.object.statics-accept-primitives\");require(\"./modules/es6.function.name\");require(\"./modules/es6.number.constructor\");require(\"./modules/es6.number.statics\");require(\"./modules/es6.math\");require(\"./modules/es6.string.from-code-point\");require(\"./modules/es6.string.raw\");require(\"./modules/es6.string.iterator\");require(\"./modules/es6.string.code-point-at\");require(\"./modules/es6.string.ends-with\");require(\"./modules/es6.string.includes\");require(\"./modules/es6.string.repeat\");require(\"./modules/es6.string.starts-with\");require(\"./modules/es6.array.from\");require(\"./modules/es6.array.of\");require(\"./modules/es6.array.iterator\");require(\"./modules/es6.array.species\");require(\"./modules/es6.array.copy-within\");require(\"./modules/es6.array.fill\");require(\"./modules/es6.array.find\");require(\"./modules/es6.array.find-index\");require(\"./modules/es6.regexp\");require(\"./modules/es6.promise\");require(\"./modules/es6.map\");require(\"./modules/es6.set\");require(\"./modules/es6.weak-map\");require(\"./modules/es6.weak-set\");require(\"./modules/es6.reflect\");require(\"./modules/es7.array.includes\");require(\"./modules/es7.string.at\");require(\"./modules/es7.regexp.escape\");require(\"./modules/es7.object.get-own-property-descriptors\");require(\"./modules/es7.object.to-array\");require(\"./modules/es7.set.to-json\");require(\"./modules/js.array.statics\");require(\"./modules/web.timers\");require(\"./modules/web.immediate\");require(\"./modules/web.dom.iterable\");module.exports=require(\"./modules/$\").core},{\"./modules/$\":16,\"./modules/es5\":28,\"./modules/es6.array.copy-within\":29,\"./modules/es6.array.fill\":30,\"./modules/es6.array.find\":32,\"./modules/es6.array.find-index\":31,\"./modules/es6.array.from\":33,\"./modules/es6.array.iterator\":34,\"./modules/es6.array.of\":35,\"./modules/es6.array.species\":36,\"./modules/es6.function.name\":37,\"./modules/es6.map\":38,\"./modules/es6.math\":39,\"./modules/es6.number.constructor\":40,\"./modules/es6.number.statics\":41,\"./modules/es6.object.assign\":42,\"./modules/es6.object.is\":43,\"./modules/es6.object.set-prototype-of\":44,\"./modules/es6.object.statics-accept-primitives\":45,\"./modules/es6.object.to-string\":46,\"./modules/es6.promise\":47,\"./modules/es6.reflect\":48,\"./modules/es6.regexp\":49,\"./modules/es6.set\":50,\"./modules/es6.string.code-point-at\":51,\"./modules/es6.string.ends-with\":52,\"./modules/es6.string.from-code-point\":53,\"./modules/es6.string.includes\":54,\"./modules/es6.string.iterator\":55,\"./modules/es6.string.raw\":56,\"./modules/es6.string.repeat\":57,\"./modules/es6.string.starts-with\":58,\"./modules/es6.symbol\":59,\"./modules/es6.weak-map\":60,\"./modules/es6.weak-set\":61,\"./modules/es7.array.includes\":62,\"./modules/es7.object.get-own-property-descriptors\":63,\"./modules/es7.object.to-array\":64,\"./modules/es7.regexp.escape\":65,\"./modules/es7.set.to-json\":66,\"./modules/es7.string.at\":67,\"./modules/js.array.statics\":68,\"./modules/web.dom.iterable\":69,\"./modules/web.immediate\":70,\"./modules/web.timers\":71}],73:[function(require,module,exports){(function(global){!function(global){\"use strict\";var hasOwn=Object.prototype.hasOwnProperty;var undefined;var iteratorSymbol=typeof Symbol===\"function\"&&Symbol.iterator||\"@@iterator\";var inModule=typeof module===\"object\";var runtime=global.regeneratorRuntime;if(runtime){if(inModule){module.exports=runtime}return}runtime=global.regeneratorRuntime=inModule?module.exports:{};function wrap(innerFn,outerFn,self,tryLocsList){var generator=Object.create((outerFn||Generator).prototype);generator._invoke=makeInvokeMethod(innerFn,self||null,new Context(tryLocsList||[]));return generator}runtime.wrap=wrap;function tryCatch(fn,obj,arg){try{return{type:\"normal\",arg:fn.call(obj,arg)}}catch(err){return{type:\"throw\",arg:err}}}var GenStateSuspendedStart=\"suspendedStart\";var GenStateSuspendedYield=\"suspendedYield\";var GenStateExecuting=\"executing\";var GenStateCompleted=\"completed\";var ContinueSentinel={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var Gp=GeneratorFunctionPrototype.prototype=Generator.prototype;GeneratorFunction.prototype=Gp.constructor=GeneratorFunctionPrototype;GeneratorFunctionPrototype.constructor=GeneratorFunction;GeneratorFunction.displayName=\"GeneratorFunction\";runtime.isGeneratorFunction=function(genFun){var ctor=typeof genFun===\"function\"&&genFun.constructor;return ctor?ctor===GeneratorFunction||(ctor.displayName||ctor.name)===\"GeneratorFunction\":false};runtime.mark=function(genFun){genFun.__proto__=GeneratorFunctionPrototype;genFun.prototype=Object.create(Gp);return genFun};runtime.async=function(innerFn,outerFn,self,tryLocsList){return new Promise(function(resolve,reject){var generator=wrap(innerFn,outerFn,self,tryLocsList);var callNext=step.bind(generator,\"next\");var callThrow=step.bind(generator,\"throw\");function step(method,arg){var record=tryCatch(generator[method],generator,arg);if(record.type===\"throw\"){reject(record.arg);return}var info=record.arg;if(info.done){resolve(info.value)}else{Promise.resolve(info.value).then(callNext,callThrow)}}callNext()})};function makeInvokeMethod(innerFn,self,context){var state=GenStateSuspendedStart;return function invoke(method,arg){if(state===GenStateExecuting){throw new Error(\"Generator is already running\")}if(state===GenStateCompleted){return doneResult()}while(true){var delegate=context.delegate;if(delegate){if(method===\"return\"||method===\"throw\"&&delegate.iterator.throw===undefined){context.delegate=null;var returnMethod=delegate.iterator.return;if(returnMethod){var record=tryCatch(returnMethod,delegate.iterator,arg);if(record.type===\"throw\"){method=\"throw\";arg=record.arg;continue}}if(method===\"return\"){continue}}var record=tryCatch(delegate.iterator[method],delegate.iterator,arg);if(record.type===\"throw\"){context.delegate=null;method=\"throw\";arg=record.arg;continue}method=\"next\";arg=undefined;var info=record.arg;if(info.done){context[delegate.resultName]=info.value;context.next=delegate.nextLoc}else{state=GenStateSuspendedYield;return info}context.delegate=null}if(method===\"next\"){if(state===GenStateSuspendedYield){context.sent=arg}else{delete context.sent}}else if(method===\"throw\"){if(state===GenStateSuspendedStart){state=GenStateCompleted;throw arg}if(context.dispatchException(arg)){method=\"next\";arg=undefined}}else if(method===\"return\"){context.abrupt(\"return\",arg)}state=GenStateExecuting;var record=tryCatch(innerFn,self,context);if(record.type===\"normal\"){state=context.done?GenStateCompleted:GenStateSuspendedYield;var info={value:record.arg,done:context.done};if(record.arg===ContinueSentinel){if(context.delegate&&method===\"next\"){arg=undefined}}else{return info}}else if(record.type===\"throw\"){state=GenStateCompleted;method=\"throw\";arg=record.arg}}}}function defineGeneratorMethod(method){Gp[method]=function(arg){return this._invoke(method,arg)}}defineGeneratorMethod(\"next\");defineGeneratorMethod(\"throw\");defineGeneratorMethod(\"return\");Gp[iteratorSymbol]=function(){return this};Gp.toString=function(){return\"[object Generator]\"};function pushTryEntry(locs){var entry={tryLoc:locs[0]};if(1 in locs){entry.catchLoc=locs[1]}if(2 in locs){entry.finallyLoc=locs[2];entry.afterLoc=locs[3]}this.tryEntries.push(entry)}function resetTryEntry(entry){var record=entry.completion||{};record.type=\"normal\";delete record.arg;entry.completion=record}function Context(tryLocsList){this.tryEntries=[{tryLoc:\"root\"}];tryLocsList.forEach(pushTryEntry,this);this.reset()}runtime.keys=function(object){var keys=[];for(var key in object){keys.push(key)}keys.reverse();return function next(){while(keys.length){var key=keys.pop();if(key in object){next.value=key;next.done=false;return next}}next.done=true;return next}};function values(iterable){if(iterable){var iteratorMethod=iterable[iteratorSymbol];if(iteratorMethod){return iteratorMethod.call(iterable)}if(typeof iterable.next===\"function\"){return iterable}if(!isNaN(iterable.length)){var i=-1,next=function next(){while(++i<iterable.length){if(hasOwn.call(iterable,i)){next.value=iterable[i];next.done=false;return next}}next.value=undefined;next.done=true;return next};return next.next=next}}return{next:doneResult}}runtime.values=values;function doneResult(){return{value:undefined,done:true}}Context.prototype={constructor:Context,reset:function(){this.prev=0;\n\nthis.next=0;this.sent=undefined;this.done=false;this.delegate=null;this.tryEntries.forEach(resetTryEntry);for(var tempIndex=0,tempName;hasOwn.call(this,tempName=\"t\"+tempIndex)||tempIndex<20;++tempIndex){this[tempName]=null}},stop:function(){this.done=true;var rootEntry=this.tryEntries[0];var rootRecord=rootEntry.completion;if(rootRecord.type===\"throw\"){throw rootRecord.arg}return this.rval},dispatchException:function(exception){if(this.done){throw exception}var context=this;function handle(loc,caught){record.type=\"throw\";record.arg=exception;context.next=loc;return!!caught}for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];var record=entry.completion;if(entry.tryLoc===\"root\"){return handle(\"end\")}if(entry.tryLoc<=this.prev){var hasCatch=hasOwn.call(entry,\"catchLoc\");var hasFinally=hasOwn.call(entry,\"finallyLoc\");if(hasCatch&&hasFinally){if(this.prev<entry.catchLoc){return handle(entry.catchLoc,true)}else if(this.prev<entry.finallyLoc){return handle(entry.finallyLoc)}}else if(hasCatch){if(this.prev<entry.catchLoc){return handle(entry.catchLoc,true)}}else if(hasFinally){if(this.prev<entry.finallyLoc){return handle(entry.finallyLoc)}}else{throw new Error(\"try statement without catch or finally\")}}}},abrupt:function(type,arg){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc<=this.prev&&hasOwn.call(entry,\"finallyLoc\")&&this.prev<entry.finallyLoc){var finallyEntry=entry;break}}if(finallyEntry&&(type===\"break\"||type===\"continue\")&&finallyEntry.tryLoc<=arg&&arg<finallyEntry.finallyLoc){finallyEntry=null}var record=finallyEntry?finallyEntry.completion:{};record.type=type;record.arg=arg;if(finallyEntry){this.next=finallyEntry.finallyLoc}else{this.complete(record)}return ContinueSentinel},complete:function(record,afterLoc){if(record.type===\"throw\"){throw record.arg}if(record.type===\"break\"||record.type===\"continue\"){this.next=record.arg}else if(record.type===\"return\"){this.rval=record.arg;this.next=\"end\"}else if(record.type===\"normal\"&&afterLoc){this.next=afterLoc}return ContinueSentinel},finish:function(finallyLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.finallyLoc===finallyLoc){return this.complete(entry.completion,entry.afterLoc)}}},\"catch\":function(tryLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc===tryLoc){var record=entry.completion;if(record.type===\"throw\"){var thrown=record.arg;resetTryEntry(entry)}return thrown}}throw new Error(\"illegal catch attempt\")},delegateYield:function(iterable,resultName,nextLoc){this.delegate={iterator:values(iterable),resultName:resultName,nextLoc:nextLoc};return ContinueSentinel}}}(typeof global===\"object\"?global:typeof window===\"object\"?window:typeof self===\"object\"?self:this)}).call(this,typeof global!==\"undefined\"?global:typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:{})},{}]},{},[1]);"

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0)(__webpack_require__(6))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = "/*!\n * visibly - v0.7 Page Visibility API Polyfill\n * http://github.com/addyosmani\n * Copyright (c) 2011-2014 Addy Osmani\n * Dual licensed under the MIT and GPL licenses.\n *\n * Methods supported:\n * visibly.onVisible(callback)\n * visibly.onHidden(callback)\n * visibly.hidden()\n * visibly.visibilityState()\n * visibly.visibilitychange(callback(state));\n */\n\n;(function () {\n\n    window.visibly = {\n        q: document,\n        p: undefined,\n        prefixes: ['webkit', 'ms','o','moz','khtml'],\n        props: ['VisibilityState', 'visibilitychange', 'Hidden'],\n        m: ['focus', 'blur'],\n        visibleCallbacks: [],\n        hiddenCallbacks: [],\n        genericCallbacks:[],\n        _callbacks: [],\n        cachedPrefix:\"\",\n        fn:null,\n\n        onVisible: function (_callback) {\n            if(typeof _callback == 'function' ){\n                this.visibleCallbacks.push(_callback);\n            }\n        },\n        onHidden: function (_callback) {\n            if(typeof _callback == 'function' ){\n                this.hiddenCallbacks.push(_callback);\n            }\n        },\n        getPrefix:function(){\n            if(!this.cachedPrefix){\n                for(var l=0;b=this.prefixes[l++];){\n                    if(b + this.props[2] in this.q){\n                        this.cachedPrefix =  b;\n                        return this.cachedPrefix;\n                    }\n                }    \n             }\n        },\n\n        visibilityState:function(){\n            return  this._getProp(0);\n        },\n        hidden:function(){\n            return this._getProp(2);\n        },\n        visibilitychange:function(fn){\n            if(typeof fn == 'function' ){\n                this.genericCallbacks.push(fn);\n            }\n\n            var n =  this.genericCallbacks.length;\n            if(n){\n                if(this.cachedPrefix){\n                     while(n--){\n                        this.genericCallbacks[n].call(this, this.visibilityState());\n                    }\n                }else{\n                    while(n--){\n                        this.genericCallbacks[n].call(this, arguments[0]);\n                    }\n                }\n            }\n\n        },\n        isSupported: function (index) {\n            return ((this._getPropName(2)) in this.q);\n        },\n        _getPropName:function(index) {\n            return (this.cachedPrefix == \"\" ? this.props[index].substring(0, 1).toLowerCase() + this.props[index].substring(1) : this.cachedPrefix + this.props[index]);\n        },\n        _getProp:function(index){\n            return this.q[this._getPropName(index)]; \n        },\n        _execute: function (index) {\n            if (index) {\n                this._callbacks = (index == 1) ? this.visibleCallbacks : this.hiddenCallbacks;\n                var n =  this._callbacks.length;\n                while(n--){\n                    this._callbacks[n]();\n                }\n            }\n        },\n        _visible: function () {\n            window.visibly._execute(1);\n            window.visibly.visibilitychange.call(window.visibly, 'visible');\n        },\n        _hidden: function () {\n            window.visibly._execute(2);\n            window.visibly.visibilitychange.call(window.visibly, 'hidden');\n        },\n        _nativeSwitch: function () {\n            this[this._getProp(2) ? '_hidden' : '_visible']();\n        },\n        _listen: function () {\n            try { /*if no native page visibility support found..*/\n                if (!(this.isSupported())) {\n                    if (this.q.addEventListener) { /*for browsers without focusin/out support eg. firefox, opera use focus/blur*/\n                        window.addEventListener(this.m[0], this._visible, 1);\n                        window.addEventListener(this.m[1], this._hidden, 1);\n                    } else { /*IE <10s most reliable focus events are onfocusin/onfocusout*/\n                        if (this.q.attachEvent) {\n                            this.q.attachEvent('onfocusin', this._visible);\n                            this.q.attachEvent('onfocusout', this._hidden);\n                        }\n                    }\n                } else { /*switch support based on prefix detected earlier*/\n                    this.q.addEventListener(this._getPropName(1), function () {\n                        window.visibly._nativeSwitch.apply(window.visibly, arguments);\n                    }, 1);\n                }\n            } catch (e) {}\n        },\n        init: function () {\n            this.getPrefix();\n            this._listen();\n        }\n    };\n\n    this.visibly.init();\n})();\n"

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0)(__webpack_require__(8))

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = "/*\n * js_channel is a very lightweight abstraction on top of\n * postMessage which defines message formats and semantics\n * to support interactions more rich than just message passing\n * js_channel supports:\n *  + query/response - traditional rpc\n *  + query/update/response - incremental async return of results\n *    to a query\n *  + notifications - fire and forget\n *  + error handling\n *\n * js_channel is based heavily on json-rpc, but is focused at the\n * problem of inter-iframe RPC.\n *\n * Message types:\n *  There are 5 types of messages that can flow over this channel,\n *  and you may determine what type of message an object is by\n *  examining its parameters:\n *  1. Requests\n *    + integer id\n *    + string method\n *    + (optional) any params\n *  2. Callback Invocations (or just \"Callbacks\")\n *    + integer id\n *    + string callback\n *    + (optional) params\n *  3. Error Responses (or just \"Errors)\n *    + integer id\n *    + string error\n *    + (optional) string message\n *  4. Responses\n *    + integer id\n *    + (optional) any result\n *  5. Notifications\n *    + string method\n *    + (optional) any params\n */\n\n// Universal module definition //\n(function (root, factory) {\n  if (typeof exports === 'object') {\n    // CommonJS\n    module.exports = factory();\n  } else if (typeof define === 'function' && define.amd) {\n    // AMD\n    define([], function () {\n      return (root.Channel = factory());\n    });\n  } else {\n    // Global Variables\n    root.Channel = factory();\n  }\n}(this, function () {\n  \"use strict\";\n  var Channel = (function() {\n\n    // current transaction id, start out at a random *odd* number between 1 and a million\n    // There is one current transaction counter id per page, and it's shared between\n    // channel instances.  That means of all messages posted from a single javascript\n    // evaluation context, we'll never have two with the same id.\n    var s_curTranId = Math.floor(Math.random()*1000001);\n\n    // no two bound channels in the same javascript evaluation context may have the same origin, scope, and window.\n    // further if two bound channels have the same window and scope, they may not have *overlapping* origins\n    // (either one or both support '*').  This restriction allows a single onMessage handler to efficiently\n    // route messages based on origin and scope.  The s_boundChans maps origins to scopes, to message\n    // handlers.  Request and Notification messages are routed using this table.\n    // Finally, channels are inserted into this table when built, and removed when destroyed.\n    var s_boundChans = { };\n\n    // add a channel to s_boundChans, throwing if a dup exists\n    function s_addBoundChan(win, origin, scope, handler) {\n        function hasWin(arr) {\n            for (var i = 0; i < arr.length; i++) if (arr[i].win === win) return true;\n            return false;\n        }\n\n        // does she exist?\n        var exists = false;\n\n        if (origin === '*') {\n            // we must check all other origins, sadly.\n            for (var k in s_boundChans) {\n                if (!s_boundChans.hasOwnProperty(k)) continue;\n                if (k === '*') continue;\n                if (typeof s_boundChans[k][scope] === 'object') {\n                    exists = hasWin(s_boundChans[k][scope]);\n                    if (exists) break;\n                }\n            }\n        } else {\n            // we must check only '*'\n            if ((s_boundChans['*'] && s_boundChans['*'][scope])) {\n                exists = hasWin(s_boundChans['*'][scope]);\n            }\n            if (!exists && s_boundChans[origin] && s_boundChans[origin][scope])\n            {\n                exists = hasWin(s_boundChans[origin][scope]);\n            }\n        }\n        if (exists) throw \"A channel is already bound to the same window which overlaps with origin '\"+ origin +\"' and has scope '\"+scope+\"'\";\n\n        if (typeof s_boundChans[origin] != 'object') s_boundChans[origin] = { };\n        if (typeof s_boundChans[origin][scope] != 'object') s_boundChans[origin][scope] = [ ];\n        s_boundChans[origin][scope].push({win: win, handler: handler});\n    }\n\n    function s_removeBoundChan(win, origin, scope) {\n        var arr = s_boundChans[origin][scope];\n        for (var i = 0; i < arr.length; i++) {\n            if (arr[i].win === win) {\n                arr.splice(i,1);\n            }\n        }\n        if (s_boundChans[origin][scope].length === 0) {\n            delete s_boundChans[origin][scope];\n        }\n    }\n\n    function s_isArray(obj) {\n        if (Array.isArray) return Array.isArray(obj);\n        else {\n            return (obj.constructor.toString().indexOf(\"Array\") != -1);\n        }\n    }\n\n    // No two outstanding outbound messages may have the same id, period.  Given that, a single table\n    // mapping \"transaction ids\" to message handlers, allows efficient routing of Callback, Error, and\n    // Response messages.  Entries are added to this table when requests are sent, and removed when\n    // responses are received.\n    var s_transIds = { };\n\n    // class singleton onMessage handler\n    // this function is registered once and all incoming messages route through here.  This\n    // arrangement allows certain efficiencies, message data is only parsed once and dispatch\n    // is more efficient, especially for large numbers of simultaneous channels.\n    var s_onMessage = function(e) {\n        try {\n          var m = JSON.parse(e.data);\n          if (typeof m !== 'object' || m === null) throw \"malformed\";\n        } catch(e) {\n          // just ignore any posted messages that do not consist of valid JSON\n          return;\n        }\n\n        var w = e.source;\n        var o = e.origin;\n        var s, i, meth;\n\n        if (typeof m.method === 'string') {\n            var ar = m.method.split('::');\n            if (ar.length == 2) {\n                s = ar[0];\n                meth = ar[1];\n            } else {\n                meth = m.method;\n            }\n        }\n\n        if (typeof m.id !== 'undefined') i = m.id;\n\n        // w is message source window\n        // o is message origin\n        // m is parsed message\n        // s is message scope\n        // i is message id (or undefined)\n        // meth is unscoped method name\n        // ^^ based on these factors we can route the message\n\n        // if it has a method it's either a notification or a request,\n        // route using s_boundChans\n        if (typeof meth === 'string') {\n            var delivered = false;\n            if (s_boundChans[o] && s_boundChans[o][s]) {\n                for (var j = 0; j < s_boundChans[o][s].length; j++) {\n                    if (s_boundChans[o][s][j].win === w) {\n                        s_boundChans[o][s][j].handler(o, meth, m);\n                        delivered = true;\n                        break;\n                    }\n                }\n            }\n\n            if (!delivered && s_boundChans['*'] && s_boundChans['*'][s]) {\n                for (var j = 0; j < s_boundChans['*'][s].length; j++) {\n                    if (s_boundChans['*'][s][j].win === w) {\n                        s_boundChans['*'][s][j].handler(o, meth, m);\n                        break;\n                    }\n                }\n            }\n        }\n        // otherwise it must have an id (or be poorly formed\n        else if (typeof i != 'undefined') {\n            if (s_transIds[i]) s_transIds[i](o, meth, m);\n        }\n    };\n\n    // Setup postMessage event listeners\n    if (window.addEventListener) window.addEventListener('message', s_onMessage, false);\n    else if(window.attachEvent) window.attachEvent('onmessage', s_onMessage);\n\n    /* a messaging channel is constructed from a window and an origin.\n     * the channel will assert that all messages received over the\n     * channel match the origin\n     *\n     * Arguments to Channel.build(cfg):\n     *\n     *   cfg.window - the remote window with which we'll communicate\n     *   cfg.origin - the expected origin of the remote window, may be '*'\n     *                which matches any origin\n     *   cfg.scope  - the 'scope' of messages.  a scope string that is\n     *                prepended to message names.  local and remote endpoints\n     *                of a single channel must agree upon scope. Scope may\n     *                not contain double colons ('::').\n     *   cfg.debugOutput - A boolean value.  If true and window.console.log is\n     *                a function, then debug strings will be emitted to that\n     *                function.\n     *   cfg.postMessageObserver - A function that will be passed two arguments,\n     *                an origin and a message.  It will be passed these immediately\n     *                before messages are posted.\n     *   cfg.gotMessageObserver - A function that will be passed two arguments,\n     *                an origin and a message.  It will be passed these arguments\n     *                immediately after they pass scope and origin checks, but before\n     *                they are processed.\n     *   cfg.onReady - A function that will be invoked when a channel becomes \"ready\",\n     *                this occurs once both sides of the channel have been\n     *                instantiated and an application level handshake is exchanged.\n     *                the onReady function will be passed a single argument which is\n     *                the channel object that was returned from build().\n     *   cfg.reconnect - A boolean value - if true, the channel allows reconnection\n     *                useful when the page in a child frame is reloaded and wants\n     *                to re-establish connection with parent window using the same\n     *                origin, scope and bindings.\n     *   cfg.publish - A boolean value. If true, bind will automatically publish\n     *                the method on the remote side. The method will be published under\n     *                channelObject.remote, but it will not be available before the onReady\n     *                callback is called on the other side.\n     *   cfg.remote - An array of method names for which stubs should be generated without\n     *                waiting for remote end to publish them. A string (for a single method name)\n     *                is also accepted. This allows methods under channelObject.remote to be called\n     *                also before onReady callback is called; the invocations will be queued until\n     *                the channel is ready. If the methods do not exist on remote side, the\n     *                error callback will be called.\n     */\n    return {\n        build: function(cfg) {\n            var debug = function(m) {\n                if (cfg.debugOutput && window.console && window.console.log) {\n                    // try to stringify, if it doesn't work we'll let javascript's built in toString do its magic\n                    try {\n                        if (typeof m !== 'string') {\n                            m = JSON.stringify(m);\n                        }\n                    }\n                    catch(e) {\n                    }\n                    window.console.log(\"[\"+chanId+\"] \" + m);\n                }\n            };\n\n            /* browser capabilities check */\n            if (!window.postMessage) throw(\"jschannel cannot run this browser, no postMessage\");\n            if (!window.JSON || !window.JSON.stringify || ! window.JSON.parse) {\n                throw(\"jschannel cannot run this browser, no JSON parsing/serialization\");\n            }\n\n            /* basic argument validation */\n            if (typeof cfg != 'object') throw(\"Channel build invoked without a proper object argument\");\n\n            if (!cfg.window || !cfg.window.postMessage) throw(\"Channel.build() called without a valid window argument\");\n\n            /* we'd have to do a little more work to be able to run multiple channels that intercommunicate the same\n             * window...  Not sure if we care to support that */\n            if (window === cfg.window) debug(\"target window is same as present window -- use at your own risk\");\n\n            // let's require that the client specify an origin.  if we just assume '*' we'll be\n            // propagating unsafe practices.  that would be lame.\n            var validOrigin = false;\n            if (typeof cfg.origin === 'string') {\n                var oMatch;\n                if (cfg.origin === \"*\") validOrigin = true;\n                // allow valid domains under http and https.  Also, trim paths off otherwise valid origins.\n                else if (null !== (oMatch = cfg.origin.match(/^https?:\\/\\/(?:[-a-zA-Z0-9_\\.])+(?::\\d+)?/))) {\n                    cfg.origin = oMatch[0].toLowerCase();\n                    validOrigin = true;\n                }\n            }\n\n            if (!validOrigin) throw (\"Channel.build() called with an invalid origin\");\n\n            if (typeof cfg.scope !== 'undefined') {\n                if (typeof cfg.scope !== 'string') throw 'scope, when specified, must be a string';\n                if (cfg.scope.split('::').length > 1) throw \"scope may not contain double colons: '::'\";\n            } else {\n                cfg.scope = \"__default\";\n            }\n\n            /* private variables */\n            // generate a random and psuedo unique id for this channel\n            var chanId = (function () {\n                var text = \"\";\n                var alpha = \"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789\";\n                for(var i=0; i < 5; i++) text += alpha.charAt(Math.floor(Math.random() * alpha.length));\n                return text;\n            })();\n\n            // registrations: mapping method names to call objects\n            var regTbl = { };\n            // current oustanding sent requests\n            var outTbl = { };\n            // current oustanding received requests\n            var inTbl = { };\n            // are we ready yet?  when false we will block outbound messages.\n            var ready = false;\n            var pendingQueue = [ ];\n            var publishQueue = [ ];\n\n            var createTransaction = function(id,origin,callbacks) {\n                var shouldDelayReturn = false;\n                var completed = false;\n\n                return {\n                    origin: origin,\n                    invoke: function(cbName, v) {\n                        // verify in table\n                        if (!inTbl[id]) throw \"attempting to invoke a callback of a nonexistent transaction: \" + id;\n                        // verify that the callback name is valid\n                        var valid = false;\n                        for (var i = 0; i < callbacks.length; i++) if (cbName === callbacks[i]) { valid = true; break; }\n                        if (!valid) throw \"request supports no such callback '\" + cbName + \"'\";\n\n                        // send callback invocation\n                        postMessage({ id: id, callback: cbName, params: v});\n                    },\n                    error: function(error, message) {\n                        completed = true;\n                        // verify in table\n                        if (!inTbl[id]) throw \"error called for nonexistent message: \" + id;\n\n                        // remove transaction from table\n                        delete inTbl[id];\n\n                        // send error\n                        postMessage({ id: id, error: error, message: message });\n                    },\n                    complete: function(v) {\n                        completed = true;\n                        // verify in table\n                        if (!inTbl[id]) throw \"complete called for nonexistent message: \" + id;\n                        // remove transaction from table\n                        delete inTbl[id];\n                        // send complete\n                        postMessage({ id: id, result: v });\n                    },\n                    delayReturn: function(delay) {\n                        if (typeof delay === 'boolean') {\n                            shouldDelayReturn = (delay === true);\n                        }\n                        return shouldDelayReturn;\n                    },\n                    completed: function() {\n                        return completed;\n                    }\n                };\n            };\n\n            var setTransactionTimeout = function(transId, timeout, method) {\n              return window.setTimeout(function() {\n                if (outTbl[transId]) {\n                  // XXX: what if client code raises an exception here?\n                  var msg = \"timeout (\" + timeout + \"ms) exceeded on method '\" + method + \"'\";\n                  if (outTbl[transId].error) {\n                      outTbl[transId].error(\"timeout_error\", msg);\n                  }\n                  delete outTbl[transId];\n                  delete s_transIds[transId];\n                }\n              }, timeout);\n            };\n\n            var onMessage = function(origin, method, m) {\n                // if an observer was specified at allocation time, invoke it\n                if (typeof cfg.gotMessageObserver === 'function') {\n                    // pass observer a clone of the object so that our\n                    // manipulations are not visible (i.e. method unscoping).\n                    // This is not particularly efficient, but then we expect\n                    // that message observers are primarily for debugging anyway.\n                    try {\n                        cfg.gotMessageObserver(origin, m);\n                    } catch (e) {\n                        debug(\"gotMessageObserver() raised an exception: \" + e.toString());\n                    }\n                }\n\n                // now, what type of message is this?\n                if (m.id && method) {\n                    inTbl[m.id] = { };\n                    var trans = createTransaction(m.id, origin, m.callbacks ? m.callbacks : [ ]);\n                    // a request!  do we have a registered handler for this request?\n                    if (regTbl[method]) {\n                        try {\n                            // callback handling.  we'll magically create functions inside the parameter list for each\n                            // callback\n                            if (m.callbacks && s_isArray(m.callbacks) && m.callbacks.length > 0) {\n                                for (var i = 0; i < m.callbacks.length; i++) {\n                                    var path = m.callbacks[i];\n                                    var obj = m.params;\n                                    var pathItems = path.split('/');\n                                    for (var j = 0; j < pathItems.length - 1; j++) {\n                                        var cp = pathItems[j];\n                                        if (typeof obj[cp] !== 'object') obj[cp] = { };\n                                        obj = obj[cp];\n                                    }\n                                    obj[pathItems[pathItems.length - 1]] = (function() {\n                                        var cbName = path;\n                                        return function(params) {\n                                            return trans.invoke(cbName, params);\n                                        };\n                                    })();\n                                }\n                            }\n                            var resp = regTbl[method](trans, m.params);\n                            if (!trans.delayReturn() && !trans.completed()) trans.complete(resp);\n                        } catch(e) {\n                            // automagic handling of exceptions:\n                            var error = \"runtime_error\";\n                            var message = null;\n                            // * if it's a string then it gets an error code of 'runtime_error' and string is the message\n                            if (typeof e === 'string') {\n                                message = e;\n                            } else if (typeof e === 'object') {\n                                // if it's an Error instance we use the constructor name to set the error property\n                                // and we just copy the error message\n                                if (e instanceof Error) {\n                                    error = e.constructor.name;\n                                    message = e.message;\n                                }\n                                // Otherwise, it's either an array or an object\n                                // * if it's an array of length two, then  array[0] is the code, array[1] is the error message\n                                else if (e && s_isArray(e) && e.length == 2) {\n                                    error = e[0];\n                                    message = e[1];\n                                }\n                                // * if it's an object then we'll look form error and message parameters\n                                else if (typeof e.error === 'string') {\n                                    error = e.error;\n                                    if (!e.message) message = \"\";\n                                    else if (typeof e.message === 'string') message = e.message;\n                                    else e = e.message; // let the stringify/toString message give us a reasonable verbose error string\n                                }\n                            }\n\n                            // message is *still* null, let's try harder\n                            if (message === null) {\n                                try {\n                                    message = JSON.stringify(e);\n                                    /* On MSIE8, this can result in 'out of memory', which\n                                     * leaves message undefined. */\n                                    if (typeof(message) == 'undefined')\n                                      message = e.toString();\n                                } catch (e2) {\n                                    message = e.toString();\n                                }\n                            }\n\n                            trans.error(error,message);\n                        }\n                    } else { // if no method found, send error\n                        trans.error(\"method_not_found\", \"No method '\" + method + \"' was (yet) bound by the provider\");\n                    }\n                } else if (m.id && m.callback) {\n                    if (!outTbl[m.id] ||!outTbl[m.id].callbacks || !outTbl[m.id].callbacks[m.callback])\n                    {\n                        debug(\"ignoring invalid callback, id:\"+m.id+ \" (\" + m.callback +\")\");\n                    } else {\n                        // XXX: what if client code raises an exception here?\n                        outTbl[m.id].callbacks[m.callback](m.params);\n                    }\n                } else if (m.id) {\n                    if (!outTbl[m.id]) {\n                        debug(\"ignoring invalid response: \" + m.id);\n                    } else {\n                        // XXX: what if client code raises an exception here?\n                        if (m.error) {\n                            // We might not have an error callback\n                            if(outTbl[m.id].error) {\n                                outTbl[m.id].error(m.error, m.message);\n                            }\n                        } else {\n                            // But we always have a success callback\n                            if (m.result !== undefined) {\n                                outTbl[m.id].success(m.result);\n                            } else {\n                                outTbl[m.id].success();\n                            }\n                        }\n                        delete outTbl[m.id];\n                        delete s_transIds[m.id];\n                    }\n                } else if (method) {\n                    // tis a notification.\n                    if (regTbl[method]) {\n                        // yep, there's a handler for that.\n                        // transaction has only origin for notifications.\n                        regTbl[method]({ origin: origin }, m.params);\n                        // if the client throws, we'll just let it bubble out\n                        // what can we do?  Also, here we'll ignore return values\n                    }\n                }\n            };\n\n            // now register our bound channel for msg routing\n            s_addBoundChan(cfg.window, cfg.origin, cfg.scope, onMessage);\n\n            // scope method names based on cfg.scope specified when the Channel was instantiated\n            var scopeMethod = function(m) {\n                return [cfg.scope, m].join(\"::\");\n            };\n\n            // a small wrapper around postmessage whose primary function is to handle the\n            // case that clients start sending messages before the other end is \"ready\"\n            var postMessage = function(msg, force) {\n                if (!msg) throw \"postMessage called with null message\";\n\n                // delay posting if we're not ready yet.\n                if (!force && !ready) {\n                    debug(\"queue message: \" + JSON.stringify(msg));\n                    pendingQueue.push(msg);\n                } else {\n                    if (typeof cfg.postMessageObserver === 'function') {\n                        try {\n                            cfg.postMessageObserver(cfg.origin, msg);\n                        } catch (e) {\n                            debug(\"postMessageObserver() raised an exception: \" + e.toString());\n                        }\n                    }\n                    debug(\"post message: \" + JSON.stringify(msg) + \" with origin \" + cfg.origin);\n                    cfg.window.postMessage(JSON.stringify(msg), cfg.origin);\n                }\n            };\n\n            var onReady = function(trans, params) {\n                debug('ready msg received');\n                if (ready && !cfg.reconnect) {\n                    throw \"received ready message while in ready state.\";\n                }\n                ready = true;\n\n                // only append suffix to chanId once:\n                if (chanId.length < 6) {\n\t                if (params.type === 'publish-request') {\n\t                    chanId += '-R';\n\t                } else {\n\t                    chanId += '-L';\n\t                }\n                }\n                debug('ready msg accepted.');\n\n                if (params.type === 'publish-request') {\n                    obj.notify({ method: '__ready', params: {\n                        type:'publish-reply',\n                        publish: publishQueue\n                    } });\n                }\n\n                for (var i = 0; i < params.publish.length; i++) {\n                    if (params.publish[i].action === \"bind\") {\n                        createStubs([params.publish[i].method], obj.remote);\n                    } else { // unbind\n                        delete obj.remote[params.publish[i].method];\n                    }\n                }\n\n                //unbind ready handler unless we allow reconnecting:\n                if (!cfg.reconnect) {\n                    obj.unbind('__ready', true); // now this handler isn't needed any more.\n                }\n\n                // flush queue\n                while (pendingQueue.length) {\n                    postMessage(pendingQueue.splice(0, 1)[0]);\n                }\n                publishQueue = [];\n                // invoke onReady observer if provided\n                if (typeof cfg.onReady === 'function') cfg.onReady(obj);\n\n            };\n\n            var createStubs = function(stubList, targetObj) {\n                stubList = [].concat(stubList); // Coerce into array, allows string to be used for single-item array\n                var method;\n                for(var i=0; i < stubList.length; i++) {\n                    method = stubList[i].toString();\n                    targetObj[method] = function(m) {\n                        return function(params, success, error) {\n                            if (success) {\n                                obj.call({\n                                    method: m,\n                                    params: params,\n                                    success: success,\n                                    error: error\n                                });\n                            } else {\n                                obj.notify({\n                                    method: m,\n                                    params: params\n                                });\n                            }\n                        };\n                    }(method);\n                }\n            }\n\n            // Dynamic publish from remote\n            var onBind = function(trans, method) {\n                createStubs([method], obj.remote);\n            };\n\n            // Dynamic unpublish from remote\n            var onUnbind = function(trans, method) {\n                if (obj.remote[method]) {\n                    delete obj.remote[method];\n                }\n            };\n\n            var obj = {\n\n                remote: {},\n\n                // tries to unbind a bound message handler.  returns false if not possible\n                unbind: function (method, doNotPublish) {\n                    if (regTbl[method]) {\n                        if (!(delete regTbl[method])) throw (\"can't delete method: \" + method);\n                        if (cfg.publish && ! doNotPublish) {\n                            if (ready) {\n                                obj.notify({ method: '__unbind', params: method });\n                            } else {\n                                publishQueue.push({ action: 'unbind', method: method });\n                            }\n                        }\n                        return true;\n                    }\n                    return false;\n                },\n                bind: function (method, cb, doNotPublish) {\n                    if (!method || typeof method !== 'string') throw \"'method' argument to bind must be string\";\n                    if (!cb || typeof cb !== 'function') throw \"callback missing from bind params\";\n\n                    if (regTbl[method]) throw \"method '\"+method+\"' is already bound!\";\n                    regTbl[method] = cb;\n                    if (cfg.publish && ! doNotPublish) {\n                        if (ready) {\n                            obj.notify({ method: '__bind', params: method });\n                        } else {\n                            publishQueue.push({ action: 'bind', method: method });\n                        }\n                    }\n                    return this;\n                },\n                call: function(m) {\n                    if (!m) throw 'missing arguments to call function';\n                    if (!m.method || typeof m.method !== 'string') throw \"'method' argument to call must be string\";\n                    if (!m.success || typeof m.success !== 'function') throw \"'success' callback missing from call\";\n\n                    // now it's time to support the 'callback' feature of jschannel.  We'll traverse the argument\n                    // object and pick out all of the functions that were passed as arguments.\n                    var callbacks = { };\n                    var callbackNames = [ ];\n                    var seen = [ ];\n\n                    var pruneFunctions = function (path, obj) {\n                        if (seen.indexOf(obj) >= 0) {\n                            throw \"params cannot be a recursive data structure\"\n                        }\n                        if(obj) {\n                            seen.push(obj);\n                        }\n\n                        if (typeof obj === 'object') {\n                            for (var k in obj) {\n                                if (!obj.hasOwnProperty(k)) continue;\n                                var np = path + (path.length ? '/' : '') + k;\n                                if (typeof obj[k] === 'function') {\n                                    callbacks[np] = obj[k];\n                                    callbackNames.push(np);\n                                    delete obj[k];\n                                } else if (typeof obj[k] === 'object') {\n                                    pruneFunctions(np, obj[k]);\n                                }\n                            }\n                        }\n                    };\n                    pruneFunctions(\"\", m.params);\n\n                    // build a 'request' message and send it\n                    var msg = { id: s_curTranId, method: scopeMethod(m.method), params: m.params };\n                    if (callbackNames.length) msg.callbacks = callbackNames;\n\n                    if (m.timeout)\n                      // XXX: This function returns a timeout ID, but we don't do anything with it.\n                      // We might want to keep track of it so we can cancel it using clearTimeout()\n                      // when the transaction completes.\n                      setTransactionTimeout(s_curTranId, m.timeout, scopeMethod(m.method));\n\n                    // insert into the transaction table\n                    outTbl[s_curTranId] = { callbacks: callbacks, error: m.error, success: m.success };\n                    s_transIds[s_curTranId] = onMessage;\n\n                    // increment current id\n                    s_curTranId++;\n\n                    postMessage(msg);\n                },\n                notify: function(m) {\n                    if (!m) throw 'missing arguments to notify function';\n                    if (!m.method || typeof m.method !== 'string') throw \"'method' argument to notify must be string\";\n\n                    // no need to go into any transaction table\n                    postMessage({ method: scopeMethod(m.method), params: m.params });\n                },\n                destroy: function () {\n                    s_removeBoundChan(cfg.window, cfg.origin, cfg.scope);\n                    if (window.removeEventListener) window.removeEventListener('message', onMessage, false);\n                    else if(window.detachEvent) window.detachEvent('onmessage', onMessage);\n                    ready = false;\n                    regTbl = { };\n                    inTbl = { };\n                    outTbl = { };\n                    cfg.origin = null;\n                    pendingQueue = [ ];\n                    debug(\"channel destroyed\");\n                    chanId = \"\";\n                }\n            };\n\n            obj.bind('__ready', onReady, true);\n            obj.bind('__bind', onBind, true);\n            obj.bind('__unbind', onUnbind, true);\n            if (cfg.remote) {\n                createStubs(cfg.remote, obj.remote);\n            }\n            setTimeout(function() {\n                if (chanId.length > 0) { // The channel might already have been destroyed\n                    postMessage({ method: scopeMethod('__ready'), params: {\n                        type: \"publish-request\",\n                        publish: publishQueue\n                    } }, true);\n                }\n\n            }, 0);\n\n            return obj;\n        }\n    };\n  })();\n\n\n  return Channel;\n}));\n"

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* global $ */

var _localStorage = __webpack_require__(10);

var _localStorage2 = _interopRequireDefault(_localStorage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ContainerAdapter = function () {
    function ContainerAdapter(id) {
        var _this = this;

        _classCallCheck(this, ContainerAdapter);

        this.id = id;
        this.userAgent = window.navigator.userAgent;
        this.settings = new _localStorage2.default();
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
            bubbleState: function bubbleState(jsonObject) {
                if (!$.isEmptyObject(jsonObject)) {
                    _this.adapterConfig.sendState(_this.id, jsonObject);
                }
            },
            /**
             * Purpose: Statements received from within the LO are interepreted and passed to APP.
             * Input:   jsonArray: statements array received from the LO.
             * Output:  Passes the interpreted statements to xapirunner.
             */
            bubbleStatements: function bubbleStatements(jsonArray) {
                var interpretedStatementsArray = [],
                    interpretedStatement = {},
                    statementsArray = [],
                    statement = {};
                var container = 'Container';
                var lo = 'LO';
                var businessRule = 'Business rule';
                var dateTime = void 0,
                    options = void 0;

                for (var i = 0; i < jsonArray.length; ++i) {
                    dateTime = new Date();
                    statement = { 'json': jsonArray[i], 'generatedTimestamp': _this.getCurrentTime(dateTime) };
                    statementsArray.push(statement);

                    if (jsonArray[i].verb.display.und === 'started') {
                        /** Launched statement */
                        interpretedStatement = $.extend(true, {}, jsonArray[i]);
                        options = {
                            description: 'Launched',
                            mode: container,
                            date: dateTime
                        };
                        interpretedStatement = _this.generateStatement('launched', options, interpretedStatement);
                        interpretedStatementsArray.push(interpretedStatement);
                    } else if (jsonArray[i].verb.display.und === 'scored') {
                        /** Attempted statement */
                        interpretedStatement = $.extend(true, {}, jsonArray[i]);
                        var percentage = (interpretedStatement.result.score.raw / interpretedStatement.result.score.max * 100).toFixed(2);
                        options = {
                            description: 'Attempted <span>(Scored: ' + percentage + '%)</span>',
                            mode: lo,
                            date: dateTime
                        };
                        interpretedStatement = _this.generateStatement('attempted', options, interpretedStatement);
                        interpretedStatementsArray.push(interpretedStatement);

                        /** Completed statement */
                        interpretedStatement = $.extend(true, {}, jsonArray[i]);
                        options = {
                            description: 'Completed <span> (Attempted == Completed) </span>',
                            mode: businessRule,
                            date: dateTime
                        };
                        interpretedStatement = _this.generateStatement('completed', options, interpretedStatement);
                        interpretedStatementsArray.push(interpretedStatement);

                        //for scoreable
                        _this.adapterConfig.containerNotification(_this.id, 'container_controls', 'activityCompleted');
                    }
                }

                if (!$.isEmptyObject(statementsArray)) {
                    _this.adapterConfig.sendStatements(_this.id, statementsArray);
                }

                if (!$.isEmptyObject(interpretedStatementsArray)) {
                    _this.adapterConfig.sendInterpretedStatements(_this.id, interpretedStatementsArray);
                }
            },
            bubbleControlsChange: function bubbleControlsChange(params) {
                var generateControlsChangeEvent = function generateControlsChangeEvent(controlsEvent) {
                    var newControlsEvent = Object.assign({}, controlsEvent);
                    if (newControlsEvent.active !== undefined && !newControlsEvent.active) {
                        newControlsEvent.visible = false;
                    }
                    _this.adapterConfig.containerNotification(_this.id, 'generic_controls', newControlsEvent);
                };

                if (Array.isArray(params)) {
                    params.forEach(function (element) {
                        return generateControlsChangeEvent(element);
                    });
                } else {
                    generateControlsChangeEvent(params);
                }
            },
            bubbleMessageFromContent: function bubbleMessageFromContent(request, response) {
                var params = [{
                    request: request,
                    response: response,
                    timestamp: _this.getCurrentTime(new Date())
                }];
                _this.adapterConfig.notifyMessageFromContent(_this.id, params);
            },
            bubbleMessageToContent: function bubbleMessageToContent(request, response) {
                var params = [{
                    request: request,
                    response: response,
                    timestamp: _this.getCurrentTime(new Date())
                }];
                _this.adapterConfig.notifyMessageToContent(_this.id, params);
            },
            bubbleSizeChange: function bubbleSizeChange(params) {
                _this.adapterConfig.containerNotification(_this.id, 'size', params);
            },
            bubbleTerminated: function bubbleTerminated() {
                var options = {
                    description: 'Closed',
                    mode: 'Container'
                };
                _this.generateStatement('closed', options);
                /* Remove Iframe */
                if (_this.adapterConfig && _this.adapterConfig.iframeId) {
                    var iframeId = _this.adapterConfig.iframeId;
                    if ($(iframeId).length) {
                        $(iframeId).remove();
                    }
                }
                /* Notify APP with activityClosed event */
                _this.adapterConfig.containerNotification(_this.id, 'generic_controls', 'activityClosed');
            },
            bubbleFeedbackChange: function bubbleFeedbackChange(params) {
                _this.adapterConfig.containerNotification(_this.id, 'generic_feedback', params);
            }
        };
    }

    /* Activity launcher platform pass its options which overrides default adapter configuration and returns platform adapter.
        */


    _createClass(ContainerAdapter, [{
        key: 'getActivityAdapter',
        value: function getActivityAdapter(options) {
            $.extend(true, this.adapterConfig, options);
            return this;
        }
    }, {
        key: 'populateAdapterParameters',


        /* Method to populate adapter parameters with the activity parameters
         */
        value: function populateAdapterParameters(itemParams, genericContainerInstance) {
            this.itemParamsObj = itemParams;
            // Boolean variable to check if the session is active.
            this.inactiveUserTime = 0;
            this.worker;
            this.launched = false;

            this.timespentKey = 'timespent' + '-';
            if (this.adapterConfig.userId && this.adapterConfig.productId && this.adapterConfig.classId) {
                this.timespentKey += this.adapterConfig.userId + '-' + this.adapterConfig.productId + '-' + this.adapterConfig.classId;
            } else if (this.adapterConfig.userId && this.adapterConfig.productId) {
                this.timespentKey += this.adapterConfig.userId + '-' + this.adapterConfig.productId;
            }
            this.timespentKey += '-' + this.itemParamsObj.learningObject.code;

            if (genericContainerInstance) {
                this.genericContainer = genericContainerInstance;
            }
        }
    }, {
        key: 'launchNewLO',
        value: function launchNewLO(itemParams, genericContainerInstance) {
            this.populateAdapterParameters(itemParams, genericContainerInstance);
        }

        // This function is called when any event is occurred.

    }, {
        key: 'eventOccured',
        value: function eventOccured() {
            this.inactiveUserTime = 0;
            var initParams = {
                'inactiveUserTime': this.inactiveUserTime
            };
            if (this.worker) {
                this.worker.postMessage(initParams);
            }
        }
    }, {
        key: 'storeAccTime',


        // This function stores the accumulated time.
        value: function storeAccTime(accTimeUnit) {
            var _this2 = this;

            try {
                this.settings.getData(this.timespentKey, function (lsResults) {
                    if (lsResults) {
                        lsResults = lsResults + accTimeUnit;
                    } else {
                        /* If nothing exists in localStorage. */
                        lsResults = accTimeUnit;
                    }
                    _this2.settings.putData(_this2.timespentKey, lsResults);
                });
            } catch (e) {
                console.log('Error: ' + e);
            }
        }
    }, {
        key: 'publishSavedResults',


        //This function will publish results to LRS.
        value: function publishSavedResults() {
            var _this3 = this;

            this.settings.getData(this.timespentKey, function (results) {
                if (results) {
                    _this3.generateExperiencedStatement(results);
                    _this3.settings.removeData(_this3.timespentKey);
                }
            });
        }
    }, {
        key: 'stopTimer',


        //This function stops the timer.
        value: function stopTimer() {
            if (this.worker) {
                this.publishSavedResults();
                this.worker.postMessage('stopTimer');
            }
        }

        //This function destroys the worker.

    }, {
        key: 'destroyWorker',
        value: function destroyWorker() {
            if (this.worker) {
                this.worker.terminate();
                this.worker = undefined;
            }
        }
    }, {
        key: 'startTimer',


        //This function starts the timer.
        value: function startTimer() {
            var _this4 = this;

            if (typeof Worker !== 'undefined') {
                if (this.worker) {
                    this.worker.terminate();
                    this.worker = undefined;
                }
                if (typeof this.worker === 'undefined') {
                    this.worker = new Worker(this.adapterConfig.dependencyBase + 'dist/js/active_time_worker.js');
                }
            } else {
                console.log('Error');
            }

            var accTimeUnit = this.adapterConfig.config.accTimeUnit;
            var timeRecordingInterval = this.adapterConfig.config.timeRecordingInterval;
            var inactiveUserTimeThreshold = this.adapterConfig.config.inactiveUserTimeThreshold;

            try {
                var initParams = {
                    'accTimeUnit': accTimeUnit,
                    'timeRecordingInterval': timeRecordingInterval,
                    'inactiveUserTimeThreshold': inactiveUserTimeThreshold,
                    'inactiveUserTime': this.inactiveUserTime
                };

                if (this.worker) {
                    this.worker.postMessage(initParams);

                    //Receiving Messages from worker.
                    this.worker.onmessage = function (event) {
                        if (event.data === 'storeAccTime') {
                            _this4.storeAccTime(accTimeUnit);
                        } else if (event.data === 'publishSavedResults') {
                            _this4.publishSavedResults();
                        }
                    };
                }
            } catch (e) {
                console.log('Error: ' + e);
            }
        }
    }, {
        key: 'generateStatement',


        //options - description, mode and other keys, if any
        //statementObject optional param if present then objectId and score fetched from it
        value: function generateStatement(verb, options, statementObject) {

            var interpretedStatementsArray = [],
                interpretedStatement = {};
            var dateTime = options.date || new Date();

            interpretedStatement.json = { 'actor': {}, 'context': {}, 'verb': {}, 'object': {}, 'timestamp': '' };

            if (verb === 'launched') {
                this.launched = true;
                this.startTimer();
            } else if (verb === 'closed') {
                this.launched = false;
                this.publishSavedResults();
                this.destroyWorker();
            } else if (verb === 'attempted' || verb === 'completed') {
                interpretedStatement.json.result = { 'score': {} };
                if (statementObject.result.score.hasOwnProperty('scaled')) {
                    interpretedStatement.json.result.score.scaled = statementObject.result.score.scaled;
                }
                interpretedStatement.json.result.score.max = statementObject.result.score.max;
                interpretedStatement.json.result.score.raw = statementObject.result.score.raw;
                if (statementObject.result.score.hasOwnProperty('min')) {
                    interpretedStatement.json.result.score.min = statementObject.result.score.min;
                }
            }

            interpretedStatement.json.context.platform = {};
            interpretedStatement.json.context.platform.ua = this.userAgent;
            interpretedStatement.json.verb.id = 'http://adlnet.gov/expapi/verbs/' + verb;

            var objectId = this.itemParamsObj.learningObject.code;

            if (statementObject && statementObject.object) {
                objectId = statementObject.object.id;
            }
            if ($.isEmptyObject(objectId)) {
                objectId = '';
            }
            interpretedStatement.json.object.id = objectId;
            interpretedStatement.json.timestamp = this.getCurrentTimeISOStandard(dateTime);

            interpretedStatement.description = options.description;
            interpretedStatement.mode = options.mode;
            interpretedStatement.generatedTimestamp = this.getCurrentTime(dateTime);

            if (statementObject) {
                return interpretedStatement;
            } else {
                interpretedStatementsArray.push(interpretedStatement);
                this.adapterConfig.sendInterpretedStatements(this.id, interpretedStatementsArray);
            }
        }
    }, {
        key: 'generateExperiencedStatement',
        value: function generateExperiencedStatement(timespent) {

            var interpretedStatementsArray = [],
                interpretedStatement = {};

            var verb = 'experienced';
            var mode = 'Container';
            var description = 'Experienced';
            var duration = this.getDuration(timespent * 1000);
            var objectType = 'Activity';
            var dateTime = new Date();

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

            var objectName = this.itemParamsObj.learningObject.name;
            if ($.isEmptyObject(objectName)) {
                objectName = '';
            }
            var objectId = this.itemParamsObj.learningObject.code;
            if ($.isEmptyObject(objectId)) {
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

    }, {
        key: 'getCurrentTimeISOStandard',
        value: function getCurrentTimeISOStandard(date) {
            var timezoneOffsetMin = date.getTimezoneOffset(),
                offsetHrs = parseInt(Math.abs(timezoneOffsetMin / 60), 10),
                offsetMin = Math.abs(timezoneOffsetMin % 60),
                timezoneStandard = void 0;

            if (offsetHrs < 10) {
                offsetHrs = '0' + offsetHrs;
            }

            if (offsetMin < 10) {
                offsetMin = '0' + offsetMin;
            }

            // Add an opposite sign to the offset // If offset is 0, it means timezone is UTC
            // Timezone difference in hours and minutes // String such as +5:30 or -6:00 or Z
            if (timezoneOffsetMin < 0) {
                timezoneStandard = '+' + offsetHrs + ':' + offsetMin;
            } else if (timezoneOffsetMin > 0) {
                timezoneStandard = '-' + offsetHrs + ':' + offsetMin;
            } else if (timezoneOffsetMin === 0) {
                timezoneStandard = 'Z';
            }

            var dt = date,
                currentDate = dt.getDate(),
                currentMonth = dt.getMonth() + 1,
                currentYear = dt.getFullYear(),
                currentHrs = dt.getHours(),
                currentMins = dt.getMinutes(),
                currentSecs = dt.getSeconds(),
                currentMillisecs = dt.getMilliseconds(),
                currentDatetime = void 0;

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
    }, {
        key: 'getCurrentTime',
        value: function getCurrentTime(date) {
            var hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
            var amPm = date.getHours() >= 12 ? 'PM' : 'AM';
            hours = hours < 10 ? '0' + hours : hours;
            var minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
            var seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
            var time = /* date.toLocaleDateString() + */hours + ':' + minutes + ':' + seconds + ' ' + amPm;
            return time;
        }
    }, {
        key: 'getDuration',
        value: function getDuration(dt) {
            var duration = 'PT';
            var secs = Math.floor(dt / 1000);
            var milliSecs = Math.floor(dt % 1000 / 10);
            var hrs = Math.floor(secs / 3600);
            var mins = Math.floor(secs % 3600 / 60);
            secs = Math.floor(secs % 3600 % 60);

            if (hrs !== 0) {
                duration += hrs + 'H' + mins + 'M' + secs + '.' + milliSecs + 'S';
            } else if (mins !== 0) {
                duration += mins + 'M' + secs + '.' + milliSecs + 'S';
            } else {
                duration += secs + '.' + milliSecs + 'S';
            }
            return duration;
        }
    }]);

    return ContainerAdapter;
}();

exports.default = ContainerAdapter;
module.exports = exports['default'];

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Settings = function () {
  function Settings() {
    _classCallCheck(this, Settings);

    /* localStorage may be disabled due to zero-quota issues (e.g. iPad in private browsing mode) */
    this._isLocalStorageEnabled;
    this.localStorageNamespace = 'comprodls.analytics';
    this.version = '1.0.0';
  }

  /**
   * Purpose: To check if local storage is enabled in browser or not.
   * Input Parameter :none
   * Output : true or false.
   */


  _createClass(Settings, [{
    key: 'isLocalStorageEnabled',
    value: function isLocalStorageEnabled() {
      if (this._isLocalStorageEnabled) {
        return true;
      }
      if (typeof _isLocalStorageEnabled === 'undefined') {
        this._isLocalStorageEnabled = false;
        if (localStorage) {
          try {
            localStorage.setItem('_isLocalStorageEnabled', '?');
            localStorage.removeItem('_isLocalStorageEnabled');
            this._isLocalStorageEnabled = true;
          } catch (e) {}
        }
        return this._isLocalStorageEnabled;
      } else {
        return false;
      }
    }
  }, {
    key: 'putData',


    /**
     * Purpose: To set a value for corresponding key in localstorage
     * Input Parameter :key, value and callback function
     * Output : none
     */
    value: function putData(key, val, callback) {
      if (!this.isLocalStorageEnabled()) {
        if (callback) {
          callback();
        }
        return;
      }

      localStorage[this.localStorageNamespace + '.' + key + '-' + this.version] = JSON.stringify(val);

      if (callback) {
        callback();
      }
    }
  }, {
    key: 'getData',


    /**
     * Purpose: To get a value for corresponding key in localstorage
     * Input Parameter :key and callback function
     * Output : Value for the corresponding key.
     */
    value: function getData(key, callback) {
      if (!this.isLocalStorageEnabled()) {
        if (callback) {
          callback(null);
        }
        return;
      }

      var val = localStorage[this.localStorageNamespace + '.' + key + '-' + this.version];
      if (val) {
        callback(JSON.parse(val));
      } else {
        callback(null);
      }
    }
  }, {
    key: 'getMultipleData',


    /**
     * Purpose: To get values for all corresponding keys in localstorage
     * Input Parameter :keys and callback function
     * Output : Values for the corresponding keys.
     */
    value: function getMultipleData(keys, callback) {
      if (!this.isLocalStorageEnabled()) {
        if (callback) {
          callback({});
        }
        return;
      }

      var retVal = {};
      for (var i = 0; i < keys.length; i++) {
        if (localStorage[this.localStorageNamespace + '.' + keys[i] + '-' + this.version]) {
          retVal[keys[i]] = localStorage[this.localStorageNamespace + '.' + keys[i] + '-' + this.version];
        }
      }
      callback(retVal);
    }
  }, {
    key: 'removeMultipleData',


    /**
     * Purpose: To remove all old version keys from localstorage.
     */
    value: function removeMultipleData(callback) {
      if (!this.isLocalStorageEnabled()) {
        if (callback) {
          callback();
        }
        return;
      }
      var removeItems = [];
      for (var i = 0, len = localStorage.length; i < len; ++i) {
        var key = localStorage.key(i);
        if (key.indexOf(this.localStorageNamespace) !== -1) {
          var localstorageVersion = key.substring(key.lastIndexOf('-') + 1, key.length);
          if (localstorageVersion !== this.version) {
            removeItems.push(key);
          }
        }
      }
      for (var j = 0; j < removeItems.length; j++) {
        localStorage.removeItem(removeItems[j]);
      }
      if (callback) {
        callback();
      }
    }
  }, {
    key: 'removeData',


    /**
     * Purpose: To remove a specific key from localStorage.
     */
    value: function removeData(key, callback) {
      if (!this.isLocalStorageEnabled()) {
        if (callback) {
          callback();
        }
        return;
      }
      localStorage.removeItem(this.localStorageNamespace + '.' + key + '-' + this.version);
      if (callback) {
        callback();
      }
    }
  }]);

  return Settings;
}();

exports.default = Settings;
module.exports = exports['default'];

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* global $ */
/* global Channel */

var GenericContainer = function () {
  function GenericContainer(uniqueLOId, dependencyBase, LOInitParams) {
    _classCallCheck(this, GenericContainer);

    this.uniqueLOId = uniqueLOId;
    this.dependencyBase = dependencyBase;
    this.LOInitParams = LOInitParams;
  }

  _createClass(GenericContainer, [{
    key: 'launchLO',
    value: function launchLO(itemParams, myadapter) {
      var _this = this;

      var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

      var containerID = myadapter.adapterConfig.iframeContainerId;

      var iframeUniqueId = myadapter.adapterConfig.iframeId.substring(1);

      $(containerID).html('<div class="content-loader-container" style="display: flex;height: 100%;align-items: center;justify-content: center;position: absolute;top: 0;left: 0;width: 100%;"><div class="content-loader" style="font-size:42px;"><i class="fa fa-spinner fa-pulse" ></i></div></div><iframe id="' + iframeUniqueId + '" style="height:100%; width:100%;visibility:hidden;" src="" allowfullscreen></iframe>');
      var iframe = $(containerID).find('iframe');

      var initParams = this.LOInitParams; //this.getInitParams(itemParams);

      $(iframe).on('load', function () {
        myadapter.launchNewLO(itemParams, _this);
        _this.initChannel(iframe).then(function (channel) {
          _this.channel = channel;
          _this.bindChannel(channel, initParams, myadapter);
        });
      });

      var id = itemParams.learningObject.code;

      if (id) {
        $.get({
          url: itemParams.learningObject.path + '/index.html'
        }, function (data) {
          var base = '<base href="' + itemParams.learningObject.path + '/">';
          data = data.replace(/(<head[\s\S]*?>)/, '$1' + base);

          /* Callback binds events with iframe - needs to be called here for IE issue
           * IE issue- iframe unload event triggers first
           */
          callback();

          iframe[0].contentWindow.document.open();
          if (window.MSApp && window.MSApp.execUnsafeLocalFunction) {
            window.MSApp.execUnsafeLocalFunction(function () {
              iframe[0].contentWindow.document.write(data);
            });
          } else {
            iframe[0].contentWindow.document.write(data);
          }
          iframe[0].contentWindow.document.close();
        }).fail(function () {
          myadapter.adapterConfig.errorHandler(myadapter.adapterConfig.id, {
            type: 'load-index.html',
            message: 'Something went wrong'
          });
        });
      }
    }
  }, {
    key: 'getInitParams',
    value: function getInitParams(itemParams) {
      var initParams = {
        id: itemParams.learningObject.code,
        loWithoutControls: false
      };
      if (itemParams.container && itemParams.container.config && itemParams.container.config.hasOwnProperty('disableLOButtons')) {
        initParams.loWithoutControls = itemParams.container.config.disableLOButtons;
      }
      var state = itemParams.learningObject.state;
      if (!$.isEmptyObject(state)) {
        initParams.state = state;
      }
      return initParams;
    }
  }, {
    key: 'initChannel',
    value: function initChannel(iframe) {
      return new Promise(function (resolve, reject) {
        var channel = Channel.build({
          window: iframe[0].contentWindow,
          origin: '*',
          scope: 'cup-generic-default',
          onReady: function onReady() {
            resolve(channel);
          }
        });
      });
    }
  }, {
    key: 'bindChannel',
    value: function bindChannel(channel, initParams, adapter) {

      channel.bind('sendMessageToContainer', function (trans, params) {
        if (params.type !== 'init') {
          adapter.platformAdapter.bubbleMessageFromContent(params);
        }

        if (params.type === 'init') {
          adapter.platformAdapter.bubbleMessageFromContent(params, initParams);
          return initParams;
        } else if (params.type === 'ready') {
          $('.content-loader-container').remove();
          $(adapter.adapterConfig.iframeId).css('visibility', '');
        } else if (params.type === 'controlsChange') {
          if (adapter.itemParamsObj.container && adapter.itemParamsObj.container.config && adapter.itemParamsObj.container.config.disableLOButtons) {
            adapter.platformAdapter.bubbleControlsChange(params.data);
          }
        } else if (params.type === 'newState') {
          adapter.platformAdapter.bubbleState(params.data);
        } else if (params.type === 'newStatements') {
          adapter.platformAdapter.bubbleStatements(params.data);
        } else if (params.type === 'size') {
          adapter.platformAdapter.bubbleSizeChange(params.data);
        } else if (params.type === 'terminated') {
          adapter.platformAdapter.bubbleTerminated();
        } else if (params.type === 'feedbackChange') {
          adapter.platformAdapter.bubbleFeedbackChange(params.data);
        }
      });
    }
  }, {
    key: 'triggerLOControlEventListener',
    value: function triggerLOControlEventListener(params, adapter) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        _this2.channel.call({
          method: 'receiveMessageFromContainer',
          params: params,
          success: function success(response) {
            adapter.platformAdapter.bubbleMessageToContent(params, response);
            resolve(response);
          },
          error: function error(_error) {
            adapter.platformAdapter.bubbleMessageToContent(params, _error);
            console.log('receiveMessageFromContainer error', _error);
          }
        });
      });
    }
  }]);

  return GenericContainer;
}();

exports.default = GenericContainer;
module.exports = exports['default'];

/***/ })
/******/ ]);
});
//# sourceMappingURL=xapirunner.js.map