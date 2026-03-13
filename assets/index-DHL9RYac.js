import{r as u,d as D,j as i,L as F,s as O}from"./index-D2K2lJeO.js";import{H as T,F as H}from"./index-DCZiSHol.js";import"./iconify-NOQhwjEz.js";import{I as j}from"./Icon-CfwB9Isv.js";import"./constants-DL97kr2k.js";let R={data:""},M=e=>{if(typeof window=="object"){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||R},U=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,q=/\/\*[^]*?\*\/|  +/g,C=/\n+/g,b=(e,t)=>{let a="",o="",n="";for(let s in e){let r=e[s];s[0]=="@"?s[1]=="i"?a=s+" "+r+";":o+=s[1]=="f"?b(r,s):s+"{"+b(r,s[1]=="k"?"":t)+"}":typeof r=="object"?o+=b(r,t?t.replace(/([^,])+/g,l=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,c=>/&/.test(c)?c.replace(/&/g,l):l?l+" "+c:c)):s):r!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),n+=b.p?b.p(s,r):s+":"+r+";")}return a+(t&&n?t+"{"+n+"}":n)+o},f={},I=e=>{if(typeof e=="object"){let t="";for(let a in e)t+=a+I(e[a]);return t}return e},G=(e,t,a,o,n)=>{let s=I(e),r=f[s]||(f[s]=(c=>{let d=0,m=11;for(;d<c.length;)m=101*m+c.charCodeAt(d++)>>>0;return"go"+m})(s));if(!f[r]){let c=s!==e?e:(d=>{let m,h,y=[{}];for(;m=U.exec(d.replace(q,""));)m[4]?y.shift():m[3]?(h=m[3].replace(C," ").trim(),y.unshift(y[0][h]=y[0][h]||{})):y[0][m[1]]=m[2].replace(C," ").trim();return y[0]})(e);f[r]=b(n?{["@keyframes "+r]:c}:c,a?"":"."+r)}let l=a&&f.g?f.g:null;return a&&(f.g=f[r]),((c,d,m,h)=>{h?d.data=d.data.replace(h,c):d.data.indexOf(c)===-1&&(d.data=m?c+d.data:d.data+c)})(f[r],t,o,l),r},Z=(e,t,a)=>e.reduce((o,n,s)=>{let r=t[s];if(r&&r.call){let l=r(a),c=l&&l.props&&l.props.className||/^go/.test(l)&&l;r=c?"."+c:l&&typeof l=="object"?l.props?"":b(l,""):l===!1?"":l}return o+n+(r??"")},"");function k(e){let t=this||{},a=e.call?e(t.p):e;return G(a.unshift?a.raw?Z(a,[].slice.call(arguments,1),t.p):a.reduce((o,n)=>Object.assign(o,n&&n.call?n(t.p):n),{}):a,M(t.target),t.g,t.o,t.k)}let L,N,$;k.bind({g:1});let x=k.bind({k:1});function Q(e,t,a,o){b.p=t,L=e,N=a,$=o}function g(e,t){let a=this||{};return function(){let o=arguments;function n(s,r){let l=Object.assign({},s),c=l.className||n.className;a.p=Object.assign({theme:N&&N()},l),a.o=/ *go\d+/.test(c),l.className=k.apply(a,o)+(c?" "+c:"");let d=e;return e[0]&&(d=l.as||e,delete l.as),$&&d[0]&&$(l),L(d,l)}return n}}var W=e=>typeof e=="function",_=(e,t)=>W(e)?e(t):e,Y=(()=>{let e=0;return()=>(++e).toString()})(),B=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),J=20,P="default",z=(e,t)=>{let{toastLimit:a}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,a)};case 1:return{...e,toasts:e.toasts.map(r=>r.id===t.toast.id?{...r,...t.toast}:r)};case 2:let{toast:o}=t;return z(e,{type:e.toasts.find(r=>r.id===o.id)?1:0,toast:o});case 3:let{toastId:n}=t;return{...e,toasts:e.toasts.map(r=>r.id===n||n===void 0?{...r,dismissed:!0,visible:!1}:r)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(r=>r.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let s=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(r=>({...r,pauseDuration:r.pauseDuration+s}))}}},K=[],V={toasts:[],pausedAt:void 0,settings:{toastLimit:J}},v={},A=(e,t=P)=>{v[t]=z(v[t]||V,e),K.forEach(([a,o])=>{a===t&&o(v[t])})},S=e=>Object.keys(v).forEach(t=>A(e,t)),X=e=>Object.keys(v).find(t=>v[t].toasts.some(a=>a.id===e)),E=(e=P)=>t=>{A(t,e)},ee=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:a?.id||Y()}),w=e=>(t,a)=>{let o=ee(t,e,a);return E(o.toasterId||X(o.id))({type:2,toast:o}),o.id},p=(e,t)=>w("blank")(e,t);p.error=w("error");p.success=w("success");p.loading=w("loading");p.custom=w("custom");p.dismiss=(e,t)=>{let a={type:3,toastId:e};t?E(t)(a):S(a)};p.dismissAll=e=>p.dismiss(void 0,e);p.remove=(e,t)=>{let a={type:4,toastId:e};t?E(t)(a):S(a)};p.removeAll=e=>p.remove(void 0,e);p.promise=(e,t,a)=>{let o=p.loading(t.loading,{...a,...a?.loading});return typeof e=="function"&&(e=e()),e.then(n=>{let s=t.success?_(t.success,n):void 0;return s?p.success(s,{id:o,...a,...a?.success}):p.dismiss(o),n}).catch(n=>{let s=t.error?_(t.error,n):void 0;s?p.error(s,{id:o,...a,...a?.error}):p.dismiss(o)}),e};var te=x`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,ae=x`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,re=x`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,se=g("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${te} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${ae} 0.15s ease-out forwards;
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
    animation: ${re} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,oe=x`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,ie=g("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${oe} 1s linear infinite;
`,ne=x`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,le=x`
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
}`,ce=g("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ne} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${le} 0.2s ease-out forwards;
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
`,de=g("div")`
  position: absolute;
`,pe=g("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,me=x`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ue=g("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${me} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,fe=({toast:e})=>{let{icon:t,type:a,iconTheme:o}=e;return t!==void 0?typeof t=="string"?u.createElement(ue,null,t):t:a==="blank"?null:u.createElement(pe,null,u.createElement(ie,{...o}),a!=="loading"&&u.createElement(de,null,a==="error"?u.createElement(se,{...o}):u.createElement(ce,{...o})))},xe=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,he=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,be="0%{opacity:0;} 100%{opacity:1;}",ge="0%{opacity:1;} 100%{opacity:0;}",ye=g("div")`
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
`,ve=g("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,we=(e,t)=>{let a=e.includes("top")?1:-1,[o,n]=B()?[be,ge]:[xe(a),he(a)];return{animation:t?`${x(o)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${x(n)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}};u.memo(({toast:e,position:t,style:a,children:o})=>{let n=e.height?we(e.position||t||"top-center",e.visible):{opacity:0},s=u.createElement(fe,{toast:e}),r=u.createElement(ve,{...e.ariaProps},_(e.message,e));return u.createElement(ye,{className:e.className,style:{...n,...a,...e.style}},typeof o=="function"?o({icon:s,message:r}):u.createElement(u.Fragment,null,s,r))});Q(u.createElement);k`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;const je=()=>{const{id:e}=D(),[t,a]=u.useState(null),[o,n]=u.useState(!0);u.useEffect(()=>{e&&(async()=>{n(!0);try{const{data:d,error:m}=await O.from("posts").select(`
            title, 
            body, 
            thumbnail_url, 
            type, 
            created_at, 
            published_at,
            author_id,
            profiles (
              full_name,
              avatar_url
            )
          `).eq("id",e).single();if(m)throw m;a(d)}catch(d){console.error("Error fetching post:",d.message),p.error("Gagal memuat postingan")}finally{n(!1)}})()},[e]);const s=c=>{const d=window.location.href,m=t?.title||"Check this out!",h={facebook:`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(d)}`,twitter:`https://twitter.com/intent/tweet?text=${encodeURIComponent(m)}&url=${encodeURIComponent(d)}`,whatsapp:`https://api.whatsapp.com/send?text=${encodeURIComponent(m+" "+d)}`};window.open(h[c],"_blank")},r=async()=>{try{await navigator.clipboard.writeText(window.location.href),p.success("Link disalin ke clipboard!")}catch{p.error("Gagal menyalin link")}};if(o)return i.jsx("div",{className:"py-40 text-center text-default-500",children:"Memuat konten..."});if(!t)return i.jsx("div",{className:"py-40 text-center text-default-500",children:"Postingan tidak ditemukan"});const l=t.published_at||t.created_at;return i.jsx("article",{className:"pb-20",children:i.jsx("section",{className:"pt-24",children:i.jsxs("div",{className:"container",children:[i.jsxs("div",{className:"flex items-center gap-2 text-sm text-default-500 mb-8 bg-default-50 p-3 rounded-lg border border-default-100",children:[i.jsx(F,{to:"/",className:"hover:text-primary transition-colors",children:"Home"}),i.jsx("span",{className:"text-default-300",children:"/"}),i.jsx("span",{className:"truncate max-w-[200px]",children:t.title})]}),i.jsx("h1",{className:"text-3xl lg:text-5xl font-bold text-default-900 mb-6 leading-tight",children:t.title}),i.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 border-b border-default-100 pb-8 mb-10",children:[i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx("img",{src:t.profiles?.avatar_url||"https://via.placeholder.com/100",className:"h-12 w-12 rounded-full object-cover border border-default-200",alt:"Author"}),i.jsxs("div",{children:[i.jsx("p",{className:"font-bold text-default-900",children:t.profiles?.full_name||"Admin"}),i.jsx("p",{className:"text-sm text-default-500",children:new Date(l).toLocaleDateString("id-ID",{day:"numeric",month:"long",year:"numeric"})})]})]}),i.jsxs("div",{className:"flex gap-4 items-center bg-default-50 px-4 py-2 rounded-full border border-default-200",children:[i.jsx("span",{className:"text-xs font-bold text-default-500 uppercase tracking-wider",children:"Share:"}),i.jsx("button",{onClick:r,className:"hover:text-primary transition-colors",title:"Salin Link",children:i.jsx(j,{icon:"tabler:link",className:"size-5"})}),i.jsx("button",{onClick:()=>s("facebook"),className:"hover:text-blue-600 transition-colors",children:i.jsx(j,{icon:"tabler:brand-facebook",className:"size-5"})}),i.jsx("button",{onClick:()=>s("twitter"),className:"hover:text-black transition-colors",children:i.jsx(j,{icon:"tabler:brand-x",className:"size-5"})}),i.jsx("button",{onClick:()=>s("whatsapp"),className:"hover:text-green-500 transition-colors",children:i.jsx(j,{icon:"tabler:brand-whatsapp",className:"size-5"})})]})]}),i.jsxs("div",{className:"max-w-4xl mx-auto",children:[t.thumbnail_url&&i.jsx("img",{src:t.thumbnail_url,className:"w-full rounded-2xl mb-10 shadow-lg object-cover max-h-[500px]",alt:"Thumbnail"}),i.jsx("div",{className:"tiptap-content prose prose-lg max-w-none text-default-700 leading-relaxed",dangerouslySetInnerHTML:{__html:t.body}})]})]})})})},Ce=()=>i.jsxs(i.Fragment,{children:[i.jsx(T,{theme:"light"}),i.jsx(je,{}),i.jsx(H,{})]});export{Ce as default};
