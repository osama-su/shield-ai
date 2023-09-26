import{T as w,e as d,b as t,u as s,w as m,F as b,o as i,Z as k,t as x,f as u,a,c as y,g as c,j as h,n as v,i as V}from"./app-a8e4721a.js";import{A as $}from"./AuthenticationCard-86045e82.js";import{_ as B}from"./AuthenticationCardLogo-152776d4.js";import{_ as C}from"./Checkbox-663f719a.js";import{_ as f,a as p}from"./TextInput-8ee146a5.js";import{_ as g}from"./InputLabel-d5a7ac4d.js";import{_ as F}from"./PrimaryButton-789bec47.js";import"./_plugin-vue_export-helper-c27b6911.js";const N={key:0,class:"mb-4 font-medium text-sm text-green-600 dark:text-green-400"},S=["onSubmit"],q={class:"mt-4"},L={class:"block mt-4"},P={class:"flex items-center"},R=a("span",{class:"ml-2 text-sm text-gray-600 dark:text-gray-400"},"Remember me",-1),U={class:"flex items-center justify-end mt-4"},G={__name:"Login",props:{canResetPassword:Boolean,status:String},setup(l){const e=w({email:"",password:"",remember:!1}),_=()=>{e.transform(n=>({...n,remember:e.remember?"on":""})).post(route("login"),{onFinish:()=>e.reset("password")})};return(n,o)=>(i(),d(b,null,[t(s(k),{title:"Log in"}),t($,null,{logo:m(()=>[t(B)]),default:m(()=>[l.status?(i(),d("div",N,x(l.status),1)):u("",!0),a("form",{onSubmit:V(_,["prevent"])},[a("div",null,[t(g,{for:"email",value:"Email"}),t(f,{id:"email",modelValue:s(e).email,"onUpdate:modelValue":o[0]||(o[0]=r=>s(e).email=r),type:"email",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),t(p,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),a("div",q,[t(g,{for:"password",value:"Password"}),t(f,{id:"password",modelValue:s(e).password,"onUpdate:modelValue":o[1]||(o[1]=r=>s(e).password=r),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"current-password"},null,8,["modelValue"]),t(p,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),a("div",L,[a("label",P,[t(C,{checked:s(e).remember,"onUpdate:checked":o[2]||(o[2]=r=>s(e).remember=r),name:"remember"},null,8,["checked"]),R])]),a("div",U,[l.canResetPassword?(i(),y(s(h),{key:0,href:n.route("password.request"),class:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"},{default:m(()=>[c(" Forgot your password? ")]),_:1},8,["href"])):u("",!0),t(F,{class:v(["ml-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:m(()=>[c(" Log in ")]),_:1},8,["class","disabled"])])],40,S)]),_:1})],64))}};export{G as default};
