!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const r={IN_PROGRESS:0,LAST_MINUTES:1,BREAK:2};function o(e){let t=0,n=0;return t=u(e)?49-e.getMinutes():59-e.getMinutes(),60==(n=60-e.getSeconds())&&(n=0,t++),{sprint:e.getHours(),status:function(e,t){return function(e,t){const{minutes:n,seconds:r}=t;return u(e)&&(n<10||10==n&&0==r)}(e,t)?r.LAST_MINUTES:u(e)?r.IN_PROGRESS:r.BREAK}(e,{minutes:t,seconds:n}),minutes:t,seconds:n}}function u(e){return e.getMinutes()>=0&&e.getMinutes()<50}const s="#80b3ff",i="#ff8080",c="#37c8ab",f=document.getElementById("sprint"),l=document.getElementById("status"),a=document.getElementById("minutes"),d=document.getElementById("seconds");function S(e){const t=o(e);!function(e){f.innerText=`Sprint ${m(e.sprint)}`}(t),function(e){switch(e.status){case r.IN_PROGRESS:l.innerText="In progress";break;case r.LAST_MINUTES:l.innerText="In progress (last minutes)";break;default:l.innerText="Break"}}(t),function(e){a.innerText=m(e.minutes),d.innerText=m(e.seconds)}(t),function(e){switch(e.status){case r.IN_PROGRESS:p(s);break;case r.LAST_MINUTES:p(i);break;default:p(c)}}(t)}function p(e){l.style.color=e,a.style.color=e,d.style.color=e}function m(e){return e>=0&&e<10?"0"+e:e}!function e(){S(new Date);setTimeout(e,1e3)}()}]);