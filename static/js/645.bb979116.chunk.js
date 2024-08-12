"use strict";(self.webpackChunkreact_practice=self.webpackChunkreact_practice||[]).push([[645],{645:(e,r,t)=>{t.r(r),t.d(r,{default:()=>E});var o=t(689),i=t(791),s=t(466),a=t(517);const n=a.ZP.h2`
  font-size: 1.5rem;
  color: var(--text-primary);
  margin-bottom: var(--spacing-medium);
`,c=a.ZP.p`
  font-style: italic;
  color: var(--text-secondary);
`,d=a.ZP.div`
  padding: 20px;
  background-color: #f9f9f9;
`,l=a.ZP.ul`
  list-style-type: circle;
  padding: 0;
`,u=a.ZP.li`
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #ddd;
`,v=a.ZP.h3`
  margin: 0;
  font-weight: 700;
  color: var(--text-primary);
`,m=a.ZP.p`
  text-align: justify;
  word-break: break-word;
  hyphens: auto;
  color: var(--text-secondary);
`;var p=t(184);const h=e=>{let{reviews:r}=e;return(0,p.jsx)(d,{children:(0,p.jsx)(l,{children:r.map((e=>{let{id:r,author:t,content:o}=e;return(0,p.jsxs)(u,{children:[(0,p.jsxs)(v,{children:["Author: ",t]}),(0,p.jsx)(m,{children:(i=o,i.replace(/<[^>]*>/g,""))})]},r);var i}))})})};var P=t(258),_=t(471);const E=()=>{const{movieId:e}=(0,o.UO)(),[r,t]=(0,i.useState)([]),[a,d]=(0,i.useState)(null),[l,u]=(0,i.useState)(!1);return(0,i.useEffect)((()=>{(async()=>{u(!0);try{const r=await(0,s.Jh)(Number(e));t(r.results)}catch(a){d("Failed to load cast information."),console.error(a)}finally{u(!1)}})()}),[e]),a?(0,p.jsx)(_.Z,{errorDetails:a}):(0,p.jsxs)("div",{children:[l&&(0,p.jsx)(P.Z,{}),(0,p.jsx)(n,{children:"Reviews"}),r.length>0?(0,p.jsx)(h,{reviews:r}):(0,p.jsx)(c,{children:"No reviews available"})]})}},466:(e,r,t)=>{t.d(r,{IQ:()=>u,TP:()=>d,XT:()=>l,Jh:()=>v,Hg:()=>c});var o=t(903);const i={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_BASE_URL,s={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_KEY,a=o.Z.create({baseURL:i,params:{api_key:s},timeout:1e4}),n=async function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};try{return(await a.get(e,r)).data}catch(t){return t.response?Promise.reject(new Error(`HTTP error! status: ${t.response.status}`)):t.request?Promise.reject(new Error("No response received from the server.")):Promise.reject(new Error(t.message||"An error occurred while fetching data."))}},c=()=>n("/trending/movie/day"),d=e=>e?n(`/movie/${e}`):Promise.reject(new Error("Movie ID is required")),l=(e,r)=>e?n("/search/movie",{params:{query:e,page:r}}):Promise.reject(new Error("Movie name is required")),u=(e,r)=>e?n(`/movie/${e}/credits`,{params:{page:r}}):Promise.reject(new Error("Movie ID is required")),v=(e,r)=>e?n(`/movie/${e}/reviews`,{params:{page:r}}):Promise.reject(new Error("Movie ID is required"))}}]);
//# sourceMappingURL=645.bb979116.chunk.js.map