(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[943],{5095:function(e,t,n){var r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,u=/^0o[0-7]+$/i,c=parseInt,a="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,l="object"==typeof self&&self&&self.Object===Object&&self,f=a||l||Function("return this")(),s=Object.prototype.toString,p=Math.max,y=Math.min,b=function(){return f.Date.now()};function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function d(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||u.test(e)?c(e.slice(2),n?2:8):o.test(e)?NaN:+e}e.exports=function(e,t,n){var r,o,i,u,c,a,l=0,f=!1,s=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(t){var n=r,i=o;return r=o=void 0,l=t,u=e.apply(i,n)}function g(e){return l=e,c=setTimeout(w,t),f?m(e):u}function O(e){var n=e-a;return void 0===a||n>=t||n<0||s&&e-l>=i}function w(){var e=b();if(O(e))return j(e);c=setTimeout(w,function(e){var n=t-(e-a);return s?y(n,i-(e-l)):n}(e))}function j(e){return c=void 0,h&&r?m(e):(r=o=void 0,u)}function P(){var e=b(),n=O(e);if(r=arguments,o=this,a=e,n){if(void 0===c)return g(a);if(s)return c=setTimeout(w,t),m(a)}return void 0===c&&(c=setTimeout(w,t)),u}return t=d(t)||0,v(n)&&(f=!!n.leading,i=(s="maxWait"in n)?p(d(n.maxWait)||0,t):i,h="trailing"in n?!!n.trailing:h),P.cancel=function(){void 0!==c&&clearTimeout(c),l=0,r=a=o=c=void 0},P.flush=function(){return void 0===c?u:j(b())},P}},6674:function(e,t,n){"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.DebounceInput=void 0;var o=c(n(2791)),i=c(n(5095)),u=["element","onChange","value","minLength","debounceTimeout","forceNotifyByEnter","forceNotifyOnBlur","onKeyDown","onBlur","inputRef"];function c(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d(e);if(t){var o=d(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return b(this,n)}}function b(e,t){if(t&&("object"===r(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return v(e)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(l,e);var t,n,r,c=y(l);function l(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),h(v(t=c.call(this,e)),"onChange",(function(e){e.persist();var n=t.state.value,r=t.props.minLength;t.setState({value:e.target.value},(function(){var o=t.state.value;o.length>=r?t.notify(e):n.length>o.length&&t.notify(f(f({},e),{},{target:f(f({},e.target),{},{value:""})}))}))})),h(v(t),"onKeyDown",(function(e){"Enter"===e.key&&t.forceNotify(e);var n=t.props.onKeyDown;n&&(e.persist(),n(e))})),h(v(t),"onBlur",(function(e){t.forceNotify(e);var n=t.props.onBlur;n&&(e.persist(),n(e))})),h(v(t),"createNotifier",(function(e){if(e<0)t.notify=function(){return null};else if(0===e)t.notify=t.doNotify;else{var n=(0,i.default)((function(e){t.isDebouncing=!1,t.doNotify(e)}),e);t.notify=function(e){t.isDebouncing=!0,n(e)},t.flush=function(){return n.flush()},t.cancel=function(){t.isDebouncing=!1,n.cancel()}}})),h(v(t),"doNotify",(function(){var e=t.props.onChange;e.apply(void 0,arguments)})),h(v(t),"forceNotify",(function(e){var n=t.props.debounceTimeout;if(t.isDebouncing||!(n>0)){t.cancel&&t.cancel();var r=t.state.value,o=t.props.minLength;r.length>=o?t.doNotify(e):t.doNotify(f(f({},e),{},{target:f(f({},e.target),{},{value:r})}))}})),t.isDebouncing=!1,t.state={value:"undefined"===typeof e.value||null===e.value?"":e.value};var n=t.props.debounceTimeout;return t.createNotifier(n),t}return t=l,(n=[{key:"componentDidUpdate",value:function(e){if(!this.isDebouncing){var t=this.props,n=t.value,r=t.debounceTimeout,o=e.debounceTimeout,i=e.value,u=this.state.value;"undefined"!==typeof n&&i!==n&&u!==n&&this.setState({value:n}),r!==o&&this.createNotifier(r)}}},{key:"componentWillUnmount",value:function(){this.flush&&this.flush()}},{key:"render",value:function(){var e,t,n=this.props,r=n.element,i=(n.onChange,n.value,n.minLength,n.debounceTimeout,n.forceNotifyByEnter),c=n.forceNotifyOnBlur,l=n.onKeyDown,s=n.onBlur,p=n.inputRef,y=a(n,u),b=this.state.value;e=i?{onKeyDown:this.onKeyDown}:l?{onKeyDown:l}:{},t=c?{onBlur:this.onBlur}:s?{onBlur:s}:{};var v=p?{ref:p}:{};return o.default.createElement(r,f(f(f(f({},y),{},{onChange:this.onChange,value:b},e),t),v))}}])&&s(t.prototype,n),r&&s(t,r),Object.defineProperty(t,"prototype",{writable:!1}),l}(o.default.PureComponent);t.DebounceInput=m,h(m,"defaultProps",{element:"input",type:"text",onKeyDown:void 0,onBlur:void 0,value:void 0,minLength:0,debounceTimeout:100,forceNotifyByEnter:!0,forceNotifyOnBlur:!0,inputRef:void 0})},3628:function(e,t,n){"use strict";var r=n(6674).DebounceInput;r.DebounceInput=r,e.exports=r},9e3:function(e,t,n){"use strict";n.d(t,{Vph:function(){return s}});var r=n(2791),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(o),u=function(){return u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},u.apply(this,arguments)},c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function a(e){return e&&e.map((function(e,t){return r.createElement(e.tag,u({key:t},e.attr),a(e.child))}))}function l(e){return function(t){return r.createElement(f,u({attr:u({},e.attr)},t),a(e.child))}}function f(e){var t=function(t){var n,o=e.attr,i=e.size,a=e.title,l=c(e,["attr","size","title"]),f=i||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",u({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,l,{className:n,style:u(u({color:e.color||t.color},t.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),a&&r.createElement("title",null,a),e.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(e){return t(e)})):t(o)}function s(e){return l({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"g",attr:{fill:"#616161"},child:[{tag:"rect",attr:{x:"34.6",y:"28.1",transform:"matrix(.707 -.707 .707 .707 -15.154 36.586)",width:"4",height:"17"}},{tag:"circle",attr:{cx:"20",cy:"20",r:"16"}}]},{tag:"rect",attr:{x:"36.2",y:"32.1",transform:"matrix(.707 -.707 .707 .707 -15.839 38.239)",fill:"#37474F",width:"4",height:"12.3"}},{tag:"circle",attr:{fill:"#64B5F6",cx:"20",cy:"20",r:"13"}},{tag:"path",attr:{fill:"#BBDEFB",d:"M26.9,14.2c-1.7-2-4.2-3.2-6.9-3.2s-5.2,1.2-6.9,3.2c-0.4,0.4-0.3,1.1,0.1,1.4c0.4,0.4,1.1,0.3,1.4-0.1 C16,13.9,17.9,13,20,13s4,0.9,5.4,2.5c0.2,0.2,0.5,0.4,0.8,0.4c0.2,0,0.5-0.1,0.6-0.2C27.2,15.3,27.2,14.6,26.9,14.2z"}}]})(e)}},5862:function(){},7231:function(e,t,n){"use strict";n.d(t,{y:function(){return b},Z:function(){return y}});var r=n(9439),o=n(9142);function i(e,t,n){return(t=(0,o.Z)(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=n(2791),f=["count","wrapper","className","containerClassName","containerTestId","circle","style"],s=["children"],p=l.createContext({});function y(e){for(var t,n,o,i=e.count,u=void 0===i?1:i,s=e.wrapper,y=e.className,b=e.containerClassName,v=e.containerTestId,d=e.circle,h=void 0!==d&&d,m=e.style,g=a(e,f),O=l.useContext(p),w=c({},g),j=0,P=Object.entries(g);j<P.length;j++){var N=(0,r.Z)(P[j],2),D=N[0];"undefined"===typeof N[1]&&delete w[D]}var E=c(c(c({},O),w),{},{circle:h}),x=c(c({},m),function(e){var t=e.baseColor,n=e.highlightColor,r=e.width,o=e.height,i=e.borderRadius,u=e.circle,c=e.direction,a=e.duration,l=e.enableAnimation,f=void 0===l||l,s={};return"rtl"===c&&(s["--animation-direction"]="reverse"),"number"===typeof a&&(s["--animation-duration"]="".concat(a,"s")),f||(s["--pseudo-element-display"]="none"),"string"!==typeof r&&"number"!==typeof r||(s.width=r),"string"!==typeof o&&"number"!==typeof o||(s.height=o),"string"!==typeof i&&"number"!==typeof i||(s.borderRadius=i),u&&(s.borderRadius="50%"),"undefined"!==typeof t&&(s["--base-color"]=t),"undefined"!==typeof n&&(s["--highlight-color"]=n),s}(E)),k="react-loading-skeleton";y&&(k+=" ".concat(y));for(var C=null!==(t=E.inline)&&void 0!==t&&t,B=[],S=Math.ceil(u),T=0;T<S;T++){var _=x;if(S>u&&T===S-1){var R=null!==(n=_.width)&&void 0!==n?n:"100%",I=u%1,K="number"===typeof R?R*I:"calc(".concat(R," * ").concat(I,")");_=c(c({},_),{},{width:K})}var M=l.createElement("span",{className:k,style:_,key:T},"\u200c");C?B.push(M):B.push(l.createElement(l.Fragment,{key:T},M,l.createElement("br",null)))}return l.createElement("span",{className:b,"data-testid":v,"aria-live":"polite","aria-busy":null===(o=E.enableAnimation)||void 0===o||o},s?B.map((function(e,t){return l.createElement(s,{key:t},e)})):B)}function b(e){var t=e.children,n=a(e,s);return l.createElement(p.Provider,{value:n},t)}}}]);
//# sourceMappingURL=943.c67626ff.chunk.js.map