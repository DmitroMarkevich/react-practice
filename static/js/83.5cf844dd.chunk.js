"use strict";(self.webpackChunkreact_practice=self.webpackChunkreact_practice||[]).push([[83],{672:(e,r,t)=>{t.d(r,{O:()=>u});var o=t(517),i=t(87);const s=o.ZP.div`
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
`;var c=t(689),d=t(184);const u=e=>{let{movies:r}=e;const t=(0,c.TH)();return(0,d.jsx)(s,{children:(0,d.jsx)("ul",{children:r.map((e=>(0,d.jsx)(n,{children:(0,d.jsx)(a,{to:`/movies/${e.id}`,state:{from:t},children:e.title})},e.id)))})})}},83:(e,r,t)=>{t.r(r),t.d(r,{default:()=>g});var o=t(791),i=t(396),s=t(466),n=t(517);const a=n.ZP.div`
  display: flex;
  justify-content: center;
  padding: 16px;
`,c=n.ZP.form`
  display: flex;
  align-items: center;
  gap: 8px;
`,d=n.ZP.input`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
  transition: border-color 0.3s;

  &:focus {
    border-color: var(--primary-color);
    outline: none;
  }
`,u=n.ZP.button`
  padding: 8px 16px;
  font-size: 16px;
  color: var(--background-color);
  background-color: var(--primary-color);
  border: 1px solid var(--primary-color);
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--primary-color);
  }
`;var l=t(184);const p=e=>{let{onSubmit:r}=e;const[t,i]=(0,o.useState)("");return(0,l.jsx)(a,{children:(0,l.jsxs)(c,{onSubmit:e=>{e.preventDefault(),""!==t.trim()?(r(t),i("")):alert("Enter the movie title!")},children:[(0,l.jsx)(d,{type:"text",value:t,onChange:e=>{i(e.target.value)}}),(0,l.jsx)(u,{type:"submit",children:"Search"})]})})};var v=t(672),m=t(87),x=t(258),S=t(471);const g=()=>{const[e,r]=(0,m.lr)(),[t,n]=(0,o.useState)([]),[a,c]=(0,o.useState)(!1),[d,u]=(0,o.useState)(null),[g,h]=(0,o.useState)(1),[E,P]=(0,o.useState)(1),_=(0,o.useRef)(""),f=(0,o.useRef)(1),j=e.get("query")||"";(0,o.useEffect)((()=>{if(j===_.current&&g===f.current)return;_.current=j,f.current=g;(async()=>{c(!0);try{const e=await(0,s.XT)(j,g);n(e.results),P(e.total_pages)}catch(e){u("Failed to fetch movies. Please try again later."),console.error("Error fetching movies:",e)}finally{c(!1)}})()}),[j,g]);return d?(0,l.jsx)(S.Z,{errorDetails:d}):(0,l.jsxs)("div",{children:[a&&(0,l.jsx)(x.Z,{}),(0,l.jsx)(p,{onSubmit:e=>{e!==_.current&&(r({query:e}),h(1),n([]))}}),(0,l.jsx)(v.O,{movies:t}),j&&t.length>0&&(0,l.jsx)(i.Z,{current:g,pageSize:20,total:20*E,onChange:e=>{h(e)}})]})}},466:(e,r,t)=>{t.d(r,{IQ:()=>l,TP:()=>d,XT:()=>u,Jh:()=>p,Hg:()=>c});var o=t(903);const i={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_BASE_URL,s={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_KEY,n=o.Z.create({baseURL:i,params:{api_key:s},timeout:1e4}),a=async function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};try{return(await n.get(e,r)).data}catch(t){return t.response?Promise.reject(new Error(`HTTP error! status: ${t.response.status}`)):t.request?Promise.reject(new Error("No response received from the server.")):Promise.reject(new Error(t.message||"An error occurred while fetching data."))}},c=()=>a("/trending/movie/day"),d=e=>e?a(`/movie/${e}`):Promise.reject(new Error("Movie ID is required")),u=(e,r)=>e?a("/search/movie",{params:{query:e,page:r}}):Promise.reject(new Error("Movie name is required")),l=(e,r)=>e?a(`/movie/${e}/credits`,{params:{page:r}}):Promise.reject(new Error("Movie ID is required")),p=(e,r)=>e?a(`/movie/${e}/reviews`,{params:{page:r}}):Promise.reject(new Error("Movie ID is required"))}}]);
//# sourceMappingURL=83.5cf844dd.chunk.js.map