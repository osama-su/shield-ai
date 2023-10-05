import{_ as Q}from"./AppLayout-4e841bc5.js";import{s as X,a as f,b as y,c as B,d as Z,e as ee,f as v}from"./column.esm-aea92631.js";import{p as te,o as C,e as k,q as le,d as p,c as ae,w as c,a as e,b as a,u as s,f as L,t as d,n as m,g as V,O as $,s as h}from"./app-78feccbc.js";import{s as U}from"./dialog.esm-ac99061a.js";var se=`
.p-inputtextarea-resizable {
    overflow: hidden;
    resize: none;
}

.p-fluid .p-inputtextarea {
    width: 100%;
}
`,oe={root:function(x){var D=x.instance,n=x.props;return["p-inputtextarea p-inputtext p-component",{"p-filled":D.filled,"p-inputtextarea-resizable ":n.autoResize}]}},ne=te(se,{name:"textarea",manual:!0}),re=ne.load,ie={name:"BaseTextarea",extends:X,props:{modelValue:null,autoResize:Boolean},css:{classes:oe,loadStyle:re},provide:function(){return{$parentInstance:this}}},M={name:"Textarea",extends:ie,emits:["update:modelValue"],mounted:function(){this.$el.offsetParent&&this.autoResize&&this.resize()},updated:function(){this.$el.offsetParent&&this.autoResize&&this.resize()},methods:{resize:function(){var x=window.getComputedStyle(this.$el);this.$el.style.height="auto",this.$el.style.height="calc(".concat(x.borderTopWidth," + ").concat(x.borderBottomWidth," + ").concat(this.$el.scrollHeight,"px)"),parseFloat(this.$el.style.height)>=parseFloat(this.$el.style.maxHeight)?(this.$el.style.overflowY="scroll",this.$el.style.height=this.$el.style.maxHeight):this.$el.style.overflow="hidden"},onInput:function(x){this.autoResize&&this.resize(),this.$emit("update:modelValue",x.target.value)}},computed:{filled:function(){return this.modelValue!=null&&this.modelValue.toString().length>0},ptmParams:function(){return{context:{disabled:this.$attrs.disabled||this.$attrs.disabled===""}}}}},de=["value"];function ue(i,x,D,n,o,u){return C(),k("textarea",le({class:i.cx("root"),value:i.modelValue,onInput:x[0]||(x[0]=function(){return u.onInput&&u.onInput.apply(u,arguments)})},i.ptm("root",u.ptmParams),{"data-pc-name":"textarea"}),null,16,de)}M.render=ue;const ce=e("h2",{class:"font-bold"}," Contacts ",-1),pe={class:"py-2"},xe={class:"max-w-10xl mx-auto sm:px-6 lg:px-8"},me={class:"card p-9"},ve={key:0,class:"flex flex-row justify-end mb-5"},fe={key:1,class:"table-content"},he=e("span",null,null,-1),_e={key:2,class:"p-6 text-center table-content"},be=e("i",{class:"pi pi-eye-slash !text-7xl mb-3"},null,-1),ge=e("p",{class:"text-3xl text-gray-900"},"No data Found",-1),we=[be,ge],ye={class:"flex flex-row justify-center w-full"},Ve={class:"text-[18px] text-[#104772] text-center font-bold leading-6"},$e={class:"flex flex-col gap-2",enctype:"multipart/form-data"},Ce={class:"flex flex-row flex-nowrap justify-around gap-10"},je={class:"flex flex-col w-full max-w-lg mx-1"},Se=e("label",{for:"value",class:"!text-[15px] !text-[#104772]"},"Name",-1),Pe={class:"p-error",id:"text-error"},Fe={class:"flex flex-col w-full max-w-lg mx-1"},ke=e("label",{for:"value",class:"!text-[15px] !text-[#104772]"},"Gender",-1),De={class:"p-error",id:"text-error"},Ne={class:"flex flex-row flex-nowrap justify-around gap-10"},Ue={class:"flex flex-col w-full max-w-lg mx-1"},Ee=e("label",{for:"value",class:"!text-[15px] !text-[#104772]"},"Phone Number",-1),ze={class:"p-error",id:"text-error"},Me={class:"flex flex-col w-full max-w-lg mx-1"},Ae=e("label",{for:"value",class:"!text-[15px] !text-[#104772]"},"E-mail",-1),Ie={class:"p-error",id:"text-error"},Te={class:"flex flex-row flex-nowrap justify-around gap-10"},Be={class:"flex flex-col w-full max-w-lg mx-1"},Le=e("label",{for:"value",class:"!text-[15px] !text-[#104772]"},"Service",-1),Re={class:"p-error",id:"text-error"},Oe={class:"flex flex-col w-full max-w-lg mx-1"},Ge=e("label",{for:"value",class:"!text-[15px] !text-[#104772]"},"Country",-1),Ke={class:"p-error",id:"text-error"},He={class:"flex flex-row flex-nowrap justify-around gap-10"},We={class:"flex flex-col w-full max-w-lg mx-1"},qe=e("label",{for:"message.notes",class:"!text-[15px] !text-[#104772]"},"Notes",-1),Ye={class:"p-error",id:"text-error"},Je={key:0,class:"flex flex-col w-full max-w-lg mx-1"},Qe=e("label",{for:"value",class:"!text-[15px] !text-[#104772]"},"Assign To User",-1),Xe=e("span",null,null,-1),Ze={class:"p-error",id:"text-error"},et={class:"flex flex-row justify-center flex-nowrap w-full gap-10"},tt=e("div",{class:"flex flex-row justify-center w-full"},[e("p",{class:"text-[18px] text-[#104772] text-center font-bold leading-6"},"Delete Message")],-1),lt={class:"flex flex-col items-center"},at=e("p",{class:"text-[#D90303] text-[15px] font-extrabold font-sans mb-3.5"},"Are you sure to Delete the Message ?",-1),st={class:"text-[#5A6F7E] text-[15px] font-light font-sans"},ot={class:"flex flex-row justify-center flex-nowrap w-full gap-10"},nt=e("div",{class:"flex flex-row justify-center w-full"},[e("p",{class:"text-[18px] text-[#104772] text-center font-bold leading-6"},"Details Customer")],-1),rt={class:"px-[10%] flex flex-col gap-4"},it={class:"w-[100%] mx-auto"},dt={class:"grid grid-cols-2"},ut={class:"text-[#104772] text-[15px]"},ct=e("span",{class:"text-[#104772] font-semibold"},"Name : ",-1),pt={class:"text-[#104772] text-[15px]"},xt=e("span",{class:"text-[#104772] font-semibold"},"Phone : ",-1),mt={class:"grid grid-cols-2"},vt={class:"text-[#104772] text-[15px]"},ft=e("span",{class:"text-[#104772] font-semibold"},"Gender : ",-1),ht={class:"text-[#104772] text-[15px]"},_t=e("span",{class:"text-[#104772] font-semibold"},"E-Mail : ",-1),bt={class:"grid grid-cols-2"},gt={class:"text-[#104772] text-[15px]"},wt=e("span",{class:"text-[#104772] font-semibold"},"Service : ",-1),yt={class:"text-[#104772] text-[15px]"},Vt=e("span",{class:"text-[#104772] font-semibold"},"Notes : ",-1),$t={class:"flex flex-row justify-center flex-nowrap w-full gap-10"},Ct=e("div",{class:"flex flex-row justify-center w-full"},[e("p",{class:"text-[18px] text-[#104772] text-center font-bold leading-6"}," Send Email ")],-1),jt={class:"flex flex-col gap-2",enctype:"multipart/form-data"},St={class:"flex flex-row flex-nowrap justify-around gap-10"},Pt={class:"flex flex-col w-full max-w-lg mx-1"},Ft=e("label",{for:"value",class:"!text-[15px] !text-[#104772]"},"Name",-1),kt={class:"p-error",id:"text-error"},Dt={class:"flex flex-col w-full max-w-lg mx-1"},Nt=e("label",{for:"value",class:"!text-[15px] !text-[#104772]"},"E-mail",-1),Ut={class:"p-error",id:"text-error"},Et={class:"flex flex-row flex-nowrap justify-around gap-10"},zt={class:"flex flex-col w-full max-w-lg mx-1"},Mt=e("label",{for:"value",class:"!text-[15px] !text-[#104772]"},"Subject",-1),At={class:"p-error",id:"text-error"},It={class:"flex flex-col w-full max-w-lg mx-1"},Tt=e("label",{for:"value",class:"!text-[15px] !text-[#104772]"},"Message",-1),Bt={class:"p-error",id:"text-error"},Lt={class:"flex flex-row justify-center flex-nowrap w-full gap-10"},Ht={__name:"Index",props:{data:Object,users:Array},setup(i){const x=i;console.log(x.data);const D=p([{name:"View",code:"view"},{name:"Edit",code:"edit"},{name:"Delete",code:"delete"},{name:"Invoices",code:"invoices"},{name:"Send Email",code:"send-email"}]);p([{name:"Active",code:"active"},{name:"InActive",code:"inactive"}]);const n=p({id:0,name:null,phone_number:null,email:null,gender:null,country:null,service:null,notes:null,assigned_user_id:null,_method:"POST"}),o=p({name:null,address:null,phone_number:null,email:null,iban:null,swift_code:null}),u=p({name:null,email:null,subject:null,message:null,_method:"POST"}),R=p(parseInt(x.data.current_page)-1);function O(r,t){return $.get(t+"?page="+(r.page+1)),!0}const _=p("create"),j=p(!1),S=p(null),P=p(!1),A=p(null);function G(){S.value=null,j.value=!1}function K(){A.value=null,P.value=!1}function H(){h.delete("contact-messages/"+S.value.id).then(r=>{S.value=null,j.value=!1,$.reload()}).catch(r=>{})}function W(){h.post("contact-messages/"+u.value.id+"/send-email",u.value).then(r=>{A.value=null,P.value=!1,$.reload()}).catch(r=>{for(const t in r.response.data.errors)o.value[t]=r.response.data.errors[t].join(`
`)})}const N=p(!1),b=p(null),g=p(!1);function q(r,t){r.value==="edit"?(_.value="edit",h.get(`/contact-messages/${t}`).then(l=>{n.value=l.data.data,n.value._method="PUT",g.value=!0})):r.value==="delete"?h.get(`/contact-messages/${t}`).then(l=>{S.value=l.data.data,j.value=!0}):r.value==="view"?h.get(`/contact-messages/${t}`).then(l=>{b.value=l.data.data,N.value=!0}):r.value==="send-email"?h.get(`/contact-messages/${t}`).then(l=>{u.value=l.data.data,P.value=!0}):r.value==="invoices"&&$.get(`${t}/invoices`)}function Y(r){g.value=!1,o.value={},E(),_.value="create"}function J(){console.log(n.value);let r=new FormData;for(const t in n.value)n.value[t]&&r.append(t,n.value[t]);o.value={},_.value==="edit"?(console.log(r),h.post(`/contact-messages/${n.value.id}`,r).then(t=>{$.reload(),g.value=!1,E(),_.value="create"}).catch(t=>{for(const l in t.response.data.errors)o.value[l]=t.response.data.errors[l].join(`
`)})):h.post("/contact-messages",r).then(t=>{$.reload(),g.value=!1,E(),_.value="create"}).catch(t=>{for(const l in t.response.data.errors)o.value[l]=t.response.data.errors[l].join(`
`)})}function E(){n.value={id:0,name:null,address:null,phone_number:null,email:null,iban:null,swift_code:null,commercial_register_id:null,status:null,notes:null,assigned_user_id:null,_method:"POST"}}return(r,t)=>(C(),ae(Q,{title:"Clients"},{header:c(()=>[ce]),default:c(()=>[e("div",pe,[e("div",xe,[e("div",me,[r.$page.props.auth.user.is_admin?(C(),k("div",ve,[a(s(f),{icon:"pi pi-plus-circle",severity:"secondary",raised:"",label:"Add New Message",class:"btn btn-active btn-neutral normal-case !bg-gradient-to-r !from-[#082439] !to-[#104772]",onClick:t[0]||(t[0]=l=>g.value=!0)})])):L("",!0),i.data.data.length?(C(),k("div",fe,[a(s(Z),{value:i.data.data,tableStyle:"min-width: 50rem"},{default:c(()=>[a(s(y),{field:"id",header:"#"}),a(s(y),{field:"name",header:"Name"}),a(s(y),{field:"email",header:"Email"}),a(s(y),{field:"phone_number",header:"Phone Number"}),a(s(y),{field:"gender",header:"Gender"}),a(s(y),{field:"service",header:"Service"}),a(s(y),{field:""},{body:c(l=>[a(s(B),{options:D.value,optionLabel:"name",optionValue:"code",onChange:w=>q(w,l.data.id),placeholder:"Action",pt:{root:"!bg-[#F6F7F7] mx-auto",input:"!pr-1 !py-1 !text-[#104772] !border-[#656665]",trigger:({props:w,state:F,context:z})=>({class:F.focused?"pi pi-angle-down !text-[#104772] p-0":"p-0 pi pi-angle-right !text-[#104772]"}),wrapper:{class:"!max-h-[200px] !h-full !bg-[#F6F7F7] rounded-lg"},virtualScroller:{class:"!bg-transparent"},item:{class:"!text-[#5A6F7E] !text-[12px] !bg-transparent !pr-2 !py-2 !font-bold"}}},{dropdownicon:c(()=>[he]),_:2},1032,["options","onChange","pt"])]),_:1})]),_:1},8,["value"]),a(s(ee),{rows:i.data.per_page,totalRecords:i.data.total,first:R.value*i.data.per_page,template:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink",onPage:t[1]||(t[1]=l=>O(l,i.data.path))},null,8,["rows","totalRecords","first"])])):(C(),k("div",_e,we))])])]),a(s(U),{visible:g.value,"onUpdate:visible":t[11]||(t[11]=l=>g.value=l),modal:"",closable:!1,style:{width:"50vw"},pt:{header:{class:"!pb-0"}}},{header:c(()=>[e("div",ye,[e("p",Ve,d(_.value!=="create"?"Edit":"Add New")+" Message",1)])]),default:c(()=>[e("form",$e,[e("div",Ce,[e("div",je,[Se,a(s(v),{id:"value",modelValue:n.value.name,"onUpdate:modelValue":t[2]||(t[2]=l=>n.value.name=l),type:"text",class:m(["w-full !text-[12px] !h-[50%] !bg-neutral-100 !text-neutral-600",{"p-invalid":o.value.name}]),placeholder:"Company Name","aria-describedby":"text-error"},null,8,["modelValue","class"]),e("small",Pe,d(o.value.name||" "),1)]),e("div",Fe,[ke,a(s(v),{id:"value",modelValue:n.value.gender,"onUpdate:modelValue":t[3]||(t[3]=l=>n.value.gender=l),type:"text",class:m(["w-full !text-[12px] !h-[50%] !bg-neutral-100 !text-neutral-600",{"p-invalid":o.value.gender}]),placeholder:"Gender","aria-describedby":"text-error"},null,8,["modelValue","class"]),e("small",De,d(o.value.gender||" "),1)])]),e("div",Ne,[e("div",Ue,[Ee,a(s(v),{id:"value",modelValue:n.value.phone_number,"onUpdate:modelValue":t[4]||(t[4]=l=>n.value.phone_number=l),type:"text",class:m(["w-full !text-[12px] !h-[50%] !bg-neutral-100 !text-neutral-600",{"p-invalid":o.value.phone_number}]),placeholder:"Phone Number","aria-describedby":"text-error"},null,8,["modelValue","class"]),e("small",ze,d(o.value.phone_number||" "),1)]),e("div",Me,[Ae,a(s(v),{id:"value",modelValue:n.value.email,"onUpdate:modelValue":t[5]||(t[5]=l=>n.value.email=l),type:"text",class:m(["w-full !text-[12px] !h-[50%] !bg-neutral-100 !text-neutral-600",{"p-invalid":o.value.email}]),placeholder:"E-mail","aria-describedby":"text-error"},null,8,["modelValue","class"]),e("small",Ie,d(o.value.email||" "),1)])]),e("div",Te,[e("div",Be,[Le,a(s(v),{id:"value",modelValue:n.value.service,"onUpdate:modelValue":t[6]||(t[6]=l=>n.value.service=l),type:"text",class:m(["w-full !text-[12px] !h-[50%] !bg-neutral-100 !text-neutral-600",{"p-invalid":o.value.service}]),placeholder:"Service","aria-describedby":"text-error"},null,8,["modelValue","class"]),e("small",Re,d(o.value.service||" "),1)]),e("div",Oe,[Ge,a(s(v),{id:"value",modelValue:n.value.country,"onUpdate:modelValue":t[7]||(t[7]=l=>n.value.country=l),type:"text",class:m(["w-full !text-[12px] !h-[50%] !bg-neutral-100 !text-neutral-600",{"p-invalid":o.value.country}]),placeholder:"Country","aria-describedby":"text-error"},null,8,["modelValue","class"]),e("small",Ke,d(o.value.country||" "),1)])]),e("div",He,[e("div",We,[qe,a(s(M),{id:"message.notes",modelValue:n.value.notes,"onUpdate:modelValue":t[8]||(t[8]=l=>n.value.notes=l),type:"text",class:m(["w-full !text-[12px] !h-[50%] !bg-neutral-100 !text-neutral-600 !resize-none",{"p-invalid":o.value.notes}]),placeholder:"Notes","aria-describedby":"text-error"},null,8,["modelValue","class"]),e("small",Ye,d(o.value.notes||" "),1)]),r.$page.props.auth.user.is_admin?(C(),k("div",Je,[Qe,a(s(B),{modelValue:n.value.assigned_user_id,"onUpdate:modelValue":t[9]||(t[9]=l=>n.value.assigned_user_id=l),options:i.users,"option-value":"id",optionLabel:"name",class:m([{"p-invalid":o.value.assigned_user_id},"w-full md:w-14rem !text-[12px] !h-[50%] !bg-neutral-100 !text-neutral-600"]),placeholder:"Choose User",pt:{input:{class:"!text-[12px]"},trigger:({props:l,state:w,context:F})=>({class:w.focused?"pi pi-chevron-down !text-[#104772]":"pi pi-chevron-right !text-[#104772]"})}},{dropdownicon:c(()=>[Xe]),_:1},8,["modelValue","options","class","pt"]),e("small",Ze,d(o.value.status||" "),1)])):L("",!0)]),e("div",et,[a(s(f),{label:"Cancel",class:"!w-[20%] !bg-[#F0C0C0] !text-[#D90303] !border-none",onClick:Y}),a(s(f),{type:"button",class:"!w-[20%] !bg-gradient-to-r !from-[#082439] !to-[#104772] !border-none",label:_.value!=="create"?"Save":"Add",onClick:t[10]||(t[10]=l=>J())},null,8,["label"])])])]),_:1},8,["visible"]),a(s(U),{visible:j.value,"onUpdate:visible":t[13]||(t[13]=l=>j.value=l),modal:"",closable:!1,header:"Delete Message",style:{width:"50vw"}},{header:c(()=>[tt]),footer:c(()=>[e("div",ot,[a(s(f),{label:"Cancel",class:"!w-[20%] !bg-[#F0C0C0] !text-[#D90303] !border-none",onClick:G}),a(s(f),{label:"Delete",class:"!w-[20%] !bg-[#D90303] !text-[#FFFFFF] !border-none",onClick:t[12]||(t[12]=l=>H())})])]),default:c(()=>{var l;return[e("div",lt,[at,e("p",st,d((l=S.value)==null?void 0:l.name),1)])]}),_:1},8,["visible"]),a(s(U),{visible:N.value,"onUpdate:visible":t[15]||(t[15]=l=>N.value=l),modal:"",closable:!1,style:{width:"50vw"},pt:{}},{header:c(()=>[nt]),footer:c(()=>[e("div",$t,[a(s(f),{type:"button",class:"!w-[20%] !bg-gradient-to-r !from-[#082439] !to-[#104772] !border-none",label:"Done",onClick:t[14]||(t[14]=l=>N.value=!1)})])]),default:c(()=>{var l,w,F,z,I,T;return[e("div",rt,[e("div",it,[e("div",dt,[e("p",ut,[ct,V(d((l=b.value)==null?void 0:l.name),1)]),e("p",pt,[xt,V(d((w=b.value)==null?void 0:w.phone_number),1)])]),e("div",mt,[e("p",vt,[ft,V(d((F=b.value)==null?void 0:F.gender),1)]),e("p",ht,[_t,V(d((z=b.value)==null?void 0:z.email),1)])]),e("div",bt,[e("p",gt,[wt,V(d((I=b.value)==null?void 0:I.service),1)]),e("p",yt,[Vt,V(d((T=b.value)==null?void 0:T.notes),1)])])])])]}),_:1},8,["visible"]),a(s(U),{visible:P.value,"onUpdate:visible":t[21]||(t[21]=l=>P.value=l),modal:"",closable:!1,style:{width:"50vw"},pt:{header:{class:"!pb-0"}}},{header:c(()=>[Ct]),default:c(()=>[e("form",jt,[e("div",St,[e("div",Pt,[Ft,a(s(v),{id:"value",modelValue:u.value.name,"onUpdate:modelValue":t[16]||(t[16]=l=>u.value.name=l),type:"text",class:m(["w-full !text-[12px] !h-[50%] !bg-neutral-100 !text-neutral-600",{"p-invalid":o.value.name}]),placeholder:"Company Name","aria-describedby":"text-error"},null,8,["modelValue","class"]),e("small",kt,d(o.value.name||" "),1)]),e("div",Dt,[Nt,a(s(v),{id:"value",modelValue:u.value.email,"onUpdate:modelValue":t[17]||(t[17]=l=>u.value.email=l),type:"text",class:m(["w-full !text-[12px] !h-[50%] !bg-neutral-100 !text-neutral-600",{"p-invalid":o.value.email}]),placeholder:"E-mail","aria-describedby":"text-error"},null,8,["modelValue","class"]),e("small",Ut,d(o.value.email||" "),1)])]),e("div",Et,[e("div",zt,[Mt,a(s(v),{id:"value",modelValue:u.value.subject,"onUpdate:modelValue":t[18]||(t[18]=l=>u.value.subject=l),type:"text",class:m(["w-full !text-[12px] !h-[50%] !bg-neutral-100 !text-neutral-600",{"p-invalid":o.value.subject}]),placeholder:"Subject","aria-describedby":"text-error"},null,8,["modelValue","class"]),e("small",At,d(o.value.subject||" "),1)]),e("div",It,[Tt,a(s(M),{id:"value",modelValue:u.value.message,"onUpdate:modelValue":t[19]||(t[19]=l=>u.value.message=l),type:"text",class:m(["w-full !text-[12px] !h-[50%] !bg-neutral-100 !text-neutral-600",{"p-invalid":o.value.message}]),placeholder:"Message Body","aria-describedby":"text-error"},null,8,["modelValue","class"]),e("small",Bt,d(o.value.message||" "),1)])]),e("div",Lt,[a(s(f),{label:"Cancel",class:"!w-[20%] !bg-[#F0C0C0] !text-[#D90303] !border-none",onClick:K}),a(s(f),{type:"button",class:"!w-[20%] !bg-gradient-to-r !from-[#082439] !to-[#104772] !border-none",label:"Send",onClick:t[20]||(t[20]=l=>W())})])])]),_:1},8,["visible"])]),_:1}))}};export{Ht as default};
