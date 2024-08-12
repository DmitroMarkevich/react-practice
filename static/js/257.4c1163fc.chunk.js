"use strict";(self.webpackChunkreact_practice=self.webpackChunkreact_practice||[]).push([[257],{257:(e,r,i)=>{i.r(r),i.d(r,{default:()=>T});var o=i(689),t=i(791),s=i(466),a=i(517),n=i(87);const c=a.ZP.section`
  padding: var(--spacing-large);
`,d=(0,a.ZP)(n.rU)`
  text-decoration: none;
  color: var(--primary-color);
`,l=a.ZP.h2`
  font-size: 2rem;
  color: var(--text-primary);
  margin-bottom: var(--spacing-medium);
`,m=a.ZP.img`
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  max-width: 100%;
`,v=a.ZP.p`
  font-size: 1rem;
  margin-top: var(--spacing-small);
  color: var(--text-secondary);
`,p=a.ZP.h3`
  font-size: 1.25rem;
  color: var(--text-primary);
  margin-top: var(--spacing-medium);
`,x=a.ZP.p`
  font-size: 1rem;
  color: var(--text-secondary);
`,u=a.ZP.h3`
  font-size: 1.25rem;
  color: var(--text-primary);
  margin-top: var(--spacing-medium);
`,h=a.ZP.p`
  font-size: 1rem;
  color: var(--text-secondary);
`,g=a.ZP.h3`
  font-size: 1.25rem;
  color: var(--text-primary);
  margin-top: var(--spacing-medium);
`,P=a.ZP.div`
  margin-top: var(--spacing-large);
`,j=a.ZP.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
  gap: 16px;
  margin: 0;
`,_=(0,a.ZP)(n.rU)`
  font-size: 1rem;
  color: var(--primary-color);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;var E=i(71),f=i(471),w=i(258),S=i(184);const T=()=>{var e,r;const{movieId:i}=(0,o.UO)(),[a,n]=(0,t.useState)(null),[T,y]=(0,t.useState)(null),Z=(0,o.TH)(),R=(0,t.useRef)(null!==(e=null===(r=Z.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/movies");if((0,t.useEffect)((()=>{(async()=>{try{const e=await(0,s.TP)(Number(i));n(e)}catch(T){y("Failed to load movie details"),console.error(T)}})()}),[i]),T)return(0,S.jsx)(f.Z,{errorDetails:T});if(!a)return(0,S.jsx)(w.Z,{});const{original_title:O,poster_path:A,vote_average:C,overview:b,genres:D}=a;return(0,S.jsxs)(c,{children:[(0,S.jsxs)(d,{to:R.current,children:[(0,S.jsx)(E.x_l,{style:{marginRight:"8px"}}),"Go back"]}),(0,S.jsxs)("div",{children:[(0,S.jsx)(l,{children:O}),A&&(0,S.jsx)(m,{src:`https://image.tmdb.org/t/p/w500${A}`,alt:O,width:"270"}),(0,S.jsxs)(v,{children:["User score: ",C?(10*C).toFixed(1):"N/A","%"]}),(0,S.jsx)(p,{children:"Overview"}),(0,S.jsx)(x,{children:b||"No overview available"}),(0,S.jsx)(u,{children:"Genres"}),(0,S.jsx)(h,{children:D.map((e=>e.name)).join(", ")})]}),(0,S.jsxs)(P,{children:[(0,S.jsx)(g,{children:"Additional information"}),(0,S.jsxs)(j,{children:[(0,S.jsx)("li",{children:(0,S.jsx)(_,{to:"cast",children:"Cast"})}),(0,S.jsx)("li",{children:(0,S.jsx)(_,{to:"reviews",children:"Reviews"})})]})]}),(0,S.jsx)(t.Suspense,{fallback:(0,S.jsx)(w.Z,{}),children:(0,S.jsx)(o.j3,{})})]})}},466:(e,r,i)=>{i.d(r,{IQ:()=>m,TP:()=>d,XT:()=>l,Jh:()=>v,Hg:()=>c});var o=i(903);const t={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_BASE_URL,s={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_KEY,a=o.Z.create({baseURL:t,params:{api_key:s},timeout:1e4}),n=async function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};try{return(await a.get(e,r)).data}catch(i){return i.response?Promise.reject(new Error(`HTTP error! status: ${i.response.status}`)):i.request?Promise.reject(new Error("No response received from the server.")):Promise.reject(new Error(i.message||"An error occurred while fetching data."))}},c=()=>n("/trending/movie/day"),d=e=>e?n(`/movie/${e}`):Promise.reject(new Error("Movie ID is required")),l=(e,r)=>e?n("/search/movie",{params:{query:e,page:r}}):Promise.reject(new Error("Movie name is required")),m=(e,r)=>e?n(`/movie/${e}/credits`,{params:{page:r}}):Promise.reject(new Error("Movie ID is required")),v=(e,r)=>e?n(`/movie/${e}/reviews`,{params:{page:r}}):Promise.reject(new Error("Movie ID is required"))}}]);
//# sourceMappingURL=257.4c1163fc.chunk.js.map