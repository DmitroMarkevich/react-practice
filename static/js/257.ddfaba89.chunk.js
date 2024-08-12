"use strict";(self.webpackChunkreact_practice=self.webpackChunkreact_practice||[]).push([[257],{257:(e,r,i)=>{i.r(r),i.d(r,{default:()=>z});var t=i(689),o=i(791),a=i(466),s=i(517),n=i(87);const c=s.ZP.section`
  padding: var(--spacing-large);
`,l=(0,s.ZP)(n.rU)`
  text-decoration: none;
  color: var(--primary-color);
`,d=s.ZP.h2`
  font-size: 2rem;
  color: var(--text-primary);
  margin-bottom: var(--spacing-medium);
`,m=s.ZP.img`
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  max-width: 100%;
`,p=s.ZP.p`
  font-size: 1rem;
  margin-top: var(--spacing-small);
  color: var(--text-secondary);
`,v=s.ZP.h3`
  font-size: 1.25rem;
  color: var(--text-primary);
  margin-top: var(--spacing-medium);
`,x=s.ZP.p`
  font-size: 1rem;
  color: var(--text-secondary);
`,h=s.ZP.h3`
  font-size: 1.25rem;
  color: var(--text-primary);
  margin-top: var(--spacing-medium);
`,u=s.ZP.p`
  font-size: 1rem;
  color: var(--text-secondary);
`,g=s.ZP.h3`
  font-size: 1.25rem;
  color: var(--text-primary);
  margin-top: var(--spacing-medium);
`,j=s.ZP.div`
  margin-top: var(--spacing-large);
`,f=s.ZP.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
  gap: 16px;
  margin: 0;
`,P=(0,s.ZP)(n.rU)`
  font-size: 1rem;
  color: var(--primary-color);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;var w=i(71),y=i(471),Z=i(258),b=i(184);const z=()=>{var e,r;const{movieId:i}=(0,t.UO)(),[s,n]=(0,o.useState)(null),[z,E]=(0,o.useState)(null),k=(0,t.TH)(),_=(0,o.useRef)(null!==(e=null===(r=k.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/movies");if((0,o.useEffect)((()=>{(async()=>{try{const e=await(0,a.TP)(Number(i));n(e)}catch(z){E("Failed to load movie details"),console.error(z)}})()}),[i]),z)return(0,b.jsx)(y.Z,{errorDetails:z});if(!s)return(0,b.jsx)(Z.Z,{});const{original_title:q,poster_path:T,vote_average:I,overview:U,genres:$}=s;return(0,b.jsxs)(c,{children:[(0,b.jsxs)(l,{to:_.current,children:[(0,b.jsx)(w.x_l,{style:{marginRight:"8px"}}),"Go back"]}),(0,b.jsxs)("div",{children:[(0,b.jsx)(d,{children:q}),T&&(0,b.jsx)(m,{src:`https://image.tmdb.org/t/p/w500${T}`,alt:q,width:"270"}),(0,b.jsxs)(p,{children:["User score: ",I?(10*I).toFixed(1):"N/A","%"]}),(0,b.jsx)(v,{children:"Overview"}),(0,b.jsx)(x,{children:U||"No overview available"}),(0,b.jsx)(h,{children:"Genres"}),(0,b.jsx)(u,{children:$.map((e=>e.name)).join(", ")})]}),(0,b.jsxs)(j,{children:[(0,b.jsx)(g,{children:"Additional information"}),(0,b.jsxs)(f,{children:[(0,b.jsx)("li",{children:(0,b.jsx)(P,{to:"cast",children:"Cast"})}),(0,b.jsx)("li",{children:(0,b.jsx)(P,{to:"reviews",children:"Reviews"})})]})]}),(0,b.jsx)(o.Suspense,{fallback:(0,b.jsx)(Z.Z,{}),children:(0,b.jsx)(t.j3,{})})]})}},466:(e,r,i)=>{i.d(r,{IQ:()=>c,TP:()=>s,XT:()=>n,Jh:()=>l,Hg:()=>a});const t=i(903).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"46524a805b39690e1dbf4f8ffae20232"},timeout:1e4}),o=async function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};try{return(await t.get(e,r)).data}catch(i){return i.response?Promise.reject(new Error(`HTTP error! status: ${i.response.status}`)):i.request?Promise.reject(new Error("No response received from the server.")):Promise.reject(new Error(i.message||"An error occurred while fetching data."))}},a=()=>o("/trending/movie/day"),s=e=>e?o(`/movie/${e}`):Promise.reject(new Error("Movie ID is required")),n=(e,r)=>e?o("/search/movie",{params:{query:e,page:r}}):Promise.reject(new Error("Movie name is required")),c=(e,r)=>e?o(`/movie/${e}/credits`,{params:{page:r}}):Promise.reject(new Error("Movie ID is required")),l=(e,r)=>e?o(`/movie/${e}/reviews`,{params:{page:r}}):Promise.reject(new Error("Movie ID is required"))}}]);
//# sourceMappingURL=257.ddfaba89.chunk.js.map