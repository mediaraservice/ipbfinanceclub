import{r as m,d as E,j as r,L as z,s as N}from"./index-DtCLQYEe.js";import{H as L,F as A}from"./index-_WH7WTIv.js";import"./iconify-9RcruXxk.js";import{I as y}from"./Icon-2b5pLyhE.js";import"./constants-BdKieeuh.js";let C={data:""},P=e=>{if(typeof window=="object"){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||C},S=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,F=/\/\*[^]*?\*\/|  +/g,k=/\n+/g,b=(e,t)=>{let a="",n="",c="";for(let o in e){let s=e[o];o[0]=="@"?o[1]=="i"?a=o+" "+s+";":n+=o[1]=="f"?b(s,o):o+"{"+b(s,o[1]=="k"?"":t)+"}":typeof s=="object"?n+=b(s,t?t.replace(/([^,])+/g,i=>o.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,i):i?i+" "+l:l)):o):s!=null&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),c+=b.p?b.p(o,s):o+":"+s+";")}return a+(t&&c?t+"{"+c+"}":c)+n},h={},$=e=>{if(typeof e=="object"){let t="";for(let a in e)t+=a+$(e[a]);return t}return e},T=(e,t,a,n,c)=>{let o=$(e),s=h[o]||(h[o]=(l=>{let p=0,d=11;for(;p<l.length;)d=101*d+l.charCodeAt(p++)>>>0;return"go"+d})(o));if(!h[s]){let l=o!==e?e:(p=>{let d,u,f=[{}];for(;d=S.exec(p.replace(F,""));)d[4]?f.shift():d[3]?(u=d[3].replace(k," ").trim(),f.unshift(f[0][u]=f[0][u]||{})):f[0][d[1]]=d[2].replace(k," ").trim();return f[0]})(e);h[s]=b(c?{["@keyframes "+s]:l}:l,a?"":"."+s)}let i=a&&h.g?h.g:null;return a&&(h.g=h[s]),((l,p,d,u)=>{u?p.data=p.data.replace(u,l):p.data.indexOf(l)===-1&&(p.data=d?l+p.data:p.data+l)})(h[s],t,n,i),s},D=(e,t,a)=>e.reduce((n,c,o)=>{let s=t[o];if(s&&s.call){let i=s(a),l=i&&i.props&&i.props.className||/^go/.test(i)&&i;s=l?"."+l:i&&typeof i=="object"?i.props?"":b(i,""):i===!1?"":i}return n+c+(s??"")},"");function w(e){let t=this||{},a=e.call?e(t.p):e;return T(a.unshift?a.raw?D(a,[].slice.call(arguments,1),t.p):a.reduce((n,c)=>Object.assign(n,c&&c.call?c(t.p):c),{}):a,P(t.target),t.g,t.o,t.k)}let _,j,v;w.bind({g:1});let x=w.bind({k:1});function H(e,t,a,n){b.p=t,_=e,j=a,v=n}function g(e,t){let a=this||{};return function(){let n=arguments;function c(o,s){let i=Object.assign({},o),l=i.className||c.className;a.p=Object.assign({theme:j&&j()},i),a.o=/ *go\d+/.test(l),i.className=w.apply(a,n)+(l?" "+l:"");let p=e;return e[0]&&(p=i.as||e,delete i.as),v&&p[0]&&v(i),_(p,i)}return c}}var O=e=>typeof e=="function",I=(e,t)=>O(e)?e(t):e,q=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),M=x`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,R=x`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Z=x`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,G=g("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${M} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${R} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Z} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,B=x`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,J=g("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${B} 1s linear infinite;
`,K=x`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Q=x`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,U=g("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${K} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Q} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,V=g("div")`
  position: absolute;
`,W=g("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,X=x`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Y=g("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${X} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,ee=({toast:e})=>{let{icon:t,type:a,iconTheme:n}=e;return t!==void 0?typeof t=="string"?m.createElement(Y,null,t):t:a==="blank"?null:m.createElement(W,null,m.createElement(J,{...n}),a!=="loading"&&m.createElement(V,null,a==="error"?m.createElement(G,{...n}):m.createElement(U,{...n})))},te=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ae=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,re="0%{opacity:0;} 100%{opacity:1;}",oe="0%{opacity:1;} 100%{opacity:0;}",se=g("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,ie=g("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,ne=(e,t)=>{let a=e.includes("top")?1:-1,[n,c]=q()?[re,oe]:[te(a),ae(a)];return{animation:t?`${x(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${x(c)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}};m.memo(({toast:e,position:t,style:a,children:n})=>{let c=e.height?ne(e.position||t||"top-center",e.visible):{opacity:0},o=m.createElement(ee,{toast:e}),s=m.createElement(ie,{...e.ariaProps},I(e.message,e));return m.createElement(se,{className:e.className,style:{...c,...a,...e.style}},typeof n=="function"?n({icon:o,message:s}):m.createElement(m.Fragment,null,o,s))});H(m.createElement);w`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;const le=()=>{const{id:e}=E(),[t,a]=m.useState(null),[n,c]=m.useState(null),[o,s]=m.useState(!0);m.useEffect(()=>{(async()=>{const{data:d,error:u}=await N.from("posts").select("title, body, thumbnail_url, type, created_at, author_id").eq("id",e).single();if(d){a(d);const{data:f}=await N.from("profiles").select("full_name, avatar_url").eq("id",d.author_id).single();f&&c(f)}s(!1)})()},[e]);const i=p=>{const d=window.location.href,u=t?.title||"Check this out!",f={facebook:`https://www.facebook.com/sharer/sharer.php?u=${d}`,twitter:`https://twitter.com/intent/tweet?text=${u}&url=${d}`,whatsapp:`https://api.whatsapp.com/send?text=${u} ${d}`};window.open(f[p],"_blank")};if(o)return r.jsx("div",{className:"py-40 text-center",children:"Loading..."});if(!t)return r.jsx("div",{className:"py-40 text-center",children:"Post not found"});const l=async()=>{const p=window.location.href;try{await navigator.clipboard.writeText(p),alert("Link berhasil disalin ke clipboard!")}catch(d){console.error("Gagal menyalin link:",d)}};return r.jsx("article",{className:"pb-20",children:r.jsx("section",{className:"pt-24",children:r.jsxs("div",{className:"container",children:[r.jsxs("div",{className:"flex items-center gap-2 text-sm text-default-500 mb-8 bg-default-100 p-3 rounded",children:[r.jsx(z,{to:"/",className:"hover:text-primary",children:"Home"})," ","/ ",r.jsx("span",{children:t.title})]}),r.jsx("h1",{className:"text-3xl lg:text-5xl font-bold text-default-900 mb-6 leading-tight",children:t.title}),r.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 border-b pb-8 mb-10",children:[r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("img",{src:n?.avatar_url||"https://via.placeholder.com/100",className:"h-12 w-12 rounded-full object-cover",alt:"Author"}),r.jsxs("div",{children:[r.jsx("p",{className:"font-medium text-default-900",children:n?.full_name||"Admin"}),r.jsx("p",{className:"text-sm text-default-500",children:new Date(t.created_at).toLocaleDateString("id-ID")})]})]}),r.jsxs("div",{className:"flex gap-3 items-center",children:[r.jsx("p",{className:"text-sm font-bold",children:"SHARE:"}),r.jsx("button",{onClick:l,title:"Salin Link",children:r.jsx(y,{icon:"tabler:link",className:"size-6 text-default-600"})}),r.jsx("button",{onClick:()=>i("facebook"),children:r.jsx(y,{icon:"tabler:brand-facebook",className:"size-6 text-blue-600"})}),r.jsx("button",{onClick:()=>i("twitter"),children:r.jsx(y,{icon:"tabler:brand-x",className:"size-6 text-black"})}),r.jsx("button",{onClick:()=>i("whatsapp"),children:r.jsx(y,{icon:"tabler:brand-whatsapp",className:"size-6 text-green-500"})})]})]}),r.jsxs("div",{className:"max-w-4xl mx-auto",children:[t.thumbnail_url&&r.jsx("img",{src:t.thumbnail_url,className:"w-full rounded-2xl mb-10 shadow-sm",alt:"Thumbnail"}),r.jsx("div",{className:"tiptap-content",dangerouslySetInnerHTML:{__html:t.body}})]})]})})})},ue=()=>r.jsxs(r.Fragment,{children:[r.jsx(L,{theme:"light"}),r.jsx(le,{}),r.jsx(A,{})]});export{ue as default};
