(this["webpackJsonpaudio-player"]=this["webpackJsonpaudio-player"]||[]).push([[0],{132:function(e,n,t){"use strict";t.r(n);var r,a,i,c,o,u,l,s,d,f,b,j=t(0),p=t(25),h=t(153),x=t(80),O=t(14),g=t.n(O),v=t(21),m=t(8),w=function(){var e=Object(v.a)(g.a.mark((function e(){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://player-b7f2.restdb.io/rest/air-channels",{headers:{"x-apikey":"6189adf1fc71545b0f5e060a"}});case 2:return e.next=4,e.sent.json();case 4:return n=e.sent,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(e,n){return!(!e||!n)&&e.toString()===n.toString()},C=function(){for(var e=[500,640],n=[window.outerWidth,window.outerHeight],t=n,r=0;r<t.length;r++)t[r]=e[r]>n[r]?e[r]:n[r];window.resizeTo(t[0],t[1])},k=t(3),S=Object(j.createContext)({channels:[],favouriteChannels:void 0,currentChannel:null,isPlaying:!1,updateCurrentChannel:function(e){},togglePlayBack:function(){},nextChannel:function(){},prevChannel:function(){},toggleFavouriteChannel:function(e){}}),E=function(e){var n=e.children,t=window.location.search,r=new URLSearchParams(t).get("channelId"),a=Object(j.useState)(null),i=Object(m.a)(a,2),c=i[0],o=i[1],u=Object(j.useState)(!1),l=Object(m.a)(u,2),s=l[0],d=l[1],f=Object(j.useState)([]),b=Object(m.a)(f,2),p=b[0],h=b[1],O=Object(j.useState)(),C=Object(m.a)(O,2),E=C[0],R=C[1],P="favouriteChannels",z="currentChannel";Object(j.useEffect)((function(){I()}),[]);var I=function(){var e=Object(v.a)(g.a.mark((function e(){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=h,e.next=3,w();case 3:e.t1=e.sent,(0,e.t0)(e.t1),(n=localStorage.getItem(P))&&R(JSON.parse(n));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=Object(j.useCallback)((function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=p.find((function(n){return y(n.id,e)}));t&&o(t),n&&!s&&d(!0)}),[p,s]),A=Object(j.useCallback)((function(){return p.findIndex((function(e){return c&&y(e.id,c.id)}))}),[p,c]);Object(j.useEffect)((function(){if(p&&p.length)if(r)L(r,!1);else{var e=localStorage.getItem(z);if(e)try{o(JSON.parse(e))}catch(n){console.log({error:n})}}}),[p,r,L]),Object(j.useEffect)((function(){c&&localStorage.setItem(z,JSON.stringify(c))}),[c]),Object(j.useEffect)((function(){E&&localStorage.setItem(P,JSON.stringify(E))}),[E]);var F=Object(j.useCallback)((function(){var e=A();e<p.length-1?o(p[e+1]):o(p[0])}),[p,A]),T=Object(j.useCallback)((function(){var e=A();o(e>=1?p[e-1]:p[p.length-1])}),[p,A]);return Object(k.jsx)(S.Provider,{value:{channels:p,favouriteChannels:E,currentChannel:c,isPlaying:s,updateCurrentChannel:L,togglePlayBack:function(){d((function(e){return!e}))},nextChannel:F,prevChannel:T,toggleFavouriteChannel:function(e){if(E&&E.find((function(n){return y(n.id,e.id)})))return void R((function(n){return null===n||void 0===n?void 0:n.filter((function(n){return!y(n.id,e.id)}))}));R((function(n){return n||(n=[]),[].concat(Object(x.a)(n),[e])}))}},children:n})},R=function(){return Object(j.useContext)(S)},P=t(69),z=t(70),I=t(81),L=t(79),A=function(e){Object(I.a)(t,e);var n=Object(L.a)(t);function t(){var e;Object(P.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=n.call.apply(n,[this].concat(a))).state={hasError:!1},e}return Object(z.a)(t,[{key:"componentDidCatch",value:function(e,n){console.log(e,n)}},{key:"render",value:function(){return this.state.hasError?Object(k.jsx)("h1",{children:"Something went wrong."}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){if(e)return console.log(e),{hasError:!0}}}]),t}(j.Component),F=t(9),T=t(156),B=t(157),D=t(158),J=t(155),M=t(144),N=t(1),U=N.default.div(r||(r=Object(F.a)(["\n  position: sticky;\n  top: 0;\n  z-index: 3;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background-color: #fff;\n  background-color: var(--bg-primary-color);\n  filter: drop-shadow(0 0 0.20rem black);\n"]))),W=N.default.div(a||(a=Object(F.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  justify-content: space-between;\n  padding: 0 20px;\n  height: 72px;\n  border-bottom: 1px solid grey;\n  background-color: #404040;\n  align-items: center;\n"]))),_=N.default.img(i||(i=Object(F.a)(["\n  border-radius: 50%;\n  width: 48px;\n  ::before {\n     content: '';\n     width: 48px;\n     height: 48px;\n     background-color: #ccc;\n     border-radius: 50%;\n     position: absolute;\n     top: 50%;\n     left: 24px;\n     transform: translateY(-50%);\n }\n"]))),H=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.filter((function(e){return e.title.toLowerCase().indexOf(n.toLowerCase())>=0})).map((function(e,n,t){return{label:Object(k.jsxs)(T.a,{direction:"row",align:"center",gap:"small",border:n<t.length-1?"bottom":void 0,pad:"small",children:[Object(k.jsx)(B.a,{width:"80px",src:e.imageSrc,style:{borderRadius:"8px"}}),Object(k.jsx)(D.a,{size:"small",children:null===e||void 0===e?void 0:e.title})]}),value:e.title,channel:e}}))},Y=function(){var e=R(),n=e.channels,t=e.updateCurrentChannel,r=Object(j.useState)(),a=Object(m.a)(r,2),i=a[0],c=a[1],o=Object(j.useState)(!1),u=Object(m.a)(o,2),l=u[0],s=u[1],d=Object(j.useState)([]),f=Object(m.a)(d,2),b=f[0],p=f[1],h=Object(j.useState)(""),x=Object(m.a)(h,2),O=x[0],g=x[1];Object(j.useEffect)((function(){i&&i.id&&t(i.id)}),[i,t]);var v=Object(j.useCallback)((function(e){var t=e.target.value;g(t),c(t),t.trim()?p(H(n,t)):p([])}),[n]),w=Object(j.useCallback)((function(e){c(e.suggestion.channel),g(e.suggestion.value)}),[]),y=Object(j.useCallback)((function(){p(H(n,null===i||void 0===i?void 0:i.title)),s(!0)}),[n,i]),C=Object(j.useCallback)((function(){p([]),s(!1),c(void 0),g("")}),[]);return Object(k.jsx)(U,{children:Object(k.jsxs)(W,{children:[Object(k.jsx)(_,{src:"/audio-player/assets/icons/icon-x192.png",alt:"Logo"}),Object(k.jsx)(T.a,{width:"medium",gap:"medium",direction:"row",align:"center",elevation:l?"medium":void 0,style:l?{borderBottomLeftRadius:"0px",borderBottomRightRadius:"0px"}:void 0,pad:{left:"large"},children:Object(k.jsx)(J.a,{icon:Object(k.jsx)(M.a,{}),reverse:!0,placeholder:"search",suggestions:b,value:O,onChange:v,onSuggestionsOpen:y,onSuggestionsClose:C,onSuggestionSelect:w})})]})})},K=t(76),q=t(12),G=Object(q.deepMerge)(K.dark,{global:{drop:{background:"#444444",shadowSize:"medium",extend:"\n          border-bottom-left-radius: 12px;\n          border-bottom-right-radius: 12px;\n          overflow: hidden;\n        "},elevation:{dark:{medium:"0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)"},light:{medium:"0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)"}},font:{size:"14px",family:"Sora"},input:{weight:400}}}),Q=t(162),V=t(58),X=N.default.div(c||(c=Object(F.a)([""]))),Z=N.default.div(o||(o=Object(F.a)(["\n  margin: 12px 20px;\n"]))),$=N.default.div(u||(u=Object(F.a)(["\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center;\n  gap: 18px;\n  padding: 10px;\n  max-width: 800px;\n"]))),ee=N.default.div.attrs((function(e){return{style:{backgroundImage:"url(".concat(e.image,")")}}}))(l||(l=Object(F.a)(["\n  border-radius: 8px;\n  overflow: hidden;\n  position: relative;\n  display: flex;\n  cursor: pointer;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  width: 160px;\n  height: 160px;\n  border: 0.2px solid white;\n  background-color: white;\n  filter: drop-shadow(0 0 0.15rem white);\n\n  :hover {\n    opacity: 0.8;\n    cursor: pointer;\n  }\n"]))),ne=function(e){var n=R().updateCurrentChannel;return Object(k.jsx)(ee,{image:e.imageSrc,onClick:function(){n(e.id)}})},te=function(){var e=R(),n=e.channels,t=e.favouriteChannels;return Object(k.jsxs)(X,{children:[t&&t.length&&Object(k.jsxs)(j.Fragment,{children:[Object(k.jsx)(Z,{children:"Your favourite Stations"}),Object(k.jsx)($,{children:t.map((function(e){return Object(k.jsx)(ne,Object(V.a)({},e),e.id)}))})]}),Object(k.jsx)(Z,{children:"On-Air Stations"}),Object(k.jsx)($,{children:n.map((function(e){return Object(k.jsx)(ne,Object(V.a)({},e),e.id)}))})]})},re=t(152),ae=t(151),ie=t(15),ce=t.n(ie),oe=t(77),ue=t(78),le=t(145),se=t(146),de=N.default.div(s||(s=Object(F.a)(["\n  display: flex;\n  align-items: center;\n  font-size: 16px;\n  flex: 1;\n  gap:  ",";\n  padding: ",";\n  width: ",";\n  flex-direction: ",";\n  cursor: pointer;\n"])),(function(e){return e.expanded?"50px":"10px"}),(function(e){return e.expanded?"50px":void 0}),(function(e){return e.expanded?"100%":void 0}),(function(e){return e.expanded?"column":"row"})),fe=function(e){var n=e.isExpanded,t=e.isLoading,r=e.hasError,a=e.currentChannel,i=e.onClick,c=Object(j.useState)(!1),o=Object(m.a)(c,2),u=o[0],l=o[1],s=Object(j.useState)(!1),d=Object(m.a)(s,2),f=d[0],b=d[1],p=R(),h=p.favouriteChannels,x=p.toggleFavouriteChannel;Object(j.useEffect)((function(){l(n)}),[n]),Object(j.useEffect)((function(){if((null===a||void 0===a?void 0:a.id)&&h){var e=h.find((function(e){return y(e.id,a.id)}));e&&e.id?b(!0):b(!1)}}),[h,a]);var O=function(){var e=Object(v.a)(g.a.mark((function e(){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a&&a.id){e.next=2;break}return e.abrupt("return");case 2:if(!navigator.share){e.next=13;break}return(n=new URLSearchParams).set("channelId",a.id),e.prev=5,e.next=8,navigator.share({title:a.title,text:"Check out this online radio channel",url:"".concat(window.location.href.replace(window.location.search,""),"?").concat(n.toString())});case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(5),console.log("Unable to share ".concat(e.t0));case 13:case"end":return e.stop()}}),e,null,[[5,10]])})));return function(){return e.apply(this,arguments)}}();return Object(k.jsxs)(de,{expanded:u,onClick:function(){l(!0),i(!0)},children:[(null===a||void 0===a?void 0:a.imageSrc)&&Object(k.jsx)(oe.Image,{src:a.imageSrc,width:u?"70%":60,style:{maxHeight:"30vh",maxWidth:"30vh"}}),u&&Object(k.jsxs)(T.a,{direction:"row",justify:"between",width:"100%",pad:"0 15px",margin:"-80px 0 0",children:[Object(k.jsx)(re.a,{size:"large",icon:Object(k.jsx)(le.a,{}),primary:f,onClick:function(){x(a)}}),Object(k.jsx)(re.a,{size:"large",icon:Object(k.jsx)(se.a,{}),onClick:O})]}),Object(k.jsx)(ue.Text,{size:u?"xlarge":"small",textAlign:"start",children:null===a||void 0===a?void 0:a.title}),t&&!r&&Object(k.jsx)(Q.a,{})]})},be=t(147),je=t(148),pe=t(149),he=t(150),xe=N.default.div(d||(d=Object(F.a)(["\n  display: flex;\n  align-items: center;\n"]))),Oe=function(){var e=R(),n=e.currentChannel,t=e.isPlaying,r=e.togglePlayBack,a=e.nextChannel,i=e.prevChannel;return n?Object(k.jsxs)(xe,{children:[Object(k.jsx)(re.a,{icon:Object(k.jsx)(be.a,{}),onClick:function(){return i()}}),Object(k.jsx)(re.a,{icon:t?Object(k.jsx)(je.a,{}):Object(k.jsx)(pe.a,{}),onClick:function(){return r()},plain:!1,size:"large"}),Object(k.jsx)(re.a,{icon:Object(k.jsx)(he.a,{}),onClick:function(){return a()}})]}):Object(k.jsx)(j.Fragment,{})},ge=N.default.div(f||(f=Object(F.a)(["\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: rgba(64, 64, 64, ","%);\n  color: white;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  padding:  ",";\n  flex-direction: ",";\n  justify-content: ",";\n  box-sizing: border-box;\n  filter: drop-shadow(0 0 0.20rem black);\n  height: ",";\n  transition: height 0.15s ease-in;\n"])),(function(e){return e.expanded?100:80}),(function(e){return e.expanded?"80px 0":"6px 10px"}),(function(e){return e.expanded?"column":"row"}),(function(e){return e.expanded?"space-around":"space-between"}),(function(e){return e.expanded?"100%":"80px"})),ve=function(e){var n=window.location.search,t=new URLSearchParams(n).get("channelId"),r=Object(j.useState)(!1),a=Object(m.a)(r,2),i=a[0],c=a[1],o=Object(j.useState)(!1),u=Object(m.a)(o,2),l=u[0],s=u[1],d=R(),f=d.currentChannel,b=d.isPlaying,p=Object(j.useState)(!1),h=Object(m.a)(p,2),x=h[0],O=h[1],g=Object(j.useRef)(null),v=Object(j.useCallback)((function(n){var t=new ce.a({enableWorker:!0});return null!=g.current&&t.attachMedia(g.current),t.on(ce.a.Events.MEDIA_ATTACHED,(function(){s(!1),c(!0),t.loadSource(n),t.on(ce.a.Events.MANIFEST_PARSED,(function(){var n;(c(!1),e.autoPlay)&&(null===g||void 0===g||null===(n=g.current)||void 0===n||n.play().catch((function(){return console.log("Unable to autoplay prior to user interaction with the dom.")})))}))})),t.on(ce.a.Events.ERROR,(function(e,n){if(s(!0),n.fatal)switch(n.type){case ie.ErrorTypes.NETWORK_ERROR:t.stopLoad();break;case ie.ErrorTypes.MEDIA_ERROR:t.recoverMediaError()}})),t}),[e.autoPlay]);return Object(j.useEffect)((function(){var e;return ce.a.isSupported()&&(null===f||void 0===f?void 0:f.audioSrc)&&(e=v(null===f||void 0===f?void 0:f.audioSrc),document.title="Radio - ".concat(f.title)),function(){null!=e&&e.destroy()}}),[v,f]),Object(j.useEffect)((function(){f&&y(f.id,t)&&O(!0)}),[f,t]),Object(j.useEffect)((function(){var e;b?setTimeout((function(){var e;(null===(e=g.current)||void 0===e?void 0:e.paused)&&!i&&(null===g||void 0===g||g.current.play())}),0):null===(e=g.current)||void 0===e||e.pause()}),[b,i]),(null===f||void 0===f?void 0:f.audioSrc)?Object(k.jsxs)(ge,{expanded:x,children:[ce.a.isSupported()?Object(k.jsx)("audio",{ref:g}):Object(k.jsx)("audio",{ref:g,src:null===f||void 0===f?void 0:f.audioSrc,autoPlay:e.autoPlay}),x&&Object(k.jsx)(re.a,{icon:Object(k.jsx)(ae.a,{size:"large"}),onClick:function(){return O(!1)}}),Object(k.jsx)(fe,{hasError:l,isExpanded:x,isLoading:i,currentChannel:f,onClick:function(e){O(e)}}),Object(k.jsx)(Oe,{})]}):Object(k.jsx)(j.Fragment,{})},me=N.default.div(b||(b=Object(F.a)(["\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 80px;\n"]))),we=function(){var e=R(),n=e.channels,t=e.isPlaying,r=Object(j.useState)(!1),a=Object(m.a)(r,2),i=a[0],c=a[1];return Object(j.useEffect)((function(){t&&!i&&c(!0)}),[i,t]),Object(k.jsx)(me,{children:n&&n.length?Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(te,{}),Object(k.jsx)(ve,{autoPlay:i})]}):Object(k.jsx)(Q.a,{})})},ye=function(){return Object(j.useEffect)((function(){return window.addEventListener("resize",C),window.addEventListener("load",C),function(){window.removeEventListener("resize",C),window.removeEventListener("load",C)}}),[]),Object(k.jsx)(A,{children:Object(k.jsx)(h.a,{full:!0,theme:G,children:Object(k.jsxs)(E,{children:[Object(k.jsx)(Y,{}),Object(k.jsx)(we,{})]})})})};Object(p.render)(Object(k.jsx)(ye,{}),document.getElementById("root"))}},[[132,1,2]]]);
//# sourceMappingURL=main.61db9b89.chunk.js.map