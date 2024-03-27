import{u as k}from"./chunks/useUser.TmtrCuSZ.js";import{o as n,c as i,a as e,t as p,d as o,A as m,B as x,C as f,D as y,v as h,_ as D}from"./chunks/framework.5Rz-S7bM.js";import"./chunks/chunk-LDFD35JM.MuarxFtH.js";const L={class:"flex flex-col gap-4 p-4"},P=e("div",{class:"text-xl"},"Profile",-1),B={class:"text-sm"},C={__name:"AuthProfile",setup(c){const{user:s}=k();return(b,g)=>(n(),i("div",L,[P,e("pre",B,p(o(s)),1)]))}},A=e("div",{class:"text-2xl"},"Login to your account",-1),R=e("label",{class:"text-lg",for:"email"},"E-mail*:",-1),S=e("label",{class:"text-lg",for:"email"},"Password:",-1),U={key:1,class:"flex flex-col gap-2"},V={class:"font-mono text-xs"},N={class:"text-sm"},E={class:"flex"},I={__name:"AuthLogin",setup(c){const{userRead:s,user:b,userDB:g,email:d,password:l,authData:u,access_token:_,submitLogin:a,refreshToken:v,logoutUser:w,claimInvite:G}=k();return(J,t)=>{const $=C;return o(_)?(n(),i("div",U,[e("p",V,"."+p(o(_).split(".")[2]),1),e("pre",N,p(o(u)),1),e("div",E,[e("button",{class:"text-xl font-bold rounded-lg p-4 border-2 border-solid dark-border-light-300 border-dark-800 shadow-lg dark-bg-dark-200",type:"submit",onClick:t[4]||(t[4]=r=>o(v)())},"Refresh"),e("button",{class:"text-xl font-bold rounded-lg p-4 border-2 border-solid dark-border-light-300 border-dark-800 shadow-lg dark-bg-dark-200",type:"submit",onClick:t[5]||(t[5]=r=>o(w)())},"Log out")]),e("button",{class:"text-xl font-bold rounded-lg p-4 border-2 border-solid dark-border-light-300 border-dark-800 shadow-lg dark-bg-dark-200",type:"submit",onClick:t[6]||(t[6]=r=>o(s)())},"Read user"),h($)])):(n(),i("form",{key:0,class:"flex flex-col gap-4",onSubmit:t[3]||(t[3]=y((...r)=>o(a)&&o(a)(...r),["prevent"]))},[A,R,m(e("input",{class:"rounded-lg p-2 border-2 border-solid dark-border-light-300 border-dark-800 shadow-inner dark-bg-dark-200",id:"email",type:"text","onUpdate:modelValue":t[0]||(t[0]=r=>f(d)?d.value=r:null)},null,512),[[x,o(d)]]),S,m(e("input",{class:"rounded-lg p-4 border-2 border-solid dark-border-light-300 border-dark-800 shadow-inner dark-bg-dark-200",type:"password","onUpdate:modelValue":t[1]||(t[1]=r=>f(l)?l.value=r:null)},null,512),[[x,o(l)]]),e("button",{class:"text-xl font-bold rounded-lg p-4 border-2 border-solid dark-border-light-300 border-dark-800 shadow-lg dark-bg-dark-200",type:"submit",onClick:t[2]||(t[2]=(...r)=>o(a)&&o(a)(...r))},"Sign In")],32))}}},z=JSON.parse('{"title":"Login","description":"","frontmatter":{"title":"Login","desctiption":"Get in touch with community through contributions"},"headers":[],"relativePath":"auth/index.md","filePath":"auth/index.md"}'),M={name:"auth/index.md"};function T(c,s,b,g,d,l){const u=I;return n(),i("div",null,[h(u)])}const F=D(M,[["render",T]]);export{z as __pageData,F as default};