function kp(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function Sp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Pc={exports:{}},yi={},_c={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hr=Symbol.for("react.element"),Cp=Symbol.for("react.portal"),Ep=Symbol.for("react.fragment"),jp=Symbol.for("react.strict_mode"),Pp=Symbol.for("react.profiler"),_p=Symbol.for("react.provider"),Np=Symbol.for("react.context"),zp=Symbol.for("react.forward_ref"),Tp=Symbol.for("react.suspense"),Rp=Symbol.for("react.memo"),Lp=Symbol.for("react.lazy"),Ka=Symbol.iterator;function Ip(e){return e===null||typeof e!="object"?null:(e=Ka&&e[Ka]||e["@@iterator"],typeof e=="function"?e:null)}var Nc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},zc=Object.assign,Tc={};function Qn(e,t,n){this.props=e,this.context=t,this.refs=Tc,this.updater=n||Nc}Qn.prototype.isReactComponent={};Qn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Qn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Rc(){}Rc.prototype=Qn.prototype;function Gs(e,t,n){this.props=e,this.context=t,this.refs=Tc,this.updater=n||Nc}var Xs=Gs.prototype=new Rc;Xs.constructor=Gs;zc(Xs,Qn.prototype);Xs.isPureReactComponent=!0;var Ga=Array.isArray,Lc=Object.prototype.hasOwnProperty,bs={current:null},Ic={key:!0,ref:!0,__self:!0,__source:!0};function $c(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Lc.call(t,r)&&!Ic.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var a=Array(s),c=0;c<s;c++)a[c]=arguments[c+2];o.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:Hr,type:e,key:i,ref:l,props:o,_owner:bs.current}}function $p(e,t){return{$$typeof:Hr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Zs(e){return typeof e=="object"&&e!==null&&e.$$typeof===Hr}function Op(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Xa=/\/+/g;function Qi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Op(""+e.key):t.toString(36)}function Co(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Hr:case Cp:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+Qi(l,0):r,Ga(o)?(n="",e!=null&&(n=e.replace(Xa,"$&/")+"/"),Co(o,t,n,"",function(c){return c})):o!=null&&(Zs(o)&&(o=$p(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(Xa,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",Ga(e))for(var s=0;s<e.length;s++){i=e[s];var a=r+Qi(i,s);l+=Co(i,t,n,a,o)}else if(a=Ip(e),typeof a=="function")for(e=a.call(e),s=0;!(i=e.next()).done;)i=i.value,a=r+Qi(i,s++),l+=Co(i,t,n,a,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function qr(e,t,n){if(e==null)return e;var r=[],o=0;return Co(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Fp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ge={current:null},Eo={transition:null},Mp={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:Eo,ReactCurrentOwner:bs};function Oc(){throw Error("act(...) is not supported in production builds of React.")}O.Children={map:qr,forEach:function(e,t,n){qr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return qr(e,function(){t++}),t},toArray:function(e){return qr(e,function(t){return t})||[]},only:function(e){if(!Zs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=Qn;O.Fragment=Ep;O.Profiler=Pp;O.PureComponent=Gs;O.StrictMode=jp;O.Suspense=Tp;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mp;O.act=Oc;O.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=zc({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=bs.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)Lc.call(t,a)&&!Ic.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var c=0;c<a;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:Hr,type:e.type,key:o,ref:i,props:r,_owner:l}};O.createContext=function(e){return e={$$typeof:Np,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:_p,_context:e},e.Consumer=e};O.createElement=$c;O.createFactory=function(e){var t=$c.bind(null,e);return t.type=e,t};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:zp,render:e}};O.isValidElement=Zs;O.lazy=function(e){return{$$typeof:Lp,_payload:{_status:-1,_result:e},_init:Fp}};O.memo=function(e,t){return{$$typeof:Rp,type:e,compare:t===void 0?null:t}};O.startTransition=function(e){var t=Eo.transition;Eo.transition={};try{e()}finally{Eo.transition=t}};O.unstable_act=Oc;O.useCallback=function(e,t){return ge.current.useCallback(e,t)};O.useContext=function(e){return ge.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return ge.current.useDeferredValue(e)};O.useEffect=function(e,t){return ge.current.useEffect(e,t)};O.useId=function(){return ge.current.useId()};O.useImperativeHandle=function(e,t,n){return ge.current.useImperativeHandle(e,t,n)};O.useInsertionEffect=function(e,t){return ge.current.useInsertionEffect(e,t)};O.useLayoutEffect=function(e,t){return ge.current.useLayoutEffect(e,t)};O.useMemo=function(e,t){return ge.current.useMemo(e,t)};O.useReducer=function(e,t,n){return ge.current.useReducer(e,t,n)};O.useRef=function(e){return ge.current.useRef(e)};O.useState=function(e){return ge.current.useState(e)};O.useSyncExternalStore=function(e,t,n){return ge.current.useSyncExternalStore(e,t,n)};O.useTransition=function(){return ge.current.useTransition()};O.version="18.3.1";_c.exports=O;var P=_c.exports;const qt=Sp(P),Dp=kp({__proto__:null,default:qt},[P]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ap=P,Up=Symbol.for("react.element"),Bp=Symbol.for("react.fragment"),Vp=Object.prototype.hasOwnProperty,Wp=Ap.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Hp={key:!0,ref:!0,__self:!0,__source:!0};function Fc(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Vp.call(t,r)&&!Hp.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Up,type:e,key:i,ref:l,props:o,_owner:Wp.current}}yi.Fragment=Bp;yi.jsx=Fc;yi.jsxs=Fc;Pc.exports=yi;var u=Pc.exports,Ql={},Mc={exports:{}},ze={},Dc={exports:{}},Ac={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,R){var L=N.length;N.push(R);e:for(;0<L;){var U=L-1>>>1,B=N[U];if(0<o(B,R))N[U]=R,N[L]=B,L=U;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var R=N[0],L=N.pop();if(L!==R){N[0]=L;e:for(var U=0,B=N.length,Bt=B>>>1;U<Bt;){var De=2*(U+1)-1,ft=N[De],Ee=De+1,et=N[Ee];if(0>o(ft,L))Ee<B&&0>o(et,ft)?(N[U]=et,N[Ee]=L,U=Ee):(N[U]=ft,N[De]=L,U=De);else if(Ee<B&&0>o(et,L))N[U]=et,N[Ee]=L,U=Ee;else break e}}return R}function o(N,R){var L=N.sortIndex-R.sortIndex;return L!==0?L:N.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var a=[],c=[],m=1,h=null,g=3,y=!1,w=!1,k=!1,_=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(N){for(var R=n(c);R!==null;){if(R.callback===null)r(c);else if(R.startTime<=N)r(c),R.sortIndex=R.expirationTime,t(a,R);else break;R=n(c)}}function v(N){if(k=!1,p(N),!w)if(n(a)!==null)w=!0,Zn(C);else{var R=n(c);R!==null&&Ut(v,R.startTime-N)}}function C(N,R){w=!1,k&&(k=!1,f(T),T=-1),y=!0;var L=g;try{for(p(R),h=n(a);h!==null&&(!(h.expirationTime>R)||N&&!pe());){var U=h.callback;if(typeof U=="function"){h.callback=null,g=h.priorityLevel;var B=U(h.expirationTime<=R);R=e.unstable_now(),typeof B=="function"?h.callback=B:h===n(a)&&r(a),p(R)}else r(a);h=n(a)}if(h!==null)var Bt=!0;else{var De=n(c);De!==null&&Ut(v,De.startTime-R),Bt=!1}return Bt}finally{h=null,g=L,y=!1}}var j=!1,S=null,T=-1,A=5,I=-1;function pe(){return!(e.unstable_now()-I<A)}function Dt(){if(S!==null){var N=e.unstable_now();I=N;var R=!0;try{R=S(!0,N)}finally{R?At():(j=!1,S=null)}}else j=!1}var At;if(typeof d=="function")At=function(){d(Dt)};else if(typeof MessageChannel<"u"){var Zr=new MessageChannel,Wi=Zr.port2;Zr.port1.onmessage=Dt,At=function(){Wi.postMessage(null)}}else At=function(){_(Dt,0)};function Zn(N){S=N,j||(j=!0,At())}function Ut(N,R){T=_(function(){N(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){w||y||(w=!0,Zn(C))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(N){switch(g){case 1:case 2:case 3:var R=3;break;default:R=g}var L=g;g=R;try{return N()}finally{g=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,R){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var L=g;g=N;try{return R()}finally{g=L}},e.unstable_scheduleCallback=function(N,R,L){var U=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?U+L:U):L=U,N){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=L+B,N={id:m++,callback:R,priorityLevel:N,startTime:L,expirationTime:B,sortIndex:-1},L>U?(N.sortIndex=L,t(c,N),n(a)===null&&N===n(c)&&(k?(f(T),T=-1):k=!0,Ut(v,L-U))):(N.sortIndex=B,t(a,N),w||y||(w=!0,Zn(C))),N},e.unstable_shouldYield=pe,e.unstable_wrapCallback=function(N){var R=g;return function(){var L=g;g=R;try{return N.apply(this,arguments)}finally{g=L}}}})(Ac);Dc.exports=Ac;var Qp=Dc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yp=P,Ne=Qp;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Uc=new Set,Er={};function ln(e,t){Ln(e,t),Ln(e+"Capture",t)}function Ln(e,t){for(Er[e]=t,e=0;e<t.length;e++)Uc.add(t[e])}var st=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yl=Object.prototype.hasOwnProperty,Kp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ba={},Za={};function Gp(e){return Yl.call(Za,e)?!0:Yl.call(ba,e)?!1:Kp.test(e)?Za[e]=!0:(ba[e]=!0,!1)}function Xp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function bp(e,t,n,r){if(t===null||typeof t>"u"||Xp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ve(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ae[e]=new ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ae[t]=new ve(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ae[e]=new ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ae[e]=new ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ae[e]=new ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ae[e]=new ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ae[e]=new ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ae[e]=new ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ae[e]=new ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var Js=/[\-:]([a-z])/g;function qs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Js,qs);ae[t]=new ve(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Js,qs);ae[t]=new ve(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Js,qs);ae[t]=new ve(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ae[e]=new ve(e,1,!1,e.toLowerCase(),null,!1,!1)});ae.xlinkHref=new ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ae[e]=new ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function ea(e,t,n,r){var o=ae.hasOwnProperty(t)?ae[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(bp(t,n,o,r)&&(n=null),r||o===null?Gp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var dt=Yp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,eo=Symbol.for("react.element"),pn=Symbol.for("react.portal"),hn=Symbol.for("react.fragment"),ta=Symbol.for("react.strict_mode"),Kl=Symbol.for("react.profiler"),Bc=Symbol.for("react.provider"),Vc=Symbol.for("react.context"),na=Symbol.for("react.forward_ref"),Gl=Symbol.for("react.suspense"),Xl=Symbol.for("react.suspense_list"),ra=Symbol.for("react.memo"),gt=Symbol.for("react.lazy"),Wc=Symbol.for("react.offscreen"),Ja=Symbol.iterator;function qn(e){return e===null||typeof e!="object"?null:(e=Ja&&e[Ja]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,Yi;function ur(e){if(Yi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Yi=t&&t[1]||""}return`
`+Yi+e}var Ki=!1;function Gi(e,t){if(!e||Ki)return"";Ki=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,s=i.length-1;1<=l&&0<=s&&o[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(o[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||o[l]!==i[s]){var a=`
`+o[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=s);break}}}finally{Ki=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ur(e):""}function Zp(e){switch(e.tag){case 5:return ur(e.type);case 16:return ur("Lazy");case 13:return ur("Suspense");case 19:return ur("SuspenseList");case 0:case 2:case 15:return e=Gi(e.type,!1),e;case 11:return e=Gi(e.type.render,!1),e;case 1:return e=Gi(e.type,!0),e;default:return""}}function bl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case hn:return"Fragment";case pn:return"Portal";case Kl:return"Profiler";case ta:return"StrictMode";case Gl:return"Suspense";case Xl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Vc:return(e.displayName||"Context")+".Consumer";case Bc:return(e._context.displayName||"Context")+".Provider";case na:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ra:return t=e.displayName||null,t!==null?t:bl(e.type)||"Memo";case gt:t=e._payload,e=e._init;try{return bl(e(t))}catch{}}return null}function Jp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return bl(t);case 8:return t===ta?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Lt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Hc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function qp(e){var t=Hc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function to(e){e._valueTracker||(e._valueTracker=qp(e))}function Qc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Hc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Uo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Zl(e,t){var n=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function qa(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Lt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Yc(e,t){t=t.checked,t!=null&&ea(e,"checked",t,!1)}function Jl(e,t){Yc(e,t);var n=Lt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ql(e,t.type,n):t.hasOwnProperty("defaultValue")&&ql(e,t.type,Lt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function eu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ql(e,t,n){(t!=="number"||Uo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var cr=Array.isArray;function Pn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Lt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function es(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function tu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(E(92));if(cr(n)){if(1<n.length)throw Error(E(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Lt(n)}}function Kc(e,t){var n=Lt(t.value),r=Lt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function nu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Gc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ts(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Gc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var no,Xc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(no=no||document.createElement("div"),no.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=no.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function jr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var hr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},eh=["Webkit","ms","Moz","O"];Object.keys(hr).forEach(function(e){eh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),hr[t]=hr[e]})});function bc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||hr.hasOwnProperty(e)&&hr[e]?(""+t).trim():t+"px"}function Zc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=bc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var th=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ns(e,t){if(t){if(th[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function rs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var os=null;function oa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var is=null,_n=null,Nn=null;function ru(e){if(e=Kr(e)){if(typeof is!="function")throw Error(E(280));var t=e.stateNode;t&&(t=Ci(t),is(e.stateNode,e.type,t))}}function Jc(e){_n?Nn?Nn.push(e):Nn=[e]:_n=e}function qc(){if(_n){var e=_n,t=Nn;if(Nn=_n=null,ru(e),t)for(e=0;e<t.length;e++)ru(t[e])}}function ed(e,t){return e(t)}function td(){}var Xi=!1;function nd(e,t,n){if(Xi)return e(t,n);Xi=!0;try{return ed(e,t,n)}finally{Xi=!1,(_n!==null||Nn!==null)&&(td(),qc())}}function Pr(e,t){var n=e.stateNode;if(n===null)return null;var r=Ci(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(E(231,t,typeof n));return n}var ls=!1;if(st)try{var er={};Object.defineProperty(er,"passive",{get:function(){ls=!0}}),window.addEventListener("test",er,er),window.removeEventListener("test",er,er)}catch{ls=!1}function nh(e,t,n,r,o,i,l,s,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(m){this.onError(m)}}var mr=!1,Bo=null,Vo=!1,ss=null,rh={onError:function(e){mr=!0,Bo=e}};function oh(e,t,n,r,o,i,l,s,a){mr=!1,Bo=null,nh.apply(rh,arguments)}function ih(e,t,n,r,o,i,l,s,a){if(oh.apply(this,arguments),mr){if(mr){var c=Bo;mr=!1,Bo=null}else throw Error(E(198));Vo||(Vo=!0,ss=c)}}function sn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function rd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ou(e){if(sn(e)!==e)throw Error(E(188))}function lh(e){var t=e.alternate;if(!t){if(t=sn(e),t===null)throw Error(E(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return ou(o),e;if(i===r)return ou(o),t;i=i.sibling}throw Error(E(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?e:t}function od(e){return e=lh(e),e!==null?id(e):null}function id(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=id(e);if(t!==null)return t;e=e.sibling}return null}var ld=Ne.unstable_scheduleCallback,iu=Ne.unstable_cancelCallback,sh=Ne.unstable_shouldYield,ah=Ne.unstable_requestPaint,J=Ne.unstable_now,uh=Ne.unstable_getCurrentPriorityLevel,ia=Ne.unstable_ImmediatePriority,sd=Ne.unstable_UserBlockingPriority,Wo=Ne.unstable_NormalPriority,ch=Ne.unstable_LowPriority,ad=Ne.unstable_IdlePriority,xi=null,Je=null;function dh(e){if(Je&&typeof Je.onCommitFiberRoot=="function")try{Je.onCommitFiberRoot(xi,e,void 0,(e.current.flags&128)===128)}catch{}}var He=Math.clz32?Math.clz32:hh,fh=Math.log,ph=Math.LN2;function hh(e){return e>>>=0,e===0?32:31-(fh(e)/ph|0)|0}var ro=64,oo=4194304;function dr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ho(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~o;s!==0?r=dr(s):(i&=l,i!==0&&(r=dr(i)))}else l=n&~o,l!==0?r=dr(l):i!==0&&(r=dr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-He(t),o=1<<n,r|=e[n],t&=~o;return r}function mh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gh(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-He(i),s=1<<l,a=o[l];a===-1?(!(s&n)||s&r)&&(o[l]=mh(s,t)):a<=t&&(e.expiredLanes|=s),i&=~s}}function as(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ud(){var e=ro;return ro<<=1,!(ro&4194240)&&(ro=64),e}function bi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Qr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-He(t),e[t]=n}function vh(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-He(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function la(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-He(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var D=0;function cd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var dd,sa,fd,pd,hd,us=!1,io=[],Ct=null,Et=null,jt=null,_r=new Map,Nr=new Map,yt=[],yh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function lu(e,t){switch(e){case"focusin":case"focusout":Ct=null;break;case"dragenter":case"dragleave":Et=null;break;case"mouseover":case"mouseout":jt=null;break;case"pointerover":case"pointerout":_r.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nr.delete(t.pointerId)}}function tr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Kr(t),t!==null&&sa(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function xh(e,t,n,r,o){switch(t){case"focusin":return Ct=tr(Ct,e,t,n,r,o),!0;case"dragenter":return Et=tr(Et,e,t,n,r,o),!0;case"mouseover":return jt=tr(jt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return _r.set(i,tr(_r.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Nr.set(i,tr(Nr.get(i)||null,e,t,n,r,o)),!0}return!1}function md(e){var t=Qt(e.target);if(t!==null){var n=sn(t);if(n!==null){if(t=n.tag,t===13){if(t=rd(n),t!==null){e.blockedOn=t,hd(e.priority,function(){fd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function jo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=cs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);os=r,n.target.dispatchEvent(r),os=null}else return t=Kr(n),t!==null&&sa(t),e.blockedOn=n,!1;t.shift()}return!0}function su(e,t,n){jo(e)&&n.delete(t)}function wh(){us=!1,Ct!==null&&jo(Ct)&&(Ct=null),Et!==null&&jo(Et)&&(Et=null),jt!==null&&jo(jt)&&(jt=null),_r.forEach(su),Nr.forEach(su)}function nr(e,t){e.blockedOn===t&&(e.blockedOn=null,us||(us=!0,Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority,wh)))}function zr(e){function t(o){return nr(o,e)}if(0<io.length){nr(io[0],e);for(var n=1;n<io.length;n++){var r=io[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ct!==null&&nr(Ct,e),Et!==null&&nr(Et,e),jt!==null&&nr(jt,e),_r.forEach(t),Nr.forEach(t),n=0;n<yt.length;n++)r=yt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<yt.length&&(n=yt[0],n.blockedOn===null);)md(n),n.blockedOn===null&&yt.shift()}var zn=dt.ReactCurrentBatchConfig,Qo=!0;function kh(e,t,n,r){var o=D,i=zn.transition;zn.transition=null;try{D=1,aa(e,t,n,r)}finally{D=o,zn.transition=i}}function Sh(e,t,n,r){var o=D,i=zn.transition;zn.transition=null;try{D=4,aa(e,t,n,r)}finally{D=o,zn.transition=i}}function aa(e,t,n,r){if(Qo){var o=cs(e,t,n,r);if(o===null)ll(e,t,r,Yo,n),lu(e,r);else if(xh(o,e,t,n,r))r.stopPropagation();else if(lu(e,r),t&4&&-1<yh.indexOf(e)){for(;o!==null;){var i=Kr(o);if(i!==null&&dd(i),i=cs(e,t,n,r),i===null&&ll(e,t,r,Yo,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else ll(e,t,r,null,n)}}var Yo=null;function cs(e,t,n,r){if(Yo=null,e=oa(r),e=Qt(e),e!==null)if(t=sn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=rd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Yo=e,null}function gd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(uh()){case ia:return 1;case sd:return 4;case Wo:case ch:return 16;case ad:return 536870912;default:return 16}default:return 16}}var wt=null,ua=null,Po=null;function vd(){if(Po)return Po;var e,t=ua,n=t.length,r,o="value"in wt?wt.value:wt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return Po=o.slice(e,1<r?1-r:void 0)}function _o(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function lo(){return!0}function au(){return!1}function Te(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?lo:au,this.isPropagationStopped=au,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=lo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=lo)},persist:function(){},isPersistent:lo}),t}var Yn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ca=Te(Yn),Yr=X({},Yn,{view:0,detail:0}),Ch=Te(Yr),Zi,Ji,rr,wi=X({},Yr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:da,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==rr&&(rr&&e.type==="mousemove"?(Zi=e.screenX-rr.screenX,Ji=e.screenY-rr.screenY):Ji=Zi=0,rr=e),Zi)},movementY:function(e){return"movementY"in e?e.movementY:Ji}}),uu=Te(wi),Eh=X({},wi,{dataTransfer:0}),jh=Te(Eh),Ph=X({},Yr,{relatedTarget:0}),qi=Te(Ph),_h=X({},Yn,{animationName:0,elapsedTime:0,pseudoElement:0}),Nh=Te(_h),zh=X({},Yn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Th=Te(zh),Rh=X({},Yn,{data:0}),cu=Te(Rh),Lh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ih={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$h={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Oh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=$h[e])?!!t[e]:!1}function da(){return Oh}var Fh=X({},Yr,{key:function(e){if(e.key){var t=Lh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=_o(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ih[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:da,charCode:function(e){return e.type==="keypress"?_o(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_o(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Mh=Te(Fh),Dh=X({},wi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),du=Te(Dh),Ah=X({},Yr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:da}),Uh=Te(Ah),Bh=X({},Yn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vh=Te(Bh),Wh=X({},wi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Hh=Te(Wh),Qh=[9,13,27,32],fa=st&&"CompositionEvent"in window,gr=null;st&&"documentMode"in document&&(gr=document.documentMode);var Yh=st&&"TextEvent"in window&&!gr,yd=st&&(!fa||gr&&8<gr&&11>=gr),fu=String.fromCharCode(32),pu=!1;function xd(e,t){switch(e){case"keyup":return Qh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var mn=!1;function Kh(e,t){switch(e){case"compositionend":return wd(t);case"keypress":return t.which!==32?null:(pu=!0,fu);case"textInput":return e=t.data,e===fu&&pu?null:e;default:return null}}function Gh(e,t){if(mn)return e==="compositionend"||!fa&&xd(e,t)?(e=vd(),Po=ua=wt=null,mn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return yd&&t.locale!=="ko"?null:t.data;default:return null}}var Xh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Xh[e.type]:t==="textarea"}function kd(e,t,n,r){Jc(r),t=Ko(t,"onChange"),0<t.length&&(n=new ca("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var vr=null,Tr=null;function bh(e){Ld(e,0)}function ki(e){var t=yn(e);if(Qc(t))return e}function Zh(e,t){if(e==="change")return t}var Sd=!1;if(st){var el;if(st){var tl="oninput"in document;if(!tl){var mu=document.createElement("div");mu.setAttribute("oninput","return;"),tl=typeof mu.oninput=="function"}el=tl}else el=!1;Sd=el&&(!document.documentMode||9<document.documentMode)}function gu(){vr&&(vr.detachEvent("onpropertychange",Cd),Tr=vr=null)}function Cd(e){if(e.propertyName==="value"&&ki(Tr)){var t=[];kd(t,Tr,e,oa(e)),nd(bh,t)}}function Jh(e,t,n){e==="focusin"?(gu(),vr=t,Tr=n,vr.attachEvent("onpropertychange",Cd)):e==="focusout"&&gu()}function qh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ki(Tr)}function em(e,t){if(e==="click")return ki(t)}function tm(e,t){if(e==="input"||e==="change")return ki(t)}function nm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ke=typeof Object.is=="function"?Object.is:nm;function Rr(e,t){if(Ke(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Yl.call(t,o)||!Ke(e[o],t[o]))return!1}return!0}function vu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function yu(e,t){var n=vu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=vu(n)}}function Ed(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ed(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function jd(){for(var e=window,t=Uo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Uo(e.document)}return t}function pa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function rm(e){var t=jd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ed(n.ownerDocument.documentElement,n)){if(r!==null&&pa(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=yu(n,i);var l=yu(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var om=st&&"documentMode"in document&&11>=document.documentMode,gn=null,ds=null,yr=null,fs=!1;function xu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fs||gn==null||gn!==Uo(r)||(r=gn,"selectionStart"in r&&pa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),yr&&Rr(yr,r)||(yr=r,r=Ko(ds,"onSelect"),0<r.length&&(t=new ca("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gn)))}function so(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var vn={animationend:so("Animation","AnimationEnd"),animationiteration:so("Animation","AnimationIteration"),animationstart:so("Animation","AnimationStart"),transitionend:so("Transition","TransitionEnd")},nl={},Pd={};st&&(Pd=document.createElement("div").style,"AnimationEvent"in window||(delete vn.animationend.animation,delete vn.animationiteration.animation,delete vn.animationstart.animation),"TransitionEvent"in window||delete vn.transitionend.transition);function Si(e){if(nl[e])return nl[e];if(!vn[e])return e;var t=vn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Pd)return nl[e]=t[n];return e}var _d=Si("animationend"),Nd=Si("animationiteration"),zd=Si("animationstart"),Td=Si("transitionend"),Rd=new Map,wu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $t(e,t){Rd.set(e,t),ln(t,[e])}for(var rl=0;rl<wu.length;rl++){var ol=wu[rl],im=ol.toLowerCase(),lm=ol[0].toUpperCase()+ol.slice(1);$t(im,"on"+lm)}$t(_d,"onAnimationEnd");$t(Nd,"onAnimationIteration");$t(zd,"onAnimationStart");$t("dblclick","onDoubleClick");$t("focusin","onFocus");$t("focusout","onBlur");$t(Td,"onTransitionEnd");Ln("onMouseEnter",["mouseout","mouseover"]);Ln("onMouseLeave",["mouseout","mouseover"]);Ln("onPointerEnter",["pointerout","pointerover"]);Ln("onPointerLeave",["pointerout","pointerover"]);ln("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ln("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ln("onBeforeInput",["compositionend","keypress","textInput","paste"]);ln("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ln("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ln("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sm=new Set("cancel close invalid load scroll toggle".split(" ").concat(fr));function ku(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ih(r,t,void 0,e),e.currentTarget=null}function Ld(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],a=s.instance,c=s.currentTarget;if(s=s.listener,a!==i&&o.isPropagationStopped())break e;ku(o,s,c),i=a}else for(l=0;l<r.length;l++){if(s=r[l],a=s.instance,c=s.currentTarget,s=s.listener,a!==i&&o.isPropagationStopped())break e;ku(o,s,c),i=a}}}if(Vo)throw e=ss,Vo=!1,ss=null,e}function W(e,t){var n=t[vs];n===void 0&&(n=t[vs]=new Set);var r=e+"__bubble";n.has(r)||(Id(t,e,2,!1),n.add(r))}function il(e,t,n){var r=0;t&&(r|=4),Id(n,e,r,t)}var ao="_reactListening"+Math.random().toString(36).slice(2);function Lr(e){if(!e[ao]){e[ao]=!0,Uc.forEach(function(n){n!=="selectionchange"&&(sm.has(n)||il(n,!1,e),il(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ao]||(t[ao]=!0,il("selectionchange",!1,t))}}function Id(e,t,n,r){switch(gd(t)){case 1:var o=kh;break;case 4:o=Sh;break;default:o=aa}n=o.bind(null,t,n,e),o=void 0,!ls||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function ll(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;l=l.return}for(;s!==null;){if(l=Qt(s),l===null)return;if(a=l.tag,a===5||a===6){r=i=l;continue e}s=s.parentNode}}r=r.return}nd(function(){var c=i,m=oa(n),h=[];e:{var g=Rd.get(e);if(g!==void 0){var y=ca,w=e;switch(e){case"keypress":if(_o(n)===0)break e;case"keydown":case"keyup":y=Mh;break;case"focusin":w="focus",y=qi;break;case"focusout":w="blur",y=qi;break;case"beforeblur":case"afterblur":y=qi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=uu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=jh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Uh;break;case _d:case Nd:case zd:y=Nh;break;case Td:y=Vh;break;case"scroll":y=Ch;break;case"wheel":y=Hh;break;case"copy":case"cut":case"paste":y=Th;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=du}var k=(t&4)!==0,_=!k&&e==="scroll",f=k?g!==null?g+"Capture":null:g;k=[];for(var d=c,p;d!==null;){p=d;var v=p.stateNode;if(p.tag===5&&v!==null&&(p=v,f!==null&&(v=Pr(d,f),v!=null&&k.push(Ir(d,v,p)))),_)break;d=d.return}0<k.length&&(g=new y(g,w,null,n,m),h.push({event:g,listeners:k}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",g&&n!==os&&(w=n.relatedTarget||n.fromElement)&&(Qt(w)||w[at]))break e;if((y||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,y?(w=n.relatedTarget||n.toElement,y=c,w=w?Qt(w):null,w!==null&&(_=sn(w),w!==_||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=c),y!==w)){if(k=uu,v="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(k=du,v="onPointerLeave",f="onPointerEnter",d="pointer"),_=y==null?g:yn(y),p=w==null?g:yn(w),g=new k(v,d+"leave",y,n,m),g.target=_,g.relatedTarget=p,v=null,Qt(m)===c&&(k=new k(f,d+"enter",w,n,m),k.target=p,k.relatedTarget=_,v=k),_=v,y&&w)t:{for(k=y,f=w,d=0,p=k;p;p=cn(p))d++;for(p=0,v=f;v;v=cn(v))p++;for(;0<d-p;)k=cn(k),d--;for(;0<p-d;)f=cn(f),p--;for(;d--;){if(k===f||f!==null&&k===f.alternate)break t;k=cn(k),f=cn(f)}k=null}else k=null;y!==null&&Su(h,g,y,k,!1),w!==null&&_!==null&&Su(h,_,w,k,!0)}}e:{if(g=c?yn(c):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var C=Zh;else if(hu(g))if(Sd)C=tm;else{C=qh;var j=Jh}else(y=g.nodeName)&&y.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(C=em);if(C&&(C=C(e,c))){kd(h,C,n,m);break e}j&&j(e,g,c),e==="focusout"&&(j=g._wrapperState)&&j.controlled&&g.type==="number"&&ql(g,"number",g.value)}switch(j=c?yn(c):window,e){case"focusin":(hu(j)||j.contentEditable==="true")&&(gn=j,ds=c,yr=null);break;case"focusout":yr=ds=gn=null;break;case"mousedown":fs=!0;break;case"contextmenu":case"mouseup":case"dragend":fs=!1,xu(h,n,m);break;case"selectionchange":if(om)break;case"keydown":case"keyup":xu(h,n,m)}var S;if(fa)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else mn?xd(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(yd&&n.locale!=="ko"&&(mn||T!=="onCompositionStart"?T==="onCompositionEnd"&&mn&&(S=vd()):(wt=m,ua="value"in wt?wt.value:wt.textContent,mn=!0)),j=Ko(c,T),0<j.length&&(T=new cu(T,e,null,n,m),h.push({event:T,listeners:j}),S?T.data=S:(S=wd(n),S!==null&&(T.data=S)))),(S=Yh?Kh(e,n):Gh(e,n))&&(c=Ko(c,"onBeforeInput"),0<c.length&&(m=new cu("onBeforeInput","beforeinput",null,n,m),h.push({event:m,listeners:c}),m.data=S))}Ld(h,t)})}function Ir(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ko(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Pr(e,n),i!=null&&r.unshift(Ir(e,i,o)),i=Pr(e,t),i!=null&&r.push(Ir(e,i,o))),e=e.return}return r}function cn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Su(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var s=n,a=s.alternate,c=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&c!==null&&(s=c,o?(a=Pr(n,i),a!=null&&l.unshift(Ir(n,a,s))):o||(a=Pr(n,i),a!=null&&l.push(Ir(n,a,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var am=/\r\n?/g,um=/\u0000|\uFFFD/g;function Cu(e){return(typeof e=="string"?e:""+e).replace(am,`
`).replace(um,"")}function uo(e,t,n){if(t=Cu(t),Cu(e)!==t&&n)throw Error(E(425))}function Go(){}var ps=null,hs=null;function ms(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var gs=typeof setTimeout=="function"?setTimeout:void 0,cm=typeof clearTimeout=="function"?clearTimeout:void 0,Eu=typeof Promise=="function"?Promise:void 0,dm=typeof queueMicrotask=="function"?queueMicrotask:typeof Eu<"u"?function(e){return Eu.resolve(null).then(e).catch(fm)}:gs;function fm(e){setTimeout(function(){throw e})}function sl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),zr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);zr(t)}function Pt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ju(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Kn=Math.random().toString(36).slice(2),Ze="__reactFiber$"+Kn,$r="__reactProps$"+Kn,at="__reactContainer$"+Kn,vs="__reactEvents$"+Kn,pm="__reactListeners$"+Kn,hm="__reactHandles$"+Kn;function Qt(e){var t=e[Ze];if(t)return t;for(var n=e.parentNode;n;){if(t=n[at]||n[Ze]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ju(e);e!==null;){if(n=e[Ze])return n;e=ju(e)}return t}e=n,n=e.parentNode}return null}function Kr(e){return e=e[Ze]||e[at],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function yn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function Ci(e){return e[$r]||null}var ys=[],xn=-1;function Ot(e){return{current:e}}function Q(e){0>xn||(e.current=ys[xn],ys[xn]=null,xn--)}function V(e,t){xn++,ys[xn]=e.current,e.current=t}var It={},fe=Ot(It),ke=Ot(!1),en=It;function In(e,t){var n=e.type.contextTypes;if(!n)return It;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Se(e){return e=e.childContextTypes,e!=null}function Xo(){Q(ke),Q(fe)}function Pu(e,t,n){if(fe.current!==It)throw Error(E(168));V(fe,t),V(ke,n)}function $d(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(E(108,Jp(e)||"Unknown",o));return X({},n,r)}function bo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||It,en=fe.current,V(fe,e),V(ke,ke.current),!0}function _u(e,t,n){var r=e.stateNode;if(!r)throw Error(E(169));n?(e=$d(e,t,en),r.__reactInternalMemoizedMergedChildContext=e,Q(ke),Q(fe),V(fe,e)):Q(ke),V(ke,n)}var rt=null,Ei=!1,al=!1;function Od(e){rt===null?rt=[e]:rt.push(e)}function mm(e){Ei=!0,Od(e)}function Ft(){if(!al&&rt!==null){al=!0;var e=0,t=D;try{var n=rt;for(D=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}rt=null,Ei=!1}catch(o){throw rt!==null&&(rt=rt.slice(e+1)),ld(ia,Ft),o}finally{D=t,al=!1}}return null}var wn=[],kn=0,Zo=null,Jo=0,Re=[],Le=0,tn=null,ot=1,it="";function Wt(e,t){wn[kn++]=Jo,wn[kn++]=Zo,Zo=e,Jo=t}function Fd(e,t,n){Re[Le++]=ot,Re[Le++]=it,Re[Le++]=tn,tn=e;var r=ot;e=it;var o=32-He(r)-1;r&=~(1<<o),n+=1;var i=32-He(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,ot=1<<32-He(t)+o|n<<o|r,it=i+e}else ot=1<<i|n<<o|r,it=e}function ha(e){e.return!==null&&(Wt(e,1),Fd(e,1,0))}function ma(e){for(;e===Zo;)Zo=wn[--kn],wn[kn]=null,Jo=wn[--kn],wn[kn]=null;for(;e===tn;)tn=Re[--Le],Re[Le]=null,it=Re[--Le],Re[Le]=null,ot=Re[--Le],Re[Le]=null}var _e=null,Pe=null,Y=!1,We=null;function Md(e,t){var n=Ie(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Nu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,_e=e,Pe=Pt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,_e=e,Pe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=tn!==null?{id:ot,overflow:it}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ie(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,_e=e,Pe=null,!0):!1;default:return!1}}function xs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ws(e){if(Y){var t=Pe;if(t){var n=t;if(!Nu(e,t)){if(xs(e))throw Error(E(418));t=Pt(n.nextSibling);var r=_e;t&&Nu(e,t)?Md(r,n):(e.flags=e.flags&-4097|2,Y=!1,_e=e)}}else{if(xs(e))throw Error(E(418));e.flags=e.flags&-4097|2,Y=!1,_e=e}}}function zu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;_e=e}function co(e){if(e!==_e)return!1;if(!Y)return zu(e),Y=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ms(e.type,e.memoizedProps)),t&&(t=Pe)){if(xs(e))throw Dd(),Error(E(418));for(;t;)Md(e,t),t=Pt(t.nextSibling)}if(zu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Pe=Pt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Pe=null}}else Pe=_e?Pt(e.stateNode.nextSibling):null;return!0}function Dd(){for(var e=Pe;e;)e=Pt(e.nextSibling)}function $n(){Pe=_e=null,Y=!1}function ga(e){We===null?We=[e]:We.push(e)}var gm=dt.ReactCurrentBatchConfig;function or(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var s=o.refs;l===null?delete s[i]:s[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,e))}return e}function fo(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Tu(e){var t=e._init;return t(e._payload)}function Ad(e){function t(f,d){if(e){var p=f.deletions;p===null?(f.deletions=[d],f.flags|=16):p.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function o(f,d){return f=Tt(f,d),f.index=0,f.sibling=null,f}function i(f,d,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<d?(f.flags|=2,d):p):(f.flags|=2,d)):(f.flags|=1048576,d)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,d,p,v){return d===null||d.tag!==6?(d=ml(p,f.mode,v),d.return=f,d):(d=o(d,p),d.return=f,d)}function a(f,d,p,v){var C=p.type;return C===hn?m(f,d,p.props.children,v,p.key):d!==null&&(d.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===gt&&Tu(C)===d.type)?(v=o(d,p.props),v.ref=or(f,d,p),v.return=f,v):(v=$o(p.type,p.key,p.props,null,f.mode,v),v.ref=or(f,d,p),v.return=f,v)}function c(f,d,p,v){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=gl(p,f.mode,v),d.return=f,d):(d=o(d,p.children||[]),d.return=f,d)}function m(f,d,p,v,C){return d===null||d.tag!==7?(d=bt(p,f.mode,v,C),d.return=f,d):(d=o(d,p),d.return=f,d)}function h(f,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=ml(""+d,f.mode,p),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case eo:return p=$o(d.type,d.key,d.props,null,f.mode,p),p.ref=or(f,null,d),p.return=f,p;case pn:return d=gl(d,f.mode,p),d.return=f,d;case gt:var v=d._init;return h(f,v(d._payload),p)}if(cr(d)||qn(d))return d=bt(d,f.mode,p,null),d.return=f,d;fo(f,d)}return null}function g(f,d,p,v){var C=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return C!==null?null:s(f,d,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case eo:return p.key===C?a(f,d,p,v):null;case pn:return p.key===C?c(f,d,p,v):null;case gt:return C=p._init,g(f,d,C(p._payload),v)}if(cr(p)||qn(p))return C!==null?null:m(f,d,p,v,null);fo(f,p)}return null}function y(f,d,p,v,C){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(p)||null,s(d,f,""+v,C);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case eo:return f=f.get(v.key===null?p:v.key)||null,a(d,f,v,C);case pn:return f=f.get(v.key===null?p:v.key)||null,c(d,f,v,C);case gt:var j=v._init;return y(f,d,p,j(v._payload),C)}if(cr(v)||qn(v))return f=f.get(p)||null,m(d,f,v,C,null);fo(d,v)}return null}function w(f,d,p,v){for(var C=null,j=null,S=d,T=d=0,A=null;S!==null&&T<p.length;T++){S.index>T?(A=S,S=null):A=S.sibling;var I=g(f,S,p[T],v);if(I===null){S===null&&(S=A);break}e&&S&&I.alternate===null&&t(f,S),d=i(I,d,T),j===null?C=I:j.sibling=I,j=I,S=A}if(T===p.length)return n(f,S),Y&&Wt(f,T),C;if(S===null){for(;T<p.length;T++)S=h(f,p[T],v),S!==null&&(d=i(S,d,T),j===null?C=S:j.sibling=S,j=S);return Y&&Wt(f,T),C}for(S=r(f,S);T<p.length;T++)A=y(S,f,T,p[T],v),A!==null&&(e&&A.alternate!==null&&S.delete(A.key===null?T:A.key),d=i(A,d,T),j===null?C=A:j.sibling=A,j=A);return e&&S.forEach(function(pe){return t(f,pe)}),Y&&Wt(f,T),C}function k(f,d,p,v){var C=qn(p);if(typeof C!="function")throw Error(E(150));if(p=C.call(p),p==null)throw Error(E(151));for(var j=C=null,S=d,T=d=0,A=null,I=p.next();S!==null&&!I.done;T++,I=p.next()){S.index>T?(A=S,S=null):A=S.sibling;var pe=g(f,S,I.value,v);if(pe===null){S===null&&(S=A);break}e&&S&&pe.alternate===null&&t(f,S),d=i(pe,d,T),j===null?C=pe:j.sibling=pe,j=pe,S=A}if(I.done)return n(f,S),Y&&Wt(f,T),C;if(S===null){for(;!I.done;T++,I=p.next())I=h(f,I.value,v),I!==null&&(d=i(I,d,T),j===null?C=I:j.sibling=I,j=I);return Y&&Wt(f,T),C}for(S=r(f,S);!I.done;T++,I=p.next())I=y(S,f,T,I.value,v),I!==null&&(e&&I.alternate!==null&&S.delete(I.key===null?T:I.key),d=i(I,d,T),j===null?C=I:j.sibling=I,j=I);return e&&S.forEach(function(Dt){return t(f,Dt)}),Y&&Wt(f,T),C}function _(f,d,p,v){if(typeof p=="object"&&p!==null&&p.type===hn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case eo:e:{for(var C=p.key,j=d;j!==null;){if(j.key===C){if(C=p.type,C===hn){if(j.tag===7){n(f,j.sibling),d=o(j,p.props.children),d.return=f,f=d;break e}}else if(j.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===gt&&Tu(C)===j.type){n(f,j.sibling),d=o(j,p.props),d.ref=or(f,j,p),d.return=f,f=d;break e}n(f,j);break}else t(f,j);j=j.sibling}p.type===hn?(d=bt(p.props.children,f.mode,v,p.key),d.return=f,f=d):(v=$o(p.type,p.key,p.props,null,f.mode,v),v.ref=or(f,d,p),v.return=f,f=v)}return l(f);case pn:e:{for(j=p.key;d!==null;){if(d.key===j)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){n(f,d.sibling),d=o(d,p.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=gl(p,f.mode,v),d.return=f,f=d}return l(f);case gt:return j=p._init,_(f,d,j(p._payload),v)}if(cr(p))return w(f,d,p,v);if(qn(p))return k(f,d,p,v);fo(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(n(f,d.sibling),d=o(d,p),d.return=f,f=d):(n(f,d),d=ml(p,f.mode,v),d.return=f,f=d),l(f)):n(f,d)}return _}var On=Ad(!0),Ud=Ad(!1),qo=Ot(null),ei=null,Sn=null,va=null;function ya(){va=Sn=ei=null}function xa(e){var t=qo.current;Q(qo),e._currentValue=t}function ks(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Tn(e,t){ei=e,va=Sn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(xe=!0),e.firstContext=null)}function Oe(e){var t=e._currentValue;if(va!==e)if(e={context:e,memoizedValue:t,next:null},Sn===null){if(ei===null)throw Error(E(308));Sn=e,ei.dependencies={lanes:0,firstContext:e}}else Sn=Sn.next=e;return t}var Yt=null;function wa(e){Yt===null?Yt=[e]:Yt.push(e)}function Bd(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,wa(t)):(n.next=o.next,o.next=n),t.interleaved=n,ut(e,r)}function ut(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var vt=!1;function ka(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function lt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function _t(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,F&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,ut(e,n)}return o=r.interleaved,o===null?(t.next=t,wa(r)):(t.next=o.next,o.next=t),r.interleaved=t,ut(e,n)}function No(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,la(e,n)}}function Ru(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ti(e,t,n,r){var o=e.updateQueue;vt=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var a=s,c=a.next;a.next=null,l===null?i=c:l.next=c,l=a;var m=e.alternate;m!==null&&(m=m.updateQueue,s=m.lastBaseUpdate,s!==l&&(s===null?m.firstBaseUpdate=c:s.next=c,m.lastBaseUpdate=a))}if(i!==null){var h=o.baseState;l=0,m=c=a=null,s=i;do{var g=s.lane,y=s.eventTime;if((r&g)===g){m!==null&&(m=m.next={eventTime:y,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,k=s;switch(g=t,y=n,k.tag){case 1:if(w=k.payload,typeof w=="function"){h=w.call(y,h,g);break e}h=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=k.payload,g=typeof w=="function"?w.call(y,h,g):w,g==null)break e;h=X({},h,g);break e;case 2:vt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[s]:g.push(s))}else y={eventTime:y,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},m===null?(c=m=y,a=h):m=m.next=y,l|=g;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;g=s,s=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(1);if(m===null&&(a=h),o.baseState=a,o.firstBaseUpdate=c,o.lastBaseUpdate=m,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);rn|=l,e.lanes=l,e.memoizedState=h}}function Lu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(E(191,o));o.call(r)}}}var Gr={},qe=Ot(Gr),Or=Ot(Gr),Fr=Ot(Gr);function Kt(e){if(e===Gr)throw Error(E(174));return e}function Sa(e,t){switch(V(Fr,t),V(Or,e),V(qe,Gr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ts(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ts(t,e)}Q(qe),V(qe,t)}function Fn(){Q(qe),Q(Or),Q(Fr)}function Wd(e){Kt(Fr.current);var t=Kt(qe.current),n=ts(t,e.type);t!==n&&(V(Or,e),V(qe,n))}function Ca(e){Or.current===e&&(Q(qe),Q(Or))}var K=Ot(0);function ni(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ul=[];function Ea(){for(var e=0;e<ul.length;e++)ul[e]._workInProgressVersionPrimary=null;ul.length=0}var zo=dt.ReactCurrentDispatcher,cl=dt.ReactCurrentBatchConfig,nn=0,G=null,te=null,re=null,ri=!1,xr=!1,Mr=0,vm=0;function ue(){throw Error(E(321))}function ja(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ke(e[n],t[n]))return!1;return!0}function Pa(e,t,n,r,o,i){if(nn=i,G=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,zo.current=e===null||e.memoizedState===null?km:Sm,e=n(r,o),xr){i=0;do{if(xr=!1,Mr=0,25<=i)throw Error(E(301));i+=1,re=te=null,t.updateQueue=null,zo.current=Cm,e=n(r,o)}while(xr)}if(zo.current=oi,t=te!==null&&te.next!==null,nn=0,re=te=G=null,ri=!1,t)throw Error(E(300));return e}function _a(){var e=Mr!==0;return Mr=0,e}function Xe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return re===null?G.memoizedState=re=e:re=re.next=e,re}function Fe(){if(te===null){var e=G.alternate;e=e!==null?e.memoizedState:null}else e=te.next;var t=re===null?G.memoizedState:re.next;if(t!==null)re=t,te=e;else{if(e===null)throw Error(E(310));te=e,e={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},re===null?G.memoizedState=re=e:re=re.next=e}return re}function Dr(e,t){return typeof t=="function"?t(e):t}function dl(e){var t=Fe(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=te,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=l=null,a=null,c=i;do{var m=c.lane;if((nn&m)===m)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var h={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(s=a=h,l=r):a=a.next=h,G.lanes|=m,rn|=m}c=c.next}while(c!==null&&c!==i);a===null?l=r:a.next=s,Ke(r,t.memoizedState)||(xe=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,G.lanes|=i,rn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function fl(e){var t=Fe(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);Ke(i,t.memoizedState)||(xe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Hd(){}function Qd(e,t){var n=G,r=Fe(),o=t(),i=!Ke(r.memoizedState,o);if(i&&(r.memoizedState=o,xe=!0),r=r.queue,Na(Gd.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||re!==null&&re.memoizedState.tag&1){if(n.flags|=2048,Ar(9,Kd.bind(null,n,r,o,t),void 0,null),ie===null)throw Error(E(349));nn&30||Yd(n,t,o)}return o}function Yd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Kd(e,t,n,r){t.value=n,t.getSnapshot=r,Xd(t)&&bd(e)}function Gd(e,t,n){return n(function(){Xd(t)&&bd(e)})}function Xd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ke(e,n)}catch{return!0}}function bd(e){var t=ut(e,1);t!==null&&Qe(t,e,1,-1)}function Iu(e){var t=Xe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Dr,lastRenderedState:e},t.queue=e,e=e.dispatch=wm.bind(null,G,e),[t.memoizedState,e]}function Ar(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Zd(){return Fe().memoizedState}function To(e,t,n,r){var o=Xe();G.flags|=e,o.memoizedState=Ar(1|t,n,void 0,r===void 0?null:r)}function ji(e,t,n,r){var o=Fe();r=r===void 0?null:r;var i=void 0;if(te!==null){var l=te.memoizedState;if(i=l.destroy,r!==null&&ja(r,l.deps)){o.memoizedState=Ar(t,n,i,r);return}}G.flags|=e,o.memoizedState=Ar(1|t,n,i,r)}function $u(e,t){return To(8390656,8,e,t)}function Na(e,t){return ji(2048,8,e,t)}function Jd(e,t){return ji(4,2,e,t)}function qd(e,t){return ji(4,4,e,t)}function ef(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function tf(e,t,n){return n=n!=null?n.concat([e]):null,ji(4,4,ef.bind(null,t,e),n)}function za(){}function nf(e,t){var n=Fe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ja(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function rf(e,t){var n=Fe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ja(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function of(e,t,n){return nn&21?(Ke(n,t)||(n=ud(),G.lanes|=n,rn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,xe=!0),e.memoizedState=n)}function ym(e,t){var n=D;D=n!==0&&4>n?n:4,e(!0);var r=cl.transition;cl.transition={};try{e(!1),t()}finally{D=n,cl.transition=r}}function lf(){return Fe().memoizedState}function xm(e,t,n){var r=zt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},sf(e))af(t,n);else if(n=Bd(e,t,n,r),n!==null){var o=me();Qe(n,e,r,o),uf(n,t,r)}}function wm(e,t,n){var r=zt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(sf(e))af(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,n);if(o.hasEagerState=!0,o.eagerState=s,Ke(s,l)){var a=t.interleaved;a===null?(o.next=o,wa(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=Bd(e,t,o,r),n!==null&&(o=me(),Qe(n,e,r,o),uf(n,t,r))}}function sf(e){var t=e.alternate;return e===G||t!==null&&t===G}function af(e,t){xr=ri=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function uf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,la(e,n)}}var oi={readContext:Oe,useCallback:ue,useContext:ue,useEffect:ue,useImperativeHandle:ue,useInsertionEffect:ue,useLayoutEffect:ue,useMemo:ue,useReducer:ue,useRef:ue,useState:ue,useDebugValue:ue,useDeferredValue:ue,useTransition:ue,useMutableSource:ue,useSyncExternalStore:ue,useId:ue,unstable_isNewReconciler:!1},km={readContext:Oe,useCallback:function(e,t){return Xe().memoizedState=[e,t===void 0?null:t],e},useContext:Oe,useEffect:$u,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,To(4194308,4,ef.bind(null,t,e),n)},useLayoutEffect:function(e,t){return To(4194308,4,e,t)},useInsertionEffect:function(e,t){return To(4,2,e,t)},useMemo:function(e,t){var n=Xe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Xe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=xm.bind(null,G,e),[r.memoizedState,e]},useRef:function(e){var t=Xe();return e={current:e},t.memoizedState=e},useState:Iu,useDebugValue:za,useDeferredValue:function(e){return Xe().memoizedState=e},useTransition:function(){var e=Iu(!1),t=e[0];return e=ym.bind(null,e[1]),Xe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=G,o=Xe();if(Y){if(n===void 0)throw Error(E(407));n=n()}else{if(n=t(),ie===null)throw Error(E(349));nn&30||Yd(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,$u(Gd.bind(null,r,i,e),[e]),r.flags|=2048,Ar(9,Kd.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Xe(),t=ie.identifierPrefix;if(Y){var n=it,r=ot;n=(r&~(1<<32-He(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Mr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=vm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Sm={readContext:Oe,useCallback:nf,useContext:Oe,useEffect:Na,useImperativeHandle:tf,useInsertionEffect:Jd,useLayoutEffect:qd,useMemo:rf,useReducer:dl,useRef:Zd,useState:function(){return dl(Dr)},useDebugValue:za,useDeferredValue:function(e){var t=Fe();return of(t,te.memoizedState,e)},useTransition:function(){var e=dl(Dr)[0],t=Fe().memoizedState;return[e,t]},useMutableSource:Hd,useSyncExternalStore:Qd,useId:lf,unstable_isNewReconciler:!1},Cm={readContext:Oe,useCallback:nf,useContext:Oe,useEffect:Na,useImperativeHandle:tf,useInsertionEffect:Jd,useLayoutEffect:qd,useMemo:rf,useReducer:fl,useRef:Zd,useState:function(){return fl(Dr)},useDebugValue:za,useDeferredValue:function(e){var t=Fe();return te===null?t.memoizedState=e:of(t,te.memoizedState,e)},useTransition:function(){var e=fl(Dr)[0],t=Fe().memoizedState;return[e,t]},useMutableSource:Hd,useSyncExternalStore:Qd,useId:lf,unstable_isNewReconciler:!1};function Be(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ss(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:X({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Pi={isMounted:function(e){return(e=e._reactInternals)?sn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=me(),o=zt(e),i=lt(r,o);i.payload=t,n!=null&&(i.callback=n),t=_t(e,i,o),t!==null&&(Qe(t,e,o,r),No(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=me(),o=zt(e),i=lt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=_t(e,i,o),t!==null&&(Qe(t,e,o,r),No(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=me(),r=zt(e),o=lt(n,r);o.tag=2,t!=null&&(o.callback=t),t=_t(e,o,r),t!==null&&(Qe(t,e,r,n),No(t,e,r))}};function Ou(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Rr(n,r)||!Rr(o,i):!0}function cf(e,t,n){var r=!1,o=It,i=t.contextType;return typeof i=="object"&&i!==null?i=Oe(i):(o=Se(t)?en:fe.current,r=t.contextTypes,i=(r=r!=null)?In(e,o):It),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Pi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Fu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Pi.enqueueReplaceState(t,t.state,null)}function Cs(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},ka(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Oe(i):(i=Se(t)?en:fe.current,o.context=In(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ss(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Pi.enqueueReplaceState(o,o.state,null),ti(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Mn(e,t){try{var n="",r=t;do n+=Zp(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function pl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Es(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Em=typeof WeakMap=="function"?WeakMap:Map;function df(e,t,n){n=lt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){li||(li=!0,$s=r),Es(e,t)},n}function ff(e,t,n){n=lt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Es(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Es(e,t),typeof r!="function"&&(Nt===null?Nt=new Set([this]):Nt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Mu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Em;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Dm.bind(null,e,t,n),t.then(e,e))}function Du(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Au(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=lt(-1,1),t.tag=2,_t(n,t,1))),n.lanes|=1),e)}var jm=dt.ReactCurrentOwner,xe=!1;function he(e,t,n,r){t.child=e===null?Ud(t,null,n,r):On(t,e.child,n,r)}function Uu(e,t,n,r,o){n=n.render;var i=t.ref;return Tn(t,o),r=Pa(e,t,n,r,i,o),n=_a(),e!==null&&!xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,ct(e,t,o)):(Y&&n&&ha(t),t.flags|=1,he(e,t,r,o),t.child)}function Bu(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Ma(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,pf(e,t,i,r,o)):(e=$o(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Rr,n(l,r)&&e.ref===t.ref)return ct(e,t,o)}return t.flags|=1,e=Tt(i,r),e.ref=t.ref,e.return=t,t.child=e}function pf(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Rr(i,r)&&e.ref===t.ref)if(xe=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(xe=!0);else return t.lanes=e.lanes,ct(e,t,o)}return js(e,t,n,r,o)}function hf(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(En,je),je|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,V(En,je),je|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,V(En,je),je|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,V(En,je),je|=r;return he(e,t,o,n),t.child}function mf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function js(e,t,n,r,o){var i=Se(n)?en:fe.current;return i=In(t,i),Tn(t,o),n=Pa(e,t,n,r,i,o),r=_a(),e!==null&&!xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,ct(e,t,o)):(Y&&r&&ha(t),t.flags|=1,he(e,t,n,o),t.child)}function Vu(e,t,n,r,o){if(Se(n)){var i=!0;bo(t)}else i=!1;if(Tn(t,o),t.stateNode===null)Ro(e,t),cf(t,n,r),Cs(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var a=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=Oe(c):(c=Se(n)?en:fe.current,c=In(t,c));var m=n.getDerivedStateFromProps,h=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||a!==c)&&Fu(t,l,r,c),vt=!1;var g=t.memoizedState;l.state=g,ti(t,r,l,o),a=t.memoizedState,s!==r||g!==a||ke.current||vt?(typeof m=="function"&&(Ss(t,n,m,r),a=t.memoizedState),(s=vt||Ou(t,n,s,r,g,a,c))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),l.props=r,l.state=a,l.context=c,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Vd(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:Be(t.type,s),l.props=c,h=t.pendingProps,g=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=Oe(a):(a=Se(n)?en:fe.current,a=In(t,a));var y=n.getDerivedStateFromProps;(m=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==h||g!==a)&&Fu(t,l,r,a),vt=!1,g=t.memoizedState,l.state=g,ti(t,r,l,o);var w=t.memoizedState;s!==h||g!==w||ke.current||vt?(typeof y=="function"&&(Ss(t,n,y,r),w=t.memoizedState),(c=vt||Ou(t,n,c,r,g,w,a)||!1)?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,w,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,w,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),l.props=r,l.state=w,l.context=a,r=c):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Ps(e,t,n,r,i,o)}function Ps(e,t,n,r,o,i){mf(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&_u(t,n,!1),ct(e,t,i);r=t.stateNode,jm.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=On(t,e.child,null,i),t.child=On(t,null,s,i)):he(e,t,s,i),t.memoizedState=r.state,o&&_u(t,n,!0),t.child}function gf(e){var t=e.stateNode;t.pendingContext?Pu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Pu(e,t.context,!1),Sa(e,t.containerInfo)}function Wu(e,t,n,r,o){return $n(),ga(o),t.flags|=256,he(e,t,n,r),t.child}var _s={dehydrated:null,treeContext:null,retryLane:0};function Ns(e){return{baseLanes:e,cachePool:null,transitions:null}}function vf(e,t,n){var r=t.pendingProps,o=K.current,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),V(K,o&1),e===null)return ws(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=zi(l,r,0,null),e=bt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ns(n),t.memoizedState=_s,e):Ta(t,l));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return Pm(e,t,l,r,s,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,s=o.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Tt(o,a),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=Tt(s,i):(i=bt(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Ns(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=_s,r}return i=e.child,e=i.sibling,r=Tt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ta(e,t){return t=zi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function po(e,t,n,r){return r!==null&&ga(r),On(t,e.child,null,n),e=Ta(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Pm(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=pl(Error(E(422))),po(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=zi({mode:"visible",children:r.children},o,0,null),i=bt(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&On(t,e.child,null,l),t.child.memoizedState=Ns(l),t.memoizedState=_s,i);if(!(t.mode&1))return po(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(E(419)),r=pl(i,r,void 0),po(e,t,l,r)}if(s=(l&e.childLanes)!==0,xe||s){if(r=ie,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,ut(e,o),Qe(r,e,o,-1))}return Fa(),r=pl(Error(E(421))),po(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Am.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Pe=Pt(o.nextSibling),_e=t,Y=!0,We=null,e!==null&&(Re[Le++]=ot,Re[Le++]=it,Re[Le++]=tn,ot=e.id,it=e.overflow,tn=t),t=Ta(t,r.children),t.flags|=4096,t)}function Hu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ks(e.return,t,n)}function hl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function yf(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(he(e,t,r.children,n),r=K.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Hu(e,n,t);else if(e.tag===19)Hu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(V(K,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&ni(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),hl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ni(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}hl(t,!0,n,null,i);break;case"together":hl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ro(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ct(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),rn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,n=Tt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Tt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function _m(e,t,n){switch(t.tag){case 3:gf(t),$n();break;case 5:Wd(t);break;case 1:Se(t.type)&&bo(t);break;case 4:Sa(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;V(qo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(V(K,K.current&1),t.flags|=128,null):n&t.child.childLanes?vf(e,t,n):(V(K,K.current&1),e=ct(e,t,n),e!==null?e.sibling:null);V(K,K.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return yf(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),V(K,K.current),r)break;return null;case 22:case 23:return t.lanes=0,hf(e,t,n)}return ct(e,t,n)}var xf,zs,wf,kf;xf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};zs=function(){};wf=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Kt(qe.current);var i=null;switch(n){case"input":o=Zl(e,o),r=Zl(e,r),i=[];break;case"select":o=X({},o,{value:void 0}),r=X({},r,{value:void 0}),i=[];break;case"textarea":o=es(e,o),r=es(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Go)}ns(n,r);var l;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var s=o[c];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Er.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var a=r[c];if(s=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&a!==s&&(a!=null||s!=null))if(c==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(i||(i=[]),i.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(i=i||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Er.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&W("scroll",e),i||s===a||(i=[])):(i=i||[]).push(c,a))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};kf=function(e,t,n,r){n!==r&&(t.flags|=4)};function ir(e,t){if(!Y)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Nm(e,t,n){var r=t.pendingProps;switch(ma(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ce(t),null;case 1:return Se(t.type)&&Xo(),ce(t),null;case 3:return r=t.stateNode,Fn(),Q(ke),Q(fe),Ea(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(co(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,We!==null&&(Ms(We),We=null))),zs(e,t),ce(t),null;case 5:Ca(t);var o=Kt(Fr.current);if(n=t.type,e!==null&&t.stateNode!=null)wf(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(E(166));return ce(t),null}if(e=Kt(qe.current),co(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Ze]=t,r[$r]=i,e=(t.mode&1)!==0,n){case"dialog":W("cancel",r),W("close",r);break;case"iframe":case"object":case"embed":W("load",r);break;case"video":case"audio":for(o=0;o<fr.length;o++)W(fr[o],r);break;case"source":W("error",r);break;case"img":case"image":case"link":W("error",r),W("load",r);break;case"details":W("toggle",r);break;case"input":qa(r,i),W("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},W("invalid",r);break;case"textarea":tu(r,i),W("invalid",r)}ns(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&uo(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&uo(r.textContent,s,e),o=["children",""+s]):Er.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&W("scroll",r)}switch(n){case"input":to(r),eu(r,i,!0);break;case"textarea":to(r),nu(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Go)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Gc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Ze]=t,e[$r]=r,xf(e,t,!1,!1),t.stateNode=e;e:{switch(l=rs(n,r),n){case"dialog":W("cancel",e),W("close",e),o=r;break;case"iframe":case"object":case"embed":W("load",e),o=r;break;case"video":case"audio":for(o=0;o<fr.length;o++)W(fr[o],e);o=r;break;case"source":W("error",e),o=r;break;case"img":case"image":case"link":W("error",e),W("load",e),o=r;break;case"details":W("toggle",e),o=r;break;case"input":qa(e,r),o=Zl(e,r),W("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=X({},r,{value:void 0}),W("invalid",e);break;case"textarea":tu(e,r),o=es(e,r),W("invalid",e);break;default:o=r}ns(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var a=s[i];i==="style"?Zc(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Xc(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&jr(e,a):typeof a=="number"&&jr(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Er.hasOwnProperty(i)?a!=null&&i==="onScroll"&&W("scroll",e):a!=null&&ea(e,i,a,l))}switch(n){case"input":to(e),eu(e,r,!1);break;case"textarea":to(e),nu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Lt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Pn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Pn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Go)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ce(t),null;case 6:if(e&&t.stateNode!=null)kf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(E(166));if(n=Kt(Fr.current),Kt(qe.current),co(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ze]=t,(i=r.nodeValue!==n)&&(e=_e,e!==null))switch(e.tag){case 3:uo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&uo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ze]=t,t.stateNode=r}return ce(t),null;case 13:if(Q(K),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Y&&Pe!==null&&t.mode&1&&!(t.flags&128))Dd(),$n(),t.flags|=98560,i=!1;else if(i=co(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(E(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(E(317));i[Ze]=t}else $n(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ce(t),i=!1}else We!==null&&(Ms(We),We=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||K.current&1?ne===0&&(ne=3):Fa())),t.updateQueue!==null&&(t.flags|=4),ce(t),null);case 4:return Fn(),zs(e,t),e===null&&Lr(t.stateNode.containerInfo),ce(t),null;case 10:return xa(t.type._context),ce(t),null;case 17:return Se(t.type)&&Xo(),ce(t),null;case 19:if(Q(K),i=t.memoizedState,i===null)return ce(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)ir(i,!1);else{if(ne!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=ni(e),l!==null){for(t.flags|=128,ir(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return V(K,K.current&1|2),t.child}e=e.sibling}i.tail!==null&&J()>Dn&&(t.flags|=128,r=!0,ir(i,!1),t.lanes=4194304)}else{if(!r)if(e=ni(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ir(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!Y)return ce(t),null}else 2*J()-i.renderingStartTime>Dn&&n!==1073741824&&(t.flags|=128,r=!0,ir(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=J(),t.sibling=null,n=K.current,V(K,r?n&1|2:n&1),t):(ce(t),null);case 22:case 23:return Oa(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?je&1073741824&&(ce(t),t.subtreeFlags&6&&(t.flags|=8192)):ce(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function zm(e,t){switch(ma(t),t.tag){case 1:return Se(t.type)&&Xo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Fn(),Q(ke),Q(fe),Ea(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ca(t),null;case 13:if(Q(K),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));$n()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(K),null;case 4:return Fn(),null;case 10:return xa(t.type._context),null;case 22:case 23:return Oa(),null;case 24:return null;default:return null}}var ho=!1,de=!1,Tm=typeof WeakSet=="function"?WeakSet:Set,z=null;function Cn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){b(e,t,r)}else n.current=null}function Ts(e,t,n){try{n()}catch(r){b(e,t,r)}}var Qu=!1;function Rm(e,t){if(ps=Qo,e=jd(),pa(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,s=-1,a=-1,c=0,m=0,h=e,g=null;t:for(;;){for(var y;h!==n||o!==0&&h.nodeType!==3||(s=l+o),h!==i||r!==0&&h.nodeType!==3||(a=l+r),h.nodeType===3&&(l+=h.nodeValue.length),(y=h.firstChild)!==null;)g=h,h=y;for(;;){if(h===e)break t;if(g===n&&++c===o&&(s=l),g===i&&++m===r&&(a=l),(y=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=y}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(hs={focusedElem:e,selectionRange:n},Qo=!1,z=t;z!==null;)if(t=z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,z=e;else for(;z!==null;){t=z;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var k=w.memoizedProps,_=w.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?k:Be(t.type,k),_);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(v){b(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,z=e;break}z=t.return}return w=Qu,Qu=!1,w}function wr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Ts(t,n,i)}o=o.next}while(o!==r)}}function _i(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Rs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Sf(e){var t=e.alternate;t!==null&&(e.alternate=null,Sf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ze],delete t[$r],delete t[vs],delete t[pm],delete t[hm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Cf(e){return e.tag===5||e.tag===3||e.tag===4}function Yu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Cf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ls(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Go));else if(r!==4&&(e=e.child,e!==null))for(Ls(e,t,n),e=e.sibling;e!==null;)Ls(e,t,n),e=e.sibling}function Is(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Is(e,t,n),e=e.sibling;e!==null;)Is(e,t,n),e=e.sibling}var le=null,Ve=!1;function ht(e,t,n){for(n=n.child;n!==null;)Ef(e,t,n),n=n.sibling}function Ef(e,t,n){if(Je&&typeof Je.onCommitFiberUnmount=="function")try{Je.onCommitFiberUnmount(xi,n)}catch{}switch(n.tag){case 5:de||Cn(n,t);case 6:var r=le,o=Ve;le=null,ht(e,t,n),le=r,Ve=o,le!==null&&(Ve?(e=le,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):le.removeChild(n.stateNode));break;case 18:le!==null&&(Ve?(e=le,n=n.stateNode,e.nodeType===8?sl(e.parentNode,n):e.nodeType===1&&sl(e,n),zr(e)):sl(le,n.stateNode));break;case 4:r=le,o=Ve,le=n.stateNode.containerInfo,Ve=!0,ht(e,t,n),le=r,Ve=o;break;case 0:case 11:case 14:case 15:if(!de&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Ts(n,t,l),o=o.next}while(o!==r)}ht(e,t,n);break;case 1:if(!de&&(Cn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){b(n,t,s)}ht(e,t,n);break;case 21:ht(e,t,n);break;case 22:n.mode&1?(de=(r=de)||n.memoizedState!==null,ht(e,t,n),de=r):ht(e,t,n);break;default:ht(e,t,n)}}function Ku(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Tm),t.forEach(function(r){var o=Um.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ae(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:le=s.stateNode,Ve=!1;break e;case 3:le=s.stateNode.containerInfo,Ve=!0;break e;case 4:le=s.stateNode.containerInfo,Ve=!0;break e}s=s.return}if(le===null)throw Error(E(160));Ef(i,l,o),le=null,Ve=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(c){b(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)jf(t,e),t=t.sibling}function jf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ae(t,e),Ge(e),r&4){try{wr(3,e,e.return),_i(3,e)}catch(k){b(e,e.return,k)}try{wr(5,e,e.return)}catch(k){b(e,e.return,k)}}break;case 1:Ae(t,e),Ge(e),r&512&&n!==null&&Cn(n,n.return);break;case 5:if(Ae(t,e),Ge(e),r&512&&n!==null&&Cn(n,n.return),e.flags&32){var o=e.stateNode;try{jr(o,"")}catch(k){b(e,e.return,k)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Yc(o,i),rs(s,l);var c=rs(s,i);for(l=0;l<a.length;l+=2){var m=a[l],h=a[l+1];m==="style"?Zc(o,h):m==="dangerouslySetInnerHTML"?Xc(o,h):m==="children"?jr(o,h):ea(o,m,h,c)}switch(s){case"input":Jl(o,i);break;case"textarea":Kc(o,i);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?Pn(o,!!i.multiple,y,!1):g!==!!i.multiple&&(i.defaultValue!=null?Pn(o,!!i.multiple,i.defaultValue,!0):Pn(o,!!i.multiple,i.multiple?[]:"",!1))}o[$r]=i}catch(k){b(e,e.return,k)}}break;case 6:if(Ae(t,e),Ge(e),r&4){if(e.stateNode===null)throw Error(E(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(k){b(e,e.return,k)}}break;case 3:if(Ae(t,e),Ge(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{zr(t.containerInfo)}catch(k){b(e,e.return,k)}break;case 4:Ae(t,e),Ge(e);break;case 13:Ae(t,e),Ge(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Ia=J())),r&4&&Ku(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(de=(c=de)||m,Ae(t,e),de=c):Ae(t,e),Ge(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!m&&e.mode&1)for(z=e,m=e.child;m!==null;){for(h=z=m;z!==null;){switch(g=z,y=g.child,g.tag){case 0:case 11:case 14:case 15:wr(4,g,g.return);break;case 1:Cn(g,g.return);var w=g.stateNode;if(typeof w.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(k){b(r,n,k)}}break;case 5:Cn(g,g.return);break;case 22:if(g.memoizedState!==null){Xu(h);continue}}y!==null?(y.return=g,z=y):Xu(h)}m=m.sibling}e:for(m=null,h=e;;){if(h.tag===5){if(m===null){m=h;try{o=h.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=h.stateNode,a=h.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=bc("display",l))}catch(k){b(e,e.return,k)}}}else if(h.tag===6){if(m===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(k){b(e,e.return,k)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;m===h&&(m=null),h=h.return}m===h&&(m=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ae(t,e),Ge(e),r&4&&Ku(e);break;case 21:break;default:Ae(t,e),Ge(e)}}function Ge(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Cf(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(jr(o,""),r.flags&=-33);var i=Yu(e);Is(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,s=Yu(e);Ls(e,s,l);break;default:throw Error(E(161))}}catch(a){b(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Lm(e,t,n){z=e,Pf(e)}function Pf(e,t,n){for(var r=(e.mode&1)!==0;z!==null;){var o=z,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||ho;if(!l){var s=o.alternate,a=s!==null&&s.memoizedState!==null||de;s=ho;var c=de;if(ho=l,(de=a)&&!c)for(z=o;z!==null;)l=z,a=l.child,l.tag===22&&l.memoizedState!==null?bu(o):a!==null?(a.return=l,z=a):bu(o);for(;i!==null;)z=i,Pf(i),i=i.sibling;z=o,ho=s,de=c}Gu(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,z=i):Gu(e)}}function Gu(e){for(;z!==null;){var t=z;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:de||_i(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!de)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Be(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Lu(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Lu(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var h=m.dehydrated;h!==null&&zr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}de||t.flags&512&&Rs(t)}catch(g){b(t,t.return,g)}}if(t===e){z=null;break}if(n=t.sibling,n!==null){n.return=t.return,z=n;break}z=t.return}}function Xu(e){for(;z!==null;){var t=z;if(t===e){z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,z=n;break}z=t.return}}function bu(e){for(;z!==null;){var t=z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{_i(4,t)}catch(a){b(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){b(t,o,a)}}var i=t.return;try{Rs(t)}catch(a){b(t,i,a)}break;case 5:var l=t.return;try{Rs(t)}catch(a){b(t,l,a)}}}catch(a){b(t,t.return,a)}if(t===e){z=null;break}var s=t.sibling;if(s!==null){s.return=t.return,z=s;break}z=t.return}}var Im=Math.ceil,ii=dt.ReactCurrentDispatcher,Ra=dt.ReactCurrentOwner,$e=dt.ReactCurrentBatchConfig,F=0,ie=null,ee=null,se=0,je=0,En=Ot(0),ne=0,Ur=null,rn=0,Ni=0,La=0,kr=null,ye=null,Ia=0,Dn=1/0,tt=null,li=!1,$s=null,Nt=null,mo=!1,kt=null,si=0,Sr=0,Os=null,Lo=-1,Io=0;function me(){return F&6?J():Lo!==-1?Lo:Lo=J()}function zt(e){return e.mode&1?F&2&&se!==0?se&-se:gm.transition!==null?(Io===0&&(Io=ud()),Io):(e=D,e!==0||(e=window.event,e=e===void 0?16:gd(e.type)),e):1}function Qe(e,t,n,r){if(50<Sr)throw Sr=0,Os=null,Error(E(185));Qr(e,n,r),(!(F&2)||e!==ie)&&(e===ie&&(!(F&2)&&(Ni|=n),ne===4&&xt(e,se)),Ce(e,r),n===1&&F===0&&!(t.mode&1)&&(Dn=J()+500,Ei&&Ft()))}function Ce(e,t){var n=e.callbackNode;gh(e,t);var r=Ho(e,e===ie?se:0);if(r===0)n!==null&&iu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&iu(n),t===1)e.tag===0?mm(Zu.bind(null,e)):Od(Zu.bind(null,e)),dm(function(){!(F&6)&&Ft()}),n=null;else{switch(cd(r)){case 1:n=ia;break;case 4:n=sd;break;case 16:n=Wo;break;case 536870912:n=ad;break;default:n=Wo}n=$f(n,_f.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function _f(e,t){if(Lo=-1,Io=0,F&6)throw Error(E(327));var n=e.callbackNode;if(Rn()&&e.callbackNode!==n)return null;var r=Ho(e,e===ie?se:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ai(e,r);else{t=r;var o=F;F|=2;var i=zf();(ie!==e||se!==t)&&(tt=null,Dn=J()+500,Xt(e,t));do try{Fm();break}catch(s){Nf(e,s)}while(1);ya(),ii.current=i,F=o,ee!==null?t=0:(ie=null,se=0,t=ne)}if(t!==0){if(t===2&&(o=as(e),o!==0&&(r=o,t=Fs(e,o))),t===1)throw n=Ur,Xt(e,0),xt(e,r),Ce(e,J()),n;if(t===6)xt(e,r);else{if(o=e.current.alternate,!(r&30)&&!$m(o)&&(t=ai(e,r),t===2&&(i=as(e),i!==0&&(r=i,t=Fs(e,i))),t===1))throw n=Ur,Xt(e,0),xt(e,r),Ce(e,J()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(E(345));case 2:Ht(e,ye,tt);break;case 3:if(xt(e,r),(r&130023424)===r&&(t=Ia+500-J(),10<t)){if(Ho(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){me(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=gs(Ht.bind(null,e,ye,tt),t);break}Ht(e,ye,tt);break;case 4:if(xt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-He(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Im(r/1960))-r,10<r){e.timeoutHandle=gs(Ht.bind(null,e,ye,tt),r);break}Ht(e,ye,tt);break;case 5:Ht(e,ye,tt);break;default:throw Error(E(329))}}}return Ce(e,J()),e.callbackNode===n?_f.bind(null,e):null}function Fs(e,t){var n=kr;return e.current.memoizedState.isDehydrated&&(Xt(e,t).flags|=256),e=ai(e,t),e!==2&&(t=ye,ye=n,t!==null&&Ms(t)),e}function Ms(e){ye===null?ye=e:ye.push.apply(ye,e)}function $m(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Ke(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function xt(e,t){for(t&=~La,t&=~Ni,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-He(t),r=1<<n;e[n]=-1,t&=~r}}function Zu(e){if(F&6)throw Error(E(327));Rn();var t=Ho(e,0);if(!(t&1))return Ce(e,J()),null;var n=ai(e,t);if(e.tag!==0&&n===2){var r=as(e);r!==0&&(t=r,n=Fs(e,r))}if(n===1)throw n=Ur,Xt(e,0),xt(e,t),Ce(e,J()),n;if(n===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ht(e,ye,tt),Ce(e,J()),null}function $a(e,t){var n=F;F|=1;try{return e(t)}finally{F=n,F===0&&(Dn=J()+500,Ei&&Ft())}}function on(e){kt!==null&&kt.tag===0&&!(F&6)&&Rn();var t=F;F|=1;var n=$e.transition,r=D;try{if($e.transition=null,D=1,e)return e()}finally{D=r,$e.transition=n,F=t,!(F&6)&&Ft()}}function Oa(){je=En.current,Q(En)}function Xt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,cm(n)),ee!==null)for(n=ee.return;n!==null;){var r=n;switch(ma(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Xo();break;case 3:Fn(),Q(ke),Q(fe),Ea();break;case 5:Ca(r);break;case 4:Fn();break;case 13:Q(K);break;case 19:Q(K);break;case 10:xa(r.type._context);break;case 22:case 23:Oa()}n=n.return}if(ie=e,ee=e=Tt(e.current,null),se=je=t,ne=0,Ur=null,La=Ni=rn=0,ye=kr=null,Yt!==null){for(t=0;t<Yt.length;t++)if(n=Yt[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}Yt=null}return e}function Nf(e,t){do{var n=ee;try{if(ya(),zo.current=oi,ri){for(var r=G.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}ri=!1}if(nn=0,re=te=G=null,xr=!1,Mr=0,Ra.current=null,n===null||n.return===null){ne=1,Ur=t,ee=null;break}e:{var i=e,l=n.return,s=n,a=t;if(t=se,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,m=s,h=m.tag;if(!(m.mode&1)&&(h===0||h===11||h===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var y=Du(l);if(y!==null){y.flags&=-257,Au(y,l,s,i,t),y.mode&1&&Mu(i,c,t),t=y,a=c;var w=t.updateQueue;if(w===null){var k=new Set;k.add(a),t.updateQueue=k}else w.add(a);break e}else{if(!(t&1)){Mu(i,c,t),Fa();break e}a=Error(E(426))}}else if(Y&&s.mode&1){var _=Du(l);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Au(_,l,s,i,t),ga(Mn(a,s));break e}}i=a=Mn(a,s),ne!==4&&(ne=2),kr===null?kr=[i]:kr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=df(i,a,t);Ru(i,f);break e;case 1:s=a;var d=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Nt===null||!Nt.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=ff(i,s,t);Ru(i,v);break e}}i=i.return}while(i!==null)}Rf(n)}catch(C){t=C,ee===n&&n!==null&&(ee=n=n.return);continue}break}while(1)}function zf(){var e=ii.current;return ii.current=oi,e===null?oi:e}function Fa(){(ne===0||ne===3||ne===2)&&(ne=4),ie===null||!(rn&268435455)&&!(Ni&268435455)||xt(ie,se)}function ai(e,t){var n=F;F|=2;var r=zf();(ie!==e||se!==t)&&(tt=null,Xt(e,t));do try{Om();break}catch(o){Nf(e,o)}while(1);if(ya(),F=n,ii.current=r,ee!==null)throw Error(E(261));return ie=null,se=0,ne}function Om(){for(;ee!==null;)Tf(ee)}function Fm(){for(;ee!==null&&!sh();)Tf(ee)}function Tf(e){var t=If(e.alternate,e,je);e.memoizedProps=e.pendingProps,t===null?Rf(e):ee=t,Ra.current=null}function Rf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=zm(n,t),n!==null){n.flags&=32767,ee=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ne=6,ee=null;return}}else if(n=Nm(n,t,je),n!==null){ee=n;return}if(t=t.sibling,t!==null){ee=t;return}ee=t=e}while(t!==null);ne===0&&(ne=5)}function Ht(e,t,n){var r=D,o=$e.transition;try{$e.transition=null,D=1,Mm(e,t,n,r)}finally{$e.transition=o,D=r}return null}function Mm(e,t,n,r){do Rn();while(kt!==null);if(F&6)throw Error(E(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(vh(e,i),e===ie&&(ee=ie=null,se=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||mo||(mo=!0,$f(Wo,function(){return Rn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=$e.transition,$e.transition=null;var l=D;D=1;var s=F;F|=4,Ra.current=null,Rm(e,n),jf(n,e),rm(hs),Qo=!!ps,hs=ps=null,e.current=n,Lm(n),ah(),F=s,D=l,$e.transition=i}else e.current=n;if(mo&&(mo=!1,kt=e,si=o),i=e.pendingLanes,i===0&&(Nt=null),dh(n.stateNode),Ce(e,J()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(li)throw li=!1,e=$s,$s=null,e;return si&1&&e.tag!==0&&Rn(),i=e.pendingLanes,i&1?e===Os?Sr++:(Sr=0,Os=e):Sr=0,Ft(),null}function Rn(){if(kt!==null){var e=cd(si),t=$e.transition,n=D;try{if($e.transition=null,D=16>e?16:e,kt===null)var r=!1;else{if(e=kt,kt=null,si=0,F&6)throw Error(E(331));var o=F;for(F|=4,z=e.current;z!==null;){var i=z,l=i.child;if(z.flags&16){var s=i.deletions;if(s!==null){for(var a=0;a<s.length;a++){var c=s[a];for(z=c;z!==null;){var m=z;switch(m.tag){case 0:case 11:case 15:wr(8,m,i)}var h=m.child;if(h!==null)h.return=m,z=h;else for(;z!==null;){m=z;var g=m.sibling,y=m.return;if(Sf(m),m===c){z=null;break}if(g!==null){g.return=y,z=g;break}z=y}}}var w=i.alternate;if(w!==null){var k=w.child;if(k!==null){w.child=null;do{var _=k.sibling;k.sibling=null,k=_}while(k!==null)}}z=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,z=l;else e:for(;z!==null;){if(i=z,i.flags&2048)switch(i.tag){case 0:case 11:case 15:wr(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,z=f;break e}z=i.return}}var d=e.current;for(z=d;z!==null;){l=z;var p=l.child;if(l.subtreeFlags&2064&&p!==null)p.return=l,z=p;else e:for(l=d;z!==null;){if(s=z,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:_i(9,s)}}catch(C){b(s,s.return,C)}if(s===l){z=null;break e}var v=s.sibling;if(v!==null){v.return=s.return,z=v;break e}z=s.return}}if(F=o,Ft(),Je&&typeof Je.onPostCommitFiberRoot=="function")try{Je.onPostCommitFiberRoot(xi,e)}catch{}r=!0}return r}finally{D=n,$e.transition=t}}return!1}function Ju(e,t,n){t=Mn(n,t),t=df(e,t,1),e=_t(e,t,1),t=me(),e!==null&&(Qr(e,1,t),Ce(e,t))}function b(e,t,n){if(e.tag===3)Ju(e,e,n);else for(;t!==null;){if(t.tag===3){Ju(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Nt===null||!Nt.has(r))){e=Mn(n,e),e=ff(t,e,1),t=_t(t,e,1),e=me(),t!==null&&(Qr(t,1,e),Ce(t,e));break}}t=t.return}}function Dm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=me(),e.pingedLanes|=e.suspendedLanes&n,ie===e&&(se&n)===n&&(ne===4||ne===3&&(se&130023424)===se&&500>J()-Ia?Xt(e,0):La|=n),Ce(e,t)}function Lf(e,t){t===0&&(e.mode&1?(t=oo,oo<<=1,!(oo&130023424)&&(oo=4194304)):t=1);var n=me();e=ut(e,t),e!==null&&(Qr(e,t,n),Ce(e,n))}function Am(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Lf(e,n)}function Um(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(t),Lf(e,n)}var If;If=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ke.current)xe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return xe=!1,_m(e,t,n);xe=!!(e.flags&131072)}else xe=!1,Y&&t.flags&1048576&&Fd(t,Jo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ro(e,t),e=t.pendingProps;var o=In(t,fe.current);Tn(t,n),o=Pa(null,t,r,e,o,n);var i=_a();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Se(r)?(i=!0,bo(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,ka(t),o.updater=Pi,t.stateNode=o,o._reactInternals=t,Cs(t,r,e,n),t=Ps(null,t,r,!0,i,n)):(t.tag=0,Y&&i&&ha(t),he(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ro(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Vm(r),e=Be(r,e),o){case 0:t=js(null,t,r,e,n);break e;case 1:t=Vu(null,t,r,e,n);break e;case 11:t=Uu(null,t,r,e,n);break e;case 14:t=Bu(null,t,r,Be(r.type,e),n);break e}throw Error(E(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Be(r,o),js(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Be(r,o),Vu(e,t,r,o,n);case 3:e:{if(gf(t),e===null)throw Error(E(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Vd(e,t),ti(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Mn(Error(E(423)),t),t=Wu(e,t,r,n,o);break e}else if(r!==o){o=Mn(Error(E(424)),t),t=Wu(e,t,r,n,o);break e}else for(Pe=Pt(t.stateNode.containerInfo.firstChild),_e=t,Y=!0,We=null,n=Ud(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($n(),r===o){t=ct(e,t,n);break e}he(e,t,r,n)}t=t.child}return t;case 5:return Wd(t),e===null&&ws(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,ms(r,o)?l=null:i!==null&&ms(r,i)&&(t.flags|=32),mf(e,t),he(e,t,l,n),t.child;case 6:return e===null&&ws(t),null;case 13:return vf(e,t,n);case 4:return Sa(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=On(t,null,r,n):he(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Be(r,o),Uu(e,t,r,o,n);case 7:return he(e,t,t.pendingProps,n),t.child;case 8:return he(e,t,t.pendingProps.children,n),t.child;case 12:return he(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,V(qo,r._currentValue),r._currentValue=l,i!==null)if(Ke(i.value,l)){if(i.children===o.children&&!ke.current){t=ct(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=lt(-1,n&-n),a.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?a.next=a:(a.next=m.next,m.next=a),c.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),ks(i.return,n,t),s.lanes|=n;break}a=a.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(E(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),ks(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}he(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Tn(t,n),o=Oe(o),r=r(o),t.flags|=1,he(e,t,r,n),t.child;case 14:return r=t.type,o=Be(r,t.pendingProps),o=Be(r.type,o),Bu(e,t,r,o,n);case 15:return pf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Be(r,o),Ro(e,t),t.tag=1,Se(r)?(e=!0,bo(t)):e=!1,Tn(t,n),cf(t,r,o),Cs(t,r,o,n),Ps(null,t,r,!0,e,n);case 19:return yf(e,t,n);case 22:return hf(e,t,n)}throw Error(E(156,t.tag))};function $f(e,t){return ld(e,t)}function Bm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ie(e,t,n,r){return new Bm(e,t,n,r)}function Ma(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Vm(e){if(typeof e=="function")return Ma(e)?1:0;if(e!=null){if(e=e.$$typeof,e===na)return 11;if(e===ra)return 14}return 2}function Tt(e,t){var n=e.alternate;return n===null?(n=Ie(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function $o(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")Ma(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case hn:return bt(n.children,o,i,t);case ta:l=8,o|=8;break;case Kl:return e=Ie(12,n,t,o|2),e.elementType=Kl,e.lanes=i,e;case Gl:return e=Ie(13,n,t,o),e.elementType=Gl,e.lanes=i,e;case Xl:return e=Ie(19,n,t,o),e.elementType=Xl,e.lanes=i,e;case Wc:return zi(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Bc:l=10;break e;case Vc:l=9;break e;case na:l=11;break e;case ra:l=14;break e;case gt:l=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=Ie(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function bt(e,t,n,r){return e=Ie(7,e,r,t),e.lanes=n,e}function zi(e,t,n,r){return e=Ie(22,e,r,t),e.elementType=Wc,e.lanes=n,e.stateNode={isHidden:!1},e}function ml(e,t,n){return e=Ie(6,e,null,t),e.lanes=n,e}function gl(e,t,n){return t=Ie(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Wm(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bi(0),this.expirationTimes=bi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bi(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Da(e,t,n,r,o,i,l,s,a){return e=new Wm(e,t,n,s,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ie(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ka(i),e}function Hm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Of(e){if(!e)return It;e=e._reactInternals;e:{if(sn(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Se(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var n=e.type;if(Se(n))return $d(e,n,t)}return t}function Ff(e,t,n,r,o,i,l,s,a){return e=Da(n,r,!0,e,o,i,l,s,a),e.context=Of(null),n=e.current,r=me(),o=zt(n),i=lt(r,o),i.callback=t??null,_t(n,i,o),e.current.lanes=o,Qr(e,o,r),Ce(e,r),e}function Ti(e,t,n,r){var o=t.current,i=me(),l=zt(o);return n=Of(n),t.context===null?t.context=n:t.pendingContext=n,t=lt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=_t(o,t,l),e!==null&&(Qe(e,o,l,i),No(e,o,l)),l}function ui(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function qu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Aa(e,t){qu(e,t),(e=e.alternate)&&qu(e,t)}function Qm(){return null}var Mf=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ua(e){this._internalRoot=e}Ri.prototype.render=Ua.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));Ti(e,t,null,null)};Ri.prototype.unmount=Ua.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;on(function(){Ti(null,e,null,null)}),t[at]=null}};function Ri(e){this._internalRoot=e}Ri.prototype.unstable_scheduleHydration=function(e){if(e){var t=pd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<yt.length&&t!==0&&t<yt[n].priority;n++);yt.splice(n,0,e),n===0&&md(e)}};function Ba(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Li(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ec(){}function Ym(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=ui(l);i.call(c)}}var l=Ff(t,r,e,0,null,!1,!1,"",ec);return e._reactRootContainer=l,e[at]=l.current,Lr(e.nodeType===8?e.parentNode:e),on(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var c=ui(a);s.call(c)}}var a=Da(e,0,!1,null,null,!1,!1,"",ec);return e._reactRootContainer=a,e[at]=a.current,Lr(e.nodeType===8?e.parentNode:e),on(function(){Ti(t,a,n,r)}),a}function Ii(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var s=o;o=function(){var a=ui(l);s.call(a)}}Ti(t,l,e,o)}else l=Ym(n,t,e,o,r);return ui(l)}dd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dr(t.pendingLanes);n!==0&&(la(t,n|1),Ce(t,J()),!(F&6)&&(Dn=J()+500,Ft()))}break;case 13:on(function(){var r=ut(e,1);if(r!==null){var o=me();Qe(r,e,1,o)}}),Aa(e,1)}};sa=function(e){if(e.tag===13){var t=ut(e,134217728);if(t!==null){var n=me();Qe(t,e,134217728,n)}Aa(e,134217728)}};fd=function(e){if(e.tag===13){var t=zt(e),n=ut(e,t);if(n!==null){var r=me();Qe(n,e,t,r)}Aa(e,t)}};pd=function(){return D};hd=function(e,t){var n=D;try{return D=e,t()}finally{D=n}};is=function(e,t,n){switch(t){case"input":if(Jl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Ci(r);if(!o)throw Error(E(90));Qc(r),Jl(r,o)}}}break;case"textarea":Kc(e,n);break;case"select":t=n.value,t!=null&&Pn(e,!!n.multiple,t,!1)}};ed=$a;td=on;var Km={usingClientEntryPoint:!1,Events:[Kr,yn,Ci,Jc,qc,$a]},lr={findFiberByHostInstance:Qt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Gm={bundleType:lr.bundleType,version:lr.version,rendererPackageName:lr.rendererPackageName,rendererConfig:lr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:dt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=od(e),e===null?null:e.stateNode},findFiberByHostInstance:lr.findFiberByHostInstance||Qm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var go=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!go.isDisabled&&go.supportsFiber)try{xi=go.inject(Gm),Je=go}catch{}}ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Km;ze.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ba(t))throw Error(E(200));return Hm(e,t,null,n)};ze.createRoot=function(e,t){if(!Ba(e))throw Error(E(299));var n=!1,r="",o=Mf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Da(e,1,!1,null,null,n,!1,r,o),e[at]=t.current,Lr(e.nodeType===8?e.parentNode:e),new Ua(t)};ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=od(t),e=e===null?null:e.stateNode,e};ze.flushSync=function(e){return on(e)};ze.hydrate=function(e,t,n){if(!Li(t))throw Error(E(200));return Ii(null,e,t,!0,n)};ze.hydrateRoot=function(e,t,n){if(!Ba(e))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=Mf;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Ff(t,null,e,1,n??null,o,!1,i,l),e[at]=t.current,Lr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Ri(t)};ze.render=function(e,t,n){if(!Li(t))throw Error(E(200));return Ii(null,e,t,!1,n)};ze.unmountComponentAtNode=function(e){if(!Li(e))throw Error(E(40));return e._reactRootContainer?(on(function(){Ii(null,null,e,!1,function(){e._reactRootContainer=null,e[at]=null})}),!0):!1};ze.unstable_batchedUpdates=$a;ze.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Li(n))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return Ii(e,t,n,!1,r)};ze.version="18.3.1-next-f1338f8080-20240426";function Df(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Df)}catch(e){console.error(e)}}Df(),Mc.exports=ze;var Xm=Mc.exports,tc=Xm;Ql.createRoot=tc.createRoot,Ql.hydrateRoot=tc.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Br(){return Br=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Br.apply(this,arguments)}var St;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(St||(St={}));const nc="popstate";function bm(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:l,hash:s}=r.location;return Ds("",{pathname:i,search:l,hash:s},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:ci(o)}return Jm(t,n,null,e)}function Z(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Af(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Zm(){return Math.random().toString(36).substr(2,8)}function rc(e,t){return{usr:e.state,key:e.key,idx:t}}function Ds(e,t,n,r){return n===void 0&&(n=null),Br({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Gn(t):t,{state:n,key:t&&t.key||r||Zm()})}function ci(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Gn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Jm(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,l=o.history,s=St.Pop,a=null,c=m();c==null&&(c=0,l.replaceState(Br({},l.state,{idx:c}),""));function m(){return(l.state||{idx:null}).idx}function h(){s=St.Pop;let _=m(),f=_==null?null:_-c;c=_,a&&a({action:s,location:k.location,delta:f})}function g(_,f){s=St.Push;let d=Ds(k.location,_,f);n&&n(d,_),c=m()+1;let p=rc(d,c),v=k.createHref(d);try{l.pushState(p,"",v)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;o.location.assign(v)}i&&a&&a({action:s,location:k.location,delta:1})}function y(_,f){s=St.Replace;let d=Ds(k.location,_,f);n&&n(d,_),c=m();let p=rc(d,c),v=k.createHref(d);l.replaceState(p,"",v),i&&a&&a({action:s,location:k.location,delta:0})}function w(_){let f=o.location.origin!=="null"?o.location.origin:o.location.href,d=typeof _=="string"?_:ci(_);return d=d.replace(/ $/,"%20"),Z(f,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,f)}let k={get action(){return s},get location(){return e(o,l)},listen(_){if(a)throw new Error("A history only accepts one active listener");return o.addEventListener(nc,h),a=_,()=>{o.removeEventListener(nc,h),a=null}},createHref(_){return t(o,_)},createURL:w,encodeLocation(_){let f=w(_);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:g,replace:y,go(_){return l.go(_)}};return k}var oc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(oc||(oc={}));function qm(e,t,n){return n===void 0&&(n="/"),e0(e,t,n,!1)}function e0(e,t,n,r){let o=typeof t=="string"?Gn(t):t,i=An(o.pathname||"/",n);if(i==null)return null;let l=Uf(e);t0(l);let s=null;for(let a=0;s==null&&a<l.length;++a){let c=f0(i);s=c0(l[a],c,r)}return s}function Uf(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,l,s)=>{let a={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};a.relativePath.startsWith("/")&&(Z(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let c=Rt([r,a.relativePath]),m=n.concat(a);i.children&&i.children.length>0&&(Z(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Uf(i.children,t,m,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:a0(c,i.index),routesMeta:m})};return e.forEach((i,l)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))o(i,l);else for(let a of Bf(i.path))o(i,l,a)}),t}function Bf(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let l=Bf(r.join("/")),s=[];return s.push(...l.map(a=>a===""?i:[i,a].join("/"))),o&&s.push(...l),s.map(a=>e.startsWith("/")&&a===""?"/":a)}function t0(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:u0(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const n0=/^:[\w-]+$/,r0=3,o0=2,i0=1,l0=10,s0=-2,ic=e=>e==="*";function a0(e,t){let n=e.split("/"),r=n.length;return n.some(ic)&&(r+=s0),t&&(r+=o0),n.filter(o=>!ic(o)).reduce((o,i)=>o+(n0.test(i)?r0:i===""?i0:l0),r)}function u0(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function c0(e,t,n){n===void 0&&(n=!1);let{routesMeta:r}=e,o={},i="/",l=[];for(let s=0;s<r.length;++s){let a=r[s],c=s===r.length-1,m=i==="/"?t:t.slice(i.length)||"/",h=di({path:a.relativePath,caseSensitive:a.caseSensitive,end:c},m),g=a.route;if(!h&&c&&n&&!r[r.length-1].route.index&&(h=di({path:a.relativePath,caseSensitive:a.caseSensitive,end:!1},m)),!h)return null;Object.assign(o,h.params),l.push({params:o,pathname:Rt([i,h.pathname]),pathnameBase:g0(Rt([i,h.pathnameBase])),route:g}),h.pathnameBase!=="/"&&(i=Rt([i,h.pathnameBase]))}return l}function di(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=d0(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],l=i.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:r.reduce((c,m,h)=>{let{paramName:g,isOptional:y}=m;if(g==="*"){let k=s[h]||"";l=i.slice(0,i.length-k.length).replace(/(.)\/+$/,"$1")}const w=s[h];return y&&!w?c[g]=void 0:c[g]=(w||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:l,pattern:e}}function d0(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Af(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,s,a)=>(r.push({paramName:s,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function f0(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Af(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function An(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function p0(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Gn(e):e;return{pathname:n?n.startsWith("/")?n:h0(n,t):t,search:v0(r),hash:y0(o)}}function h0(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function vl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function m0(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Vf(e,t){let n=m0(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Wf(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Gn(e):(o=Br({},e),Z(!o.pathname||!o.pathname.includes("?"),vl("?","pathname","search",o)),Z(!o.pathname||!o.pathname.includes("#"),vl("#","pathname","hash",o)),Z(!o.search||!o.search.includes("#"),vl("#","search","hash",o)));let i=e===""||o.pathname==="",l=i?"/":o.pathname,s;if(l==null)s=n;else{let h=t.length-1;if(!r&&l.startsWith("..")){let g=l.split("/");for(;g[0]==="..";)g.shift(),h-=1;o.pathname=g.join("/")}s=h>=0?t[h]:"/"}let a=p0(o,s),c=l&&l!=="/"&&l.endsWith("/"),m=(i||l===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(c||m)&&(a.pathname+="/"),a}const Rt=e=>e.join("/").replace(/\/\/+/g,"/"),g0=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),v0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,y0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function x0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Hf=["post","put","patch","delete"];new Set(Hf);const w0=["get",...Hf];new Set(w0);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vr(){return Vr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vr.apply(this,arguments)}const $i=P.createContext(null),Qf=P.createContext(null),Mt=P.createContext(null),Oi=P.createContext(null),an=P.createContext({outlet:null,matches:[],isDataRoute:!1}),Yf=P.createContext(null);function k0(e,t){let{relative:n}=t===void 0?{}:t;Xr()||Z(!1);let{basename:r,navigator:o}=P.useContext(Mt),{hash:i,pathname:l,search:s}=Fi(e,{relative:n}),a=l;return r!=="/"&&(a=l==="/"?r:Rt([r,l])),o.createHref({pathname:a,search:s,hash:i})}function Xr(){return P.useContext(Oi)!=null}function Xn(){return Xr()||Z(!1),P.useContext(Oi).location}function Kf(e){P.useContext(Mt).static||P.useLayoutEffect(e)}function S0(){let{isDataRoute:e}=P.useContext(an);return e?O0():C0()}function C0(){Xr()||Z(!1);let e=P.useContext($i),{basename:t,future:n,navigator:r}=P.useContext(Mt),{matches:o}=P.useContext(an),{pathname:i}=Xn(),l=JSON.stringify(Vf(o,n.v7_relativeSplatPath)),s=P.useRef(!1);return Kf(()=>{s.current=!0}),P.useCallback(function(c,m){if(m===void 0&&(m={}),!s.current)return;if(typeof c=="number"){r.go(c);return}let h=Wf(c,JSON.parse(l),i,m.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:Rt([t,h.pathname])),(m.replace?r.replace:r.push)(h,m.state,m)},[t,r,l,i,e])}function Fi(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=P.useContext(Mt),{matches:o}=P.useContext(an),{pathname:i}=Xn(),l=JSON.stringify(Vf(o,r.v7_relativeSplatPath));return P.useMemo(()=>Wf(e,JSON.parse(l),i,n==="path"),[e,l,i,n])}function E0(e,t){return j0(e,t)}function j0(e,t,n,r){Xr()||Z(!1);let{navigator:o,static:i}=P.useContext(Mt),{matches:l}=P.useContext(an),s=l[l.length-1],a=s?s.params:{};s&&s.pathname;let c=s?s.pathnameBase:"/";s&&s.route;let m=Xn(),h;if(t){var g;let f=typeof t=="string"?Gn(t):t;c==="/"||(g=f.pathname)!=null&&g.startsWith(c)||Z(!1),h=f}else h=m;let y=h.pathname||"/",w=y;if(c!=="/"){let f=c.replace(/^\//,"").split("/");w="/"+y.replace(/^\//,"").split("/").slice(f.length).join("/")}let k=!i&&n&&n.matches&&n.matches.length>0?n.matches:qm(e,{pathname:w}),_=T0(k&&k.map(f=>Object.assign({},f,{params:Object.assign({},a,f.params),pathname:Rt([c,o.encodeLocation?o.encodeLocation(f.pathname).pathname:f.pathname]),pathnameBase:f.pathnameBase==="/"?c:Rt([c,o.encodeLocation?o.encodeLocation(f.pathnameBase).pathname:f.pathnameBase])})),l,n,r);return t&&_?P.createElement(Oi.Provider,{value:{location:Vr({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:St.Pop}},_):_}function P0(){let e=$0(),t=x0(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return P.createElement(P.Fragment,null,P.createElement("h2",null,"Unexpected Application Error!"),P.createElement("h3",{style:{fontStyle:"italic"}},t),n?P.createElement("pre",{style:o},n):null,i)}const _0=P.createElement(P0,null);class N0 extends P.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?P.createElement(an.Provider,{value:this.props.routeContext},P.createElement(Yf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function z0(e){let{routeContext:t,match:n,children:r}=e,o=P.useContext($i);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),P.createElement(an.Provider,{value:t},r)}function T0(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,s=(o=n)==null?void 0:o.errors;if(s!=null){let m=l.findIndex(h=>h.route.id&&(s==null?void 0:s[h.route.id])!==void 0);m>=0||Z(!1),l=l.slice(0,Math.min(l.length,m+1))}let a=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let m=0;m<l.length;m++){let h=l[m];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(c=m),h.route.id){let{loaderData:g,errors:y}=n,w=h.route.loader&&g[h.route.id]===void 0&&(!y||y[h.route.id]===void 0);if(h.route.lazy||w){a=!0,c>=0?l=l.slice(0,c+1):l=[l[0]];break}}}return l.reduceRight((m,h,g)=>{let y,w=!1,k=null,_=null;n&&(y=s&&h.route.id?s[h.route.id]:void 0,k=h.route.errorElement||_0,a&&(c<0&&g===0?(F0("route-fallback",!1),w=!0,_=null):c===g&&(w=!0,_=h.route.hydrateFallbackElement||null)));let f=t.concat(l.slice(0,g+1)),d=()=>{let p;return y?p=k:w?p=_:h.route.Component?p=P.createElement(h.route.Component,null):h.route.element?p=h.route.element:p=m,P.createElement(z0,{match:h,routeContext:{outlet:m,matches:f,isDataRoute:n!=null},children:p})};return n&&(h.route.ErrorBoundary||h.route.errorElement||g===0)?P.createElement(N0,{location:n.location,revalidation:n.revalidation,component:k,error:y,children:d(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):d()},null)}var Gf=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Gf||{}),fi=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(fi||{});function R0(e){let t=P.useContext($i);return t||Z(!1),t}function L0(e){let t=P.useContext(Qf);return t||Z(!1),t}function I0(e){let t=P.useContext(an);return t||Z(!1),t}function Xf(e){let t=I0(),n=t.matches[t.matches.length-1];return n.route.id||Z(!1),n.route.id}function $0(){var e;let t=P.useContext(Yf),n=L0(fi.UseRouteError),r=Xf(fi.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function O0(){let{router:e}=R0(Gf.UseNavigateStable),t=Xf(fi.UseNavigateStable),n=P.useRef(!1);return Kf(()=>{n.current=!0}),P.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,Vr({fromRouteId:t},i)))},[e,t])}const lc={};function F0(e,t,n){!t&&!lc[e]&&(lc[e]=!0)}function M0(e,t){e==null||e.v7_startTransition,(e==null?void 0:e.v7_relativeSplatPath)===void 0&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}function fn(e){Z(!1)}function D0(e){let{basename:t="/",children:n=null,location:r,navigationType:o=St.Pop,navigator:i,static:l=!1,future:s}=e;Xr()&&Z(!1);let a=t.replace(/^\/*/,"/"),c=P.useMemo(()=>({basename:a,navigator:i,static:l,future:Vr({v7_relativeSplatPath:!1},s)}),[a,s,i,l]);typeof r=="string"&&(r=Gn(r));let{pathname:m="/",search:h="",hash:g="",state:y=null,key:w="default"}=r,k=P.useMemo(()=>{let _=An(m,a);return _==null?null:{location:{pathname:_,search:h,hash:g,state:y,key:w},navigationType:o}},[a,m,h,g,y,w,o]);return k==null?null:P.createElement(Mt.Provider,{value:c},P.createElement(Oi.Provider,{children:n,value:k}))}function A0(e){let{children:t,location:n}=e;return E0(As(t),n)}new Promise(()=>{});function As(e,t){t===void 0&&(t=[]);let n=[];return P.Children.forEach(e,(r,o)=>{if(!P.isValidElement(r))return;let i=[...t,o];if(r.type===P.Fragment){n.push.apply(n,As(r.props.children,i));return}r.type!==fn&&Z(!1),!r.props.index||!r.props.children||Z(!1);let l={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=As(r.props.children,i)),n.push(l)}),n}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pi(){return pi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pi.apply(this,arguments)}function bf(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function U0(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function B0(e,t){return e.button===0&&(!t||t==="_self")&&!U0(e)}const V0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],W0=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],H0="6";try{window.__reactRouterVersion=H0}catch{}const Q0=P.createContext({isTransitioning:!1}),Y0="startTransition",sc=Dp[Y0];function K0(e){let{basename:t,children:n,future:r,window:o}=e,i=P.useRef();i.current==null&&(i.current=bm({window:o,v5Compat:!0}));let l=i.current,[s,a]=P.useState({action:l.action,location:l.location}),{v7_startTransition:c}=r||{},m=P.useCallback(h=>{c&&sc?sc(()=>a(h)):a(h)},[a,c]);return P.useLayoutEffect(()=>l.listen(m),[l,m]),P.useEffect(()=>M0(r),[r]),P.createElement(D0,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:l,future:r})}const G0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",X0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,un=P.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:l,state:s,target:a,to:c,preventScrollReset:m,viewTransition:h}=t,g=bf(t,V0),{basename:y}=P.useContext(Mt),w,k=!1;if(typeof c=="string"&&X0.test(c)&&(w=c,G0))try{let p=new URL(window.location.href),v=c.startsWith("//")?new URL(p.protocol+c):new URL(c),C=An(v.pathname,y);v.origin===p.origin&&C!=null?c=C+v.search+v.hash:k=!0}catch{}let _=k0(c,{relative:o}),f=J0(c,{replace:l,state:s,target:a,preventScrollReset:m,relative:o,viewTransition:h});function d(p){r&&r(p),p.defaultPrevented||f(p)}return P.createElement("a",pi({},g,{href:w||_,onClick:k||i?r:d,ref:n,target:a}))}),b0=P.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:o=!1,className:i="",end:l=!1,style:s,to:a,viewTransition:c,children:m}=t,h=bf(t,W0),g=Fi(a,{relative:h.relative}),y=Xn(),w=P.useContext(Qf),{navigator:k,basename:_}=P.useContext(Mt),f=w!=null&&q0(g)&&c===!0,d=k.encodeLocation?k.encodeLocation(g).pathname:g.pathname,p=y.pathname,v=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;o||(p=p.toLowerCase(),v=v?v.toLowerCase():null,d=d.toLowerCase()),v&&_&&(v=An(v,_)||v);const C=d!=="/"&&d.endsWith("/")?d.length-1:d.length;let j=p===d||!l&&p.startsWith(d)&&p.charAt(C)==="/",S=v!=null&&(v===d||!l&&v.startsWith(d)&&v.charAt(d.length)==="/"),T={isActive:j,isPending:S,isTransitioning:f},A=j?r:void 0,I;typeof i=="function"?I=i(T):I=[i,j?"active":null,S?"pending":null,f?"transitioning":null].filter(Boolean).join(" ");let pe=typeof s=="function"?s(T):s;return P.createElement(un,pi({},h,{"aria-current":A,className:I,ref:n,style:pe,to:a,viewTransition:c}),typeof m=="function"?m(T):m)});var Us;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Us||(Us={}));var ac;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(ac||(ac={}));function Z0(e){let t=P.useContext($i);return t||Z(!1),t}function J0(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:l,viewTransition:s}=t===void 0?{}:t,a=S0(),c=Xn(),m=Fi(e,{relative:l});return P.useCallback(h=>{if(B0(h,n)){h.preventDefault();let g=r!==void 0?r:ci(c)===ci(m);a(e,{replace:g,state:o,preventScrollReset:i,relative:l,viewTransition:s})}},[c,a,m,r,o,n,e,i,l,s])}function q0(e,t){t===void 0&&(t={});let n=P.useContext(Q0);n==null&&Z(!1);let{basename:r}=Z0(Us.useViewTransitionState),o=Fi(e,{relative:t.relative});if(!n.isTransitioning)return!1;let i=An(n.currentLocation.pathname,r)||n.currentLocation.pathname,l=An(n.nextLocation.pathname,r)||n.nextLocation.pathname;return di(o.pathname,l)!=null||di(o.pathname,i)!=null}var we=function(){return we=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},we.apply(this,arguments)};function hi(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var H="-ms-",Cr="-moz-",M="-webkit-",Zf="comm",Mi="rule",Va="decl",eg="@import",Jf="@keyframes",tg="@layer",qf=Math.abs,Wa=String.fromCharCode,Bs=Object.assign;function ng(e,t){return oe(e,0)^45?(((t<<2^oe(e,0))<<2^oe(e,1))<<2^oe(e,2))<<2^oe(e,3):0}function ep(e){return e.trim()}function nt(e,t){return(e=t.exec(e))?e[0]:e}function $(e,t,n){return e.replace(t,n)}function Oo(e,t,n){return e.indexOf(t,n)}function oe(e,t){return e.charCodeAt(t)|0}function Un(e,t,n){return e.slice(t,n)}function be(e){return e.length}function tp(e){return e.length}function pr(e,t){return t.push(e),e}function rg(e,t){return e.map(t).join("")}function uc(e,t){return e.filter(function(n){return!nt(n,t)})}var Di=1,Bn=1,np=0,Me=0,q=0,bn="";function Ai(e,t,n,r,o,i,l,s){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:Di,column:Bn,length:l,return:"",siblings:s}}function mt(e,t){return Bs(Ai("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function dn(e){for(;e.root;)e=mt(e.root,{children:[e]});pr(e,e.siblings)}function og(){return q}function ig(){return q=Me>0?oe(bn,--Me):0,Bn--,q===10&&(Bn=1,Di--),q}function Ye(){return q=Me<np?oe(bn,Me++):0,Bn++,q===10&&(Bn=1,Di++),q}function Zt(){return oe(bn,Me)}function Fo(){return Me}function Ui(e,t){return Un(bn,e,t)}function Vs(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function lg(e){return Di=Bn=1,np=be(bn=e),Me=0,[]}function sg(e){return bn="",e}function yl(e){return ep(Ui(Me-1,Ws(e===91?e+2:e===40?e+1:e)))}function ag(e){for(;(q=Zt())&&q<33;)Ye();return Vs(e)>2||Vs(q)>3?"":" "}function ug(e,t){for(;--t&&Ye()&&!(q<48||q>102||q>57&&q<65||q>70&&q<97););return Ui(e,Fo()+(t<6&&Zt()==32&&Ye()==32))}function Ws(e){for(;Ye();)switch(q){case e:return Me;case 34:case 39:e!==34&&e!==39&&Ws(q);break;case 40:e===41&&Ws(e);break;case 92:Ye();break}return Me}function cg(e,t){for(;Ye()&&e+q!==47+10;)if(e+q===42+42&&Zt()===47)break;return"/*"+Ui(t,Me-1)+"*"+Wa(e===47?e:Ye())}function dg(e){for(;!Vs(Zt());)Ye();return Ui(e,Me)}function fg(e){return sg(Mo("",null,null,null,[""],e=lg(e),0,[0],e))}function Mo(e,t,n,r,o,i,l,s,a){for(var c=0,m=0,h=l,g=0,y=0,w=0,k=1,_=1,f=1,d=0,p="",v=o,C=i,j=r,S=p;_;)switch(w=d,d=Ye()){case 40:if(w!=108&&oe(S,h-1)==58){Oo(S+=$(yl(d),"&","&\f"),"&\f",qf(c?s[c-1]:0))!=-1&&(f=-1);break}case 34:case 39:case 91:S+=yl(d);break;case 9:case 10:case 13:case 32:S+=ag(w);break;case 92:S+=ug(Fo()-1,7);continue;case 47:switch(Zt()){case 42:case 47:pr(pg(cg(Ye(),Fo()),t,n,a),a);break;default:S+="/"}break;case 123*k:s[c++]=be(S)*f;case 125*k:case 59:case 0:switch(d){case 0:case 125:_=0;case 59+m:f==-1&&(S=$(S,/\f/g,"")),y>0&&be(S)-h&&pr(y>32?dc(S+";",r,n,h-1,a):dc($(S," ","")+";",r,n,h-2,a),a);break;case 59:S+=";";default:if(pr(j=cc(S,t,n,c,m,o,s,p,v=[],C=[],h,i),i),d===123)if(m===0)Mo(S,t,j,j,v,i,h,s,C);else switch(g===99&&oe(S,3)===110?100:g){case 100:case 108:case 109:case 115:Mo(e,j,j,r&&pr(cc(e,j,j,0,0,o,s,p,o,v=[],h,C),C),o,C,h,s,r?v:C);break;default:Mo(S,j,j,j,[""],C,0,s,C)}}c=m=y=0,k=f=1,p=S="",h=l;break;case 58:h=1+be(S),y=w;default:if(k<1){if(d==123)--k;else if(d==125&&k++==0&&ig()==125)continue}switch(S+=Wa(d),d*k){case 38:f=m>0?1:(S+="\f",-1);break;case 44:s[c++]=(be(S)-1)*f,f=1;break;case 64:Zt()===45&&(S+=yl(Ye())),g=Zt(),m=h=be(p=S+=dg(Fo())),d++;break;case 45:w===45&&be(S)==2&&(k=0)}}return i}function cc(e,t,n,r,o,i,l,s,a,c,m,h){for(var g=o-1,y=o===0?i:[""],w=tp(y),k=0,_=0,f=0;k<r;++k)for(var d=0,p=Un(e,g+1,g=qf(_=l[k])),v=e;d<w;++d)(v=ep(_>0?y[d]+" "+p:$(p,/&\f/g,y[d])))&&(a[f++]=v);return Ai(e,t,n,o===0?Mi:s,a,c,m,h)}function pg(e,t,n,r){return Ai(e,t,n,Zf,Wa(og()),Un(e,2,-2),0,r)}function dc(e,t,n,r,o){return Ai(e,t,n,Va,Un(e,0,r),Un(e,r+1,-1),r,o)}function rp(e,t,n){switch(ng(e,t)){case 5103:return M+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return M+e+e;case 4789:return Cr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return M+e+Cr+e+H+e+e;case 5936:switch(oe(e,t+11)){case 114:return M+e+H+$(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return M+e+H+$(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return M+e+H+$(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return M+e+H+e+e;case 6165:return M+e+H+"flex-"+e+e;case 5187:return M+e+$(e,/(\w+).+(:[^]+)/,M+"box-$1$2"+H+"flex-$1$2")+e;case 5443:return M+e+H+"flex-item-"+$(e,/flex-|-self/g,"")+(nt(e,/flex-|baseline/)?"":H+"grid-row-"+$(e,/flex-|-self/g,""))+e;case 4675:return M+e+H+"flex-line-pack"+$(e,/align-content|flex-|-self/g,"")+e;case 5548:return M+e+H+$(e,"shrink","negative")+e;case 5292:return M+e+H+$(e,"basis","preferred-size")+e;case 6060:return M+"box-"+$(e,"-grow","")+M+e+H+$(e,"grow","positive")+e;case 4554:return M+$(e,/([^-])(transform)/g,"$1"+M+"$2")+e;case 6187:return $($($(e,/(zoom-|grab)/,M+"$1"),/(image-set)/,M+"$1"),e,"")+e;case 5495:case 3959:return $(e,/(image-set\([^]*)/,M+"$1$`$1");case 4968:return $($(e,/(.+:)(flex-)?(.*)/,M+"box-pack:$3"+H+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+M+e+e;case 4200:if(!nt(e,/flex-|baseline/))return H+"grid-column-align"+Un(e,t)+e;break;case 2592:case 3360:return H+$(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,nt(r.props,/grid-\w+-end/)})?~Oo(e+(n=n[t].value),"span",0)?e:H+$(e,"-start","")+e+H+"grid-row-span:"+(~Oo(n,"span",0)?nt(n,/\d+/):+nt(n,/\d+/)-+nt(e,/\d+/))+";":H+$(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return nt(r.props,/grid-\w+-start/)})?e:H+$($(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return $(e,/(.+)-inline(.+)/,M+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(be(e)-1-t>6)switch(oe(e,t+1)){case 109:if(oe(e,t+4)!==45)break;case 102:return $(e,/(.+:)(.+)-([^]+)/,"$1"+M+"$2-$3$1"+Cr+(oe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Oo(e,"stretch",0)?rp($(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return $(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,l,s,a,c){return H+o+":"+i+c+(l?H+o+"-span:"+(s?a:+a-+i)+c:"")+e});case 4949:if(oe(e,t+6)===121)return $(e,":",":"+M)+e;break;case 6444:switch(oe(e,oe(e,14)===45?18:11)){case 120:return $(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+M+(oe(e,14)===45?"inline-":"")+"box$3$1"+M+"$2$3$1"+H+"$2box$3")+e;case 100:return $(e,":",":"+H)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return $(e,"scroll-","scroll-snap-")+e}return e}function mi(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function hg(e,t,n,r){switch(e.type){case tg:if(e.children.length)break;case eg:case Va:return e.return=e.return||e.value;case Zf:return"";case Jf:return e.return=e.value+"{"+mi(e.children,r)+"}";case Mi:if(!be(e.value=e.props.join(",")))return""}return be(n=mi(e.children,r))?e.return=e.value+"{"+n+"}":""}function mg(e){var t=tp(e);return function(n,r,o,i){for(var l="",s=0;s<t;s++)l+=e[s](n,r,o,i)||"";return l}}function gg(e){return function(t){t.root||(t=t.return)&&e(t)}}function vg(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Va:e.return=rp(e.value,e.length,n);return;case Jf:return mi([mt(e,{value:$(e.value,"@","@"+M)})],r);case Mi:if(e.length)return rg(n=e.props,function(o){switch(nt(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":dn(mt(e,{props:[$(o,/:(read-\w+)/,":"+Cr+"$1")]})),dn(mt(e,{props:[o]})),Bs(e,{props:uc(n,r)});break;case"::placeholder":dn(mt(e,{props:[$(o,/:(plac\w+)/,":"+M+"input-$1")]})),dn(mt(e,{props:[$(o,/:(plac\w+)/,":"+Cr+"$1")]})),dn(mt(e,{props:[$(o,/:(plac\w+)/,H+"input-$1")]})),dn(mt(e,{props:[o]})),Bs(e,{props:uc(n,r)});break}return""})}}var yg={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Vn=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",op="active",ip="data-styled-version",Bi="6.1.18",Ha=`/*!sc*/
`,gi=typeof window<"u"&&typeof document<"u",xg=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),Vi=Object.freeze([]),Wn=Object.freeze({});function wg(e,t,n){return n===void 0&&(n=Wn),e.theme!==n.theme&&e.theme||t||n.theme}var lp=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),kg=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Sg=/(^-|-$)/g;function fc(e){return e.replace(kg,"-").replace(Sg,"")}var Cg=/(a)(d)/gi,vo=52,pc=function(e){return String.fromCharCode(e+(e>25?39:97))};function Hs(e){var t,n="";for(t=Math.abs(e);t>vo;t=t/vo|0)n=pc(t%vo)+n;return(pc(t%vo)+n).replace(Cg,"$1-$2")}var xl,sp=5381,jn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},ap=function(e){return jn(sp,e)};function Eg(e){return Hs(ap(e)>>>0)}function jg(e){return e.displayName||e.name||"Component"}function wl(e){return typeof e=="string"&&!0}var up=typeof Symbol=="function"&&Symbol.for,cp=up?Symbol.for("react.memo"):60115,Pg=up?Symbol.for("react.forward_ref"):60112,_g={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Ng={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},dp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},zg=((xl={})[Pg]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},xl[cp]=dp,xl);function hc(e){return("type"in(t=e)&&t.type.$$typeof)===cp?dp:"$$typeof"in e?zg[e.$$typeof]:_g;var t}var Tg=Object.defineProperty,Rg=Object.getOwnPropertyNames,mc=Object.getOwnPropertySymbols,Lg=Object.getOwnPropertyDescriptor,Ig=Object.getPrototypeOf,gc=Object.prototype;function fp(e,t,n){if(typeof t!="string"){if(gc){var r=Ig(t);r&&r!==gc&&fp(e,r,n)}var o=Rg(t);mc&&(o=o.concat(mc(t)));for(var i=hc(e),l=hc(t),s=0;s<o.length;++s){var a=o[s];if(!(a in Ng||n&&n[a]||l&&a in l||i&&a in i)){var c=Lg(t,a);try{Tg(e,a,c)}catch{}}}}return e}function Hn(e){return typeof e=="function"}function Qa(e){return typeof e=="object"&&"styledComponentId"in e}function Gt(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function vc(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Wr(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Qs(e,t,n){if(n===void 0&&(n=!1),!n&&!Wr(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Qs(e[r],t[r]);else if(Wr(t))for(var r in t)e[r]=Qs(e[r],t[r]);return e}function Ya(e,t){Object.defineProperty(e,"toString",{value:t})}function br(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var $g=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw br(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var l=o;l<i;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(t+1),a=(l=0,n.length);l<a;l++)this.tag.insertRule(s,n[l])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,l=o;l<i;l++)n+="".concat(this.tag.getRule(l)).concat(Ha);return n},e}(),Do=new Map,vi=new Map,Ao=1,yo=function(e){if(Do.has(e))return Do.get(e);for(;vi.has(Ao);)Ao++;var t=Ao++;return Do.set(e,t),vi.set(t,e),t},Og=function(e,t){Ao=t+1,Do.set(e,t),vi.set(t,e)},Fg="style[".concat(Vn,"][").concat(ip,'="').concat(Bi,'"]'),Mg=new RegExp("^".concat(Vn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Dg=function(e,t,n){for(var r,o=n.split(","),i=0,l=o.length;i<l;i++)(r=o[i])&&e.registerName(t,r)},Ag=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Ha),o=[],i=0,l=r.length;i<l;i++){var s=r[i].trim();if(s){var a=s.match(Mg);if(a){var c=0|parseInt(a[1],10),m=a[2];c!==0&&(Og(m,c),Dg(e,m,a[3]),e.getTag().insertRules(c,o)),o.length=0}else o.push(s)}}},yc=function(e){for(var t=document.querySelectorAll(Fg),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(Vn)!==op&&(Ag(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function Ug(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var pp=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(s){var a=Array.from(s.querySelectorAll("style[".concat(Vn,"]")));return a[a.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(Vn,op),r.setAttribute(ip,Bi);var l=Ug();return l&&r.setAttribute("nonce",l),n.insertBefore(r,i),r},Bg=function(){function e(t){this.element=pp(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var l=r[o];if(l.ownerNode===n)return l}throw br(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Vg=function(){function e(t){this.element=pp(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Wg=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),xc=gi,Hg={isServer:!gi,useCSSOMInjection:!xg},hp=function(){function e(t,n,r){t===void 0&&(t=Wn),n===void 0&&(n={});var o=this;this.options=we(we({},Hg),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&gi&&xc&&(xc=!1,yc(this)),Ya(this,function(){return function(i){for(var l=i.getTag(),s=l.length,a="",c=function(h){var g=function(f){return vi.get(f)}(h);if(g===void 0)return"continue";var y=i.names.get(g),w=l.getGroup(h);if(y===void 0||!y.size||w.length===0)return"continue";var k="".concat(Vn,".g").concat(h,'[id="').concat(g,'"]'),_="";y!==void 0&&y.forEach(function(f){f.length>0&&(_+="".concat(f,","))}),a+="".concat(w).concat(k,'{content:"').concat(_,'"}').concat(Ha)},m=0;m<s;m++)c(m);return a}(o)})}return e.registerId=function(t){return yo(t)},e.prototype.rehydrate=function(){!this.server&&gi&&yc(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(we(we({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new Wg(o):r?new Bg(o):new Vg(o)}(this.options),new $g(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(yo(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(yo(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(yo(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Qg=/&/g,Yg=/^\s*\/\/.*$/gm;function mp(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=mp(n.children,t)),n})}function Kg(e){var t,n,r,o=e===void 0?Wn:e,i=o.options,l=i===void 0?Wn:i,s=o.plugins,a=s===void 0?Vi:s,c=function(g,y,w){return w.startsWith(n)&&w.endsWith(n)&&w.replaceAll(n,"").length>0?".".concat(t):g},m=a.slice();m.push(function(g){g.type===Mi&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(Qg,n).replace(r,c))}),l.prefix&&m.push(vg),m.push(hg);var h=function(g,y,w,k){y===void 0&&(y=""),w===void 0&&(w=""),k===void 0&&(k="&"),t=k,n=y,r=new RegExp("\\".concat(n,"\\b"),"g");var _=g.replace(Yg,""),f=fg(w||y?"".concat(w," ").concat(y," { ").concat(_," }"):_);l.namespace&&(f=mp(f,l.namespace));var d=[];return mi(f,mg(m.concat(gg(function(p){return d.push(p)})))),d};return h.hash=a.length?a.reduce(function(g,y){return y.name||br(15),jn(g,y.name)},sp).toString():"",h}var Gg=new hp,Ys=Kg(),gp=qt.createContext({shouldForwardProp:void 0,styleSheet:Gg,stylis:Ys});gp.Consumer;qt.createContext(void 0);function wc(){return P.useContext(gp)}var Xg=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=Ys);var l=r.name+i.hash;o.hasNameForId(r.id,l)||o.insertRules(r.id,l,i(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Ya(this,function(){throw br(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Ys),this.name+t.hash},e}(),bg=function(e){return e>="A"&&e<="Z"};function kc(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;bg(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var vp=function(e){return e==null||e===!1||e===""},yp=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!vp(i)&&(Array.isArray(i)&&i.isCss||Hn(i)?r.push("".concat(kc(o),":"),i,";"):Wr(i)?r.push.apply(r,hi(hi(["".concat(o," {")],yp(i),!1),["}"],!1)):r.push("".concat(kc(o),": ").concat((t=o,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in yg||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Jt(e,t,n,r){if(vp(e))return[];if(Qa(e))return[".".concat(e.styledComponentId)];if(Hn(e)){if(!Hn(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return Jt(o,t,n,r)}var i;return e instanceof Xg?n?(e.inject(n,r),[e.getName(r)]):[e]:Wr(e)?yp(e):Array.isArray(e)?Array.prototype.concat.apply(Vi,e.map(function(l){return Jt(l,t,n,r)})):[e.toString()]}function Zg(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Hn(n)&&!Qa(n))return!1}return!0}var Jg=ap(Bi),qg=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Zg(t),this.componentId=n,this.baseHash=jn(Jg,n),this.baseStyle=r,hp.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=Gt(o,this.staticRulesId);else{var i=vc(Jt(this.rules,t,n,r)),l=Hs(jn(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,l)){var s=r(i,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,s)}o=Gt(o,l),this.staticRulesId=l}else{for(var a=jn(this.baseHash,r.hash),c="",m=0;m<this.rules.length;m++){var h=this.rules[m];if(typeof h=="string")c+=h;else if(h){var g=vc(Jt(h,t,n,r));a=jn(a,g+m),c+=g}}if(c){var y=Hs(a>>>0);n.hasNameForId(this.componentId,y)||n.insertRules(this.componentId,y,r(c,".".concat(y),void 0,this.componentId)),o=Gt(o,y)}}return o},e}(),xp=qt.createContext(void 0);xp.Consumer;var kl={};function ev(e,t,n){var r=Qa(e),o=e,i=!wl(e),l=t.attrs,s=l===void 0?Vi:l,a=t.componentId,c=a===void 0?function(v,C){var j=typeof v!="string"?"sc":fc(v);kl[j]=(kl[j]||0)+1;var S="".concat(j,"-").concat(Eg(Bi+j+kl[j]));return C?"".concat(C,"-").concat(S):S}(t.displayName,t.parentComponentId):a,m=t.displayName,h=m===void 0?function(v){return wl(v)?"styled.".concat(v):"Styled(".concat(jg(v),")")}(e):m,g=t.displayName&&t.componentId?"".concat(fc(t.displayName),"-").concat(t.componentId):t.componentId||c,y=r&&o.attrs?o.attrs.concat(s).filter(Boolean):s,w=t.shouldForwardProp;if(r&&o.shouldForwardProp){var k=o.shouldForwardProp;if(t.shouldForwardProp){var _=t.shouldForwardProp;w=function(v,C){return k(v,C)&&_(v,C)}}else w=k}var f=new qg(n,g,r?o.componentStyle:void 0);function d(v,C){return function(j,S,T){var A=j.attrs,I=j.componentStyle,pe=j.defaultProps,Dt=j.foldedComponentIds,At=j.styledComponentId,Zr=j.target,Wi=qt.useContext(xp),Zn=wc(),Ut=j.shouldForwardProp||Zn.shouldForwardProp,N=wg(S,Wi,pe)||Wn,R=function(ft,Ee,et){for(var Jn,Vt=we(we({},Ee),{className:void 0,theme:et}),Hi=0;Hi<ft.length;Hi+=1){var Jr=Hn(Jn=ft[Hi])?Jn(Vt):Jn;for(var pt in Jr)Vt[pt]=pt==="className"?Gt(Vt[pt],Jr[pt]):pt==="style"?we(we({},Vt[pt]),Jr[pt]):Jr[pt]}return Ee.className&&(Vt.className=Gt(Vt.className,Ee.className)),Vt}(A,S,N),L=R.as||Zr,U={};for(var B in R)R[B]===void 0||B[0]==="$"||B==="as"||B==="theme"&&R.theme===N||(B==="forwardedAs"?U.as=R.forwardedAs:Ut&&!Ut(B,L)||(U[B]=R[B]));var Bt=function(ft,Ee){var et=wc(),Jn=ft.generateAndInjectStyles(Ee,et.styleSheet,et.stylis);return Jn}(I,R),De=Gt(Dt,At);return Bt&&(De+=" "+Bt),R.className&&(De+=" "+R.className),U[wl(L)&&!lp.has(L)?"class":"className"]=De,T&&(U.ref=T),P.createElement(L,U)}(p,v,C)}d.displayName=h;var p=qt.forwardRef(d);return p.attrs=y,p.componentStyle=f,p.displayName=h,p.shouldForwardProp=w,p.foldedComponentIds=r?Gt(o.foldedComponentIds,o.styledComponentId):"",p.styledComponentId=g,p.target=r?o.target:e,Object.defineProperty(p,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=r?function(C){for(var j=[],S=1;S<arguments.length;S++)j[S-1]=arguments[S];for(var T=0,A=j;T<A.length;T++)Qs(C,A[T],!0);return C}({},o.defaultProps,v):v}}),Ya(p,function(){return".".concat(p.styledComponentId)}),i&&fp(p,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),p}function Sc(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var Cc=function(e){return Object.assign(e,{isCss:!0})};function tv(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Hn(e)||Wr(e))return Cc(Jt(Sc(Vi,hi([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Jt(r):Cc(Jt(Sc(r,t)))}function Ks(e,t,n){if(n===void 0&&(n=Wn),!t)throw br(1,t);var r=function(o){for(var i=[],l=1;l<arguments.length;l++)i[l-1]=arguments[l];return e(t,n,tv.apply(void 0,hi([o],i,!1)))};return r.attrs=function(o){return Ks(e,t,we(we({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return Ks(e,t,we(we({},n),o))},r}var wp=function(e){return Ks(ev,e)},x=wp;lp.forEach(function(e){x[e]=wp(e)});const nv=x.header`
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
  transition: transform 0.3s ease;
  
  ${({hide:e})=>e&&`
    transform: translateY(-100%);
  `}
`,rv=x.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`,ov=x(un)`
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary-color);
  display: flex;
  align-items: center;
  
  &:hover {
    color: var(--primary-color);
  }
  
  .logo-icon {
    margin-right: 8px;
    font-size: 1.8rem;
  }
`,iv=x.ul`
  display: flex;
  list-style: none;
  margin: 0;
  
  @media (max-width: 768px) {
    position: fixed;
    flex-direction: column;
    background-color: white;
    top: 60px;
    left: 0;
    right: 0;
    height: ${({isOpen:e})=>e?"calc(100vh - 60px)":"0"};
    opacity: ${({isOpen:e})=>e?"1":"0"};
    overflow: hidden;
    transition: all 0.3s ease;
    box-shadow: ${({isOpen:e})=>e?"0 4px 8px rgba(0, 0, 0, 0.1)":"none"};
    z-index: 99;
  }
`,sr=x.li`
  margin: 0 1rem;
  position: relative;
  
  @media (max-width: 768px) {
    margin: 1.5rem 0;
    text-align: center;
  }
`,ar=x(b0)`
  color: var(--text-color);
  transition: color 0.3s ease;
  padding: 0.5rem 0;
  position: relative;
  font-weight: 500;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--secondary-color);
    transition: width 0.3s ease;
  }
  
  &.active {
    color: var(--secondary-color);
    
    &::after {
      width: 100%;
    }
  }
  
  &:hover {
    color: var(--secondary-color);
    
    &::after {
      width: 100%;
    }
  }
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
    display: inline-block;
    
    &::after {
      bottom: 0;
      height: 3px;
    }
  }
`,lv=x.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  transition: transform 0.3s ease;
  color: var(--primary-color);
  padding: 0.5rem;
  
  &:hover {
    transform: scale(1.1);
  }
  
  @media (max-width: 768px) {
    display: block;
  }
`;function sv(){const[e,t]=P.useState(!1),[n,r]=P.useState(!1),[o,i]=P.useState(0),l=Xn(),s=()=>{t(!e)};return P.useEffect(()=>{const a=()=>{const c=window.scrollY;c>200&&c>o?r(!0):r(!1),i(c)};return window.addEventListener("scroll",a),()=>{window.removeEventListener("scroll",a)}},[o]),P.useEffect(()=>{t(!1)},[l]),P.useEffect(()=>(e?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[e]),u.jsx(nv,{hide:n&&!e,children:u.jsx("div",{className:"container",children:u.jsxs(rv,{children:[u.jsxs(ov,{to:"/",children:[u.jsx("span",{className:"logo-icon",children:"🏠"}),u.jsx("span",{children:"我的网站"})]}),u.jsx(lv,{onClick:s,"aria-label":"菜单",children:e?"✕":"☰"}),u.jsxs(iv,{isOpen:e,children:[u.jsx(sr,{children:u.jsx(ar,{to:"/",end:!0,children:"首页"})}),u.jsx(sr,{children:u.jsx(ar,{to:"/products",children:"产品"})}),u.jsx(sr,{children:u.jsx(ar,{to:"/media",children:"自媒体"})}),u.jsx(sr,{children:u.jsx(ar,{to:"/about",children:"关于我"})}),u.jsx(sr,{children:u.jsx(ar,{to:"/contact",children:"联系方式"})})]})]})})})}const av=x.footer`
  background-color: var(--dark-color);
  color: white;
  padding: 4rem 0 2rem;
`,uv=x.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,xo=x.div`
  display: flex;
  flex-direction: column;
`,wo=x.h3`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -0.5rem;
    width: 2rem;
    height: 2px;
    background-color: var(--secondary-color);
  }
`,Ue=x(un)`
  color: #ccc;
  margin-bottom: 0.8rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: white;
  }
`,cv=x.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`,Sl=x.a`
  color: white;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: var(--primary-color);
  }
  
  &.bilibili {
    background-color: rgba(251, 114, 153, 0.2);
    &:hover {
      background-color: #FB7299;
    }
  }
  
  &.xiaohongshu {
    background-color: rgba(254, 44, 85, 0.2);
    &:hover {
      background-color: #FE2C55;
    }
  }
  
  &.zhihu {
    background-color: rgba(0, 132, 255, 0.2);
    &:hover {
      background-color: #0084FF;
    }
  }
`,dv=x.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.9rem;
  color: #aaa;
`;function fv(){const e=new Date().getFullYear();return u.jsx(av,{children:u.jsxs("div",{className:"container",children:[u.jsxs(uv,{children:[u.jsxs(xo,{children:[u.jsx(wo,{children:"导航"}),u.jsx(Ue,{to:"/",children:"首页"}),u.jsx(Ue,{to:"/products",children:"产品"}),u.jsx(Ue,{to:"/media",children:"自媒体"}),u.jsx(Ue,{to:"/about",children:"关于我"}),u.jsx(Ue,{to:"/contact",children:"联系方式"})]}),u.jsxs(xo,{children:[u.jsx(wo,{children:"产品"}),u.jsx(Ue,{to:"/products/product1",children:"产品1"}),u.jsx(Ue,{to:"/products/product2",children:"产品2"}),u.jsx(Ue,{to:"/products/product3",children:"产品3"})]}),u.jsxs(xo,{children:[u.jsx(wo,{children:"自媒体"}),u.jsx(Ue,{as:"a",href:"https://space.bilibili.com/24543451",target:"_blank",rel:"noopener noreferrer",children:"哔哩哔哩"}),u.jsx(Ue,{as:"a",href:"https://www.xiaohongshu.com",target:"_blank",rel:"noopener noreferrer",children:"小红书"}),u.jsx(Ue,{as:"a",href:"https://www.zhihu.com",target:"_blank",rel:"noopener noreferrer",children:"知乎"})]}),u.jsxs(xo,{children:[u.jsx(wo,{children:"联系我"}),u.jsx("p",{children:"邮箱：contact@example.com"}),u.jsxs(cv,{children:[u.jsx(Sl,{href:"https://space.bilibili.com/24543451",target:"_blank",rel:"noopener noreferrer",className:"bilibili",children:"哔"}),u.jsx(Sl,{href:"https://www.xiaohongshu.com",target:"_blank",rel:"noopener noreferrer",className:"xiaohongshu",children:"小"}),u.jsx(Sl,{href:"https://www.zhihu.com",target:"_blank",rel:"noopener noreferrer",className:"zhihu",children:"知"})]})]})]}),u.jsx(dv,{children:u.jsxs("p",{children:["© ",e," 我的个人网站. 保留所有权利."]})})]})})}const pv=x.section`
  height: 90vh;
  min-height: 600px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  text-align: center;
  color: white;
`,hv=x.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
`,mv=x.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,gv=x.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`,vv=x.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`,Ec=x(un)`
  display: inline-block;
  padding: 12px 30px;
  border-radius: 4px;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &.primary {
    background-color: var(--primary-color);
    color: white;
    
    &:hover {
      background-color: #3348a0;
    }
  }
  
  &.secondary {
    background-color: transparent;
    border: 2px solid white;
    color: white;
    
    &:hover {
      background-color: white;
      color: var(--dark-color);
    }
  }
`,yv=x.section`
  padding: 100px 0;
`,xv=x.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`,Cl=x.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  padding: 30px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`,El=x.div`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: var(--primary-color);
`,jl=x.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
`,Pl=x.p`
  color: #666;
  line-height: 1.6;
`,wv=x.section`
  padding: 100px 0;
  background-color: #f9f9f9;
`,kv=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 50px;
`,_l=x.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`,Nl=x.div`
  height: 200px;
  background-color: #eee;
  background-image: url('/product-placeholder.jpg');
  background-size: cover;
  background-position: center;
`,zl=x.div`
  padding: 20px;
`,Tl=x.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
`,Rl=x.p`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 15px;
`,Ll=x(un)`
  display: inline-block;
  padding: 8px 20px;
  background-color: var(--primary-color);
  color: white;
  border-radius: 4px;
  font-size: 0.9rem;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #3348a0;
  }
`,Sv=x.section`
  padding: 100px 0;
`,Cv=x.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 50px;
`,Il=x.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  text-decoration: none;
  color: var(--text-color);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`,$l=x.div`
  width: 80px;
  height: 80px;
  background-color: var(--primary-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
  margin-bottom: 15px;
  
  &.bilibili {
    background-color: #FB7299;
  }
  
  &.xiaohongshu {
    background-color: #FE2C55;
  }
  
  &.zhihu {
    background-color: #0084FF;
  }
`,Ol=x.h3`
  font-size: 1.2rem;
  margin-bottom: 5px;
`,Fl=x.p`
  color: #666;
  font-size: 0.9rem;
`,Ev=x.section`
  padding: 80px 0;
  background-color: var(--primary-color);
  color: white;
  text-align: center;
`,jv=x.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,Pv=x.p`
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto 30px;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,_v=x(un)`
  display: inline-block;
  padding: 15px 40px;
  background-color: white;
  color: var(--primary-color);
  border-radius: 4px;
  font-weight: 500;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
    transform: translateY(-5px);
  }
`;function Nv(){return u.jsxs(u.Fragment,{children:[u.jsx(pv,{children:u.jsxs(hv,{children:[u.jsx(mv,{children:"欢迎访问我的个人网站"}),u.jsx(gv,{children:"这里展示我的产品、自媒体频道以及个人信息"}),u.jsxs(vv,{children:[u.jsx(Ec,{to:"/products",className:"primary",children:"了解产品"}),u.jsx(Ec,{to:"/media",className:"secondary",children:"查看自媒体"})]})]})}),u.jsx(yv,{children:u.jsxs("div",{className:"container",children:[u.jsx("h2",{className:"section-title",children:"我的特色"}),u.jsxs(xv,{children:[u.jsxs(Cl,{children:[u.jsx(El,{children:"🚀"}),u.jsx(jl,{children:"创新产品"}),u.jsx(Pl,{children:"我设计并开发了多款实用的产品和应用，致力于解决用户实际问题。"})]}),u.jsxs(Cl,{children:[u.jsx(El,{children:"📱"}),u.jsx(jl,{children:"自媒体平台"}),u.jsx(Pl,{children:"在多个平台分享专业知识和见解，帮助他人成长和学习。"})]}),u.jsxs(Cl,{children:[u.jsx(El,{children:"👨‍💻"}),u.jsx(jl,{children:"技术专长"}),u.jsx(Pl,{children:"拥有丰富的技术背景和专业知识，能够提供高质量的解决方案。"})]})]})]})}),u.jsx(wv,{children:u.jsxs("div",{className:"container",children:[u.jsx("h2",{className:"section-title",children:"我的产品"}),u.jsxs(kv,{children:[u.jsxs(_l,{children:[u.jsx(Nl,{style:{backgroundImage:"url('/product1.jpg')"}}),u.jsxs(zl,{children:[u.jsx(Tl,{children:"产品一"}),u.jsx(Rl,{children:"这是我开发的第一个产品，旨在解决特定问题并提供优质用户体验。"}),u.jsx(Ll,{to:"/products/product1",children:"查看详情"})]})]}),u.jsxs(_l,{children:[u.jsx(Nl,{style:{backgroundImage:"url('/product2.jpg')"}}),u.jsxs(zl,{children:[u.jsx(Tl,{children:"产品二"}),u.jsx(Rl,{children:"这是我开发的第二个产品，具有独特功能和设计理念。"}),u.jsx(Ll,{to:"/products/product2",children:"查看详情"})]})]}),u.jsxs(_l,{children:[u.jsx(Nl,{style:{backgroundImage:"url('/product3.jpg')"}}),u.jsxs(zl,{children:[u.jsx(Tl,{children:"产品三"}),u.jsx(Rl,{children:"这是我开发的第三个产品，专注于用户需求和体验。"}),u.jsx(Ll,{to:"/products/product3",children:"查看详情"})]})]})]})]})}),u.jsx(Sv,{children:u.jsxs("div",{className:"container",children:[u.jsx("h2",{className:"section-title",children:"我的自媒体频道"}),u.jsxs(Cv,{children:[u.jsxs(Il,{href:"https://space.bilibili.com/24543451",target:"_blank",rel:"noopener noreferrer",children:[u.jsx($l,{className:"bilibili",children:"哔"}),u.jsx(Ol,{children:"哔哩哔哩"}),u.jsx(Fl,{children:"100K+ 粉丝"})]}),u.jsxs(Il,{href:"https://www.xiaohongshu.com",target:"_blank",rel:"noopener noreferrer",children:[u.jsx($l,{className:"xiaohongshu",children:"小"}),u.jsx(Ol,{children:"小红书"}),u.jsx(Fl,{children:"10K+ 粉丝"})]}),u.jsxs(Il,{href:"https://www.zhihu.com",target:"_blank",rel:"noopener noreferrer",children:[u.jsx($l,{className:"zhihu",children:"知"}),u.jsx(Ol,{children:"知乎"}),u.jsx(Fl,{children:"8K+ 关注者"})]})]})]})}),u.jsx(Ev,{children:u.jsxs("div",{className:"container",children:[u.jsx(jv,{children:"想了解更多?"}),u.jsx(Pv,{children:"如果你对我的产品或自媒体内容感兴趣，或者想要合作，请随时联系我。"}),u.jsx(_v,{to:"/contact",children:"联系我"})]})})]})}const zv=x.div`
  background-color: var(--primary-color);
  color: white;
  padding: 80px 0;
  text-align: center;
`,Tv=x.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`,Rv=x.p`
  max-width: 700px;
  margin: 0 auto;
  font-size: 1.2rem;
  opacity: 0.9;
`,Lv=x.div`
  padding: 80px 0;
`,Iv=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 40px;
  margin-top: 60px;
`,$v=x.div`
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`,Ov=x.div`
  height: 250px;
  background-color: #eee;
  background-size: cover;
  background-position: center;
`,Fv=x.div`
  padding: 30px;
`,Mv=x.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: var(--primary-color);
`,Dv=x.p`
  color: #666;
  margin-bottom: 20px;
  line-height: 1.6;
`,Av=x.ul`
  margin: 20px 0;
  padding-left: 20px;
  
  li {
    margin-bottom: 10px;
    color: #555;
  }
`,Uv=x(un)`
  display: inline-block;
  padding: 10px 25px;
  background-color: var(--primary-color);
  color: white;
  border-radius: 5px;
  font-weight: 500;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #3348a0;
  }
`;function Bv(){const e=[{id:"product1",name:"产品一",image:"/product1.jpg",overview:"这是一款创新的产品，旨在解决特定领域的问题。它结合了先进技术和用户友好的设计。",features:["特点1: 高效的性能和可靠性","特点2: 直观的用户界面","特点3: 全面的功能套件","特点4: 安全的数据处理"]},{id:"product2",name:"产品二",image:"/product2.jpg",overview:"这款产品专注于提供卓越的用户体验和实用功能。它是为特定用户群体设计的理想解决方案。",features:["特点1: 可定制的界面","特点2: 实时数据分析","特点3: 多平台支持","特点4: 自动化工作流程"]},{id:"product3",name:"产品三",image:"/product3.jpg",overview:"我们的第三款产品结合了前两款产品的优点，并添加了新功能，提供了更全面的解决方案。",features:["特点1: 高级数据可视化","特点2: 智能推荐系统","特点3: 深度集成能力","特点4: 离线工作模式"]}];return u.jsxs(u.Fragment,{children:[u.jsx(zv,{children:u.jsxs("div",{className:"container",children:[u.jsx(Tv,{children:"我的产品"}),u.jsx(Rv,{children:"探索我开发的各种产品，每一款都旨在解决特定问题并提供卓越的用户体验。"})]})}),u.jsx(Lv,{children:u.jsx("div",{className:"container",children:u.jsx(Iv,{children:e.map(t=>u.jsxs($v,{children:[u.jsx(Ov,{style:{backgroundImage:`url(${t.image})`}}),u.jsxs(Fv,{children:[u.jsx(Mv,{children:t.name}),u.jsx(Dv,{children:t.overview}),u.jsx(Av,{children:t.features.map((n,r)=>u.jsx("li",{children:n},r))}),u.jsx(Uv,{to:`/products/${t.id}`,children:"了解更多"})]})]},t.id))})})})]})}const Vv=x.div`
  background-color: var(--secondary-color);
  color: white;
  padding: 80px 0;
  text-align: center;
`,Wv=x.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`,Hv=x.p`
  max-width: 700px;
  margin: 0 auto;
  font-size: 1.2rem;
  opacity: 0.9;
`,Qv=x.div`
  padding: 80px 0;
`,Yv=x.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 50px;
  margin-top: 60px;
`,Kv=x.div`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`,Gv=x.div`
  min-width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-color);
  font-size: 4rem;
  color: white;
  padding: 2rem;
  
  &.bilibili {
    background-color: #FB7299;
  }
  
  &.xiaohongshu {
    background-color: #FE2C55;
  }
  
  &.zhihu {
    background-color: #0084FF;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    height: 150px;
  }
`,Xv=x.div`
  padding: 30px;
  flex: 1;
`,bv=x.h3`
  font-size: 1.8rem;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  
  a {
    color: var(--primary-color);
    margin-left: 10px;
    transition: color 0.3s ease;
    
    &:hover {
      color: var(--secondary-color);
    }
    
    &.bilibili {
      color: #FB7299;
      
      &:hover {
        color: #d4427e;
      }
    }
  }
  
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
    
    a {
      margin-left: 0;
      margin-top: 5px;
    }
  }
`,Zv=x.div`
  display: flex;
  gap: 30px;
  margin-bottom: 20px;
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 10px;
  }
`,jc=x.div`
  display: flex;
  align-items: center;
  
  span:first-child {
    font-weight: bold;
    margin-right: 5px;
  }
  
  span:last-child {
    color: #666;
  }
`,Jv=x.p`
  color: #555;
  line-height: 1.7;
  margin-bottom: 20px;
`,qv=x.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
`,e1=x.span`
  background-color: #f0f0f0;
  color: #333;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
  
  &.bilibili {
    background-color: rgba(251, 114, 153, 0.1);
    color: #FB7299;
  }
  
  &.xiaohongshu {
    background-color: rgba(254, 44, 85, 0.1);
    color: #FE2C55;
  }
  
  &.zhihu {
    background-color: rgba(0, 132, 255, 0.1);
    color: #0084FF;
  }
`,t1=x.a`
  display: inline-block;
  padding: 10px 25px;
  background-color: var(--primary-color);
  color: white;
  border-radius: 5px;
  font-weight: 500;
  text-decoration: none;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: var(--primary-color-dark);
    color: white;
  }
  
  &.bilibili {
    background-color: #FB7299;
    
    &:hover {
      background-color: #d4427e;
    }
  }
  
  &.xiaohongshu {
    background-color: #FE2C55;
    
    &:hover {
      background-color: #e1234a;
    }
  }
  
  &.zhihu {
    background-color: #0084FF;
    
    &:hover {
      background-color: #0076e6;
    }
  }
`,n1=x.div`
  margin-top: 20px;
  
  h4 {
    font-size: 1.1rem;
    margin-bottom: 15px;
    color: #444;
    display: flex;
    align-items: center;
    
    .more-videos {
      margin-left: auto;
      font-size: 0.9rem;
      color: #FB7299;
      font-weight: normal;
      
      &:hover {
        text-decoration: underline;
      }
    }
  }
`,r1=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 15px;
  
  @media (max-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,o1=x.a`
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`,i1=x.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 8px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  
  &::before {
    content: "";
    display: block;
    padding-top: 56.25%; /* 16:9 宽高比 */
  }
  
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  .play-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40px;
    height: 40px;
    background-color: rgba(251, 114, 153, 0.8);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    
    &::after {
      content: "▶";
      color: white;
      font-size: 16px;
    }
  }
  
  &:hover {
    img {
      transform: scale(1.05);
    }
    
    .play-icon {
      opacity: 1;
    }
  }
  
  .duration {
    position: absolute;
    bottom: 5px;
    right: 5px;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    font-size: 0.8rem;
    padding: 2px 5px;
    border-radius: 3px;
  }
  
  .views {
    position: absolute;
    bottom: 5px;
    left: 5px;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    font-size: 0.8rem;
    padding: 2px 5px;
    border-radius: 3px;
  }
`,l1=x.p`
  font-size: 0.9rem;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;function s1(){const[e,t]=P.useState([]),[n,r]=P.useState(!1);P.useEffect(()=>{r(!0),t([{title:"如何用React构建个人网站 - 从零开始的前端开发",thumbnail:"/video-thumb1.jpg",url:"https://www.bilibili.com/video/example1",duration:"15:42",views:"2.3万"},{title:"Docker容器化部署指南 - NAS服务器最佳实践",thumbnail:"/video-thumb2.jpg",url:"https://www.bilibili.com/video/example2",duration:"12:18",views:"1.8万"},{title:"前端性能优化的10个技巧 - 让你的网站飞起来",thumbnail:"/video-thumb3.jpg",url:"https://www.bilibili.com/video/example3",duration:"20:05",views:"3.5万"},{title:"JavaScript高级技巧与设计模式实战",thumbnail:"/video-thumb4.jpg",url:"https://www.bilibili.com/video/example4",duration:"25:33",views:"4.1万"}]),r(!1)},[]);const o=[{id:"bilibili",name:"Bilibili",icon:"哔",username:"24543451",url:"https://space.bilibili.com/24543451",followers:"100K+",posts:"50+",description:"在B站主要分享编程、技术分析和个人项目展示的内容。通过视频形式，展示有趣的开发过程和技术应用，帮助更多人了解和掌握相关知识。",contentTypes:["技术教程","编程分享","项目展示","开发日志"],className:"bilibili",videos:e},{id:"xiaohongshu",name:"小红书",icon:"小",username:"@我的小红书账号",url:"https://www.xiaohongshu.com",followers:"10K+",posts:"200+",description:"在小红书上，我分享个人技术成长、效率工具使用和工作生活平衡的内容。通过图文并茂的方式，为大家带来有价值的信息和经验分享。",contentTypes:["技术应用","效率工具","成长经验","生活方式"],className:"xiaohongshu"},{id:"zhihu",name:"知乎",icon:"知",username:"@我的知乎账号",url:"https://www.zhihu.com",followers:"8K+",posts:"100+",description:"在知乎平台，我主要回答关于编程技术、职业发展和行业趋势的问题。通过深度分析和专业知识，为读者提供有见地的观点和实用建议。",contentTypes:["技术问答","职业发展","行业趋势","经验分享"],className:"zhihu"}];return u.jsxs(u.Fragment,{children:[u.jsx(Vv,{children:u.jsxs("div",{className:"container",children:[u.jsx(Wv,{children:"我的自媒体频道"}),u.jsx(Hv,{children:"在这里了解我的各个自媒体平台，通过这些渠道我分享专业知识、技术见解和个人经验。"})]})}),u.jsx(Qv,{children:u.jsx("div",{className:"container",children:u.jsx(Yv,{children:o.map(i=>u.jsxs(Kv,{children:[u.jsx(Gv,{className:i.className,children:i.icon}),u.jsxs(Xv,{children:[u.jsxs(bv,{children:[i.name,u.jsx("a",{href:i.url,target:"_blank",rel:"noopener noreferrer",className:i.className,children:i.id==="bilibili"?`UID: ${i.username}`:i.username})]}),u.jsxs(Zv,{children:[u.jsxs(jc,{children:[u.jsx("span",{children:"粉丝:"}),u.jsx("span",{children:i.followers})]}),u.jsxs(jc,{children:[u.jsx("span",{children:"内容:"}),u.jsx("span",{children:i.posts})]})]}),u.jsx(Jv,{children:i.description}),u.jsx(qv,{children:i.contentTypes.map((l,s)=>u.jsx(e1,{className:i.className,children:l},s))}),i.id==="bilibili"&&i.videos&&i.videos.length>0&&u.jsxs(n1,{children:[u.jsxs("h4",{children:["最近上传视频",u.jsx("a",{href:`${i.url}/video`,target:"_blank",rel:"noopener noreferrer",className:"more-videos",children:"查看更多 →"})]}),n?u.jsx("div",{children:"加载中..."}):u.jsx(r1,{children:i.videos.map((l,s)=>u.jsxs(o1,{href:l.url,target:"_blank",rel:"noopener noreferrer",children:[u.jsxs(i1,{children:[u.jsx("img",{src:l.thumbnail,alt:l.title}),u.jsx("div",{className:"play-icon"}),u.jsx("div",{className:"duration",children:l.duration}),u.jsx("div",{className:"views",children:l.views})]}),u.jsx(l1,{children:l.title})]},s))})]}),u.jsx("div",{style:{marginTop:"25px"},children:u.jsx(t1,{href:i.url,target:"_blank",rel:"noopener noreferrer",className:i.className,children:i.id==="bilibili"?"一键三连":"关注我"})})]})]},i.id))})})})]})}const a1=x.div`
  background-color: var(--accent-color);
  color: white;
  padding: 80px 0;
  text-align: center;
`,u1=x.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`,c1=x.p`
  max-width: 700px;
  margin: 0 auto;
  font-size: 1.2rem;
  opacity: 0.9;
`,d1=x.section`
  padding: 80px 0;
`,f1=x.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,p1=x.div`
  width: 100%;
  height: 400px;
  background-color: #eee;
  background-image: url('/about.jpg');
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  
  @media (max-width: 768px) {
    height: 300px;
    order: 1;
  }
`,h1=x.div`
  @media (max-width: 768px) {
    order: 2;
  }
`,m1=x.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: var(--primary-color);
`,Ml=x.p`
  color: var(--text-color);
  margin-bottom: 20px;
  line-height: 1.8;
  font-size: 1.1rem;
`,g1=x.section`
  padding: 80px 0;
  background-color: #f9f9f9;
`,v1=x.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`,y1=x.div`
  background-color: white;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`,x1=x.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: var(--primary-color);
`,w1=x.div`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: var(--primary-color);
`,k1=x.p`
  color: #666;
  line-height: 1.6;
`,S1=x.section`
  padding: 80px 0;
`,C1=x.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 0;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    background-color: #eee;
    
    @media (max-width: 768px) {
      left: 30px;
    }
  }
`,E1=x.div`
  position: relative;
  margin-bottom: 50px;
  display: flex;
  
  &:nth-child(even) {
    flex-direction: row-reverse;
    
    @media (max-width: 768px) {
      flex-direction: row;
    }
  }
  
  @media (max-width: 768px) {
    margin-left: 30px;
  }
`,j1=x.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 20px;
  background-color: var(--primary-color);
  border-radius: 50%;
  
  @media (max-width: 768px) {
    left: -30px;
  }
`,P1=x.div`
  width: calc(50% - 30px);
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  
  @media (max-width: 768px) {
    width: 100%;
  }
`,_1=x.div`
  font-weight: bold;
  color: var(--primary-color);
  margin-bottom: 10px;
`,N1=x.h3`
  font-size: 1.3rem;
  margin-bottom: 10px;
`,z1=x.p`
  color: #666;
`;function T1(){const e=[{id:1,title:"产品开发",icon:"💡",description:"我擅长从构思到执行的整个产品开发周期，包括需求分析、原型设计、开发和发布。"},{id:2,title:"内容创作",icon:"📝",description:"具有丰富的内容创作经验，能够制作高质量的文字、图像和视频内容，吸引和留住目标受众。"},{id:3,title:"用户体验设计",icon:"🎨",description:"专注于创建直观、易用的用户界面和体验，确保产品既美观又实用。"},{id:4,title:"社交媒体营销",icon:"📱",description:"精通各大自媒体平台的运营和推广，能够有效地扩大品牌影响力和增加粉丝互动。"},{id:5,title:"数据分析",icon:"📊",description:"善于收集和分析用户数据，为产品决策提供依据，优化用户体验和业务流程。"},{id:6,title:"团队协作",icon:"👥",description:"具有良好的沟通能力和团队合作精神，能够在团队中有效协作并达成共同目标。"}],t=[{id:1,date:"2020 - 至今",title:"自由职业者 & 创作者",description:"开发个人产品并在各大自媒体平台分享技术和生活内容，积累了大量粉丝和良好口碑。"},{id:2,date:"2018 - 2020",title:"高级产品经理 @ 科技公司",description:"负责多个产品的规划和开发，带领团队从零到一打造了多款成功的应用。"},{id:3,date:"2015 - 2018",title:"软件工程师 @ 互联网企业",description:"参与开发多个大型web和移动应用项目，负责前端和后端开发工作。"},{id:4,date:"2011 - 2015",title:"大学 @ 计算机科学专业",description:"获得计算机科学学士学位，深入学习编程、算法和软件开发理论。"}];return u.jsxs(u.Fragment,{children:[u.jsx(a1,{children:u.jsxs("div",{className:"container",children:[u.jsx(u1,{children:"关于我"}),u.jsx(c1,{children:"了解我的背景、技能和经验。"})]})}),u.jsx(d1,{children:u.jsx("div",{className:"container",children:u.jsxs(f1,{children:[u.jsxs(h1,{children:[u.jsx(m1,{children:"我是谁？"}),u.jsx(Ml,{children:"您好！我是一名充满热情的创作者和产品开发者，致力于通过技术和内容创作为用户带来价值。"}),u.jsx(Ml,{children:"多年来，我积累了丰富的产品开发和内容创作经验，涉足多个领域包括软件开发、用户体验设计和自媒体运营。 我相信好的产品应该既实用又易用，同时能够解决实际问题。"}),u.jsx(Ml,{children:"在我的自媒体平台上，我分享关于技术、生活方式和个人成长的内容，希望能够帮助更多人成长和进步。 期待与您在内容和产品领域有更多的交流和合作！"})]}),u.jsx(p1,{})]})})}),u.jsx(g1,{children:u.jsxs("div",{className:"container",children:[u.jsx("h2",{className:"section-title",children:"我的技能"}),u.jsx(v1,{children:e.map(n=>u.jsxs(y1,{children:[u.jsx(w1,{children:n.icon}),u.jsx(x1,{children:n.title}),u.jsx(k1,{children:n.description})]},n.id))})]})}),u.jsx(S1,{children:u.jsxs("div",{className:"container",children:[u.jsx("h2",{className:"section-title",children:"我的经历"}),u.jsx(C1,{children:t.map(n=>u.jsxs(E1,{children:[u.jsx(j1,{}),u.jsxs(P1,{children:[u.jsx(_1,{children:n.date}),u.jsx(N1,{children:n.title}),u.jsx(z1,{children:n.description})]})]},n.id))})]})})]})}const R1=x.div`
  background-color: var(--primary-color);
  color: white;
  padding: 80px 0;
  text-align: center;
`,L1=x.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`,I1=x.p`
  max-width: 700px;
  margin: 0 auto;
  font-size: 1.2rem;
  opacity: 0.9;
`,$1=x.section`
  padding: 80px 0;
`,O1=x.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,F1=x.div`
  @media (max-width: 768px) {
    order: 2;
  }
`,M1=x.h2`
  font-size: 2rem;
  margin-bottom: 30px;
  color: var(--primary-color);
`,D1=x.div`
  margin-bottom: 30px;
`,Dl=x.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
`,Al=x.div`
  width: 50px;
  height: 50px;
  background-color: var(--primary-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  margin-right: 15px;
  flex-shrink: 0;
`,Ul=x.div`
  color: var(--text-color);
`,Bl=x.h3`
  font-size: 1.2rem;
  margin-bottom: 5px;
`,Vl=x.p`
  line-height: 1.6;
`,A1=x.a`
  color: var(--primary-color);
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--secondary-color);
  }
`,U1=x.div`
  display: flex;
  gap: 15px;
  margin-top: 30px;
`,Wl=x.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 50%;
  color: var(--text-color);
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--primary-color);
    color: white;
  }
`,B1=x.div`
  @media (max-width: 768px) {
    order: 1;
  }
`,V1=x.form`
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`,W1=x.h2`
  font-size: 1.8rem;
  margin-bottom: 30px;
  color: var(--primary-color);
`,ko=x.div`
  margin-bottom: 20px;
`,So=x.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: var(--text-color);
`,Hl=x.input`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  
  &:focus {
    border-color: var(--primary-color);
    outline: none;
  }
`,H1=x.textarea`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  min-height: 150px;
  transition: border-color 0.3s ease;
  
  &:focus {
    border-color: var(--primary-color);
    outline: none;
  }
`,Q1=x.button`
  display: inline-block;
  padding: 12px 30px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #3348a0;
  }
  
  &:disabled {
    background-color: #aaa;
    cursor: not-allowed;
  }
`,Y1=x.section`
  padding: 50px 0 80px;
`,K1=x.div`
  width: 100%;
  height: 400px;
  background-color: #eee;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #777;
  font-size: 1.2rem;
`;function G1(){const[e,t]=P.useState({name:"",email:"",subject:"",message:""}),[n,r]=P.useState(!1),[o,i]=P.useState(!1),l=a=>{const{name:c,value:m}=a.target;t(h=>({...h,[c]:m}))},s=a=>{a.preventDefault(),r(!0),setTimeout(()=>{console.log("Form submitted:",e),t({name:"",email:"",subject:"",message:""}),r(!1),i(!0),setTimeout(()=>{i(!1)},5e3)},1500)};return u.jsxs(u.Fragment,{children:[u.jsx(R1,{children:u.jsxs("div",{className:"container",children:[u.jsx(L1,{children:"联系我"}),u.jsx(I1,{children:"如果您有任何问题或合作意向，请随时与我联系。"})]})}),u.jsx($1,{children:u.jsx("div",{className:"container",children:u.jsxs(O1,{children:[u.jsxs(F1,{children:[u.jsx(M1,{children:"联系方式"}),u.jsxs(D1,{children:[u.jsxs(Dl,{children:[u.jsx(Al,{children:"📧"}),u.jsxs(Ul,{children:[u.jsx(Bl,{children:"电子邮件"}),u.jsx(Vl,{children:u.jsx(A1,{href:"mailto:contact@example.com",children:"contact@example.com"})})]})]}),u.jsxs(Dl,{children:[u.jsx(Al,{children:"📱"}),u.jsxs(Ul,{children:[u.jsx(Bl,{children:"社交媒体"}),u.jsx(Vl,{children:"在各大自媒体平台关注我"}),u.jsxs(U1,{children:[u.jsx(Wl,{href:"https://www.xiaohongshu.com",target:"_blank",rel:"noopener noreferrer",children:"小"}),u.jsx(Wl,{href:"https://weibo.com",target:"_blank",rel:"noopener noreferrer",children:"微"}),u.jsx(Wl,{href:"https://www.zhihu.com",target:"_blank",rel:"noopener noreferrer",children:"知"})]})]})]}),u.jsxs(Dl,{children:[u.jsx(Al,{children:"🕒"}),u.jsxs(Ul,{children:[u.jsx(Bl,{children:"回复时间"}),u.jsx(Vl,{children:"通常在24小时内回复您的消息。"})]})]})]})]}),u.jsx(B1,{children:u.jsxs(V1,{onSubmit:s,children:[u.jsx(W1,{children:"发送消息"}),u.jsxs(ko,{children:[u.jsx(So,{htmlFor:"name",children:"您的姓名"}),u.jsx(Hl,{type:"text",id:"name",name:"name",value:e.name,onChange:l,required:!0})]}),u.jsxs(ko,{children:[u.jsx(So,{htmlFor:"email",children:"电子邮箱"}),u.jsx(Hl,{type:"email",id:"email",name:"email",value:e.email,onChange:l,required:!0})]}),u.jsxs(ko,{children:[u.jsx(So,{htmlFor:"subject",children:"主题"}),u.jsx(Hl,{type:"text",id:"subject",name:"subject",value:e.subject,onChange:l,required:!0})]}),u.jsxs(ko,{children:[u.jsx(So,{htmlFor:"message",children:"消息内容"}),u.jsx(H1,{id:"message",name:"message",value:e.message,onChange:l,required:!0})]}),u.jsx(Q1,{type:"submit",disabled:n,children:n?"发送中...":"发送消息"}),o&&u.jsx("p",{style:{color:"green",marginTop:"15px"},children:"您的消息已发送成功，我会尽快回复您！"})]})})]})})}),u.jsx(Y1,{children:u.jsxs("div",{className:"container",children:[u.jsx("h2",{className:"section-title",children:"位置"}),u.jsx(K1,{children:"地图将在实际部署时加载 (可集成百度地图或高德地图API)"})]})})]})}function X1(){return u.jsxs("div",{className:"app",children:[u.jsx(sv,{}),u.jsx("main",{children:u.jsxs(A0,{children:[u.jsx(fn,{path:"/",element:u.jsx(Nv,{})}),u.jsx(fn,{path:"/products",element:u.jsx(Bv,{})}),u.jsx(fn,{path:"/media",element:u.jsx(s1,{})}),u.jsx(fn,{path:"/about",element:u.jsx(T1,{})}),u.jsx(fn,{path:"/contact",element:u.jsx(G1,{})})]})}),u.jsx(fv,{})]})}Ql.createRoot(document.getElementById("root")).render(u.jsx(qt.StrictMode,{children:u.jsx(K0,{children:u.jsx(X1,{})})}));
