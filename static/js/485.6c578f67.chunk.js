"use strict";(self.webpackChunkreact_practice=self.webpackChunkreact_practice||[]).push([[485],{672:(e,r,t)=>{t.d(r,{O:()=>m});var s=t(517),i=t(87);const o=s.ZP.div`
  padding: 1rem;
`,a=s.ZP.li`
  margin-bottom: 0.5rem;
  list-style-type: circle;
`,n=(0,s.ZP)(i.rU)`
  text-decoration: none;
  color: #007bff;

  &:hover {
    text-decoration: underline;
  }
`;var c=t(689),d=t(184);const m=e=>{let{movies:r}=e;const t=(0,c.TH)();return(0,d.jsx)(o,{children:(0,d.jsx)("ul",{children:r.map((e=>(0,d.jsx)(a,{children:(0,d.jsx)(n,{to:`/movies/${e.id}`,state:{from:t},children:e.title})},e.id)))})})}},485:(e,r,t)=>{t.r(r),t.d(r,{default:()=>l});var s=t(791),i=t(466),o=t(672),a=t(517);const n=a.ZP.div`
  padding: 2rem;
`,c=a.ZP.h1`
  font-size: 2.5rem;
  color: #343a40;
  margin-bottom: 1.5rem;
`;var d=t(258),m=t(184);const l=()=>{const[e,r]=(0,s.useState)([]),[t,a]=(0,s.useState)(!1);return(0,s.useEffect)((()=>{(async()=>{a(!0);try{const e=await(0,i.Hg)();r(e.results)}catch(e){console.log(e)}finally{a(!1)}})()}),[]),(0,m.jsxs)(n,{children:[t&&(0,m.jsx)(d.Z,{}),(0,m.jsx)(c,{children:"Trending Movies"}),(0,m.jsx)(o.O,{movies:e})]})}},466:(e,r,t)=>{t.d(r,{IQ:()=>c,TP:()=>a,XT:()=>n,Jh:()=>d,Hg:()=>o});const s=t(903).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"46524a805b39690e1dbf4f8ffae20232"},timeout:1e4}),i=async function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};try{return(await s.get(e,r)).data}catch(t){return t.response?Promise.reject(new Error(`HTTP error! status: ${t.response.status}`)):t.request?Promise.reject(new Error("No response received from the server.")):Promise.reject(new Error(t.message||"An error occurred while fetching data."))}},o=()=>i("/trending/movie/day"),a=e=>e?i(`/movie/${e}`):Promise.reject(new Error("Movie ID is required")),n=(e,r)=>e?i("/search/movie",{params:{query:e,page:r}}):Promise.reject(new Error("Movie name is required")),c=(e,r)=>e?i(`/movie/${e}/credits`,{params:{page:r}}):Promise.reject(new Error("Movie ID is required")),d=(e,r)=>e?i(`/movie/${e}/reviews`,{params:{page:r}}):Promise.reject(new Error("Movie ID is required"))}}]);
//# sourceMappingURL=485.6c578f67.chunk.js.map