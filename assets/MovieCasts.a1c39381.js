import{a as s,F as r,j as g,r as a,f as p,L as f}from"./index.b014f210.js";import{m as u,M as _}from"./api.356fc523.js";const v="_list_13d2j_1",x="_item_13d2j_7";var C={list:v,item:x};const y="_castContainer_16y9m_1",M="_imgContainer_16y9m_13";var h={castContainer:y,imgContainer:M};function j({cast:t}){const{profile_path:n,name:i}=t;return s(r,{children:g("div",{className:h.castContainer,children:[s("div",{className:h.imgContainer,children:s("img",{src:n,alt:i})}),s("p",{children:i})]})})}function I(){const[t,n]=a.exports.useState([]),[i,o]=a.exports.useState(!1),[c,l]=a.exports.useState(""),m=p(),d=a.exports.useCallback(async()=>{o(!0),l("");try{const e=await u.fetchMovieCredits(m.movieId);n([...e])}catch(e){l(e.message)}finally{o(!1)}},[m.movieId]);return a.exports.useEffect(()=>{d()},[d]),g(r,{children:[s("h3",{children:"Casts"}),i&&s(f,{}),c&&s(_,{message:c}),t.length>0?s(r,{children:s("ul",{className:C.list,children:t&&t.map(e=>s("li",{className:C.item,children:s(j,{cast:e})},e.id))})}):s("p",{children:"No data"})]})}export{I as default};