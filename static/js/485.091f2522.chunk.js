"use strict";(self.webpackChunkreact_practice=self.webpackChunkreact_practice||[]).push([[485],{672:(e,r,t)=>{t.d(r,{O:()=>m});var o=t(517),i=t(87);const s=o.ZP.div`
  padding: 1rem;
`,n=o.ZP.li`
  margin-bottom: 0.5rem;
  list-style-type: circle;
`,a=(0,o.ZP)(i.rU)`
  text-decoration: none;
  color: #007bff;

  &:hover {
    text-decoration: underline;
  }
`;var c=t(689),d=t(184);const m=e=>{let{movies:r}=e;const t=(0,c.TH)();return(0,d.jsx)(s,{children:(0,d.jsx)("ul",{children:r.map((e=>(0,d.jsx)(n,{children:(0,d.jsx)(a,{to:`/movies/${e.id}`,state:{from:t},children:e.title})},e.id)))})})}},485:(e,r,t)=>{t.r(r),t.d(r,{default:()=>v});var o=t(791),i=t(466),s=t(672),n=t(517);const a=n.ZP.div`
  padding: 2rem;
`,c=n.ZP.h1`
  font-size: 2.5rem;
  color: #343a40;
  margin-bottom: 1.5rem;
`;var d=t(258),m=t(184);const v=()=>{const[e,r]=(0,o.useState)([]),[t,n]=(0,o.useState)(!1);return(0,o.useEffect)((()=>{(async()=>{n(!0);try{const e=await(0,i.Hg)();r(e.results)}catch(e){console.log(e)}finally{n(!1)}})()}),[]),(0,m.jsxs)(a,{children:[t&&(0,m.jsx)(d.Z,{}),(0,m.jsx)(c,{children:"Trending Movies"}),(0,m.jsx)(s.O,{movies:e})]})}},466:(e,r,t)=>{t.d(r,{IQ:()=>v,TP:()=>d,XT:()=>m,Jh:()=>u,Hg:()=>c});var o=t(903);const i={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_BASE_URL,s={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_KEY,n=o.Z.create({baseURL:i,params:{api_key:s},timeout:1e4}),a=async function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};try{return(await n.get(e,r)).data}catch(t){return t.response?Promise.reject(new Error(`HTTP error! status: ${t.response.status}`)):t.request?Promise.reject(new Error("No response received from the server.")):Promise.reject(new Error(t.message||"An error occurred while fetching data."))}},c=()=>a("/trending/movie/day"),d=e=>e?a(`/movie/${e}`):Promise.reject(new Error("Movie ID is required")),m=(e,r)=>e?a("/search/movie",{params:{query:e,page:r}}):Promise.reject(new Error("Movie name is required")),v=(e,r)=>e?a(`/movie/${e}/credits`,{params:{page:r}}):Promise.reject(new Error("Movie ID is required")),u=(e,r)=>e?a(`/movie/${e}/reviews`,{params:{page:r}}):Promise.reject(new Error("Movie ID is required"))}}]);
//# sourceMappingURL=485.091f2522.chunk.js.map