"use strict";(self.webpackChunknvision_TMS=self.webpackChunknvision_TMS||[]).push([[1088],{15610:(e,a,l)=>{l.d(a,{r:()=>c});var t,n,o=l(72791);function d(){return d=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var l=arguments[a];for(var t in l)Object.prototype.hasOwnProperty.call(l,t)&&(e[t]=l[t])}return e},d.apply(this,arguments)}function s(e,a){let{title:l,titleId:s,...c}=e;return o.createElement("svg",d({width:16,height:20,viewBox:"0 0 16 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:a,"aria-labelledby":s},c),l?o.createElement("title",{id:s},l):null,t||(t=o.createElement("path",{d:"M7.51246 19.7391C7.62113 19.9021 7.8041 20 8 20C8.1959 20 8.37887 19.9021 8.48754 19.7391C9.87422 17.6591 11.9167 15.0903 13.34 12.4778C14.478 10.3889 15.0312 8.60727 15.0312 7.03125C15.0312 3.15422 11.877 0 8 0C4.12297 0 0.96875 3.15422 0.96875 7.03125C0.96875 8.60727 1.52199 10.3889 2.66004 12.4778C4.08227 15.0883 6.12863 17.6634 7.51246 19.7391ZM8 1.17188C11.2309 1.17188 13.8594 3.80039 13.8594 7.03125C13.8594 8.40641 13.3529 10.0046 12.3109 11.9171C11.0841 14.1691 9.33336 16.4534 8 18.3738C6.66684 16.4537 4.91602 14.1692 3.6891 11.9171C2.64715 10.0046 2.14062 8.40641 2.14062 7.03125C2.14062 3.80039 4.76914 1.17188 8 1.17188Z",fill:"#0AA45A"})),n||(n=o.createElement("path",{d:"M8 10.5469C9.93852 10.5469 11.5156 8.96977 11.5156 7.03125C11.5156 5.09273 9.93852 3.51562 8 3.51562C6.06148 3.51562 4.48438 5.09273 4.48438 7.03125C4.48438 8.96977 6.06148 10.5469 8 10.5469ZM8 4.6875C9.29234 4.6875 10.3438 5.73891 10.3438 7.03125C10.3438 8.32359 9.29234 9.375 8 9.375C6.70766 9.375 5.65625 8.32359 5.65625 7.03125C5.65625 5.73891 6.70766 4.6875 8 4.6875Z",fill:"#0AA45A"})))}const c=o.forwardRef(s);l.p},81160:(e,a,l)=>{l.d(a,{Z:()=>o});var t=l(94433),n=(l(72791),l(80184));const o=e=>{let{title:a,children:l,labelClass:o=!1,textClass:d,childClassName:s}=e;return(0,n.jsxs)("div",{className:"field-card-container ".concat(d),children:[(0,n.jsx)(t.Z.Text,{className:"field-card-title ".concat(o),children:a}),(0,n.jsx)("div",{className:"content ".concat(s),children:l})]})}},96942:(e,a,l)=>{l.d(a,{Z:()=>u});var t=l(72791),n=l(95048),o=l(46413),d=l(5814),s=l(47698),c=l(88858),i=l(68825),r=l(80184);const u=e=>{let{placeholder:a=i.ZP.t("translation:default.fields.customerName.placeholder"),label:l=i.ZP.t("translation:default.fields.customerName.label"),rules:u=[],name:m,editMode:v,margin:p,readOnly:f,disabled:h,mode:y="",form:C,id:b="",setDetafuleValue:g=!1,callbackSetValue:Z=(()=>{})}=e;const[w,M]=(0,t.useState)([]),[N,x]=(0,t.useState)(!1),[S,T]=(0,t.useState)({}),{selectedCompany:V}=(0,n.v9)((e=>e.auth)),{user:{data:K}}=(0,n.v9)((e=>null===e||void 0===e?void 0:e.auth));(0,t.useEffect)((()=>{V&&V.companyId&&j(V.companyId),"CUST"===(null===K||void 0===K?void 0:K.userType)&&(T({value:null===V||void 0===V?void 0:V.companyId,label:null===V||void 0===V?void 0:V.companyName}),C&&C.setFieldValue("customerKey",null===V||void 0===V?void 0:V.companyId))}),[V,C]);const j=async e=>{try{x(!0);let a={},l=[],t={};if(a="CARR"===(null===K||void 0===K?void 0:K.userType)?{carrierKey:e}:{VendorKey:e},"CARR"===(null===K||void 0===K?void 0:K.userType)){const{data:e}=await(0,o.fe)(a);l=e,t=l.map((e=>({label:e.customerName,value:e.customerKey})))}else if("CUST"===(null===K||void 0===K?void 0:K.userType)){const{data:e}=await(0,s.E9)();l=e,t=l.map((e=>({label:e.companyName,value:e.companyId})))}else{const{data:e}=await(0,d.k)(a);l=e,t=l.map((e=>({label:e.customerName,value:e.customerKey})))}M(t),!0===g&&setTimeout((()=>{var e,a,l,n;C.setFieldValue("customerKey",null===(e=t)||void 0===e||null===(a=e[0])||void 0===a?void 0:a.value),Z(null===(l=t)||void 0===l||null===(n=l[0])||void 0===n?void 0:n.value)}),200),x(!1)}catch(a){console.log(a),M([]),x(!1)}};return(0,r.jsx)(c.Z,{loading:N,options:w,placeholder:a,label:l,rules:u,name:m,editMode:v,margin:p,readOnly:f,disabled:h,mode:y,defaultValue:null===S||void 0===S?void 0:S.label,id:b})}},58:(e,a,l)=>{l.d(a,{Z:()=>c});var t=l(72791),n=l(88858),o=l(99801),d=l(68825),s=l(80184);const c=e=>{let{placeholder:a=d.ZP.t("translation:default.fields.shipmentBranch.placeholder"),label:l=d.ZP.t("translation:default.fields.shipmentBranch.label"),rules:c=[],name:i,form:r={},customerKey:u,margin:m,editMode:v=!0,mode:p=""}=e;const[f,h]=(0,t.useState)([]),[y,C]=(0,t.useState)(!1);(0,t.useEffect)((()=>{u&&b()}),[u]);const b=async()=>{try{C(!0);const{data:e}=await(0,o.mQ)({customerKey:u});let a=e.map((e=>({label:e.branchDesc,value:e.branchKey})));h(a),C(!1)}catch(e){console.log(e),h([]),C(!1)}};return(0,s.jsx)(n.Z,{loading:y,options:f,placeholder:a,label:l,margin:m,rules:c,name:i,editMode:v,form:r,mode:p})}},72351:(e,a,l)=>{l.d(a,{Z:()=>c});var t=l(1413),n=l(72791);const o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]},name:"upload",theme:"outlined"};var d=l(1444),s=function(e,a){return n.createElement(d.Z,(0,t.Z)((0,t.Z)({},e),{},{ref:a,icon:o}))};s.displayName="UploadOutlined";const c=n.forwardRef(s)}}]);
//# sourceMappingURL=1088.683f718b.chunk.js.map