window.PresentationActivityPlayer=function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){!function(e){"use strict";var t=function(){},n={},o=[],i=[];function r(e,r){var c=i,s=void 0,a=void 0,l=void 0,u=void 0;for(u=arguments.length;u-- >2;)o.push(arguments[u]);for(r&&null!=r.children&&(o.length||o.push(r.children),delete r.children);o.length;)if((a=o.pop())&&void 0!==a.pop)for(u=a.length;u--;)o.push(a[u]);else"boolean"==typeof a&&(a=null),(l="function"!=typeof e)&&(null==a?a="":"number"==typeof a?a=String(a):"string"!=typeof a&&(l=!1)),l&&s?c[c.length-1]+=a:c===i?c=[a]:c.push(a),s=l;var p=new t;return p.nodeName=e,p.children=c,p.attributes=null==r?void 0:r,p.key=null==r?void 0:r.key,void 0!==n.vnode&&n.vnode(p),p}function c(e,t){for(var n in t)e[n]=t[n];return e}function s(e,t){e&&("function"==typeof e?e(t):e.current=t)}var a="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout;function l(e,t){return r(e.nodeName,c(c({},e.attributes),t),arguments.length>2?[].slice.call(arguments,2):e.children)}var u=0,p=1,d=2,I=3,m="__preactattr_",f=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,g=[];function h(e){!e._dirty&&(e._dirty=!0)&&1==g.push(e)&&(n.debounceRendering||a)(v)}function v(){for(var e=void 0;e=g.pop();)e._dirty&&F(e)}function y(e,t,n){return"string"==typeof t||"number"==typeof t?void 0!==e.splitText:"string"==typeof t.nodeName?!e._componentConstructor&&b(e,t.nodeName):n||e._componentConstructor===t.nodeName}function b(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function C(e){var t=c({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var o in n)void 0===t[o]&&(t[o]=n[o]);return t}function P(e){var t=e.parentNode;t&&t.removeChild(e)}function A(e,t,n,o,i){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)s(n,null),s(o,e);else if("class"!==t||i)if("style"===t){if(o&&"string"!=typeof o&&"string"!=typeof n||(e.style.cssText=o||""),o&&"object"==typeof o){if("string"!=typeof n)for(var r in n)r in o||(e.style[r]="");for(var c in o)e.style[c]="number"==typeof o[c]&&!1===f.test(c)?o[c]+"px":o[c]}}else if("dangerouslySetInnerHTML"===t)o&&(e.innerHTML=o.__html||"");else if("o"==t[0]&&"n"==t[1]){var a=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),o?n||e.addEventListener(t,S,a):e.removeEventListener(t,S,a),(e._listeners||(e._listeners={}))[t]=o}else if("list"!==t&&"type"!==t&&!i&&t in e){try{e[t]=null==o?"":o}catch(e){}null!=o&&!1!==o||"spellcheck"==t||e.removeAttribute(t)}else{var l=i&&t!==(t=t.replace(/^xlink:?/,""));null==o||!1===o?l?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof o&&(l?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),o):e.setAttribute(t,o))}else e.className=o||""}function S(e){return this._listeners[e.type](n.event&&n.event(e)||e)}var _=[],Z=0,j=!1,N=!1;function W(){for(var e=void 0;e=_.shift();)n.afterMount&&n.afterMount(e),e.componentDidMount&&e.componentDidMount()}function G(e,t,n,o,i,r){Z++||(j=null!=i&&void 0!==i.ownerSVGElement,N=null!=e&&!(m in e));var c=M(e,t,n,o,r);return i&&c.parentNode!==i&&i.appendChild(c),--Z||(N=!1,r||W()),c}function M(e,t,n,o,i){var r=e,c=j;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||i)?e.nodeValue!=t&&(e.nodeValue=t):(r=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(r,e),x(e,!0))),r[m]=!0,r;var s,a,l=t.nodeName;if("function"==typeof l)return function(e,t,n,o){for(var i=e&&e._component,r=i,c=e,s=i&&e._componentConstructor===t.nodeName,a=s,l=C(t);i&&!a&&(i=i._parentComponent);)a=i.constructor===t.nodeName;return i&&a&&(!o||i._component)?(J(i,l,I,n,o),e=i.base):(r&&!s&&(D(r),e=c=null),i=Y(t.nodeName,l,n),e&&!i.nextBase&&(i.nextBase=e,c=null),J(i,l,p,n,o),e=i.base,c&&e!==c&&(c._component=null,x(c,!1))),e}(e,t,n,o);if(j="svg"===l||"foreignObject"!==l&&j,l=String(l),(!e||!b(e,l))&&(s=l,(a=j?document.createElementNS("http://www.w3.org/2000/svg",s):document.createElement(s)).normalizedNodeName=s,r=a,e)){for(;e.firstChild;)r.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(r,e),x(e,!0)}var u=r.firstChild,d=r[m],f=t.children;if(null==d){d=r[m]={};for(var g=r.attributes,h=g.length;h--;)d[g[h].name]=g[h].value}return!N&&f&&1===f.length&&"string"==typeof f[0]&&null!=u&&void 0!==u.splitText&&null==u.nextSibling?u.nodeValue!=f[0]&&(u.nodeValue=f[0]):(f&&f.length||null!=u)&&function(e,t,n,o,i){var r=e.childNodes,c=[],s={},a=0,l=0,u=r.length,p=0,d=t?t.length:0,I=void 0,f=void 0,g=void 0,h=void 0,v=void 0;if(0!==u)for(var b=0;b<u;b++){var C=r[b],A=C[m],S=d&&A?C._component?C._component.__key:A.key:null;null!=S?(a++,s[S]=C):(A||(void 0!==C.splitText?!i||C.nodeValue.trim():i))&&(c[p++]=C)}if(0!==d)for(var _=0;_<d;_++){h=t[_],v=null;var Z=h.key;if(null!=Z)a&&void 0!==s[Z]&&(v=s[Z],s[Z]=void 0,a--);else if(l<p)for(I=l;I<p;I++)if(void 0!==c[I]&&y(f=c[I],h,i)){v=f,c[I]=void 0,I===p-1&&p--,I===l&&l++;break}v=M(v,h,n,o),g=r[_],v&&v!==e&&v!==g&&(null==g?e.appendChild(v):v===g.nextSibling?P(g):e.insertBefore(v,g))}if(a)for(var j in s)void 0!==s[j]&&x(s[j],!1);for(;l<=p;)void 0!==(v=c[p--])&&x(v,!1)}(r,f,n,o,N||null!=d.dangerouslySetInnerHTML),function(e,t,n){var o=void 0;for(o in n)t&&null!=t[o]||null==n[o]||A(e,o,n[o],n[o]=void 0,j);for(o in t)"children"===o||"innerHTML"===o||o in n&&t[o]===("value"===o||"checked"===o?e[o]:n[o])||A(e,o,n[o],n[o]=t[o],j)}(r,t.attributes,d),j=c,r}function x(e,t){var n=e._component;n?D(n):(null!=e[m]&&s(e[m].ref,null),!1!==t&&null!=e[m]||P(e),w(e))}function w(e){for(e=e.lastChild;e;){var t=e.previousSibling;x(e,!0),e=t}}var R=[];function Y(e,t,n){var o=void 0,i=R.length;for(e.prototype&&e.prototype.render?(o=new e(t,n),H.call(o,t,n)):((o=new H(t,n)).constructor=e,o.render=B);i--;)if(R[i].constructor===e)return o.nextBase=R[i].nextBase,R.splice(i,1),o;return o}function B(e,t,n){return this.constructor(e,n)}function J(e,t,o,i,r){e._disable||(e._disable=!0,e.__ref=t.ref,e.__key=t.key,delete t.ref,delete t.key,void 0===e.constructor.getDerivedStateFromProps&&(!e.base||r?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,i)),i&&i!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=i),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,o!==u&&(o!==p&&!1===n.syncComponentUpdates&&e.base?h(e):F(e,p,r)),s(e.__ref,e))}function F(e,t,o,i){if(!e._disable){var r=e.props,s=e.state,a=e.context,l=e.prevProps||r,I=e.prevState||s,m=e.prevContext||a,f=e.base,g=e.nextBase,h=f||g,v=e._component,y=!1,b=m,P=void 0,A=void 0,S=void 0;if(e.constructor.getDerivedStateFromProps&&(s=c(c({},s),e.constructor.getDerivedStateFromProps(r,s)),e.state=s),f&&(e.props=l,e.state=I,e.context=m,t!==d&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(r,s,a)?y=!0:e.componentWillUpdate&&e.componentWillUpdate(r,s,a),e.props=r,e.state=s,e.context=a),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!y){P=e.render(r,s,a),e.getChildContext&&(a=c(c({},a),e.getChildContext())),f&&e.getSnapshotBeforeUpdate&&(b=e.getSnapshotBeforeUpdate(l,I));var j=P&&P.nodeName,N=void 0,M=void 0;if("function"==typeof j){var w=C(P);(A=v)&&A.constructor===j&&w.key==A.__key?J(A,w,p,a,!1):(N=A,e._component=A=Y(j,w,a),A.nextBase=A.nextBase||g,A._parentComponent=e,J(A,w,u,a,!1),F(A,p,o,!0)),M=A.base}else S=h,(N=v)&&(S=e._component=null),(h||t===p)&&(S&&(S._component=null),M=G(S,P,a,o||!f,h&&h.parentNode,!0));if(h&&M!==h&&A!==v){var R=h.parentNode;R&&M!==R&&(R.replaceChild(M,h),N||(h._component=null,x(h,!1)))}if(N&&D(N),e.base=M,M&&!i){for(var B=e,H=e;H=H._parentComponent;)(B=H).base=M;M._component=B,M._componentConstructor=B.constructor}}for(!f||o?_.push(e):y||(e.componentDidUpdate&&e.componentDidUpdate(l,I,b),n.afterUpdate&&n.afterUpdate(e));e._renderCallbacks.length;)e._renderCallbacks.pop().call(e);Z||i||W()}}function D(e){n.beforeUnmount&&n.beforeUnmount(e);var t=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var o=e._component;o?D(o):t&&(null!=t[m]&&s(t[m].ref,null),e.nextBase=t,P(t),R.push(e),w(t)),s(e.__ref,null)}function H(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{},this._renderCallbacks=[]}function V(e,t,n){return G(n,e,{},!1,t,!1)}function X(){return{}}c(H.prototype,{setState:function(e,t){this.prevState||(this.prevState=this.state),this.state=c(c({},this.state),"function"==typeof e?e(this.state,this.props):e),t&&this._renderCallbacks.push(t),h(this)},forceUpdate:function(e){e&&this._renderCallbacks.push(e),F(this,d)},render:function(){}});var U={h:r,createElement:r,cloneElement:l,createRef:X,Component:H,render:V,rerender:v,options:n};e.default=U,e.h=r,e.createElement=r,e.cloneElement=l,e.createRef=X,e.Component=H,e.render=V,e.rerender=v,e.options=n,Object.defineProperty(e,"__esModule",{value:!0})}(t)},function(e,t,n){e.exports=n(2)},function(e,t,n){"use strict";var o,i=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),c=n(0),s=n(5),a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.render=function(e,t){c.render(c.h(s.PresentationActivityPlayerComponent,{renderItemFuncProp:this.renderItem.bind(this)}),t)},t.prototype.focalise=function(){this.getItems()[0].focalise()},t.prototype.destroy=function(){this.getItems()[0].destroy()},t}(r.BaseActivityPlayer);t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(4),i=function(){function e(){this._items=[],this.initializedItems=[]}return e.prototype.init=function(e,t,n){for(var i=[],r=this,c=function(e){s._items[e]=new o.ItemApp;var c=s._items[e].init(t[e],{events:n.events,uiStyle:n.uiStyle,services:n.services});i.push(c),c.then(function(){r.initializedItems[e]=r._items[e]})},s=this,a=0;a<t.length;a++)c(a);Promise.all(i).then(function(e){})},e.prototype.renderItem=function(e,t,n){var o=this;if(o.initializedItems[e])o._items[e].render(t,n);else var i=setInterval(function(){o.initializedItems[e]&&(clearInterval(i),o._items[e].render(t,n))},50)},e.prototype.subscribe=function(e,t){},e.prototype.unsubscribe=function(e,t){},e.prototype.getItemCount=function(){return this._items.length},e.prototype.getItems=function(){return this._items},e.prototype.getCurrentItem=function(){return this._currentItem},e.prototype.getItem=function(e){return this._items[e]},e.prototype.save=function(e){},e.prototype.submit=function(e,t){},e.prototype.retry=function(){},e.prototype.getResponses=function(){return{launchId:"<launchId>",items:[{itemId:"<itemId>",responseId:"<ResponseId>",maxScore:"<item-max-score>",gotScore:"<got-score>",status:"NotAttempted | InProgress | Submitted"}]}},e}();t.BaseActivityPlayer=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(){this._initComplete=!1}return e.prototype.init=function(e,t){this.options=t,t&&t.services&&(this._itemsAPI=t.services.items,this._attemptsAPI=t.services.attempts,this._moduleLoader=t.services.moduleLoader);var n=this;return new Promise(function(t,o){n.fetchItemJSON(e).then(function(e){n._itemJSON=e;var t=n.getItemType(e);return n.loadItemPlayer(t)}).then(function(e){n._itemPlayer=window[e].init(),n._initComplete=!0,t()})})},e.prototype.render=function(e,t){var n={config:this._itemJSON,events:this.options.callbacks,uiStyle:this.options.uiStyle,playerButtons:{visible:!1}},o=this;if(this._initComplete)o._itemPlayer=this._itemPlayer.addWidget("WB2",e,n),t();else var i=setInterval(function(){o._initComplete&&(clearInterval(i),o._itemPlayer=o._itemPlayer.addWidget("WB2",e,n)),t()},50)},e.prototype.fetchItemJSON=function(e){var t=this;return new Promise(function(n,o){"object"==typeof e?n(e):"string"==typeof e&&t._itemsAPI.getItem(e).then(function(e){return n(e)})})},e.prototype.getItemType=function(e){return e.type},e.prototype.loadItemPlayer=function(e){var t=this;return new Promise(function(n,o){t._moduleLoader&&t._moduleLoader.loadItemPlayer&&t._moduleLoader.loadItemPlayer(e).then(function(e){return n(e)})})},e.prototype.save=function(e){},e.prototype.submit=function(e,t){this._itemPlayer.displayFeedback(this._itemPlayer.score()),e()},e.prototype.getResponse=function(){return{launchId:"<launchId>",items:{itemId:"<itemId>",responseId:"<ResponseId>",maxScore:"<item-max-score>",gotScore:"<got-score>",status:"NotAttempted | InProgress | Submitted"}}},e.prototype.getResponses=function(){return{launchId:"<launchId>",items:[{itemId:"<itemId>",responseId:"<ResponseId>",maxScore:"<item-max-score>",gotScore:"<got-score>",status:"NotAttempted | InProgress | Submitted"}]}},e.prototype.retry=function(){this._itemPlayer.clearFeedback()},e.prototype.reset=function(){this._itemPlayer.reset()},e.prototype.showHints=function(){return-1},e.prototype.hideHints=function(){},e.prototype.hasHints=function(){return!0},e.prototype.remainingHints=function(){return 1},e.prototype.subscribe=function(e,t){},e.prototype.unsubscribe=function(e,t){},e.prototype.destroy=function(){this._itemPlayer.destroy()},e.prototype.focalise=function(){this._itemPlayer.focalise()},e.prototype.hide=function(){},e.prototype.show=function(){},e}();t.ItemApp=o},function(e,t,n){"use strict";var o,i=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),c=n(6),s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.render=function(e){return r.h(c.ItemPlayerComponent,{renderItemFuncProp:e.renderItemFuncProp})},t}(r.Component);t.PresentationActivityPlayerComponent=s},function(e,t,n){"use strict";var o,i=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);n(7);var c=function(e){function t(t){return e.call(this,t)||this}return i(t,e),t.prototype.componentDidMount=function(){var e=this;this.props.renderItemFuncProp(0,this.base,function(){e.base.classList.remove("item-loader")})},t.prototype.render=function(){return r.h("div",{class:"item-loader"})},t}(r.Component);t.ItemPlayerComponent=c},function(e,t,n){var o=n(8);"string"==typeof o&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};n(12)(o,i);o.locals&&(e.exports=o.locals)},function(e,t,n){t=e.exports=n(9)(!1);var o=n(10)(n(11));t.push([e.i,".item-loader {\n  background-image: url("+o+");\n  height: 500px;\n  background-repeat: no-repeat;\n  background-position-x: center;\n  background-position-y: center;\n  background-color: rgba(0, 0, 0, 0.1);\n  margin: 0;\n}\n",""])},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var i=(c=o,s=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(a," */")),r=o.sources.map(function(e){return"/*# sourceURL=".concat(o.sourceRoot).concat(e," */")});return[n].concat(r).concat([i]).join("\n")}var c,s,a;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2],"{").concat(n,"}"):n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},i=0;i<this.length;i++){var r=this[i][0];null!=r&&(o[r]=!0)}for(var c=0;c<e.length;c++){var s=e[c];null!=s[0]&&o[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="(".concat(s[2],") and (").concat(n,")")),t.push(s))}},t}},function(e,t,n){"use strict";e.exports=function(e,t){return"string"!=typeof(e=e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)||t?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgd2lkdGg9Jzc1cHgnIGhlaWdodD0nNzVweCcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiIGNsYXNzPSJ1aWwtc3BpbiI+DQogIDxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJub25lIiBjbGFzcz0iYmsiPjwvcmVjdD4NCiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTAgNTApIj4NCiAgICA8ZyB0cmFuc2Zvcm09InJvdGF0ZSgwKSB0cmFuc2xhdGUoMzQgMCkiPg0KICAgICAgPGNpcmNsZSBjeD0iMCIgY3k9IjAiIHI9IjgiIGZpbGw9IiMwMDAiPg0KICAgICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiBmcm9tPSIxIiB0bz0iMC4xIiBiZWdpbj0iMHMiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGU+DQogICAgICAgIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0ic2NhbGUiIGZyb209IjEuNSIgdG89IjEiIGJlZ2luPSIwcyIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZVRyYW5zZm9ybT4NCiAgICAgIDwvY2lyY2xlPg0KICAgIDwvZz4NCiAgICA8ZyB0cmFuc2Zvcm09InJvdGF0ZSg0NSkgdHJhbnNsYXRlKDM0IDApIj4NCiAgICAgIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSI4IiBmaWxsPSIjMDAwIj4NCiAgICAgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgZnJvbT0iMSIgdG89IjAuMSIgYmVnaW49IjAuMTJzIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlPg0KICAgICAgICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InNjYWxlIiBmcm9tPSIxLjUiIHRvPSIxIiBiZWdpbj0iMC4xMnMiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGVUcmFuc2Zvcm0+DQogICAgICA8L2NpcmNsZT4NCiAgICA8L2c+DQogICAgPGcgdHJhbnNmb3JtPSJyb3RhdGUoOTApIHRyYW5zbGF0ZSgzNCAwKSI+DQogICAgICA8Y2lyY2xlIGN4PSIwIiBjeT0iMCIgcj0iOCIgZmlsbD0iIzAwMCI+DQogICAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIGZyb209IjEiIHRvPSIwLjEiIGJlZ2luPSIwLjI1cyIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZT4NCiAgICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJzY2FsZSIgZnJvbT0iMS41IiB0bz0iMSIgYmVnaW49IjAuMjVzIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlVHJhbnNmb3JtPg0KICAgICAgPC9jaXJjbGU+DQogICAgPC9nPg0KICAgIDxnIHRyYW5zZm9ybT0icm90YXRlKDEzNSkgdHJhbnNsYXRlKDM0IDApIj4NCiAgICAgIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSI4IiBmaWxsPSIjMDAwIj4NCiAgICAgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgZnJvbT0iMSIgdG89IjAuMSIgYmVnaW49IjAuMzdzIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlPg0KICAgICAgICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InNjYWxlIiBmcm9tPSIxLjUiIHRvPSIxIiBiZWdpbj0iMC4zN3MiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGVUcmFuc2Zvcm0+DQogICAgICA8L2NpcmNsZT4NCiAgICA8L2c+DQogICAgPGcgdHJhbnNmb3JtPSJyb3RhdGUoMTgwKSB0cmFuc2xhdGUoMzQgMCkiPg0KICAgICAgPGNpcmNsZSBjeD0iMCIgY3k9IjAiIHI9IjgiIGZpbGw9IiMwMDAiPg0KICAgICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiBmcm9tPSIxIiB0bz0iMC4xIiBiZWdpbj0iMC41cyIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZT4NCiAgICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJzY2FsZSIgZnJvbT0iMS41IiB0bz0iMSIgYmVnaW49IjAuNXMiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGVUcmFuc2Zvcm0+DQogICAgICA8L2NpcmNsZT4NCiAgICA8L2c+DQogICAgPGcgdHJhbnNmb3JtPSJyb3RhdGUoMjI1KSB0cmFuc2xhdGUoMzQgMCkiPg0KICAgICAgPGNpcmNsZSBjeD0iMCIgY3k9IjAiIHI9IjgiIGZpbGw9IiMwMDAiPg0KICAgICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiBmcm9tPSIxIiB0bz0iMC4xIiBiZWdpbj0iMC42MnMiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGU+DQogICAgICAgIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0ic2NhbGUiIGZyb209IjEuNSIgdG89IjEiIGJlZ2luPSIwLjYycyIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZVRyYW5zZm9ybT4NCiAgICAgIDwvY2lyY2xlPg0KICAgIDwvZz4NCiAgICA8ZyB0cmFuc2Zvcm09InJvdGF0ZSgyNzApIHRyYW5zbGF0ZSgzNCAwKSI+DQogICAgICA8Y2lyY2xlIGN4PSIwIiBjeT0iMCIgcj0iOCIgZmlsbD0iIzAwMCI+DQogICAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIGZyb209IjEiIHRvPSIwLjEiIGJlZ2luPSIwLjc1cyIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZT4NCiAgICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJzY2FsZSIgZnJvbT0iMS41IiB0bz0iMSIgYmVnaW49IjAuNzVzIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlVHJhbnNmb3JtPg0KICAgICAgPC9jaXJjbGU+DQogICAgPC9nPg0KICAgIDxnIHRyYW5zZm9ybT0icm90YXRlKDMxNSkgdHJhbnNsYXRlKDM0IDApIj4NCiAgICAgIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSI4IiBmaWxsPSIjMDAwIj4NCiAgICAgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgZnJvbT0iMSIgdG89IjAuMSIgYmVnaW49IjAuODdzIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlPg0KICAgICAgICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InNjYWxlIiBmcm9tPSIxLjUiIHRvPSIxIiBiZWdpbj0iMC44N3MiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGVUcmFuc2Zvcm0+DQogICAgICA8L2NpcmNsZT4NCiAgICA8L2c+DQogIDwvZz4NCjwvc3ZnPg=="},function(e,t,n){"use strict";var o,i={},r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},c=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}();function s(e,t){for(var n=[],o={},i=0;i<e.length;i++){var r=e[i],c=t.base?r[0]+t.base:r[0],s={css:r[1],media:r[2],sourceMap:r[3]};o[c]?o[c].parts.push(s):n.push(o[c]={id:c,parts:[s]})}return n}function a(e,t){for(var n=0;n<e.length;n++){var o=e[n],r=i[o.id],c=0;if(r){for(r.refs++;c<r.parts.length;c++)r.parts[c](o.parts[c]);for(;c<o.parts.length;c++)r.parts.push(g(o.parts[c],t))}else{for(var s=[];c<o.parts.length;c++)s.push(g(o.parts[c],t));i[o.id]={id:o.id,refs:1,parts:s}}}}function l(e){var t=document.createElement("style");if(void 0===e.attributes.nonce){var o=n.nc;o&&(e.attributes.nonce=o)}if(Object.keys(e.attributes).forEach(function(n){t.setAttribute(n,e.attributes[n])}),"function"==typeof e.insert)e.insert(t);else{var i=c(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var u,p=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function d(e,t,n,o){var i=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=p(t,i);else{var r=document.createTextNode(i),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(r,c[t]):e.appendChild(r)}}function I(e,t,n){var o=n.css,i=n.media,r=n.sourceMap;if(i&&e.setAttribute("media",i),r&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var m=null,f=0;function g(e,t){var n,o,i;if(t.singleton){var r=f++;n=m||(m=l(t)),o=d.bind(null,n,r,!1),i=d.bind(null,n,r,!0)}else n=l(t),o=I.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).attributes="object"==typeof t.attributes?t.attributes:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=s(e,t);return a(n,t),function(e){for(var o=[],r=0;r<n.length;r++){var c=n[r],l=i[c.id];l&&(l.refs--,o.push(l))}e&&a(s(e,t),t);for(var u=0;u<o.length;u++){var p=o[u];if(0===p.refs){for(var d=0;d<p.parts.length;d++)p.parts[d]();delete i[p.id]}}}}}]).default;
//# sourceMappingURL=presentationActivityPlayer.js.map