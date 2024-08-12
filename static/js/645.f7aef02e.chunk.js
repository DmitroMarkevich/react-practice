"use strict";(self.webpackChunkreact_practice=self.webpackChunkreact_practice||[]).push([[645],{645:(e,r,t)=>{t.r(r),t.d(r,{default:()=>w});var o=t(689),s=t(791),a=t(466),i=t(517);const n=i.ZP.h2`
  font-size: 1.5rem;
  color: var(--text-primary);
  margin-bottom: var(--spacing-medium);
`,c=i.ZP.p`
  font-style: italic;
  color: var(--text-secondary);
`,d=i.ZP.div`
  padding: 20px;
  background-color: #f9f9f9;
`,l=i.ZP.ul`
  list-style-type: circle;
  padding: 0;
`,m=i.ZP.li`
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #ddd;
`,u=i.ZP.h3`
  margin: 0;
  font-weight: 700;
  color: var(--text-primary);
`,p=i.ZP.p`
  text-align: justify;
  word-break: break-word;
  hyphens: auto;
  color: var(--text-secondary);
`;var v=t(184);const h=e=>{let{reviews:r}=e;return(0,v.jsx)(d,{children:(0,v.jsx)(l,{children:r.map((e=>{let{id:r,author:t,content:o}=e;return(0,v.jsxs)(m,{children:[(0,v.jsxs)(u,{children:["Author: ",t]}),(0,v.jsx)(p,{children:(s=o,s.replace(/<[^>]*>/g,""))})]},r);var s}))})})};var g=t(258),f=t(471);const w=()=>{const{movieId:e}=(0,o.UO)(),[r,t]=(0,s.useState)([]),[i,d]=(0,s.useState)(null),[l,m]=(0,s.useState)(!1);return(0,s.useEffect)((()=>{(async()=>{m(!0);try{const r=await(0,a.Jh)(Number(e));t(r.results)}catch(i){d("Failed to load cast information."),console.error(i)}finally{m(!1)}})()}),[e]),i?(0,v.jsx)(f.Z,{errorDetails:i}):(0,v.jsxs)("div",{children:[l&&(0,v.jsx)(g.Z,{}),(0,v.jsx)(n,{children:"Reviews"}),r.length>0?(0,v.jsx)(h,{reviews:r}):(0,v.jsx)(c,{children:"No reviews available"})]})}},466:(e,r,t)=>{t.d(r,{IQ:()=>c,TP:()=>i,XT:()=>n,Jh:()=>d,Hg:()=>a});const o=t(903).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"46524a805b39690e1dbf4f8ffae20232"},timeout:1e4}),s=async function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};try{return(await o.get(e,r)).data}catch(t){return t.response?Promise.reject(new Error(`HTTP error! status: ${t.response.status}`)):t.request?Promise.reject(new Error("No response received from the server.")):Promise.reject(new Error(t.message||"An error occurred while fetching data."))}},a=()=>s("/trending/movie/day"),i=e=>e?s(`/movie/${e}`):Promise.reject(new Error("Movie ID is required")),n=(e,r)=>e?s("/search/movie",{params:{query:e,page:r}}):Promise.reject(new Error("Movie name is required")),c=(e,r)=>e?s(`/movie/${e}/credits`,{params:{page:r}}):Promise.reject(new Error("Movie ID is required")),d=(e,r)=>e?s(`/movie/${e}/reviews`,{params:{page:r}}):Promise.reject(new Error("Movie ID is required"))}}]);
//# sourceMappingURL=645.f7aef02e.chunk.js.map