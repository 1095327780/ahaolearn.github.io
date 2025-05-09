function cp(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function dp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var mc={exports:{}},yo={},gc={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hr=Symbol.for("react.element"),fp=Symbol.for("react.portal"),pp=Symbol.for("react.fragment"),hp=Symbol.for("react.strict_mode"),mp=Symbol.for("react.profiler"),gp=Symbol.for("react.provider"),vp=Symbol.for("react.context"),yp=Symbol.for("react.forward_ref"),xp=Symbol.for("react.suspense"),wp=Symbol.for("react.memo"),kp=Symbol.for("react.lazy"),Fa=Symbol.iterator;function Sp(e){return e===null||typeof e!="object"?null:(e=Fa&&e[Fa]||e["@@iterator"],typeof e=="function"?e:null)}var vc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},yc=Object.assign,xc={};function Qn(e,t,n){this.props=e,this.context=t,this.refs=xc,this.updater=n||vc}Qn.prototype.isReactComponent={};Qn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Qn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function wc(){}wc.prototype=Qn.prototype;function Ms(e,t,n){this.props=e,this.context=t,this.refs=xc,this.updater=n||vc}var As=Ms.prototype=new wc;As.constructor=Ms;yc(As,Qn.prototype);As.isPureReactComponent=!0;var Ma=Array.isArray,kc=Object.prototype.hasOwnProperty,Us={current:null},Sc={key:!0,ref:!0,__self:!0,__source:!0};function Cc(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)kc.call(t,r)&&!Sc.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var a=Array(s),u=0;u<s;u++)a[u]=arguments[u+2];i.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Hr,type:e,key:o,ref:l,props:i,_owner:Us.current}}function Cp(e,t){return{$$typeof:Hr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Bs(e){return typeof e=="object"&&e!==null&&e.$$typeof===Hr}function Ep(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Aa=/\/+/g;function Qo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ep(""+e.key):t.toString(36)}function Si(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Hr:case fp:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Qo(l,0):r,Ma(i)?(n="",e!=null&&(n=e.replace(Aa,"$&/")+"/"),Si(i,t,n,"",function(u){return u})):i!=null&&(Bs(i)&&(i=Cp(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Aa,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Ma(e))for(var s=0;s<e.length;s++){o=e[s];var a=r+Qo(o,s);l+=Si(o,t,n,a,i)}else if(a=Sp(e),typeof a=="function")for(e=a.call(e),s=0;!(o=e.next()).done;)o=o.value,a=r+Qo(o,s++),l+=Si(o,t,n,a,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function qr(e,t,n){if(e==null)return e;var r=[],i=0;return Si(e,r,"","",function(o){return t.call(n,o,i++)}),r}function jp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ge={current:null},Ci={transition:null},Pp={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:Ci,ReactCurrentOwner:Us};function Ec(){throw Error("act(...) is not supported in production builds of React.")}O.Children={map:qr,forEach:function(e,t,n){qr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return qr(e,function(){t++}),t},toArray:function(e){return qr(e,function(t){return t})||[]},only:function(e){if(!Bs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=Qn;O.Fragment=pp;O.Profiler=mp;O.PureComponent=Ms;O.StrictMode=hp;O.Suspense=xp;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pp;O.act=Ec;O.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=yc({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=Us.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)kc.call(t,a)&&!Sc.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var u=0;u<a;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Hr,type:e.type,key:i,ref:o,props:r,_owner:l}};O.createContext=function(e){return e={$$typeof:vp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:gp,_context:e},e.Consumer=e};O.createElement=Cc;O.createFactory=function(e){var t=Cc.bind(null,e);return t.type=e,t};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:yp,render:e}};O.isValidElement=Bs;O.lazy=function(e){return{$$typeof:kp,_payload:{_status:-1,_result:e},_init:jp}};O.memo=function(e,t){return{$$typeof:wp,type:e,compare:t===void 0?null:t}};O.startTransition=function(e){var t=Ci.transition;Ci.transition={};try{e()}finally{Ci.transition=t}};O.unstable_act=Ec;O.useCallback=function(e,t){return ge.current.useCallback(e,t)};O.useContext=function(e){return ge.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return ge.current.useDeferredValue(e)};O.useEffect=function(e,t){return ge.current.useEffect(e,t)};O.useId=function(){return ge.current.useId()};O.useImperativeHandle=function(e,t,n){return ge.current.useImperativeHandle(e,t,n)};O.useInsertionEffect=function(e,t){return ge.current.useInsertionEffect(e,t)};O.useLayoutEffect=function(e,t){return ge.current.useLayoutEffect(e,t)};O.useMemo=function(e,t){return ge.current.useMemo(e,t)};O.useReducer=function(e,t,n){return ge.current.useReducer(e,t,n)};O.useRef=function(e){return ge.current.useRef(e)};O.useState=function(e){return ge.current.useState(e)};O.useSyncExternalStore=function(e,t,n){return ge.current.useSyncExternalStore(e,t,n)};O.useTransition=function(){return ge.current.useTransition()};O.version="18.3.1";gc.exports=O;var P=gc.exports;const qt=dp(P),_p=cp({__proto__:null,default:qt},[P]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Np=P,Tp=Symbol.for("react.element"),zp=Symbol.for("react.fragment"),Ip=Object.prototype.hasOwnProperty,Rp=Np.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Lp={key:!0,ref:!0,__self:!0,__source:!0};function jc(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Ip.call(t,r)&&!Lp.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Tp,type:e,key:o,ref:l,props:i,_owner:Rp.current}}yo.Fragment=zp;yo.jsx=jc;yo.jsxs=jc;mc.exports=yo;var c=mc.exports,Ol={},Pc={exports:{}},Te={},_c={exports:{}},Nc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,I){var R=N.length;N.push(I);e:for(;0<R;){var U=R-1>>>1,B=N[U];if(0<i(B,I))N[U]=I,N[R]=B,R=U;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var I=N[0],R=N.pop();if(R!==I){N[0]=R;e:for(var U=0,B=N.length,Bt=B>>>1;U<Bt;){var Me=2*(U+1)-1,ft=N[Me],Ee=Me+1,et=N[Ee];if(0>i(ft,R))Ee<B&&0>i(et,ft)?(N[U]=et,N[Ee]=R,U=Ee):(N[U]=ft,N[Me]=R,U=Me);else if(Ee<B&&0>i(et,R))N[U]=et,N[Ee]=R,U=Ee;else break e}}return I}function i(N,I){var R=N.sortIndex-I.sortIndex;return R!==0?R:N.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var a=[],u=[],m=1,h=null,g=3,x=!1,w=!1,k=!1,_=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(N){for(var I=n(u);I!==null;){if(I.callback===null)r(u);else if(I.startTime<=N)r(u),I.sortIndex=I.expirationTime,t(a,I);else break;I=n(u)}}function v(N){if(k=!1,p(N),!w)if(n(a)!==null)w=!0,bn(C);else{var I=n(u);I!==null&&Ut(v,I.startTime-N)}}function C(N,I){w=!1,k&&(k=!1,f(z),z=-1),x=!0;var R=g;try{for(p(I),h=n(a);h!==null&&(!(h.expirationTime>I)||N&&!pe());){var U=h.callback;if(typeof U=="function"){h.callback=null,g=h.priorityLevel;var B=U(h.expirationTime<=I);I=e.unstable_now(),typeof B=="function"?h.callback=B:h===n(a)&&r(a),p(I)}else r(a);h=n(a)}if(h!==null)var Bt=!0;else{var Me=n(u);Me!==null&&Ut(v,Me.startTime-I),Bt=!1}return Bt}finally{h=null,g=R,x=!1}}var j=!1,S=null,z=-1,A=5,L=-1;function pe(){return!(e.unstable_now()-L<A)}function Mt(){if(S!==null){var N=e.unstable_now();L=N;var I=!0;try{I=S(!0,N)}finally{I?At():(j=!1,S=null)}}else j=!1}var At;if(typeof d=="function")At=function(){d(Mt)};else if(typeof MessageChannel<"u"){var br=new MessageChannel,Wo=br.port2;br.port1.onmessage=Mt,At=function(){Wo.postMessage(null)}}else At=function(){_(Mt,0)};function bn(N){S=N,j||(j=!0,At())}function Ut(N,I){z=_(function(){N(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){w||x||(w=!0,bn(C))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(N){switch(g){case 1:case 2:case 3:var I=3;break;default:I=g}var R=g;g=I;try{return N()}finally{g=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,I){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var R=g;g=N;try{return I()}finally{g=R}},e.unstable_scheduleCallback=function(N,I,R){var U=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?U+R:U):R=U,N){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=R+B,N={id:m++,callback:I,priorityLevel:N,startTime:R,expirationTime:B,sortIndex:-1},R>U?(N.sortIndex=R,t(u,N),n(a)===null&&N===n(u)&&(k?(f(z),z=-1):k=!0,Ut(v,R-U))):(N.sortIndex=B,t(a,N),w||x||(w=!0,bn(C))),N},e.unstable_shouldYield=pe,e.unstable_wrapCallback=function(N){var I=g;return function(){var R=g;g=I;try{return N.apply(this,arguments)}finally{g=R}}}})(Nc);_c.exports=Nc;var $p=_c.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Op=P,Ne=$p;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Tc=new Set,Er={};function ln(e,t){Rn(e,t),Rn(e+"Capture",t)}function Rn(e,t){for(Er[e]=t,e=0;e<t.length;e++)Tc.add(t[e])}var st=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Dl=Object.prototype.hasOwnProperty,Dp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ua={},Ba={};function Fp(e){return Dl.call(Ba,e)?!0:Dl.call(Ua,e)?!1:Dp.test(e)?Ba[e]=!0:(Ua[e]=!0,!1)}function Mp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ap(e,t,n,r){if(t===null||typeof t>"u"||Mp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ve(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ae[e]=new ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ae[t]=new ve(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ae[e]=new ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ae[e]=new ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ae[e]=new ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ae[e]=new ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ae[e]=new ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ae[e]=new ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ae[e]=new ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var Vs=/[\-:]([a-z])/g;function Ws(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Vs,Ws);ae[t]=new ve(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Vs,Ws);ae[t]=new ve(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Vs,Ws);ae[t]=new ve(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ae[e]=new ve(e,1,!1,e.toLowerCase(),null,!1,!1)});ae.xlinkHref=new ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ae[e]=new ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function Hs(e,t,n,r){var i=ae.hasOwnProperty(t)?ae[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ap(t,n,i,r)&&(n=null),r||i===null?Fp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var dt=Op.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ei=Symbol.for("react.element"),pn=Symbol.for("react.portal"),hn=Symbol.for("react.fragment"),Qs=Symbol.for("react.strict_mode"),Fl=Symbol.for("react.profiler"),zc=Symbol.for("react.provider"),Ic=Symbol.for("react.context"),Ys=Symbol.for("react.forward_ref"),Ml=Symbol.for("react.suspense"),Al=Symbol.for("react.suspense_list"),Gs=Symbol.for("react.memo"),gt=Symbol.for("react.lazy"),Rc=Symbol.for("react.offscreen"),Va=Symbol.iterator;function qn(e){return e===null||typeof e!="object"?null:(e=Va&&e[Va]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,Yo;function ur(e){if(Yo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Yo=t&&t[1]||""}return`
`+Yo+e}var Go=!1;function Ko(e,t){if(!e||Go)return"";Go=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,s=o.length-1;1<=l&&0<=s&&i[l]!==o[s];)s--;for(;1<=l&&0<=s;l--,s--)if(i[l]!==o[s]){if(l!==1||s!==1)do if(l--,s--,0>s||i[l]!==o[s]){var a=`
`+i[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=s);break}}}finally{Go=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ur(e):""}function Up(e){switch(e.tag){case 5:return ur(e.type);case 16:return ur("Lazy");case 13:return ur("Suspense");case 19:return ur("SuspenseList");case 0:case 2:case 15:return e=Ko(e.type,!1),e;case 11:return e=Ko(e.type.render,!1),e;case 1:return e=Ko(e.type,!0),e;default:return""}}function Ul(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case hn:return"Fragment";case pn:return"Portal";case Fl:return"Profiler";case Qs:return"StrictMode";case Ml:return"Suspense";case Al:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ic:return(e.displayName||"Context")+".Consumer";case zc:return(e._context.displayName||"Context")+".Provider";case Ys:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Gs:return t=e.displayName||null,t!==null?t:Ul(e.type)||"Memo";case gt:t=e._payload,e=e._init;try{return Ul(e(t))}catch{}}return null}function Bp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ul(t);case 8:return t===Qs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Rt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Lc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Vp(e){var t=Lc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ti(e){e._valueTracker||(e._valueTracker=Vp(e))}function $c(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Lc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ai(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Bl(e,t){var n=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Wa(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Rt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Oc(e,t){t=t.checked,t!=null&&Hs(e,"checked",t,!1)}function Vl(e,t){Oc(e,t);var n=Rt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Wl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Wl(e,t.type,Rt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ha(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Wl(e,t,n){(t!=="number"||Ai(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var cr=Array.isArray;function Pn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Rt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Hl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Qa(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(E(92));if(cr(n)){if(1<n.length)throw Error(E(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Rt(n)}}function Dc(e,t){var n=Rt(t.value),r=Rt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ya(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Fc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ql(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Fc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ni,Mc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ni=ni||document.createElement("div"),ni.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ni.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function jr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var hr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Wp=["Webkit","ms","Moz","O"];Object.keys(hr).forEach(function(e){Wp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),hr[t]=hr[e]})});function Ac(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||hr.hasOwnProperty(e)&&hr[e]?(""+t).trim():t+"px"}function Uc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ac(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Hp=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yl(e,t){if(t){if(Hp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function Gl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kl=null;function Ks(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Xl=null,_n=null,Nn=null;function Ga(e){if(e=Gr(e)){if(typeof Xl!="function")throw Error(E(280));var t=e.stateNode;t&&(t=Co(t),Xl(e.stateNode,e.type,t))}}function Bc(e){_n?Nn?Nn.push(e):Nn=[e]:_n=e}function Vc(){if(_n){var e=_n,t=Nn;if(Nn=_n=null,Ga(e),t)for(e=0;e<t.length;e++)Ga(t[e])}}function Wc(e,t){return e(t)}function Hc(){}var Xo=!1;function Qc(e,t,n){if(Xo)return e(t,n);Xo=!0;try{return Wc(e,t,n)}finally{Xo=!1,(_n!==null||Nn!==null)&&(Hc(),Vc())}}function Pr(e,t){var n=e.stateNode;if(n===null)return null;var r=Co(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(E(231,t,typeof n));return n}var Zl=!1;if(st)try{var er={};Object.defineProperty(er,"passive",{get:function(){Zl=!0}}),window.addEventListener("test",er,er),window.removeEventListener("test",er,er)}catch{Zl=!1}function Qp(e,t,n,r,i,o,l,s,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(m){this.onError(m)}}var mr=!1,Ui=null,Bi=!1,bl=null,Yp={onError:function(e){mr=!0,Ui=e}};function Gp(e,t,n,r,i,o,l,s,a){mr=!1,Ui=null,Qp.apply(Yp,arguments)}function Kp(e,t,n,r,i,o,l,s,a){if(Gp.apply(this,arguments),mr){if(mr){var u=Ui;mr=!1,Ui=null}else throw Error(E(198));Bi||(Bi=!0,bl=u)}}function sn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Yc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ka(e){if(sn(e)!==e)throw Error(E(188))}function Xp(e){var t=e.alternate;if(!t){if(t=sn(e),t===null)throw Error(E(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Ka(i),e;if(o===r)return Ka(i),t;o=o.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?e:t}function Gc(e){return e=Xp(e),e!==null?Kc(e):null}function Kc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Kc(e);if(t!==null)return t;e=e.sibling}return null}var Xc=Ne.unstable_scheduleCallback,Xa=Ne.unstable_cancelCallback,Zp=Ne.unstable_shouldYield,bp=Ne.unstable_requestPaint,J=Ne.unstable_now,Jp=Ne.unstable_getCurrentPriorityLevel,Xs=Ne.unstable_ImmediatePriority,Zc=Ne.unstable_UserBlockingPriority,Vi=Ne.unstable_NormalPriority,qp=Ne.unstable_LowPriority,bc=Ne.unstable_IdlePriority,xo=null,Je=null;function eh(e){if(Je&&typeof Je.onCommitFiberRoot=="function")try{Je.onCommitFiberRoot(xo,e,void 0,(e.current.flags&128)===128)}catch{}}var He=Math.clz32?Math.clz32:rh,th=Math.log,nh=Math.LN2;function rh(e){return e>>>=0,e===0?32:31-(th(e)/nh|0)|0}var ri=64,ii=4194304;function dr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Wi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~i;s!==0?r=dr(s):(o&=l,o!==0&&(r=dr(o)))}else l=n&~i,l!==0?r=dr(l):o!==0&&(r=dr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-He(t),i=1<<n,r|=e[n],t&=~i;return r}function ih(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function oh(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-He(o),s=1<<l,a=i[l];a===-1?(!(s&n)||s&r)&&(i[l]=ih(s,t)):a<=t&&(e.expiredLanes|=s),o&=~s}}function Jl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Jc(){var e=ri;return ri<<=1,!(ri&4194240)&&(ri=64),e}function Zo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Qr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-He(t),e[t]=n}function lh(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-He(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Zs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-He(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var M=0;function qc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ed,bs,td,nd,rd,ql=!1,oi=[],Ct=null,Et=null,jt=null,_r=new Map,Nr=new Map,yt=[],sh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Za(e,t){switch(e){case"focusin":case"focusout":Ct=null;break;case"dragenter":case"dragleave":Et=null;break;case"mouseover":case"mouseout":jt=null;break;case"pointerover":case"pointerout":_r.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nr.delete(t.pointerId)}}function tr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Gr(t),t!==null&&bs(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function ah(e,t,n,r,i){switch(t){case"focusin":return Ct=tr(Ct,e,t,n,r,i),!0;case"dragenter":return Et=tr(Et,e,t,n,r,i),!0;case"mouseover":return jt=tr(jt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return _r.set(o,tr(_r.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Nr.set(o,tr(Nr.get(o)||null,e,t,n,r,i)),!0}return!1}function id(e){var t=Qt(e.target);if(t!==null){var n=sn(t);if(n!==null){if(t=n.tag,t===13){if(t=Yc(n),t!==null){e.blockedOn=t,rd(e.priority,function(){td(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ei(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=es(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Kl=r,n.target.dispatchEvent(r),Kl=null}else return t=Gr(n),t!==null&&bs(t),e.blockedOn=n,!1;t.shift()}return!0}function ba(e,t,n){Ei(e)&&n.delete(t)}function uh(){ql=!1,Ct!==null&&Ei(Ct)&&(Ct=null),Et!==null&&Ei(Et)&&(Et=null),jt!==null&&Ei(jt)&&(jt=null),_r.forEach(ba),Nr.forEach(ba)}function nr(e,t){e.blockedOn===t&&(e.blockedOn=null,ql||(ql=!0,Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority,uh)))}function Tr(e){function t(i){return nr(i,e)}if(0<oi.length){nr(oi[0],e);for(var n=1;n<oi.length;n++){var r=oi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ct!==null&&nr(Ct,e),Et!==null&&nr(Et,e),jt!==null&&nr(jt,e),_r.forEach(t),Nr.forEach(t),n=0;n<yt.length;n++)r=yt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<yt.length&&(n=yt[0],n.blockedOn===null);)id(n),n.blockedOn===null&&yt.shift()}var Tn=dt.ReactCurrentBatchConfig,Hi=!0;function ch(e,t,n,r){var i=M,o=Tn.transition;Tn.transition=null;try{M=1,Js(e,t,n,r)}finally{M=i,Tn.transition=o}}function dh(e,t,n,r){var i=M,o=Tn.transition;Tn.transition=null;try{M=4,Js(e,t,n,r)}finally{M=i,Tn.transition=o}}function Js(e,t,n,r){if(Hi){var i=es(e,t,n,r);if(i===null)ll(e,t,r,Qi,n),Za(e,r);else if(ah(i,e,t,n,r))r.stopPropagation();else if(Za(e,r),t&4&&-1<sh.indexOf(e)){for(;i!==null;){var o=Gr(i);if(o!==null&&ed(o),o=es(e,t,n,r),o===null&&ll(e,t,r,Qi,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ll(e,t,r,null,n)}}var Qi=null;function es(e,t,n,r){if(Qi=null,e=Ks(r),e=Qt(e),e!==null)if(t=sn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Yc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Qi=e,null}function od(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Jp()){case Xs:return 1;case Zc:return 4;case Vi:case qp:return 16;case bc:return 536870912;default:return 16}default:return 16}}var wt=null,qs=null,ji=null;function ld(){if(ji)return ji;var e,t=qs,n=t.length,r,i="value"in wt?wt.value:wt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return ji=i.slice(e,1<r?1-r:void 0)}function Pi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function li(){return!0}function Ja(){return!1}function ze(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?li:Ja,this.isPropagationStopped=Ja,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=li)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=li)},persist:function(){},isPersistent:li}),t}var Yn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ea=ze(Yn),Yr=X({},Yn,{view:0,detail:0}),fh=ze(Yr),bo,Jo,rr,wo=X({},Yr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ta,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==rr&&(rr&&e.type==="mousemove"?(bo=e.screenX-rr.screenX,Jo=e.screenY-rr.screenY):Jo=bo=0,rr=e),bo)},movementY:function(e){return"movementY"in e?e.movementY:Jo}}),qa=ze(wo),ph=X({},wo,{dataTransfer:0}),hh=ze(ph),mh=X({},Yr,{relatedTarget:0}),qo=ze(mh),gh=X({},Yn,{animationName:0,elapsedTime:0,pseudoElement:0}),vh=ze(gh),yh=X({},Yn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xh=ze(yh),wh=X({},Yn,{data:0}),eu=ze(wh),kh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ch={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Eh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ch[e])?!!t[e]:!1}function ta(){return Eh}var jh=X({},Yr,{key:function(e){if(e.key){var t=kh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Pi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Sh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ta,charCode:function(e){return e.type==="keypress"?Pi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Pi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ph=ze(jh),_h=X({},wo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tu=ze(_h),Nh=X({},Yr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ta}),Th=ze(Nh),zh=X({},Yn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ih=ze(zh),Rh=X({},wo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Lh=ze(Rh),$h=[9,13,27,32],na=st&&"CompositionEvent"in window,gr=null;st&&"documentMode"in document&&(gr=document.documentMode);var Oh=st&&"TextEvent"in window&&!gr,sd=st&&(!na||gr&&8<gr&&11>=gr),nu=String.fromCharCode(32),ru=!1;function ad(e,t){switch(e){case"keyup":return $h.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ud(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var mn=!1;function Dh(e,t){switch(e){case"compositionend":return ud(t);case"keypress":return t.which!==32?null:(ru=!0,nu);case"textInput":return e=t.data,e===nu&&ru?null:e;default:return null}}function Fh(e,t){if(mn)return e==="compositionend"||!na&&ad(e,t)?(e=ld(),ji=qs=wt=null,mn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return sd&&t.locale!=="ko"?null:t.data;default:return null}}var Mh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function iu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Mh[e.type]:t==="textarea"}function cd(e,t,n,r){Bc(r),t=Yi(t,"onChange"),0<t.length&&(n=new ea("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var vr=null,zr=null;function Ah(e){kd(e,0)}function ko(e){var t=yn(e);if($c(t))return e}function Uh(e,t){if(e==="change")return t}var dd=!1;if(st){var el;if(st){var tl="oninput"in document;if(!tl){var ou=document.createElement("div");ou.setAttribute("oninput","return;"),tl=typeof ou.oninput=="function"}el=tl}else el=!1;dd=el&&(!document.documentMode||9<document.documentMode)}function lu(){vr&&(vr.detachEvent("onpropertychange",fd),zr=vr=null)}function fd(e){if(e.propertyName==="value"&&ko(zr)){var t=[];cd(t,zr,e,Ks(e)),Qc(Ah,t)}}function Bh(e,t,n){e==="focusin"?(lu(),vr=t,zr=n,vr.attachEvent("onpropertychange",fd)):e==="focusout"&&lu()}function Vh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ko(zr)}function Wh(e,t){if(e==="click")return ko(t)}function Hh(e,t){if(e==="input"||e==="change")return ko(t)}function Qh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ge=typeof Object.is=="function"?Object.is:Qh;function Ir(e,t){if(Ge(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Dl.call(t,i)||!Ge(e[i],t[i]))return!1}return!0}function su(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function au(e,t){var n=su(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=su(n)}}function pd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?pd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function hd(){for(var e=window,t=Ai();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ai(e.document)}return t}function ra(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Yh(e){var t=hd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&pd(n.ownerDocument.documentElement,n)){if(r!==null&&ra(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=au(n,o);var l=au(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Gh=st&&"documentMode"in document&&11>=document.documentMode,gn=null,ts=null,yr=null,ns=!1;function uu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ns||gn==null||gn!==Ai(r)||(r=gn,"selectionStart"in r&&ra(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),yr&&Ir(yr,r)||(yr=r,r=Yi(ts,"onSelect"),0<r.length&&(t=new ea("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gn)))}function si(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var vn={animationend:si("Animation","AnimationEnd"),animationiteration:si("Animation","AnimationIteration"),animationstart:si("Animation","AnimationStart"),transitionend:si("Transition","TransitionEnd")},nl={},md={};st&&(md=document.createElement("div").style,"AnimationEvent"in window||(delete vn.animationend.animation,delete vn.animationiteration.animation,delete vn.animationstart.animation),"TransitionEvent"in window||delete vn.transitionend.transition);function So(e){if(nl[e])return nl[e];if(!vn[e])return e;var t=vn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in md)return nl[e]=t[n];return e}var gd=So("animationend"),vd=So("animationiteration"),yd=So("animationstart"),xd=So("transitionend"),wd=new Map,cu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $t(e,t){wd.set(e,t),ln(t,[e])}for(var rl=0;rl<cu.length;rl++){var il=cu[rl],Kh=il.toLowerCase(),Xh=il[0].toUpperCase()+il.slice(1);$t(Kh,"on"+Xh)}$t(gd,"onAnimationEnd");$t(vd,"onAnimationIteration");$t(yd,"onAnimationStart");$t("dblclick","onDoubleClick");$t("focusin","onFocus");$t("focusout","onBlur");$t(xd,"onTransitionEnd");Rn("onMouseEnter",["mouseout","mouseover"]);Rn("onMouseLeave",["mouseout","mouseover"]);Rn("onPointerEnter",["pointerout","pointerover"]);Rn("onPointerLeave",["pointerout","pointerover"]);ln("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ln("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ln("onBeforeInput",["compositionend","keypress","textInput","paste"]);ln("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ln("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ln("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zh=new Set("cancel close invalid load scroll toggle".split(" ").concat(fr));function du(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Kp(r,t,void 0,e),e.currentTarget=null}function kd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],a=s.instance,u=s.currentTarget;if(s=s.listener,a!==o&&i.isPropagationStopped())break e;du(i,s,u),o=a}else for(l=0;l<r.length;l++){if(s=r[l],a=s.instance,u=s.currentTarget,s=s.listener,a!==o&&i.isPropagationStopped())break e;du(i,s,u),o=a}}}if(Bi)throw e=bl,Bi=!1,bl=null,e}function W(e,t){var n=t[ss];n===void 0&&(n=t[ss]=new Set);var r=e+"__bubble";n.has(r)||(Sd(t,e,2,!1),n.add(r))}function ol(e,t,n){var r=0;t&&(r|=4),Sd(n,e,r,t)}var ai="_reactListening"+Math.random().toString(36).slice(2);function Rr(e){if(!e[ai]){e[ai]=!0,Tc.forEach(function(n){n!=="selectionchange"&&(Zh.has(n)||ol(n,!1,e),ol(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ai]||(t[ai]=!0,ol("selectionchange",!1,t))}}function Sd(e,t,n,r){switch(od(t)){case 1:var i=ch;break;case 4:i=dh;break;default:i=Js}n=i.bind(null,t,n,e),i=void 0,!Zl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ll(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;l=l.return}for(;s!==null;){if(l=Qt(s),l===null)return;if(a=l.tag,a===5||a===6){r=o=l;continue e}s=s.parentNode}}r=r.return}Qc(function(){var u=o,m=Ks(n),h=[];e:{var g=wd.get(e);if(g!==void 0){var x=ea,w=e;switch(e){case"keypress":if(Pi(n)===0)break e;case"keydown":case"keyup":x=Ph;break;case"focusin":w="focus",x=qo;break;case"focusout":w="blur",x=qo;break;case"beforeblur":case"afterblur":x=qo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=qa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=hh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Th;break;case gd:case vd:case yd:x=vh;break;case xd:x=Ih;break;case"scroll":x=fh;break;case"wheel":x=Lh;break;case"copy":case"cut":case"paste":x=xh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=tu}var k=(t&4)!==0,_=!k&&e==="scroll",f=k?g!==null?g+"Capture":null:g;k=[];for(var d=u,p;d!==null;){p=d;var v=p.stateNode;if(p.tag===5&&v!==null&&(p=v,f!==null&&(v=Pr(d,f),v!=null&&k.push(Lr(d,v,p)))),_)break;d=d.return}0<k.length&&(g=new x(g,w,null,n,m),h.push({event:g,listeners:k}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",g&&n!==Kl&&(w=n.relatedTarget||n.fromElement)&&(Qt(w)||w[at]))break e;if((x||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,x?(w=n.relatedTarget||n.toElement,x=u,w=w?Qt(w):null,w!==null&&(_=sn(w),w!==_||w.tag!==5&&w.tag!==6)&&(w=null)):(x=null,w=u),x!==w)){if(k=qa,v="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(k=tu,v="onPointerLeave",f="onPointerEnter",d="pointer"),_=x==null?g:yn(x),p=w==null?g:yn(w),g=new k(v,d+"leave",x,n,m),g.target=_,g.relatedTarget=p,v=null,Qt(m)===u&&(k=new k(f,d+"enter",w,n,m),k.target=p,k.relatedTarget=_,v=k),_=v,x&&w)t:{for(k=x,f=w,d=0,p=k;p;p=cn(p))d++;for(p=0,v=f;v;v=cn(v))p++;for(;0<d-p;)k=cn(k),d--;for(;0<p-d;)f=cn(f),p--;for(;d--;){if(k===f||f!==null&&k===f.alternate)break t;k=cn(k),f=cn(f)}k=null}else k=null;x!==null&&fu(h,g,x,k,!1),w!==null&&_!==null&&fu(h,_,w,k,!0)}}e:{if(g=u?yn(u):window,x=g.nodeName&&g.nodeName.toLowerCase(),x==="select"||x==="input"&&g.type==="file")var C=Uh;else if(iu(g))if(dd)C=Hh;else{C=Vh;var j=Bh}else(x=g.nodeName)&&x.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(C=Wh);if(C&&(C=C(e,u))){cd(h,C,n,m);break e}j&&j(e,g,u),e==="focusout"&&(j=g._wrapperState)&&j.controlled&&g.type==="number"&&Wl(g,"number",g.value)}switch(j=u?yn(u):window,e){case"focusin":(iu(j)||j.contentEditable==="true")&&(gn=j,ts=u,yr=null);break;case"focusout":yr=ts=gn=null;break;case"mousedown":ns=!0;break;case"contextmenu":case"mouseup":case"dragend":ns=!1,uu(h,n,m);break;case"selectionchange":if(Gh)break;case"keydown":case"keyup":uu(h,n,m)}var S;if(na)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else mn?ad(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(sd&&n.locale!=="ko"&&(mn||z!=="onCompositionStart"?z==="onCompositionEnd"&&mn&&(S=ld()):(wt=m,qs="value"in wt?wt.value:wt.textContent,mn=!0)),j=Yi(u,z),0<j.length&&(z=new eu(z,e,null,n,m),h.push({event:z,listeners:j}),S?z.data=S:(S=ud(n),S!==null&&(z.data=S)))),(S=Oh?Dh(e,n):Fh(e,n))&&(u=Yi(u,"onBeforeInput"),0<u.length&&(m=new eu("onBeforeInput","beforeinput",null,n,m),h.push({event:m,listeners:u}),m.data=S))}kd(h,t)})}function Lr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Yi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Pr(e,n),o!=null&&r.unshift(Lr(e,o,i)),o=Pr(e,t),o!=null&&r.push(Lr(e,o,i))),e=e.return}return r}function cn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function fu(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var s=n,a=s.alternate,u=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&u!==null&&(s=u,i?(a=Pr(n,o),a!=null&&l.unshift(Lr(n,a,s))):i||(a=Pr(n,o),a!=null&&l.push(Lr(n,a,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var bh=/\r\n?/g,Jh=/\u0000|\uFFFD/g;function pu(e){return(typeof e=="string"?e:""+e).replace(bh,`
`).replace(Jh,"")}function ui(e,t,n){if(t=pu(t),pu(e)!==t&&n)throw Error(E(425))}function Gi(){}var rs=null,is=null;function os(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ls=typeof setTimeout=="function"?setTimeout:void 0,qh=typeof clearTimeout=="function"?clearTimeout:void 0,hu=typeof Promise=="function"?Promise:void 0,em=typeof queueMicrotask=="function"?queueMicrotask:typeof hu<"u"?function(e){return hu.resolve(null).then(e).catch(tm)}:ls;function tm(e){setTimeout(function(){throw e})}function sl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Tr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Tr(t)}function Pt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function mu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Gn=Math.random().toString(36).slice(2),be="__reactFiber$"+Gn,$r="__reactProps$"+Gn,at="__reactContainer$"+Gn,ss="__reactEvents$"+Gn,nm="__reactListeners$"+Gn,rm="__reactHandles$"+Gn;function Qt(e){var t=e[be];if(t)return t;for(var n=e.parentNode;n;){if(t=n[at]||n[be]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=mu(e);e!==null;){if(n=e[be])return n;e=mu(e)}return t}e=n,n=e.parentNode}return null}function Gr(e){return e=e[be]||e[at],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function yn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function Co(e){return e[$r]||null}var as=[],xn=-1;function Ot(e){return{current:e}}function Q(e){0>xn||(e.current=as[xn],as[xn]=null,xn--)}function V(e,t){xn++,as[xn]=e.current,e.current=t}var Lt={},fe=Ot(Lt),ke=Ot(!1),en=Lt;function Ln(e,t){var n=e.type.contextTypes;if(!n)return Lt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Se(e){return e=e.childContextTypes,e!=null}function Ki(){Q(ke),Q(fe)}function gu(e,t,n){if(fe.current!==Lt)throw Error(E(168));V(fe,t),V(ke,n)}function Cd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(E(108,Bp(e)||"Unknown",i));return X({},n,r)}function Xi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Lt,en=fe.current,V(fe,e),V(ke,ke.current),!0}function vu(e,t,n){var r=e.stateNode;if(!r)throw Error(E(169));n?(e=Cd(e,t,en),r.__reactInternalMemoizedMergedChildContext=e,Q(ke),Q(fe),V(fe,e)):Q(ke),V(ke,n)}var rt=null,Eo=!1,al=!1;function Ed(e){rt===null?rt=[e]:rt.push(e)}function im(e){Eo=!0,Ed(e)}function Dt(){if(!al&&rt!==null){al=!0;var e=0,t=M;try{var n=rt;for(M=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}rt=null,Eo=!1}catch(i){throw rt!==null&&(rt=rt.slice(e+1)),Xc(Xs,Dt),i}finally{M=t,al=!1}}return null}var wn=[],kn=0,Zi=null,bi=0,Ie=[],Re=0,tn=null,it=1,ot="";function Wt(e,t){wn[kn++]=bi,wn[kn++]=Zi,Zi=e,bi=t}function jd(e,t,n){Ie[Re++]=it,Ie[Re++]=ot,Ie[Re++]=tn,tn=e;var r=it;e=ot;var i=32-He(r)-1;r&=~(1<<i),n+=1;var o=32-He(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,it=1<<32-He(t)+i|n<<i|r,ot=o+e}else it=1<<o|n<<i|r,ot=e}function ia(e){e.return!==null&&(Wt(e,1),jd(e,1,0))}function oa(e){for(;e===Zi;)Zi=wn[--kn],wn[kn]=null,bi=wn[--kn],wn[kn]=null;for(;e===tn;)tn=Ie[--Re],Ie[Re]=null,ot=Ie[--Re],Ie[Re]=null,it=Ie[--Re],Ie[Re]=null}var _e=null,Pe=null,Y=!1,We=null;function Pd(e,t){var n=Le(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function yu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,_e=e,Pe=Pt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,_e=e,Pe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=tn!==null?{id:it,overflow:ot}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Le(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,_e=e,Pe=null,!0):!1;default:return!1}}function us(e){return(e.mode&1)!==0&&(e.flags&128)===0}function cs(e){if(Y){var t=Pe;if(t){var n=t;if(!yu(e,t)){if(us(e))throw Error(E(418));t=Pt(n.nextSibling);var r=_e;t&&yu(e,t)?Pd(r,n):(e.flags=e.flags&-4097|2,Y=!1,_e=e)}}else{if(us(e))throw Error(E(418));e.flags=e.flags&-4097|2,Y=!1,_e=e}}}function xu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;_e=e}function ci(e){if(e!==_e)return!1;if(!Y)return xu(e),Y=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!os(e.type,e.memoizedProps)),t&&(t=Pe)){if(us(e))throw _d(),Error(E(418));for(;t;)Pd(e,t),t=Pt(t.nextSibling)}if(xu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Pe=Pt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Pe=null}}else Pe=_e?Pt(e.stateNode.nextSibling):null;return!0}function _d(){for(var e=Pe;e;)e=Pt(e.nextSibling)}function $n(){Pe=_e=null,Y=!1}function la(e){We===null?We=[e]:We.push(e)}var om=dt.ReactCurrentBatchConfig;function ir(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var s=i.refs;l===null?delete s[o]:s[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,e))}return e}function di(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function wu(e){var t=e._init;return t(e._payload)}function Nd(e){function t(f,d){if(e){var p=f.deletions;p===null?(f.deletions=[d],f.flags|=16):p.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function i(f,d){return f=zt(f,d),f.index=0,f.sibling=null,f}function o(f,d,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<d?(f.flags|=2,d):p):(f.flags|=2,d)):(f.flags|=1048576,d)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,d,p,v){return d===null||d.tag!==6?(d=ml(p,f.mode,v),d.return=f,d):(d=i(d,p),d.return=f,d)}function a(f,d,p,v){var C=p.type;return C===hn?m(f,d,p.props.children,v,p.key):d!==null&&(d.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===gt&&wu(C)===d.type)?(v=i(d,p.props),v.ref=ir(f,d,p),v.return=f,v):(v=Li(p.type,p.key,p.props,null,f.mode,v),v.ref=ir(f,d,p),v.return=f,v)}function u(f,d,p,v){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=gl(p,f.mode,v),d.return=f,d):(d=i(d,p.children||[]),d.return=f,d)}function m(f,d,p,v,C){return d===null||d.tag!==7?(d=Zt(p,f.mode,v,C),d.return=f,d):(d=i(d,p),d.return=f,d)}function h(f,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=ml(""+d,f.mode,p),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case ei:return p=Li(d.type,d.key,d.props,null,f.mode,p),p.ref=ir(f,null,d),p.return=f,p;case pn:return d=gl(d,f.mode,p),d.return=f,d;case gt:var v=d._init;return h(f,v(d._payload),p)}if(cr(d)||qn(d))return d=Zt(d,f.mode,p,null),d.return=f,d;di(f,d)}return null}function g(f,d,p,v){var C=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return C!==null?null:s(f,d,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ei:return p.key===C?a(f,d,p,v):null;case pn:return p.key===C?u(f,d,p,v):null;case gt:return C=p._init,g(f,d,C(p._payload),v)}if(cr(p)||qn(p))return C!==null?null:m(f,d,p,v,null);di(f,p)}return null}function x(f,d,p,v,C){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(p)||null,s(d,f,""+v,C);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ei:return f=f.get(v.key===null?p:v.key)||null,a(d,f,v,C);case pn:return f=f.get(v.key===null?p:v.key)||null,u(d,f,v,C);case gt:var j=v._init;return x(f,d,p,j(v._payload),C)}if(cr(v)||qn(v))return f=f.get(p)||null,m(d,f,v,C,null);di(d,v)}return null}function w(f,d,p,v){for(var C=null,j=null,S=d,z=d=0,A=null;S!==null&&z<p.length;z++){S.index>z?(A=S,S=null):A=S.sibling;var L=g(f,S,p[z],v);if(L===null){S===null&&(S=A);break}e&&S&&L.alternate===null&&t(f,S),d=o(L,d,z),j===null?C=L:j.sibling=L,j=L,S=A}if(z===p.length)return n(f,S),Y&&Wt(f,z),C;if(S===null){for(;z<p.length;z++)S=h(f,p[z],v),S!==null&&(d=o(S,d,z),j===null?C=S:j.sibling=S,j=S);return Y&&Wt(f,z),C}for(S=r(f,S);z<p.length;z++)A=x(S,f,z,p[z],v),A!==null&&(e&&A.alternate!==null&&S.delete(A.key===null?z:A.key),d=o(A,d,z),j===null?C=A:j.sibling=A,j=A);return e&&S.forEach(function(pe){return t(f,pe)}),Y&&Wt(f,z),C}function k(f,d,p,v){var C=qn(p);if(typeof C!="function")throw Error(E(150));if(p=C.call(p),p==null)throw Error(E(151));for(var j=C=null,S=d,z=d=0,A=null,L=p.next();S!==null&&!L.done;z++,L=p.next()){S.index>z?(A=S,S=null):A=S.sibling;var pe=g(f,S,L.value,v);if(pe===null){S===null&&(S=A);break}e&&S&&pe.alternate===null&&t(f,S),d=o(pe,d,z),j===null?C=pe:j.sibling=pe,j=pe,S=A}if(L.done)return n(f,S),Y&&Wt(f,z),C;if(S===null){for(;!L.done;z++,L=p.next())L=h(f,L.value,v),L!==null&&(d=o(L,d,z),j===null?C=L:j.sibling=L,j=L);return Y&&Wt(f,z),C}for(S=r(f,S);!L.done;z++,L=p.next())L=x(S,f,z,L.value,v),L!==null&&(e&&L.alternate!==null&&S.delete(L.key===null?z:L.key),d=o(L,d,z),j===null?C=L:j.sibling=L,j=L);return e&&S.forEach(function(Mt){return t(f,Mt)}),Y&&Wt(f,z),C}function _(f,d,p,v){if(typeof p=="object"&&p!==null&&p.type===hn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case ei:e:{for(var C=p.key,j=d;j!==null;){if(j.key===C){if(C=p.type,C===hn){if(j.tag===7){n(f,j.sibling),d=i(j,p.props.children),d.return=f,f=d;break e}}else if(j.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===gt&&wu(C)===j.type){n(f,j.sibling),d=i(j,p.props),d.ref=ir(f,j,p),d.return=f,f=d;break e}n(f,j);break}else t(f,j);j=j.sibling}p.type===hn?(d=Zt(p.props.children,f.mode,v,p.key),d.return=f,f=d):(v=Li(p.type,p.key,p.props,null,f.mode,v),v.ref=ir(f,d,p),v.return=f,f=v)}return l(f);case pn:e:{for(j=p.key;d!==null;){if(d.key===j)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){n(f,d.sibling),d=i(d,p.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=gl(p,f.mode,v),d.return=f,f=d}return l(f);case gt:return j=p._init,_(f,d,j(p._payload),v)}if(cr(p))return w(f,d,p,v);if(qn(p))return k(f,d,p,v);di(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(n(f,d.sibling),d=i(d,p),d.return=f,f=d):(n(f,d),d=ml(p,f.mode,v),d.return=f,f=d),l(f)):n(f,d)}return _}var On=Nd(!0),Td=Nd(!1),Ji=Ot(null),qi=null,Sn=null,sa=null;function aa(){sa=Sn=qi=null}function ua(e){var t=Ji.current;Q(Ji),e._currentValue=t}function ds(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function zn(e,t){qi=e,sa=Sn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(xe=!0),e.firstContext=null)}function Oe(e){var t=e._currentValue;if(sa!==e)if(e={context:e,memoizedValue:t,next:null},Sn===null){if(qi===null)throw Error(E(308));Sn=e,qi.dependencies={lanes:0,firstContext:e}}else Sn=Sn.next=e;return t}var Yt=null;function ca(e){Yt===null?Yt=[e]:Yt.push(e)}function zd(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ca(t)):(n.next=i.next,i.next=n),t.interleaved=n,ut(e,r)}function ut(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var vt=!1;function da(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Id(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function lt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function _t(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,D&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,ut(e,n)}return i=r.interleaved,i===null?(t.next=t,ca(r)):(t.next=i.next,i.next=t),r.interleaved=t,ut(e,n)}function _i(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zs(e,n)}}function ku(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function eo(e,t,n,r){var i=e.updateQueue;vt=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var a=s,u=a.next;a.next=null,l===null?o=u:l.next=u,l=a;var m=e.alternate;m!==null&&(m=m.updateQueue,s=m.lastBaseUpdate,s!==l&&(s===null?m.firstBaseUpdate=u:s.next=u,m.lastBaseUpdate=a))}if(o!==null){var h=i.baseState;l=0,m=u=a=null,s=o;do{var g=s.lane,x=s.eventTime;if((r&g)===g){m!==null&&(m=m.next={eventTime:x,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,k=s;switch(g=t,x=n,k.tag){case 1:if(w=k.payload,typeof w=="function"){h=w.call(x,h,g);break e}h=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=k.payload,g=typeof w=="function"?w.call(x,h,g):w,g==null)break e;h=X({},h,g);break e;case 2:vt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[s]:g.push(s))}else x={eventTime:x,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},m===null?(u=m=x,a=h):m=m.next=x,l|=g;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;g=s,s=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(1);if(m===null&&(a=h),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=m,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);rn|=l,e.lanes=l,e.memoizedState=h}}function Su(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var Kr={},qe=Ot(Kr),Or=Ot(Kr),Dr=Ot(Kr);function Gt(e){if(e===Kr)throw Error(E(174));return e}function fa(e,t){switch(V(Dr,t),V(Or,e),V(qe,Kr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ql(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ql(t,e)}Q(qe),V(qe,t)}function Dn(){Q(qe),Q(Or),Q(Dr)}function Rd(e){Gt(Dr.current);var t=Gt(qe.current),n=Ql(t,e.type);t!==n&&(V(Or,e),V(qe,n))}function pa(e){Or.current===e&&(Q(qe),Q(Or))}var G=Ot(0);function to(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ul=[];function ha(){for(var e=0;e<ul.length;e++)ul[e]._workInProgressVersionPrimary=null;ul.length=0}var Ni=dt.ReactCurrentDispatcher,cl=dt.ReactCurrentBatchConfig,nn=0,K=null,te=null,re=null,no=!1,xr=!1,Fr=0,lm=0;function ue(){throw Error(E(321))}function ma(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ge(e[n],t[n]))return!1;return!0}function ga(e,t,n,r,i,o){if(nn=o,K=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ni.current=e===null||e.memoizedState===null?cm:dm,e=n(r,i),xr){o=0;do{if(xr=!1,Fr=0,25<=o)throw Error(E(301));o+=1,re=te=null,t.updateQueue=null,Ni.current=fm,e=n(r,i)}while(xr)}if(Ni.current=ro,t=te!==null&&te.next!==null,nn=0,re=te=K=null,no=!1,t)throw Error(E(300));return e}function va(){var e=Fr!==0;return Fr=0,e}function Xe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return re===null?K.memoizedState=re=e:re=re.next=e,re}function De(){if(te===null){var e=K.alternate;e=e!==null?e.memoizedState:null}else e=te.next;var t=re===null?K.memoizedState:re.next;if(t!==null)re=t,te=e;else{if(e===null)throw Error(E(310));te=e,e={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},re===null?K.memoizedState=re=e:re=re.next=e}return re}function Mr(e,t){return typeof t=="function"?t(e):t}function dl(e){var t=De(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=te,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=l=null,a=null,u=o;do{var m=u.lane;if((nn&m)===m)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:m,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(s=a=h,l=r):a=a.next=h,K.lanes|=m,rn|=m}u=u.next}while(u!==null&&u!==o);a===null?l=r:a.next=s,Ge(r,t.memoizedState)||(xe=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,K.lanes|=o,rn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function fl(e){var t=De(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Ge(o,t.memoizedState)||(xe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Ld(){}function $d(e,t){var n=K,r=De(),i=t(),o=!Ge(r.memoizedState,i);if(o&&(r.memoizedState=i,xe=!0),r=r.queue,ya(Fd.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||re!==null&&re.memoizedState.tag&1){if(n.flags|=2048,Ar(9,Dd.bind(null,n,r,i,t),void 0,null),oe===null)throw Error(E(349));nn&30||Od(n,t,i)}return i}function Od(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Dd(e,t,n,r){t.value=n,t.getSnapshot=r,Md(t)&&Ad(e)}function Fd(e,t,n){return n(function(){Md(t)&&Ad(e)})}function Md(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ge(e,n)}catch{return!0}}function Ad(e){var t=ut(e,1);t!==null&&Qe(t,e,1,-1)}function Cu(e){var t=Xe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Mr,lastRenderedState:e},t.queue=e,e=e.dispatch=um.bind(null,K,e),[t.memoizedState,e]}function Ar(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ud(){return De().memoizedState}function Ti(e,t,n,r){var i=Xe();K.flags|=e,i.memoizedState=Ar(1|t,n,void 0,r===void 0?null:r)}function jo(e,t,n,r){var i=De();r=r===void 0?null:r;var o=void 0;if(te!==null){var l=te.memoizedState;if(o=l.destroy,r!==null&&ma(r,l.deps)){i.memoizedState=Ar(t,n,o,r);return}}K.flags|=e,i.memoizedState=Ar(1|t,n,o,r)}function Eu(e,t){return Ti(8390656,8,e,t)}function ya(e,t){return jo(2048,8,e,t)}function Bd(e,t){return jo(4,2,e,t)}function Vd(e,t){return jo(4,4,e,t)}function Wd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Hd(e,t,n){return n=n!=null?n.concat([e]):null,jo(4,4,Wd.bind(null,t,e),n)}function xa(){}function Qd(e,t){var n=De();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ma(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Yd(e,t){var n=De();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ma(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Gd(e,t,n){return nn&21?(Ge(n,t)||(n=Jc(),K.lanes|=n,rn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,xe=!0),e.memoizedState=n)}function sm(e,t){var n=M;M=n!==0&&4>n?n:4,e(!0);var r=cl.transition;cl.transition={};try{e(!1),t()}finally{M=n,cl.transition=r}}function Kd(){return De().memoizedState}function am(e,t,n){var r=Tt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Xd(e))Zd(t,n);else if(n=zd(e,t,n,r),n!==null){var i=me();Qe(n,e,r,i),bd(n,t,r)}}function um(e,t,n){var r=Tt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Xd(e))Zd(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,s=o(l,n);if(i.hasEagerState=!0,i.eagerState=s,Ge(s,l)){var a=t.interleaved;a===null?(i.next=i,ca(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=zd(e,t,i,r),n!==null&&(i=me(),Qe(n,e,r,i),bd(n,t,r))}}function Xd(e){var t=e.alternate;return e===K||t!==null&&t===K}function Zd(e,t){xr=no=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function bd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zs(e,n)}}var ro={readContext:Oe,useCallback:ue,useContext:ue,useEffect:ue,useImperativeHandle:ue,useInsertionEffect:ue,useLayoutEffect:ue,useMemo:ue,useReducer:ue,useRef:ue,useState:ue,useDebugValue:ue,useDeferredValue:ue,useTransition:ue,useMutableSource:ue,useSyncExternalStore:ue,useId:ue,unstable_isNewReconciler:!1},cm={readContext:Oe,useCallback:function(e,t){return Xe().memoizedState=[e,t===void 0?null:t],e},useContext:Oe,useEffect:Eu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ti(4194308,4,Wd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ti(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ti(4,2,e,t)},useMemo:function(e,t){var n=Xe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Xe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=am.bind(null,K,e),[r.memoizedState,e]},useRef:function(e){var t=Xe();return e={current:e},t.memoizedState=e},useState:Cu,useDebugValue:xa,useDeferredValue:function(e){return Xe().memoizedState=e},useTransition:function(){var e=Cu(!1),t=e[0];return e=sm.bind(null,e[1]),Xe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=K,i=Xe();if(Y){if(n===void 0)throw Error(E(407));n=n()}else{if(n=t(),oe===null)throw Error(E(349));nn&30||Od(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Eu(Fd.bind(null,r,o,e),[e]),r.flags|=2048,Ar(9,Dd.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Xe(),t=oe.identifierPrefix;if(Y){var n=ot,r=it;n=(r&~(1<<32-He(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Fr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=lm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},dm={readContext:Oe,useCallback:Qd,useContext:Oe,useEffect:ya,useImperativeHandle:Hd,useInsertionEffect:Bd,useLayoutEffect:Vd,useMemo:Yd,useReducer:dl,useRef:Ud,useState:function(){return dl(Mr)},useDebugValue:xa,useDeferredValue:function(e){var t=De();return Gd(t,te.memoizedState,e)},useTransition:function(){var e=dl(Mr)[0],t=De().memoizedState;return[e,t]},useMutableSource:Ld,useSyncExternalStore:$d,useId:Kd,unstable_isNewReconciler:!1},fm={readContext:Oe,useCallback:Qd,useContext:Oe,useEffect:ya,useImperativeHandle:Hd,useInsertionEffect:Bd,useLayoutEffect:Vd,useMemo:Yd,useReducer:fl,useRef:Ud,useState:function(){return fl(Mr)},useDebugValue:xa,useDeferredValue:function(e){var t=De();return te===null?t.memoizedState=e:Gd(t,te.memoizedState,e)},useTransition:function(){var e=fl(Mr)[0],t=De().memoizedState;return[e,t]},useMutableSource:Ld,useSyncExternalStore:$d,useId:Kd,unstable_isNewReconciler:!1};function Be(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function fs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:X({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Po={isMounted:function(e){return(e=e._reactInternals)?sn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=me(),i=Tt(e),o=lt(r,i);o.payload=t,n!=null&&(o.callback=n),t=_t(e,o,i),t!==null&&(Qe(t,e,i,r),_i(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=me(),i=Tt(e),o=lt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=_t(e,o,i),t!==null&&(Qe(t,e,i,r),_i(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=me(),r=Tt(e),i=lt(n,r);i.tag=2,t!=null&&(i.callback=t),t=_t(e,i,r),t!==null&&(Qe(t,e,r,n),_i(t,e,r))}};function ju(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Ir(n,r)||!Ir(i,o):!0}function Jd(e,t,n){var r=!1,i=Lt,o=t.contextType;return typeof o=="object"&&o!==null?o=Oe(o):(i=Se(t)?en:fe.current,r=t.contextTypes,o=(r=r!=null)?Ln(e,i):Lt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Po,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Pu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Po.enqueueReplaceState(t,t.state,null)}function ps(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},da(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Oe(o):(o=Se(t)?en:fe.current,i.context=Ln(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(fs(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Po.enqueueReplaceState(i,i.state,null),eo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Fn(e,t){try{var n="",r=t;do n+=Up(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function pl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function hs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var pm=typeof WeakMap=="function"?WeakMap:Map;function qd(e,t,n){n=lt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){oo||(oo=!0,Es=r),hs(e,t)},n}function ef(e,t,n){n=lt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){hs(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){hs(e,t),typeof r!="function"&&(Nt===null?Nt=new Set([this]):Nt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function _u(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new pm;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=_m.bind(null,e,t,n),t.then(e,e))}function Nu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Tu(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=lt(-1,1),t.tag=2,_t(n,t,1))),n.lanes|=1),e)}var hm=dt.ReactCurrentOwner,xe=!1;function he(e,t,n,r){t.child=e===null?Td(t,null,n,r):On(t,e.child,n,r)}function zu(e,t,n,r,i){n=n.render;var o=t.ref;return zn(t,i),r=ga(e,t,n,r,o,i),n=va(),e!==null&&!xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ct(e,t,i)):(Y&&n&&ia(t),t.flags|=1,he(e,t,r,i),t.child)}function Iu(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!_a(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,tf(e,t,o,r,i)):(e=Li(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ir,n(l,r)&&e.ref===t.ref)return ct(e,t,i)}return t.flags|=1,e=zt(o,r),e.ref=t.ref,e.return=t,t.child=e}function tf(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Ir(o,r)&&e.ref===t.ref)if(xe=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(xe=!0);else return t.lanes=e.lanes,ct(e,t,i)}return ms(e,t,n,r,i)}function nf(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(En,je),je|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,V(En,je),je|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,V(En,je),je|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,V(En,je),je|=r;return he(e,t,i,n),t.child}function rf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ms(e,t,n,r,i){var o=Se(n)?en:fe.current;return o=Ln(t,o),zn(t,i),n=ga(e,t,n,r,o,i),r=va(),e!==null&&!xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ct(e,t,i)):(Y&&r&&ia(t),t.flags|=1,he(e,t,n,i),t.child)}function Ru(e,t,n,r,i){if(Se(n)){var o=!0;Xi(t)}else o=!1;if(zn(t,i),t.stateNode===null)zi(e,t),Jd(t,n,r),ps(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var a=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=Oe(u):(u=Se(n)?en:fe.current,u=Ln(t,u));var m=n.getDerivedStateFromProps,h=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||a!==u)&&Pu(t,l,r,u),vt=!1;var g=t.memoizedState;l.state=g,eo(t,r,l,i),a=t.memoizedState,s!==r||g!==a||ke.current||vt?(typeof m=="function"&&(fs(t,n,m,r),a=t.memoizedState),(s=vt||ju(t,n,s,r,g,a,u))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),l.props=r,l.state=a,l.context=u,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Id(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Be(t.type,s),l.props=u,h=t.pendingProps,g=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=Oe(a):(a=Se(n)?en:fe.current,a=Ln(t,a));var x=n.getDerivedStateFromProps;(m=typeof x=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==h||g!==a)&&Pu(t,l,r,a),vt=!1,g=t.memoizedState,l.state=g,eo(t,r,l,i);var w=t.memoizedState;s!==h||g!==w||ke.current||vt?(typeof x=="function"&&(fs(t,n,x,r),w=t.memoizedState),(u=vt||ju(t,n,u,r,g,w,a)||!1)?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,w,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,w,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),l.props=r,l.state=w,l.context=a,r=u):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return gs(e,t,n,r,o,i)}function gs(e,t,n,r,i,o){rf(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&vu(t,n,!1),ct(e,t,o);r=t.stateNode,hm.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=On(t,e.child,null,o),t.child=On(t,null,s,o)):he(e,t,s,o),t.memoizedState=r.state,i&&vu(t,n,!0),t.child}function of(e){var t=e.stateNode;t.pendingContext?gu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&gu(e,t.context,!1),fa(e,t.containerInfo)}function Lu(e,t,n,r,i){return $n(),la(i),t.flags|=256,he(e,t,n,r),t.child}var vs={dehydrated:null,treeContext:null,retryLane:0};function ys(e){return{baseLanes:e,cachePool:null,transitions:null}}function lf(e,t,n){var r=t.pendingProps,i=G.current,o=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),V(G,i&1),e===null)return cs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=To(l,r,0,null),e=Zt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ys(n),t.memoizedState=vs,e):wa(t,l));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return mm(e,t,l,r,s,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,s=i.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=zt(i,a),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=zt(s,o):(o=Zt(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?ys(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=vs,r}return o=e.child,e=o.sibling,r=zt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function wa(e,t){return t=To({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function fi(e,t,n,r){return r!==null&&la(r),On(t,e.child,null,n),e=wa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function mm(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=pl(Error(E(422))),fi(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=To({mode:"visible",children:r.children},i,0,null),o=Zt(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&On(t,e.child,null,l),t.child.memoizedState=ys(l),t.memoizedState=vs,o);if(!(t.mode&1))return fi(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(E(419)),r=pl(o,r,void 0),fi(e,t,l,r)}if(s=(l&e.childLanes)!==0,xe||s){if(r=oe,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,ut(e,i),Qe(r,e,i,-1))}return Pa(),r=pl(Error(E(421))),fi(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Nm.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Pe=Pt(i.nextSibling),_e=t,Y=!0,We=null,e!==null&&(Ie[Re++]=it,Ie[Re++]=ot,Ie[Re++]=tn,it=e.id,ot=e.overflow,tn=t),t=wa(t,r.children),t.flags|=4096,t)}function $u(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ds(e.return,t,n)}function hl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function sf(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(he(e,t,r.children,n),r=G.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$u(e,n,t);else if(e.tag===19)$u(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(V(G,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&to(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),hl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&to(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}hl(t,!0,n,null,o);break;case"together":hl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function zi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ct(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),rn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,n=zt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=zt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function gm(e,t,n){switch(t.tag){case 3:of(t),$n();break;case 5:Rd(t);break;case 1:Se(t.type)&&Xi(t);break;case 4:fa(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;V(Ji,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(V(G,G.current&1),t.flags|=128,null):n&t.child.childLanes?lf(e,t,n):(V(G,G.current&1),e=ct(e,t,n),e!==null?e.sibling:null);V(G,G.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return sf(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),V(G,G.current),r)break;return null;case 22:case 23:return t.lanes=0,nf(e,t,n)}return ct(e,t,n)}var af,xs,uf,cf;af=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};xs=function(){};uf=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Gt(qe.current);var o=null;switch(n){case"input":i=Bl(e,i),r=Bl(e,r),o=[];break;case"select":i=X({},i,{value:void 0}),r=X({},r,{value:void 0}),o=[];break;case"textarea":i=Hl(e,i),r=Hl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Gi)}Yl(n,r);var l;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Er.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var a=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==s&&(a!=null||s!=null))if(u==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(o||(o=[]),o.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(o=o||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Er.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&W("scroll",e),o||s===a||(o=[])):(o=o||[]).push(u,a))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};cf=function(e,t,n,r){n!==r&&(t.flags|=4)};function or(e,t){if(!Y)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function vm(e,t,n){var r=t.pendingProps;switch(oa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ce(t),null;case 1:return Se(t.type)&&Ki(),ce(t),null;case 3:return r=t.stateNode,Dn(),Q(ke),Q(fe),ha(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ci(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,We!==null&&(_s(We),We=null))),xs(e,t),ce(t),null;case 5:pa(t);var i=Gt(Dr.current);if(n=t.type,e!==null&&t.stateNode!=null)uf(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(E(166));return ce(t),null}if(e=Gt(qe.current),ci(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[be]=t,r[$r]=o,e=(t.mode&1)!==0,n){case"dialog":W("cancel",r),W("close",r);break;case"iframe":case"object":case"embed":W("load",r);break;case"video":case"audio":for(i=0;i<fr.length;i++)W(fr[i],r);break;case"source":W("error",r);break;case"img":case"image":case"link":W("error",r),W("load",r);break;case"details":W("toggle",r);break;case"input":Wa(r,o),W("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},W("invalid",r);break;case"textarea":Qa(r,o),W("invalid",r)}Yl(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var s=o[l];l==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&ui(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&ui(r.textContent,s,e),i=["children",""+s]):Er.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&W("scroll",r)}switch(n){case"input":ti(r),Ha(r,o,!0);break;case"textarea":ti(r),Ya(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Gi)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Fc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[be]=t,e[$r]=r,af(e,t,!1,!1),t.stateNode=e;e:{switch(l=Gl(n,r),n){case"dialog":W("cancel",e),W("close",e),i=r;break;case"iframe":case"object":case"embed":W("load",e),i=r;break;case"video":case"audio":for(i=0;i<fr.length;i++)W(fr[i],e);i=r;break;case"source":W("error",e),i=r;break;case"img":case"image":case"link":W("error",e),W("load",e),i=r;break;case"details":W("toggle",e),i=r;break;case"input":Wa(e,r),i=Bl(e,r),W("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=X({},r,{value:void 0}),W("invalid",e);break;case"textarea":Qa(e,r),i=Hl(e,r),W("invalid",e);break;default:i=r}Yl(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="style"?Uc(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Mc(e,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&jr(e,a):typeof a=="number"&&jr(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Er.hasOwnProperty(o)?a!=null&&o==="onScroll"&&W("scroll",e):a!=null&&Hs(e,o,a,l))}switch(n){case"input":ti(e),Ha(e,r,!1);break;case"textarea":ti(e),Ya(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Rt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Pn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Pn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Gi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ce(t),null;case 6:if(e&&t.stateNode!=null)cf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(E(166));if(n=Gt(Dr.current),Gt(qe.current),ci(t)){if(r=t.stateNode,n=t.memoizedProps,r[be]=t,(o=r.nodeValue!==n)&&(e=_e,e!==null))switch(e.tag){case 3:ui(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ui(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[be]=t,t.stateNode=r}return ce(t),null;case 13:if(Q(G),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Y&&Pe!==null&&t.mode&1&&!(t.flags&128))_d(),$n(),t.flags|=98560,o=!1;else if(o=ci(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(E(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(E(317));o[be]=t}else $n(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ce(t),o=!1}else We!==null&&(_s(We),We=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||G.current&1?ne===0&&(ne=3):Pa())),t.updateQueue!==null&&(t.flags|=4),ce(t),null);case 4:return Dn(),xs(e,t),e===null&&Rr(t.stateNode.containerInfo),ce(t),null;case 10:return ua(t.type._context),ce(t),null;case 17:return Se(t.type)&&Ki(),ce(t),null;case 19:if(Q(G),o=t.memoizedState,o===null)return ce(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)or(o,!1);else{if(ne!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=to(e),l!==null){for(t.flags|=128,or(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return V(G,G.current&1|2),t.child}e=e.sibling}o.tail!==null&&J()>Mn&&(t.flags|=128,r=!0,or(o,!1),t.lanes=4194304)}else{if(!r)if(e=to(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),or(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!Y)return ce(t),null}else 2*J()-o.renderingStartTime>Mn&&n!==1073741824&&(t.flags|=128,r=!0,or(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=J(),t.sibling=null,n=G.current,V(G,r?n&1|2:n&1),t):(ce(t),null);case 22:case 23:return ja(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?je&1073741824&&(ce(t),t.subtreeFlags&6&&(t.flags|=8192)):ce(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function ym(e,t){switch(oa(t),t.tag){case 1:return Se(t.type)&&Ki(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Dn(),Q(ke),Q(fe),ha(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return pa(t),null;case 13:if(Q(G),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));$n()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(G),null;case 4:return Dn(),null;case 10:return ua(t.type._context),null;case 22:case 23:return ja(),null;case 24:return null;default:return null}}var pi=!1,de=!1,xm=typeof WeakSet=="function"?WeakSet:Set,T=null;function Cn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Z(e,t,r)}else n.current=null}function ws(e,t,n){try{n()}catch(r){Z(e,t,r)}}var Ou=!1;function wm(e,t){if(rs=Hi,e=hd(),ra(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,s=-1,a=-1,u=0,m=0,h=e,g=null;t:for(;;){for(var x;h!==n||i!==0&&h.nodeType!==3||(s=l+i),h!==o||r!==0&&h.nodeType!==3||(a=l+r),h.nodeType===3&&(l+=h.nodeValue.length),(x=h.firstChild)!==null;)g=h,h=x;for(;;){if(h===e)break t;if(g===n&&++u===i&&(s=l),g===o&&++m===r&&(a=l),(x=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=x}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(is={focusedElem:e,selectionRange:n},Hi=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var k=w.memoizedProps,_=w.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?k:Be(t.type,k),_);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(v){Z(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return w=Ou,Ou=!1,w}function wr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&ws(t,n,o)}i=i.next}while(i!==r)}}function _o(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ks(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function df(e){var t=e.alternate;t!==null&&(e.alternate=null,df(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[be],delete t[$r],delete t[ss],delete t[nm],delete t[rm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ff(e){return e.tag===5||e.tag===3||e.tag===4}function Du(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ff(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ss(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Gi));else if(r!==4&&(e=e.child,e!==null))for(Ss(e,t,n),e=e.sibling;e!==null;)Ss(e,t,n),e=e.sibling}function Cs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Cs(e,t,n),e=e.sibling;e!==null;)Cs(e,t,n),e=e.sibling}var le=null,Ve=!1;function ht(e,t,n){for(n=n.child;n!==null;)pf(e,t,n),n=n.sibling}function pf(e,t,n){if(Je&&typeof Je.onCommitFiberUnmount=="function")try{Je.onCommitFiberUnmount(xo,n)}catch{}switch(n.tag){case 5:de||Cn(n,t);case 6:var r=le,i=Ve;le=null,ht(e,t,n),le=r,Ve=i,le!==null&&(Ve?(e=le,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):le.removeChild(n.stateNode));break;case 18:le!==null&&(Ve?(e=le,n=n.stateNode,e.nodeType===8?sl(e.parentNode,n):e.nodeType===1&&sl(e,n),Tr(e)):sl(le,n.stateNode));break;case 4:r=le,i=Ve,le=n.stateNode.containerInfo,Ve=!0,ht(e,t,n),le=r,Ve=i;break;case 0:case 11:case 14:case 15:if(!de&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&ws(n,t,l),i=i.next}while(i!==r)}ht(e,t,n);break;case 1:if(!de&&(Cn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Z(n,t,s)}ht(e,t,n);break;case 21:ht(e,t,n);break;case 22:n.mode&1?(de=(r=de)||n.memoizedState!==null,ht(e,t,n),de=r):ht(e,t,n);break;default:ht(e,t,n)}}function Fu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new xm),t.forEach(function(r){var i=Tm.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ae(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:le=s.stateNode,Ve=!1;break e;case 3:le=s.stateNode.containerInfo,Ve=!0;break e;case 4:le=s.stateNode.containerInfo,Ve=!0;break e}s=s.return}if(le===null)throw Error(E(160));pf(o,l,i),le=null,Ve=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){Z(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)hf(t,e),t=t.sibling}function hf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ae(t,e),Ke(e),r&4){try{wr(3,e,e.return),_o(3,e)}catch(k){Z(e,e.return,k)}try{wr(5,e,e.return)}catch(k){Z(e,e.return,k)}}break;case 1:Ae(t,e),Ke(e),r&512&&n!==null&&Cn(n,n.return);break;case 5:if(Ae(t,e),Ke(e),r&512&&n!==null&&Cn(n,n.return),e.flags&32){var i=e.stateNode;try{jr(i,"")}catch(k){Z(e,e.return,k)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Oc(i,o),Gl(s,l);var u=Gl(s,o);for(l=0;l<a.length;l+=2){var m=a[l],h=a[l+1];m==="style"?Uc(i,h):m==="dangerouslySetInnerHTML"?Mc(i,h):m==="children"?jr(i,h):Hs(i,m,h,u)}switch(s){case"input":Vl(i,o);break;case"textarea":Dc(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var x=o.value;x!=null?Pn(i,!!o.multiple,x,!1):g!==!!o.multiple&&(o.defaultValue!=null?Pn(i,!!o.multiple,o.defaultValue,!0):Pn(i,!!o.multiple,o.multiple?[]:"",!1))}i[$r]=o}catch(k){Z(e,e.return,k)}}break;case 6:if(Ae(t,e),Ke(e),r&4){if(e.stateNode===null)throw Error(E(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(k){Z(e,e.return,k)}}break;case 3:if(Ae(t,e),Ke(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Tr(t.containerInfo)}catch(k){Z(e,e.return,k)}break;case 4:Ae(t,e),Ke(e);break;case 13:Ae(t,e),Ke(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Ca=J())),r&4&&Fu(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(de=(u=de)||m,Ae(t,e),de=u):Ae(t,e),Ke(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!m&&e.mode&1)for(T=e,m=e.child;m!==null;){for(h=T=m;T!==null;){switch(g=T,x=g.child,g.tag){case 0:case 11:case 14:case 15:wr(4,g,g.return);break;case 1:Cn(g,g.return);var w=g.stateNode;if(typeof w.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(k){Z(r,n,k)}}break;case 5:Cn(g,g.return);break;case 22:if(g.memoizedState!==null){Au(h);continue}}x!==null?(x.return=g,T=x):Au(h)}m=m.sibling}e:for(m=null,h=e;;){if(h.tag===5){if(m===null){m=h;try{i=h.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=h.stateNode,a=h.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Ac("display",l))}catch(k){Z(e,e.return,k)}}}else if(h.tag===6){if(m===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(k){Z(e,e.return,k)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;m===h&&(m=null),h=h.return}m===h&&(m=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ae(t,e),Ke(e),r&4&&Fu(e);break;case 21:break;default:Ae(t,e),Ke(e)}}function Ke(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ff(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(jr(i,""),r.flags&=-33);var o=Du(e);Cs(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,s=Du(e);Ss(e,s,l);break;default:throw Error(E(161))}}catch(a){Z(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function km(e,t,n){T=e,mf(e)}function mf(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var i=T,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||pi;if(!l){var s=i.alternate,a=s!==null&&s.memoizedState!==null||de;s=pi;var u=de;if(pi=l,(de=a)&&!u)for(T=i;T!==null;)l=T,a=l.child,l.tag===22&&l.memoizedState!==null?Uu(i):a!==null?(a.return=l,T=a):Uu(i);for(;o!==null;)T=o,mf(o),o=o.sibling;T=i,pi=s,de=u}Mu(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,T=o):Mu(e)}}function Mu(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:de||_o(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!de)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Be(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Su(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Su(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var m=u.memoizedState;if(m!==null){var h=m.dehydrated;h!==null&&Tr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}de||t.flags&512&&ks(t)}catch(g){Z(t,t.return,g)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function Au(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function Uu(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{_o(4,t)}catch(a){Z(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){Z(t,i,a)}}var o=t.return;try{ks(t)}catch(a){Z(t,o,a)}break;case 5:var l=t.return;try{ks(t)}catch(a){Z(t,l,a)}}}catch(a){Z(t,t.return,a)}if(t===e){T=null;break}var s=t.sibling;if(s!==null){s.return=t.return,T=s;break}T=t.return}}var Sm=Math.ceil,io=dt.ReactCurrentDispatcher,ka=dt.ReactCurrentOwner,$e=dt.ReactCurrentBatchConfig,D=0,oe=null,ee=null,se=0,je=0,En=Ot(0),ne=0,Ur=null,rn=0,No=0,Sa=0,kr=null,ye=null,Ca=0,Mn=1/0,tt=null,oo=!1,Es=null,Nt=null,hi=!1,kt=null,lo=0,Sr=0,js=null,Ii=-1,Ri=0;function me(){return D&6?J():Ii!==-1?Ii:Ii=J()}function Tt(e){return e.mode&1?D&2&&se!==0?se&-se:om.transition!==null?(Ri===0&&(Ri=Jc()),Ri):(e=M,e!==0||(e=window.event,e=e===void 0?16:od(e.type)),e):1}function Qe(e,t,n,r){if(50<Sr)throw Sr=0,js=null,Error(E(185));Qr(e,n,r),(!(D&2)||e!==oe)&&(e===oe&&(!(D&2)&&(No|=n),ne===4&&xt(e,se)),Ce(e,r),n===1&&D===0&&!(t.mode&1)&&(Mn=J()+500,Eo&&Dt()))}function Ce(e,t){var n=e.callbackNode;oh(e,t);var r=Wi(e,e===oe?se:0);if(r===0)n!==null&&Xa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Xa(n),t===1)e.tag===0?im(Bu.bind(null,e)):Ed(Bu.bind(null,e)),em(function(){!(D&6)&&Dt()}),n=null;else{switch(qc(r)){case 1:n=Xs;break;case 4:n=Zc;break;case 16:n=Vi;break;case 536870912:n=bc;break;default:n=Vi}n=Cf(n,gf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function gf(e,t){if(Ii=-1,Ri=0,D&6)throw Error(E(327));var n=e.callbackNode;if(In()&&e.callbackNode!==n)return null;var r=Wi(e,e===oe?se:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=so(e,r);else{t=r;var i=D;D|=2;var o=yf();(oe!==e||se!==t)&&(tt=null,Mn=J()+500,Xt(e,t));do try{jm();break}catch(s){vf(e,s)}while(1);aa(),io.current=o,D=i,ee!==null?t=0:(oe=null,se=0,t=ne)}if(t!==0){if(t===2&&(i=Jl(e),i!==0&&(r=i,t=Ps(e,i))),t===1)throw n=Ur,Xt(e,0),xt(e,r),Ce(e,J()),n;if(t===6)xt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Cm(i)&&(t=so(e,r),t===2&&(o=Jl(e),o!==0&&(r=o,t=Ps(e,o))),t===1))throw n=Ur,Xt(e,0),xt(e,r),Ce(e,J()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(E(345));case 2:Ht(e,ye,tt);break;case 3:if(xt(e,r),(r&130023424)===r&&(t=Ca+500-J(),10<t)){if(Wi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){me(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ls(Ht.bind(null,e,ye,tt),t);break}Ht(e,ye,tt);break;case 4:if(xt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-He(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Sm(r/1960))-r,10<r){e.timeoutHandle=ls(Ht.bind(null,e,ye,tt),r);break}Ht(e,ye,tt);break;case 5:Ht(e,ye,tt);break;default:throw Error(E(329))}}}return Ce(e,J()),e.callbackNode===n?gf.bind(null,e):null}function Ps(e,t){var n=kr;return e.current.memoizedState.isDehydrated&&(Xt(e,t).flags|=256),e=so(e,t),e!==2&&(t=ye,ye=n,t!==null&&_s(t)),e}function _s(e){ye===null?ye=e:ye.push.apply(ye,e)}function Cm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Ge(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function xt(e,t){for(t&=~Sa,t&=~No,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-He(t),r=1<<n;e[n]=-1,t&=~r}}function Bu(e){if(D&6)throw Error(E(327));In();var t=Wi(e,0);if(!(t&1))return Ce(e,J()),null;var n=so(e,t);if(e.tag!==0&&n===2){var r=Jl(e);r!==0&&(t=r,n=Ps(e,r))}if(n===1)throw n=Ur,Xt(e,0),xt(e,t),Ce(e,J()),n;if(n===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ht(e,ye,tt),Ce(e,J()),null}function Ea(e,t){var n=D;D|=1;try{return e(t)}finally{D=n,D===0&&(Mn=J()+500,Eo&&Dt())}}function on(e){kt!==null&&kt.tag===0&&!(D&6)&&In();var t=D;D|=1;var n=$e.transition,r=M;try{if($e.transition=null,M=1,e)return e()}finally{M=r,$e.transition=n,D=t,!(D&6)&&Dt()}}function ja(){je=En.current,Q(En)}function Xt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,qh(n)),ee!==null)for(n=ee.return;n!==null;){var r=n;switch(oa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ki();break;case 3:Dn(),Q(ke),Q(fe),ha();break;case 5:pa(r);break;case 4:Dn();break;case 13:Q(G);break;case 19:Q(G);break;case 10:ua(r.type._context);break;case 22:case 23:ja()}n=n.return}if(oe=e,ee=e=zt(e.current,null),se=je=t,ne=0,Ur=null,Sa=No=rn=0,ye=kr=null,Yt!==null){for(t=0;t<Yt.length;t++)if(n=Yt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}Yt=null}return e}function vf(e,t){do{var n=ee;try{if(aa(),Ni.current=ro,no){for(var r=K.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}no=!1}if(nn=0,re=te=K=null,xr=!1,Fr=0,ka.current=null,n===null||n.return===null){ne=1,Ur=t,ee=null;break}e:{var o=e,l=n.return,s=n,a=t;if(t=se,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,m=s,h=m.tag;if(!(m.mode&1)&&(h===0||h===11||h===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var x=Nu(l);if(x!==null){x.flags&=-257,Tu(x,l,s,o,t),x.mode&1&&_u(o,u,t),t=x,a=u;var w=t.updateQueue;if(w===null){var k=new Set;k.add(a),t.updateQueue=k}else w.add(a);break e}else{if(!(t&1)){_u(o,u,t),Pa();break e}a=Error(E(426))}}else if(Y&&s.mode&1){var _=Nu(l);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Tu(_,l,s,o,t),la(Fn(a,s));break e}}o=a=Fn(a,s),ne!==4&&(ne=2),kr===null?kr=[o]:kr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=qd(o,a,t);ku(o,f);break e;case 1:s=a;var d=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Nt===null||!Nt.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var v=ef(o,s,t);ku(o,v);break e}}o=o.return}while(o!==null)}wf(n)}catch(C){t=C,ee===n&&n!==null&&(ee=n=n.return);continue}break}while(1)}function yf(){var e=io.current;return io.current=ro,e===null?ro:e}function Pa(){(ne===0||ne===3||ne===2)&&(ne=4),oe===null||!(rn&268435455)&&!(No&268435455)||xt(oe,se)}function so(e,t){var n=D;D|=2;var r=yf();(oe!==e||se!==t)&&(tt=null,Xt(e,t));do try{Em();break}catch(i){vf(e,i)}while(1);if(aa(),D=n,io.current=r,ee!==null)throw Error(E(261));return oe=null,se=0,ne}function Em(){for(;ee!==null;)xf(ee)}function jm(){for(;ee!==null&&!Zp();)xf(ee)}function xf(e){var t=Sf(e.alternate,e,je);e.memoizedProps=e.pendingProps,t===null?wf(e):ee=t,ka.current=null}function wf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ym(n,t),n!==null){n.flags&=32767,ee=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ne=6,ee=null;return}}else if(n=vm(n,t,je),n!==null){ee=n;return}if(t=t.sibling,t!==null){ee=t;return}ee=t=e}while(t!==null);ne===0&&(ne=5)}function Ht(e,t,n){var r=M,i=$e.transition;try{$e.transition=null,M=1,Pm(e,t,n,r)}finally{$e.transition=i,M=r}return null}function Pm(e,t,n,r){do In();while(kt!==null);if(D&6)throw Error(E(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(lh(e,o),e===oe&&(ee=oe=null,se=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||hi||(hi=!0,Cf(Vi,function(){return In(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=$e.transition,$e.transition=null;var l=M;M=1;var s=D;D|=4,ka.current=null,wm(e,n),hf(n,e),Yh(is),Hi=!!rs,is=rs=null,e.current=n,km(n),bp(),D=s,M=l,$e.transition=o}else e.current=n;if(hi&&(hi=!1,kt=e,lo=i),o=e.pendingLanes,o===0&&(Nt=null),eh(n.stateNode),Ce(e,J()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(oo)throw oo=!1,e=Es,Es=null,e;return lo&1&&e.tag!==0&&In(),o=e.pendingLanes,o&1?e===js?Sr++:(Sr=0,js=e):Sr=0,Dt(),null}function In(){if(kt!==null){var e=qc(lo),t=$e.transition,n=M;try{if($e.transition=null,M=16>e?16:e,kt===null)var r=!1;else{if(e=kt,kt=null,lo=0,D&6)throw Error(E(331));var i=D;for(D|=4,T=e.current;T!==null;){var o=T,l=o.child;if(T.flags&16){var s=o.deletions;if(s!==null){for(var a=0;a<s.length;a++){var u=s[a];for(T=u;T!==null;){var m=T;switch(m.tag){case 0:case 11:case 15:wr(8,m,o)}var h=m.child;if(h!==null)h.return=m,T=h;else for(;T!==null;){m=T;var g=m.sibling,x=m.return;if(df(m),m===u){T=null;break}if(g!==null){g.return=x,T=g;break}T=x}}}var w=o.alternate;if(w!==null){var k=w.child;if(k!==null){w.child=null;do{var _=k.sibling;k.sibling=null,k=_}while(k!==null)}}T=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,T=l;else e:for(;T!==null;){if(o=T,o.flags&2048)switch(o.tag){case 0:case 11:case 15:wr(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,T=f;break e}T=o.return}}var d=e.current;for(T=d;T!==null;){l=T;var p=l.child;if(l.subtreeFlags&2064&&p!==null)p.return=l,T=p;else e:for(l=d;T!==null;){if(s=T,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:_o(9,s)}}catch(C){Z(s,s.return,C)}if(s===l){T=null;break e}var v=s.sibling;if(v!==null){v.return=s.return,T=v;break e}T=s.return}}if(D=i,Dt(),Je&&typeof Je.onPostCommitFiberRoot=="function")try{Je.onPostCommitFiberRoot(xo,e)}catch{}r=!0}return r}finally{M=n,$e.transition=t}}return!1}function Vu(e,t,n){t=Fn(n,t),t=qd(e,t,1),e=_t(e,t,1),t=me(),e!==null&&(Qr(e,1,t),Ce(e,t))}function Z(e,t,n){if(e.tag===3)Vu(e,e,n);else for(;t!==null;){if(t.tag===3){Vu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Nt===null||!Nt.has(r))){e=Fn(n,e),e=ef(t,e,1),t=_t(t,e,1),e=me(),t!==null&&(Qr(t,1,e),Ce(t,e));break}}t=t.return}}function _m(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=me(),e.pingedLanes|=e.suspendedLanes&n,oe===e&&(se&n)===n&&(ne===4||ne===3&&(se&130023424)===se&&500>J()-Ca?Xt(e,0):Sa|=n),Ce(e,t)}function kf(e,t){t===0&&(e.mode&1?(t=ii,ii<<=1,!(ii&130023424)&&(ii=4194304)):t=1);var n=me();e=ut(e,t),e!==null&&(Qr(e,t,n),Ce(e,n))}function Nm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),kf(e,n)}function Tm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(t),kf(e,n)}var Sf;Sf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ke.current)xe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return xe=!1,gm(e,t,n);xe=!!(e.flags&131072)}else xe=!1,Y&&t.flags&1048576&&jd(t,bi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;zi(e,t),e=t.pendingProps;var i=Ln(t,fe.current);zn(t,n),i=ga(null,t,r,e,i,n);var o=va();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Se(r)?(o=!0,Xi(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,da(t),i.updater=Po,t.stateNode=i,i._reactInternals=t,ps(t,r,e,n),t=gs(null,t,r,!0,o,n)):(t.tag=0,Y&&o&&ia(t),he(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(zi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Im(r),e=Be(r,e),i){case 0:t=ms(null,t,r,e,n);break e;case 1:t=Ru(null,t,r,e,n);break e;case 11:t=zu(null,t,r,e,n);break e;case 14:t=Iu(null,t,r,Be(r.type,e),n);break e}throw Error(E(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Be(r,i),ms(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Be(r,i),Ru(e,t,r,i,n);case 3:e:{if(of(t),e===null)throw Error(E(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Id(e,t),eo(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Fn(Error(E(423)),t),t=Lu(e,t,r,n,i);break e}else if(r!==i){i=Fn(Error(E(424)),t),t=Lu(e,t,r,n,i);break e}else for(Pe=Pt(t.stateNode.containerInfo.firstChild),_e=t,Y=!0,We=null,n=Td(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($n(),r===i){t=ct(e,t,n);break e}he(e,t,r,n)}t=t.child}return t;case 5:return Rd(t),e===null&&cs(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,os(r,i)?l=null:o!==null&&os(r,o)&&(t.flags|=32),rf(e,t),he(e,t,l,n),t.child;case 6:return e===null&&cs(t),null;case 13:return lf(e,t,n);case 4:return fa(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=On(t,null,r,n):he(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Be(r,i),zu(e,t,r,i,n);case 7:return he(e,t,t.pendingProps,n),t.child;case 8:return he(e,t,t.pendingProps.children,n),t.child;case 12:return he(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,V(Ji,r._currentValue),r._currentValue=l,o!==null)if(Ge(o.value,l)){if(o.children===i.children&&!ke.current){t=ct(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){l=o.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=lt(-1,n&-n),a.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var m=u.pending;m===null?a.next=a:(a.next=m.next,m.next=a),u.pending=a}}o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ds(o.return,n,t),s.lanes|=n;break}a=a.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(E(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),ds(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}he(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,zn(t,n),i=Oe(i),r=r(i),t.flags|=1,he(e,t,r,n),t.child;case 14:return r=t.type,i=Be(r,t.pendingProps),i=Be(r.type,i),Iu(e,t,r,i,n);case 15:return tf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Be(r,i),zi(e,t),t.tag=1,Se(r)?(e=!0,Xi(t)):e=!1,zn(t,n),Jd(t,r,i),ps(t,r,i,n),gs(null,t,r,!0,e,n);case 19:return sf(e,t,n);case 22:return nf(e,t,n)}throw Error(E(156,t.tag))};function Cf(e,t){return Xc(e,t)}function zm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Le(e,t,n,r){return new zm(e,t,n,r)}function _a(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Im(e){if(typeof e=="function")return _a(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ys)return 11;if(e===Gs)return 14}return 2}function zt(e,t){var n=e.alternate;return n===null?(n=Le(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Li(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")_a(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case hn:return Zt(n.children,i,o,t);case Qs:l=8,i|=8;break;case Fl:return e=Le(12,n,t,i|2),e.elementType=Fl,e.lanes=o,e;case Ml:return e=Le(13,n,t,i),e.elementType=Ml,e.lanes=o,e;case Al:return e=Le(19,n,t,i),e.elementType=Al,e.lanes=o,e;case Rc:return To(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case zc:l=10;break e;case Ic:l=9;break e;case Ys:l=11;break e;case Gs:l=14;break e;case gt:l=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=Le(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Zt(e,t,n,r){return e=Le(7,e,r,t),e.lanes=n,e}function To(e,t,n,r){return e=Le(22,e,r,t),e.elementType=Rc,e.lanes=n,e.stateNode={isHidden:!1},e}function ml(e,t,n){return e=Le(6,e,null,t),e.lanes=n,e}function gl(e,t,n){return t=Le(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Rm(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zo(0),this.expirationTimes=Zo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Na(e,t,n,r,i,o,l,s,a){return e=new Rm(e,t,n,s,a),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Le(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},da(o),e}function Lm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ef(e){if(!e)return Lt;e=e._reactInternals;e:{if(sn(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Se(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var n=e.type;if(Se(n))return Cd(e,n,t)}return t}function jf(e,t,n,r,i,o,l,s,a){return e=Na(n,r,!0,e,i,o,l,s,a),e.context=Ef(null),n=e.current,r=me(),i=Tt(n),o=lt(r,i),o.callback=t??null,_t(n,o,i),e.current.lanes=i,Qr(e,i,r),Ce(e,r),e}function zo(e,t,n,r){var i=t.current,o=me(),l=Tt(i);return n=Ef(n),t.context===null?t.context=n:t.pendingContext=n,t=lt(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=_t(i,t,l),e!==null&&(Qe(e,i,l,o),_i(e,i,l)),l}function ao(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Wu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ta(e,t){Wu(e,t),(e=e.alternate)&&Wu(e,t)}function $m(){return null}var Pf=typeof reportError=="function"?reportError:function(e){console.error(e)};function za(e){this._internalRoot=e}Io.prototype.render=za.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));zo(e,t,null,null)};Io.prototype.unmount=za.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;on(function(){zo(null,e,null,null)}),t[at]=null}};function Io(e){this._internalRoot=e}Io.prototype.unstable_scheduleHydration=function(e){if(e){var t=nd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<yt.length&&t!==0&&t<yt[n].priority;n++);yt.splice(n,0,e),n===0&&id(e)}};function Ia(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ro(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Hu(){}function Om(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=ao(l);o.call(u)}}var l=jf(t,r,e,0,null,!1,!1,"",Hu);return e._reactRootContainer=l,e[at]=l.current,Rr(e.nodeType===8?e.parentNode:e),on(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=ao(a);s.call(u)}}var a=Na(e,0,!1,null,null,!1,!1,"",Hu);return e._reactRootContainer=a,e[at]=a.current,Rr(e.nodeType===8?e.parentNode:e),on(function(){zo(t,a,n,r)}),a}function Lo(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var s=i;i=function(){var a=ao(l);s.call(a)}}zo(t,l,e,i)}else l=Om(n,t,e,i,r);return ao(l)}ed=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dr(t.pendingLanes);n!==0&&(Zs(t,n|1),Ce(t,J()),!(D&6)&&(Mn=J()+500,Dt()))}break;case 13:on(function(){var r=ut(e,1);if(r!==null){var i=me();Qe(r,e,1,i)}}),Ta(e,1)}};bs=function(e){if(e.tag===13){var t=ut(e,134217728);if(t!==null){var n=me();Qe(t,e,134217728,n)}Ta(e,134217728)}};td=function(e){if(e.tag===13){var t=Tt(e),n=ut(e,t);if(n!==null){var r=me();Qe(n,e,t,r)}Ta(e,t)}};nd=function(){return M};rd=function(e,t){var n=M;try{return M=e,t()}finally{M=n}};Xl=function(e,t,n){switch(t){case"input":if(Vl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Co(r);if(!i)throw Error(E(90));$c(r),Vl(r,i)}}}break;case"textarea":Dc(e,n);break;case"select":t=n.value,t!=null&&Pn(e,!!n.multiple,t,!1)}};Wc=Ea;Hc=on;var Dm={usingClientEntryPoint:!1,Events:[Gr,yn,Co,Bc,Vc,Ea]},lr={findFiberByHostInstance:Qt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Fm={bundleType:lr.bundleType,version:lr.version,rendererPackageName:lr.rendererPackageName,rendererConfig:lr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:dt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Gc(e),e===null?null:e.stateNode},findFiberByHostInstance:lr.findFiberByHostInstance||$m,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mi.isDisabled&&mi.supportsFiber)try{xo=mi.inject(Fm),Je=mi}catch{}}Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dm;Te.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ia(t))throw Error(E(200));return Lm(e,t,null,n)};Te.createRoot=function(e,t){if(!Ia(e))throw Error(E(299));var n=!1,r="",i=Pf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Na(e,1,!1,null,null,n,!1,r,i),e[at]=t.current,Rr(e.nodeType===8?e.parentNode:e),new za(t)};Te.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=Gc(t),e=e===null?null:e.stateNode,e};Te.flushSync=function(e){return on(e)};Te.hydrate=function(e,t,n){if(!Ro(t))throw Error(E(200));return Lo(null,e,t,!0,n)};Te.hydrateRoot=function(e,t,n){if(!Ia(e))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=Pf;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=jf(t,null,e,1,n??null,i,!1,o,l),e[at]=t.current,Rr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Io(t)};Te.render=function(e,t,n){if(!Ro(t))throw Error(E(200));return Lo(null,e,t,!1,n)};Te.unmountComponentAtNode=function(e){if(!Ro(e))throw Error(E(40));return e._reactRootContainer?(on(function(){Lo(null,null,e,!1,function(){e._reactRootContainer=null,e[at]=null})}),!0):!1};Te.unstable_batchedUpdates=Ea;Te.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ro(n))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return Lo(e,t,n,!1,r)};Te.version="18.3.1-next-f1338f8080-20240426";function _f(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_f)}catch(e){console.error(e)}}_f(),Pc.exports=Te;var Mm=Pc.exports,Qu=Mm;Ol.createRoot=Qu.createRoot,Ol.hydrateRoot=Qu.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Br(){return Br=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Br.apply(this,arguments)}var St;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(St||(St={}));const Yu="popstate";function Am(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:l,hash:s}=r.location;return Ns("",{pathname:o,search:l,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:uo(i)}return Bm(t,n,null,e)}function b(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Nf(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Um(){return Math.random().toString(36).substr(2,8)}function Gu(e,t){return{usr:e.state,key:e.key,idx:t}}function Ns(e,t,n,r){return n===void 0&&(n=null),Br({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Kn(t):t,{state:n,key:t&&t.key||r||Um()})}function uo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Kn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Bm(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,s=St.Pop,a=null,u=m();u==null&&(u=0,l.replaceState(Br({},l.state,{idx:u}),""));function m(){return(l.state||{idx:null}).idx}function h(){s=St.Pop;let _=m(),f=_==null?null:_-u;u=_,a&&a({action:s,location:k.location,delta:f})}function g(_,f){s=St.Push;let d=Ns(k.location,_,f);n&&n(d,_),u=m()+1;let p=Gu(d,u),v=k.createHref(d);try{l.pushState(p,"",v)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(v)}o&&a&&a({action:s,location:k.location,delta:1})}function x(_,f){s=St.Replace;let d=Ns(k.location,_,f);n&&n(d,_),u=m();let p=Gu(d,u),v=k.createHref(d);l.replaceState(p,"",v),o&&a&&a({action:s,location:k.location,delta:0})}function w(_){let f=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof _=="string"?_:uo(_);return d=d.replace(/ $/,"%20"),b(f,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,f)}let k={get action(){return s},get location(){return e(i,l)},listen(_){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(Yu,h),a=_,()=>{i.removeEventListener(Yu,h),a=null}},createHref(_){return t(i,_)},createURL:w,encodeLocation(_){let f=w(_);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:g,replace:x,go(_){return l.go(_)}};return k}var Ku;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ku||(Ku={}));function Vm(e,t,n){return n===void 0&&(n="/"),Wm(e,t,n,!1)}function Wm(e,t,n,r){let i=typeof t=="string"?Kn(t):t,o=An(i.pathname||"/",n);if(o==null)return null;let l=Tf(e);Hm(l);let s=null;for(let a=0;s==null&&a<l.length;++a){let u=t0(o);s=qm(l[a],u,r)}return s}function Tf(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,l,s)=>{let a={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};a.relativePath.startsWith("/")&&(b(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=It([r,a.relativePath]),m=n.concat(a);o.children&&o.children.length>0&&(b(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Tf(o.children,t,m,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:bm(u,o.index),routesMeta:m})};return e.forEach((o,l)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))i(o,l);else for(let a of zf(o.path))i(o,l,a)}),t}function zf(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let l=zf(r.join("/")),s=[];return s.push(...l.map(a=>a===""?o:[o,a].join("/"))),i&&s.push(...l),s.map(a=>e.startsWith("/")&&a===""?"/":a)}function Hm(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Jm(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Qm=/^:[\w-]+$/,Ym=3,Gm=2,Km=1,Xm=10,Zm=-2,Xu=e=>e==="*";function bm(e,t){let n=e.split("/"),r=n.length;return n.some(Xu)&&(r+=Zm),t&&(r+=Gm),n.filter(i=>!Xu(i)).reduce((i,o)=>i+(Qm.test(o)?Ym:o===""?Km:Xm),r)}function Jm(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function qm(e,t,n){n===void 0&&(n=!1);let{routesMeta:r}=e,i={},o="/",l=[];for(let s=0;s<r.length;++s){let a=r[s],u=s===r.length-1,m=o==="/"?t:t.slice(o.length)||"/",h=co({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},m),g=a.route;if(!h&&u&&n&&!r[r.length-1].route.index&&(h=co({path:a.relativePath,caseSensitive:a.caseSensitive,end:!1},m)),!h)return null;Object.assign(i,h.params),l.push({params:i,pathname:It([o,h.pathname]),pathnameBase:o0(It([o,h.pathnameBase])),route:g}),h.pathnameBase!=="/"&&(o=It([o,h.pathnameBase]))}return l}function co(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=e0(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((u,m,h)=>{let{paramName:g,isOptional:x}=m;if(g==="*"){let k=s[h]||"";l=o.slice(0,o.length-k.length).replace(/(.)\/+$/,"$1")}const w=s[h];return x&&!w?u[g]=void 0:u[g]=(w||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:l,pattern:e}}function e0(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Nf(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,s,a)=>(r.push({paramName:s,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function t0(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Nf(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function An(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function n0(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Kn(e):e;return{pathname:n?n.startsWith("/")?n:r0(n,t):t,search:l0(r),hash:s0(i)}}function r0(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function vl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function i0(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function If(e,t){let n=i0(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Rf(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Kn(e):(i=Br({},e),b(!i.pathname||!i.pathname.includes("?"),vl("?","pathname","search",i)),b(!i.pathname||!i.pathname.includes("#"),vl("#","pathname","hash",i)),b(!i.search||!i.search.includes("#"),vl("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,s;if(l==null)s=n;else{let h=t.length-1;if(!r&&l.startsWith("..")){let g=l.split("/");for(;g[0]==="..";)g.shift(),h-=1;i.pathname=g.join("/")}s=h>=0?t[h]:"/"}let a=n0(i,s),u=l&&l!=="/"&&l.endsWith("/"),m=(o||l===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||m)&&(a.pathname+="/"),a}const It=e=>e.join("/").replace(/\/\/+/g,"/"),o0=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),l0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,s0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function a0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Lf=["post","put","patch","delete"];new Set(Lf);const u0=["get",...Lf];new Set(u0);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vr(){return Vr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vr.apply(this,arguments)}const $o=P.createContext(null),$f=P.createContext(null),Ft=P.createContext(null),Oo=P.createContext(null),an=P.createContext({outlet:null,matches:[],isDataRoute:!1}),Of=P.createContext(null);function c0(e,t){let{relative:n}=t===void 0?{}:t;Xr()||b(!1);let{basename:r,navigator:i}=P.useContext(Ft),{hash:o,pathname:l,search:s}=Do(e,{relative:n}),a=l;return r!=="/"&&(a=l==="/"?r:It([r,l])),i.createHref({pathname:a,search:s,hash:o})}function Xr(){return P.useContext(Oo)!=null}function Xn(){return Xr()||b(!1),P.useContext(Oo).location}function Df(e){P.useContext(Ft).static||P.useLayoutEffect(e)}function d0(){let{isDataRoute:e}=P.useContext(an);return e?E0():f0()}function f0(){Xr()||b(!1);let e=P.useContext($o),{basename:t,future:n,navigator:r}=P.useContext(Ft),{matches:i}=P.useContext(an),{pathname:o}=Xn(),l=JSON.stringify(If(i,n.v7_relativeSplatPath)),s=P.useRef(!1);return Df(()=>{s.current=!0}),P.useCallback(function(u,m){if(m===void 0&&(m={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let h=Rf(u,JSON.parse(l),o,m.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:It([t,h.pathname])),(m.replace?r.replace:r.push)(h,m.state,m)},[t,r,l,o,e])}function Do(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=P.useContext(Ft),{matches:i}=P.useContext(an),{pathname:o}=Xn(),l=JSON.stringify(If(i,r.v7_relativeSplatPath));return P.useMemo(()=>Rf(e,JSON.parse(l),o,n==="path"),[e,l,o,n])}function p0(e,t){return h0(e,t)}function h0(e,t,n,r){Xr()||b(!1);let{navigator:i,static:o}=P.useContext(Ft),{matches:l}=P.useContext(an),s=l[l.length-1],a=s?s.params:{};s&&s.pathname;let u=s?s.pathnameBase:"/";s&&s.route;let m=Xn(),h;if(t){var g;let f=typeof t=="string"?Kn(t):t;u==="/"||(g=f.pathname)!=null&&g.startsWith(u)||b(!1),h=f}else h=m;let x=h.pathname||"/",w=x;if(u!=="/"){let f=u.replace(/^\//,"").split("/");w="/"+x.replace(/^\//,"").split("/").slice(f.length).join("/")}let k=!o&&n&&n.matches&&n.matches.length>0?n.matches:Vm(e,{pathname:w}),_=x0(k&&k.map(f=>Object.assign({},f,{params:Object.assign({},a,f.params),pathname:It([u,i.encodeLocation?i.encodeLocation(f.pathname).pathname:f.pathname]),pathnameBase:f.pathnameBase==="/"?u:It([u,i.encodeLocation?i.encodeLocation(f.pathnameBase).pathname:f.pathnameBase])})),l,n,r);return t&&_?P.createElement(Oo.Provider,{value:{location:Vr({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:St.Pop}},_):_}function m0(){let e=C0(),t=a0(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return P.createElement(P.Fragment,null,P.createElement("h2",null,"Unexpected Application Error!"),P.createElement("h3",{style:{fontStyle:"italic"}},t),n?P.createElement("pre",{style:i},n):null,o)}const g0=P.createElement(m0,null);class v0 extends P.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?P.createElement(an.Provider,{value:this.props.routeContext},P.createElement(Of.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function y0(e){let{routeContext:t,match:n,children:r}=e,i=P.useContext($o);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),P.createElement(an.Provider,{value:t},r)}function x0(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,s=(i=n)==null?void 0:i.errors;if(s!=null){let m=l.findIndex(h=>h.route.id&&(s==null?void 0:s[h.route.id])!==void 0);m>=0||b(!1),l=l.slice(0,Math.min(l.length,m+1))}let a=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let m=0;m<l.length;m++){let h=l[m];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(u=m),h.route.id){let{loaderData:g,errors:x}=n,w=h.route.loader&&g[h.route.id]===void 0&&(!x||x[h.route.id]===void 0);if(h.route.lazy||w){a=!0,u>=0?l=l.slice(0,u+1):l=[l[0]];break}}}return l.reduceRight((m,h,g)=>{let x,w=!1,k=null,_=null;n&&(x=s&&h.route.id?s[h.route.id]:void 0,k=h.route.errorElement||g0,a&&(u<0&&g===0?(j0("route-fallback",!1),w=!0,_=null):u===g&&(w=!0,_=h.route.hydrateFallbackElement||null)));let f=t.concat(l.slice(0,g+1)),d=()=>{let p;return x?p=k:w?p=_:h.route.Component?p=P.createElement(h.route.Component,null):h.route.element?p=h.route.element:p=m,P.createElement(y0,{match:h,routeContext:{outlet:m,matches:f,isDataRoute:n!=null},children:p})};return n&&(h.route.ErrorBoundary||h.route.errorElement||g===0)?P.createElement(v0,{location:n.location,revalidation:n.revalidation,component:k,error:x,children:d(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):d()},null)}var Ff=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Ff||{}),fo=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(fo||{});function w0(e){let t=P.useContext($o);return t||b(!1),t}function k0(e){let t=P.useContext($f);return t||b(!1),t}function S0(e){let t=P.useContext(an);return t||b(!1),t}function Mf(e){let t=S0(),n=t.matches[t.matches.length-1];return n.route.id||b(!1),n.route.id}function C0(){var e;let t=P.useContext(Of),n=k0(fo.UseRouteError),r=Mf(fo.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function E0(){let{router:e}=w0(Ff.UseNavigateStable),t=Mf(fo.UseNavigateStable),n=P.useRef(!1);return Df(()=>{n.current=!0}),P.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Vr({fromRouteId:t},o)))},[e,t])}const Zu={};function j0(e,t,n){!t&&!Zu[e]&&(Zu[e]=!0)}function P0(e,t){e==null||e.v7_startTransition,(e==null?void 0:e.v7_relativeSplatPath)===void 0&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}function fn(e){b(!1)}function _0(e){let{basename:t="/",children:n=null,location:r,navigationType:i=St.Pop,navigator:o,static:l=!1,future:s}=e;Xr()&&b(!1);let a=t.replace(/^\/*/,"/"),u=P.useMemo(()=>({basename:a,navigator:o,static:l,future:Vr({v7_relativeSplatPath:!1},s)}),[a,s,o,l]);typeof r=="string"&&(r=Kn(r));let{pathname:m="/",search:h="",hash:g="",state:x=null,key:w="default"}=r,k=P.useMemo(()=>{let _=An(m,a);return _==null?null:{location:{pathname:_,search:h,hash:g,state:x,key:w},navigationType:i}},[a,m,h,g,x,w,i]);return k==null?null:P.createElement(Ft.Provider,{value:u},P.createElement(Oo.Provider,{children:n,value:k}))}function N0(e){let{children:t,location:n}=e;return p0(Ts(t),n)}new Promise(()=>{});function Ts(e,t){t===void 0&&(t=[]);let n=[];return P.Children.forEach(e,(r,i)=>{if(!P.isValidElement(r))return;let o=[...t,i];if(r.type===P.Fragment){n.push.apply(n,Ts(r.props.children,o));return}r.type!==fn&&b(!1),!r.props.index||!r.props.children||b(!1);let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=Ts(r.props.children,o)),n.push(l)}),n}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function po(){return po=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},po.apply(this,arguments)}function Af(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function T0(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function z0(e,t){return e.button===0&&(!t||t==="_self")&&!T0(e)}const I0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],R0=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],L0="6";try{window.__reactRouterVersion=L0}catch{}const $0=P.createContext({isTransitioning:!1}),O0="startTransition",bu=_p[O0];function D0(e){let{basename:t,children:n,future:r,window:i}=e,o=P.useRef();o.current==null&&(o.current=Am({window:i,v5Compat:!0}));let l=o.current,[s,a]=P.useState({action:l.action,location:l.location}),{v7_startTransition:u}=r||{},m=P.useCallback(h=>{u&&bu?bu(()=>a(h)):a(h)},[a,u]);return P.useLayoutEffect(()=>l.listen(m),[l,m]),P.useEffect(()=>P0(r),[r]),P.createElement(_0,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:l,future:r})}const F0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",M0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,un=P.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:l,state:s,target:a,to:u,preventScrollReset:m,viewTransition:h}=t,g=Af(t,I0),{basename:x}=P.useContext(Ft),w,k=!1;if(typeof u=="string"&&M0.test(u)&&(w=u,F0))try{let p=new URL(window.location.href),v=u.startsWith("//")?new URL(p.protocol+u):new URL(u),C=An(v.pathname,x);v.origin===p.origin&&C!=null?u=C+v.search+v.hash:k=!0}catch{}let _=c0(u,{relative:i}),f=B0(u,{replace:l,state:s,target:a,preventScrollReset:m,relative:i,viewTransition:h});function d(p){r&&r(p),p.defaultPrevented||f(p)}return P.createElement("a",po({},g,{href:w||_,onClick:k||o?r:d,ref:n,target:a}))}),A0=P.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:l=!1,style:s,to:a,viewTransition:u,children:m}=t,h=Af(t,R0),g=Do(a,{relative:h.relative}),x=Xn(),w=P.useContext($f),{navigator:k,basename:_}=P.useContext(Ft),f=w!=null&&V0(g)&&u===!0,d=k.encodeLocation?k.encodeLocation(g).pathname:g.pathname,p=x.pathname,v=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;i||(p=p.toLowerCase(),v=v?v.toLowerCase():null,d=d.toLowerCase()),v&&_&&(v=An(v,_)||v);const C=d!=="/"&&d.endsWith("/")?d.length-1:d.length;let j=p===d||!l&&p.startsWith(d)&&p.charAt(C)==="/",S=v!=null&&(v===d||!l&&v.startsWith(d)&&v.charAt(d.length)==="/"),z={isActive:j,isPending:S,isTransitioning:f},A=j?r:void 0,L;typeof o=="function"?L=o(z):L=[o,j?"active":null,S?"pending":null,f?"transitioning":null].filter(Boolean).join(" ");let pe=typeof s=="function"?s(z):s;return P.createElement(un,po({},h,{"aria-current":A,className:L,ref:n,style:pe,to:a,viewTransition:u}),typeof m=="function"?m(z):m)});var zs;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(zs||(zs={}));var Ju;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ju||(Ju={}));function U0(e){let t=P.useContext($o);return t||b(!1),t}function B0(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:l,viewTransition:s}=t===void 0?{}:t,a=d0(),u=Xn(),m=Do(e,{relative:l});return P.useCallback(h=>{if(z0(h,n)){h.preventDefault();let g=r!==void 0?r:uo(u)===uo(m);a(e,{replace:g,state:i,preventScrollReset:o,relative:l,viewTransition:s})}},[u,a,m,r,i,n,e,o,l,s])}function V0(e,t){t===void 0&&(t={});let n=P.useContext($0);n==null&&b(!1);let{basename:r}=U0(zs.useViewTransitionState),i=Do(e,{relative:t.relative});if(!n.isTransitioning)return!1;let o=An(n.currentLocation.pathname,r)||n.currentLocation.pathname,l=An(n.nextLocation.pathname,r)||n.nextLocation.pathname;return co(i.pathname,l)!=null||co(i.pathname,o)!=null}var we=function(){return we=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},we.apply(this,arguments)};function ho(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var H="-ms-",Cr="-moz-",F="-webkit-",Uf="comm",Fo="rule",Ra="decl",W0="@import",Bf="@keyframes",H0="@layer",Vf=Math.abs,La=String.fromCharCode,Is=Object.assign;function Q0(e,t){return ie(e,0)^45?(((t<<2^ie(e,0))<<2^ie(e,1))<<2^ie(e,2))<<2^ie(e,3):0}function Wf(e){return e.trim()}function nt(e,t){return(e=t.exec(e))?e[0]:e}function $(e,t,n){return e.replace(t,n)}function $i(e,t,n){return e.indexOf(t,n)}function ie(e,t){return e.charCodeAt(t)|0}function Un(e,t,n){return e.slice(t,n)}function Ze(e){return e.length}function Hf(e){return e.length}function pr(e,t){return t.push(e),e}function Y0(e,t){return e.map(t).join("")}function qu(e,t){return e.filter(function(n){return!nt(n,t)})}var Mo=1,Bn=1,Qf=0,Fe=0,q=0,Zn="";function Ao(e,t,n,r,i,o,l,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Mo,column:Bn,length:l,return:"",siblings:s}}function mt(e,t){return Is(Ao("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function dn(e){for(;e.root;)e=mt(e.root,{children:[e]});pr(e,e.siblings)}function G0(){return q}function K0(){return q=Fe>0?ie(Zn,--Fe):0,Bn--,q===10&&(Bn=1,Mo--),q}function Ye(){return q=Fe<Qf?ie(Zn,Fe++):0,Bn++,q===10&&(Bn=1,Mo++),q}function bt(){return ie(Zn,Fe)}function Oi(){return Fe}function Uo(e,t){return Un(Zn,e,t)}function Rs(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function X0(e){return Mo=Bn=1,Qf=Ze(Zn=e),Fe=0,[]}function Z0(e){return Zn="",e}function yl(e){return Wf(Uo(Fe-1,Ls(e===91?e+2:e===40?e+1:e)))}function b0(e){for(;(q=bt())&&q<33;)Ye();return Rs(e)>2||Rs(q)>3?"":" "}function J0(e,t){for(;--t&&Ye()&&!(q<48||q>102||q>57&&q<65||q>70&&q<97););return Uo(e,Oi()+(t<6&&bt()==32&&Ye()==32))}function Ls(e){for(;Ye();)switch(q){case e:return Fe;case 34:case 39:e!==34&&e!==39&&Ls(q);break;case 40:e===41&&Ls(e);break;case 92:Ye();break}return Fe}function q0(e,t){for(;Ye()&&e+q!==47+10;)if(e+q===42+42&&bt()===47)break;return"/*"+Uo(t,Fe-1)+"*"+La(e===47?e:Ye())}function eg(e){for(;!Rs(bt());)Ye();return Uo(e,Fe)}function tg(e){return Z0(Di("",null,null,null,[""],e=X0(e),0,[0],e))}function Di(e,t,n,r,i,o,l,s,a){for(var u=0,m=0,h=l,g=0,x=0,w=0,k=1,_=1,f=1,d=0,p="",v=i,C=o,j=r,S=p;_;)switch(w=d,d=Ye()){case 40:if(w!=108&&ie(S,h-1)==58){$i(S+=$(yl(d),"&","&\f"),"&\f",Vf(u?s[u-1]:0))!=-1&&(f=-1);break}case 34:case 39:case 91:S+=yl(d);break;case 9:case 10:case 13:case 32:S+=b0(w);break;case 92:S+=J0(Oi()-1,7);continue;case 47:switch(bt()){case 42:case 47:pr(ng(q0(Ye(),Oi()),t,n,a),a);break;default:S+="/"}break;case 123*k:s[u++]=Ze(S)*f;case 125*k:case 59:case 0:switch(d){case 0:case 125:_=0;case 59+m:f==-1&&(S=$(S,/\f/g,"")),x>0&&Ze(S)-h&&pr(x>32?tc(S+";",r,n,h-1,a):tc($(S," ","")+";",r,n,h-2,a),a);break;case 59:S+=";";default:if(pr(j=ec(S,t,n,u,m,i,s,p,v=[],C=[],h,o),o),d===123)if(m===0)Di(S,t,j,j,v,o,h,s,C);else switch(g===99&&ie(S,3)===110?100:g){case 100:case 108:case 109:case 115:Di(e,j,j,r&&pr(ec(e,j,j,0,0,i,s,p,i,v=[],h,C),C),i,C,h,s,r?v:C);break;default:Di(S,j,j,j,[""],C,0,s,C)}}u=m=x=0,k=f=1,p=S="",h=l;break;case 58:h=1+Ze(S),x=w;default:if(k<1){if(d==123)--k;else if(d==125&&k++==0&&K0()==125)continue}switch(S+=La(d),d*k){case 38:f=m>0?1:(S+="\f",-1);break;case 44:s[u++]=(Ze(S)-1)*f,f=1;break;case 64:bt()===45&&(S+=yl(Ye())),g=bt(),m=h=Ze(p=S+=eg(Oi())),d++;break;case 45:w===45&&Ze(S)==2&&(k=0)}}return o}function ec(e,t,n,r,i,o,l,s,a,u,m,h){for(var g=i-1,x=i===0?o:[""],w=Hf(x),k=0,_=0,f=0;k<r;++k)for(var d=0,p=Un(e,g+1,g=Vf(_=l[k])),v=e;d<w;++d)(v=Wf(_>0?x[d]+" "+p:$(p,/&\f/g,x[d])))&&(a[f++]=v);return Ao(e,t,n,i===0?Fo:s,a,u,m,h)}function ng(e,t,n,r){return Ao(e,t,n,Uf,La(G0()),Un(e,2,-2),0,r)}function tc(e,t,n,r,i){return Ao(e,t,n,Ra,Un(e,0,r),Un(e,r+1,-1),r,i)}function Yf(e,t,n){switch(Q0(e,t)){case 5103:return F+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return F+e+e;case 4789:return Cr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return F+e+Cr+e+H+e+e;case 5936:switch(ie(e,t+11)){case 114:return F+e+H+$(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return F+e+H+$(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return F+e+H+$(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return F+e+H+e+e;case 6165:return F+e+H+"flex-"+e+e;case 5187:return F+e+$(e,/(\w+).+(:[^]+)/,F+"box-$1$2"+H+"flex-$1$2")+e;case 5443:return F+e+H+"flex-item-"+$(e,/flex-|-self/g,"")+(nt(e,/flex-|baseline/)?"":H+"grid-row-"+$(e,/flex-|-self/g,""))+e;case 4675:return F+e+H+"flex-line-pack"+$(e,/align-content|flex-|-self/g,"")+e;case 5548:return F+e+H+$(e,"shrink","negative")+e;case 5292:return F+e+H+$(e,"basis","preferred-size")+e;case 6060:return F+"box-"+$(e,"-grow","")+F+e+H+$(e,"grow","positive")+e;case 4554:return F+$(e,/([^-])(transform)/g,"$1"+F+"$2")+e;case 6187:return $($($(e,/(zoom-|grab)/,F+"$1"),/(image-set)/,F+"$1"),e,"")+e;case 5495:case 3959:return $(e,/(image-set\([^]*)/,F+"$1$`$1");case 4968:return $($(e,/(.+:)(flex-)?(.*)/,F+"box-pack:$3"+H+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+F+e+e;case 4200:if(!nt(e,/flex-|baseline/))return H+"grid-column-align"+Un(e,t)+e;break;case 2592:case 3360:return H+$(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,nt(r.props,/grid-\w+-end/)})?~$i(e+(n=n[t].value),"span",0)?e:H+$(e,"-start","")+e+H+"grid-row-span:"+(~$i(n,"span",0)?nt(n,/\d+/):+nt(n,/\d+/)-+nt(e,/\d+/))+";":H+$(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return nt(r.props,/grid-\w+-start/)})?e:H+$($(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return $(e,/(.+)-inline(.+)/,F+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ze(e)-1-t>6)switch(ie(e,t+1)){case 109:if(ie(e,t+4)!==45)break;case 102:return $(e,/(.+:)(.+)-([^]+)/,"$1"+F+"$2-$3$1"+Cr+(ie(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~$i(e,"stretch",0)?Yf($(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return $(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,l,s,a,u){return H+i+":"+o+u+(l?H+i+"-span:"+(s?a:+a-+o)+u:"")+e});case 4949:if(ie(e,t+6)===121)return $(e,":",":"+F)+e;break;case 6444:switch(ie(e,ie(e,14)===45?18:11)){case 120:return $(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+F+(ie(e,14)===45?"inline-":"")+"box$3$1"+F+"$2$3$1"+H+"$2box$3")+e;case 100:return $(e,":",":"+H)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return $(e,"scroll-","scroll-snap-")+e}return e}function mo(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function rg(e,t,n,r){switch(e.type){case H0:if(e.children.length)break;case W0:case Ra:return e.return=e.return||e.value;case Uf:return"";case Bf:return e.return=e.value+"{"+mo(e.children,r)+"}";case Fo:if(!Ze(e.value=e.props.join(",")))return""}return Ze(n=mo(e.children,r))?e.return=e.value+"{"+n+"}":""}function ig(e){var t=Hf(e);return function(n,r,i,o){for(var l="",s=0;s<t;s++)l+=e[s](n,r,i,o)||"";return l}}function og(e){return function(t){t.root||(t=t.return)&&e(t)}}function lg(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Ra:e.return=Yf(e.value,e.length,n);return;case Bf:return mo([mt(e,{value:$(e.value,"@","@"+F)})],r);case Fo:if(e.length)return Y0(n=e.props,function(i){switch(nt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":dn(mt(e,{props:[$(i,/:(read-\w+)/,":"+Cr+"$1")]})),dn(mt(e,{props:[i]})),Is(e,{props:qu(n,r)});break;case"::placeholder":dn(mt(e,{props:[$(i,/:(plac\w+)/,":"+F+"input-$1")]})),dn(mt(e,{props:[$(i,/:(plac\w+)/,":"+Cr+"$1")]})),dn(mt(e,{props:[$(i,/:(plac\w+)/,H+"input-$1")]})),dn(mt(e,{props:[i]})),Is(e,{props:qu(n,r)});break}return""})}}var sg={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Vn=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Gf="active",Kf="data-styled-version",Bo="6.1.18",$a=`/*!sc*/
`,go=typeof window<"u"&&typeof document<"u",ag=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),Vo=Object.freeze([]),Wn=Object.freeze({});function ug(e,t,n){return n===void 0&&(n=Wn),e.theme!==n.theme&&e.theme||t||n.theme}var Xf=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),cg=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,dg=/(^-|-$)/g;function nc(e){return e.replace(cg,"-").replace(dg,"")}var fg=/(a)(d)/gi,gi=52,rc=function(e){return String.fromCharCode(e+(e>25?39:97))};function $s(e){var t,n="";for(t=Math.abs(e);t>gi;t=t/gi|0)n=rc(t%gi)+n;return(rc(t%gi)+n).replace(fg,"$1-$2")}var xl,Zf=5381,jn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},bf=function(e){return jn(Zf,e)};function pg(e){return $s(bf(e)>>>0)}function hg(e){return e.displayName||e.name||"Component"}function wl(e){return typeof e=="string"&&!0}var Jf=typeof Symbol=="function"&&Symbol.for,qf=Jf?Symbol.for("react.memo"):60115,mg=Jf?Symbol.for("react.forward_ref"):60112,gg={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},vg={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ep={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},yg=((xl={})[mg]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},xl[qf]=ep,xl);function ic(e){return("type"in(t=e)&&t.type.$$typeof)===qf?ep:"$$typeof"in e?yg[e.$$typeof]:gg;var t}var xg=Object.defineProperty,wg=Object.getOwnPropertyNames,oc=Object.getOwnPropertySymbols,kg=Object.getOwnPropertyDescriptor,Sg=Object.getPrototypeOf,lc=Object.prototype;function tp(e,t,n){if(typeof t!="string"){if(lc){var r=Sg(t);r&&r!==lc&&tp(e,r,n)}var i=wg(t);oc&&(i=i.concat(oc(t)));for(var o=ic(e),l=ic(t),s=0;s<i.length;++s){var a=i[s];if(!(a in vg||n&&n[a]||l&&a in l||o&&a in o)){var u=kg(t,a);try{xg(e,a,u)}catch{}}}}return e}function Hn(e){return typeof e=="function"}function Oa(e){return typeof e=="object"&&"styledComponentId"in e}function Kt(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function sc(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Wr(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Os(e,t,n){if(n===void 0&&(n=!1),!n&&!Wr(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Os(e[r],t[r]);else if(Wr(t))for(var r in t)e[r]=Os(e[r],t[r]);return e}function Da(e,t){Object.defineProperty(e,"toString",{value:t})}function Zr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Cg=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Zr(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var l=i;l<o;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(t+1),a=(l=0,n.length);l<a;l++)this.tag.insertRule(s,n[l])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,l=i;l<o;l++)n+="".concat(this.tag.getRule(l)).concat($a);return n},e}(),Fi=new Map,vo=new Map,Mi=1,vi=function(e){if(Fi.has(e))return Fi.get(e);for(;vo.has(Mi);)Mi++;var t=Mi++;return Fi.set(e,t),vo.set(t,e),t},Eg=function(e,t){Mi=t+1,Fi.set(e,t),vo.set(t,e)},jg="style[".concat(Vn,"][").concat(Kf,'="').concat(Bo,'"]'),Pg=new RegExp("^".concat(Vn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),_g=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},Ng=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split($a),i=[],o=0,l=r.length;o<l;o++){var s=r[o].trim();if(s){var a=s.match(Pg);if(a){var u=0|parseInt(a[1],10),m=a[2];u!==0&&(Eg(m,u),_g(e,m,a[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(s)}}},ac=function(e){for(var t=document.querySelectorAll(jg),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Vn)!==Gf&&(Ng(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function Tg(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var np=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(s){var a=Array.from(s.querySelectorAll("style[".concat(Vn,"]")));return a[a.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Vn,Gf),r.setAttribute(Kf,Bo);var l=Tg();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},zg=function(){function e(t){this.element=np(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var l=r[i];if(l.ownerNode===n)return l}throw Zr(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Ig=function(){function e(t){this.element=np(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Rg=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),uc=go,Lg={isServer:!go,useCSSOMInjection:!ag},rp=function(){function e(t,n,r){t===void 0&&(t=Wn),n===void 0&&(n={});var i=this;this.options=we(we({},Lg),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&go&&uc&&(uc=!1,ac(this)),Da(this,function(){return function(o){for(var l=o.getTag(),s=l.length,a="",u=function(h){var g=function(f){return vo.get(f)}(h);if(g===void 0)return"continue";var x=o.names.get(g),w=l.getGroup(h);if(x===void 0||!x.size||w.length===0)return"continue";var k="".concat(Vn,".g").concat(h,'[id="').concat(g,'"]'),_="";x!==void 0&&x.forEach(function(f){f.length>0&&(_+="".concat(f,","))}),a+="".concat(w).concat(k,'{content:"').concat(_,'"}').concat($a)},m=0;m<s;m++)u(m);return a}(i)})}return e.registerId=function(t){return vi(t)},e.prototype.rehydrate=function(){!this.server&&go&&ac(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(we(we({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new Rg(i):r?new zg(i):new Ig(i)}(this.options),new Cg(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(vi(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(vi(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(vi(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),$g=/&/g,Og=/^\s*\/\/.*$/gm;function ip(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=ip(n.children,t)),n})}function Dg(e){var t,n,r,i=e===void 0?Wn:e,o=i.options,l=o===void 0?Wn:o,s=i.plugins,a=s===void 0?Vo:s,u=function(g,x,w){return w.startsWith(n)&&w.endsWith(n)&&w.replaceAll(n,"").length>0?".".concat(t):g},m=a.slice();m.push(function(g){g.type===Fo&&g.value.includes("&")&&(g.props[0]=g.props[0].replace($g,n).replace(r,u))}),l.prefix&&m.push(lg),m.push(rg);var h=function(g,x,w,k){x===void 0&&(x=""),w===void 0&&(w=""),k===void 0&&(k="&"),t=k,n=x,r=new RegExp("\\".concat(n,"\\b"),"g");var _=g.replace(Og,""),f=tg(w||x?"".concat(w," ").concat(x," { ").concat(_," }"):_);l.namespace&&(f=ip(f,l.namespace));var d=[];return mo(f,ig(m.concat(og(function(p){return d.push(p)})))),d};return h.hash=a.length?a.reduce(function(g,x){return x.name||Zr(15),jn(g,x.name)},Zf).toString():"",h}var Fg=new rp,Ds=Dg(),op=qt.createContext({shouldForwardProp:void 0,styleSheet:Fg,stylis:Ds});op.Consumer;qt.createContext(void 0);function cc(){return P.useContext(op)}var Mg=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Ds);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Da(this,function(){throw Zr(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Ds),this.name+t.hash},e}(),Ag=function(e){return e>="A"&&e<="Z"};function dc(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Ag(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var lp=function(e){return e==null||e===!1||e===""},sp=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!lp(o)&&(Array.isArray(o)&&o.isCss||Hn(o)?r.push("".concat(dc(i),":"),o,";"):Wr(o)?r.push.apply(r,ho(ho(["".concat(i," {")],sp(o),!1),["}"],!1)):r.push("".concat(dc(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in sg||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Jt(e,t,n,r){if(lp(e))return[];if(Oa(e))return[".".concat(e.styledComponentId)];if(Hn(e)){if(!Hn(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return Jt(i,t,n,r)}var o;return e instanceof Mg?n?(e.inject(n,r),[e.getName(r)]):[e]:Wr(e)?sp(e):Array.isArray(e)?Array.prototype.concat.apply(Vo,e.map(function(l){return Jt(l,t,n,r)})):[e.toString()]}function Ug(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Hn(n)&&!Oa(n))return!1}return!0}var Bg=bf(Bo),Vg=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Ug(t),this.componentId=n,this.baseHash=jn(Bg,n),this.baseStyle=r,rp.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Kt(i,this.staticRulesId);else{var o=sc(Jt(this.rules,t,n,r)),l=$s(jn(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,l)){var s=r(o,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,s)}i=Kt(i,l),this.staticRulesId=l}else{for(var a=jn(this.baseHash,r.hash),u="",m=0;m<this.rules.length;m++){var h=this.rules[m];if(typeof h=="string")u+=h;else if(h){var g=sc(Jt(h,t,n,r));a=jn(a,g+m),u+=g}}if(u){var x=$s(a>>>0);n.hasNameForId(this.componentId,x)||n.insertRules(this.componentId,x,r(u,".".concat(x),void 0,this.componentId)),i=Kt(i,x)}}return i},e}(),ap=qt.createContext(void 0);ap.Consumer;var kl={};function Wg(e,t,n){var r=Oa(e),i=e,o=!wl(e),l=t.attrs,s=l===void 0?Vo:l,a=t.componentId,u=a===void 0?function(v,C){var j=typeof v!="string"?"sc":nc(v);kl[j]=(kl[j]||0)+1;var S="".concat(j,"-").concat(pg(Bo+j+kl[j]));return C?"".concat(C,"-").concat(S):S}(t.displayName,t.parentComponentId):a,m=t.displayName,h=m===void 0?function(v){return wl(v)?"styled.".concat(v):"Styled(".concat(hg(v),")")}(e):m,g=t.displayName&&t.componentId?"".concat(nc(t.displayName),"-").concat(t.componentId):t.componentId||u,x=r&&i.attrs?i.attrs.concat(s).filter(Boolean):s,w=t.shouldForwardProp;if(r&&i.shouldForwardProp){var k=i.shouldForwardProp;if(t.shouldForwardProp){var _=t.shouldForwardProp;w=function(v,C){return k(v,C)&&_(v,C)}}else w=k}var f=new Vg(n,g,r?i.componentStyle:void 0);function d(v,C){return function(j,S,z){var A=j.attrs,L=j.componentStyle,pe=j.defaultProps,Mt=j.foldedComponentIds,At=j.styledComponentId,br=j.target,Wo=qt.useContext(ap),bn=cc(),Ut=j.shouldForwardProp||bn.shouldForwardProp,N=ug(S,Wo,pe)||Wn,I=function(ft,Ee,et){for(var Jn,Vt=we(we({},Ee),{className:void 0,theme:et}),Ho=0;Ho<ft.length;Ho+=1){var Jr=Hn(Jn=ft[Ho])?Jn(Vt):Jn;for(var pt in Jr)Vt[pt]=pt==="className"?Kt(Vt[pt],Jr[pt]):pt==="style"?we(we({},Vt[pt]),Jr[pt]):Jr[pt]}return Ee.className&&(Vt.className=Kt(Vt.className,Ee.className)),Vt}(A,S,N),R=I.as||br,U={};for(var B in I)I[B]===void 0||B[0]==="$"||B==="as"||B==="theme"&&I.theme===N||(B==="forwardedAs"?U.as=I.forwardedAs:Ut&&!Ut(B,R)||(U[B]=I[B]));var Bt=function(ft,Ee){var et=cc(),Jn=ft.generateAndInjectStyles(Ee,et.styleSheet,et.stylis);return Jn}(L,I),Me=Kt(Mt,At);return Bt&&(Me+=" "+Bt),I.className&&(Me+=" "+I.className),U[wl(R)&&!Xf.has(R)?"class":"className"]=Me,z&&(U.ref=z),P.createElement(R,U)}(p,v,C)}d.displayName=h;var p=qt.forwardRef(d);return p.attrs=x,p.componentStyle=f,p.displayName=h,p.shouldForwardProp=w,p.foldedComponentIds=r?Kt(i.foldedComponentIds,i.styledComponentId):"",p.styledComponentId=g,p.target=r?i.target:e,Object.defineProperty(p,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=r?function(C){for(var j=[],S=1;S<arguments.length;S++)j[S-1]=arguments[S];for(var z=0,A=j;z<A.length;z++)Os(C,A[z],!0);return C}({},i.defaultProps,v):v}}),Da(p,function(){return".".concat(p.styledComponentId)}),o&&tp(p,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),p}function fc(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var pc=function(e){return Object.assign(e,{isCss:!0})};function Hg(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Hn(e)||Wr(e))return pc(Jt(fc(Vo,ho([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Jt(r):pc(Jt(fc(r,t)))}function Fs(e,t,n){if(n===void 0&&(n=Wn),!t)throw Zr(1,t);var r=function(i){for(var o=[],l=1;l<arguments.length;l++)o[l-1]=arguments[l];return e(t,n,Hg.apply(void 0,ho([i],o,!1)))};return r.attrs=function(i){return Fs(e,t,we(we({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Fs(e,t,we(we({},n),i))},r}var up=function(e){return Fs(Wg,e)},y=up;Xf.forEach(function(e){y[e]=up(e)});const Qg=y.header`
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
  transition: transform 0.3s ease;
  
  ${({hide:e})=>e&&`
    transform: translateY(-100%);
  `}
`,Yg=y.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`,Gg=y(un)`
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
`,Kg=y.ul`
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
`,sr=y.li`
  margin: 0 1rem;
  position: relative;
  
  @media (max-width: 768px) {
    margin: 1.5rem 0;
    text-align: center;
  }
`,ar=y(A0)`
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
`,Xg=y.button`
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
`;function Zg(){const[e,t]=P.useState(!1),[n,r]=P.useState(!1),[i,o]=P.useState(0),l=Xn(),s=()=>{t(!e)};return P.useEffect(()=>{const a=()=>{const u=window.scrollY;u>200&&u>i?r(!0):r(!1),o(u)};return window.addEventListener("scroll",a),()=>{window.removeEventListener("scroll",a)}},[i]),P.useEffect(()=>{t(!1)},[l]),P.useEffect(()=>(e?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[e]),c.jsx(Qg,{hide:n&&!e,children:c.jsx("div",{className:"container",children:c.jsxs(Yg,{children:[c.jsxs(Gg,{to:"/",children:[c.jsx("span",{className:"logo-icon",children:"🏠"}),c.jsx("span",{children:"我的网站"})]}),c.jsx(Xg,{onClick:s,"aria-label":"菜单",children:e?"✕":"☰"}),c.jsxs(Kg,{isOpen:e,children:[c.jsx(sr,{children:c.jsx(ar,{to:"/",end:!0,children:"首页"})}),c.jsx(sr,{children:c.jsx(ar,{to:"/products",children:"产品"})}),c.jsx(sr,{children:c.jsx(ar,{to:"/media",children:"自媒体"})}),c.jsx(sr,{children:c.jsx(ar,{to:"/about",children:"关于我"})}),c.jsx(sr,{children:c.jsx(ar,{to:"/contact",children:"联系方式"})})]})]})})})}const bg=y.footer`
  background-color: var(--dark-color);
  color: white;
  padding: 4rem 0 2rem;
`,Jg=y.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,yi=y.div`
  display: flex;
  flex-direction: column;
`,xi=y.h3`
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
`,Ue=y(un)`
  color: #ccc;
  margin-bottom: 0.8rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: white;
  }
`,qg=y.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`,Sl=y.a`
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
`,ev=y.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.9rem;
  color: #aaa;
`;function tv(){const e=new Date().getFullYear();return c.jsx(bg,{children:c.jsxs("div",{className:"container",children:[c.jsxs(Jg,{children:[c.jsxs(yi,{children:[c.jsx(xi,{children:"导航"}),c.jsx(Ue,{to:"/",children:"首页"}),c.jsx(Ue,{to:"/products",children:"产品"}),c.jsx(Ue,{to:"/media",children:"自媒体"}),c.jsx(Ue,{to:"/about",children:"关于我"}),c.jsx(Ue,{to:"/contact",children:"联系方式"})]}),c.jsxs(yi,{children:[c.jsx(xi,{children:"产品"}),c.jsx(Ue,{to:"/products/product1",children:"产品1"}),c.jsx(Ue,{to:"/products/product2",children:"产品2"}),c.jsx(Ue,{to:"/products/product3",children:"产品3"})]}),c.jsxs(yi,{children:[c.jsx(xi,{children:"自媒体"}),c.jsx(Ue,{as:"a",href:"https://space.bilibili.com/24543451",target:"_blank",rel:"noopener noreferrer",children:"哔哩哔哩"}),c.jsx(Ue,{as:"a",href:"https://www.xiaohongshu.com",target:"_blank",rel:"noopener noreferrer",children:"小红书"}),c.jsx(Ue,{as:"a",href:"https://www.zhihu.com",target:"_blank",rel:"noopener noreferrer",children:"知乎"})]}),c.jsxs(yi,{children:[c.jsx(xi,{children:"联系我"}),c.jsx("p",{children:"邮箱：contact@example.com"}),c.jsxs(qg,{children:[c.jsx(Sl,{href:"https://space.bilibili.com/24543451",target:"_blank",rel:"noopener noreferrer",className:"bilibili",children:"哔"}),c.jsx(Sl,{href:"https://www.xiaohongshu.com",target:"_blank",rel:"noopener noreferrer",className:"xiaohongshu",children:"小"}),c.jsx(Sl,{href:"https://www.zhihu.com",target:"_blank",rel:"noopener noreferrer",className:"zhihu",children:"知"})]})]})]}),c.jsx(ev,{children:c.jsxs("p",{children:["© ",e," 我的个人网站. 保留所有权利."]})})]})})}const nv=y.section`
  height: 90vh;
  min-height: 600px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  text-align: center;
  color: white;
`,rv=y.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
`,iv=y.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,ov=y.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`,lv=y.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`,hc=y(un)`
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
`,sv=y.section`
  padding: 100px 0;
`,av=y.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`,Cl=y.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  padding: 30px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`,El=y.div`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: var(--primary-color);
`,jl=y.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
`,Pl=y.p`
  color: #666;
  line-height: 1.6;
`,uv=y.section`
  padding: 100px 0;
  background-color: #f9f9f9;
`,cv=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 50px;
`,dv=y.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`,fv=y.div`
  height: 200px;
  background-color: #eee;
  background-image: url('/product-placeholder.jpg');
  background-size: cover;
  background-position: center;
`,pv=y.div`
  padding: 20px;
`,hv=y.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
`,mv=y.p`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 15px;
`,gv=y(un)`
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
`,vv=y.section`
  padding: 100px 0;
`,yv=y.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 50px;
`,xv=y.a`
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
`,wv=y.div`
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
`,kv=y.h3`
  font-size: 1.2rem;
  margin-bottom: 5px;
`,Sv=y.p`
  color: #666;
  font-size: 0.9rem;
`,Cv=y.section`
  padding: 80px 0;
  background-color: var(--primary-color);
  color: white;
  text-align: center;
`,Ev=y.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,jv=y.p`
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto 30px;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,Pv=y(un)`
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
`;function _v(){return c.jsxs(c.Fragment,{children:[c.jsx(nv,{children:c.jsxs(rv,{children:[c.jsx(iv,{children:"尚浩 | 阿浩_Learn"}),c.jsx(ov,{children:"AI驱动的时间管理软件开发者 | B站UP主"}),c.jsxs(lv,{children:[c.jsx(hc,{to:"/products",className:"primary",children:"了解我的产品"}),c.jsx(hc,{to:"/media",className:"secondary",children:"查看自媒体"})]})]})}),c.jsx(sv,{children:c.jsxs("div",{className:"container",children:[c.jsx("h2",{className:"section-title",children:"我的特色"}),c.jsxs(av,{children:[c.jsxs(Cl,{children:[c.jsx(El,{children:"🚀"}),c.jsx(jl,{children:"AI时间管理"}),c.jsx(Pl,{children:"我开发的时间管理软件融合AI技术，帮助用户更高效地规划和利用时间，提升工作与生活的平衡。"})]}),c.jsxs(Cl,{children:[c.jsx(El,{children:"📱"}),c.jsx(jl,{children:"B站内容创作"}),c.jsx(Pl,{children:"在B站分享技术知识和软件开发经验，通过视频形式帮助更多人学习和成长。"})]}),c.jsxs(Cl,{children:[c.jsx(El,{children:"👨‍💻"}),c.jsx(jl,{children:"技术专长"}),c.jsx(Pl,{children:"擅长软件开发、AI应用和用户体验设计，致力于打造简洁实用且体验良好的应用产品。"})]})]})]})}),c.jsx(uv,{children:c.jsxs("div",{className:"container",children:[c.jsx("h2",{className:"section-title",children:"我的产品"}),c.jsx(cv,{children:c.jsxs(dv,{children:[c.jsx(fv,{style:{backgroundImage:"url('/product1.jpg')"}}),c.jsxs(pv,{children:[c.jsx(hv,{children:"AI时间管理软件"}),c.jsx(mv,{children:"基于AI的个人时间管理工具，类似GTD（Getting Things Done）理念，帮助用户高效规划任务和时间。"}),c.jsx(gv,{to:"/products",children:"查看详情"})]})]})})]})}),c.jsx(vv,{children:c.jsxs("div",{className:"container",children:[c.jsx("h2",{className:"section-title",children:"我的自媒体频道"}),c.jsx(yv,{children:c.jsxs(xv,{href:"https://space.bilibili.com/24543451",target:"_blank",rel:"noopener noreferrer",children:[c.jsx(wv,{className:"bilibili",children:"哔"}),c.jsx(kv,{children:"哔哩哔哩"}),c.jsx(Sv,{children:"阿浩_Learn"})]})})]})}),c.jsx(Cv,{children:c.jsxs("div",{className:"container",children:[c.jsx(Ev,{children:"想了解更多?"}),c.jsx(jv,{children:"如果你对我的AI时间管理软件或B站内容感兴趣，欢迎随时联系我。"}),c.jsx(Pv,{to:"/contact",children:"联系我"})]})})]})}const Nv=y.div`
  background-color: var(--primary-color);
  color: white;
  padding: 80px 0;
  text-align: center;
`,Tv=y.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`,zv=y.p`
  max-width: 700px;
  margin: 0 auto;
  font-size: 1.2rem;
  opacity: 0.9;
`,Iv=y.div`
  padding: 80px 0;
`,Rv=y.div`
  max-width: 1000px;
  margin: 0 auto;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`,Lv=y.div`
  display: flex;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`,$v=y.div`
  flex: 1;
  min-width: 300px;
  background-color: #eee;
  background-image: url('/product1.jpg');
  background-size: cover;
  background-position: center;
  min-height: 400px;
  
  @media (max-width: 768px) {
    min-height: 250px;
  }
`,Ov=y.div`
  flex: 1;
  min-width: 300px;
  padding: 40px;
`,Dv=y.h2`
  font-size: 2rem;
  color: var(--primary-color);
  margin-bottom: 20px;
`,Fv=y.p`
  font-size: 1.2rem;
  margin-bottom: 30px;
  color: #333;
  font-weight: 500;
`,Mv=y.p`
  color: #666;
  line-height: 1.7;
  margin-bottom: 20px;
`,Av=y.div`
  padding: 60px 40px;
  background-color: #f9f9f9;
`,Uv=y.h3`
  font-size: 1.8rem;
  margin-bottom: 40px;
  color: var(--primary-color);
  text-align: center;
`,Bv=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
`,Vv=y.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  padding: 25px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`,Wv=y.div`
  font-size: 2rem;
  margin-bottom: 15px;
  color: var(--primary-color);
`,Hv=y.h4`
  font-size: 1.3rem;
  margin-bottom: 10px;
`,Qv=y.p`
  color: #666;
  line-height: 1.6;
`,Yv=y.div`
  padding: 60px 40px;
  text-align: center;
`,Gv=y.h3`
  font-size: 1.8rem;
  margin-bottom: 20px;
`,Kv=y.p`
  color: #666;
  max-width: 600px;
  margin: 0 auto 30px;
  line-height: 1.6;
`,Xv=y(un)`
  display: inline-block;
  padding: 15px 40px;
  background-color: var(--primary-color);
  color: white;
  border-radius: 4px;
  font-weight: 500;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #3348a0;
  }
`;function Zv(){const e={name:"AI时间管理软件",tagline:"让AI帮你管理时间，提升工作与生活效率",description:"这是一款基于人工智能的时间管理软件，融合了GTD（Getting Things Done）理念，专为需要高效管理时间和任务的用户设计。软件通过AI智能分析用户习惯、任务优先级和时间分配模式，提供个性化的时间规划建议，帮助用户在保持专注的同时，提高工作效率和生活质量。",features:[{icon:"🤖",name:"AI智能规划",description:"通过人工智能算法，分析用户行为习惯，自动生成个性化时间规划和任务安排。"},{icon:"📋",name:"GTD工作流",description:"基于GTD（Getting Things Done）理念，帮助用户收集、整理、执行和回顾任务，实现高效工作。"},{icon:"📊",name:"数据可视化",description:"提供直观的统计图表和数据分析，帮助用户了解自己的时间利用情况和工作效率。"},{icon:"🔔",name:"智能提醒",description:"AI根据任务优先级和截止日期，自动发送提醒，确保重要事项不会被遗忘。"},{icon:"🔄",name:"习惯培养",description:"通过设定目标和跟踪进度，帮助用户养成良好习惯，持续提高自我管理能力。"},{icon:"📱",name:"多平台同步",description:"支持多设备同步，无论是在电脑还是手机上，都能随时查看和更新任务。"}]};return c.jsxs(c.Fragment,{children:[c.jsx(Nv,{children:c.jsxs("div",{className:"container",children:[c.jsx(Tv,{children:"我的产品"}),c.jsx(zv,{children:"基于AI的个人时间管理软件，帮助您更高效地规划和利用时间"})]})}),c.jsx(Iv,{children:c.jsx("div",{className:"container",children:c.jsxs(Rv,{children:[c.jsxs(Lv,{children:[c.jsx($v,{}),c.jsxs(Ov,{children:[c.jsx(Dv,{children:e.name}),c.jsx(Fv,{children:e.tagline}),c.jsx(Mv,{children:e.description})]})]}),c.jsxs(Av,{children:[c.jsx(Uv,{children:"核心功能"}),c.jsx(Bv,{children:e.features.map((t,n)=>c.jsxs(Vv,{children:[c.jsx(Wv,{children:t.icon}),c.jsx(Hv,{children:t.name}),c.jsx(Qv,{children:t.description})]},n))})]}),c.jsxs(Yv,{children:[c.jsx(Gv,{children:"想了解更多?"}),c.jsx(Kv,{children:"如果您对我的AI时间管理软件感兴趣，或想提前体验产品，请通过联系页面与我沟通。"}),c.jsx(Xv,{to:"/contact",children:"联系我"})]})]})})})]})}const bv=y.div`
  background-color: var(--primary-color);
  color: white;
  padding: 80px 0;
  text-align: center;
`,Jv=y.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`,qv=y.p`
  max-width: 700px;
  margin: 0 auto;
  font-size: 1.2rem;
  opacity: 0.9;
`,e1=y.div`
  padding: 80px 0;
`,t1=y.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`,n1=y.div`
  display: flex;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`,r1=y.div`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: white;
  flex-shrink: 0;
  
  &.bilibili {
    background-color: #FB7299;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    height: 80px;
  }
`,i1=y.div`
  padding: 30px;
  flex-grow: 1;
`,o1=y.h3`
  font-size: 1.6rem;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  a {
    font-size: 0.9rem;
    text-decoration: none;
    
    &.bilibili {
      color: #FB7299;
    }
  }
  
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
    
    a {
      margin-top: 5px;
    }
  }
`,l1=y.div`
  display: flex;
  gap: 20px;
  margin-bottom: 15px;
`,s1=y.div`
  display: flex;
  gap: 5px;
  
  span:first-child {
    color: #666;
  }
  
  span:last-child {
    font-weight: 500;
  }
`,a1=y.p`
  color: #555;
  line-height: 1.7;
  margin-bottom: 20px;
`,u1=y.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
`,c1=y.span`
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 0.8rem;
  color: white;
  
  &.bilibili {
    background-color: #FB7299;
  }
`,d1=y.a`
  display: inline-block;
  padding: 10px 25px;
  color: white;
  border-radius: 5px;
  font-weight: 500;
  text-decoration: none;
  
  &.bilibili {
    background-color: #FB7299;
    
    &:hover {
      background-color: #fc8bab;
    }
  }
`,f1=y.div`
  margin-top: 25px;
  
  h4 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    font-size: 1.2rem;
    
    .more-videos {
      font-size: 0.9rem;
      color: #FB7299;
      text-decoration: none;
      
      &:hover {
        text-decoration: underline;
      }
    }
  }
`,p1=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
`,h1=y.a`
  text-decoration: none;
  color: var(--text-color);
  
  &:hover {
    .play-icon {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1.1);
    }
    
    img {
      transform: scale(1.05);
    }
  }
`,m1=y.div`
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 10px;
  
  img {
    width: 100%;
    display: block;
    transition: transform 0.3s ease;
  }
  
  .play-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40px;
    height: 40px;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 50%;
    opacity: 0.7;
    transition: all 0.3s ease;
    
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 55%;
      transform: translate(-50%, -50%);
      border-style: solid;
      border-width: 10px 0 10px 16px;
      border-color: transparent transparent transparent white;
    }
  }
  
  .duration, .views {
    position: absolute;
    bottom: 8px;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    font-size: 0.8rem;
    padding: 2px 5px;
    border-radius: 3px;
  }
  
  .duration {
    right: 8px;
  }
  
  .views {
    left: 8px;
    border-radius: 3px;
  }
`,g1=y.p`
  font-size: 0.9rem;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;function v1(){const[e,t]=P.useState([]),[n,r]=P.useState(!1);P.useEffect(()=>{r(!0),t([{title:"AI时间管理软件开发过程分享 - 从需求到实现",thumbnail:"/video-thumb1.jpg",url:"https://www.bilibili.com/video/example1",duration:"15:42",views:"2.3万"},{title:"SwiftUI开发教程 - 构建现代化iOS应用界面",thumbnail:"/video-thumb2.jpg",url:"https://www.bilibili.com/video/example2",duration:"12:18",views:"1.8万"},{title:"GTD时间管理方法详解 - 提升个人效率的实用技巧",thumbnail:"/video-thumb3.jpg",url:"https://www.bilibili.com/video/example3",duration:"20:05",views:"3.5万"},{title:"如何将AI技术应用到个人软件开发中",thumbnail:"/video-thumb4.jpg",url:"https://www.bilibili.com/video/example4",duration:"25:33",views:"4.1万"}]),r(!1)},[]);const i={id:"bilibili",name:"Bilibili",icon:"哔",username:"阿浩_Learn",uid:"24543451",url:"https://space.bilibili.com/24543451",followers:"关注者",posts:"视频",description:'我是尚浩，B站UP主"阿浩_Learn"。在这里，我主要分享软件开发、AI应用和时间管理相关的内容。通过视频形式展示开发过程、技术应用和实用技巧，帮助观众掌握相关知识，提升个人技能。',contentTypes:["软件开发","AI应用","时间管理","技术分享"],className:"bilibili",videos:e};return c.jsxs(c.Fragment,{children:[c.jsx(bv,{children:c.jsxs("div",{className:"container",children:[c.jsx(Jv,{children:"我的B站频道"}),c.jsx(qv,{children:"在B站，我分享软件开发、AI应用和时间管理的相关知识和经验"})]})}),c.jsx(e1,{children:c.jsx("div",{className:"container",children:c.jsx(t1,{children:c.jsxs(n1,{children:[c.jsx(r1,{className:i.className,children:i.icon}),c.jsxs(i1,{children:[c.jsxs(o1,{children:[i.username,c.jsxs("a",{href:i.url,target:"_blank",rel:"noopener noreferrer",className:i.className,children:["UID: ",i.uid]})]}),c.jsx(l1,{children:c.jsxs(s1,{children:[c.jsx("span",{children:"平台:"}),c.jsx("span",{children:"哔哩哔哩"})]})}),c.jsx(a1,{children:i.description}),c.jsx(u1,{children:i.contentTypes.map((o,l)=>c.jsx(c1,{className:i.className,children:o},l))}),c.jsxs(f1,{children:[c.jsxs("h4",{children:["最近上传视频",c.jsx("a",{href:`${i.url}/video`,target:"_blank",rel:"noopener noreferrer",className:"more-videos",children:"查看更多 →"})]}),n?c.jsx("div",{children:"加载中..."}):c.jsx(p1,{children:i.videos.map((o,l)=>c.jsxs(h1,{href:o.url,target:"_blank",rel:"noopener noreferrer",children:[c.jsxs(m1,{children:[c.jsx("img",{src:o.thumbnail,alt:o.title}),c.jsx("div",{className:"play-icon"}),c.jsx("div",{className:"duration",children:o.duration}),c.jsx("div",{className:"views",children:o.views})]}),c.jsx(g1,{children:o.title})]},l))})]}),c.jsx("div",{style:{marginTop:"25px"},children:c.jsx(d1,{href:i.url,target:"_blank",rel:"noopener noreferrer",className:i.className,children:"一键三连"})})]})]})})})})]})}const y1=y.div`
  background-color: var(--primary-color);
  color: white;
  padding: 80px 0;
  text-align: center;
`,x1=y.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`,w1=y.p`
  max-width: 700px;
  margin: 0 auto;
  font-size: 1.2rem;
  opacity: 0.9;
`,k1=y.section`
  padding: 80px 0;
`,S1=y.div`
  display: flex;
  align-items: center;
  gap: 50px;
  
  @media (max-width: 992px) {
    flex-direction: column;
    gap: 30px;
  }
`,C1=y.div`
  flex: 1;
`,E1=y.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: var(--primary-color);
`,_l=y.p`
  color: #555;
  line-height: 1.7;
  margin-bottom: 20px;
`,j1=y.div`
  flex: 1;
  min-width: 300px;
  height: 400px;
  background-image: url('/about.jpg');
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 576px) {
    width: 100%;
    height: 300px;
  }
`,P1=y.section`
  padding: 80px 0;
  background-color: #f9f9f9;
`,_1=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 50px;
`,N1=y.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  padding: 30px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`,T1=y.div`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: var(--primary-color);
`,z1=y.h3`
  font-size: 1.3rem;
  margin-bottom: 15px;
`,I1=y.p`
  color: #666;
  line-height: 1.6;
`,R1=y.section`
  padding: 80px 0;
`,L1=y.div`
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
`,$1=y.div`
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
`,O1=y.div`
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
`,D1=y.div`
  width: calc(50% - 30px);
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  
  @media (max-width: 768px) {
    width: 100%;
  }
`,F1=y.div`
  font-weight: bold;
  color: var(--primary-color);
  margin-bottom: 10px;
`,M1=y.h3`
  font-size: 1.3rem;
  margin-bottom: 10px;
`,A1=y.p`
  color: #666;
`;function U1(){const e=[{id:1,title:"软件开发",icon:"💻",description:"擅长使用Swift、SwiftUI开发iOS应用，特别是具有AI功能的应用程序，专注于用户体验和实用性。"},{id:2,title:"AI技术应用",icon:"🤖",description:"将AI技术与实际应用场景结合，特别是在个人时间管理领域的创新应用，提供智能化解决方案。"},{id:3,title:"视频内容创作",icon:"🎬",description:"在B站创作技术分享和开发过程相关的视频内容，通过生动的视频讲解帮助他人学习和成长。"},{id:4,title:"用户体验设计",icon:"🎨",description:"注重软件的用户体验设计，追求简洁、实用且美观的界面，让复杂的功能变得简单易用。"},{id:5,title:"时间管理",icon:"⏱️",description:"深入研究GTD等时间管理方法，并将理论与实践相结合，开发出有效的时间管理工具。"},{id:6,title:"技术分享",icon:"📣",description:"热衷于分享开发经验和技术心得，帮助更多对软件开发和AI技术感兴趣的人。"}],t=[{id:1,date:"2022 - 至今",title:"AI时间管理软件开发者",description:"独立开发基于AI的个人时间管理软件，结合GTD理念，帮助用户高效规划和利用时间。"},{id:2,date:"2020 - 至今",title:'B站UP主 "阿浩_Learn"',description:"在B站分享技术内容和软件开发经验，帮助观众学习和成长，培养了稳定的粉丝群体。"},{id:3,date:"2018 - 2022",title:"软件工程师",description:"专注于移动应用开发，参与多个应用项目的设计和开发，积累了丰富的实践经验。"},{id:4,date:"2014 - 2018",title:"计算机科学专业学习",description:"系统学习计算机科学知识，为后续的软件开发和AI应用奠定了坚实的理论基础。"}];return c.jsxs(c.Fragment,{children:[c.jsx(y1,{children:c.jsxs("div",{className:"container",children:[c.jsx(x1,{children:"关于我"}),c.jsx(w1,{children:"了解尚浩的背景、技能和经验"})]})}),c.jsx(k1,{children:c.jsx("div",{className:"container",children:c.jsxs(S1,{children:[c.jsxs(C1,{children:[c.jsx(E1,{children:"我是尚浩"}),c.jsx(_l,{children:'您好！我是尚浩，B站UP主"阿浩_Learn"，一名热爱技术和创新的软件开发者。我专注于AI驱动的应用开发，特别是在个人时间管理领域。'}),c.jsx(_l,{children:"我开发的AI时间管理软件融合了GTD（Getting Things Done）理念，旨在帮助用户更高效地规划和利用时间，提升工作与生活的平衡。 作为一名开发者，我注重用户体验和实用性，致力于创造简洁、高效且易用的产品。"}),c.jsx(_l,{children:"在B站（UID: 24543451），我分享技术知识、软件开发经验和个人成长心得，希望通过视频形式帮助更多人学习和进步。 期待能与志同道合的朋友交流和合作，共同探索科技与生活的无限可能！"})]}),c.jsx(j1,{})]})})}),c.jsx(P1,{children:c.jsxs("div",{className:"container",children:[c.jsx("h2",{className:"section-title",children:"我的技能"}),c.jsx(_1,{children:e.map(n=>c.jsxs(N1,{children:[c.jsx(T1,{children:n.icon}),c.jsx(z1,{children:n.title}),c.jsx(I1,{children:n.description})]},n.id))})]})}),c.jsx(R1,{children:c.jsxs("div",{className:"container",children:[c.jsx("h2",{className:"section-title",children:"我的经历"}),c.jsx(L1,{children:t.map(n=>c.jsxs($1,{children:[c.jsx(O1,{}),c.jsxs(D1,{children:[c.jsx(F1,{children:n.date}),c.jsx(M1,{children:n.title}),c.jsx(A1,{children:n.description})]})]},n.id))})]})})]})}const B1=y.div`
  background-color: var(--primary-color);
  color: white;
  padding: 80px 0;
  text-align: center;
`,V1=y.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`,W1=y.p`
  max-width: 700px;
  margin: 0 auto;
  font-size: 1.2rem;
  opacity: 0.9;
`,H1=y.section`
  padding: 80px 0;
`,Q1=y.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Y1=y.div`
  @media (max-width: 768px) {
    order: 2;
  }
`,G1=y.h2`
  font-size: 2rem;
  margin-bottom: 30px;
  color: var(--primary-color);
`,K1=y.div`
  margin-bottom: 30px;
`,Nl=y.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
`,Tl=y.div`
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
`,zl=y.div`
  color: var(--text-color);
`,Il=y.h3`
  font-size: 1.2rem;
  margin-bottom: 5px;
`,Rl=y.p`
  line-height: 1.6;
`,X1=y.a`
  color: var(--primary-color);
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--secondary-color);
  }
`,Z1=y.div`
  display: flex;
  gap: 15px;
  margin-top: 30px;
`,Ll=y.a`
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
`,b1=y.div`
  @media (max-width: 768px) {
    order: 1;
  }
`,J1=y.form`
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`,q1=y.h2`
  font-size: 1.8rem;
  margin-bottom: 30px;
  color: var(--primary-color);
`,wi=y.div`
  margin-bottom: 20px;
`,ki=y.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: var(--text-color);
`,$l=y.input`
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
`,ey=y.textarea`
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
`,ty=y.button`
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
`,ny=y.section`
  padding: 50px 0 80px;
`,ry=y.div`
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
`;function iy(){const[e,t]=P.useState({name:"",email:"",subject:"",message:""}),[n,r]=P.useState(!1),[i,o]=P.useState(!1),l=a=>{const{name:u,value:m}=a.target;t(h=>({...h,[u]:m}))},s=a=>{a.preventDefault(),r(!0),setTimeout(()=>{console.log("Form submitted:",e),t({name:"",email:"",subject:"",message:""}),r(!1),o(!0),setTimeout(()=>{o(!1)},5e3)},1500)};return c.jsxs(c.Fragment,{children:[c.jsx(B1,{children:c.jsxs("div",{className:"container",children:[c.jsx(V1,{children:"联系我"}),c.jsx(W1,{children:"如果您有任何问题或合作意向，请随时与我联系。"})]})}),c.jsx(H1,{children:c.jsx("div",{className:"container",children:c.jsxs(Q1,{children:[c.jsxs(Y1,{children:[c.jsx(G1,{children:"联系方式"}),c.jsxs(K1,{children:[c.jsxs(Nl,{children:[c.jsx(Tl,{children:"📧"}),c.jsxs(zl,{children:[c.jsx(Il,{children:"电子邮件"}),c.jsx(Rl,{children:c.jsx(X1,{href:"mailto:contact@example.com",children:"contact@example.com"})})]})]}),c.jsxs(Nl,{children:[c.jsx(Tl,{children:"📱"}),c.jsxs(zl,{children:[c.jsx(Il,{children:"社交媒体"}),c.jsx(Rl,{children:"在各大自媒体平台关注我"}),c.jsxs(Z1,{children:[c.jsx(Ll,{href:"https://www.xiaohongshu.com",target:"_blank",rel:"noopener noreferrer",children:"小"}),c.jsx(Ll,{href:"https://weibo.com",target:"_blank",rel:"noopener noreferrer",children:"微"}),c.jsx(Ll,{href:"https://www.zhihu.com",target:"_blank",rel:"noopener noreferrer",children:"知"})]})]})]}),c.jsxs(Nl,{children:[c.jsx(Tl,{children:"🕒"}),c.jsxs(zl,{children:[c.jsx(Il,{children:"回复时间"}),c.jsx(Rl,{children:"通常在24小时内回复您的消息。"})]})]})]})]}),c.jsx(b1,{children:c.jsxs(J1,{onSubmit:s,children:[c.jsx(q1,{children:"发送消息"}),c.jsxs(wi,{children:[c.jsx(ki,{htmlFor:"name",children:"您的姓名"}),c.jsx($l,{type:"text",id:"name",name:"name",value:e.name,onChange:l,required:!0})]}),c.jsxs(wi,{children:[c.jsx(ki,{htmlFor:"email",children:"电子邮箱"}),c.jsx($l,{type:"email",id:"email",name:"email",value:e.email,onChange:l,required:!0})]}),c.jsxs(wi,{children:[c.jsx(ki,{htmlFor:"subject",children:"主题"}),c.jsx($l,{type:"text",id:"subject",name:"subject",value:e.subject,onChange:l,required:!0})]}),c.jsxs(wi,{children:[c.jsx(ki,{htmlFor:"message",children:"消息内容"}),c.jsx(ey,{id:"message",name:"message",value:e.message,onChange:l,required:!0})]}),c.jsx(ty,{type:"submit",disabled:n,children:n?"发送中...":"发送消息"}),i&&c.jsx("p",{style:{color:"green",marginTop:"15px"},children:"您的消息已发送成功，我会尽快回复您！"})]})})]})})}),c.jsx(ny,{children:c.jsxs("div",{className:"container",children:[c.jsx("h2",{className:"section-title",children:"位置"}),c.jsx(ry,{children:"地图将在实际部署时加载 (可集成百度地图或高德地图API)"})]})})]})}function oy(){return c.jsxs("div",{className:"app",children:[c.jsx(Zg,{}),c.jsx("main",{children:c.jsxs(N0,{children:[c.jsx(fn,{path:"/",element:c.jsx(_v,{})}),c.jsx(fn,{path:"/products",element:c.jsx(Zv,{})}),c.jsx(fn,{path:"/media",element:c.jsx(v1,{})}),c.jsx(fn,{path:"/about",element:c.jsx(U1,{})}),c.jsx(fn,{path:"/contact",element:c.jsx(iy,{})})]})}),c.jsx(tv,{})]})}Ol.createRoot(document.getElementById("root")).render(c.jsx(qt.StrictMode,{children:c.jsx(D0,{children:c.jsx(oy,{})})}));
