"use strict";var a=function(i,e){return function(){return e||i((e={exports:{}}).exports,e),e.exports}};var u=a(function($,A){A.exports={nargs:7,nin:1,nout:1}});var s=a(function(rr,B){B.exports=[11,11,11,15,10,10,10,11,10,15,15,15,6,6,6,7,6,11,6,15,4,6,4,7,4,10,4,11,4,15,1,4,1,6,1,5,1,7,1,10,1,11,1,15,7,7,7,11,7,15,5,7,5,10,5,11,5,15,2,6,2,5,2,7,2,10,2,11,2,15,3,6,3,5,3,7,3,10,3,11,3,15]});var d=a(function(er,m){
var r=require('@stdlib/math-base-special-abs2/dist'),C=require('@stdlib/math-base-special-abs2f/dist'),D=[r,r,C,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r];m.exports=D
});var x=a(function(ar,l){
var F=require('@stdlib/strided-dispatch/dist'),G=require('@stdlib/strided-base-unary/dist'),b=require('@stdlib/strided-base-dtype-resolve-enum/dist'),H=s(),y=u(),I=d(),J=F(G,H,I,y.nargs,y.nin,y.nout);function K(i,e,v,q,o,c,p){return J(i,b(e),v,q,b(o),c,p)}l.exports=K
});var h=a(function(ir,g){
var L=require('@stdlib/strided-dispatch/dist'),M=require('@stdlib/strided-base-unary/dist').ndarray,j=require('@stdlib/strided-base-dtype-resolve-enum/dist'),N=s(),t=u(),Q=d(),S=L(M,N,Q,t.nargs+t.nin+t.nout,t.nin,t.nout);function T(i,e,v,q,o,c,p,w,z){return S(i,j(e),v,q,o,j(c),p,w,z)}g.exports=T
});var P=a(function(tr,O){
var U=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),R=require('@stdlib/strided-base-meta-data-props/dist'),_=u(),E=s(),n=x(),V=h();U(n,"ndarray",V);R(_,E,n,!1);R(_,E,n.ndarray,!0);O.exports=n
});var W=require("path").join,X=require('@stdlib/utils-try-require/dist'),Y=P(),f,k=X(W(__dirname,"./native.js"));k instanceof Error?f=Y:f=k;module.exports=f;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
