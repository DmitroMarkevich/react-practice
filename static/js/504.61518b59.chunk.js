"use strict";(self.webpackChunkreact_practice=self.webpackChunkreact_practice||[]).push([[504],{504:(e,r,t)=>{t.r(r),t.d(r,{default:()=>w});var a=t(791),s=t(689),i=t(466),o=t(258),n=t(517);const c=n.ZP.div`
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
`,h=n.ZP.p`
  margin: 0;
  color: #555;
`;var u=t(184);const g=e=>{let{casts:r}=e;return(0,u.jsx)(c,{children:(0,u.jsx)(d,{children:r.map((e=>{let{id:r,profile_path:t,name:a,character:s}=e;return(0,u.jsxs)(l,{children:[(0,u.jsx)(m,{src:`https://image.tmdb.org/t/p/w500${t}`,alt:`${a} photo`,width:"70"}),(0,u.jsxs)("div",{children:[(0,u.jsx)(p,{children:a}),(0,u.jsxs)(h,{children:["Character: ",s]})]})]},r)}))})})};var v=t(471);const f=n.ZP.h2`
  font-size: 1.5rem;
  color: var(--text-primary);
  margin-bottom: var(--spacing-medium);
`,x=n.ZP.p`
  font-style: italic;
  color: var(--text-secondary);
`;var j=t(396);const w=()=>{const{movieId:e}=(0,s.UO)(),[r,t]=(0,a.useState)([]),[n,c]=(0,a.useState)([]),[d,l]=(0,a.useState)(null),[m,p]=(0,a.useState)(!1),[h,w]=(0,a.useState)(1);(0,a.useEffect)((()=>{(async()=>{p(!0);try{const r=(await(0,i.IQ)(Number(e))).cast;t(r),c(r.slice(0,7))}catch(d){l("Failed to load cast information."),console.error(d)}finally{p(!1)}})()}),[e]),(0,a.useEffect)((()=>{const e=7*(h-1),t=e+7;c(r.slice(e,t))}),[h,r]);return d?(0,u.jsx)(v.Z,{errorDetails:d}):(0,u.jsxs)("div",{children:[m&&(0,u.jsx)(o.Z,{}),(0,u.jsx)(f,{children:"Cast Information"}),(0,u.jsx)(g,{casts:n}),r.length>0?(0,u.jsx)(j.Z,{current:h,pageSize:7,total:r.length,onChange:e=>{w(e)},showSizeChanger:!1}):(0,u.jsx)(x,{children:"No cast information available."})]})}},466:(e,r,t)=>{t.d(r,{IQ:()=>c,TP:()=>o,XT:()=>n,Jh:()=>d,Hg:()=>i});const a=t(903).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"46524a805b39690e1dbf4f8ffae20232"},timeout:1e4}),s=async function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};try{return(await a.get(e,r)).data}catch(t){return t.response?Promise.reject(new Error(`HTTP error! status: ${t.response.status}`)):t.request?Promise.reject(new Error("No response received from the server.")):Promise.reject(new Error(t.message||"An error occurred while fetching data."))}},i=()=>s("/trending/movie/day"),o=e=>e?s(`/movie/${e}`):Promise.reject(new Error("Movie ID is required")),n=(e,r)=>e?s("/search/movie",{params:{query:e,page:r}}):Promise.reject(new Error("Movie name is required")),c=(e,r)=>e?s(`/movie/${e}/credits`,{params:{page:r}}):Promise.reject(new Error("Movie ID is required")),d=(e,r)=>e?s(`/movie/${e}/reviews`,{params:{page:r}}):Promise.reject(new Error("Movie ID is required"))}}]);
//# sourceMappingURL=504.61518b59.chunk.js.map