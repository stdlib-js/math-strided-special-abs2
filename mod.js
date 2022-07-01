// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){var t=r.default;if("function"==typeof t){var n=function(){return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(r).forEach((function(t){var e=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(n,t,e.get?e:{enumerable:!0,get:function(){return r[t]}})})),n}var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return t({},"x",{}),!0}catch(r){return!1}},e=Object.defineProperty,i=Object.prototype,o=i.toString,u=i.__defineGetter__,a=i.__defineSetter__,f=i.__lookupGetter__,c=i.__lookupSetter__;var l=function(r,t,n){var e,l,s,v;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(f.call(r,t)||c.call(r,t)?(e=r.__proto__,r.__proto__=i,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),s="get"in n,v="set"in n,l&&(s||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&u&&u.call(r,t,n.get),v&&a&&a.call(r,t,n.set),r},s=e,v=l,p=n()?s:v,m=p;var g=function(r,t,n){m(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})},y=g,d=p;var b=function(r,t,n){d(r,t,{configurable:!1,enumerable:!1,get:n})},h=b,w=Math.floor;var j=function(r){return w(r)===r},O=j;var E=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&O(r.length)&&r.length>=0&&r.length<=4294967295};var _=function(r){return"number"==typeof r};var T=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var P=function(){return T&&"symbol"==typeof Symbol.toStringTag},S=Object.prototype.toString,x=S;var F=function(r){return x.call(r)},I=Object.prototype.hasOwnProperty;var A=function(r,t){return null!=r&&I.call(r,t)},V="function"==typeof Symbol?Symbol.toStringTag:"",k=A,B=V,N=S;var M=F,R=function(r){var t,n,e;if(null==r)return N.call(r);n=r[B],t=k(r,B);try{r[B]=void 0}catch(t){return N.call(r)}return e=N.call(r),t?r[B]=n:delete r[B],e},G=P()?R:M,L=Number,U=L.prototype.toString;var X=G,Y=L,C=function(r){try{return U.call(r),!0}catch(r){return!1}},D=P();var H=function(r){return"object"==typeof r&&(r instanceof Y||(D?C(r):"[object Number]"===X(r)))},W=_,q=H;var z=y,J=function(r){return W(r)||q(r)},K=H;z(J,"isPrimitive",_),z(J,"isObject",K);var Q=J,Z=Number.POSITIVE_INFINITY,$=L.NEGATIVE_INFINITY,rr=Z,tr=$,nr=j;var er=function(r){return r<rr&&r>tr&&nr(r)},ir=Q.isPrimitive,or=er;var ur=function(r){return ir(r)&&or(r)},ar=Q.isObject,fr=er;var cr=function(r){return ar(r)&&fr(r.valueOf())},lr=ur,sr=cr;var vr=y,pr=function(r){return lr(r)||sr(r)},mr=cr;vr(pr,"isPrimitive",ur),vr(pr,"isObject",mr);var gr=pr,yr=gr.isPrimitive;var dr=function(r){return yr(r)&&r>=0},br=gr.isObject;var hr=function(r){return br(r)&&r.valueOf()>=0},wr=dr,jr=hr;var Or=y,Er=function(r){return wr(r)||jr(r)},_r=hr;Or(Er,"isPrimitive",dr),Or(Er,"isObject",_r);var Tr=Er;var Pr=function(r){return Object.keys(Object(r))},Sr=Pr;var xr=function(){return function(){return 2!==(Sr(arguments)||"").length}(1,2)},Fr=void 0!==Object.keys,Ir=G;var Ar=function(r){return"[object Arguments]"===Ir(r)},Vr=Ar;var kr=function(){return Vr(arguments)}();var Br=function(r){return"string"==typeof r},Nr=String.prototype.valueOf;var Mr=G,Rr=function(r){try{return Nr.call(r),!0}catch(r){return!1}},Gr=P();var Lr=function(r){return"object"==typeof r&&(r instanceof String||(Gr?Rr(r):"[object String]"===Mr(r)))},Ur=Br,Xr=Lr;var Yr=y,Cr=function(r){return Ur(r)||Xr(r)},Dr=Lr;Yr(Cr,"isPrimitive",Br),Yr(Cr,"isObject",Dr);var Hr=Cr;var Wr=function(r){return r!=r},qr=Q.isPrimitive,zr=Wr;var Jr=function(r){return qr(r)&&zr(r)},Kr=Q.isObject,Qr=Wr;var Zr=function(r){return Kr(r)&&Qr(r.valueOf())},$r=Jr,rt=Zr;var tt=y,nt=function(r){return $r(r)||rt(r)},et=Zr;tt(nt,"isPrimitive",Jr),tt(nt,"isObject",et);var it,ot=nt,ut=Object.prototype.propertyIsEnumerable;it=!ut.call("beep","0");var at=Hr,ft=ot.isPrimitive,ct=gr.isPrimitive,lt=ut,st=it;var vt=function(r,t){var n;return null!=r&&(!(n=lt.call(r,t))&&st&&at(r)?!ft(t=+t)&&ct(t)&&t>=0&&t<r.length:n)},pt=vt,mt=G;var gt=Array.isArray?Array.isArray:function(r){return"[object Array]"===mt(r)},yt=A,dt=pt,bt=gt,ht=j;var wt=kr?Ar:function(r){return null!==r&&"object"==typeof r&&!bt(r)&&"number"==typeof r.length&&ht(r.length)&&r.length>=0&&r.length<=4294967295&&yt(r,"callee")&&!dt(r,"callee")},jt=wt,Ot=Pr,Et=Array.prototype.slice;var _t=function(r){return jt(r)?Ot(Et.call(r)):Ot(r)},Tt=gt;var Pt=function(r){return null!==r&&"object"==typeof r};y(Pt,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!Tt(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(Pt));var St=Pt;var xt=pt((function(){}),"prototype"),Ft=!pt({toString:null},"toString"),It=j;var At=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&It(r.length)&&r.length>=0&&r.length<=9007199254740991},Vt=ot,kt=At,Bt=Hr.isPrimitive,Nt=gr.isPrimitive;var Mt=function(r,t,n){var e,i;if(!kt(r)&&!Bt(r))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+r+"`.");if(0===(e=r.length))return-1;if(3===arguments.length){if(!Nt(n))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+n+"`.");if(n>=0){if(n>=e)return-1;i=n}else(i=e+n)<0&&(i=0)}else i=0;if(Vt(t)){for(;i<e;i++)if(Vt(r[i]))return i}else for(;i<e;i++)if(r[i]===t)return i;return-1},Rt=/./;var Gt=function(r){return"boolean"==typeof r},Lt=Boolean.prototype.toString;var Ut=G,Xt=function(r){try{return Lt.call(r),!0}catch(r){return!1}},Yt=P();var Ct=function(r){return"object"==typeof r&&(r instanceof Boolean||(Yt?Xt(r):"[object Boolean]"===Ut(r)))},Dt=Gt,Ht=Ct;var Wt=y,qt=function(r){return Dt(r)||Ht(r)},zt=Ct;Wt(qt,"isPrimitive",Gt),Wt(qt,"isObject",zt);var Jt=qt;var Kt=function(){return new Function("return this;")()},Qt="object"==typeof self?self:null,Zt="object"==typeof window?window:null,$t="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},rn="object"==typeof $t?$t:null;module.exports=rn;var tn=Jt.isPrimitive,nn=Kt,en=Qt,on=Zt,un=r(Object.freeze({__proto__:null}));var an=function(r){if(arguments.length){if(!tn(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return nn()}if(en)return en;if(on)return on;if(un)return un;throw new Error("unexpected error. Unable to resolve global object.")},fn=an(),cn=fn.document&&fn.document.childNodes,ln=Int8Array,sn=Rt,vn=cn,pn=ln;var mn=function(){return"function"==typeof sn||"object"==typeof pn||"function"==typeof vn};var gn=function(){return/^\s*function\s*([^(]*)/i},yn=gn;y(yn,"REGEXP",gn());var dn=St;var bn=G,hn=yn.REGEXP,wn=function(r){return dn(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var jn=function(r){var t,n,e;if(("Object"===(n=bn(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=hn.exec(e.toString()))return t[1]}return wn(r)?"Buffer":n},On=jn;var En=jn;var _n=function(r){var t;return null===r?"null":"object"===(t=typeof r)?On(r).toLowerCase():t},Tn=function(r){return En(r).toLowerCase()},Pn=mn()?Tn:_n;var Sn,xn=function(r){return r.constructor&&r.constructor.prototype===r},Fn="undefined"==typeof window?void 0:window,In=A,An=Mt,Vn=Pn,kn=xn,Bn=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Nn=Fn;Sn=function(){var r;if("undefined"===Vn(Nn))return!1;for(r in Nn)try{-1===An(Bn,r)&&In(Nn,r)&&null!==Nn[r]&&"object"===Vn(Nn[r])&&kn(Nn[r])}catch(r){return!0}return!1}();var Mn="undefined"!=typeof window,Rn=Sn,Gn=xn,Ln=Mn;var Un=St,Xn=A,Yn=wt,Cn=xt,Dn=Ft,Hn=function(r){if(!1===Ln&&!Rn)return Gn(r);try{return Gn(r)}catch(r){return!1}},Wn=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var qn=Pr,zn=_t,Jn=function(r){var t,n,e,i,o,u,a;if(i=[],Yn(r)){for(a=0;a<r.length;a++)i.push(a.toString());return i}if("string"==typeof r){if(r.length>0&&!Xn(r,"0"))for(a=0;a<r.length;a++)i.push(a.toString())}else{if(!1===(e="function"==typeof r)&&!Un(r))return i;n=Cn&&e}for(o in r)n&&"prototype"===o||!Xn(r,o)||i.push(String(o));if(Dn)for(t=Hn(r),a=0;a<Wn.length;a++)u=Wn[a],t&&"constructor"===u||!Xn(r,u)||i.push(String(u));return i},Kn=Fr?xr()?zn:qn:Jn,Qn=gt;var Zn=function(r){return"object"==typeof r&&null!==r&&!Qn(r)},$n=Pn;var re=function(r){return"function"===$n(r)},te=Object.getPrototypeOf;var ne=function(r){return r.__proto__},ee=G,ie=ne;var oe=function(r){var t=ie(r);return t||null===t?t:"[object Function]"===ee(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null},ue=te,ae=oe,fe=re(Object.getPrototypeOf)?ue:ae;var ce=Zn,le=re,se=function(r){return null==r?null:(r=Object(r),fe(r))},ve=A,pe=G,me=Object.prototype;var ge=function(r){var t;return!!ce(r)&&(!(t=se(r))||!ve(r,"constructor")&&ve(t,"constructor")&&le(t.constructor)&&"[object Function]"===pe(t.constructor)&&ve(t,"isPrototypeOf")&&le(t.isPrototypeOf)&&(t===me||function(r){var t;for(t in r)if(!ve(r,t))return!1;return!0}(r)))},ye=Kn,de=gt,be=ge,he=St,we=Jt.isPrimitive,je=A;var Oe=function(r,t){var n,e,i,o,u,a,f,c=!0;if(!he(r))throw new TypeError("invalid argument. First argument must be object-like. Value: `"+r+"`.");if(arguments.length>1){if(!be(t))throw new TypeError("invalid argument. Options arguments must be an object. Value: `"+t+"`.");if(je(t,"duplicates")&&(c=t.duplicates,!we(c)))throw new TypeError("invalid argument. `duplicates` option must be a boolean primitive. Option: `"+c+"`.")}if(e=(n=ye(r)).length,u={},c)for(f=0;f<e;f++)o=r[i=n[f]],je(u,o)?(a=u[o],de(a)?u[o].push(i):u[o]=[a,i]):u[o]=i;else for(f=0;f<e;f++)u[r[i=n[f]]]=i;return u},Ee=Oe,_e=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];var Te=function(){return _e.slice()},Pe=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];var Se=p;var xe=function(r,t,n){Se(r,t,{configurable:!1,enumerable:!0,writable:!1,value:n})},Fe=xe,Ie=Fe,Ae=Kn;var Ve=function(r,t){var n,e,i;for(n=Ae(t),i=0;i<n.length;i++)e=n[i],Ie(r,e,t[e]);return r},ke=function(){return Pe.slice()},Be=function(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}},Ne=Ve;y(ke,"enum",Be),Ne(ke,Be());var Me=ke,Re=(0,Me.enum)();var Ge=Fe,Le=Kn;var Ue=function(r,t){var n,e,i;for(n=Le(t),i=0;i<n.length;i++)e=n[i],Ge(r,e,t[e]);return r},Xe=Te,Ye=function(){return{bool:Re.bool,int8:Re.int8,uint8:Re.uint8,uint8c:Re.uint8c,int16:Re.int16,uint16:Re.uint16,int32:Re.int32,uint32:Re.uint32,int64:Re.int64,uint64:Re.uint64,float32:Re.float32,float64:Re.float64,complex64:Re.complex64,complex128:Re.complex128,binary:Re.binary,generic:Re.generic,notype:Re.notype,userdefined_type:Re.userdefined_type}},Ce=Ue;y(Xe,"enum",Ye),Ce(Xe,Ye());var De=Xe,He=Ee((0,De.enum)(),{duplicates:!1});var We=function(r){var t=He[r];return"string"==typeof t?t:null},qe=(0,Me.enum)();var ze=We,Je=function(r){var t=qe[r];return"number"==typeof t?t:null};var Ke=E,Qe=Tr.isPrimitive,Ze=function(r){var t=typeof r;return"string"===t?null===Je(r)?null:r:"number"===t?ze(r):null};var $e=function(r,t,n){var e,i,o,u,a,f,c,l;if(!Ke(r))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+r+"`.");if(!Qe(t))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+t+"`.");if(!Qe(n))throw new TypeError("invalid argument. Third argument must be a nonnegative integer. Value: `"+n+"`.");if(0===(e=r.length))throw new RangeError("invalid argument. First argument must contain at least one element.");if(e%(a=t+n)!=0)throw new RangeError("invalid arguments. The length of the first argument is incompatible with the second and third arguments.");for(i=[],o=[],f=2*a,l=2*t,c=0;c<=f;c++)0===c?c===l?o.push("() => ("):o.push("("):c===f?c===l?o.push(") => ()"):o.push(")"):c===l?o.push(") => ("):c%2==1?o.push(""):o.push(", ");for(c=0;c<e;c++)null===(u=Ze(r[c]))&&(u=r[c]),o[2*(l=c%a)+1]=u,l===a-1&&i.push(o.join(""));return i},ri=y,ti=h,ni=$e;var ei=function(r,t,n,e){return ri(n,"nargs",e?r.nargs+r.nin+r.nout:r.nargs),ri(n,"nin",r.nin),ri(n,"nout",r.nout),ti(n,"types",(function(){return ni(t,r.nin,r.nout)})),n},ii=ei,oi={nargs:7,nin:1,nout:1},ui=[11,11,11,15,10,10,10,11,10,15,15,15,6,6,6,7,6,11,6,15,4,6,4,7,4,10,4,11,4,15,1,4,1,6,1,5,1,7,1,10,1,11,1,15,7,7,7,11,7,15,5,7,5,10,5,11,5,15,2,6,2,5,2,7,2,10,2,11,2,15,3,6,3,5,3,7,3,10,3,11,3,15],ai=gr.isPrimitive;var fi=function(r){return ai(r)&&r>0},ci=gr.isObject;var li=function(r){return ci(r)&&r.valueOf()>0},si=fi,vi=li;var pi=y,mi=function(r){return si(r)||vi(r)},gi=li;pi(mi,"isPrimitive",fi),pi(mi,"isObject",gi);var yi=mi,di=j;var bi=function(r){return null!=r&&"function"!=typeof r&&"number"==typeof r.length&&di(r.length)&&r.length>=0&&r.length<=4294967295};var hi=function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!bi(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(re);var wi=Tr.isPrimitive,ji=yi,Oi=gr.isPrimitive,Ei=hi,_i=re,Ti=At,Pi=function(r){return Math.abs(r)},Si=function(r,t,n,e,i,o,u,a,f){var c,l,s,v;for(c=o,s=0;s<r;s++){for(l=f,v=0;v<t&&n[c+v*i]===u[l];v++)l+=a;if(v===t)return s;c+=e}return-1};var xi=function(r,t,n,e,i,o){var u,a,f,c,l,s;if(_i(r))s=r;else if(!Ei(r))throw new TypeError("invalid argument. First argument must be either a function or an array of functions. Value: `"+r+"`.");if(!Ti(t))throw new TypeError("invalid argument. Second argument must be an array-like object. Value: `"+t+"`.");if(!Ti(n)&&null!==n)throw new TypeError("invalid argument. Third argument must be an array-like object or `null`. Value: `"+n+"`.");if(!ji(e))throw new TypeError("invalid argument. Fourth argument must be a positive integer. Value: `"+e+"`.");if(!wi(i))throw new TypeError("invalid argument. Fifth argument must be a nonnegative integer. Value: `"+i+"`.");if(!wi(o))throw new TypeError("invalid argument. Sixth argument must be a nonnegative integer. Value: `"+o+"`.");if(0===(f=i+o))throw new Error("invalid arguments. Interface must accept at least one strided input and/or output array. Based on the provided arguments, `nin+nout` equals `0`.");if(s){if(c=t.length/f,!Oi(c))throw new Error("invalid argument. Unexpected number of types. A type must be specified for each strided input and output array for each provided strided array function.")}else if(c=r.length,t.length!==c*f)throw new Error("invalid argument. Unexpected number of types. A type must be specified for each strided input and output array for each provided strided array function.");if(n&&n.length!==c)throw new Error("invalid argument. The third argument must have the same number of elements as the first argument.");if(3*f+1===e)a=!1;else{if(4*f+1!==e)throw new Error("invalid argument. Fourth argument is incompatible with the number of strided input and output arrays.");a=!0}return l=i*(u=a?4:3)+1,function(){var v,p,m,g,y,d,b,h,w,j,O,E;if((d=arguments.length)!==e){if(d<e)throw new Error("invalid invocation. Insufficient arguments.");throw new Error("invalid invocation. Too many arguments.")}if(!Oi(h=arguments[0]))throw new TypeError("invalid argument. First argument must be an integer.");for(y=[h],g=[],O=1;O<e;O+=u)g.push(arguments[O]);for(v=[],O=3;O<e;O+=u){if(!Oi(w=arguments[O]))throw O<l?new TypeError("invalid argument. Input array stride argument must be an integer."):new TypeError("invalid argument. Output array stride argument must be an integer.");v.push(w)}if(a)for(p=[],O=4;O<e;O+=u){if(!wi(w=arguments[O]))throw O<l?new TypeError("invalid argument. Input array offset argument must be a nonnegative integer."):new TypeError("invalid argument. Output array offset argument must be a nonnegative integer.");p.push(w)}for(m=[],O=2;O<e;O+=u){if(!Ti(w=arguments[O]))throw O<l?new TypeError("invalid argument. Input array argument must be an array-like object."):new TypeError("invalid argument. Output array argument must be an array-like object.");if(E=(O-2)/u,a){if(b=p[E]+(h-1)*v[E],h>0&&(b<0||b>=w.length))throw O<l?new RangeError("invalid argument. Input array argument has insufficient elements based on the associated stride and the number of indexed elements."):new RangeError("invalid argument. Output array argument has insufficient elements based on the associated stride and the number of indexed elements.")}else if((h-1)*Pi(v[E])>=w.length)throw O<l?new RangeError("invalid argument. Input array argument has insufficient elements based on the associated stride and the number of indexed elements."):new RangeError("invalid argument. Output array argument has insufficient elements based on the associated stride and the number of indexed elements.");m.push(w)}if((b=Si(c,f,t,f,1,0,g,1,0))<0)throw new TypeError("invalid arguments. Unable to resolve a strided array function supporting the provided array argument data types.");j=s||r[b];n?a?j(m,y,v,p,n[b]):j(m,y,v,n[b]):a?j(m,y,v,p):j(m,y,v);if(1===o)return m[f-1];if(0===o)return;return m.slice(i)}},Fi=xi;var Ii=function(r,t,n,e){var i,o,u,a,f,c,l,s;if(!((l=t[0])<=0))for(u=(i=n[0])<0?(1-l)*i:0,a=(o=n[1])<0?(1-l)*o:0,f=r[0],c=r[1],s=0;s<l;s++)c[a]=e(f[u]),u+=i,a+=o};var Ai=function(r,t,n,e,i){var o,u,a,f,c,l,s,v,p,m;if(!((p=t[0])<=0))for(c=(a=n[0])<0?(1-p)*a:0,l=(f=n[1])<0?(1-p)*f:0,s=r[0],v=r[1],o=e[0],u=e[1],m=0;m<p;m++)u(v,l,i(o(s,c))),c+=a,l+=f};var Vi=function(r,t){return r[t]};var ki=function(r,t){return r.get(t)};var Bi=function(r,t,n){r[t]=n};var Ni=function(r,t,n){r.set(n,t)},Mi=Ii,Ri=Ai,Gi=Vi,Li=ki,Ui=Bi,Xi=Ni;var Yi=function(r,t,n,e){var i,o,u,a;return(u=r[0]).get&&u.set&&(i=Li),(a=r[1]).get&&a.set&&(o=Xi),i||o?Ri(r,t,n,[i=i||Gi,o=o||Ui],e):Mi(r,t,n,e)};var Ci=function(r,t,n,e,i){var o,u,a,f,c,l,s,v;if(!((s=t[0])<=0))for(a=e[0],f=e[1],o=n[0],u=n[1],c=r[0],l=r[1],v=0;v<s;v++)l[f]=i(c[a]),a+=o,f+=u};var Di=function(r,t,n,e,i,o){var u,a,f,c,l,s,v,p,m,g;if(!((m=t[0])<=0))for(l=e[0],s=e[1],f=n[0],c=n[1],v=r[0],p=r[1],u=i[0],a=i[1],g=0;g<m;g++)a(p,s,o(u(v,l))),l+=f,s+=c},Hi=Ci,Wi=Di,qi=Vi,zi=ki,Ji=Bi,Ki=Ni;var Qi=function(r,t,n,e,i){var o,u,a,f;return(a=r[0]).get&&a.set&&(o=zi),(f=r[1]).get&&f.set&&(u=Ki),o||u?Wi(r,t,n,e,[o=o||qi,u=u||Ji],i):Hi(r,t,n,e,i)},Zi=Yi,$i=Qi;y(Zi,"ndarray",$i);var ro=Zi,to=Ee((0,De.enum)(),{duplicates:!1});var no=function(r){var t=to[r];return"string"==typeof t?t:null},eo=(0,De.enum)();var io=no,oo=function(r){var t=eo[r];return"number"==typeof t?t:null};var uo=function(r){var t=typeof r;return"number"===t?io(r)?r:null:"string"===t?oo(r):null};var ao=function(r){return r*r},fo="function"==typeof Math.fround?Math.fround:null,co=G,lo="function"==typeof Float32Array;var so="function"==typeof Float32Array?Float32Array:null,vo=function(r){return lo&&r instanceof Float32Array||"[object Float32Array]"===co(r)},po=Z,mo=so;var go=function(){var r,t;if("function"!=typeof mo)return!1;try{t=new mo([1,3.14,-3.14,5e40]),r=vo(t)&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===po}catch(t){r=!1}return r};var yo="function"==typeof Float32Array?Float32Array:void 0,bo=function(){throw new Error("not implemented")},ho=new(go()?yo:bo)(1);var wo=fo;"function"!=typeof wo&&(wo=function(r){return ho[0]=r,ho[0]});var jo=wo;var Oo=[ao,ao,function(r){return jo(jo(r)*jo(r))},ao,ao,ao,ao,ao,ao,ao,ao,ao,ao,ao,ao,ao,ao,ao,ao,ao,ao,ao,ao,ao,ao,ao,ao,ao,ao,ao,ao,ao,ao,ao,ao,ao,ao,ao,ao,ao,ao],Eo=Fi(ro,ui,Oo,oi.nargs,oi.nin,oi.nout);function _o(r,t,n,e,i,o,u){return Eo(r,uo(t),n,e,uo(i),o,u)}var To=Fi($i,ui,Oo,oi.nargs+oi.nin+oi.nout,oi.nin,oi.nout);function Po(r,t,n,e,i,o,u,a,f){return To(r,uo(t),n,e,i,uo(o),u,a,f)}y(_o,"ndarray",Po),ii(oi,ui,_o,!1),ii(oi,ui,_o.ndarray,!0);export{_o as default,Po as ndarray};
//# sourceMappingURL=mod.js.map
