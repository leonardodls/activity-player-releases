define((function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}([function(t,e,n){"use strict";n.r(e),n.d(e,"h",(function(){return a})),n.d(e,"createElement",(function(){return a})),n.d(e,"cloneElement",(function(){return p})),n.d(e,"createRef",(function(){return V})),n.d(e,"Component",(function(){return j})),n.d(e,"render",(function(){return W})),n.d(e,"rerender",(function(){return y})),n.d(e,"options",(function(){return o}));var r=function(){},o={},i=[],s=[];function a(t,e){var n,a,c,u,l=s;for(u=arguments.length;u-- >2;)i.push(arguments[u]);for(e&&null!=e.children&&(i.length||i.push(e.children),delete e.children);i.length;)if((a=i.pop())&&void 0!==a.pop)for(u=a.length;u--;)i.push(a[u]);else"boolean"==typeof a&&(a=null),(c="function"!=typeof t)&&(null==a?a="":"number"==typeof a?a=String(a):"string"!=typeof a&&(c=!1)),c&&n?l[l.length-1]+=a:l===s?l=[a]:l.push(a),n=c;var p=new r;return p.nodeName=t,p.children=l,p.attributes=null==e?void 0:e,p.key=null==e?void 0:e.key,void 0!==o.vnode&&o.vnode(p),p}function c(t,e){for(var n in e)t[n]=e[n];return t}function u(t,e){t&&("function"==typeof t?t(e):t.current=e)}var l="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout;function p(t,e){return a(t.nodeName,c(c({},t.attributes),e),arguments.length>2?[].slice.call(arguments,2):t.children)}var d=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,f=[];function h(t){!t._dirty&&(t._dirty=!0)&&1==f.push(t)&&(o.debounceRendering||l)(y)}function y(){for(var t;t=f.pop();)t._dirty&&R(t)}function m(t,e,n){return"string"==typeof e||"number"==typeof e?void 0!==t.splitText:"string"==typeof e.nodeName?!t._componentConstructor&&v(t,e.nodeName):n||t._componentConstructor===e.nodeName}function v(t,e){return t.normalizedNodeName===e||t.nodeName.toLowerCase()===e.toLowerCase()}function _(t){var e=c({},t.attributes);e.children=t.children;var n=t.nodeName.defaultProps;if(void 0!==n)for(var r in n)void 0===e[r]&&(e[r]=n[r]);return e}function g(t){var e=t.parentNode;e&&e.removeChild(t)}function b(t,e,n,r,o){if("className"===e&&(e="class"),"key"===e);else if("ref"===e)u(n,null),u(r,t);else if("class"!==e||o)if("style"===e){if(r&&"string"!=typeof r&&"string"!=typeof n||(t.style.cssText=r||""),r&&"object"==typeof r){if("string"!=typeof n)for(var i in n)i in r||(t.style[i]="");for(var i in r)t.style[i]="number"==typeof r[i]&&!1===d.test(i)?r[i]+"px":r[i]}}else if("dangerouslySetInnerHTML"===e)r&&(t.innerHTML=r.__html||"");else if("o"==e[0]&&"n"==e[1]){var s=e!==(e=e.replace(/Capture$/,""));e=e.toLowerCase().substring(2),r?n||t.addEventListener(e,I,s):t.removeEventListener(e,I,s),(t._listeners||(t._listeners={}))[e]=r}else if("list"!==e&&"type"!==e&&!o&&e in t){try{t[e]=null==r?"":r}catch(t){}null!=r&&!1!==r||"spellcheck"==e||t.removeAttribute(e)}else{var a=o&&e!==(e=e.replace(/^xlink:?/,""));null==r||!1===r?a?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.removeAttribute(e):"function"!=typeof r&&(a?t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),r):t.setAttribute(e,r))}else t.className=r||""}function I(t){return this._listeners[t.type](o.event&&o.event(t)||t)}var S=[],E=0,C=!1,P=!1;function B(){for(var t;t=S.shift();)o.afterMount&&o.afterMount(t),t.componentDidMount&&t.componentDidMount()}function N(t,e,n,r,o,i){E++||(C=null!=o&&void 0!==o.ownerSVGElement,P=null!=t&&!("__preactattr_"in t));var s=w(t,e,n,r,i);return o&&s.parentNode!==o&&o.appendChild(s),--E||(P=!1,i||B()),s}function w(t,e,n,r,o){var i=t,s=C;if(null!=e&&"boolean"!=typeof e||(e=""),"string"==typeof e||"number"==typeof e)return t&&void 0!==t.splitText&&t.parentNode&&(!t._component||o)?t.nodeValue!=e&&(t.nodeValue=e):(i=document.createTextNode(e),t&&(t.parentNode&&t.parentNode.replaceChild(i,t),A(t,!0))),i.__preactattr_=!0,i;var a,c,u=e.nodeName;if("function"==typeof u)return function(t,e,n,r){var o=t&&t._component,i=o,s=t,a=o&&t._componentConstructor===e.nodeName,c=a,u=_(e);for(;o&&!c&&(o=o._parentComponent);)c=o.constructor===e.nodeName;o&&c&&(!r||o._component)?(k(o,u,3,n,r),t=o.base):(i&&!a&&(H(i),t=s=null),o=O(e.nodeName,u,n),t&&!o.nextBase&&(o.nextBase=t,s=null),k(o,u,1,n,r),t=o.base,s&&t!==s&&(s._component=null,A(s,!1)));return t}(t,e,n,r);if(C="svg"===u||"foreignObject"!==u&&C,u=String(u),(!t||!v(t,u))&&(a=u,(c=C?document.createElementNS("http://www.w3.org/2000/svg",a):document.createElement(a)).normalizedNodeName=a,i=c,t)){for(;t.firstChild;)i.appendChild(t.firstChild);t.parentNode&&t.parentNode.replaceChild(i,t),A(t,!0)}var l=i.firstChild,p=i.__preactattr_,d=e.children;if(null==p){p=i.__preactattr_={};for(var f=i.attributes,h=f.length;h--;)p[f[h].name]=f[h].value}return!P&&d&&1===d.length&&"string"==typeof d[0]&&null!=l&&void 0!==l.splitText&&null==l.nextSibling?l.nodeValue!=d[0]&&(l.nodeValue=d[0]):(d&&d.length||null!=l)&&function(t,e,n,r,o){var i,s,a,c,u,l=t.childNodes,p=[],d={},f=0,h=0,y=l.length,v=0,_=e?e.length:0;if(0!==y)for(var b=0;b<y;b++){var I=l[b],S=I.__preactattr_;null!=(E=_&&S?I._component?I._component.__key:S.key:null)?(f++,d[E]=I):(S||(void 0!==I.splitText?!o||I.nodeValue.trim():o))&&(p[v++]=I)}if(0!==_)for(b=0;b<_;b++){var E;if(c=e[b],u=null,null!=(E=c.key))f&&void 0!==d[E]&&(u=d[E],d[E]=void 0,f--);else if(h<v)for(i=h;i<v;i++)if(void 0!==p[i]&&m(s=p[i],c,o)){u=s,p[i]=void 0,i===v-1&&v--,i===h&&h++;break}u=w(u,c,n,r),a=l[b],u&&u!==t&&u!==a&&(null==a?t.appendChild(u):u===a.nextSibling?g(a):t.insertBefore(u,a))}if(f)for(var b in d)void 0!==d[b]&&A(d[b],!1);for(;h<=v;)void 0!==(u=p[v--])&&A(u,!1)}(i,d,n,r,P||null!=p.dangerouslySetInnerHTML),function(t,e,n){var r;for(r in n)e&&null!=e[r]||null==n[r]||b(t,r,n[r],n[r]=void 0,C);for(r in e)"children"===r||"innerHTML"===r||r in n&&e[r]===("value"===r||"checked"===r?t[r]:n[r])||b(t,r,n[r],n[r]=e[r],C)}(i,e.attributes,p),C=s,i}function A(t,e){var n=t._component;n?H(n):(null!=t.__preactattr_&&u(t.__preactattr_.ref,null),!1!==e&&null!=t.__preactattr_||g(t),x(t))}function x(t){for(t=t.lastChild;t;){var e=t.previousSibling;A(t,!0),t=e}}var M=[];function O(t,e,n){var r,o=M.length;for(t.prototype&&t.prototype.render?(r=new t(e,n),j.call(r,e,n)):((r=new j(e,n)).constructor=t,r.render=T);o--;)if(M[o].constructor===t)return r.nextBase=M[o].nextBase,M.splice(o,1),r;return r}function T(t,e,n){return this.constructor(t,n)}function k(t,e,n,r,i){t._disable||(t._disable=!0,t.__ref=e.ref,t.__key=e.key,delete e.ref,delete e.key,void 0===t.constructor.getDerivedStateFromProps&&(!t.base||i?t.componentWillMount&&t.componentWillMount():t.componentWillReceiveProps&&t.componentWillReceiveProps(e,r)),r&&r!==t.context&&(t.prevContext||(t.prevContext=t.context),t.context=r),t.prevProps||(t.prevProps=t.props),t.props=e,t._disable=!1,0!==n&&(1!==n&&!1===o.syncComponentUpdates&&t.base?h(t):R(t,1,i)),u(t.__ref,t))}function R(t,e,n,r){if(!t._disable){var i,s,a,u=t.props,l=t.state,p=t.context,d=t.prevProps||u,f=t.prevState||l,h=t.prevContext||p,y=t.base,m=t.nextBase,v=y||m,g=t._component,b=!1,I=h;if(t.constructor.getDerivedStateFromProps&&(l=c(c({},l),t.constructor.getDerivedStateFromProps(u,l)),t.state=l),y&&(t.props=d,t.state=f,t.context=h,2!==e&&t.shouldComponentUpdate&&!1===t.shouldComponentUpdate(u,l,p)?b=!0:t.componentWillUpdate&&t.componentWillUpdate(u,l,p),t.props=u,t.state=l,t.context=p),t.prevProps=t.prevState=t.prevContext=t.nextBase=null,t._dirty=!1,!b){i=t.render(u,l,p),t.getChildContext&&(p=c(c({},p),t.getChildContext())),y&&t.getSnapshotBeforeUpdate&&(I=t.getSnapshotBeforeUpdate(d,f));var C,P,w=i&&i.nodeName;if("function"==typeof w){var x=_(i);(s=g)&&s.constructor===w&&x.key==s.__key?k(s,x,1,p,!1):(C=s,t._component=s=O(w,x,p),s.nextBase=s.nextBase||m,s._parentComponent=t,k(s,x,0,p,!1),R(s,1,n,!0)),P=s.base}else a=v,(C=g)&&(a=t._component=null),(v||1===e)&&(a&&(a._component=null),P=N(a,i,p,n||!y,v&&v.parentNode,!0));if(v&&P!==v&&s!==g){var M=v.parentNode;M&&P!==M&&(M.replaceChild(P,v),C||(v._component=null,A(v,!1)))}if(C&&H(C),t.base=P,P&&!r){for(var T=t,j=t;j=j._parentComponent;)(T=j).base=P;P._component=T,P._componentConstructor=T.constructor}}for(!y||n?S.push(t):b||(t.componentDidUpdate&&t.componentDidUpdate(d,f,I),o.afterUpdate&&o.afterUpdate(t));t._renderCallbacks.length;)t._renderCallbacks.pop().call(t);E||r||B()}}function H(t){o.beforeUnmount&&o.beforeUnmount(t);var e=t.base;t._disable=!0,t.componentWillUnmount&&t.componentWillUnmount(),t.base=null;var n=t._component;n?H(n):e&&(null!=e.__preactattr_&&u(e.__preactattr_.ref,null),t.nextBase=e,g(e),M.push(t),x(e)),u(t.__ref,null)}function j(t,e){this._dirty=!0,this.context=e,this.props=t,this.state=this.state||{},this._renderCallbacks=[]}function W(t,e,n){return N(n,t,{},!1,e,!1)}function V(){return{}}c(j.prototype,{setState:function(t,e){this.prevState||(this.prevState=this.state),this.state=c(c({},this.state),"function"==typeof t?t(this.state,this.props):t),e&&this._renderCallbacks.push(e),h(this)},forceUpdate:function(t){t&&this._renderCallbacks.push(t),R(this,2)},render:function(){}});var U={h:a,createElement:a,cloneElement:p,createRef:V,Component:j,render:W,rerender:y,options:o};e.default=U},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=function(t){this.launchId=t.launchId,this.type=t.type};e.EventArgs=i;var s=function(t){function e(e){var n=t.call(this,e)||this;return n.itemId=e.itemId,n.response=e.response,n}return o(e,t),e}(i);e.SubmitEventArgs=s;var a=function(t){function e(e){var n=t.call(this,e)||this;return n.playerInstance=e.playerInstance,n}return o(e,t),e}(i);e.ReadyEventArgs=a;var c=function(t){function e(e){var n=t.call(this,e)||this;return n.error=e.exception,n}return o(e,t),e}(i);e.ErrorEventArgs=c},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.EVENTS={READY:"ready",ERROR:"error",CHECK_ANSWER:"checkAnswer",RETRY:"retry",RESET:"reset",SUBMIT:"submit",HINT_CONSUMED:"hintConsumed",DESTROY:"destroy"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ButtonBarIcons={reset:"reset",checkMyWork:"checkMyWork",tryAgain:"tryAgain",showHint:"showHint",closeHint:"closeHint"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(3);e.checkMyWorkBtn=[{id:r.ButtonBarIcons.checkMyWork,tooltip:"Check my work",className:"defaultBtn-check-mywork-icon",text:"Check my work",icon:{iconCls_left:"la la-tick"}},{id:r.ButtonBarIcons.tryAgain,tooltip:"Try Again",className:"defaultBtn-tryAgain",text:"Try again",icon:{iconCls_left:"la la-try-again"}}],e.hintsBtn=[{id:r.ButtonBarIcons.showHint,tooltip:"Hint",className:"defaultBtn-hint-icon",text:"Hint",icon:{iconCls_left:"la la-hintDefault"}},{id:r.ButtonBarIcons.closeHint,tooltip:"Close hint",className:"defaultBtn-hintEnabled-icon",text:"Hint",icon:{iconCls_left:"la la-hintDefault",iconCls_right:"la la-close"}}],e.resetBtn=[{id:r.ButtonBarIcons.reset,tooltip:"Reset",className:"defaultBtn-reset-icon",text:"Reset",icon:{iconCls_left:"la la-reset"}}]},function(t,e,n){t.exports=n(6)},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(7),s=n(0),a=n(9),c=function(t){function e(){var e=t.call(this)||this;return e.options=null,e}return o(e,t),e.prototype.init=function(e,n,r,o){t.prototype.init.call(this,e,n,r,o),this.options=o||(r instanceof HTMLElement?o:r)},e.prototype.render=function(t,e){try{if(!e){if(!this.container)throw new Error("Container not present to render Activity Player");e=this.container}s.render(s.h(a.SingleItemActivityComponent,{renderItemFuncProp:this.renderItem.bind(this),getItems:this.getItems.bind(this),launchId:t,eventMgr:this.eventMgr,options:this.options}),e)}catch(t){this.errorHandler(this.launchId,t)}},e.prototype.focalise=function(){this.getItems()[0].focalise()},e}(i.BaseActivityPlayer);e.default=c},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(8),o=n(2),i=n(1),s=function(){function t(){this.items=[],this.initializedItems=[],this.eventMgr=new LeonardoApp.EventEmitter}return t.prototype.init=function(t,e,n,s){var a=null;if(this.launchId=t,s?(this.container=n,a=s):n instanceof HTMLElement?this.container=n:a=n,a&&a.events)for(var c in a.events)this.subscribe(c,a.events[c]);try{for(var u=[],l=this,p=function(n){d.items[n]=new r.ItemApp;var o=a&&a.events?a.events:null,i=a&&a.playerConfig&&a.playerConfig.uiStyles?a.playerConfig.uiStyles:null,s=d.items[n].init(e[n],t,{events:o,uiStyle:i,eventMgr:l.eventMgr});u.push(s),s.then((function(){l.initializedItems[n]=l.items[n]}))},d=this,f=0;f<e.length;f++)p(f);Promise.all(u).then((function(e){if(a&&a.events&&a.events.ready){var n={launchId:t,type:o.EVENTS.READY,playerInstance:l};l.eventMgr.emit(o.EVENTS.READY,new i.ReadyEventArgs(n))}}))}catch(e){this.errorHandler(t,e)}},t.prototype.destroy=function(){this.currentItem.destroy(),this.currentItem=null,this.initializedItems=[],this.items=[],this.itemsAPI=null,this.attemptsAPI=null;var t={launchId:this.launchId,type:o.EVENTS.DESTROY};this.eventMgr.emit(o.EVENTS.DESTROY,new i.EventArgs(t))},t.prototype.renderItem=function(t,e){var n=this;return new Promise((function(r,o){if(n.initializedItems[t])n.items[t].render(e).then((function(){r(n.items[t])}));else var i=setInterval((function(){n.initializedItems[t]&&(clearInterval(i),n.currentItem=n.items[t],n.items[t].render(e).then((function(){r(n.items[t])})))}),50)}))},t.prototype.subscribe=function(t,e){this.eventMgr.on(t,e)},t.prototype.unsubscribe=function(t,e){this.eventMgr.off(t,e)},t.prototype.displayHints=function(){return this.getCurrentItem().showHints()},t.prototype.getItemCount=function(){return this.items.length},t.prototype.getItems=function(){return this.items},t.prototype.getCurrentItem=function(){return this.currentItem},t.prototype.getItem=function(t){return this.items[t]},t.prototype.save=function(t){},t.prototype.submit=function(t,e){this.getCurrentItem().submit(t,e)},t.prototype.retry=function(t){this.getCurrentItem().retry(t)},t.prototype.getResponses=function(){return{launchId:"<launchId>",items:[{itemId:"<itemId>",responseId:"<ResponseId>",maxScore:"<item-max-score>",gotScore:"<got-score>",status:"NotAttempted | InProgress | Submitted"}]}},t.prototype.errorHandler=function(t,e){var n={launchId:t,type:o.EVENTS.ERROR,exception:e};this.eventMgr.emit(o.EVENTS.ERROR,new i.ErrorEventArgs(n))},t}();e.BaseActivityPlayer=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),o=n(2),i=function(){function t(){this._initComplete=!1}return t.prototype.init=function(t,e,n){this.launchId=e,this.options=n,this.itemsAPI=LeonardoApp.Services.get("items"),this.attemptsAPI=LeonardoApp.Services.get("attempts"),n&&n.eventMgr&&(this.eventMgr=n.eventMgr);try{var r=this;return new Promise((function(e,n){r.fetchItemJSON(t).then((function(t){r.itemJSON=t;var e=r.getItemType(t);return r.loadItemPlayer(e)})).then((function(t){t.init?r.itemPlayer=t.init():r.itemPlayer=t,r._initComplete=!0,e()}))}))}catch(t){this.errorHandler(e,t)}},t.prototype.render=function(t){var e=this;try{this.options&&this.options.uiStyle&&(this.options.uiStyle.dimensions&&this.options.uiStyle.dimensions.includes("content")?this.options.uiStyle.height="expand":this.options.uiStyle.dimensions=this.options.uiStyle.dimensions&&this.options.uiStyle.dimensions.split("-")[0]+"-space");var n={config:this.itemJSON,events:this.options.callbacks,uiStyle:this.options.uiStyle,playerButtons:{visible:!1}};n.uiStyle.widgetStyles={"box-shadow":"none",border:"none"};var r=this;return new Promise((function(o,i){if(e._initComplete)r.itemPlayer.addWidget?r.itemPlayer=r.itemPlayer.addWidget("WB2",t,n):(r.itemPlayer=new r.itemPlayer,n.itemJSON=n.config,r.itemPlayer.initItem("WB2",t,n)),o();else var s=setInterval((function(){r._initComplete&&(clearInterval(s),r.itemPlayer.addWidget?r.itemPlayer=r.itemPlayer.addWidget("WB2",t,n):(r.itemPlayer=new r.itemPlayer,n.itemJSON=n.config,r.itemPlayer.initItem("WB2",t,n)),o())}),50)}))}catch(t){this.errorHandler(this.launchId,t)}},t.prototype.fetchItemJSON=function(t){try{var e=this;return new Promise((function(n,r){"object"==typeof t?n(t):"string"==typeof t&&e.itemsAPI.getItem(t).then((function(t){return n(t)}))}))}catch(t){this.errorHandler(this.launchId,t)}},t.prototype.getItemType=function(t){return t.type},t.prototype.loadItemPlayer=function(t){var e=LeonardoApp.ModuleLoader;return new Promise((function(n,r){e&&e.loadModule(t).then((function(t){return n(t)}))}))},t.prototype.save=function(t){},t.prototype.submit=function(t,e){try{var n=this.itemPlayer.score();this.itemPlayer.displayFeedback(n);var i={id:n.scoringId,launchId:this.launchId,score:[{itemId:this.itemJSON.leonardoId,maxScore:n.scoredJson.score,gotScore:n.scoredJson.gotScore}]};if(t)t(i);else{var s={launchId:this.launchId,type:o.EVENTS.CHECK_ANSWER,itemId:this.itemJSON.leonardoId,response:i};this.eventMgr.emit(1==e.isSubmit?o.EVENTS.SUBMIT:o.EVENTS.CHECK_ANSWER,new r.SubmitEventArgs(s))}}catch(t){this.errorHandler(this.launchId,t)}},t.prototype.getResponse=function(){return{launchId:"<launchId>",items:{itemId:"<itemId>",responseId:"<ResponseId>",maxScore:"<item-max-score>",gotScore:"<got-score>",status:"NotAttempted | InProgress | Submitted"}}},t.prototype.getResponses=function(){return{launchId:"<launchId>",items:[{itemId:"<itemId>",responseId:"<ResponseId>",maxScore:"<item-max-score>",gotScore:"<got-score>",status:"NotAttempted | InProgress | Submitted"}]}},t.prototype.retry=function(t){try{if(this.itemPlayer.clearFeedback(),t)t();else{var e={launchId:this.launchId,type:o.EVENTS.RETRY};this.eventMgr.emit(o.EVENTS.RETRY,new r.EventArgs(e))}}catch(t){this.errorHandler(this.launchId,t)}},t.prototype.reset=function(){try{this.itemPlayer.reset();var t={launchId:this.launchId,type:o.EVENTS.RESET};this.eventMgr.emit(o.EVENTS.RESET,new r.EventArgs(t))}catch(t){this.errorHandler(this.launchId,t)}},t.prototype.showHints=function(){return this.itemPlayer.displayHints(),-1},t.prototype.hideHints=function(){},t.prototype.hasHints=function(){return!0},t.prototype.remainingHints=function(){return 1},t.prototype.subscribe=function(t,e){},t.prototype.unsubscribe=function(t,e){},t.prototype.destroy=function(){try{this.itemPlayer.destroy()}catch(t){this.errorHandler(this.launchId,t)}},t.prototype.focalise=function(){try{this.itemPlayer.focalise()}catch(t){this.errorHandler(this.launchId,t)}},t.prototype.hide=function(){},t.prototype.show=function(){},t.prototype.getState=function(t){return this.itemPlayer.getState(t)},t.prototype.setState=function(t){this.itemPlayer.setState(t)},t.prototype.errorHandler=function(t,e){var n={launchId:t,type:o.EVENTS.ERROR,exception:e};this.eventMgr.emit(o.EVENTS.ERROR,new r.ErrorEventArgs(n))},t}();e.ItemApp=i},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),s=n(10),a=n(3),c=n(4);n(11),n(12);var u=n(13),l=function(t){function e(e){var n=t.call(this,e)||this;return n.defaultButtonsArray=c.checkMyWorkBtn.concat(c.resetBtn),n.hiddenButtons=[a.ButtonBarIcons.tryAgain],n.state={isTryAgainEnabled:!1,isHintsAvailable:!1},n._item=n.props.getItems()[0],n}return o(e,t),e.prototype.render=function(t,e){var n,r="activity-player-container",o=t.options&&t.options.playerConfig;o.uiStyles&&(n=o.uiStyles);var a=o.buttons,c=!a||null==a.visible||a.visible;return c||(r+=" without-button-bar"),n&&n.dimensions&&"content-dim"==n.dimensions&&(r+=" ap-content-dim"),i.h("div",{class:r,style:this.getUiStyles(n)},i.h(s.ItemPlayerComponent,{uiStyles:n,isButtonBarVisible:c,item:this._item,renderItemFuncProp:t.renderItemFuncProp,setState:this.setState.bind(this)}),c&&i.h(u.ButtonBarComponent,{item:this._item,eventMgr:t.eventMgr,launchId:t.launchId}))},e.prototype.getUiStyles=function(t){var e="";if(t){var n=["border","box-shadow"],r=t;for(var o in r)n.indexOf(o)>=0&&(e+=o+":"+r[o]+";")}return e},e}(i.Component);e.SingleItemActivityComponent=l},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),s=function(t){function e(e){return t.call(this,e)||this}return o(e,t),e.prototype.componentDidMount=function(){var t=this,e=this.props.uiStyles;this.props.renderItemFuncProp(0,this.base).then((function(n){t._item=n,e&&e.dimensions&&"content-dim"==e.dimensions&&(t.base.style.display="inline-block"),t.base.classList.remove("item-loader"),setTimeout((function(){t._item.focalise()}),100)}))},e.prototype.render=function(t){var e="item-player-container item-loader",n=t.uiStyles;return n&&n.dimensions&&"content-dim"==n.dimensions&&(e+=" ip-content-dim"),i.h("div",{class:e})},e}(i.Component);e.ItemPlayerComponent=s},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),s=n(14),a=n(3),c=n(4),u=n(2),l=n(1),p=function(t){function e(e){var n=t.call(this,e)||this;return n.defaultButtonsArray=c.checkMyWorkBtn.concat(c.resetBtn),n.state={isTryAgainEnabled:!1},n._item=n.props.item,n.eventMgr=n.props.eventMgr,n.launchId=n.props.launchId,n}return o(e,t),e.prototype.createButtonJSX=function(t){return i.h(s.ButtonComponent,{id:t.id,leftIcon:t.icon?t.icon.iconCls_left:null,rightIcon:t.icon?t.icon.iconCls_right:null,label:t.text,tooltip:t.tooltip,onButtonClick:this.onClick.bind(this)})},e.prototype.createButtons=function(){var t=this,e=this.state.isTryAgainEnabled?a.ButtonBarIcons.checkMyWork:a.ButtonBarIcons.tryAgain,n=[],r=e.length>0?this.removeHiddenButtons(e):this.defaultButtonsArray;return r.map((function(e,o){n.push(t.createButtonJSX(e),o<r.length-1?i.h("div",{class:"vertical-seperator"}):null)})),n},e.prototype.onClick=function(t){var e=this,n=t.currentTarget.getAttribute("id");switch(a.ButtonBarIcons[n]){case a.ButtonBarIcons.checkMyWork:this._item.submit((function(t){if(t){var n={launchId:e.launchId,type:u.EVENTS.CHECK_ANSWER,itemId:e._item.leonardoId,response:t};e.eventMgr.emit(u.EVENTS.CHECK_ANSWER,new l.SubmitEventArgs(n))}e.setState({isTryAgainEnabled:!0})}),"");break;case a.ButtonBarIcons.reset:this._item.reset(),this.setState({isTryAgainEnabled:!1});break;case a.ButtonBarIcons.tryAgain:this._item.retry((function(t){if(t){var n={launchId:e.launchId,type:u.EVENTS.RETRY};e.eventMgr.emit(u.EVENTS.RETRY,new l.EventArgs(n))}e.setState({isTryAgainEnabled:!1})}));break;case a.ButtonBarIcons.showHint:case a.ButtonBarIcons.closeHint:}},e.prototype.removeHiddenButtons=function(t){return this.defaultButtonsArray.filter((function(e){return-1==t.indexOf(e.id)}))},e.prototype.render=function(){return i.h("div",{class:"buttons-container"},this.createButtons())},e}(i.Component);e.ButtonBarComponent=p},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(0);n(15);var s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.render=function(t,e){return i.h("div",{id:t.id,class:"default-btn "+t.leftIcon,title:t.tooltip,onClick:function(e){return t.onButtonClick(e)}},i.h("span",{class:"default-btn-label"}," ",t.label," "),t.rightIcon&&i.h("span",{class:t.rightIcon}))},e}(i.Component);e.ButtonComponent=s},function(t,e,n){}]).default}));
//# sourceMappingURL=singleItemActivityPlayer.js.map