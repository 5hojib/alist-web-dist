!function(){function e(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,o,i=[],c=!0,u=!1;try{for(t=t.call(e);!(c=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);c=!0);}catch(a){u=!0,o=a}finally{try{c||null==t.return||t.return()}finally{if(u)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}System.register(["./index-legacy.23be00d9.js","./index-legacy.576a3509.js","./index-legacy.35749d9c.js"],(function(n,t){"use strict";var r,o,i,c,u,a,l,s,m,g,d,f,p,h,b,v,y,$,z,E,A,j,S,w,C,k,I,x,O,L,T,R,_,G,P,U,D,M,Y,B,N,V,W,q,H,X,F,J,Q,K,Z,ee,ne,te,re,oe,ie,ce,ue,ae,le,se,me,ge,de;return{setters:[function(e){r=e.f,o=e.v,i=e.W,c=e.t,u=e.a2,a=e.a3,l=e.bg,s=e.U,m=e.R,g=e.u,d=e.d,f=e.L,p=e.z,h=e.m,b=e.ah,v=e.bh,y=e.e,$=e.bi,z=e.a0,E=e.Y,A=e.al,j=e.G,S=e.H,w=e.bj,C=e.bk,k=e.bl,I=e.at,x=e.J,O=e.a6,L=e.bm,T=e.bn,R=e.n,_=e.b0,G=e.aU,P=e.aV,U=e.aW,D=e.aX,M=e.aY,Y=e.ak,B=e.a_,N=e.a$,V=e.bo,W=e.bp,q=e.bq},function(e){H=e.d,X=e.e,F=e.f,J=e.g,Q=e.h,K=e.i,Z=e.j,ee=e.k,ne=e.l,te=e.m,re=e.b,oe=e.n,ie=e.o,ce=e.c},function(e){ue=e.A,ae=e.d,le=e.e,se=e.f,me=e.g,ge=e.h,de=e.i}],execute:function(){var fe=n("G",function(e){return e[e.SINGLE=0]="SINGLE",e[e.SITE=1]="SITE",e[e.STYLE=2]="STYLE",e[e.PREVIEW=3]="PREVIEW",e[e.GLOBAL=4]="GLOBAL",e[e.ARIA2=5]="ARIA2",e[e.INDEX=6]="INDEX",e[e.SSO=7]="SSO",e}(fe||{})),pe=n("F",function(e){return e[e.PUBLIC=0]="PUBLIC",e[e.PRIVATE=1]="PRIVATE",e[e.READONLY=2]="READONLY",e[e.DEPRECATED=3]="DEPRECATED",e}(pe||{})),he=function(e){var n=c((function(){if(!u.is_admin(a())){if(void 0===e.role)return!1;if(e.role===l.GENERAL&&!u.is_general(a()))return!1}return!0}));return r(m,{get fallback(){return r(be,e)},get children(){return[r(s,{get when(){return!n()},children:null}),r(s,{get when(){return e.children},get children(){return r(ve,e)}})]}})},be=function(e){var n=g().pathname,t=d(),o=function(){return n()===e.to};return r(ue,{get cancelBase(){return e.to.startsWith("http")},display:"flex",as:f,get href(){return e.to},onClick:function(n){var t;(Se(),e.refresh)&&(null===(t=n.stopPropagation)||void 0===t||t.call(n),window.open(e.to,"_self"))},w:"$full",alignItems:"center",get _hover(){return{bgColor:o()?"$info4":p(),textDecoration:"none"}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get bgColor(){return o()?"$info4":""},get color(){return o()?"$info11":""},get external(){return e.external},get children(){return[r(h,{get when(){return e.icon},get children(){return r(b,{mr:"$2",get as(){return e.icon}})}}),r(v,{get children(){return t(e.title)}})]}})},ve=function(n){var t=g().pathname,o=e(y(t().includes(n.to)),2),i=o[0],c=o[1],u=d();return r(E,{w:"$full",get children(){return[r($,{justifyContent:"space-between",onClick:function(){c(!i())},w:"$full",alignItems:"center",get _hover(){return{bgColor:p()}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get children(){return[r(z,{get children(){return[r(h,{get when(){return n.icon},get children(){return r(b,{mr:"$2",get as(){return n.icon}})}}),r(v,{get children(){return u(n.title)}})]}}),r(b,{as:ae,get transform(){return i()?"rotate(90deg)":"none"},transition:"transform 0.2s"})]}}),r(h,{get when(){return i()},get children(){return r(E,{pl:"$2",get children(){return r(ye,{get items(){return n.children}})}})}})]}})},ye=function(e){return r(i,{p:"$2",w:"$full",color:"$neutral11",spacing:"$1",get children(){return r(o,{get each(){return e.items},children:function(e){return r(he,e)}})}})};var $e=j((function(){return S((function(){return t.import("./Common-legacy.1974baae.js")}),void 0)})),ze=[{title:"manage.sidemenu.profile",icon:H,to:"/@manage",role:l.GUEST,component:j((function(){return S((function(){return t.import("./Profile-legacy.fbae9a2d.js")}),void 0)}))},{title:"manage.sidemenu.settings",icon:X,to:"/@manage/settings",children:[{title:"manage.sidemenu.site",icon:F,to:"/@manage/settings/site",component:function(){return r($e,{get group(){return fe.SITE}})}},{title:"manage.sidemenu.style",icon:J,to:"/@manage/settings/style",component:function(){return r($e,{get group(){return fe.STYLE}})}},{title:"manage.sidemenu.preview",icon:Q,to:"/@manage/settings/preview",component:function(){return r($e,{get group(){return fe.PREVIEW}})}},{title:"manage.sidemenu.global",icon:K,to:"/@manage/settings/global",component:function(){return r($e,{get group(){return fe.GLOBAL}})}},{title:"manage.sidemenu.sso",icon:w,to:"/@manage/settings/sso",component:function(){return r($e,{get group(){return fe.SSO}})}},{title:"manage.sidemenu.other",icon:Z,to:"/@manage/settings/other",component:j((function(){return S((function(){return t.import("./Other-legacy.5c6e4023.js")}),void 0)}))}]},{title:"manage.sidemenu.tasks",icon:function(e){return A({a:{viewBox:"0 0 16 16"},c:'<path fill-rule="evenodd" d="M0 1.75C0 .784.784 0 1.75 0h3.5C6.216 0 7 .784 7 1.75v3.5A1.75 1.75 0 015.25 7H4v4a1 1 0 001 1h4v-1.25C9 9.784 9.784 9 10.75 9h3.5c.966 0 1.75.784 1.75 1.75v3.5A1.75 1.75 0 0114.25 16h-3.5A1.75 1.75 0 019 14.25v-.75H5A2.5 2.5 0 012.5 11V7h-.75A1.75 1.75 0 010 5.25v-3.5zm1.75-.25a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5zm9 9a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5z"/>'},e)},to:"/@manage/tasks",children:[{title:"manage.sidemenu.aria2",icon:ee,to:"/@manage/tasks/aria2",component:j((function(){return S((function(){return t.import("./Aria2-legacy.87bab828.js")}),void 0)}))},{title:"manage.sidemenu.qbit",icon:le,to:"/@manage/tasks/qbit",component:j((function(){return S((function(){return t.import("./Qbit-legacy.a7625248.js")}),void 0)}))},{title:"manage.sidemenu.upload",icon:ne,to:"/@manage/tasks/upload",component:j((function(){return S((function(){return t.import("./Upload-legacy.03c45fb7.js")}),void 0)}))},{title:"manage.sidemenu.copy",icon:C,to:"/@manage/tasks/copy",component:j((function(){return S((function(){return t.import("./Copy-legacy.efa58d7c.js")}),void 0)}))}]},{title:"manage.sidemenu.users",icon:te,to:"/@manage/users",component:j((function(){return S((function(){return t.import("./Users-legacy.7b378cf4.js")}),void 0)}))},{title:"manage.sidemenu.storages",icon:se,to:"/@manage/storages",component:j((function(){return S((function(){return t.import("./Storages-legacy.30f3c1a3.js")}),void 0)}))},{title:"manage.sidemenu.metas",icon:function(e){return A({a:{viewBox:"0 0 24 24"},c:'<path d="M5.385 6.136c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-1.438 2.63c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zm5.465-2.63c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.499-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm-1.088 5.592c.794 0 1.438-.654 1.438-1.461s-.644-1.461-1.438-1.461-1.438.654-1.438 1.461.643 1.461 1.438 1.461zm5.464-5.592c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111S11.4 7.247 12 7.247s1.088-.498 1.088-1.111zm.35-4.675c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461S11.206 0 12 0s1.438.654 1.438 1.461zm-.35 0C13.088.848 12.6.35 12 .35s-1.088.498-1.088 1.111S11.4 2.572 12 2.572s1.088-.498 1.088-1.111zm.35 8.806c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.499 1.088-1.111zm4.376-4.131c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm2.939 1.461c.794 0 1.438-.654 1.438-1.461s-.644-1.461-1.438-1.461-1.438.654-1.438 1.461.644 1.461 1.438 1.461zm-4.027 1.209c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.643-1.461-1.438-1.461zm4.027 0c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zM3.947 12.857a1.45 1.45 0 00-1.438 1.461c0 .807.644 1.461 1.438 1.461s1.438-.654 1.438-1.461a1.45 1.45 0 00-1.438-1.461zm5.465 1.5c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.655 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zM12 12.896c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zm5.464 1.461c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.655 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm2.939-1.461c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zM3.947 16.948c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zm5.465 1.5c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm4.376 0c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm.35 4.091c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111S11.4 23.65 12 23.65s1.088-.498 1.088-1.111zm4.376-4.091c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm2.939-1.461c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461z"/>'},e)},to:"/@manage/metas",component:j((function(){return S((function(){return t.import("./Metas-legacy.e560f01b.js")}),void 0)}))},{title:"manage.sidemenu.indexes",icon:re,to:"/@manage/indexes",component:j((function(){return S((function(){return t.import("./indexes-legacy.dbe780d0.js")}),void 0)}))},{title:"manage.sidemenu.backup-restore",to:"/@manage/backup-restore",icon:me,component:j((function(){return S((function(){return t.import("./backup-restore-legacy.6d9c973b.js")}),void 0)}))},{title:"manage.sidemenu.about",icon:oe,to:"/@manage/about",role:l.GUEST,component:j((function(){return S((function(){return t.import("./About-legacy.6e78d0db.js")}),void 0)}))},{title:"manage.sidemenu.docs",icon:ge,to:"https://alist.nn.ci",role:l.GUEST,external:!0},{title:"manage.sidemenu.home",icon:k,to:"/",role:l.GUEST,refresh:!0}],Ee=I(),Ae=Ee.isOpen,je=Ee.onOpen,Se=Ee.onClose,we=function(){var e=d(),n=g().to;return r(E,{as:"header",position:"sticky",top:"0",left:"0",right:"0",zIndex:"$sticky",height:"64px",flexShrink:0,shadow:"$md",p:"$4",get bgColor(){return x("$background","$neutral2")()},get children(){return[r($,{alignItems:"center",justifyContent:"space-between",h:"$full",get children(){return[r(z,{spacing:"$2",get children(){return[r(O,{"aria-label":"menu",get icon(){return r(de,{})},display:{"@sm":"none"},onClick:je,size:"sm"}),r(v,{fontSize:"$xl",color:"$info9",cursor:"pointer",onClick:function(){n("/@manage")},get children(){return e("manage.title")}})]}}),r(z,{spacing:"$1",get children(){return r(O,{"aria-label":"logout",get icon(){return r(L,{})},onClick:function(){T(),R.success(e("manage.logout_success")),n("/@login?redirect=".concat(encodeURIComponent(location.pathname)))},size:"sm"})}})]}}),r(_,{get opened(){return Ae()},placement:"left",onClose:Se,get children(){return[r(G,{}),r(P,{get children(){return[r(U,{}),r(D,{color:"$info9",get children(){return e("manage.title")}}),r(M,{get children(){return[r(ye,{items:ze}),r(Y,{get children(){return r(z,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[r(B,{}),r(N,{})]}})}})]}})]}})]}})]}})},Ce=[{to:"/storages/add",component:j((function(){return S((function(){return t.import("./AddOrEdit-legacy.6d3898b2.js")}),void 0)}))},{to:"/storages/edit/:id",component:j((function(){return S((function(){return t.import("./AddOrEdit-legacy.6d3898b2.js")}),void 0)}))},{to:"/users/add",component:j((function(){return S((function(){return t.import("./AddOrEdit-legacy.078cfde3.js")}),void 0)}))},{to:"/users/edit/:id",component:j((function(){return S((function(){return t.import("./AddOrEdit-legacy.078cfde3.js")}),void 0)}))},{to:"/metas/add",component:j((function(){return S((function(){return t.import("./AddOrEdit-legacy.2687eb96.js")}),void 0)}))},{to:"/metas/edit/:id",component:j((function(){return S((function(){return t.import("./AddOrEdit-legacy.2687eb96.js")}),void 0)}))},{to:"/2fa",component:j((function(){return S((function(){return t.import("./2fa-legacy.5d268a47.js")}),void 0)}))},{to:"/messenger",component:j((function(){return S((function(){return t.import("./Messenger-legacy.0a3c6add.js")}),void 0)}))}],ke=function(e){return ie(e.title),r(Y,{h:"$full",get children(){return r(v,{get children(){return e.title}})}})},Ie=function e(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return n.forEach((function(n){n.children?e(n.children,t):t.push({to:V(n.to,"/@manage"),component:n.component||function(){return r(ke,{get title(){return n.title},get to(){return n.to||"empty"}})}})})),t}(ze).concat(Ce),xe=Object.freeze(Object.defineProperty({__proto__:null,default:function(){var e=d();return ce((function(){return e("manage.title")})),r(E,{css:{"--hope-colors-background":"var(--hope-colors-loContrast)"},bgColor:"$background",w:"$full",get children(){return[r(we,{}),r($,{w:"$full",h:"calc(100vh - 64px)",get children(){return[r(E,{display:{"@initial":"none","@sm":"block"},w:"$56",h:"$full",shadow:"$md",get bgColor(){return x("$background","$neutral2")()},overflowY:"auto",get children(){return[r(ye,{items:ze}),r(Y,{get children(){return r(z,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[r(B,{}),r(N,{})]}})}})]}}),r(E,{w:{"@initial":"$full","@sm":"calc(100% - 14rem)"},p:"$4",overflowY:"auto",get children(){return r(W,{get children(){return r(o,{each:Ie,children:function(e){return r(q,{get path(){return e.to},get component(){return e.component}})}})}})}})]}})]}})}},Symbol.toStringTag,{value:"Module"}));n("i",xe)}}}))}();
