"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{4146:function(e,t,n){n.d(t,{Z:function(){return v}});var r,a,c,o=n(7689),i=n(168),u=n(5706),s=n(1087),l=u.Z.ul(r||(r=(0,i.Z)(["\n  list-style: none;\n  font-size: 20px;\n  font-weight: 600;\n"]))),f=u.Z.li(a||(a=(0,i.Z)(["\n  padding: 6px 12px;\n  position: relative;\n"]))),p=(0,u.Z)(s.rU)(c||(c=(0,i.Z)(["\n  color: #0f1926;\n  text-decoration: none;\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover,\n  &:focus {\n    color: #cd1839;\n  }\n"]))),d=n(184),v=function(e){var t=e.films,n=(0,o.TH)();return(0,d.jsx)(l,{children:t.map((function(e){return(0,d.jsx)(f,{children:(0,d.jsx)(p,{to:"/movies/".concat(e.id),state:{from:n},cover:e.poster_path,children:e.title})},e.id)}))})}},5415:function(e,t,n){n.r(t);var r=n(5861),a=n(9439),c=n(4687),o=n.n(c),i=n(2791),u=n(7231),s=(n(5862),n(4146)),l=n(8565),f=n(184);t.default=function(){var e=(0,i.useState)([]),t=(0,a.Z)(e,2),n=t[0],c=t[1];return(0,i.useEffect)((function(){var e=function(){var e=(0,r.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.Df)();case 3:t=e.sent,c(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{children:"Trending Movies"}),(0,f.jsx)(u.y,{baseColor:"#0f1926",highlightColor:"#cd1839",children:0===n.length?(0,f.jsx)(u.Z,{count:15,style:{height:30,width:300,marginTop:15}}):(0,f.jsx)(s.Z,{films:n})})]})}},8565:function(e,t,n){n.d(t,{Df:function(){return u},Jh:function(){return f},V0:function(){return s},_r:function(){return p},s_:function(){return l}});var r=n(5861),a=n(4687),c=n.n(a),o=n(1243);o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="fab94b5e93d9dda4c924bebbb4c2a968",u=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("trending/movie/day?api_key=".concat(i));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("search/movie?api_key=".concat(i,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},5862:function(){},7231:function(e,t,n){n.d(t,{y:function(){return v},Z:function(){return d}});var r=n(9439),a=n(9142);function c(e,t,n){return(t=(0,a.Z)(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=n(2791),l=["count","wrapper","className","containerClassName","containerTestId","circle","style"],f=["children"],p=s.createContext({});function d(e){for(var t,n,a,c=e.count,o=void 0===c?1:c,f=e.wrapper,d=e.className,v=e.containerClassName,h=e.containerTestId,b=e.circle,y=void 0!==b&&b,m=e.style,g=u(e,l),w=s.useContext(p),x=i({},g),O=0,j=Object.entries(g);O<j.length;O++){var Z=(0,r.Z)(j[O],2),k=Z[0];"undefined"===typeof Z[1]&&delete x[k]}var _=i(i(i({},w),x),{},{circle:y}),P=i(i({},m),function(e){var t=e.baseColor,n=e.highlightColor,r=e.width,a=e.height,c=e.borderRadius,o=e.circle,i=e.direction,u=e.duration,s=e.enableAnimation,l=void 0===s||s,f={};return"rtl"===i&&(f["--animation-direction"]="reverse"),"number"===typeof u&&(f["--animation-duration"]="".concat(u,"s")),l||(f["--pseudo-element-display"]="none"),"string"!==typeof r&&"number"!==typeof r||(f.width=r),"string"!==typeof a&&"number"!==typeof a||(f.height=a),"string"!==typeof c&&"number"!==typeof c||(f.borderRadius=c),o&&(f.borderRadius="50%"),"undefined"!==typeof t&&(f["--base-color"]=t),"undefined"!==typeof n&&(f["--highlight-color"]=n),f}(_)),C="react-loading-skeleton";d&&(C+=" ".concat(d));for(var E=null!==(t=_.inline)&&void 0!==t&&t,S=[],D=Math.ceil(o),N=0;N<D;N++){var U=P;if(D>o&&N===D-1){var T=null!==(n=U.width)&&void 0!==n?n:"100%",R=o%1,I="number"===typeof T?T*R:"calc(".concat(T," * ").concat(R,")");U=i(i({},U),{},{width:I})}var z=s.createElement("span",{className:C,style:U,key:N},"\u200c");E?S.push(z):S.push(s.createElement(s.Fragment,{key:N},z,s.createElement("br",null)))}return s.createElement("span",{className:v,"data-testid":h,"aria-live":"polite","aria-busy":null===(a=_.enableAnimation)||void 0===a||a},f?S.map((function(e,t){return s.createElement(f,{key:t},e)})):S)}function v(e){var t=e.children,n=u(e,f);return s.createElement(p.Provider,{value:n},t)}}}]);
//# sourceMappingURL=415.9389d445.chunk.js.map