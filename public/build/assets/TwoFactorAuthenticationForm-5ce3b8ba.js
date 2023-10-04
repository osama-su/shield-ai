import{d as v,L as N,o as e,e as s,a as l,r as O,b as r,w as o,g as n,t as C,K as R,n as x,m as Q,M as Y,T as D,k as I,H as U,c as y,f as i,u as F,F as z,h as G,O as P}from"./app-cb0f3ea1.js";import{b as W,a as j}from"./DialogModal-a24ec52a.js";import{_ as B,a as L}from"./TextInput-fefae374.js";import{_ as K}from"./PrimaryButton-0ca329e6.js";import{_ as T}from"./SecondaryButton-548cc15b.js";import{_ as J}from"./DangerButton-2c174cca.js";import{_ as X}from"./InputLabel-6ef3f245.js";import"./SectionTitle-54f29960.js";import"./_plugin-vue_export-helper-c27b6911.js";const Z={class:"mt-4"},h={__name:"ConfirmsPassword",props:{title:{type:String,default:"Confirm Password"},content:{type:String,default:"For your security, please confirm your password to continue."},button:{type:String,default:"Confirm"}},emits:["confirmed"],setup(g,{emit:k}){const w=v(!1),t=N({password:"",error:"",processing:!1}),a=v(null),m=()=>{axios.get(route("password.confirmation")).then(c=>{c.data.confirmed?k("confirmed"):(w.value=!0,setTimeout(()=>a.value.focus(),250))})},_=()=>{t.processing=!0,axios.post(route("password.confirm"),{password:t.password}).then(()=>{t.processing=!1,f(),Q().then(()=>k("confirmed"))}).catch(c=>{t.processing=!1,t.error=c.response.data.errors.password[0],a.value.focus()})},f=()=>{w.value=!1,t.password="",t.error=""};return(c,u)=>(e(),s("span",null,[l("span",{onClick:m},[O(c.$slots,"default")]),r(W,{show:w.value,onClose:f},{title:o(()=>[n(C(g.title),1)]),content:o(()=>[n(C(g.content)+" ",1),l("div",Z,[r(B,{ref_key:"passwordInput",ref:a,modelValue:t.password,"onUpdate:modelValue":u[0]||(u[0]=p=>t.password=p),type:"password",class:"mt-1 block w-3/4",placeholder:"Password",autocomplete:"current-password",onKeyup:R(_,["enter"])},null,8,["modelValue","onKeyup"]),r(L,{message:t.error,class:"mt-2"},null,8,["message"])])]),footer:o(()=>[r(T,{onClick:f},{default:o(()=>[n(" Cancel ")]),_:1}),r(K,{class:x(["ml-3",{"opacity-25":t.processing}]),disabled:t.processing,onClick:_},{default:o(()=>[n(C(g.button),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}},ee={key:0,class:"text-lg font-medium text-gray-900 dark:text-gray-100"},te={key:1,class:"text-lg font-medium text-gray-900 dark:text-gray-100"},oe={key:2,class:"text-lg font-medium text-gray-900 dark:text-gray-100"},ae=l("div",{class:"mt-3 max-w-xl text-sm text-gray-600 dark:text-gray-400"},[l("p",null," When two factor authentication is enabled, you will be prompted for a secure, random token during authentication. You may retrieve this token from your phone's Google Authenticator application. ")],-1),se={key:3},re={key:0},ne={class:"mt-4 max-w-xl text-sm text-gray-600 dark:text-gray-400"},le={key:0,class:"font-semibold"},ce={key:1},ie=["innerHTML"],ue={key:0,class:"mt-4 max-w-xl text-sm text-gray-600 dark:text-gray-400"},de={class:"font-semibold"},me=["innerHTML"],fe={key:1,class:"mt-4"},pe={key:1},ve=l("div",{class:"mt-4 max-w-xl text-sm text-gray-600 dark:text-gray-400"},[l("p",{class:"font-semibold"}," Store these recovery codes in a secure password manager. They can be used to recover access to your account if your two factor authentication device is lost. ")],-1),_e={class:"grid gap-1 max-w-xl mt-4 px-4 py-4 font-mono text-sm bg-gray-100 dark:bg-gray-900 dark:text-gray-100 rounded-lg"},ye={class:"mt-5"},he={key:0},ge={key:1},$e={__name:"TwoFactorAuthenticationForm",props:{requiresConfirmation:Boolean},setup(g){const k=g,w=Y(),t=v(!1),a=v(!1),m=v(!1),_=v(null),f=v(null),c=v([]),u=D({code:""}),p=I(()=>{var d;return!t.value&&((d=w.props.auth.user)==null?void 0:d.two_factor_enabled)});U(p,()=>{p.value||(u.reset(),u.clearErrors())});const M=()=>{t.value=!0,P.post(route("two-factor.enable"),{},{preserveScroll:!0,onSuccess:()=>Promise.all([H(),q(),S()]),onFinish:()=>{t.value=!1,a.value=k.requiresConfirmation}})},H=()=>axios.get(route("two-factor.qr-code")).then(d=>{_.value=d.data.svg}),q=()=>axios.get(route("two-factor.secret-key")).then(d=>{f.value=d.data.secretKey}),S=()=>axios.get(route("two-factor.recovery-codes")).then(d=>{c.value=d.data}),$=()=>{u.post(route("two-factor.confirm"),{errorBag:"confirmTwoFactorAuthentication",preserveScroll:!0,preserveState:!0,onSuccess:()=>{a.value=!1,_.value=null,f.value=null}})},E=()=>{axios.post(route("two-factor.recovery-codes")).then(()=>S())},V=()=>{m.value=!0,P.delete(route("two-factor.disable"),{preserveScroll:!0,onSuccess:()=>{m.value=!1,a.value=!1}})};return(d,A)=>(e(),y(j,null,{title:o(()=>[n(" Two Factor Authentication ")]),description:o(()=>[n(" Add additional security to your account using two factor authentication. ")]),content:o(()=>[p.value&&!a.value?(e(),s("h3",ee," You have enabled two factor authentication. ")):p.value&&a.value?(e(),s("h3",te," Finish enabling two factor authentication. ")):(e(),s("h3",oe," You have not enabled two factor authentication. ")),ae,p.value?(e(),s("div",se,[_.value?(e(),s("div",re,[l("div",ne,[a.value?(e(),s("p",le," To finish enabling two factor authentication, scan the following QR code using your phone's authenticator application or enter the setup key and provide the generated OTP code. ")):(e(),s("p",ce," Two factor authentication is now enabled. Scan the following QR code using your phone's authenticator application or enter the setup key. "))]),l("div",{class:"mt-4 p-2 inline-block bg-white",innerHTML:_.value},null,8,ie),f.value?(e(),s("div",ue,[l("p",de,[n(" Setup Key: "),l("span",{innerHTML:f.value},null,8,me)])])):i("",!0),a.value?(e(),s("div",fe,[r(X,{for:"code",value:"Code"}),r(B,{id:"code",modelValue:F(u).code,"onUpdate:modelValue":A[0]||(A[0]=b=>F(u).code=b),type:"text",name:"code",class:"block mt-1 w-1/2",inputmode:"numeric",autofocus:"",autocomplete:"one-time-code",onKeyup:R($,["enter"])},null,8,["modelValue","onKeyup"]),r(L,{message:F(u).errors.code,class:"mt-2"},null,8,["message"])])):i("",!0)])):i("",!0),c.value.length>0&&!a.value?(e(),s("div",pe,[ve,l("div",_e,[(e(!0),s(z,null,G(c.value,b=>(e(),s("div",{key:b},C(b),1))),128))])])):i("",!0)])):i("",!0),l("div",ye,[p.value?(e(),s("div",ge,[r(h,{onConfirmed:$},{default:o(()=>[a.value?(e(),y(K,{key:0,type:"button",class:x(["mr-3",{"opacity-25":t.value}]),disabled:t.value},{default:o(()=>[n(" Confirm ")]),_:1},8,["class","disabled"])):i("",!0)]),_:1}),r(h,{onConfirmed:E},{default:o(()=>[c.value.length>0&&!a.value?(e(),y(T,{key:0,class:"mr-3"},{default:o(()=>[n(" Regenerate Recovery Codes ")]),_:1})):i("",!0)]),_:1}),r(h,{onConfirmed:S},{default:o(()=>[c.value.length===0&&!a.value?(e(),y(T,{key:0,class:"mr-3"},{default:o(()=>[n(" Show Recovery Codes ")]),_:1})):i("",!0)]),_:1}),r(h,{onConfirmed:V},{default:o(()=>[a.value?(e(),y(T,{key:0,class:x({"opacity-25":m.value}),disabled:m.value},{default:o(()=>[n(" Cancel ")]),_:1},8,["class","disabled"])):i("",!0)]),_:1}),r(h,{onConfirmed:V},{default:o(()=>[a.value?i("",!0):(e(),y(J,{key:0,class:x({"opacity-25":m.value}),disabled:m.value},{default:o(()=>[n(" Disable ")]),_:1},8,["class","disabled"]))]),_:1})])):(e(),s("div",he,[r(h,{onConfirmed:M},{default:o(()=>[r(K,{type:"button",class:x({"opacity-25":t.value}),disabled:t.value},{default:o(()=>[n(" Enable ")]),_:1},8,["class","disabled"])]),_:1})]))])]),_:1}))}};export{$e as default};
