"use strict";(self.webpackChunkreact_pet_apps=self.webpackChunkreact_pet_apps||[]).push([[715],{3715:function(n,e,t){t.r(e),t.d(e,{default:function(){return X}});var r,a,i,o,c,l,u,s,p,d,g=t(3433),x=t(9439),f=t(2791),h=t(8174),m=t(4165),Z=t(5861),b=t(3263),v=t(3708),y=function(){var n=(0,Z.Z)((0,m.Z)().mark((function n(e,t){var r,a,i;return(0,m.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={params:{key:"13118160-85f169275baea695b5828e8ed",q:e,image_type:v.pV,orientation:v._y,safesearch:!0,per_page:v.LZ,page:t}},n.prev=1,n.next=4,b.Z.get("https://pixabay.com/api/",r);case 4:return a=n.sent,i=a.data,n.abrupt("return",i);case 9:return n.prev=9,n.t0=n.catch(1),n.abrupt("return",n.t0);case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e,t){return n.apply(this,arguments)}}(),j=t(811),w=t(978),k=t(168),C=t(4934),L=C.Z.header(r||(r=(0,k.Z)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #3f51b5;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),S=C.Z.form(a||(a=(0,k.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),P=C.Z.input(i||(i=(0,k.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n"]))),q=t(1087),U=t(3329),z=function(n){var e=n.onChangeQuery,t=(0,q.lr)(),r=(0,x.Z)(t,2),a=r[0],i=r[1],o=a.get("query")||"";return(0,U.jsx)(L,{children:(0,U.jsxs)(S,{onSubmit:function(n){n.preventDefault(),e(o)},children:[(0,U.jsx)(j.Z,{type:"submit",text:"Search",children:(0,U.jsx)(w.VXj,{size:"20"})}),(0,U.jsx)(P,{type:"text",autoComplete:"off",value:o,autoFocus:!0,name:"searchQuery",onChange:function(n){var e=n.target.value;i(""!==e?{query:e}:{})},placeholder:"Search images and photos"})]})})},I=C.Z.div(o||(o=(0,k.Z)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 16px;\n  padding-bottom: 24px;\n"]))),R=t(9104),_=t(4164),E=C.Z.div(c||(c=(0,k.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n"]))),M=C.Z.div(l||(l=(0,k.Z)(["\n  max-width: calc(100vw - 48px);\n  max-height: calc(100vh - 24px);\n"]))),N=document.querySelector("#modal-root"),A=function(n){var e=n.children,t=n.toggleModal;return(0,f.useEffect)((function(){function n(n){n.code===v.hY&&t()}return window.addEventListener(v.qO,n),function(){window.removeEventListener(v.qO,n)}}),[t]),(0,_.createPortal)((0,U.jsx)(E,{"data-name":v.v8,onClick:function(n){n.target===n.currentTarget&&t()},children:(0,U.jsx)(M,{children:e&&e})}),N)},Q=C.Z.li(u||(u=(0,k.Z)(["\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),T=C.Z.img(s||(s=(0,k.Z)(["\n  width: 100%;\n  height: 260px;\n  object-fit: cover;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  :hover {\n    transform: scale(1.03);\n    cursor: zoom-in;\n  }\n"]))),F=function(n){var e=n.id,t=n.largeImageURL,r=n.webformatURL,a=n.toggleModal;return(0,U.jsx)(Q,{children:(0,U.jsx)(T,{onClick:a,src:r,"data-large-image":t,id:e})})},O=C.Z.ul(p||(p=(0,k.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),V=C.Z.div(d||(d=(0,k.Z)(["\n  display: flex;\n  justify-content: center;\n  padding: 20px;\n"]))),D=function(n){var e=n.gallery,t=n.totalImg,r=n.totalPages,a=n.currentPage,i=n.onChangePage,o=(0,f.useState)(!1),c=(0,x.Z)(o,2),l=c[0],u=c[1],s=(0,f.useState)(""),p=(0,x.Z)(s,2),d=p[0],g=p[1],h=function(n){u(!l),g(n||{})},m=t%v.LZ,Z=a!==r-1?"load next ".concat(v.LZ," images"):"load last ".concat(m);return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(O,{children:e.length?e.map((function(n){var e=n.id,t=n.largeImageURL,r=n.webformatURL,a=n.tags;return(0,U.jsx)(F,{toggleModal:function(){return h({largeImageURL:t,tags:a})},id:e,webformatURL:r},e+a)})):null}),e.length&&a!==r?(0,U.jsx)(V,{children:(0,U.jsx)(R.Z,{onClick:i,textColor:"blue",text:Z})}):null,l&&(0,U.jsx)(A,{toggleModal:h,children:(0,U.jsx)("img",{src:d.largeImageURL,alt:d.tags})})]})},H=t(863),X=function(){var n=(0,f.useState)([]),e=(0,x.Z)(n,2),t=e[0],r=e[1],a=(0,f.useState)(!1),i=(0,x.Z)(a,2),o=i[0],c=i[1],l=(0,f.useState)(""),u=(0,x.Z)(l,2),s=u[0],p=u[1],d=(0,f.useState)(null),m=(0,x.Z)(d,2),Z=m[0],b=m[1],j=(0,f.useState)(null),w=(0,x.Z)(j,2),k=w[0],C=w[1],L=(0,q.lr)({currentPage:1}),S=(0,x.Z)(L,2),P=S[0],R=S[1],_=P.get("query"),E=P.get("currentPage");(0,f.useEffect)((function(){E===k&&h.Am.info("It's the last page")}),[E,k]),(0,f.useEffect)((function(){s&&(c(!0),y(s,E).then((function(n){var e=n.hits,t=n.totalHits;if(!e||!e.length)return h.Am.warn("No images found for your request"),void c(!1);r((function(n){return[].concat((0,g.Z)(n),(0,g.Z)(e))})),b(t),C(Math.ceil(t/v.LZ))})).catch((function(n){console.log("err: ",n),h.Am.warn("Ups....something wrong!!!")})).finally((function(){c(!1)})))}),[s,E]);return(0,U.jsxs)(I,{children:[(0,U.jsx)(z,{onChangeQuery:function(n){p(n),r([]),b(null),C(null)}}),(0,U.jsx)(D,{currentPage:E,onChangePage:function(){R({currentPage:Number(E)+1,query:_})},totalPages:k,totalImg:Z,gallery:t}),o&&(0,U.jsx)(H.T,{})]})}},811:function(n,e,t){t.d(e,{Z:function(){return c}});var r,a=t(168),i=t(4934).Z.button(r||(r=(0,a.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n\n  :hover {\n    opacity: 1;\n  }\n"]))),o=t(3329),c=function(n){var e=n.children,t=n.type,r=n.onClick,a=(n.icon,n.id),c=void 0===a?"none":a;return(0,o.jsx)(i,{type:t,onClick:r,id:c,children:e})}},863:function(n,e,t){t.d(e,{T:function(){return a}});t(2791);var r=t(3329),a=function(){return(0,r.jsx)("div",{className:"spinner-container",children:(0,r.jsx)("div",{className:"loading-spinner"})})}}}]);
//# sourceMappingURL=715.57832277.chunk.js.map