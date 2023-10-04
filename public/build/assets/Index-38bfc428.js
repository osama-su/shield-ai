import{_ as q}from"./AppLayout-cf33637f.js";import{s as _,a as g,b as k,c as z,d as G,e as N}from"./column.esm-71abffec.js";import{d,c as H,w as n,o as V,a as e,e as P,b as a,u as s,f as J,n as h,t as u,g as A,O as C,q as f}from"./app-cb0f3ea1.js";import{s as j}from"./dialog.esm-57450e08.js";const Q=e("h2",{class:"font-bold"}," Contacts ",-1),W={class:"py-2"},X={class:"max-w-10xl mx-auto sm:px-6 lg:px-8"},Y={class:"card p-9"},Z={key:0,class:"flex flex-row justify-end mb-5"},ee={key:1,class:"table-content"},te=e("span",null,null,-1),le={key:2,class:"p-6 text-center table-content"},ae=e("i",{class:"pi pi-eye-slash !text-7xl mb-3"},null,-1),se=e("p",{class:"text-3xl text-gray-900"},"No data Found",-1),oe=[ae,se],ne={class:"flex flex-row justify-center w-full"},ie={class:"text-[18px] text-[#104772] text-center font-bold leading-6"},de={class:"flex flex-col gap-2",enctype:"multipart/form-data"},re={class:"flex flex-row flex-nowrap justify-around gap-10"},ue={class:"flex flex-col w-full max-w-lg mx-1"},ce=e("label",{for:"value",class:"!text-[15px] !text-[#104772]"},"Name",-1),pe={class:"p-error",id:"text-error"},xe={class:"flex flex-col w-full max-w-lg mx-1"},me=e("label",{for:"value",class:"!text-[15px] !text-[#104772]"},"Is Admin",-1),fe=e("span",null,null,-1),ve={class:"p-error",id:"text-error"},_e={class:"flex flex-row flex-nowrap justify-around gap-10"},ge={class:"flex flex-col w-full max-w-lg mx-1"},he=e("label",{for:"value",class:"!text-[15px] !text-[#104772]"},"E-mail",-1),be={class:"p-error",id:"text-error"},we={class:"flex flex-col w-full max-w-lg mx-1"},ye=e("label",{for:"value",class:"!text-[15px] !text-[#104772]"},"Status",-1),Ce=e("span",null,null,-1),Fe={class:"p-error",id:"text-error"},Ve={class:"flex flex-row justify-center flex-nowrap w-full gap-10"},Ae=e("div",{class:"flex flex-row justify-center w-full"},[e("p",{class:"text-[18px] text-[#104772] text-center font-bold leading-6"},"Delete Message")],-1),De={class:"flex flex-col items-center"},$e=e("p",{class:"text-[#D90303] text-[15px] font-extrabold font-sans mb-3.5"},"Are you sure to Delete the Message ?",-1),ke={class:"text-[#5A6F7E] text-[15px] font-light font-sans"},Pe={class:"flex flex-row justify-center flex-nowrap w-full gap-10"},je=e("div",{class:"flex flex-row justify-center w-full"},[e("p",{class:"text-[18px] text-[#104772] text-center font-bold leading-6"},"Details User")],-1),Ue={class:"px-[10%] flex flex-col gap-4"},Ne={class:"w-[100%] mx-auto"},Se={class:"grid grid-cols-2"},Ee={class:"text-[#104772] text-[15px]"},Le=e("span",{class:"text-[#104772] font-semibold"},"Name : ",-1),Me={class:"text-[#104772] text-[15px]"},Be=e("span",{class:"text-[#104772] font-semibold"},"Is Admin : ",-1),Oe={class:"grid grid-cols-2"},Ie={class:"text-[#104772] text-[15px]"},Te=e("span",{class:"text-[#104772] font-semibold"},"Gender : ",-1),Ke={class:"text-[#104772] text-[15px]"},Re=e("span",{class:"text-[#104772] font-semibold"},"E-Mail : ",-1),qe={class:"flex flex-row justify-center flex-nowrap w-full gap-10"},Qe={__name:"Index",props:{data:Object,users:Array},setup(p){const U=p;console.log(U.data);const S=d([{name:"View",code:"view"},{name:"Edit",code:"edit"},{name:"Delete",code:"delete"}]);d([{name:"Active",code:"active"},{name:"Pending",code:"pending"}]);const i=d({id:0,name:null,is_admin:null,status:null,_method:"POST"}),r=d({name:null,address:null,phone_number:null,email:null,iban:null,swift_code:null}),E=d({name:null,email:null,subject:null,message:null,_method:"POST"}),L=d(parseInt(U.data.current_page)-1);function M(o,l){return C.get(l+"?page="+(o.page+1)),!0}const x=d("create"),b=d(!1),w=d(null),B=d(!1);d(null);function O(){w.value=null,b.value=!1}function I(){f.delete("contact-messages/"+w.value.id).then(o=>{w.value=null,b.value=!1,C.reload()}).catch(o=>{})}const F=d(!1),y=d(null),m=d(!1);function T(o,l){o.value==="edit"?(x.value="edit",f.get(`/users/${l}`).then(t=>{i.value=t.data.data,i.value._method="PUT",m.value=!0})):o.value==="delete"?f.get(`/users/${l}`).then(t=>{w.value=t.data.data,b.value=!0}):o.value==="view"?f.get(`/users/${l}`).then(t=>{y.value=t.data.data,F.value=!0}):o.value==="send-email"?f.get(`/users/${l}`).then(t=>{E.value=t.data.data,B.value=!0}):o.value==="invoices"&&C.get(`${l}/invoices`)}function K(o){m.value=!1,r.value={},D(),x.value="create"}function R(){console.log(i.value);let o=new FormData;for(const l in i.value)i.value[l]&&o.append(l,i.value[l]);r.value={},x.value==="edit"?(console.log(o),f.post(`/users/${i.value.id}`,o).then(l=>{C.reload(),m.value=!1,D(),x.value="create"}).catch(l=>{for(const t in l.response.data.errors)r.value[t]=l.response.data.errors[t].join(`
`)})):f.post("/users",o).then(l=>{C.reload(),m.value=!1,D(),x.value="create"}).catch(l=>{for(const t in l.response.data.errors)r.value[t]=l.response.data.errors[t].join(`
`)})}function D(){i.value={id:0,name:null,address:null,phone_number:null,email:null,iban:null,swift_code:null,commercial_register_id:null,status:null,notes:null,assigned_user_id:null,_method:"POST"}}return(o,l)=>(V(),H(q,{title:"Clients"},{header:n(()=>[Q]),default:n(()=>[e("div",W,[e("div",X,[e("div",Y,[o.$page.props.auth.user.is_admin?(V(),P("div",Z,[a(s(_),{icon:"pi pi-plus-circle",severity:"secondary",raised:"",label:"Add New Message",class:"btn btn-active btn-neutral normal-case !bg-gradient-to-r !from-[#082439] !to-[#104772]",onClick:l[0]||(l[0]=t=>m.value=!0)})])):J("",!0),p.data.data.length?(V(),P("div",ee,[a(s(z),{value:p.data.data,tableStyle:"min-width: 50rem"},{default:n(()=>[a(s(g),{field:"id",header:"#"}),a(s(g),{field:"name",header:"Name"}),a(s(g),{field:"email",header:"Email"}),a(s(g),{field:"is_admin",header:"Is Admin"},{body:n(t=>[e("p",{class:h(t.data.is_admin===1?"text-[#46CB00]":"text-[#FF0000]")},u(t.data.is_admin===1?"Admin":"User"),3)]),_:1}),a(s(g),{field:"status",header:"Status"},{body:n(t=>[e("p",{class:h(t.data.status==="active"?"text-[#46CB00]":"text-[#FF0000]")},u(t.data.status==="active"?"Active":"Pending"),3)]),_:1}),a(s(g),{field:""},{body:n(t=>[a(s(k),{options:S.value,optionLabel:"name",optionValue:"code",onChange:c=>T(c,t.data.id),placeholder:"Action",pt:{root:"!bg-[#F6F7F7] mx-auto",input:"!pr-1 !py-1 !text-[#104772] !border-[#656665]",trigger:({props:c,state:v,context:$})=>({class:v.focused?"pi pi-angle-down !text-[#104772] p-0":"p-0 pi pi-angle-right !text-[#104772]"}),wrapper:{class:"!max-h-[200px] !h-full !bg-[#F6F7F7] rounded-lg"},virtualScroller:{class:"!bg-transparent"},item:{class:"!text-[#5A6F7E] !text-[12px] !bg-transparent !pr-2 !py-2 !font-bold"}}},{dropdownicon:n(()=>[te]),_:2},1032,["options","onChange","pt"])]),_:1})]),_:1},8,["value"]),a(s(G),{rows:p.data.per_page,totalRecords:p.data.total,first:L.value*p.data.per_page,template:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink",onPage:l[1]||(l[1]=t=>M(t,p.data.path))},null,8,["rows","totalRecords","first"])])):(V(),P("div",le,oe))])])]),a(s(j),{visible:m.value,"onUpdate:visible":l[7]||(l[7]=t=>m.value=t),modal:"",closable:!1,style:{width:"50vw"},pt:{header:{class:"!pb-0"}}},{header:n(()=>[e("div",ne,[e("p",ie,u(x.value!=="create"?"Edit":"Add New")+" User",1)])]),default:n(()=>[e("form",de,[e("div",re,[e("div",ue,[ce,a(s(N),{id:"value",modelValue:i.value.name,"onUpdate:modelValue":l[2]||(l[2]=t=>i.value.name=t),type:"text",class:h(["w-full !text-[12px] !h-[50%] !bg-neutral-100 !text-neutral-600",{"p-invalid":r.value.name}]),placeholder:"Company Name","aria-describedby":"text-error"},null,8,["modelValue","class"]),e("small",pe,u(r.value.name||" "),1)]),e("div",xe,[me,a(s(k),{modelValue:i.value.is_admin,"onUpdate:modelValue":l[3]||(l[3]=t=>i.value.is_admin=t),options:[{name:"Admin",code:1},{name:"User",code:0}],"option-value":"code",optionLabel:"name",class:h([{"p-invalid":r.value.is_admin},"w-full md:w-14rem !text-[12px] !h-[50%] !bg-neutral-100 !text-neutral-600"]),placeholder:"Choose Admin",pt:{input:{class:"!text-[12px]"},trigger:({props:t,state:c,context:v})=>({class:c.focused?"pi pi-chevron-down !text-[#104772]":"pi pi-chevron-right !text-[#104772]"})}},{dropdownicon:n(()=>[fe]),_:1},8,["modelValue","class","pt"]),e("small",ve,u(r.value.is_admin||" "),1)])]),e("div",_e,[e("div",ge,[he,a(s(N),{id:"value",modelValue:i.value.email,"onUpdate:modelValue":l[4]||(l[4]=t=>i.value.email=t),type:"text",class:h(["w-full !text-[12px] !h-[50%] !bg-neutral-100 !text-neutral-600",{"p-invalid":r.value.email}]),placeholder:"E-mail","aria-describedby":"text-error"},null,8,["modelValue","class"]),e("small",be,u(r.value.email||" "),1)]),e("div",we,[ye,a(s(k),{modelValue:i.value.status,"onUpdate:modelValue":l[5]||(l[5]=t=>i.value.status=t),options:[{name:"Active",code:"active"},{name:"Pending",code:"pending"}],"option-value":"code",optionLabel:"name",class:h([{"p-invalid":r.value.status},"w-full md:w-14rem !text-[12px] !h-[50%] !bg-neutral-100 !text-neutral-600"]),placeholder:"Choose Status",pt:{input:{class:"!text-[12px]"},trigger:({props:t,state:c,context:v})=>({class:c.focused?"pi pi-chevron-down !text-[#104772]":"pi pi-chevron-right !text-[#104772]"})}},{dropdownicon:n(()=>[Ce]),_:1},8,["modelValue","class","pt"]),e("small",Fe,u(r.value.status||" "),1)])]),e("div",Ve,[a(s(_),{label:"Cancel",class:"!w-[20%] !bg-[#F0C0C0] !text-[#D90303] !border-none",onClick:K}),a(s(_),{type:"button",class:"!w-[20%] !bg-gradient-to-r !from-[#082439] !to-[#104772] !border-none",label:x.value!=="create"?"Save":"Add",onClick:l[6]||(l[6]=t=>R())},null,8,["label"])])])]),_:1},8,["visible"]),a(s(j),{visible:b.value,"onUpdate:visible":l[9]||(l[9]=t=>b.value=t),modal:"",closable:!1,header:"Delete Message",style:{width:"50vw"}},{header:n(()=>[Ae]),footer:n(()=>[e("div",Pe,[a(s(_),{label:"Cancel",class:"!w-[20%] !bg-[#F0C0C0] !text-[#D90303] !border-none",onClick:O}),a(s(_),{label:"Delete",class:"!w-[20%] !bg-[#D90303] !text-[#FFFFFF] !border-none",onClick:l[8]||(l[8]=t=>I())})])]),default:n(()=>{var t;return[e("div",De,[$e,e("p",ke,u((t=w.value)==null?void 0:t.name),1)])]}),_:1},8,["visible"]),a(s(j),{visible:F.value,"onUpdate:visible":l[11]||(l[11]=t=>F.value=t),modal:"",closable:!1,style:{width:"50vw"},pt:{}},{header:n(()=>[je]),footer:n(()=>[e("div",qe,[a(s(_),{type:"button",class:"!w-[20%] !bg-gradient-to-r !from-[#082439] !to-[#104772] !border-none",label:"Done",onClick:l[10]||(l[10]=t=>F.value=!1)})])]),default:n(()=>{var t,c,v,$;return[e("div",Ue,[e("div",Ne,[e("div",Se,[e("p",Ee,[Le,A(u((t=y.value)==null?void 0:t.name),1)]),e("p",Me,[Be,A(u(((c=y.value)==null?void 0:c.is_admin)===1?"Admin":"User"),1)])]),e("div",Oe,[e("p",Ie,[Te,A(u((v=y.value)==null?void 0:v.status),1)]),e("p",Ke,[Re,A(u(($=y.value)==null?void 0:$.email),1)])])])])]}),_:1},8,["visible"])]),_:1}))}};export{Qe as default};
