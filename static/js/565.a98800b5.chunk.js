"use strict";(self.webpackChunknvision_TMS=self.webpackChunknvision_TMS||[]).push([[565],{565:(e,a,l)=>{l.r(a),l.d(a,{default:()=>c});var o=l(72791),t=l(95048),i=l(33646),n=l(47698),s=l(16871),r=l(14692),d=l(80184);const c=function(){let e=(0,t.I0)();const a=(0,s.s0)();return(0,o.useEffect)((()=>{var l=window.location.search.replace(/\+/g,"%2B");const o=new URLSearchParams(l);if(o.has("Token")){var t=o.get("Token");t=t.replace(/%2B/g,"+"),localStorage.setItem("token",t);(async()=>{try{let{data:l}=await(0,n.v8)(),o={id:null===l||void 0===l?void 0:l.userId,firstName:null===l||void 0===l?void 0:l.firstName,lastName:null===l||void 0===l?void 0:l.lastName,email:null===l||void 0===l?void 0:l.email,userType:null===l||void 0===l?void 0:l.userType,token:t,profileImage:null===l||void 0===l?void 0:l.profileImage,selectedCompany:null===l||void 0===l?void 0:l.selectedCompany,twoFactorEnabled:!1};e((0,i.wG)({data:l})),e((0,i.RQ)({data:o})),localStorage.setItem("userInfo",JSON.stringify(o)),a("/",{replace:!0})}catch(l){a("/",{replace:!0})}})()}}),[]),(0,d.jsx)(r.Z,{size:"medium",style:{height:20}})}}}]);
//# sourceMappingURL=565.a98800b5.chunk.js.map