"use strict";(self.webpackChunkreact_practice=self.webpackChunkreact_practice||[]).push([[83],{672:(e,r,t)=>{t.d(r,{O:()=>u});var o=t(517),i=t(87);const s=o.ZP.div`
  padding: 1rem;
`,a=o.ZP.li`
  margin-bottom: 0.5rem;
  list-style-type: circle;
`,n=(0,o.ZP)(i.rU)`
  text-decoration: none;
  color: #007bff;

  &:hover {
    text-decoration: underline;
  }
`;var c=t(689),l=t(184);const u=e=>{let{movies:r}=e;const t=(0,c.TH)();return(0,l.jsx)(s,{children:(0,l.jsx)("ul",{children:r.map((e=>(0,l.jsx)(a,{children:(0,l.jsx)(n,{to:`/movies/${e.id}`,state:{from:t},children:e.title})},e.id)))})})}},83:(e,r,t)=>{t.r(r),t.d(r,{default:()=>g});var o=t(791),i=t(396),s=t(466),a=t(517);const n=a.ZP.div`
  display: flex;
  justify-content: center;
  padding: 16px;
`,c=a.ZP.form`
  display: flex;
  align-items: center;
  gap: 8px;
`,l=a.ZP.input`
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
`,u=a.ZP.button`
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
`;var d=t(184);const p=e=>{let{onSubmit:r}=e;const[t,i]=(0,o.useState)("");return(0,d.jsx)(n,{children:(0,d.jsxs)(c,{onSubmit:e=>{e.preventDefault(),""!==t.trim()?(r(t),i("")):alert("Enter the movie title!")},children:[(0,d.jsx)(l,{type:"text",value:t,onChange:e=>{i(e.target.value)}}),(0,d.jsx)(u,{type:"submit",children:"Search"})]})})};var m=t(672),v=t(87),h=t(258),x=t(471);const g=()=>{const[e,r]=(0,v.lr)(),[t,a]=(0,o.useState)([]),[n,c]=(0,o.useState)(!1),[l,u]=(0,o.useState)(null),[g,f]=(0,o.useState)(1),[b,j]=(0,o.useState)(1),y=(0,o.useRef)(""),P=(0,o.useRef)(1),w=e.get("query")||"";(0,o.useEffect)((()=>{if(w===y.current&&g===P.current)return;y.current=w,P.current=g;(async()=>{c(!0);try{const e=await(0,s.XT)(w,g);a(e.results),j(e.total_pages)}catch(e){u("Failed to fetch movies. Please try again later."),console.error("Error fetching movies:",e)}finally{c(!1)}})()}),[w,g]);return l?(0,d.jsx)(x.Z,{errorDetails:l}):(0,d.jsxs)("div",{children:[n&&(0,d.jsx)(h.Z,{}),(0,d.jsx)(p,{onSubmit:e=>{e!==y.current&&(r({query:e}),f(1),a([]))}}),(0,d.jsx)(m.O,{movies:t}),w&&t.length>0&&(0,d.jsx)(i.Z,{current:g,pageSize:20,total:20*b,onChange:e=>{f(e)}})]})}},466:(e,r,t)=>{t.d(r,{IQ:()=>c,TP:()=>a,XT:()=>n,Jh:()=>l,Hg:()=>s});const o=t(903).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"46524a805b39690e1dbf4f8ffae20232"},timeout:1e4}),i=async function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};try{return(await o.get(e,r)).data}catch(t){return t.response?Promise.reject(new Error(`HTTP error! status: ${t.response.status}`)):t.request?Promise.reject(new Error("No response received from the server.")):Promise.reject(new Error(t.message||"An error occurred while fetching data."))}},s=()=>i("/trending/movie/day"),a=e=>e?i(`/movie/${e}`):Promise.reject(new Error("Movie ID is required")),n=(e,r)=>e?i("/search/movie",{params:{query:e,page:r}}):Promise.reject(new Error("Movie name is required")),c=(e,r)=>e?i(`/movie/${e}/credits`,{params:{page:r}}):Promise.reject(new Error("Movie ID is required")),l=(e,r)=>e?i(`/movie/${e}/reviews`,{params:{page:r}}):Promise.reject(new Error("Movie ID is required"))}}]);
//# sourceMappingURL=83.d0b6ecac.chunk.js.map