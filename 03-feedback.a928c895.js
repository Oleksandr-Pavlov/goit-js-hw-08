function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return l.Date.now()};function p(e,t,n){var o,r,i,a,u,f,c=0,l=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function T(e){return c=e,u=setTimeout(j,t),l?b(e):a}function x(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=i}function j(){var e=v();if(x(e))return S(e);u=setTimeout(j,function(e){var n=t-(e-f);return s?m(n,i-(e-c)):n}(e))}function S(e){return u=void 0,p&&o?b(e):(o=r=void 0,a)}function h(){var e=v(),n=x(e);if(o=arguments,r=this,f=e,n){if(void 0===u)return T(f);if(s)return u=setTimeout(j,t),b(f)}return void 0===u&&(u=setTimeout(j,t)),a}return t=y(t)||0,g(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(y(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),h.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=f=r=u=void 0},h.flush=function(){return void 0===u?a:S(v())},h}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:o,maxWait:t,trailing:r})};const b={form:document.querySelector(".feedback-form"),emailInput:document.querySelector("input"),messageText:document.querySelector("textarea")},T={};b.form.addEventListener("input",e(t)((function(e){T[e.target.name]=e.target.value,console.log(T),localStorage.setItem("feedback-form-state",JSON.stringify(T))}),500)),b.form.addEventListener("submit",(function(e){if(e.preventDefault(),""===b.emailInput.value||""===b.messageText.value)return void alert("Не заповнені всі поля");console.log("Отправляем форму"),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")})),function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&(b.emailInput.value=e.email,b.messageText.value=e.message)}();
//# sourceMappingURL=03-feedback.a928c895.js.map
