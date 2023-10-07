// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function r(t){return"number"==typeof t}function n(t){var e,r="";for(e=0;e<t;e++)r+="0";return r}function i(t,e,r){var i=!1,o=e-t.length;return o<0||(function(t){return"-"===t[0]}(t)&&(i=!0,t=t.substr(1)),t=r?t+n(o):n(o)+t,i&&(t="-"+t)),t}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(t){var e,n,u;switch(t.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=t.arg,u=parseInt(n,10),!isFinite(u)){if(!r(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===t.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),t.precision&&(n=i(n,t.precision,t.padRight)),n="-"+n):(n=u.toString(e),u||t.precision?t.precision&&(n=i(n,t.precision,t.padRight)):n="",t.sign&&(n=t.sign+n)),16===e&&(t.alternate&&(n="0x"+n),n=t.specifier===a.call(t.specifier)?a.call(n):o.call(n)),8===e&&t.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function f(t){return"string"==typeof t}var s=Math.abs,c=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,h=/e\+(\d)$/,g=/e-(\d)$/,y=/^(\d+)$/,d=/^(\d+)e/,_=/\.0$/,b=/\.0*e/,m=/(\..*[^0])0*e/;function w(t){var e,n,i=parseFloat(t.arg);if(!isFinite(i)){if(!r(t.arg))throw new Error("invalid floating-point number. Value: "+n);i=t.arg}switch(t.specifier){case"e":case"E":n=i.toExponential(t.precision);break;case"f":case"F":n=i.toFixed(t.precision);break;case"g":case"G":s(i)<1e-4?((e=t.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(t.precision),t.alternate||(n=p.call(n,m,"$1e"),n=p.call(n,b,"e"),n=p.call(n,_,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return n=p.call(n,h,"e+0$1"),n=p.call(n,g,"e-0$1"),t.alternate&&(n=p.call(n,y,"$1."),n=p.call(n,d,"$1.e")),i>=0&&t.sign&&(n=t.sign+n),n=t.specifier===l.call(t.specifier)?l.call(n):c.call(n)}function v(t){var e,r="";for(e=0;e<t;e++)r+=" ";return r}function O(t,e,r){var n=e-t.length;return n<0?t:t=r?t+v(n):v(n)+t}var j=String.fromCharCode,E=isNaN,A=Array.isArray;function x(t){var e={};return e.specifier=t.specifier,e.precision=void 0===t.precision?1:t.precision,e.width=t.width,e.flags=t.flags||"",e.mapping=t.mapping,e}function I(t){var e,r,n,o,a,s,c,l,p;if(!A(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(s="",c=1,l=0;l<t.length;l++)if(f(n=t[l]))s+=n;else{if(e=void 0!==n.precision,!(n=x(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),r=n.flags,p=0;p<r.length;p++)switch(o=r.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=r.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,E(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=O(n.arg,n.width,n.padRight)),s+=n.arg||"",c+=1}return s}var U=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function S(t){var e={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(e.precision="1"),e}function T(t){var e,r,n,i;for(r=[],i=0,n=U.exec(t);n;)(e=t.slice(i,U.lastIndex-n[0].length)).length&&r.push(e),r.push(S(n)),i=U.lastIndex,n=U.exec(t);return(e=t.slice(i)).length&&r.push(e),r}function N(t){return"string"==typeof t}function R(t){var e,r,n;if(!N(t))throw new TypeError(R("invalid argument. First argument must be a string. Value: `%s`.",t));for(e=T(t),(r=new Array(arguments.length))[0]=e,n=1;n<r.length;n++)r[n]=arguments[n];return I.apply(null,r)}var F,V=Object.prototype,B=V.toString,L=V.__defineGetter__,C=V.__defineSetter__,P=V.__lookupGetter__,k=V.__lookupSetter__;F=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,e,r){var n,i,o,a;if("object"!=typeof t||null===t||"[object Array]"===B.call(t))throw new TypeError(R("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof r||null===r||"[object Array]"===B.call(r))throw new TypeError(R("invalid argument. Property descriptor must be an object. Value: `%s`.",r));if((i="value"in r)&&(P.call(t,e)||k.call(t,e)?(n=t.__proto__,t.__proto__=V,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),o="get"in r,a="set"in r,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&L&&L.call(t,e,r.get),a&&C&&C.call(t,e,r.set),t};var M=F;function G(t,e,r){M(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}var D="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Y(){return D&&"symbol"==typeof Symbol.toStringTag}var $=Object.prototype.toString,J=Object.prototype.hasOwnProperty;function W(t,e){return null!=t&&J.call(t,e)}var X="function"==typeof Symbol?Symbol:void 0,Z="function"==typeof X?X.toStringTag:"",z=Y()?function(t){var e,r,n;if(null==t)return $.call(t);r=t[Z],e=W(t,Z);try{t[Z]=void 0}catch(e){return $.call(t)}return n=$.call(t),e?t[Z]=r:delete t[Z],n}:function(t){return $.call(t)},H=Array.isArray?Array.isArray:function(t){return"[object Array]"===z(t)},q=/./;function K(t){return"boolean"==typeof t}var Q=Boolean,tt=Boolean.prototype.toString,et=Y();function rt(t){return"object"==typeof t&&(t instanceof Q||(et?function(t){try{return tt.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===z(t)))}function nt(t){return K(t)||rt(t)}function it(){return new Function("return this;")()}G(nt,"isPrimitive",K),G(nt,"isObject",rt);var ot="object"==typeof self?self:null,at="object"==typeof window?window:null,ut="object"==typeof globalThis?globalThis:null;function ft(t){if(arguments.length){if(!K(t))throw new TypeError(R("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return it()}if(ut)return ut;if(ot)return ot;if(at)return at;throw new Error("unexpected error. Unable to resolve global object.")}var st=ft(),ct=st.document&&st.document.childNodes,lt=Int8Array;function pt(){return/^\s*function\s*([^(]*)/i}var ht=/^\s*function\s*([^(]*)/i;function gt(t){return null!==t&&"object"==typeof t}G(pt,"REGEXP",ht);var yt=function(t){if("function"!=typeof t)throw new TypeError(R("invalid argument. Must provide a function. Value: `%s`.",t));return function(e){var r,n;if(!H(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(gt);function dt(t){var e,r,n,i;if(("Object"===(r=z(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=ht.exec(n.toString()))return e[1]}return gt(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":r}G(gt,"isObjectLikeArray",yt);var _t="function"==typeof q||"object"==typeof lt||"function"==typeof ct?function(t){return dt(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"==(e=typeof t)?dt(t).toLowerCase():e};function bt(t){return"function"===_t(t)}var mt,wt=Object,vt=Object.getPrototypeOf;mt=bt(Object.getPrototypeOf)?vt:function(t){var e=function(t){return t.__proto__}(t);return e||null===e?e:"[object Function]"===z(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var Ot=mt,jt=Object.prototype;function Et(t){var e;return!!function(t){return"object"==typeof t&&null!==t&&!H(t)}(t)&&(e=function(t){return null==t?null:(t=wt(t),Ot(t))}(t),!e||!W(t,"constructor")&&W(e,"constructor")&&bt(e.constructor)&&"[object Function]"===z(e.constructor)&&W(e,"isPrototypeOf")&&bt(e.isPrototypeOf)&&(e===jt||function(t){var e;for(e in t)if(!W(t,e))return!1;return!0}(t)))}var At=["row-major","column-major"];function xt(){return At.slice()}function It(){return{"row-major":1,"column-major":2}}G(xt,"enum",It);var Ut=xt(),St=Ut.length;function Tt(t){var e;for(e=0;e<St;e++)if(t===Ut[e])return!0;return!1}var Nt=ft();function Rt(t,e,r){M(t,e,{configurable:!1,enumerable:!1,get:r})}var Ft={binary:1,bool:1,complex64:8,complex128:16,float16:2,bfloat16:2,float32:4,float64:8,float128:16,generic:null,int8:1,int16:2,int32:4,int64:8,int128:16,int256:32,uint8:1,uint8c:1,uint16:2,uint32:4,uint64:8,uint128:16,uint256:32};function Vt(t){return Math.abs(t)}function Bt(t,e){return e&&(2===t||3===t)}function Lt(t,e){return e&&(1===t||3===t)}function Ct(t,e,r){var n,i,o,a,u;for(n=t.length,i=r,o=r,u=0;u<n;u++){if(0===t[u])return[r,r];(a=e[u])>0?o+=a*(t[u]-1):a<0&&(i+=a*(t[u]-1))}return[i,o]}function Pt(t){return t.re}function kt(t){return t.im}function Mt(t){return"string"==typeof t}G(Ct,"assign",(function(t,e,r,n){var i,o,a,u,f;for(i=t.length,o=r,a=r,f=0;f<i;f++){if(0===t[f])return n[0]=r,n[1]=r,n;(u=e[f])>0?a+=u*(t[f]-1):u<0&&(o+=u*(t[f]-1))}return n[0]=o,n[1]=a,n}));var Gt=String.prototype.valueOf,Dt=Y();function Yt(t){return"object"==typeof t&&(t instanceof String||(Dt?function(t){try{return Gt.call(t),!0}catch(t){return!1}}(t):"[object String]"===z(t)))}function $t(t){return Mt(t)||Yt(t)}G($t,"isPrimitive",Mt),G($t,"isObject",Yt);var Jt=/[-\/\\^$*+?.()|[\]{}]/g,Wt=RegExp.prototype.exec,Xt=Y();function Zt(t){return"object"==typeof t&&(t instanceof RegExp||(Xt?function(t){try{return Wt.call(t),!0}catch(t){return!1}}(t):"[object RegExp]"===z(t)))}function zt(t,e,r){if(!Mt(t))throw new TypeError(R("invalid argument. First argument must be a string. Value: `%s`.",t));if(Mt(e))e=new RegExp(function(t){var e,r;if(!Mt(t))throw new TypeError(R("invalid argument. Must provide a regular expression string. Value: `%s`.",t));if("/"===t[0])for(r=t.length-1;r>=0&&"/"!==t[r];r--);return void 0===r||r<=0?t.replace(Jt,"\\$&"):(e=(e=t.substring(1,r)).replace(Jt,"\\$&"),t=t[0]+e+t.substring(r))}(e),"g");else if(!Zt(e))throw new TypeError(R("invalid argument. Second argument must be a string or regular expression. Value: `%s`.",e));if(!Mt(r)&&!bt(r))throw new TypeError(R("invalid argument. Third argument must be a string or replacement function. Value: `%s`.",r));return function(t,e,r){return t.replace(e,r)}(t,e,r)}var Ht,qt={int8:"new Int8Array( [ {{data}} ] )",uint8:"new Uint8Array( [ {{data}} ] )",uint8c:"new Uint8ClampedArray( [ {{data}} ] )",int16:"new Int16Array( [ {{data}} ] )",uint16:"new Uint16Array( [ {{data}} ] )",int32:"new Int32Array( [ {{data}} ] )",uint32:"new Uint32Array( [ {{data}} ] )",float32:"new Float32Array( [ {{data}} ] )",float64:"new Float64Array( [ {{data}} ] )",generic:"[ {{data}} ]",binary:"new Buffer( [ {{data}} ] )",complex64:"new Complex64Array( [ {{data}} ] )",complex128:"new Complex128Array( [ {{data}} ] )"},Kt="function"==typeof Uint8Array,Qt="function"==typeof Uint8Array?Uint8Array:null,te="function"==typeof Uint8Array?Uint8Array:void 0;Ht=function(){var t,e,r;if("function"!=typeof Qt)return!1;try{e=new Qt(e=[1,3.14,-3.14,256,257]),r=e,t=(Kt&&r instanceof Uint8Array||"[object Uint8Array]"===z(r))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){t=!1}return t}()?te:function(){throw new Error("not implemented")};var ee,re=Ht,ne="function"==typeof Uint16Array,ie="function"==typeof Uint16Array?Uint16Array:null,oe="function"==typeof Uint16Array?Uint16Array:void 0;ee=function(){var t,e,r;if("function"!=typeof ie)return!1;try{e=new ie(e=[1,3.14,-3.14,65536,65537]),r=e,t=(ne&&r instanceof Uint16Array||"[object Uint16Array]"===z(r))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){t=!1}return t}()?oe:function(){throw new Error("not implemented")};var ae,ue={uint16:ee,uint8:re};(ae=new ue.uint16(1))[0]=4660;var fe,se=52===new ue.uint8(ae.buffer)[0],ce="function"==typeof ArrayBuffer,le="function"==typeof Float64Array,pe="function"==typeof Float64Array?Float64Array:null,he="function"==typeof Float64Array?Float64Array:void 0;fe=function(){var t,e,r;if("function"!=typeof pe)return!1;try{e=new pe([1,3.14,-3.14,NaN]),r=e,t=(le&&r instanceof Float64Array||"[object Float64Array]"===z(r))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){t=!1}return t}()?he:function(){throw new Error("not implemented")};var ge,ye=fe,de="function"==typeof ArrayBuffer?ArrayBuffer:null,_e="function"==typeof ArrayBuffer?ArrayBuffer:void 0;ge=function(){var t,e,r,n;if("function"!=typeof de)return!1;try{r=new de(16),n=r,(t=(ce&&n instanceof ArrayBuffer||"[object ArrayBuffer]"===z(n))&&"function"==typeof de.isView)&&((e=new ye(r))[0]=-3.14,e[1]=NaN,t=t&&de.isView(e)&&16===r.byteLength&&-3.14===e[0]&&e[1]!=e[1])}catch(e){t=!1}return t}()?_e:function(){throw new Error("not implemented")};var be,me=ge,we="function"==typeof DataView,ve="function"==typeof DataView?DataView:null,Oe="function"==typeof DataView?DataView:void 0;be=function(){var t,e,r,n;if("function"!=typeof ve)return!1;try{r=new me(24),e=new ve(r,8),n=e,(t=(we&&n instanceof DataView||"[object DataView]"===z(n))&&"function"==typeof e.getFloat64&&"function"==typeof e.setFloat64)&&(e.setFloat64(0,-3.14),e.setFloat64(8,NaN),t=t&&e.buffer===r&&16===e.byteLength&&8===e.byteOffset&&-3.14===e.getFloat64(0)&&e.getFloat64(8)!=e.getFloat64(8))}catch(e){t=!1}return t}()?Oe:function(){throw new Error("not implemented")};var je=be,Ee="function"==typeof BigInt?BigInt:void 0,Ae={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]};function xe(){var t;return 0===arguments.length?Ae.all.slice():(t=Ae[arguments[0]])?t.slice():[]}function Ie(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function Ue(t,e,r){M(t,e,{configurable:!1,enumerable:!0,writable:!1,value:r})}function Se(t){return Object.keys(Object(t))}var Te,Ne=void 0!==Object.keys;function Re(t){return"[object Arguments]"===z(t)}Te=function(){return Re(arguments)}();var Fe=Te;function Ve(t){return"number"==typeof t}var Be=Number,Le=Be.prototype.toString,Ce=Y();function Pe(t){return"object"==typeof t&&(t instanceof Be||(Ce?function(t){try{return Le.call(t),!0}catch(t){return!1}}(t):"[object Number]"===z(t)))}function ke(t){return Ve(t)||Pe(t)}function Me(t){return t!=t}function Ge(t){return Ve(t)&&Me(t)}function De(t){return Pe(t)&&Me(t.valueOf())}function Ye(t){return Ge(t)||De(t)}G(ke,"isPrimitive",Ve),G(ke,"isObject",Pe),G(Ye,"isPrimitive",Ge),G(Ye,"isObject",De);var $e=Number.POSITIVE_INFINITY,Je=Be.NEGATIVE_INFINITY,We=Math.floor;function Xe(t){return We(t)===t}function Ze(t){return t<$e&&t>Je&&Xe(t)}function ze(t){return Ve(t)&&Ze(t)}function He(t){return Pe(t)&&Ze(t.valueOf())}function qe(t){return ze(t)||He(t)}G(qe,"isPrimitive",ze),G(qe,"isObject",He);var Ke=Object.prototype.propertyIsEnumerable,Qe=!Ke.call("beep","0");function tr(t,e){var r;return null!=t&&(!(r=Ke.call(t,e))&&Qe&&$t(t)?!Ge(e=+e)&&ze(e)&&e>=0&&e<t.length:r)}var er=Fe?Re:function(t){return null!==t&&"object"==typeof t&&!H(t)&&"number"==typeof t.length&&Xe(t.length)&&t.length>=0&&t.length<=4294967295&&W(t,"callee")&&!tr(t,"callee")},rr=Array.prototype.slice,nr=tr((function(){}),"prototype"),ir=!tr({toString:null},"toString");function or(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&Xe(t.length)&&t.length>=0&&t.length<=9007199254740991}function ar(t,e,r){var n,i;if(!or(t)&&!Mt(t))throw new TypeError(R("invalid argument. First argument must be an array-like object. Value: `%s`.",t));if(0===(n=t.length))return-1;if(3===arguments.length){if(!ze(r))throw new TypeError(R("invalid argument. Third argument must be an integer. Value: `%s`.",r));if(r>=0){if(r>=n)return-1;i=r}else(i=n+r)<0&&(i=0)}else i=0;if(Ye(e)){for(;i<n;i++)if(Ye(t[i]))return i}else for(;i<n;i++)if(t[i]===e)return i;return-1}function ur(t){return t.constructor&&t.constructor.prototype===t}var fr,sr=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],cr="undefined"==typeof window?void 0:window,lr=function(){var t;if("undefined"===_t(cr))return!1;for(t in cr)try{-1===ar(sr,t)&&W(cr,t)&&null!==cr[t]&&"object"===_t(cr[t])&&ur(cr[t])}catch(t){return!0}return!1}(),pr="undefined"!=typeof window,hr=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];fr=Ne?function(){return 2!==(Se(arguments)||"").length}(1,2)?function(t){return er(t)?Se(rr.call(t)):Se(t)}:Se:function(t){var e,r,n,i,o,a,u;if(i=[],er(t)){for(u=0;u<t.length;u++)i.push(u.toString());return i}if("string"==typeof t){if(t.length>0&&!W(t,"0"))for(u=0;u<t.length;u++)i.push(u.toString())}else{if(0==(n="function"==typeof t)&&!gt(t))return i;r=nr&&n}for(o in t)r&&"prototype"===o||!W(t,o)||i.push(String(o));if(ir)for(e=function(t){if(!1===pr&&!lr)return ur(t);try{return ur(t)}catch(t){return!1}}(t),u=0;u<hr.length;u++)a=hr[u],e&&"constructor"===a||!W(t,a)||i.push(String(a));return i};var gr=fr;G(xe,"enum",Ie),function(t,e){var r,n,i;for(r=gr(e),i=0;i<r.length;i++)Ue(t,n=r[i],e[n])}(xe,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var yr=["throw","clamp","wrap"];function dr(){return{throw:1,clamp:2,wrap:3}}G((function(){return yr.slice()}),"enum",dr);var _r={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256},br={"row-major":1,"column-major":2},mr={throw:1,clamp:2,wrap:3},wr=new re(8),vr=new je(wr.buffer);function Or(t,e,r,n){var i,o,a;if(0===t){for(a=0;a<wr.length;a++)e[n]=0,n+=r;return e}for(o=(4294967295&t)>>>0,i=We(t/4294967296),se?(vr.setUint32(0,o,se),vr.setUint32(4,i,se)):(vr.setUint32(0,i,se),vr.setUint32(4,o,se)),a=0;a<wr.length;a++)e[n]=wr[a],n+=r;return e}G((function(t){var e,r,n,i;return e=new re(8),0===t||(i=(4294967295&t)>>>0,n=We(t/4294967296),r=new je(e.buffer),se?(r.setUint32(0,i,se),r.setUint32(4,n,se)):(r.setUint32(0,n,se),r.setUint32(4,i,se))),e}),"assign",Or);var jr={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256},Er={"row-major":1,"column-major":2},Ar={throw:1,clamp:2,wrap:3};function xr(t,e,r,n,i,o){var a,u,f,s,c;if(!(this instanceof xr))return new xr(t,e,r,n,i,o);for(s=1,c=0;c<r.length;c++)s*=r[c];return u=e.BYTES_PER_ELEMENT?e.BYTES_PER_ELEMENT*s:null,this._byteLength=u,this._bytesPerElement=function(t){return Ft[t]||null}(t),this._buffer=e,this._dtype=t,this._length=s,this._ndims=r.length,this._offset=i,this._order=o,this._shape=r,this._strides=n,this._accessors=Q(e.get&&e.set),this._iterationOrder=function(t){var e,r;for(e=0,r=0;r<t.length;r++)t[r]<0&&(e+=1);return 0===e?1:e===t.length?-1:0}(n),a=function(t,e,r,n,i){var o;return 0!==t&&0!==i&&t===(o=Ct(e,r,n))[1]-o[0]+1}(s,r,n,i,this._iterationOrder),f=function(t){var e,r,n,i,o,a;if(0===(r=t.length))return 0;for(e=!0,n=!0,i=Vt(t[0]),a=1;a<r;a++){if(o=Vt(t[a]),e&&o<i?e=!1:n&&o>i&&(n=!1),!n&&!e)return 0;i=o}return n&&e?3:n?1:2}(n),this._flags={ROW_MAJOR_CONTIGUOUS:Lt(f,a),COLUMN_MAJOR_CONTIGUOUS:Bt(f,a),READONLY:!1},this.__meta_dataview__=null,this}function Ir(t){return t instanceof xr||null!==t&&"object"==typeof t&&"object"==typeof t.data&&"object"==typeof t.shape&&"object"==typeof t.strides&&"number"==typeof t.offset&&"string"==typeof t.order&&"number"==typeof t.ndims&&"string"==typeof t.dtype&&"number"==typeof t.length&&"object"==typeof t.flags&&"function"==typeof t.get&&"function"==typeof t.set}G(xr,"name","ndarray"),Rt(xr.prototype,"byteLength",(function(){return this._byteLength})),Rt(xr.prototype,"BYTES_PER_ELEMENT",(function(){return this._bytesPerElement})),Rt(xr.prototype,"data",(function(){return this._buffer})),Rt(xr.prototype,"dtype",(function(){return this._dtype})),Rt(xr.prototype,"flags",(function(){return{ROW_MAJOR_CONTIGUOUS:(t=this._flags).ROW_MAJOR_CONTIGUOUS,COLUMN_MAJOR_CONTIGUOUS:t.COLUMN_MAJOR_CONTIGUOUS,READONLY:t.READONLY};var t})),Rt(xr.prototype,"length",(function(){return this._length})),Rt(xr.prototype,"ndims",(function(){return this._ndims})),Rt(xr.prototype,"offset",(function(){return this._offset})),Rt(xr.prototype,"order",(function(){return this._order})),Rt(xr.prototype,"shape",(function(){return this._shape.slice()})),Rt(xr.prototype,"strides",(function(){return this._strides.slice()})),G(xr.prototype,"get",(function(){var t,e;for(t=this._offset,e=0;e<arguments.length;e++)t+=this._strides[e]*arguments[e];return this._accessors?this._buffer.get(t):this._buffer[t]})),G(xr.prototype,"iget",(function(t){var e,r,n,i,o,a;if(0===(n=this._ndims))return this._accessors?this._buffer.get(this._offset):this._buffer[this._offset];if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(1===this._iterationOrder)return this._accessors?this._buffer.get(this._offset+t):this._buffer[this._offset+t];if(-1===this._iterationOrder)return this._accessors?this._buffer.get(this.offset-t):this._buffer[this._offset-t]}if(r=this._shape,e=this._strides,i=this._offset,"column-major"===this._order){for(a=0;a<n;a++)t-=o=t%r[a],t/=r[a],i+=o*e[a];return this._accessors?this._buffer.get(i):this._buffer[i]}for(a=n-1;a>=0;a--)t-=o=t%r[a],t/=r[a],i+=o*e[a];return this._accessors?this._buffer.get(i):this._buffer[i]})),G(xr.prototype,"set",(function(){var t,e;for(t=this._offset,e=0;e<arguments.length-1;e++)t+=this._strides[e]*arguments[e];return this._accessors?this._buffer.set(arguments[e],t):this._buffer[t]=arguments[e],this})),G(xr.prototype,"iset",(function(t,e){var r,n,i,o,a,u;if(0===(i=this._ndims))return this._accessors?this._buffer.set(t,this._offset):this._buffer[this._offset]=t,this;if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(1===this._iterationOrder)return this._accessors?this._buffer.set(e,this._offset+t):this._buffer[this._offset+t]=e,this;if(-1===this._iterationOrder)return this._accessors?this._buffer.set(e,this._offset-t):this._buffer[this._offset-t]=e,this}if(n=this._shape,r=this._strides,o=this._offset,"column-major"===this._order){for(u=0;u<i;u++)t-=a=t%n[u],t/=n[u],o+=a*r[u];return this._accessors?this._buffer.set(e,o):this._buffer[o]=e,this}for(u=i-1;u>=0;u--)t-=a=t%n[u],t/=n[u],o+=a*r[u];return this._accessors?this._buffer.set(e,o):this._buffer[o]=e,this})),G(xr.prototype,"toString",(function(){var t,e,r,n,i,o;if(e=this._shape.length,r="ndarray( '"+(n=this._dtype)+"', ",t="",this._length<=100)if("complex64"===n||"complex128"===n)for(o=0;o<this._length;o++)t+=Pt(i=this.iget(o))+", "+kt(i),o<this._length-1&&(t+=", ");else for(o=0;o<this._length;o++)t+=this.iget(o),o<this._length-1&&(t+=", ");else{if("complex64"===n||"complex128"===n)for(o=0;o<3;o++)t+=Pt(i=this.iget(o))+", "+kt(i),o<2&&(t+=", ");else for(o=0;o<3;o++)t+=this.iget(o),o<2&&(t+=", ");if(t+=", ..., ","complex64"===n||"complex128"===n)for(o=2;o>=0;o--)t+=Pt(i=this.iget(this._length-1-o))+", "+kt(i),o>0&&(t+=", ");else for(o=2;o>=0;o--)t+=this.iget(this._length-1-o),o>0&&(t+=", ")}if(r+=zt(qt[this.dtype],"{{data}}",t),r+=", ",r+=0===e?"[]":"[ "+this._shape.join(", ")+" ]",r+=", ",r+="[ ",0===e)r+="0";else for(o=0;o<e;o++)this._strides[o]<0?r+=-this._strides[o]:r+=this._strides[o],o<e-1&&(r+=", ");return r+=" ]",r+=", ",r+="0",r+=", ",r+="'"+this._order+"'",r+=" )"})),G(xr.prototype,"toJSON",(function(){var t,e,r,n;for(e=this._length,(t={}).type="ndarray",t.dtype=this.dtype,t.flags={READONLY:this._flags.READONLY},t.order=this._order,t.shape=this._shape.slice(),t.strides=this._strides.slice(),n=0;n<e;n++)t.strides[n]<0&&(t.strides[n]*=-1);if(t.data=[],"complex64"===t.dtype||"complex128"===t.dtype)for(n=0;n<e;n++)r=this.iget(n),t.data.push(Pt(r),kt(r));else for(n=0;n<e;n++)t.data.push(this.iget(n));return t})),G(xr.prototype,"__array_meta_dataview__","function"==typeof Nt.BigInt&&"function"==typeof BigInt&&"bigint"==typeof Nt.BigInt("1")&&"bigint"==typeof BigInt("1")?function(){var t,e,r,n,i,o,a,u,f,s,c,l,p,h;if(f=this._mode||"throw",a=this._submode||[f],r=33+16*(l=this._ndims)+(p=a.length),(u=this.__meta_dataview__)&&u.byteLength===r)return u;for(u=new je(new me(r)),i=this._shape,o=this._strides,n=this._dtype,t=this._bytesPerElement,s=0,u.setInt8(s,se?1:0),s+=1,u.setInt16(s,_r[n],se),s+=2,u.setBigInt64(s,Ee(l),se),c=8*l,s+=8,h=0;h<l;h++)u.setBigInt64(s,Ee(i[h]),se),u.setBigInt64(s+c,Ee(o[h]*t),se),s+=8;for(s+=c,u.setBigInt64(s,Ee(this._offset*t),se),s+=8,u.setInt8(s,br[this._order]),s+=1,u.setInt8(s,mr[f]),s+=1,u.setBigInt64(s,Ee(p),se),s+=8,h=0;h<p;h++)u.setInt8(s,mr[a[h]]),s+=1;return e=0,e|=this._flags.READONLY?4:0,u.setInt32(s,e,se),this.__meta_dataview__=u,u}:function(){var t,e,r,n,i,o,a,u,f,s,c,l,p,h,g;if(s=this._mode||"throw",u=this._submode||[s],n=33+16*(p=this._ndims)+(h=u.length),(f=this.__meta_dataview__)&&f.byteLength===n)return f;for(f=new je(new me(n)),e=new re(f.buffer),o=this._shape,a=this._strides,i=this._dtype,t=this._bytesPerElement,c=0,f.setInt8(c,se?1:0),c+=1,f.setInt16(c,jr[i],se),Or(p,e,1,c+=2),l=8*p,c+=8,g=0;g<p;g++)Or(o[g],e,1,c),Or(a[g]*t,e,1,c+l),c+=8;for(c+=l,Or(this._offset*t,e,1,c),c+=8,f.setInt8(c,Er[this._order]),c+=1,f.setInt8(c,Ar[s]),Or(h,e,1,c+=1),c+=8,g=0;g<h;g++)f.setInt8(c,Ar[u[g]]),c+=1;return r=0,r|=this._flags.READONLY?4:0,f.setInt32(c,r,se),this.__meta_dataview__=f,f});var Ur="function"==typeof X&&"symbol"==typeof X("foo")&&W(X,"iterator")&&"symbol"==typeof X.iterator?Symbol.iterator:null;function Sr(t){return function(t,e){var r,n;for(r=[],n=0;n<e;n++)r.push(t);return r}(0,t)}function Tr(t){var e,r,n;for(r=t.length,e=[],n=0;n<r;n++)e.push(t[n]);return e}function Nr(t){var e,r,n;if(0===(e=t.length))return 0;for(r=1,n=0;n<e;n++)r*=t[n];return r}function Rr(t,e,r,n,i){var o=t.length;if(0===o)return null;if(n<0){if((n+=o)<0)return null}else if(n>=o)return null;return"row-major"===e?function(t,e,r,n,i){var o,a;for(o=t-1;o>n;o--)i[o]=r[o];for(o=n;o>=0&&(a=(r[o]+1)%e[o],i[o]=a,!(a>0));o--);for(o-=1;o>=0;o--)i[o]=r[o];return i}(o,t,r,n,i):function(t,e,r,n,i){var o,a;for(o=0;o<n;o++)i[o]=r[o];for(o=n;o<t&&(a=(r[o]+1)%e[o],i[o]=a,!(a>0));o++);for(o+=1;o<t;o++)i[o]=r[o];return i}(o,t,r,n,i)}return G((function(t,e,r,n){return Rr(t,e,r,n,Sr(t.length))}),"assign",Rr),function t(e){var r,n,i,o,a,u,f,s,c,l,p;if(!Ir(e))throw new TypeError(R("invalid argument. First argument must be an ndarray. Value: `%s`.",e));if(o={order:e.order},arguments.length>1){if(!Et(r=arguments[1]))throw new TypeError(R("invalid argument. Options argument must be an object. Value: `%s`.",r));if(W(r,"order")){if(!Tt(r.order))throw new TypeError(R("invalid option. `%s` option must be a recognized order. Option: `%s`.","order",r.order));o.order=r.order}}return i=(n=e.shape).length,c=Tr(n),0===(l=Nr(c))&&(u=!0),s="row-major"===o.order?i-1:0,p=-1,f=Sr(i),G(a={},"next",h),G(a,"return",g),Ur&&G(a,Ur,y),a;function h(){return p+=1,u||p>=l?{done:!0}:(p>0&&(f=Rr(n,o.order,f,s,f)),{value:[f.slice(),e.get.apply(e,f)],done:!1})}function g(t){return u=!0,arguments.length?{value:t,done:!0}:{done:!0}}function y(){return t(e,o)}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).nditerEntries=e();
//# sourceMappingURL=browser.js.map
