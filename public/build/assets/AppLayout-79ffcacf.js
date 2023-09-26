import{W as ge,X as be,F as A,Y as oe,_ as se,d as x,$ as ie,a0 as D,m as P,k as S,a1 as N,a2 as ye,o as M,e as F,a as m,b as w,u as I,Z as xe,h as G,w as E,t as j,I as we,g as C,r as X,f as Ie,S as _e,n as Q,j as Z}from"./app-a8e4721a.js";function $(e,t,...r){if(e in t){let n=t[e];return typeof n=="function"?n(...r):n}let l=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(n=>`"${n}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,$),l}var H=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(H||{}),Ee=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(Ee||{});function R({visible:e=!0,features:t=0,ourProps:r,theirProps:l,...n}){var a;let o=ce(l,r),i=Object.assign(n,{props:o});if(e||t&2&&o.static)return B(i);if(t&1){let p=(a=o.unmount)==null||a?0:1;return $(p,{0(){return null},1(){return B({...n,props:{...o,hidden:!0,style:{display:"none"}}})}})}return B(i)}function B({props:e,attrs:t,slots:r,slot:l,name:n}){var a,o;let{as:i,...p}=Se(e,["unmount","static"]),c=(a=r.default)==null?void 0:a.call(r,l),s={};if(l){let h=!1,f=[];for(let[v,d]of Object.entries(l))typeof d=="boolean"&&(h=!0),d===!0&&f.push(v);h&&(s["data-headlessui-state"]=f.join(" "))}if(i==="template"){if(c=ue(c??[]),Object.keys(p).length>0||Object.keys(t).length>0){let[h,...f]=c??[];if(!ke(h)||f.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${n} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(p).concat(Object.keys(t)).map(u=>u.trim()).filter((u,b,k)=>k.indexOf(u)===b).sort((u,b)=>u.localeCompare(b)).map(u=>`  - ${u}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(u=>`  - ${u}`).join(`
`)].join(`
`));let v=ce((o=h.props)!=null?o:{},p),d=ge(h,v);for(let u in v)u.startsWith("on")&&(d.props||(d.props={}),d.props[u]=v[u]);return d}return Array.isArray(c)&&c.length===1?c[0]:c}return be(i,Object.assign({},p,s),{default:()=>c})}function ue(e){return e.flatMap(t=>t.type===A?ue(t.children):[t])}function ce(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},r={};for(let l of e)for(let n in l)n.startsWith("on")&&typeof l[n]=="function"?(r[n]!=null||(r[n]=[]),r[n].push(l[n])):t[n]=l[n];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(r).map(l=>[l,void 0])));for(let l in r)Object.assign(t,{[l](n,...a){let o=r[l];for(let i of o){if(n instanceof Event&&n.defaultPrevented)return;i(n,...a)}}});return t}function Se(e,t=[]){let r=Object.assign({},e);for(let l of t)l in r&&delete r[l];return r}function ke(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let Me=0;function Fe(){return++Me}function K(){return Fe()}var y=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(y||{});function Pe(e){throw new Error("Unexpected object: "+e)}var _=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(_||{});function Oe(e,t){let r=t.resolveItems();if(r.length<=0)return null;let l=t.resolveActiveIndex(),n=l??-1,a=(()=>{switch(e.focus){case 0:return r.findIndex(o=>!t.resolveDisabled(o));case 1:{let o=r.slice().reverse().findIndex((i,p,c)=>n!==-1&&c.length-p-1>=n?!1:!t.resolveDisabled(i));return o===-1?o:r.length-1-o}case 2:return r.findIndex((o,i)=>i<=n?!1:!t.resolveDisabled(o));case 3:{let o=r.slice().reverse().findIndex(i=>!t.resolveDisabled(i));return o===-1?o:r.length-1-o}case 4:return r.findIndex(o=>t.resolveId(o)===e.id);case 5:return null;default:Pe(e)}})();return a===-1?l:a}function g(e){var t;return e==null||e.value==null?null:(t=e.value.$el)!=null?t:e.value}let de=Symbol("Context");var O=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(O||{});function De(){return oe(de,null)}function Te(e){se(de,e)}function J(e,t){if(e)return e;let r=t??"button";if(typeof r=="string"&&r.toLowerCase()==="button")return"button"}function Ae(e,t){let r=x(J(e.value.type,e.value.as));return ie(()=>{r.value=J(e.value.type,e.value.as)}),D(()=>{var l;r.value||g(t)&&g(t)instanceof HTMLButtonElement&&!((l=g(t))!=null&&l.hasAttribute("type"))&&(r.value="button")}),r}var Ne=Object.defineProperty,$e=(e,t,r)=>t in e?Ne(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ee=(e,t,r)=>($e(e,typeof t!="symbol"?t+"":t,r),r);class Re{constructor(){ee(this,"current",this.detect()),ee(this,"currentId",0)}set(t){this.current!==t&&(this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}}let W=new Re;function q(e){if(W.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=g(e);if(t)return t.ownerDocument}return document}function Le({container:e,accept:t,walk:r,enabled:l}){D(()=>{let n=e.value;if(!n||l!==void 0&&!l.value)return;let a=q(e);if(!a)return;let o=Object.assign(p=>t(p),{acceptNode:t}),i=a.createTreeWalker(n,NodeFilter.SHOW_ELEMENT,o,!1);for(;i.nextNode();)r(i.currentNode)})}let U=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var V=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(V||{}),je=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(je||{}),Ce=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(Ce||{});function fe(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(U)).sort((t,r)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(r.tabIndex||Number.MAX_SAFE_INTEGER)))}var z=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(z||{});function Y(e,t=0){var r;return e===((r=q(e))==null?void 0:r.body)?!1:$(t,{0(){return e.matches(U)},1(){let l=e;for(;l!==null;){if(l.matches(U))return!0;l=l.parentElement}return!1}})}function pe(e){let t=q(e);P(()=>{t&&!Y(t.activeElement,0)&&He(e)})}var Be=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(Be||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function He(e){e==null||e.focus({preventScroll:!0})}let Ue=["textarea","input"].join(",");function Ve(e){var t,r;return(r=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,Ue))!=null?r:!1}function ve(e,t=r=>r){return e.slice().sort((r,l)=>{let n=t(r),a=t(l);if(n===null||a===null)return 0;let o=n.compareDocumentPosition(a);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function Ke(e,t){return We(fe(),t,{relativeTo:e})}function We(e,t,{sorted:r=!0,relativeTo:l=null,skipElements:n=[]}={}){var a;let o=(a=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?a:document,i=Array.isArray(e)?r?ve(e):e:fe(e);n.length>0&&i.length>1&&(i=i.filter(d=>!n.includes(d))),l=l??o.activeElement;let p=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,i.indexOf(l))-1;if(t&4)return Math.max(0,i.indexOf(l))+1;if(t&8)return i.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),s=t&32?{preventScroll:!0}:{},h=0,f=i.length,v;do{if(h>=f||h+f<=0)return 0;let d=c+h;if(t&16)d=(d+f)%f;else{if(d<0)return 3;if(d>=f)return 1}v=i[d],v==null||v.focus(s),h+=p}while(v!==o.activeElement);return t&6&&Ve(v)&&v.select(),2}function T(e,t,r){W.isServer||D(l=>{document.addEventListener(e,t,r),l(()=>document.removeEventListener(e,t,r))})}function qe(e,t,r){W.isServer||D(l=>{window.addEventListener(e,t,r),l(()=>window.removeEventListener(e,t,r))})}function ze(e,t,r=S(()=>!0)){function l(a,o){if(!r.value||a.defaultPrevented)return;let i=o(a);if(i===null||!i.getRootNode().contains(i))return;let p=function c(s){return typeof s=="function"?c(s()):Array.isArray(s)||s instanceof Set?s:[s]}(e);for(let c of p){if(c===null)continue;let s=c instanceof HTMLElement?c:g(c);if(s!=null&&s.contains(i)||a.composed&&a.composedPath().includes(s))return}return!Y(i,z.Loose)&&i.tabIndex!==-1&&a.preventDefault(),t(a,i)}let n=x(null);T("pointerdown",a=>{var o,i;r.value&&(n.value=((i=(o=a.composedPath)==null?void 0:o.call(a))==null?void 0:i[0])||a.target)},!0),T("mousedown",a=>{var o,i;r.value&&(n.value=((i=(o=a.composedPath)==null?void 0:o.call(a))==null?void 0:i[0])||a.target)},!0),T("click",a=>{n.value&&(l(a,()=>n.value),n.value=null)},!0),T("touchend",a=>l(a,()=>a.target instanceof HTMLElement?a.target:null),!0),qe("blur",a=>l(a,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function te(e){return[e.screenX,e.screenY]}function Ye(){let e=x([-1,-1]);return{wasMoved(t){let r=te(t);return e.value[0]===r[0]&&e.value[1]===r[1]?!1:(e.value=r,!0)},update(t){e.value=te(t)}}}let ne=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function re(e){var t,r;let l=(t=e.innerText)!=null?t:"",n=e.cloneNode(!0);if(!(n instanceof HTMLElement))return l;let a=!1;for(let i of n.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))i.remove(),a=!0;let o=a?(r=n.innerText)!=null?r:"":l;return ne.test(o)&&(o=o.replace(ne,"")),o}function Ge(e){let t=e.getAttribute("aria-label");if(typeof t=="string")return t.trim();let r=e.getAttribute("aria-labelledby");if(r){let l=r.split(" ").map(n=>{let a=document.getElementById(n);if(a){let o=a.getAttribute("aria-label");return typeof o=="string"?o.trim():re(a).trim()}return null}).filter(Boolean);if(l.length>0)return l.join(", ")}return re(e).trim()}function Xe(e){let t=x(""),r=x("");return()=>{let l=g(e);if(!l)return"";let n=l.innerText;if(t.value===n)return r.value;let a=Ge(l).trim().toLowerCase();return t.value=n,r.value=a,a}}var Qe=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Qe||{}),Ze=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(Ze||{});function Je(e){requestAnimationFrame(()=>requestAnimationFrame(e))}let me=Symbol("MenuContext");function L(e){let t=oe(me,null);if(t===null){let r=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,L),r}return t}let et=N({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(e,{slots:t,attrs:r}){let l=x(1),n=x(null),a=x(null),o=x([]),i=x(""),p=x(null),c=x(1);function s(f=v=>v){let v=p.value!==null?o.value[p.value]:null,d=ve(f(o.value.slice()),b=>g(b.dataRef.domRef)),u=v?d.indexOf(v):null;return u===-1&&(u=null),{items:d,activeItemIndex:u}}let h={menuState:l,buttonRef:n,itemsRef:a,items:o,searchQuery:i,activeItemIndex:p,activationTrigger:c,closeMenu:()=>{l.value=1,p.value=null},openMenu:()=>l.value=0,goToItem(f,v,d){let u=s(),b=Oe(f===_.Specific?{focus:_.Specific,id:v}:{focus:f},{resolveItems:()=>u.items,resolveActiveIndex:()=>u.activeItemIndex,resolveId:k=>k.id,resolveDisabled:k=>k.dataRef.disabled});i.value="",p.value=b,c.value=d??1,o.value=u.items},search(f){let v=i.value!==""?0:1;i.value+=f.toLowerCase();let d=(p.value!==null?o.value.slice(p.value+v).concat(o.value.slice(0,p.value+v)):o.value).find(b=>b.dataRef.textValue.startsWith(i.value)&&!b.dataRef.disabled),u=d?o.value.indexOf(d):-1;u===-1||u===p.value||(p.value=u,c.value=1)},clearSearch(){i.value=""},registerItem(f,v){let d=s(u=>[...u,{id:f,dataRef:v}]);o.value=d.items,p.value=d.activeItemIndex,c.value=1},unregisterItem(f){let v=s(d=>{let u=d.findIndex(b=>b.id===f);return u!==-1&&d.splice(u,1),d});o.value=v.items,p.value=v.activeItemIndex,c.value=1}};return ze([n,a],(f,v)=>{var d;h.closeMenu(),Y(v,z.Loose)||(f.preventDefault(),(d=g(n))==null||d.focus())},S(()=>l.value===0)),se(me,h),Te(S(()=>$(l.value,{0:O.Open,1:O.Closed}))),()=>{let f={open:l.value===0,close:h.closeMenu};return R({ourProps:{},theirProps:e,slot:f,slots:t,attrs:r,name:"Menu"})}}}),le=N({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-menu-button-${K()}`}},setup(e,{attrs:t,slots:r,expose:l}){let n=L("MenuButton");l({el:n.buttonRef,$el:n.buttonRef});function a(c){switch(c.key){case y.Space:case y.Enter:case y.ArrowDown:c.preventDefault(),c.stopPropagation(),n.openMenu(),P(()=>{var s;(s=g(n.itemsRef))==null||s.focus({preventScroll:!0}),n.goToItem(_.First)});break;case y.ArrowUp:c.preventDefault(),c.stopPropagation(),n.openMenu(),P(()=>{var s;(s=g(n.itemsRef))==null||s.focus({preventScroll:!0}),n.goToItem(_.Last)});break}}function o(c){switch(c.key){case y.Space:c.preventDefault();break}}function i(c){e.disabled||(n.menuState.value===0?(n.closeMenu(),P(()=>{var s;return(s=g(n.buttonRef))==null?void 0:s.focus({preventScroll:!0})})):(c.preventDefault(),n.openMenu(),Je(()=>{var s;return(s=g(n.itemsRef))==null?void 0:s.focus({preventScroll:!0})})))}let p=Ae(S(()=>({as:e.as,type:t.type})),n.buttonRef);return()=>{var c;let s={open:n.menuState.value===0},{id:h,...f}=e,v={ref:n.buttonRef,id:h,type:p.value,"aria-haspopup":"menu","aria-controls":(c=g(n.itemsRef))==null?void 0:c.id,"aria-expanded":n.menuState.value===0,onKeydown:a,onKeyup:o,onClick:i};return R({ourProps:v,theirProps:f,slot:s,attrs:t,slots:r,name:"MenuButton"})}}}),tt=N({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-menu-items-${K()}`}},setup(e,{attrs:t,slots:r,expose:l}){let n=L("MenuItems"),a=x(null);l({el:n.itemsRef,$el:n.itemsRef}),Le({container:S(()=>g(n.itemsRef)),enabled:S(()=>n.menuState.value===0),accept(s){return s.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:s.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(s){s.setAttribute("role","none")}});function o(s){var h;switch(a.value&&clearTimeout(a.value),s.key){case y.Space:if(n.searchQuery.value!=="")return s.preventDefault(),s.stopPropagation(),n.search(s.key);case y.Enter:if(s.preventDefault(),s.stopPropagation(),n.activeItemIndex.value!==null){let f=n.items.value[n.activeItemIndex.value];(h=g(f.dataRef.domRef))==null||h.click()}n.closeMenu(),pe(g(n.buttonRef));break;case y.ArrowDown:return s.preventDefault(),s.stopPropagation(),n.goToItem(_.Next);case y.ArrowUp:return s.preventDefault(),s.stopPropagation(),n.goToItem(_.Previous);case y.Home:case y.PageUp:return s.preventDefault(),s.stopPropagation(),n.goToItem(_.First);case y.End:case y.PageDown:return s.preventDefault(),s.stopPropagation(),n.goToItem(_.Last);case y.Escape:s.preventDefault(),s.stopPropagation(),n.closeMenu(),P(()=>{var f;return(f=g(n.buttonRef))==null?void 0:f.focus({preventScroll:!0})});break;case y.Tab:s.preventDefault(),s.stopPropagation(),n.closeMenu(),P(()=>Ke(g(n.buttonRef),s.shiftKey?V.Previous:V.Next));break;default:s.key.length===1&&(n.search(s.key),a.value=setTimeout(()=>n.clearSearch(),350));break}}function i(s){switch(s.key){case y.Space:s.preventDefault();break}}let p=De(),c=S(()=>p!==null?(p.value&O.Open)===O.Open:n.menuState.value===0);return()=>{var s,h;let f={open:n.menuState.value===0},{id:v,...d}=e,u={"aria-activedescendant":n.activeItemIndex.value===null||(s=n.items.value[n.activeItemIndex.value])==null?void 0:s.id,"aria-labelledby":(h=g(n.buttonRef))==null?void 0:h.id,id:v,onKeydown:o,onKeyup:i,role:"menu",tabIndex:0,ref:n.itemsRef};return R({ourProps:u,theirProps:d,slot:f,attrs:t,slots:r,features:H.RenderStrategy|H.Static,visible:c.value,name:"MenuItems"})}}}),ae=N({name:"MenuItem",inheritAttrs:!1,props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-menu-item-${K()}`}},setup(e,{slots:t,attrs:r,expose:l}){let n=L("MenuItem"),a=x(null);l({el:a,$el:a});let o=S(()=>n.activeItemIndex.value!==null?n.items.value[n.activeItemIndex.value].id===e.id:!1),i=Xe(a),p=S(()=>({disabled:e.disabled,get textValue(){return i()},domRef:a}));ie(()=>n.registerItem(e.id,p)),ye(()=>n.unregisterItem(e.id)),D(()=>{n.menuState.value===0&&o.value&&n.activationTrigger.value!==0&&P(()=>{var u,b;return(b=(u=g(a))==null?void 0:u.scrollIntoView)==null?void 0:b.call(u,{block:"nearest"})})});function c(u){if(e.disabled)return u.preventDefault();n.closeMenu(),pe(g(n.buttonRef))}function s(){if(e.disabled)return n.goToItem(_.Nothing);n.goToItem(_.Specific,e.id)}let h=Ye();function f(u){h.update(u)}function v(u){h.wasMoved(u)&&(e.disabled||o.value||n.goToItem(_.Specific,e.id,0))}function d(u){h.wasMoved(u)&&(e.disabled||o.value&&n.goToItem(_.Nothing))}return()=>{let{disabled:u}=e,b={active:o.value,disabled:u,close:n.closeMenu},{id:k,...he}=e;return R({ourProps:{id:k,ref:a,role:"menuitem",tabIndex:u===!0?void 0:-1,"aria-disabled":u===!0?!0:void 0,disabled:void 0,onClick:c,onFocus:s,onPointerenter:f,onMouseenter:f,onPointermove:v,onMousemove:v,onPointerleave:d,onMouseleave:d},theirProps:{...r,...he},slot:b,attrs:r,slots:t,name:"MenuItem"})}}});function nt(e,t){return M(),F("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[m("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})])}function rt(e,t){return M(),F("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[m("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"})])}function lt(e,t){return M(),F("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[m("path",{"fill-rule":"evenodd",d:"M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z","clip-rule":"evenodd"})])}const at="/build/assets/dashboard-a744da0c.svg",ot="/build/assets/border-bottom-fb2392d4.svg",st="/build/assets/dashboard-active-e3fbfdfa.svg",it="/build/assets/clients-f0800b64.svg",ut="/build/assets/clients-active-553e2828.svg",ct={class:"hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col"},dt={class:"flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4"},ft=m("div",{class:"flex h-10 shrink-0 items-center"},null,-1),pt={class:"flex flex-1 flex-col"},vt={role:"list",class:"flex flex-1 flex-col gap-y-7"},mt={role:"list",class:"-mx-2 space-y-1"},ht=["src"],gt={class:"lg:pl-72"},bt={class:"sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8"},yt=m("span",{class:"sr-only"},"Open sidebar",-1),xt=m("div",{class:"h-6 w-px bg-gray-200 lg:hidden","aria-hidden":"true"},null,-1),wt={class:"flex flex-1 gap-x-4 self-stretch lg:gap-x-6"},It=m("div",{class:"relative flex flex-1"},null,-1),_t={class:"flex items-center gap-x-4 lg:gap-x-6"},Et={type:"button",class:"-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"},St=m("span",{class:"sr-only"},"View notifications",-1),kt=m("div",{class:"hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200","aria-hidden":"true"},null,-1),Mt=m("span",{class:"sr-only"},"Open user menu",-1),Ft=m("img",{class:"h-8 w-8 rounded-full bg-gray-50",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",alt:""},null,-1),Pt={class:"hidden lg:flex lg:items-center"},Ot={class:"ml-4 text-sm font-semibold leading-6 text-gray-900","aria-hidden":"true"},Dt={key:0,class:"bg-transparent"},Tt={class:"max-w-10xl py-6 px-5 sm:px-6 lg:px-8 page-header"},At=["src"],Nt={class:"py-0"},$t={class:"px-4 sm:px-6 lg:px-8"},Lt={__name:"AppLayout",props:{title:String},setup(e){const t=[{name:"Dashboard",href:route("dashboard"),selectedIcon:st,icon:at,current:!0},{name:"contact-management",href:route("contact-messages.index"),selectedIcon:ut,icon:it,current:!1}],r=[{name:"Your profile",href:route("profile.show")}],l=x(!1),n=()=>{_e.post(route("logout"))};return t.forEach(a=>{a.current=window.location.href.includes(a.href.split("/").slice(0,4).join("/"))}),(a,o)=>(M(),F(A,null,[w(I(xe),{title:e.title},null,8,["title"]),m("div",null,[m("div",ct,[m("div",dt,[ft,m("nav",pt,[m("ul",vt,[m("li",null,[m("ul",mt,[(M(),F(A,null,G(t,i=>m("li",{key:i.name},[w(I(Z),{href:i.href,class:Q([i.current?"bg-transparent !bg-gradient-to-r from-0% !from-[#1047726b] to-100% !to-[#FFFFFF] text-[#104772]":"text-gray-700 hover:text-[#104772] hover:bg-gray-50","group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"])},{default:E(()=>[m("img",{src:i.current?i.selectedIcon:i.icon},null,8,ht),C(" "+j(i.name),1)]),_:2},1032,["href","class"])])),64))])])])])])]),m("div",gt,[m("div",bt,[m("button",{type:"button",class:"-m-2.5 p-2.5 text-gray-700 lg:hidden",onClick:o[0]||(o[0]=i=>l.value=!0)},[yt,w(I(nt),{class:"h-6 w-6","aria-hidden":"true"})]),xt,m("div",wt,[It,m("div",_t,[m("button",Et,[St,w(I(rt),{class:"h-6 w-6","aria-hidden":"true"})]),kt,w(I(et),{as:"div",class:"relative"},{default:E(()=>[w(I(le),{class:"-m-1.5 flex items-center p-1.5"},{default:E(()=>[Mt,Ft,m("span",Pt,[m("span",Ot,j(a.$page.props.auth.user.name),1),w(I(lt),{class:"ml-2 h-5 w-5 text-gray-400","aria-hidden":"true"})])]),_:1}),w(we,{"enter-active-class":"transition ease-out duration-100","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:E(()=>[w(I(tt),{class:"absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none"},{default:E(()=>[(M(),F(A,null,G(r,i=>w(I(ae),{key:i.name},{default:E(({active:p})=>[w(I(Z),{href:i.href,class:Q([p?"bg-gray-50":"","block px-3 py-1 text-sm leading-6 text-gray-900"])},{default:E(()=>[C(j(i.name),1)]),_:2},1032,["href","class"])]),_:2},1024)),64)),w(I(ae),null,{default:E(()=>[w(I(le),{as:"button",onClick:n,class:"w-full text-left px-3 py-1 text-sm leading-6 text-gray-900"},{default:E(()=>[C(" Sign out ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])])]),a.$slots.header?(M(),F("header",Dt,[m("div",Tt,[X(a.$slots,"header"),m("img",{class:"img-w-in",src:I(ot)},null,8,At)])])):Ie("",!0),m("main",Nt,[m("div",$t,[X(a.$slots,"default")])])])])],64))}};export{Lt as _};
