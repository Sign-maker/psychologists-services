import{r as a,b as F,F as e,S as v,s as g,e as p,j as t,L,U as _,B as P}from"./index-DXLHKVkz.js";import{u as O,a as S,F as b,P as w,E as I}from"./Empty-BHm3kD_x.js";const N="_section_l5fej_1",R="_btnWrapper_l5fej_5",x={section:N,btnWrapper:R},W=()=>{const[i,d]=a.useState([]),[h,c]=a.useState(!0),{user:y}=F(),{favoritesItems:j,isPsychologistsLoading:l,nextKey:r,nextValue:u,getFavorites:m,resetPsychologists:f}=O(),{selectedFilter:s}=S();a.useEffect(()=>{const n=async()=>{try{await m({uid:y.uid,queryConstraint:i}),c(!1)}catch(E){P.error(`Ooops, something went wrong! ${E.message}`)}};h&&i.length>0&&n()},[m,i,h,y]),a.useEffect(()=>{if(!r)return;const n=e[s].sortOrder===v.asc?e[s].key?[g(u,r)]:[g(r)]:e[s].key?[p(u,r)]:[p(r)];d([...e[s].queryConstraint,...n])},[r,u,s]),a.useEffect(()=>{f();const n=e[s].additionalQueryConstraint?[...e[s].queryConstraint,...e[s].additionalQueryConstraint]:[...e[s].queryConstraint];d(n),c(!0)},[f,s]);const C=()=>{c(!0)},o=j;return t.jsx("section",{className:x.section,children:t.jsxs("div",{className:"container",children:[t.jsx("h2",{className:"visually-hidden",children:"Favorites"}),t.jsx(b,{}),o.length>0&&t.jsx(w,{items:o}),!l&&!o.length&&t.jsx(I,{}),l&&!o.length&&t.jsx(L,{}),r&&t.jsx("div",{className:x.btnWrapper,children:t.jsx(_,{onClick:C,isLoading:l,width:176,children:"Load more"})})]})})};export{W as default};
