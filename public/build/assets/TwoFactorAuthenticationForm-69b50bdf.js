import{d as v,P as N,o as e,e as s,a as l,r as Q,b as r,w as o,g as n,t as C,B,n as x,m as O,Q as Y,T as D,k as I,M as U,c as y,f as i,u as F,F as z,h as G,O as A}from"./app-7019f208.js";import{b as W,a as j}from"./DialogModal-20bd8da7.js";import{_ as R,a as M}from"./TextInput-a8f74aa0.js";import{_ as $}from"./PrimaryButton-1356a5ef.js";import{_ as T}from"./SecondaryButton-9840fb25.js";import{_ as J}from"./DangerButton-9a28bb68.js";import{_ as X}from"./InputLabel-c4d11b7b.js";import"./SectionTitle-60796c19.js";import"./_plugin-vue_export-helper-c27b6911.js";const Z={class:"mt-4"},h={__name:"ConfirmsPassword",props:{title:{type:String,default:"Confirm Password"},content:{type:String,default:"For your security, please confirm your password to continue."},button:{type:String,default:"Confirm"}},emits:["confirmed"],setup(g,{emit:k}){const w=v(!1),t=N({password:"",error:"",processing:!1}),a=v(null),m=()=>{axios.get(route("password.confirmation")).then(c=>{c.data.confirmed?k("confirmed"):(w.value=!0,setTimeout(()=>a.value.focus(),250))})},_=()=>{t.processing=!0,axios.post(route("password.confirm"),{password:t.password}).then(()=>{t.processing=!1,f(),O().then(()=>k("confirmed"))}).catch(c=>{t.processing=!1,t.error=c.response.data.errors.password[0],a.value.focus()})},f=()=>{w.value=!1,t.password="",t.error=""};return(c,u)=>(e(),s("span",null,[l("span",{onClick:m},[Q(c.$slots,"default")]),r(W,{show:w.value,onClose:f},{title:o(()=>[n(C(g.title),1)]),content:o(()=>[n(C(g.content)+" ",1),l("div",Z,[r(R,{ref_key:"passwordInput",ref:a,modelValue:t.password,"onUpdate:modelValue":u[0]||(u[0]=p=>t.password=p),type:"password",class:"mt-1 block w-3/4",placeholder:"Password",autocomplete:"current-password",onKeyup:B(_,["enter"])},null,8,["modelValue","onKeyup"]),r(M,{message:t.error,class:"mt-2"},null,8,["message"])])]),footer:o(()=>[r(T,{onClick:f},{default:o(()=>[n(" Cancel ")]),_:1}),r($,{class:x(["ml-3",{"opacity-25":t.processing}]),disabled:t.processing,onClick:_},{default:o(()=>[n(C(g.button),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}},ee={key:0,class:"text-lg font-medium text-gray-900 dark:text-gray-100"},te={key:1,class:"text-lg font-medium text-gray-900 dark:text-gray-100"},oe={key:2,class:"text-lg font-medium text-gray-900 dark:text-gray-100"},ae=l("div",{class:"mt-3 max-w-xl text-sm text-gray-600 dark:text-gray-400"},[l("p",null," When two factor authentication is enabled, you will be prompted for a secure, random token during authentication. You may retrieve this token from your phone's Google Authenticator application. ")],-1),se={key:3},re={key:0},ne={class:"mt-4 max-w-xl text-sm text-gray-600 dark:text-gray-400"},le={key:0,class:"font-semibold"},ce={key:1},ie=["innerHTML"],ue={key:0,class:"mt-4 max-w-xl text-sm text-gray-600 dark:text-gray-400"},de={class:"font-semibold"},me=["innerHTML"],fe={key:1,class:"mt-4"},pe={key:1},ve=l("div",{class:"mt-4 max-w-xl text-sm text-gray-600 dark:text-gray-400"},[l("p",{class:"font-semibold"}," Store these recovery codes in a secure password manager. They can be used to recover access to your account if your two factor authentication device is lost. ")],-1),_e={class:"grid gap-1 max-w-xl mt-4 px-4 py-4 font-mono text-sm bg-gray-100 dark:bg-gray-900 dark:text-gray-100 rounded-lg"},ye={class:"mt-5"},he={key:0},ge={key:1},Ke={__name:"TwoFactorAuthenticationForm",props:{requiresConfirmation:Boolean},setup(g){const k=g,w=Y(),t=v(!1),a=v(!1),m=v(!1),_=v(null),f=v(null),c=v([]),u=D({code:""}),p=I(()=>{var d;return!t.value&&((d=w.props.auth.user)==null?void 0:d.two_factor_enabled)});U(p,()=>{p.value||(u.reset(),u.clearErrors())});const L=()=>{t.value=!0,A.post(route("two-factor.enable"),{},{preserveScroll:!0,onSuccess:()=>Promise.all([q(),E(),S()]),onFinish:()=>{t.value=!1,a.value=k.requiresConfirmation}})},q=()=>axios.get(route("two-factor.qr-code")).then(d=>{_.value=d.data.svg}),E=()=>axios.get(route("two-factor.secret-key")).then(d=>{f.value=d.data.secretKey}),S=()=>axios.get(route("two-factor.recovery-codes")).then(d=>{c.value=d.data}),K=()=>{u.post(route("two-factor.confirm"),{errorBag:"confirmTwoFactorAuthentication",preserveScroll:!0,preserveState:!0,onSuccess:()=>{a.value=!1,_.value=null,f.value=null}})},H=()=>{axios.post(route("two-factor.recovery-codes")).then(()=>S())},V=()=>{m.value=!0,A.delete(route("two-factor.disable"),{preserveScroll:!0,onSuccess:()=>{m.value=!1,a.value=!1}})};return(d,P)=>(e(),y(j,null,{title:o(()=>[n(" Two Factor Authentication ")]),description:o(()=>[n(" Add additional security to your account using two factor authentication. ")]),content:o(()=>[p.value&&!a.value?(e(),s("h3",ee," You have enabled two factor authentication. ")):p.value&&a.value?(e(),s("h3",te," Finish enabling two factor authentication. ")):(e(),s("h3",oe," You have not enabled two factor authentication. ")),ae,p.value?(e(),s("div",se,[_.value?(e(),s("div",re,[l("div",ne,[a.value?(e(),s("p",le," To finish enabling two factor authentication, scan the following QR code using your phone's authenticator application or enter the setup key and provide the generated OTP code. ")):(e(),s("p",ce," Two factor authentication is now enabled. Scan the following QR code using your phone's authenticator application or enter the setup key. "))]),l("div",{class:"mt-4 p-2 inline-block bg-white",innerHTML:_.value},null,8,ie),f.value?(e(),s("div",ue,[l("p",de,[n(" Setup Key: "),l("span",{innerHTML:f.value},null,8,me)])])):i("",!0),a.value?(e(),s("div",fe,[r(X,{for:"code",value:"Code"}),r(R,{id:"code",modelValue:F(u).code,"onUpdate:modelValue":P[0]||(P[0]=b=>F(u).code=b),type:"text",name:"code",class:"block mt-1 w-1/2",inputmode:"numeric",autofocus:"",autocomplete:"one-time-code",onKeyup:B(K,["enter"])},null,8,["modelValue","onKeyup"]),r(M,{message:F(u).errors.code,class:"mt-2"},null,8,["message"])])):i("",!0)])):i("",!0),c.value.length>0&&!a.value?(e(),s("div",pe,[ve,l("div",_e,[(e(!0),s(z,null,G(c.value,b=>(e(),s("div",{key:b},C(b),1))),128))])])):i("",!0)])):i("",!0),l("div",ye,[p.value?(e(),s("div",ge,[r(h,{onConfirmed:K},{default:o(()=>[a.value?(e(),y($,{key:0,type:"button",class:x(["mr-3",{"opacity-25":t.value}]),disabled:t.value},{default:o(()=>[n(" Confirm ")]),_:1},8,["class","disabled"])):i("",!0)]),_:1}),r(h,{onConfirmed:H},{default:o(()=>[c.value.length>0&&!a.value?(e(),y(T,{key:0,class:"mr-3"},{default:o(()=>[n(" Regenerate Recovery Codes ")]),_:1})):i("",!0)]),_:1}),r(h,{onConfirmed:S},{default:o(()=>[c.value.length===0&&!a.value?(e(),y(T,{key:0,class:"mr-3"},{default:o(()=>[n(" Show Recovery Codes ")]),_:1})):i("",!0)]),_:1}),r(h,{onConfirmed:V},{default:o(()=>[a.value?(e(),y(T,{key:0,class:x({"opacity-25":m.value}),disabled:m.value},{default:o(()=>[n(" Cancel ")]),_:1},8,["class","disabled"])):i("",!0)]),_:1}),r(h,{onConfirmed:V},{default:o(()=>[a.value?i("",!0):(e(),y(J,{key:0,class:x({"opacity-25":m.value}),disabled:m.value},{default:o(()=>[n(" Disable ")]),_:1},8,["class","disabled"]))]),_:1})])):(e(),s("div",he,[r(h,{onConfirmed:L},{default:o(()=>[r($,{type:"button",class:x({"opacity-25":t.value}),disabled:t.value},{default:o(()=>[n(" Enable ")]),_:1},8,["class","disabled"])]),_:1})]))])]),_:1}))}};export{Ke as default};
