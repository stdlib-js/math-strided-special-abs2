// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).abs2=t()}(this,(function(){"use strict";function r(r){var t=r.default;if("function"==typeof t){var n=function(){return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(r).forEach((function(t){var e=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(n,t,e.get?e:{enumerable:!0,get:function(){return r[t]}})})),n}var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return t({},"x",{}),!0}catch(r){return!1}},e=Object.defineProperty,i=Object.prototype,o=i.toString,u=i.__defineGetter__,a=i.__defineSetter__,f=i.__lookupGetter__,c=i.__lookupSetter__;var l=function(r,t,n){var e,l,s,v;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(f.call(r,t)||c.call(r,t)?(e=r.__proto__,r.__proto__=i,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),s="get"in n,v="set"in n,l&&(s||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&u&&u.call(r,t,n.get),v&&a&&a.call(r,t,n.set),r},s=e,v=l,p=n()?s:v,m=p;var g=function(r,t,n){m(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})},y=g,d=p;var b=function(r,t,n){d(r,t,{configurable:!1,enumerable:!1,get:n})},h=b,w=Math.floor;var j=function(r){return w(r)===r},O=j;var E=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&O(r.length)&&r.length>=0&&r.length<=4294967295};var _=function(r){return"number"==typeof r};var T=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var P=function(){return T&&"symbol"==typeof Symbol.toStringTag},S=Object.prototype.toString,x=S;var F=function(r){return x.call(r)},I=Object.prototype.hasOwnProperty;var A=function(r,t){return null!=r&&I.call(r,t)},V="function"==typeof Symbol?Symbol.toStringTag:"",k=A,B=V,N=S;var M=F,R=function(r){var t,n,e;if(null==r)return N.call(r);n=r[B],t=k(r,B);try{r[B]=void 0}catch(t){return N.call(r)}return e=N.call(r),t?r[B]=n:delete r[B],e},G=P()?R:M,L=Number,U=L.prototype.toString;var X=G,Y=L,C=function(r){try{return U.call(r),!0}catch(r){return!1}},D=P();var H=function(r){return"object"==typeof r&&(r instanceof Y||(D?C(r):"[object Number]"===X(r)))},W=_,q=H;var z=y,J=function(r){return W(r)||q(r)},K=H;z(J,"isPrimitive",_),z(J,"isObject",K);var Q=J,Z=Number.POSITIVE_INFINITY,$=L.NEGATIVE_INFINITY,rr=Z,tr=$,nr=j;var er=function(r){return r<rr&&r>tr&&nr(r)},ir=Q.isPrimitive,or=er;var ur=function(r){return ir(r)&&or(r)},ar=Q.isObject,fr=er;var cr=function(r){return ar(r)&&fr(r.valueOf())},lr=ur,sr=cr;var vr=y,pr=function(r){return lr(r)||sr(r)},mr=cr;vr(pr,"isPrimitive",ur),vr(pr,"isObject",mr);var gr=pr,yr=gr.isPrimitive;var dr=function(r){return yr(r)&&r>=0},br=gr.isObject;var hr=function(r){return br(r)&&r.valueOf()>=0},wr=dr,jr=hr;var Or=y,Er=function(r){return wr(r)||jr(r)},_r=hr;Or(Er,"isPrimitive",dr),Or(Er,"isObject",_r);var Tr=Er;var Pr=function(r){return Object.keys(Object(r))},Sr=Pr;var xr=function(){return function(){return 2!==(Sr(arguments)||"").length}(1,2)},Fr=void 0!==Object.keys,Ir=G;var Ar,Vr=function(r){return"[object Arguments]"===Ir(r)},kr=Vr;Ar=function(){return kr(arguments)}();var Br=Ar;var Nr=function(r){return"string"==typeof r},Mr=String.prototype.valueOf;var Rr=G,Gr=function(r){try{return Mr.call(r),!0}catch(r){return!1}},Lr=P();var Ur=function(r){return"object"==typeof r&&(r instanceof String||(Lr?Gr(r):"[object String]"===Rr(r)))},Xr=Nr,Yr=Ur;var Cr=y,Dr=function(r){return Xr(r)||Yr(r)},Hr=Ur;Cr(Dr,"isPrimitive",Nr),Cr(Dr,"isObject",Hr);var Wr=Dr;var qr=function(r){return r!=r},zr=Q.isPrimitive,Jr=qr;var Kr=function(r){return zr(r)&&Jr(r)},Qr=Q.isObject,Zr=qr;var $r=function(r){return Qr(r)&&Zr(r.valueOf())},rt=Kr,tt=$r;var nt=y,et=function(r){return rt(r)||tt(r)},it=$r;nt(et,"isPrimitive",Kr),nt(et,"isObject",it);var ot,ut=et,at=Object.prototype.propertyIsEnumerable;ot=!at.call("beep","0");var ft=Wr,ct=ut.isPrimitive,lt=gr.isPrimitive,st=at,vt=ot;var pt=function(r,t){var n;return null!=r&&(!(n=st.call(r,t))&&vt&&ft(r)?!ct(t=+t)&&lt(t)&&t>=0&&t<r.length:n)},mt=pt,gt=G;var yt=Array.isArray?Array.isArray:function(r){return"[object Array]"===gt(r)},dt=A,bt=mt,ht=yt,wt=j;var jt=Br?Vr:function(r){return null!==r&&"object"==typeof r&&!ht(r)&&"number"==typeof r.length&&wt(r.length)&&r.length>=0&&r.length<=4294967295&&dt(r,"callee")&&!bt(r,"callee")},Ot=jt,Et=Pr,_t=Array.prototype.slice;var Tt=function(r){return Ot(r)?Et(_t.call(r)):Et(r)},Pt=yt;var St=function(r){return null!==r&&"object"==typeof r};y(St,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!Pt(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(St));var xt=St;var Ft=mt((function(){}),"prototype"),It=!mt({toString:null},"toString"),At=j;var Vt=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&At(r.length)&&r.length>=0&&r.length<=9007199254740991},kt=ut,Bt=Vt,Nt=Wr.isPrimitive,Mt=gr.isPrimitive;var Rt=function(r,t,n){var e,i;if(!Bt(r)&&!Nt(r))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+r+"`.");if(0===(e=r.length))return-1;if(3===arguments.length){if(!Mt(n))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+n+"`.");if(n>=0){if(n>=e)return-1;i=n}else(i=e+n)<0&&(i=0)}else i=0;if(kt(t)){for(;i<e;i++)if(kt(r[i]))return i}else for(;i<e;i++)if(r[i]===t)return i;return-1},Gt=Rt,Lt=/./;var Ut=function(r){return"boolean"==typeof r},Xt=Boolean.prototype.toString;var Yt=G,Ct=function(r){try{return Xt.call(r),!0}catch(r){return!1}},Dt=P();var Ht=function(r){return"object"==typeof r&&(r instanceof Boolean||(Dt?Ct(r):"[object Boolean]"===Yt(r)))},Wt=Ut,qt=Ht;var zt=y,Jt=function(r){return Wt(r)||qt(r)},Kt=Ht;zt(Jt,"isPrimitive",Ut),zt(Jt,"isObject",Kt);var Qt=Jt;var Zt=function(){return new Function("return this;")()},$t="object"==typeof self?self:null,rn="object"==typeof window?window:null,tn="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},nn="object"==typeof tn?tn:null;module.exports=nn;var en=Qt.isPrimitive,on=Zt,un=$t,an=rn,fn=r(Object.freeze({__proto__:null}));var cn=function(r){if(arguments.length){if(!en(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return on()}if(un)return un;if(an)return an;if(fn)return fn;throw new Error("unexpected error. Unable to resolve global object.")},ln=cn(),sn=ln.document&&ln.document.childNodes,vn=Int8Array,pn=Lt,mn=sn,gn=vn;var yn=function(){return"function"==typeof pn||"object"==typeof gn||"function"==typeof mn};var dn=function(){return/^\s*function\s*([^(]*)/i},bn=dn;y(bn,"REGEXP",dn());var hn=xt;var wn=G,jn=bn.REGEXP,On=function(r){return hn(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var En=function(r){var t,n,e;if(("Object"===(n=wn(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=jn.exec(e.toString()))return t[1]}return On(r)?"Buffer":n},_n=En;var Tn=En;var Pn=function(r){var t;return null===r?"null":"object"===(t=typeof r)?_n(r).toLowerCase():t},Sn=function(r){return Tn(r).toLowerCase()},xn=yn()?Sn:Pn;var Fn,In=function(r){return r.constructor&&r.constructor.prototype===r},An="undefined"==typeof window?void 0:window,Vn=A,kn=Gt,Bn=xn,Nn=In,Mn=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Rn=An;Fn=function(){var r;if("undefined"===Bn(Rn))return!1;for(r in Rn)try{-1===kn(Mn,r)&&Vn(Rn,r)&&null!==Rn[r]&&"object"===Bn(Rn[r])&&Nn(Rn[r])}catch(r){return!0}return!1}();var Gn="undefined"!=typeof window,Ln=Fn,Un=In,Xn=Gn;var Yn=xt,Cn=A,Dn=jt,Hn=Ft,Wn=It,qn=function(r){if(!1===Xn&&!Ln)return Un(r);try{return Un(r)}catch(r){return!1}},zn=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var Jn=Pr,Kn=Tt,Qn=function(r){var t,n,e,i,o,u,a;if(i=[],Dn(r)){for(a=0;a<r.length;a++)i.push(a.toString());return i}if("string"==typeof r){if(r.length>0&&!Cn(r,"0"))for(a=0;a<r.length;a++)i.push(a.toString())}else{if(!1===(e="function"==typeof r)&&!Yn(r))return i;n=Hn&&e}for(o in r)n&&"prototype"===o||!Cn(r,o)||i.push(String(o));if(Wn)for(t=qn(r),a=0;a<zn.length;a++)u=zn[a],t&&"constructor"===u||!Cn(r,u)||i.push(String(u));return i},Zn=Fr?xr()?Kn:Jn:Qn,$n=yt;var re=function(r){return"object"==typeof r&&null!==r&&!$n(r)},te=xn;var ne=function(r){return"function"===te(r)},ee=Object.getPrototypeOf;var ie=function(r){return r.__proto__},oe=G,ue=ie;var ae=function(r){var t=ue(r);return t||null===t?t:"[object Function]"===oe(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null},fe=ee,ce=ae,le=ne(Object.getPrototypeOf)?fe:ce;var se=re,ve=ne,pe=function(r){return null==r?null:(r=Object(r),le(r))},me=A,ge=G,ye=Object.prototype;var de=function(r){var t;return!!se(r)&&(!(t=pe(r))||!me(r,"constructor")&&me(t,"constructor")&&ve(t.constructor)&&"[object Function]"===ge(t.constructor)&&me(t,"isPrototypeOf")&&ve(t.isPrototypeOf)&&(t===ye||function(r){var t;for(t in r)if(!me(r,t))return!1;return!0}(r)))},be=Zn,he=yt,we=de,je=xt,Oe=Qt.isPrimitive,Ee=A;var _e=function(r,t){var n,e,i,o,u,a,f,c=!0;if(!je(r))throw new TypeError("invalid argument. First argument must be object-like. Value: `"+r+"`.");if(arguments.length>1){if(!we(t))throw new TypeError("invalid argument. Options arguments must be an object. Value: `"+t+"`.");if(Ee(t,"duplicates")&&(c=t.duplicates,!Oe(c)))throw new TypeError("invalid argument. `duplicates` option must be a boolean primitive. Option: `"+c+"`.")}if(e=(n=be(r)).length,u={},c)for(f=0;f<e;f++)o=r[i=n[f]],Ee(u,o)?(a=u[o],he(a)?u[o].push(i):u[o]=[a,i]):u[o]=i;else for(f=0;f<e;f++)u[r[i=n[f]]]=i;return u},Te=_e,Pe=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];var Se=function(){return Pe.slice()},xe=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];var Fe=p;var Ie=function(r,t,n){Fe(r,t,{configurable:!1,enumerable:!0,writable:!1,value:n})},Ae=Ie,Ve=Ae,ke=Zn;var Be=function(r,t){var n,e,i;for(n=ke(t),i=0;i<n.length;i++)e=n[i],Ve(r,e,t[e]);return r},Ne=function(){return xe.slice()},Me=function(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}},Re=Be;y(Ne,"enum",Me),Re(Ne,Me());var Ge=Ne,Le=(0,Ge.enum)();var Ue=Ae,Xe=Zn;var Ye=function(r,t){var n,e,i;for(n=Xe(t),i=0;i<n.length;i++)e=n[i],Ue(r,e,t[e]);return r},Ce=Se,De=function(){return{bool:Le.bool,int8:Le.int8,uint8:Le.uint8,uint8c:Le.uint8c,int16:Le.int16,uint16:Le.uint16,int32:Le.int32,uint32:Le.uint32,int64:Le.int64,uint64:Le.uint64,float32:Le.float32,float64:Le.float64,complex64:Le.complex64,complex128:Le.complex128,binary:Le.binary,generic:Le.generic,notype:Le.notype,userdefined_type:Le.userdefined_type}},He=Ye;y(Ce,"enum",De),He(Ce,De());var We=Ce,qe=Te((0,We.enum)(),{duplicates:!1});var ze=function(r){var t=qe[r];return"string"==typeof t?t:null},Je=(0,Ge.enum)();var Ke=ze,Qe=function(r){var t=Je[r];return"number"==typeof t?t:null};var Ze=E,$e=Tr.isPrimitive,ri=function(r){var t=typeof r;return"string"===t?null===Qe(r)?null:r:"number"===t?Ke(r):null};var ti=function(r,t,n){var e,i,o,u,a,f,c,l;if(!Ze(r))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+r+"`.");if(!$e(t))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+t+"`.");if(!$e(n))throw new TypeError("invalid argument. Third argument must be a nonnegative integer. Value: `"+n+"`.");if(0===(e=r.length))throw new RangeError("invalid argument. First argument must contain at least one element.");if(e%(a=t+n)!=0)throw new RangeError("invalid arguments. The length of the first argument is incompatible with the second and third arguments.");for(i=[],o=[],f=2*a,l=2*t,c=0;c<=f;c++)0===c?c===l?o.push("() => ("):o.push("("):c===f?c===l?o.push(") => ()"):o.push(")"):c===l?o.push(") => ("):c%2==1?o.push(""):o.push(", ");for(c=0;c<e;c++)null===(u=ri(r[c]))&&(u=r[c]),o[2*(l=c%a)+1]=u,l===a-1&&i.push(o.join(""));return i},ni=y,ei=h,ii=ti;var oi=function(r,t,n,e){return ni(n,"nargs",e?r.nargs+r.nin+r.nout:r.nargs),ni(n,"nin",r.nin),ni(n,"nout",r.nout),ei(n,"types",(function(){return ii(t,r.nin,r.nout)})),n},ui=oi,ai={nargs:7,nin:1,nout:1},fi=[11,11,11,15,10,10,10,11,10,15,15,15,6,6,6,7,6,11,6,15,4,6,4,7,4,10,4,11,4,15,1,4,1,6,1,5,1,7,1,10,1,11,1,15,7,7,7,11,7,15,5,7,5,10,5,11,5,15,2,6,2,5,2,7,2,10,2,11,2,15,3,6,3,5,3,7,3,10,3,11,3,15],ci=gr.isPrimitive;var li=function(r){return ci(r)&&r>0},si=gr.isObject;var vi=function(r){return si(r)&&r.valueOf()>0},pi=li,mi=vi;var gi=y,yi=function(r){return pi(r)||mi(r)},di=vi;gi(yi,"isPrimitive",li),gi(yi,"isObject",di);var bi=yi,hi=j;var wi=function(r){return null!=r&&"function"!=typeof r&&"number"==typeof r.length&&hi(r.length)&&r.length>=0&&r.length<=4294967295};var ji=function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!wi(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(ne);var Oi=Tr.isPrimitive,Ei=bi,_i=gr.isPrimitive,Ti=ji,Pi=ne,Si=Vt,xi=function(r){return Math.abs(r)},Fi=function(r,t,n,e,i,o,u,a,f){var c,l,s,v;for(c=o,s=0;s<r;s++){for(l=f,v=0;v<t&&n[c+v*i]===u[l];v++)l+=a;if(v===t)return s;c+=e}return-1};var Ii=function(r,t,n,e,i,o){var u,a,f,c,l,s;if(Pi(r))s=r;else if(!Ti(r))throw new TypeError("invalid argument. First argument must be either a function or an array of functions. Value: `"+r+"`.");if(!Si(t))throw new TypeError("invalid argument. Second argument must be an array-like object. Value: `"+t+"`.");if(!Si(n)&&null!==n)throw new TypeError("invalid argument. Third argument must be an array-like object or `null`. Value: `"+n+"`.");if(!Ei(e))throw new TypeError("invalid argument. Fourth argument must be a positive integer. Value: `"+e+"`.");if(!Oi(i))throw new TypeError("invalid argument. Fifth argument must be a nonnegative integer. Value: `"+i+"`.");if(!Oi(o))throw new TypeError("invalid argument. Sixth argument must be a nonnegative integer. Value: `"+o+"`.");if(0===(f=i+o))throw new Error("invalid arguments. Interface must accept at least one strided input and/or output array. Based on the provided arguments, `nin+nout` equals `0`.");if(s){if(c=t.length/f,!_i(c))throw new Error("invalid argument. Unexpected number of types. A type must be specified for each strided input and output array for each provided strided array function.")}else if(c=r.length,t.length!==c*f)throw new Error("invalid argument. Unexpected number of types. A type must be specified for each strided input and output array for each provided strided array function.");if(n&&n.length!==c)throw new Error("invalid argument. The third argument must have the same number of elements as the first argument.");if(3*f+1===e)a=!1;else{if(4*f+1!==e)throw new Error("invalid argument. Fourth argument is incompatible with the number of strided input and output arrays.");a=!0}return l=i*(u=a?4:3)+1,function(){var v,p,m,g,y,d,b,h,w,j,O,E;if((d=arguments.length)!==e){if(d<e)throw new Error("invalid invocation. Insufficient arguments.");throw new Error("invalid invocation. Too many arguments.")}if(!_i(h=arguments[0]))throw new TypeError("invalid argument. First argument must be an integer.");for(y=[h],g=[],O=1;O<e;O+=u)g.push(arguments[O]);for(v=[],O=3;O<e;O+=u){if(!_i(w=arguments[O]))throw O<l?new TypeError("invalid argument. Input array stride argument must be an integer."):new TypeError("invalid argument. Output array stride argument must be an integer.");v.push(w)}if(a)for(p=[],O=4;O<e;O+=u){if(!Oi(w=arguments[O]))throw O<l?new TypeError("invalid argument. Input array offset argument must be a nonnegative integer."):new TypeError("invalid argument. Output array offset argument must be a nonnegative integer.");p.push(w)}for(m=[],O=2;O<e;O+=u){if(!Si(w=arguments[O]))throw O<l?new TypeError("invalid argument. Input array argument must be an array-like object."):new TypeError("invalid argument. Output array argument must be an array-like object.");if(E=(O-2)/u,a){if(b=p[E]+(h-1)*v[E],h>0&&(b<0||b>=w.length))throw O<l?new RangeError("invalid argument. Input array argument has insufficient elements based on the associated stride and the number of indexed elements."):new RangeError("invalid argument. Output array argument has insufficient elements based on the associated stride and the number of indexed elements.")}else if((h-1)*xi(v[E])>=w.length)throw O<l?new RangeError("invalid argument. Input array argument has insufficient elements based on the associated stride and the number of indexed elements."):new RangeError("invalid argument. Output array argument has insufficient elements based on the associated stride and the number of indexed elements.");m.push(w)}if((b=Fi(c,f,t,f,1,0,g,1,0))<0)throw new TypeError("invalid arguments. Unable to resolve a strided array function supporting the provided array argument data types.");j=s||r[b];n?a?j(m,y,v,p,n[b]):j(m,y,v,n[b]):a?j(m,y,v,p):j(m,y,v);if(1===o)return m[f-1];if(0===o)return;return m.slice(i)}},Ai=Ii;var Vi=function(r,t,n,e){var i,o,u,a,f,c,l,s;if(!((l=t[0])<=0))for(u=(i=n[0])<0?(1-l)*i:0,a=(o=n[1])<0?(1-l)*o:0,f=r[0],c=r[1],s=0;s<l;s++)c[a]=e(f[u]),u+=i,a+=o};var ki=function(r,t,n,e,i){var o,u,a,f,c,l,s,v,p,m;if(!((p=t[0])<=0))for(c=(a=n[0])<0?(1-p)*a:0,l=(f=n[1])<0?(1-p)*f:0,s=r[0],v=r[1],o=e[0],u=e[1],m=0;m<p;m++)u(v,l,i(o(s,c))),c+=a,l+=f};var Bi=function(r,t){return r[t]};var Ni=function(r,t){return r.get(t)};var Mi=function(r,t,n){r[t]=n};var Ri=function(r,t,n){r.set(n,t)},Gi=Vi,Li=ki,Ui=Bi,Xi=Ni,Yi=Mi,Ci=Ri;var Di=function(r,t,n,e){var i,o,u,a;return(u=r[0]).get&&u.set&&(i=Xi),(a=r[1]).get&&a.set&&(o=Ci),i||o?Li(r,t,n,[i=i||Ui,o=o||Yi],e):Gi(r,t,n,e)};var Hi=function(r,t,n,e,i){var o,u,a,f,c,l,s,v;if(!((s=t[0])<=0))for(a=e[0],f=e[1],o=n[0],u=n[1],c=r[0],l=r[1],v=0;v<s;v++)l[f]=i(c[a]),a+=o,f+=u};var Wi=function(r,t,n,e,i,o){var u,a,f,c,l,s,v,p,m,g;if(!((m=t[0])<=0))for(l=e[0],s=e[1],f=n[0],c=n[1],v=r[0],p=r[1],u=i[0],a=i[1],g=0;g<m;g++)a(p,s,o(u(v,l))),l+=f,s+=c},qi=Hi,zi=Wi,Ji=Bi,Ki=Ni,Qi=Mi,Zi=Ri;var $i=function(r,t,n,e,i){var o,u,a,f;return(a=r[0]).get&&a.set&&(o=Ki),(f=r[1]).get&&f.set&&(u=Zi),o||u?zi(r,t,n,e,[o=o||Ji,u=u||Qi],i):qi(r,t,n,e,i)},ro=Di;y(ro,"ndarray",$i);var to=ro,no=Te((0,We.enum)(),{duplicates:!1});var eo=function(r){var t=no[r];return"string"==typeof t?t:null},io=(0,We.enum)();var oo=eo,uo=function(r){var t=io[r];return"number"==typeof t?t:null};var ao=function(r){var t=typeof r;return"number"===t?oo(r)?r:null:"string"===t?uo(r):null};var fo=function(r){return r*r},co="function"==typeof Math.fround?Math.fround:null,lo=G,so="function"==typeof Float32Array;var vo="function"==typeof Float32Array?Float32Array:null,po=function(r){return so&&r instanceof Float32Array||"[object Float32Array]"===lo(r)},mo=Z,go=vo;var yo=function(){var r,t;if("function"!=typeof go)return!1;try{t=new go([1,3.14,-3.14,5e40]),r=po(t)&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===mo}catch(t){r=!1}return r};var bo="function"==typeof Float32Array?Float32Array:void 0,ho=function(){throw new Error("not implemented")},wo=new(yo()?bo:ho)(1);var jo=co;"function"!=typeof jo&&(jo=function(r){return wo[0]=r,wo[0]});var Oo=jo;var Eo=[fo,fo,function(r){return Oo(Oo(r)*Oo(r))},fo,fo,fo,fo,fo,fo,fo,fo,fo,fo,fo,fo,fo,fo,fo,fo,fo,fo,fo,fo,fo,fo,fo,fo,fo,fo,fo,fo,fo,fo,fo,fo,fo,fo,fo,fo,fo,fo],_o=Ai(to,fi,Eo,ai.nargs,ai.nin,ai.nout);function To(r,t,n,e,i,o,u){return _o(r,ao(t),n,e,ao(i),o,u)}var Po=Ai(to.ndarray,fi,Eo,ai.nargs+ai.nin+ai.nout,ai.nin,ai.nout);return y(To,"ndarray",(function(r,t,n,e,i,o,u,a,f){return Po(r,ao(t),n,e,i,ao(o),u,a,f)})),ui(ai,fi,To,!1),ui(ai,fi,To.ndarray,!0),To}));
//# sourceMappingURL=index.js.map
