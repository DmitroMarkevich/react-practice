"use strict";(self.webpackChunkreact_practice=self.webpackChunkreact_practice||[]).push([[504],{504:(e,r,t)=>{t.r(r),t.d(r,{default:()=>S});var i=t(791),o=t(689),a=t(466),s=t(258),n=t(517);const c=n.ZP.div`
  padding: 20px;
  background-color: #f9f9f9;
`,d=n.ZP.ul`
  list-style-type: none;
  padding: 0;
`,l=n.ZP.li`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 15px;
`,m=n.ZP.img`
  border-radius: 50%;
  margin-right: 10px;
`,p=n.ZP.p`
  margin: 0;
  font-weight: 700;
  color: var(--text-primary);
`,u=n.ZP.p`
  margin: 0;
  color: #555;
`;var h=t(184);const v=e=>{let{casts:r}=e;return(0,h.jsx)(c,{children:(0,h.jsx)(d,{children:r.map((e=>{let{id:r,profile_path:t,name:i,character:o}=e;return(0,h.jsxs)(l,{children:[(0,h.jsx)(m,{src:`https://image.tmdb.org/t/p/w500${t}`,alt:`${i} photo`,width:"70"}),(0,h.jsxs)("div",{children:[(0,h.jsx)(p,{children:i}),(0,h.jsxs)(u,{children:["Character: ",o]})]})]},r)}))})})};var g=t(471);const P=n.ZP.h2`
  font-size: 1.5rem;
  color: var(--text-primary);
  margin-bottom: var(--spacing-medium);
`,_=n.ZP.p`
  font-style: italic;
  color: var(--text-secondary);
`;var E=t(396);const S=()=>{const{movieId:e}=(0,o.UO)(),[r,t]=(0,i.useState)([]),[n,c]=(0,i.useState)([]),[d,l]=(0,i.useState)(null),[m,p]=(0,i.useState)(!1),[u,S]=(0,i.useState)(1);(0,i.useEffect)((()=>{(async()=>{p(!0);try{const r=(await(0,a.IQ)(Number(e))).cast;t(r),c(r.slice(0,7))}catch(d){l("Failed to load cast information."),console.error(d)}finally{p(!1)}})()}),[e]),(0,i.useEffect)((()=>{const e=7*(u-1),t=e+7;c(r.slice(e,t))}),[u,r]);return d?(0,h.jsx)(g.Z,{errorDetails:d}):(0,h.jsxs)("div",{children:[m&&(0,h.jsx)(s.Z,{}),(0,h.jsx)(P,{children:"Cast Information"}),(0,h.jsx)(v,{casts:n}),r.length>0?(0,h.jsx)(E.Z,{current:u,pageSize:7,total:r.length,onChange:e=>{S(e)},showSizeChanger:!1}):(0,h.jsx)(_,{children:"No cast information available."})]})}},466:(e,r,t)=>{t.d(r,{IQ:()=>m,TP:()=>d,XT:()=>l,Jh:()=>p,Hg:()=>c});var i=t(903);const o={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_BASE_URL,a={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_KEY,s=i.Z.create({baseURL:o,params:{api_key:a},timeout:1e4}),n=async function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};try{return(await s.get(e,r)).data}catch(t){return t.response?Promise.reject(new Error(`HTTP error! status: ${t.response.status}`)):t.request?Promise.reject(new Error("No response received from the server.")):Promise.reject(new Error(t.message||"An error occurred while fetching data."))}},c=()=>n("/trending/movie/day"),d=e=>e?n(`/movie/${e}`):Promise.reject(new Error("Movie ID is required")),l=(e,r)=>e?n("/search/movie",{params:{query:e,page:r}}):Promise.reject(new Error("Movie name is required")),m=(e,r)=>e?n(`/movie/${e}/credits`,{params:{page:r}}):Promise.reject(new Error("Movie ID is required")),p=(e,r)=>e?n(`/movie/${e}/reviews`,{params:{page:r}}):Promise.reject(new Error("Movie ID is required"))}}]);
//# sourceMappingURL=504.e3207879.chunk.js.map