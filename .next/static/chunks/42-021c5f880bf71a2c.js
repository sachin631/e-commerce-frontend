"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[42],{622:function(e,t,n){/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(2265),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var r,i={},s=null,c=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(c=t.ref),t)u.call(t,r)&&!a.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:s,ref:c,props:i,_owner:l.current}}t.Fragment=i,t.jsx=s,t.jsxs=s},7437:function(e,t,n){e.exports=n(622)},3850:function(e,t,n){n.d(t,{R:function(){return o}});var r,o=((r=o||{}).Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r)},8870:function(e,t,n){n.d(t,{E:function(){return _}});var r,o,i,u=n(2265),l=n(1931),a=n(5606),s=n(597),c=n(2600),d=n(3850),f=n(5410),p=n(3329),m=n(6618),v=n(2950);let h=(0,u.createContext)(null);function g(){let[e,t]=(0,u.useState)([]);return[e.length>0?e.join(" "):void 0,(0,u.useMemo)(()=>function(e){let n=(0,v.z)(e=>(t(t=>[...t,e]),()=>t(t=>{let n=t.slice(),r=n.indexOf(e);return -1!==r&&n.splice(r,1),n}))),r=(0,u.useMemo)(()=>({register:n,slot:e.slot,name:e.name,props:e.props}),[n,e.slot,e.name,e.props]);return u.createElement(h.Provider,{value:r},e.children)},[t])]}let E=Object.assign((0,l.yV)(function(e,t){let n=(0,a.M)(),{id:r=`headlessui-label-${n}`,passive:o=!1,...i}=e,s=function e(){let t=(0,u.useContext)(h);if(null===t){let t=Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,e),t}return t}(),d=(0,m.T)(t);(0,c.e)(()=>s.register(r),[r,s.register]);let f={ref:d,...s.props,id:r};return o&&("onClick"in f&&(delete f.htmlFor,delete f.onClick),"onClick"in i&&delete i.onClick),(0,l.sY)({ourProps:f,theirProps:i,slot:s.slot||{},defaultTag:"label",name:s.name||"Label"})}),{}),b=(0,u.createContext)(null);function y(){let[e,t]=(0,u.useState)([]);return[e.length>0?e.join(" "):void 0,(0,u.useMemo)(()=>function(e){let n=(0,v.z)(e=>(t(t=>[...t,e]),()=>t(t=>{let n=t.slice(),r=n.indexOf(e);return -1!==r&&n.splice(r,1),n}))),r=(0,u.useMemo)(()=>({register:n,slot:e.slot,name:e.name,props:e.props}),[n,e.slot,e.name,e.props]);return u.createElement(b.Provider,{value:r},e.children)},[t])]}let O=Object.assign((0,l.yV)(function(e,t){let n=(0,a.M)(),{id:r=`headlessui-description-${n}`,...o}=e,i=function e(){let t=(0,u.useContext)(b);if(null===t){let t=Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,e),t}return t}(),s=(0,m.T)(t);(0,c.e)(()=>i.register(r),[r,i.register]);let d={ref:s,...i.props,id:r};return(0,l.sY)({ourProps:d,theirProps:o,slot:i.slot||{},defaultTag:"p",name:i.name||"Description"})}),{});var w=n(926),R=((r=R||{})[r.None=1]="None",r[r.Focusable=2]="Focusable",r[r.Hidden=4]="Hidden",r);let S=(0,l.yV)(function(e,t){let{features:n=1,...r}=e,o={ref:t,"aria-hidden":(2&n)==2||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(4&n)==4&&(2&n)!=2&&{display:"none"}}};return(0,l.sY)({ourProps:o,theirProps:r,slot:{},defaultTag:"div",name:"Hidden"})});function T(e,t){return e?e+"["+t+"]":t}var N=n(4851),k=n(5863),A=n(3759),F=n(2769),P=((o=P||{})[o.RegisterOption=0]="RegisterOption",o[o.UnregisterOption=1]="UnregisterOption",o);let x={0(e,t){let n=[...e.options,{id:t.id,element:t.element,propsRef:t.propsRef}];return{...e,options:(0,f.z2)(n,e=>e.element.current)}},1(e,t){let n=e.options.slice(),r=e.options.findIndex(e=>e.id===t.id);return -1===r?e:(n.splice(r,1),{...e,options:n})}},j=(0,u.createContext)(null);j.displayName="RadioGroupDataContext";let C=(0,u.createContext)(null);function L(e,t){return(0,s.E)(t.type,x,e,t)}C.displayName="RadioGroupActionsContext";var M=((i=M||{})[i.Empty=1]="Empty",i[i.Active=2]="Active",i);let _=Object.assign((0,l.yV)(function(e,t){let n=(0,a.M)(),{id:r=`headlessui-radiogroup-${n}`,value:o,defaultValue:i,form:s,name:c,onChange:p,by:h=(e,t)=>e===t,disabled:E=!1,...b}=e,O=(0,v.z)("string"==typeof h?(e,t)=>(null==e?void 0:e[h])===(null==t?void 0:t[h]):h),[k,A]=(0,u.useReducer)(L,{options:[]}),P=k.options,[x,M]=g(),[_,D]=y(),I=(0,u.useRef)(null),G=(0,m.T)(I,t),[H,U]=function(e,t,n){let[r,o]=(0,u.useState)(n),i=void 0!==e,l=(0,u.useRef)(i),a=(0,u.useRef)(!1),s=(0,u.useRef)(!1);return!i||l.current||a.current?i||!l.current||s.current||(s.current=!0,l.current=i,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")):(a.current=!0,l.current=i,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")),[i?e:r,(0,v.z)(e=>(i||o(e),null==t?void 0:t(e)))]}(o,p,i),$=(0,u.useMemo)(()=>P.find(e=>!e.propsRef.current.disabled),[P]),z=(0,u.useMemo)(()=>P.some(e=>O(e.propsRef.current.value,H)),[P,H]),V=(0,v.z)(e=>{var t;if(E||O(e,H))return!1;let n=null==(t=P.find(t=>O(t.propsRef.current.value,e)))?void 0:t.propsRef.current;return(null==n||!n.disabled)&&(null==U||U(e),!0)});(0,w.B)({container:I.current,accept:e=>"radio"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT,walk(e){e.setAttribute("role","none")}});let W=(0,v.z)(e=>{let t=I.current;if(!t)return;let n=(0,N.r)(t),r=P.filter(e=>!1===e.propsRef.current.disabled).map(e=>e.element.current);switch(e.key){case d.R.Enter:!function(e){var t,n;let r=null!=(t=null==e?void 0:e.form)?t:e.closest("form");if(r){for(let t of r.elements)if(t!==e&&("INPUT"===t.tagName&&"submit"===t.type||"BUTTON"===t.tagName&&"submit"===t.type||"INPUT"===t.nodeName&&"image"===t.type)){t.click();return}null==(n=r.requestSubmit)||n.call(r)}}(e.currentTarget);break;case d.R.ArrowLeft:case d.R.ArrowUp:if(e.preventDefault(),e.stopPropagation(),(0,f.jA)(r,f.TO.Previous|f.TO.WrapAround)===f.fE.Success){let e=P.find(e=>e.element.current===(null==n?void 0:n.activeElement));e&&V(e.propsRef.current.value)}break;case d.R.ArrowRight:case d.R.ArrowDown:if(e.preventDefault(),e.stopPropagation(),(0,f.jA)(r,f.TO.Next|f.TO.WrapAround)===f.fE.Success){let e=P.find(e=>e.element.current===(null==n?void 0:n.activeElement));e&&V(e.propsRef.current.value)}break;case d.R.Space:{e.preventDefault(),e.stopPropagation();let t=P.find(e=>e.element.current===(null==n?void 0:n.activeElement));t&&V(t.propsRef.current.value)}}}),Y=(0,v.z)(e=>(A({type:0,...e}),()=>A({type:1,id:e.id}))),B=(0,u.useMemo)(()=>({value:H,firstOption:$,containsCheckedOption:z,disabled:E,compare:O,...k}),[H,$,z,E,O,k]),q=(0,u.useMemo)(()=>({registerOption:Y,change:V}),[Y,V]),K=(0,u.useMemo)(()=>({value:H}),[H]),J=(0,u.useRef)(null),X=(0,F.G)();return(0,u.useEffect)(()=>{J.current&&void 0!==i&&X.addEventListener(J.current,"reset",()=>{V(i)})},[J,V]),u.createElement(D,{name:"RadioGroup.Description"},u.createElement(M,{name:"RadioGroup.Label"},u.createElement(C.Provider,{value:q},u.createElement(j.Provider,{value:B},null!=c&&null!=H&&(function e(t={},n=null,r=[]){for(let[o,i]of Object.entries(t))!function t(n,r,o){if(Array.isArray(o))for(let[e,i]of o.entries())t(n,T(r,e.toString()),i);else o instanceof Date?n.push([r,o.toISOString()]):"boolean"==typeof o?n.push([r,o?"1":"0"]):"string"==typeof o?n.push([r,o]):"number"==typeof o?n.push([r,`${o}`]):null==o?n.push([r,""]):e(o,r,n)}(r,T(n,o),i);return r})({[c]:H}).map(([e,t],n)=>u.createElement(S,{features:R.Hidden,ref:0===n?e=>{var t;J.current=null!=(t=null==e?void 0:e.closest("form"))?t:null}:void 0,...(0,l.oA)({key:e,as:"input",type:"radio",checked:null!=t,hidden:!0,readOnly:!0,form:s,name:e,value:t})})),(0,l.sY)({ourProps:{ref:G,id:r,role:"radiogroup","aria-labelledby":x,"aria-describedby":_,onKeyDown:W},theirProps:b,slot:K,defaultTag:"div",name:"RadioGroup"})))))}),{Option:(0,l.yV)(function(e,t){var n;let r=(0,a.M)(),{id:o=`headlessui-radiogroup-option-${r}`,value:i,disabled:s=!1,...d}=e,f=(0,u.useRef)(null),h=(0,m.T)(f,t),[E,b]=g(),[O,w]=y(),{addFlag:R,removeFlag:S,hasFlag:T}=(0,p.V)(1),N=(0,A.E)({value:i,disabled:s}),F=function e(t){let n=(0,u.useContext)(j);if(null===n){let n=Error(`<${t} /> is missing a parent <RadioGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,e),n}return n}("RadioGroup.Option"),P=function e(t){let n=(0,u.useContext)(C);if(null===n){let n=Error(`<${t} /> is missing a parent <RadioGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,e),n}return n}("RadioGroup.Option");(0,c.e)(()=>P.registerOption({id:o,element:f,propsRef:N}),[o,P,f,e]);let x=(0,v.z)(e=>{var t;if((0,k.P)(e.currentTarget))return e.preventDefault();P.change(i)&&(R(2),null==(t=f.current)||t.focus())}),L=(0,v.z)(e=>{if((0,k.P)(e.currentTarget))return e.preventDefault();R(2)}),M=(0,v.z)(()=>S(2)),_=(null==(n=F.firstOption)?void 0:n.id)===o,D=F.disabled||s,I=F.compare(F.value,i),G={ref:h,id:o,role:"radio","aria-checked":I?"true":"false","aria-labelledby":E,"aria-describedby":O,"aria-disabled":!!D||void 0,tabIndex:D?-1:I||!F.containsCheckedOption&&_?0:-1,onClick:D?void 0:x,onFocus:D?void 0:L,onBlur:D?void 0:M},H=(0,u.useMemo)(()=>({checked:I,disabled:D,active:T(2)}),[I,D,T]);return u.createElement(w,{name:"RadioGroup.Description"},u.createElement(b,{name:"RadioGroup.Label"},(0,l.sY)({ourProps:G,theirProps:d,slot:H,defaultTag:"div",name:"RadioGroup.Option"})))}),Label:E,Description:O})},2769:function(e,t,n){n.d(t,{G:function(){return i}});var r=n(2265),o=n(7442);function i(){let[e]=(0,r.useState)(o.k);return(0,r.useEffect)(()=>()=>e.dispose(),[e]),e}},2950:function(e,t,n){n.d(t,{z:function(){return i}});var r=n(2265),o=n(3759);let i=function(e){let t=(0,o.E)(e);return r.useCallback((...e)=>t.current(...e),[t])}},3329:function(e,t,n){n.d(t,{V:function(){return i}});var r=n(2265),o=n(634);function i(e=0){let[t,n]=(0,r.useState)(e),i=(0,o.t)(),u=(0,r.useCallback)(e=>{i.current&&n(t=>t|e)},[t,i]),l=(0,r.useCallback)(e=>!!(t&e),[t]);return{flags:t,addFlag:u,hasFlag:l,removeFlag:(0,r.useCallback)(e=>{i.current&&n(t=>t&~e)},[n,i]),toggleFlag:(0,r.useCallback)(e=>{i.current&&n(t=>t^e)},[n])}}},5606:function(e,t,n){n.d(t,{M:function(){return a}});var r,o=n(2265),i=n(2600),u=n(8957),l=n(2057);let a=null!=(r=o.useId)?r:function(){let e=(0,u.H)(),[t,n]=o.useState(e?()=>l.O.nextId():null);return(0,i.e)(()=>{null===t&&n(l.O.nextId())},[t]),null!=t?""+t:void 0}},634:function(e,t,n){n.d(t,{t:function(){return i}});var r=n(2265),o=n(2600);function i(){let e=(0,r.useRef)(!1);return(0,o.e)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}},2600:function(e,t,n){n.d(t,{e:function(){return i}});var r=n(2265),o=n(2057);let i=(e,t)=>{o.O.isServer?(0,r.useEffect)(e,t):(0,r.useLayoutEffect)(e,t)}},3759:function(e,t,n){n.d(t,{E:function(){return i}});var r=n(2265),o=n(2600);function i(e){let t=(0,r.useRef)(e);return(0,o.e)(()=>{t.current=e},[e]),t}},8957:function(e,t,n){n.d(t,{H:function(){return u}});var r,o=n(2265),i=n(2057);function u(){let e;let t=(e="undefined"==typeof document,(0,(r||(r=n.t(o,2))).useSyncExternalStore)(()=>()=>{},()=>!1,()=>!e)),[u,l]=o.useState(i.O.isHandoffComplete);return u&&!1===i.O.isHandoffComplete&&l(!1),o.useEffect(()=>{!0!==u&&l(!0)},[u]),o.useEffect(()=>i.O.handoff(),[]),!t&&u}},6618:function(e,t,n){n.d(t,{T:function(){return l},h:function(){return u}});var r=n(2265),o=n(2950);let i=Symbol();function u(e,t=!0){return Object.assign(e,{[i]:t})}function l(...e){let t=(0,r.useRef)(e);(0,r.useEffect)(()=>{t.current=e},[e]);let n=(0,o.z)(e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)});return e.every(e=>null==e||(null==e?void 0:e[i]))?void 0:n}},926:function(e,t,n){n.d(t,{B:function(){return u}});var r=n(2265),o=n(2600),i=n(4851);function u({container:e,accept:t,walk:n,enabled:u=!0}){let l=(0,r.useRef)(t),a=(0,r.useRef)(n);(0,r.useEffect)(()=>{l.current=t,a.current=n},[t,n]),(0,o.e)(()=>{if(!e||!u)return;let t=(0,i.r)(e);if(!t)return;let n=l.current,r=a.current,o=Object.assign(e=>n(e),{acceptNode:n}),s=t.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,o,!1);for(;s.nextNode();)r(s.currentNode)},[e,u,l,a])}},5863:function(e,t,n){function r(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(null==t?void 0:t.getAttribute("disabled"))==="";return!(r&&function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&r}n.d(t,{P:function(){return r}})},3960:function(e,t,n){n.d(t,{A:function(){return r}});function r(...e){return Array.from(new Set(e.flatMap(e=>"string"==typeof e?e.split(" "):[]))).filter(Boolean).join(" ")}},7442:function(e,t,n){n.d(t,{k:function(){return function e(){let t=[],n={addEventListener:(e,t,r,o)=>(e.addEventListener(t,r,o),n.add(()=>e.removeEventListener(t,r,o))),requestAnimationFrame(...e){let t=requestAnimationFrame(...e);return n.add(()=>cancelAnimationFrame(t))},nextFrame:(...e)=>n.requestAnimationFrame(()=>n.requestAnimationFrame(...e)),setTimeout(...e){let t=setTimeout(...e);return n.add(()=>clearTimeout(t))},microTask(...e){var t;let r={current:!0};return t=()=>{r.current&&e[0]()},"function"==typeof queueMicrotask?queueMicrotask(t):Promise.resolve().then(t).catch(e=>setTimeout(()=>{throw e})),n.add(()=>{r.current=!1})},style(e,t,n){let r=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:n}),this.add(()=>{Object.assign(e.style,{[t]:r})})},group(t){let n=e();return t(n),this.add(()=>n.dispose())},add:e=>(t.push(e),()=>{let n=t.indexOf(e);if(n>=0)for(let e of t.splice(n,1))e()}),dispose(){for(let e of t.splice(0))e()}};return n}}})},2057:function(e,t,n){n.d(t,{O:function(){return u}});var r=Object.defineProperty,o=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,i=(e,t,n)=>(o(e,"symbol"!=typeof t?t+"":t,n),n);let u=new class{constructor(){i(this,"current",this.detect()),i(this,"handoffState","pending"),i(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}}},5410:function(e,t,n){n.d(t,{EO:function(){return O},TO:function(){return f},fE:function(){return p},jA:function(){return w},sP:function(){return g},tJ:function(){return h},wI:function(){return E},z2:function(){return y}});var r,o,i,u,l,a=n(7442),s=n(597),c=n(4851);let d=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var f=((r=f||{})[r.First=1]="First",r[r.Previous=2]="Previous",r[r.Next=4]="Next",r[r.Last=8]="Last",r[r.WrapAround=16]="WrapAround",r[r.NoScroll=32]="NoScroll",r),p=((o=p||{})[o.Error=0]="Error",o[o.Overflow=1]="Overflow",o[o.Success=2]="Success",o[o.Underflow=3]="Underflow",o),m=((i=m||{})[i.Previous=-1]="Previous",i[i.Next=1]="Next",i);function v(e=document.body){return null==e?[]:Array.from(e.querySelectorAll(d)).sort((e,t)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER)))}var h=((u=h||{})[u.Strict=0]="Strict",u[u.Loose=1]="Loose",u);function g(e,t=0){var n;return e!==(null==(n=(0,c.r)(e))?void 0:n.body)&&(0,s.E)(t,{0:()=>e.matches(d),1(){let t=e;for(;null!==t;){if(t.matches(d))return!0;t=t.parentElement}return!1}})}function E(e){let t=(0,c.r)(e);(0,a.k)().nextFrame(()=>{t&&!g(t.activeElement,0)&&(null==e||e.focus({preventScroll:!0}))})}var b=((l=b||{})[l.Keyboard=0]="Keyboard",l[l.Mouse=1]="Mouse",l);function y(e,t=e=>e){return e.slice().sort((e,n)=>{let r=t(e),o=t(n);if(null===r||null===o)return 0;let i=r.compareDocumentPosition(o);return i&Node.DOCUMENT_POSITION_FOLLOWING?-1:i&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function O(e,t){return w(v(),t,{relativeTo:e})}function w(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:o=[]}={}){var i,u,l;let a=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,s=Array.isArray(e)?n?y(e):e:v(e);o.length>0&&s.length>1&&(s=s.filter(e=>!o.includes(e))),r=null!=r?r:a.activeElement;let c=(()=>{if(5&t)return 1;if(10&t)return -1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=(()=>{if(1&t)return 0;if(2&t)return Math.max(0,s.indexOf(r))-1;if(4&t)return Math.max(0,s.indexOf(r))+1;if(8&t)return s.length-1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),f=32&t?{preventScroll:!0}:{},p=0,m=s.length,h;do{if(p>=m||p+m<=0)return 0;let e=d+p;if(16&t)e=(e+m)%m;else{if(e<0)return 3;if(e>=m)return 1}null==(h=s[e])||h.focus(f),p+=c}while(h!==a.activeElement);return 6&t&&null!=(l=null==(u=null==(i=h)?void 0:i.matches)?void 0:u.call(i,"textarea,input"))&&l&&h.select(),2}"undefined"!=typeof window&&"undefined"!=typeof document&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{1===e.detail?delete document.documentElement.dataset.headlessuiFocusVisible:0===e.detail&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0))},597:function(e,t,n){n.d(t,{E:function(){return r}});function r(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let o=Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,r),o}},4851:function(e,t,n){n.d(t,{r:function(){return o}});var r=n(2057);function o(e){return r.O.isServer?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}},1931:function(e,t,n){n.d(t,{AN:function(){return a},l4:function(){return s},oA:function(){return m},sY:function(){return c},yV:function(){return p}});var r,o,i=n(2265),u=n(3960),l=n(597),a=((r=a||{})[r.None=0]="None",r[r.RenderStrategy=1]="RenderStrategy",r[r.Static=2]="Static",r),s=((o=s||{})[o.Unmount=0]="Unmount",o[o.Hidden=1]="Hidden",o);function c({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:o,visible:i=!0,name:u}){let a=f(t,e);if(i)return d(a,n,r,u);let s=null!=o?o:0;if(2&s){let{static:e=!1,...t}=a;if(e)return d(t,n,r,u)}if(1&s){let{unmount:e=!0,...t}=a;return(0,l.E)(e?0:1,{0:()=>null,1:()=>d({...t,hidden:!0,style:{display:"none"}},n,r,u)})}return d(a,n,r,u)}function d(e,t={},n,r){let{as:o=n,children:l,refName:a="ref",...s}=v(e,["unmount","static"]),c=void 0!==e.ref?{[a]:e.ref}:{},d="function"==typeof l?l(t):l;"className"in s&&s.className&&"function"==typeof s.className&&(s.className=s.className(t));let p={};if(t){let e=!1,n=[];for(let[r,o]of Object.entries(t))"boolean"==typeof o&&(e=!0),!0===o&&n.push(r);e&&(p["data-headlessui-state"]=n.join(" "))}if(o===i.Fragment&&Object.keys(m(s)).length>0){if(!(0,i.isValidElement)(d)||Array.isArray(d)&&d.length>1)throw Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(s).map(e=>`  - ${e}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(e=>`  - ${e}`).join(`
`)].join(`
`));let e=d.props,t="function"==typeof(null==e?void 0:e.className)?(...t)=>(0,u.A)(null==e?void 0:e.className(...t),s.className):(0,u.A)(null==e?void 0:e.className,s.className),n=t?{className:t}:{};return(0,i.cloneElement)(d,Object.assign({},f(d.props,m(v(s,["ref"]))),p,c,function(...e){return{ref:e.every(e=>null==e)?void 0:t=>{for(let n of e)null!=n&&("function"==typeof n?n(t):n.current=t)}}}(d.ref,c.ref),n))}return(0,i.createElement)(o,Object.assign({},v(s,["ref"]),o!==i.Fragment&&c,o!==i.Fragment&&p),d)}function f(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let e in r)e.startsWith("on")&&"function"==typeof r[e]?(null!=n[e]||(n[e]=[]),n[e].push(r[e])):t[e]=r[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(e=>[e,void 0])));for(let e in n)Object.assign(t,{[e](t,...r){for(let o of n[e]){if((t instanceof Event||(null==t?void 0:t.nativeEvent)instanceof Event)&&t.defaultPrevented)return;o(t,...r)}}});return t}function p(e){var t;return Object.assign((0,i.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function m(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}function v(e,t=[]){let n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}},7418:function(e,t,n){var r=n(2265);let o=r.forwardRef(function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{fillRule:"evenodd",d:"M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z",clipRule:"evenodd"}))});t.Z=o}}]);