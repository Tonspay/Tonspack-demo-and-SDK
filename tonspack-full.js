//NACLJS Included 
!function(e,n){"use strict";"undefined"!=typeof module&&module.exports?module.exports=n():e.nacl?e.nacl.util=n():(e.nacl={},e.nacl.util=n())}(this,function(){"use strict";function e(e){if(!/^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/.test(e))throw new TypeError("invalid encoding")}var n={};return n.decodeUTF8=function(e){if("string"!=typeof e)throw new TypeError("expected string");var n,r=unescape(encodeURIComponent(e)),t=new Uint8Array(r.length);for(n=0;n<r.length;n++)t[n]=r.charCodeAt(n);return t},n.encodeUTF8=function(e){var n,r=[];for(n=0;n<e.length;n++)r.push(String.fromCharCode(e[n]));return decodeURIComponent(escape(r.join("")))},"undefined"==typeof atob?"undefined"!=typeof Buffer.from?(n.encodeBase64=function(e){return Buffer.from(e).toString("base64")},n.decodeBase64=function(n){return e(n),new Uint8Array(Array.prototype.slice.call(Buffer.from(n,"base64"),0))}):(n.encodeBase64=function(e){return new Buffer(e).toString("base64")},n.decodeBase64=function(n){return e(n),new Uint8Array(Array.prototype.slice.call(new Buffer(n,"base64"),0))}):(n.encodeBase64=function(e){var n,r=[],t=e.length;for(n=0;n<t;n++)r.push(String.fromCharCode(e[n]));return btoa(r.join(""))},n.decodeBase64=function(n){e(n);var r,t=atob(n),o=new Uint8Array(t.length);for(r=0;r<t.length;r++)o[r]=t.charCodeAt(r);return o}),n});
!function(r){"use strict";function n(r,n){return r<<n|r>>>32-n}function e(r,n){var e=255&r[n+3];return e=e<<8|255&r[n+2],(e=e<<8|255&r[n+1])<<8|255&r[n+0]}function t(r,n){var e=r[n]<<24|r[n+1]<<16|r[n+2]<<8|r[n+3],t=r[n+4]<<24|r[n+5]<<16|r[n+6]<<8|r[n+7];return new sr(e,t)}function o(r,n,e){var t;for(t=0;t<4;t++)r[n+t]=255&e,e>>>=8}function i(r,n,e){r[n]=e.hi>>24&255,r[n+1]=e.hi>>16&255,r[n+2]=e.hi>>8&255,r[n+3]=255&e.hi,r[n+4]=e.lo>>24&255,r[n+5]=e.lo>>16&255,r[n+6]=e.lo>>8&255,r[n+7]=255&e.lo}function f(r,n,e,t,o){var i,f=0;for(i=0;i<o;i++)f|=r[n+i]^e[t+i];return(1&f-1>>>8)-1}function a(r,n,e,t){return f(r,n,e,t,16)}function u(r,n,e,t){return f(r,n,e,t,32)}function c(r,t,i,f,a){var u,c,w,y=new Uint32Array(16),l=new Uint32Array(16),s=new Uint32Array(16),h=new Uint32Array(4);for(u=0;u<4;u++)l[5*u]=e(f,4*u),l[1+u]=e(i,4*u),l[6+u]=e(t,4*u),l[11+u]=e(i,16+4*u);for(u=0;u<16;u++)s[u]=l[u];for(u=0;u<20;u++){for(c=0;c<4;c++){for(w=0;w<4;w++)h[w]=l[(5*c+4*w)%16];for(h[1]^=n(h[0]+h[3]|0,7),h[2]^=n(h[1]+h[0]|0,9),h[3]^=n(h[2]+h[1]|0,13),h[0]^=n(h[3]+h[2]|0,18),w=0;w<4;w++)y[4*c+(c+w)%4]=h[w]}for(w=0;w<16;w++)l[w]=y[w]}if(a){for(u=0;u<16;u++)l[u]=l[u]+s[u]|0;for(u=0;u<4;u++)l[5*u]=l[5*u]-e(f,4*u)|0,l[6+u]=l[6+u]-e(t,4*u)|0;for(u=0;u<4;u++)o(r,4*u,l[5*u]),o(r,16+4*u,l[6+u])}else for(u=0;u<16;u++)o(r,4*u,l[u]+s[u]|0)}function w(r,n,e,t){return c(r,n,e,t,!1),0}function y(r,n,e,t){return c(r,n,e,t,!0),0}function l(r,n,e,t,o,i,f){var a,u,c=new Uint8Array(16),y=new Uint8Array(64);if(!o)return 0;for(u=0;u<16;u++)c[u]=0;for(u=0;u<8;u++)c[u]=i[u];for(;o>=64;){for(w(y,c,f,Br),u=0;u<64;u++)r[n+u]=(e?e[t+u]:0)^y[u];for(a=1,u=8;u<16;u++)a=a+(255&c[u])|0,c[u]=255&a,a>>>=8;o-=64,n+=64,e&&(t+=64)}if(o>0)for(w(y,c,f,Br),u=0;u<o;u++)r[n+u]=(e?e[t+u]:0)^y[u];return 0}function s(r,n,e,t,o){return l(r,n,null,0,e,t,o)}function h(r,n,e,t,o){var i=new Uint8Array(32);return y(i,t,o,Br),s(r,n,e,t.subarray(16),i)}function v(r,n,e,t,o,i,f){var a=new Uint8Array(32);return y(a,i,f,Br),l(r,n,e,t,o,i.subarray(16),a)}function g(r,n){var e,t=0;for(e=0;e<17;e++)t=t+(r[e]+n[e]|0)|0,r[e]=255&t,t>>>=8}function b(r,n,e,t,o,i){var f,a,u,c,w=new Uint32Array(17),y=new Uint32Array(17),l=new Uint32Array(17),s=new Uint32Array(17),h=new Uint32Array(17);for(u=0;u<17;u++)y[u]=l[u]=0;for(u=0;u<16;u++)y[u]=i[u];for(y[3]&=15,y[4]&=252,y[7]&=15,y[8]&=252,y[11]&=15,y[12]&=252,y[15]&=15;o>0;){for(u=0;u<17;u++)s[u]=0;for(u=0;u<16&&u<o;++u)s[u]=e[t+u];for(s[u]=1,t+=u,o-=u,g(l,s),a=0;a<17;a++)for(w[a]=0,u=0;u<17;u++)w[a]=0|w[a]+l[u]*(u<=a?y[a-u]:320*y[a+17-u]|0);for(a=0;a<17;a++)l[a]=w[a];for(c=0,u=0;u<16;u++)c=c+l[u]|0,l[u]=255&c,c>>>=8;for(c=c+l[16]|0,l[16]=3&c,c=5*(c>>>2)|0,u=0;u<16;u++)c=c+l[u]|0,l[u]=255&c,c>>>=8;c=c+l[16]|0,l[16]=c}for(u=0;u<17;u++)h[u]=l[u];for(g(l,Sr),f=0|-(l[16]>>>7),u=0;u<17;u++)l[u]^=f&(h[u]^l[u]);for(u=0;u<16;u++)s[u]=i[u+16];for(s[16]=0,g(l,s),u=0;u<16;u++)r[n+u]=l[u];return 0}function p(r,n,e,t,o,i){var f=new Uint8Array(16);return b(f,0,e,t,o,i),a(r,n,f,0)}function _(r,n,e,t,o){var i;if(e<32)return-1;for(v(r,0,n,0,e,t,o),b(r,16,r,32,e-32,r),i=0;i<16;i++)r[i]=0;return 0}function A(r,n,e,t,o){var i,f=new Uint8Array(32);if(e<32)return-1;if(h(f,0,32,t,o),0!==p(n,16,n,32,e-32,f))return-1;for(v(r,0,n,0,e,t,o),i=0;i<32;i++)r[i]=0;return 0}function U(r,n){var e;for(e=0;e<16;e++)r[e]=0|n[e]}function E(r){var n,e;for(e=0;e<16;e++)r[e]+=65536,n=Math.floor(r[e]/65536),r[(e+1)*(e<15?1:0)]+=n-1+37*(n-1)*(15===e?1:0),r[e]-=65536*n}function x(r,n,e){for(var t,o=~(e-1),i=0;i<16;i++)t=o&(r[i]^n[i]),r[i]^=t,n[i]^=t}function d(r,n){var e,t,o,i=hr(),f=hr();for(e=0;e<16;e++)f[e]=n[e];for(E(f),E(f),E(f),t=0;t<2;t++){for(i[0]=f[0]-65517,e=1;e<15;e++)i[e]=f[e]-65535-(i[e-1]>>16&1),i[e-1]&=65535;i[15]=f[15]-32767-(i[14]>>16&1),o=i[15]>>16&1,i[14]&=65535,x(f,i,1-o)}for(e=0;e<16;e++)r[2*e]=255&f[e],r[2*e+1]=f[e]>>8}function m(r,n){var e=new Uint8Array(32),t=new Uint8Array(32);return d(e,r),d(t,n),u(e,0,t,0)}function B(r){var n=new Uint8Array(32);return d(n,r),1&n[0]}function S(r,n){var e;for(e=0;e<16;e++)r[e]=n[2*e]+(n[2*e+1]<<8);r[15]&=32767}function K(r,n,e){var t;for(t=0;t<16;t++)r[t]=n[t]+e[t]|0}function Y(r,n,e){var t;for(t=0;t<16;t++)r[t]=n[t]-e[t]|0}function T(r,n,e){var t,o,i=new Float64Array(31);for(t=0;t<31;t++)i[t]=0;for(t=0;t<16;t++)for(o=0;o<16;o++)i[t+o]+=n[t]*e[o];for(t=0;t<15;t++)i[t]+=38*i[t+16];for(t=0;t<16;t++)r[t]=i[t];E(r),E(r)}function L(r,n){T(r,n,n)}function k(r,n){var e,t=hr();for(e=0;e<16;e++)t[e]=n[e];for(e=253;e>=0;e--)L(t,t),2!==e&&4!==e&&T(t,t,n);for(e=0;e<16;e++)r[e]=t[e]}function z(r,n){var e,t=hr();for(e=0;e<16;e++)t[e]=n[e];for(e=250;e>=0;e--)L(t,t),1!==e&&T(t,t,n);for(e=0;e<16;e++)r[e]=t[e]}function R(r,n,e){var t,o,i=new Uint8Array(32),f=new Float64Array(80),a=hr(),u=hr(),c=hr(),w=hr(),y=hr(),l=hr();for(o=0;o<31;o++)i[o]=n[o];for(i[31]=127&n[31]|64,i[0]&=248,S(f,e),o=0;o<16;o++)u[o]=f[o],w[o]=a[o]=c[o]=0;for(a[0]=w[0]=1,o=254;o>=0;--o)t=i[o>>>3]>>>(7&o)&1,x(a,u,t),x(c,w,t),K(y,a,c),Y(a,a,c),K(c,u,w),Y(u,u,w),L(w,y),L(l,a),T(a,c,a),T(c,u,y),K(y,a,c),Y(a,a,c),L(u,a),Y(c,w,l),T(a,c,Ar),K(a,a,w),T(c,c,a),T(a,w,l),T(w,u,f),L(u,y),x(a,u,t),x(c,w,t);for(o=0;o<16;o++)f[o+16]=a[o],f[o+32]=c[o],f[o+48]=u[o],f[o+64]=w[o];var s=f.subarray(32),h=f.subarray(16);return k(s,s),T(h,h,s),d(r,h),0}function P(r,n){return R(r,n,br)}function N(r,n){return vr(n,32),P(r,n)}function O(r,n,e){var t=new Uint8Array(32);return R(t,e,n),y(r,gr,t,Br)}function C(r,n,e,t,o,i){var f=new Uint8Array(32);return O(f,o,i),Kr(r,n,e,t,f)}function F(r,n,e,t,o,i){var f=new Uint8Array(32);return O(f,o,i),Yr(r,n,e,t,f)}function M(){var r,n,e,t=0,o=0,i=0,f=0;for(e=0;e<arguments.length;e++)r=arguments[e].lo,n=arguments[e].hi,t+=65535&r,o+=r>>>16,i+=65535&n,f+=n>>>16;return o+=t>>>16,i+=o>>>16,f+=i>>>16,new sr(65535&i|f<<16,65535&t|o<<16)}function G(r,n){return new sr(r.hi>>>n,r.lo>>>n|r.hi<<32-n)}function Z(){var r,n=0,e=0;for(r=0;r<arguments.length;r++)n^=arguments[r].lo,e^=arguments[r].hi;return new sr(e,n)}function q(r,n){var e,t,o=32-n;return n<32?(e=r.hi>>>n|r.lo<<o,t=r.lo>>>n|r.hi<<o):n<64&&(e=r.lo>>>n|r.hi<<o,t=r.hi>>>n|r.lo<<o),new sr(e,t)}function I(r,n,e){var t=r.hi&n.hi^~r.hi&e.hi,o=r.lo&n.lo^~r.lo&e.lo;return new sr(t,o)}function V(r,n,e){var t=r.hi&n.hi^r.hi&e.hi^n.hi&e.hi,o=r.lo&n.lo^r.lo&e.lo^n.lo&e.lo;return new sr(t,o)}function X(r){return Z(q(r,28),q(r,34),q(r,39))}function D(r){return Z(q(r,14),q(r,18),q(r,41))}function j(r){return Z(q(r,1),q(r,8),G(r,7))}function H(r){return Z(q(r,19),q(r,61),G(r,6))}function J(r,n,e){var o,f,a,u=[],c=[],w=[],y=[];for(f=0;f<8;f++)u[f]=w[f]=t(r,8*f);for(var l=0;e>=128;){for(f=0;f<16;f++)y[f]=t(n,8*f+l);for(f=0;f<80;f++){for(a=0;a<8;a++)c[a]=w[a];for(o=M(w[7],D(w[4]),I(w[4],w[5],w[6]),Tr[f],y[f%16]),c[7]=M(o,X(w[0]),V(w[0],w[1],w[2])),c[3]=M(c[3],o),a=0;a<8;a++)w[(a+1)%8]=c[a];if(f%16==15)for(a=0;a<16;a++)y[a]=M(y[a],y[(a+9)%16],j(y[(a+1)%16]),H(y[(a+14)%16]))}for(f=0;f<8;f++)w[f]=M(w[f],u[f]),u[f]=w[f];l+=128,e-=128}for(f=0;f<8;f++)i(r,8*f,u[f]);return e}function Q(r,n,e){var t,o=new Uint8Array(64),f=new Uint8Array(256),a=e;for(t=0;t<64;t++)o[t]=Lr[t];for(J(o,n,e),e%=128,t=0;t<256;t++)f[t]=0;for(t=0;t<e;t++)f[t]=n[a-e+t];for(f[e]=128,e=256-128*(e<112?1:0),f[e-9]=0,i(f,e-8,new sr(a/536870912|0,a<<3)),J(o,f,e),t=0;t<64;t++)r[t]=o[t];return 0}function W(r,n){var e=hr(),t=hr(),o=hr(),i=hr(),f=hr(),a=hr(),u=hr(),c=hr(),w=hr();Y(e,r[1],r[0]),Y(w,n[1],n[0]),T(e,e,w),K(t,r[0],r[1]),K(w,n[0],n[1]),T(t,t,w),T(o,r[3],n[3]),T(o,o,Er),T(i,r[2],n[2]),K(i,i,i),Y(f,t,e),Y(a,i,o),K(u,i,o),K(c,t,e),T(r[0],f,a),T(r[1],c,u),T(r[2],u,a),T(r[3],f,c)}function $(r,n,e){var t;for(t=0;t<4;t++)x(r[t],n[t],e)}function rr(r,n){var e=hr(),t=hr(),o=hr();k(o,n[2]),T(e,n[0],o),T(t,n[1],o),d(r,t),r[31]^=B(e)<<7}function nr(r,n,e){var t,o;for(U(r[0],pr),U(r[1],_r),U(r[2],_r),U(r[3],pr),o=255;o>=0;--o)t=e[o/8|0]>>(7&o)&1,$(r,n,t),W(n,r),W(r,r),$(r,n,t)}function er(r,n){var e=[hr(),hr(),hr(),hr()];U(e[0],xr),U(e[1],dr),U(e[2],_r),T(e[3],xr,dr),nr(r,e,n)}function tr(r,n,e){var t,o=new Uint8Array(64),i=[hr(),hr(),hr(),hr()];for(e||vr(n,32),Q(o,n,32),o[0]&=248,o[31]&=127,o[31]|=64,er(i,o),rr(r,i),t=0;t<32;t++)n[t+32]=r[t];return 0}function or(r,n){var e,t,o,i;for(t=63;t>=32;--t){for(e=0,o=t-32,i=t-12;o<i;++o)n[o]+=e-16*n[t]*kr[o-(t-32)],e=n[o]+128>>8,n[o]-=256*e;n[o]+=e,n[t]=0}for(e=0,o=0;o<32;o++)n[o]+=e-(n[31]>>4)*kr[o],e=n[o]>>8,n[o]&=255;for(o=0;o<32;o++)n[o]-=e*kr[o];for(t=0;t<32;t++)n[t+1]+=n[t]>>8,r[t]=255&n[t]}function ir(r){var n,e=new Float64Array(64);for(n=0;n<64;n++)e[n]=r[n];for(n=0;n<64;n++)r[n]=0;or(r,e)}function fr(r,n,e,t){var o,i,f=new Uint8Array(64),a=new Uint8Array(64),u=new Uint8Array(64),c=new Float64Array(64),w=[hr(),hr(),hr(),hr()];Q(f,t,32),f[0]&=248,f[31]&=127,f[31]|=64;var y=e+64;for(o=0;o<e;o++)r[64+o]=n[o];for(o=0;o<32;o++)r[32+o]=f[32+o];for(Q(u,r.subarray(32),e+32),ir(u),er(w,u),rr(r,w),o=32;o<64;o++)r[o]=t[o];for(Q(a,r,e+64),ir(a),o=0;o<64;o++)c[o]=0;for(o=0;o<32;o++)c[o]=u[o];for(o=0;o<32;o++)for(i=0;i<32;i++)c[o+i]+=a[o]*f[i];return or(r.subarray(32),c),y}function ar(r,n){var e=hr(),t=hr(),o=hr(),i=hr(),f=hr(),a=hr(),u=hr();return U(r[2],_r),S(r[1],n),L(o,r[1]),T(i,o,Ur),Y(o,o,r[2]),K(i,r[2],i),L(f,i),L(a,f),T(u,a,f),T(e,u,o),T(e,e,i),z(e,e),T(e,e,o),T(e,e,i),T(e,e,i),T(r[0],e,i),L(t,r[0]),T(t,t,i),m(t,o)&&T(r[0],r[0],mr),L(t,r[0]),T(t,t,i),m(t,o)?-1:(B(r[0])===n[31]>>7&&Y(r[0],pr,r[0]),T(r[3],r[0],r[1]),0)}function ur(r,n,e,t){var o,i=new Uint8Array(32),f=new Uint8Array(64),a=[hr(),hr(),hr(),hr()],c=[hr(),hr(),hr(),hr()];if(-1,e<64)return-1;if(ar(c,t))return-1;for(o=0;o<e;o++)r[o]=n[o];for(o=0;o<32;o++)r[o+32]=t[o];if(Q(f,r,e),ir(f),nr(a,c,f),er(c,n.subarray(32)),W(a,c),rr(i,a),e-=64,u(n,0,i,0)){for(o=0;o<e;o++)r[o]=0;return-1}for(o=0;o<e;o++)r[o]=n[o+64];return e}function cr(r,n){if(r.length!==zr)throw new Error("bad key size");if(n.length!==Rr)throw new Error("bad nonce size")}function wr(r,n){if(r.length!==Pr)throw new Error("bad public key size");if(n.length!==Nr)throw new Error("bad secret key size")}function yr(){for(var r=0;r<arguments.length;r++)if(!(arguments[r]instanceof Uint8Array))throw new TypeError("unexpected type, use Uint8Array")}function lr(r){for(var n=0;n<r.length;n++)r[n]=0}var sr=function(r,n){this.hi=0|r,this.lo=0|n},hr=function(r){var n,e=new Float64Array(16);if(r)for(n=0;n<r.length;n++)e[n]=r[n];return e},vr=function(){throw new Error("no PRNG")},gr=new Uint8Array(16),br=new Uint8Array(32);br[0]=9;var pr=hr(),_r=hr([1]),Ar=hr([56129,1]),Ur=hr([30883,4953,19914,30187,55467,16705,2637,112,59544,30585,16505,36039,65139,11119,27886,20995]),Er=hr([61785,9906,39828,60374,45398,33411,5274,224,53552,61171,33010,6542,64743,22239,55772,9222]),xr=hr([54554,36645,11616,51542,42930,38181,51040,26924,56412,64982,57905,49316,21502,52590,14035,8553]),dr=hr([26200,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214]),mr=hr([41136,18958,6951,50414,58488,44335,6150,12099,55207,15867,153,11085,57099,20417,9344,11139]),Br=new Uint8Array([101,120,112,97,110,100,32,51,50,45,98,121,116,101,32,107]),Sr=new Uint32Array([5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,252]),Kr=_,Yr=A,Tr=[new sr(1116352408,3609767458),new sr(1899447441,602891725),new sr(3049323471,3964484399),new sr(3921009573,2173295548),new sr(961987163,4081628472),new sr(1508970993,3053834265),new sr(2453635748,2937671579),new sr(2870763221,3664609560),new sr(3624381080,2734883394),new sr(310598401,1164996542),new sr(607225278,1323610764),new sr(1426881987,3590304994),new sr(1925078388,4068182383),new sr(2162078206,991336113),new sr(2614888103,633803317),new sr(3248222580,3479774868),new sr(3835390401,2666613458),new sr(4022224774,944711139),new sr(264347078,2341262773),new sr(604807628,2007800933),new sr(770255983,1495990901),new sr(1249150122,1856431235),new sr(1555081692,3175218132),new sr(1996064986,2198950837),new sr(2554220882,3999719339),new sr(2821834349,766784016),new sr(2952996808,2566594879),new sr(3210313671,3203337956),new sr(3336571891,1034457026),new sr(3584528711,2466948901),new sr(113926993,3758326383),new sr(338241895,168717936),new sr(666307205,1188179964),new sr(773529912,1546045734),new sr(1294757372,1522805485),new sr(1396182291,2643833823),new sr(1695183700,2343527390),new sr(1986661051,1014477480),new sr(2177026350,1206759142),new sr(2456956037,344077627),new sr(2730485921,1290863460),new sr(2820302411,3158454273),new sr(3259730800,3505952657),new sr(3345764771,106217008),new sr(3516065817,3606008344),new sr(3600352804,1432725776),new sr(4094571909,1467031594),new sr(275423344,851169720),new sr(430227734,3100823752),new sr(506948616,1363258195),new sr(659060556,3750685593),new sr(883997877,3785050280),new sr(958139571,3318307427),new sr(1322822218,3812723403),new sr(1537002063,2003034995),new sr(1747873779,3602036899),new sr(1955562222,1575990012),new sr(2024104815,1125592928),new sr(2227730452,2716904306),new sr(2361852424,442776044),new sr(2428436474,593698344),new sr(2756734187,3733110249),new sr(3204031479,2999351573),new sr(3329325298,3815920427),new sr(3391569614,3928383900),new sr(3515267271,566280711),new sr(3940187606,3454069534),new sr(4118630271,4000239992),new sr(116418474,1914138554),new sr(174292421,2731055270),new sr(289380356,3203993006),new sr(460393269,320620315),new sr(685471733,587496836),new sr(852142971,1086792851),new sr(1017036298,365543100),new sr(1126000580,2618297676),new sr(1288033470,3409855158),new sr(1501505948,4234509866),new sr(1607167915,987167468),new sr(1816402316,1246189591)],Lr=new Uint8Array([106,9,230,103,243,188,201,8,187,103,174,133,132,202,167,59,60,110,243,114,254,148,248,43,165,79,245,58,95,29,54,241,81,14,82,127,173,230,130,209,155,5,104,140,43,62,108,31,31,131,217,171,251,65,189,107,91,224,205,25,19,126,33,121]),kr=new Float64Array([237,211,245,92,26,99,18,88,214,156,247,162,222,249,222,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16]),zr=32,Rr=24,Pr=32,Nr=32,Or=Rr;r.lowlevel={crypto_core_hsalsa20:y,crypto_stream_xor:v,crypto_stream:h,crypto_stream_salsa20_xor:l,crypto_stream_salsa20:s,crypto_onetimeauth:b,crypto_onetimeauth_verify:p,crypto_verify_16:a,crypto_verify_32:u,crypto_secretbox:_,crypto_secretbox_open:A,crypto_scalarmult:R,crypto_scalarmult_base:P,crypto_box_beforenm:O,crypto_box_afternm:Kr,crypto_box:C,crypto_box_open:F,crypto_box_keypair:N,crypto_hash:Q,crypto_sign:fr,crypto_sign_keypair:tr,crypto_sign_open:ur,crypto_secretbox_KEYBYTES:zr,crypto_secretbox_NONCEBYTES:Rr,crypto_secretbox_ZEROBYTES:32,crypto_secretbox_BOXZEROBYTES:16,crypto_scalarmult_BYTES:32,crypto_scalarmult_SCALARBYTES:32,crypto_box_PUBLICKEYBYTES:Pr,crypto_box_SECRETKEYBYTES:Nr,crypto_box_BEFORENMBYTES:32,crypto_box_NONCEBYTES:Or,crypto_box_ZEROBYTES:32,crypto_box_BOXZEROBYTES:16,crypto_sign_BYTES:64,crypto_sign_PUBLICKEYBYTES:32,crypto_sign_SECRETKEYBYTES:64,crypto_sign_SEEDBYTES:32,crypto_hash_BYTES:64},r.randomBytes=function(r){var n=new Uint8Array(r);return vr(n,r),n},r.secretbox=function(r,n,e){yr(r,n,e),cr(e,n);for(var t=new Uint8Array(32+r.length),o=new Uint8Array(t.length),i=0;i<r.length;i++)t[i+32]=r[i];return _(o,t,t.length,n,e),o.subarray(16)},r.secretbox.open=function(r,n,e){yr(r,n,e),cr(e,n);for(var t=new Uint8Array(16+r.length),o=new Uint8Array(t.length),i=0;i<r.length;i++)t[i+16]=r[i];return t.length<32?null:0!==A(o,t,t.length,n,e)?null:o.subarray(32)},r.secretbox.keyLength=zr,r.secretbox.nonceLength=Rr,r.secretbox.overheadLength=16,r.scalarMult=function(r,n){if(yr(r,n),32!==r.length)throw new Error("bad n size");if(32!==n.length)throw new Error("bad p size");var e=new Uint8Array(32);return R(e,r,n),e},r.scalarMult.base=function(r){if(yr(r),32!==r.length)throw new Error("bad n size");var n=new Uint8Array(32);return P(n,r),n},r.scalarMult.scalarLength=32,r.scalarMult.groupElementLength=32,r.box=function(n,e,t,o){var i=r.box.before(t,o);return r.secretbox(n,e,i)},r.box.before=function(r,n){yr(r,n),wr(r,n);var e=new Uint8Array(32);return O(e,r,n),e},r.box.after=r.secretbox,r.box.open=function(n,e,t,o){var i=r.box.before(t,o);return r.secretbox.open(n,e,i)},r.box.open.after=r.secretbox.open,r.box.keyPair=function(){var r=new Uint8Array(Pr),n=new Uint8Array(Nr);return N(r,n),{publicKey:r,secretKey:n}},r.box.keyPair.fromSecretKey=function(r){if(yr(r),r.length!==Nr)throw new Error("bad secret key size");var n=new Uint8Array(Pr);return P(n,r),{publicKey:n,secretKey:new Uint8Array(r)}},r.box.publicKeyLength=Pr,r.box.secretKeyLength=Nr,r.box.sharedKeyLength=32,r.box.nonceLength=Or,r.box.overheadLength=r.secretbox.overheadLength,r.sign=function(r,n){if(yr(r,n),64!==n.length)throw new Error("bad secret key size");var e=new Uint8Array(64+r.length);return fr(e,r,r.length,n),e},r.sign.open=function(r,n){if(yr(r,n),32!==n.length)throw new Error("bad public key size");var e=new Uint8Array(r.length),t=ur(e,r,r.length,n);if(t<0)return null;for(var o=new Uint8Array(t),i=0;i<o.length;i++)o[i]=e[i];return o},r.sign.detached=function(n,e){for(var t=r.sign(n,e),o=new Uint8Array(64),i=0;i<o.length;i++)o[i]=t[i];return o},r.sign.detached.verify=function(r,n,e){if(yr(r,n,e),64!==n.length)throw new Error("bad signature size");if(32!==e.length)throw new Error("bad public key size");var t,o=new Uint8Array(64+r.length),i=new Uint8Array(64+r.length);for(t=0;t<64;t++)o[t]=n[t];for(t=0;t<r.length;t++)o[t+64]=r[t];return ur(i,o,o.length,e)>=0},r.sign.keyPair=function(){var r=new Uint8Array(32),n=new Uint8Array(64);return tr(r,n),{publicKey:r,secretKey:n}},r.sign.keyPair.fromSecretKey=function(r){if(yr(r),64!==r.length)throw new Error("bad secret key size");for(var n=new Uint8Array(32),e=0;e<n.length;e++)n[e]=r[32+e];return{publicKey:n,secretKey:new Uint8Array(r)}},r.sign.keyPair.fromSeed=function(r){if(yr(r),32!==r.length)throw new Error("bad seed size");for(var n=new Uint8Array(32),e=new Uint8Array(64),t=0;t<32;t++)e[t]=r[t];return tr(n,e,!0),{publicKey:n,secretKey:e}},r.sign.publicKeyLength=32,r.sign.secretKeyLength=64,r.sign.seedLength=32,r.sign.signatureLength=64,r.hash=function(r){yr(r);var n=new Uint8Array(64);return Q(n,r,r.length),n},r.hash.hashLength=64,r.verify=function(r,n){return yr(r,n),0!==r.length&&0!==n.length&&(r.length===n.length&&0===f(r,0,n,0,r.length))},r.setPRNG=function(r){vr=r},function(){var n="undefined"!=typeof self?self.crypto||self.msCrypto:null;if(n&&n.getRandomValues){r.setPRNG(function(r,e){var t,o=new Uint8Array(e);for(t=0;t<e;t+=65536)n.getRandomValues(o.subarray(t,t+Math.min(e-t,65536)));for(t=0;t<e;t++)r[t]=o[t];lr(o)})}else"undefined"!=typeof require&&(n=require("crypto"))&&n.randomBytes&&r.setPRNG(function(r,e){var t,o=n.randomBytes(e);for(t=0;t<e;t++)r[t]=o[t];lr(o)})}()}("undefined"!=typeof module&&module.exports?module.exports:self.nacl=self.nacl||{});
// Copyright (c) 2005  Tom Wu
// All Rights Reserved.
// See "LICENSE" for details.

// Basic JavaScript BN library - subset useful for RSA encryption.

// Bits per digit
var dbits;

// JavaScript engine analysis
var canary = 0xdeadbeefcafe;
var j_lm = ((canary&0xffffff)==0xefcafe);

// (public) Constructor
function BigInteger(a,b,c) {
  if(a != null)
    if("number" == typeof a) this.fromNumber(a,b,c);
    else if(b == null && "string" != typeof a) this.fromString(a,256);
    else this.fromString(a,b);
}

// return new, unset BigInteger
function nbi() { return new BigInteger(null); }

// am: Compute w_j += (x*this_i), propagate carries,
// c is initial carry, returns final carry.
// c < 3*dvalue, x < 2*dvalue, this_i < dvalue
// We need to select the fastest one that works in this environment.

// am1: use a single mult and divide to get the high bits,
// max digit bits should be 26 because
// max internal value = 2*dvalue^2-2*dvalue (< 2^53)
function am1(i,x,w,j,c,n) {
  while(--n >= 0) {
    var v = x*this[i++]+w[j]+c;
    c = Math.floor(v/0x4000000);
    w[j++] = v&0x3ffffff;
  }
  return c;
}
// am2 avoids a big mult-and-extract completely.
// Max digit bits should be <= 30 because we do bitwise ops
// on values up to 2*hdvalue^2-hdvalue-1 (< 2^31)
function am2(i,x,w,j,c,n) {
  var xl = x&0x7fff, xh = x>>15;
  while(--n >= 0) {
    var l = this[i]&0x7fff;
    var h = this[i++]>>15;
    var m = xh*l+h*xl;
    l = xl*l+((m&0x7fff)<<15)+w[j]+(c&0x3fffffff);
    c = (l>>>30)+(m>>>15)+xh*h+(c>>>30);
    w[j++] = l&0x3fffffff;
  }
  return c;
}
// Alternately, set max digit bits to 28 since some
// browsers slow down when dealing with 32-bit numbers.
function am3(i,x,w,j,c,n) {
  var xl = x&0x3fff, xh = x>>14;
  while(--n >= 0) {
    var l = this[i]&0x3fff;
    var h = this[i++]>>14;
    var m = xh*l+h*xl;
    l = xl*l+((m&0x3fff)<<14)+w[j]+c;
    c = (l>>28)+(m>>14)+xh*h;
    w[j++] = l&0xfffffff;
  }
  return c;
}
if(j_lm && (navigator.appName == "Microsoft Internet Explorer")) {
  BigInteger.prototype.am = am2;
  dbits = 30;
}
else if(j_lm && (navigator.appName != "Netscape")) {
  BigInteger.prototype.am = am1;
  dbits = 26;
}
else { // Mozilla/Netscape seems to prefer am3
  BigInteger.prototype.am = am3;
  dbits = 28;
}

BigInteger.prototype.DB = dbits;
BigInteger.prototype.DM = ((1<<dbits)-1);
BigInteger.prototype.DV = (1<<dbits);

var BI_FP = 52;
BigInteger.prototype.FV = Math.pow(2,BI_FP);
BigInteger.prototype.F1 = BI_FP-dbits;
BigInteger.prototype.F2 = 2*dbits-BI_FP;

// Digit conversions
var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
var BI_RC = new Array();
var rr,vv;
rr = "0".charCodeAt(0);
for(vv = 0; vv <= 9; ++vv) BI_RC[rr++] = vv;
rr = "a".charCodeAt(0);
for(vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
rr = "A".charCodeAt(0);
for(vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;

function int2char(n) { return BI_RM.charAt(n); }
function intAt(s,i) {
  var c = BI_RC[s.charCodeAt(i)];
  return (c==null)?-1:c;
}

// (protected) copy this to r
function bnpCopyTo(r) {
  for(var i = this.t-1; i >= 0; --i) r[i] = this[i];
  r.t = this.t;
  r.s = this.s;
}

// (protected) set from integer value x, -DV <= x < DV
function bnpFromInt(x) {
  this.t = 1;
  this.s = (x<0)?-1:0;
  if(x > 0) this[0] = x;
  else if(x < -1) this[0] = x+this.DV;
  else this.t = 0;
}

// return bigint initialized to value
function nbv(i) { var r = nbi(); r.fromInt(i); return r; }

// (protected) set from string and radix
function bnpFromString(s,b) {
  var k;
  if(b == 16) k = 4;
  else if(b == 8) k = 3;
  else if(b == 256) k = 8; // byte array
  else if(b == 2) k = 1;
  else if(b == 32) k = 5;
  else if(b == 4) k = 2;
  else { this.fromRadix(s,b); return; }
  this.t = 0;
  this.s = 0;
  var i = s.length, mi = false, sh = 0;
  while(--i >= 0) {
    var x = (k==8)?s[i]&0xff:intAt(s,i);
    if(x < 0) {
      if(s.charAt(i) == "-") mi = true;
      continue;
    }
    mi = false;
    if(sh == 0)
      this[this.t++] = x;
    else if(sh+k > this.DB) {
      this[this.t-1] |= (x&((1<<(this.DB-sh))-1))<<sh;
      this[this.t++] = (x>>(this.DB-sh));
    }
    else
      this[this.t-1] |= x<<sh;
    sh += k;
    if(sh >= this.DB) sh -= this.DB;
  }
  if(k == 8 && (s[0]&0x80) != 0) {
    this.s = -1;
    if(sh > 0) this[this.t-1] |= ((1<<(this.DB-sh))-1)<<sh;
  }
  this.clamp();
  if(mi) BigInteger.ZERO.subTo(this,this);
}

// (protected) clamp off excess high words
function bnpClamp() {
  var c = this.s&this.DM;
  while(this.t > 0 && this[this.t-1] == c) --this.t;
}

// (public) return string representation in given radix
function bnToString(b) {
  if(this.s < 0) return "-"+this.negate().toString(b);
  var k;
  if(b == 16) k = 4;
  else if(b == 8) k = 3;
  else if(b == 2) k = 1;
  else if(b == 32) k = 5;
  else if(b == 4) k = 2;
  else return this.toRadix(b);
  var km = (1<<k)-1, d, m = false, r = "", i = this.t;
  var p = this.DB-(i*this.DB)%k;
  if(i-- > 0) {
    if(p < this.DB && (d = this[i]>>p) > 0) { m = true; r = int2char(d); }
    while(i >= 0) {
      if(p < k) {
        d = (this[i]&((1<<p)-1))<<(k-p);
        d |= this[--i]>>(p+=this.DB-k);
      }
      else {
        d = (this[i]>>(p-=k))&km;
        if(p <= 0) { p += this.DB; --i; }
      }
      if(d > 0) m = true;
      if(m) r += int2char(d);
    }
  }
  return m?r:"0";
}

// (public) -this
function bnNegate() { var r = nbi(); BigInteger.ZERO.subTo(this,r); return r; }

// (public) |this|
function bnAbs() { return (this.s<0)?this.negate():this; }

// (public) return + if this > a, - if this < a, 0 if equal
function bnCompareTo(a) {
  var r = this.s-a.s;
  if(r != 0) return r;
  var i = this.t;
  r = i-a.t;
  if(r != 0) return (this.s<0)?-r:r;
  while(--i >= 0) if((r=this[i]-a[i]) != 0) return r;
  return 0;
}

// returns bit length of the integer x
function nbits(x) {
  var r = 1, t;
  if((t=x>>>16) != 0) { x = t; r += 16; }
  if((t=x>>8) != 0) { x = t; r += 8; }
  if((t=x>>4) != 0) { x = t; r += 4; }
  if((t=x>>2) != 0) { x = t; r += 2; }
  if((t=x>>1) != 0) { x = t; r += 1; }
  return r;
}

// (public) return the number of bits in "this"
function bnBitLength() {
  if(this.t <= 0) return 0;
  return this.DB*(this.t-1)+nbits(this[this.t-1]^(this.s&this.DM));
}

// (protected) r = this << n*DB
function bnpDLShiftTo(n,r) {
  var i;
  for(i = this.t-1; i >= 0; --i) r[i+n] = this[i];
  for(i = n-1; i >= 0; --i) r[i] = 0;
  r.t = this.t+n;
  r.s = this.s;
}

// (protected) r = this >> n*DB
function bnpDRShiftTo(n,r) {
  for(var i = n; i < this.t; ++i) r[i-n] = this[i];
  r.t = Math.max(this.t-n,0);
  r.s = this.s;
}

// (protected) r = this << n
function bnpLShiftTo(n,r) {
  var bs = n%this.DB;
  var cbs = this.DB-bs;
  var bm = (1<<cbs)-1;
  var ds = Math.floor(n/this.DB), c = (this.s<<bs)&this.DM, i;
  for(i = this.t-1; i >= 0; --i) {
    r[i+ds+1] = (this[i]>>cbs)|c;
    c = (this[i]&bm)<<bs;
  }
  for(i = ds-1; i >= 0; --i) r[i] = 0;
  r[ds] = c;
  r.t = this.t+ds+1;
  r.s = this.s;
  r.clamp();
}

// (protected) r = this >> n
function bnpRShiftTo(n,r) {
  r.s = this.s;
  var ds = Math.floor(n/this.DB);
  if(ds >= this.t) { r.t = 0; return; }
  var bs = n%this.DB;
  var cbs = this.DB-bs;
  var bm = (1<<bs)-1;
  r[0] = this[ds]>>bs;
  for(var i = ds+1; i < this.t; ++i) {
    r[i-ds-1] |= (this[i]&bm)<<cbs;
    r[i-ds] = this[i]>>bs;
  }
  if(bs > 0) r[this.t-ds-1] |= (this.s&bm)<<cbs;
  r.t = this.t-ds;
  r.clamp();
}

// (protected) r = this - a
function bnpSubTo(a,r) {
  var i = 0, c = 0, m = Math.min(a.t,this.t);
  while(i < m) {
    c += this[i]-a[i];
    r[i++] = c&this.DM;
    c >>= this.DB;
  }
  if(a.t < this.t) {
    c -= a.s;
    while(i < this.t) {
      c += this[i];
      r[i++] = c&this.DM;
      c >>= this.DB;
    }
    c += this.s;
  }
  else {
    c += this.s;
    while(i < a.t) {
      c -= a[i];
      r[i++] = c&this.DM;
      c >>= this.DB;
    }
    c -= a.s;
  }
  r.s = (c<0)?-1:0;
  if(c < -1) r[i++] = this.DV+c;
  else if(c > 0) r[i++] = c;
  r.t = i;
  r.clamp();
}

// (protected) r = this * a, r != this,a (HAC 14.12)
// "this" should be the larger one if appropriate.
function bnpMultiplyTo(a,r) {
  var x = this.abs(), y = a.abs();
  var i = x.t;
  r.t = i+y.t;
  while(--i >= 0) r[i] = 0;
  for(i = 0; i < y.t; ++i) r[i+x.t] = x.am(0,y[i],r,i,0,x.t);
  r.s = 0;
  r.clamp();
  if(this.s != a.s) BigInteger.ZERO.subTo(r,r);
}

// (protected) r = this^2, r != this (HAC 14.16)
function bnpSquareTo(r) {
  var x = this.abs();
  var i = r.t = 2*x.t;
  while(--i >= 0) r[i] = 0;
  for(i = 0; i < x.t-1; ++i) {
    var c = x.am(i,x[i],r,2*i,0,1);
    if((r[i+x.t]+=x.am(i+1,2*x[i],r,2*i+1,c,x.t-i-1)) >= x.DV) {
      r[i+x.t] -= x.DV;
      r[i+x.t+1] = 1;
    }
  }
  if(r.t > 0) r[r.t-1] += x.am(i,x[i],r,2*i,0,1);
  r.s = 0;
  r.clamp();
}

// (protected) divide this by m, quotient and remainder to q, r (HAC 14.20)
// r != q, this != m.  q or r may be null.
function bnpDivRemTo(m,q,r) {
  var pm = m.abs();
  if(pm.t <= 0) return;
  var pt = this.abs();
  if(pt.t < pm.t) {
    if(q != null) q.fromInt(0);
    if(r != null) this.copyTo(r);
    return;
  }
  if(r == null) r = nbi();
  var y = nbi(), ts = this.s, ms = m.s;
  var nsh = this.DB-nbits(pm[pm.t-1]);	// normalize modulus
  if(nsh > 0) { pm.lShiftTo(nsh,y); pt.lShiftTo(nsh,r); }
  else { pm.copyTo(y); pt.copyTo(r); }
  var ys = y.t;
  var y0 = y[ys-1];
  if(y0 == 0) return;
  var yt = y0*(1<<this.F1)+((ys>1)?y[ys-2]>>this.F2:0);
  var d1 = this.FV/yt, d2 = (1<<this.F1)/yt, e = 1<<this.F2;
  var i = r.t, j = i-ys, t = (q==null)?nbi():q;
  y.dlShiftTo(j,t);
  if(r.compareTo(t) >= 0) {
    r[r.t++] = 1;
    r.subTo(t,r);
  }
  BigInteger.ONE.dlShiftTo(ys,t);
  t.subTo(y,y);	// "negative" y so we can replace sub with am later
  while(y.t < ys) y[y.t++] = 0;
  while(--j >= 0) {
    // Estimate quotient digit
    var qd = (r[--i]==y0)?this.DM:Math.floor(r[i]*d1+(r[i-1]+e)*d2);
    if((r[i]+=y.am(0,qd,r,j,0,ys)) < qd) {	// Try it out
      y.dlShiftTo(j,t);
      r.subTo(t,r);
      while(r[i] < --qd) r.subTo(t,r);
    }
  }
  if(q != null) {
    r.drShiftTo(ys,q);
    if(ts != ms) BigInteger.ZERO.subTo(q,q);
  }
  r.t = ys;
  r.clamp();
  if(nsh > 0) r.rShiftTo(nsh,r);	// Denormalize remainder
  if(ts < 0) BigInteger.ZERO.subTo(r,r);
}

// (public) this mod a
function bnMod(a) {
  var r = nbi();
  this.abs().divRemTo(a,null,r);
  if(this.s < 0 && r.compareTo(BigInteger.ZERO) > 0) a.subTo(r,r);
  return r;
}

// Modular reduction using "classic" algorithm
function Classic(m) { this.m = m; }
function cConvert(x) {
  if(x.s < 0 || x.compareTo(this.m) >= 0) return x.mod(this.m);
  else return x;
}
function cRevert(x) { return x; }
function cReduce(x) { x.divRemTo(this.m,null,x); }
function cMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }
function cSqrTo(x,r) { x.squareTo(r); this.reduce(r); }

Classic.prototype.convert = cConvert;
Classic.prototype.revert = cRevert;
Classic.prototype.reduce = cReduce;
Classic.prototype.mulTo = cMulTo;
Classic.prototype.sqrTo = cSqrTo;

// (protected) return "-1/this % 2^DB"; useful for Mont. reduction
// justification:
//         xy == 1 (mod m)
//         xy =  1+km
//   xy(2-xy) = (1+km)(1-km)
// x[y(2-xy)] = 1-k^2m^2
// x[y(2-xy)] == 1 (mod m^2)
// if y is 1/x mod m, then y(2-xy) is 1/x mod m^2
// should reduce x and y(2-xy) by m^2 at each step to keep size bounded.
// JS multiply "overflows" differently from C/C++, so care is needed here.
function bnpInvDigit() {
  if(this.t < 1) return 0;
  var x = this[0];
  if((x&1) == 0) return 0;
  var y = x&3;		// y == 1/x mod 2^2
  y = (y*(2-(x&0xf)*y))&0xf;	// y == 1/x mod 2^4
  y = (y*(2-(x&0xff)*y))&0xff;	// y == 1/x mod 2^8
  y = (y*(2-(((x&0xffff)*y)&0xffff)))&0xffff;	// y == 1/x mod 2^16
  // last step - calculate inverse mod DV directly;
  // assumes 16 < DB <= 32 and assumes ability to handle 48-bit ints
  y = (y*(2-x*y%this.DV))%this.DV;		// y == 1/x mod 2^dbits
  // we really want the negative inverse, and -DV < y < DV
  return (y>0)?this.DV-y:-y;
}

// Montgomery reduction
function Montgomery(m) {
  this.m = m;
  this.mp = m.invDigit();
  this.mpl = this.mp&0x7fff;
  this.mph = this.mp>>15;
  this.um = (1<<(m.DB-15))-1;
  this.mt2 = 2*m.t;
}

// xR mod m
function montConvert(x) {
  var r = nbi();
  x.abs().dlShiftTo(this.m.t,r);
  r.divRemTo(this.m,null,r);
  if(x.s < 0 && r.compareTo(BigInteger.ZERO) > 0) this.m.subTo(r,r);
  return r;
}

// x/R mod m
function montRevert(x) {
  var r = nbi();
  x.copyTo(r);
  this.reduce(r);
  return r;
}

// x = x/R mod m (HAC 14.32)
function montReduce(x) {
  while(x.t <= this.mt2)	// pad x so am has enough room later
    x[x.t++] = 0;
  for(var i = 0; i < this.m.t; ++i) {
    // faster way of calculating u0 = x[i]*mp mod DV
    var j = x[i]&0x7fff;
    var u0 = (j*this.mpl+(((j*this.mph+(x[i]>>15)*this.mpl)&this.um)<<15))&x.DM;
    // use am to combine the multiply-shift-add into one call
    j = i+this.m.t;
    x[j] += this.m.am(0,u0,x,i,0,this.m.t);
    // propagate carry
    while(x[j] >= x.DV) { x[j] -= x.DV; x[++j]++; }
  }
  x.clamp();
  x.drShiftTo(this.m.t,x);
  if(x.compareTo(this.m) >= 0) x.subTo(this.m,x);
}

// r = "x^2/R mod m"; x != r
function montSqrTo(x,r) { x.squareTo(r); this.reduce(r); }

// r = "xy/R mod m"; x,y != r
function montMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }

Montgomery.prototype.convert = montConvert;
Montgomery.prototype.revert = montRevert;
Montgomery.prototype.reduce = montReduce;
Montgomery.prototype.mulTo = montMulTo;
Montgomery.prototype.sqrTo = montSqrTo;

// (protected) true iff this is even
function bnpIsEven() { return ((this.t>0)?(this[0]&1):this.s) == 0; }

// (protected) this^e, e < 2^32, doing sqr and mul with "r" (HAC 14.79)
function bnpExp(e,z) {
  if(e > 0xffffffff || e < 1) return BigInteger.ONE;
  var r = nbi(), r2 = nbi(), g = z.convert(this), i = nbits(e)-1;
  g.copyTo(r);
  while(--i >= 0) {
    z.sqrTo(r,r2);
    if((e&(1<<i)) > 0) z.mulTo(r2,g,r);
    else { var t = r; r = r2; r2 = t; }
  }
  return z.revert(r);
}

// (public) this^e % m, 0 <= e < 2^32
function bnModPowInt(e,m) {
  var z;
  if(e < 256 || m.isEven()) z = new Classic(m); else z = new Montgomery(m);
  return this.exp(e,z);
}

// protected
BigInteger.prototype.copyTo = bnpCopyTo;
BigInteger.prototype.fromInt = bnpFromInt;
BigInteger.prototype.fromString = bnpFromString;
BigInteger.prototype.clamp = bnpClamp;
BigInteger.prototype.dlShiftTo = bnpDLShiftTo;
BigInteger.prototype.drShiftTo = bnpDRShiftTo;
BigInteger.prototype.lShiftTo = bnpLShiftTo;
BigInteger.prototype.rShiftTo = bnpRShiftTo;
BigInteger.prototype.subTo = bnpSubTo;
BigInteger.prototype.multiplyTo = bnpMultiplyTo;
BigInteger.prototype.squareTo = bnpSquareTo;
BigInteger.prototype.divRemTo = bnpDivRemTo;
BigInteger.prototype.invDigit = bnpInvDigit;
BigInteger.prototype.isEven = bnpIsEven;
BigInteger.prototype.exp = bnpExp;

// public
BigInteger.prototype.toString = bnToString;
BigInteger.prototype.negate = bnNegate;
BigInteger.prototype.abs = bnAbs;
BigInteger.prototype.compareTo = bnCompareTo;
BigInteger.prototype.bitLength = bnBitLength;
BigInteger.prototype.mod = bnMod;
BigInteger.prototype.modPowInt = bnModPowInt;

// "constants"
BigInteger.ZERO = nbv(0);
BigInteger.ONE = nbv(1);

// Copyright (c) 2005-2009  Tom Wu
// All Rights Reserved.
// See "LICENSE" for details.

// Extended JavaScript BN functions, required for RSA private ops.

// Version 1.1: new BigInteger("0", 10) returns "proper" zero
// Version 1.2: square() API, isProbablePrime fix

// (public)
function bnClone() { var r = nbi(); this.copyTo(r); return r; }

// (public) return value as integer
function bnIntValue() {
  if(this.s < 0) {
    if(this.t == 1) return this[0]-this.DV;
    else if(this.t == 0) return -1;
  }
  else if(this.t == 1) return this[0];
  else if(this.t == 0) return 0;
  // assumes 16 < DB < 32
  return ((this[1]&((1<<(32-this.DB))-1))<<this.DB)|this[0];
}

// (public) return value as byte
function bnByteValue() { return (this.t==0)?this.s:(this[0]<<24)>>24; }

// (public) return value as short (assumes DB>=16)
function bnShortValue() { return (this.t==0)?this.s:(this[0]<<16)>>16; }

// (protected) return x s.t. r^x < DV
function bnpChunkSize(r) { return Math.floor(Math.LN2*this.DB/Math.log(r)); }

// (public) 0 if this == 0, 1 if this > 0
function bnSigNum() {
  if(this.s < 0) return -1;
  else if(this.t <= 0 || (this.t == 1 && this[0] <= 0)) return 0;
  else return 1;
}

// (protected) convert to radix string
function bnpToRadix(b) {
  if(b == null) b = 10;
  if(this.signum() == 0 || b < 2 || b > 36) return "0";
  var cs = this.chunkSize(b);
  var a = Math.pow(b,cs);
  var d = nbv(a), y = nbi(), z = nbi(), r = "";
  this.divRemTo(d,y,z);
  while(y.signum() > 0) {
    r = (a+z.intValue()).toString(b).substr(1) + r;
    y.divRemTo(d,y,z);
  }
  return z.intValue().toString(b) + r;
}

// (protected) convert from radix string
function bnpFromRadix(s,b) {
  this.fromInt(0);
  if(b == null) b = 10;
  var cs = this.chunkSize(b);
  var d = Math.pow(b,cs), mi = false, j = 0, w = 0;
  for(var i = 0; i < s.length; ++i) {
    var x = intAt(s,i);
    if(x < 0) {
      if(s.charAt(i) == "-" && this.signum() == 0) mi = true;
      continue;
    }
    w = b*w+x;
    if(++j >= cs) {
      this.dMultiply(d);
      this.dAddOffset(w,0);
      j = 0;
      w = 0;
    }
  }
  if(j > 0) {
    this.dMultiply(Math.pow(b,j));
    this.dAddOffset(w,0);
  }
  if(mi) BigInteger.ZERO.subTo(this,this);
}

// (protected) alternate constructor
function bnpFromNumber(a,b,c) {
  if("number" == typeof b) {
    // new BigInteger(int,int,RNG)
    if(a < 2) this.fromInt(1);
    else {
      this.fromNumber(a,c);
      if(!this.testBit(a-1))	// force MSB set
        this.bitwiseTo(BigInteger.ONE.shiftLeft(a-1),op_or,this);
      if(this.isEven()) this.dAddOffset(1,0); // force odd
      while(!this.isProbablePrime(b)) {
        this.dAddOffset(2,0);
        if(this.bitLength() > a) this.subTo(BigInteger.ONE.shiftLeft(a-1),this);
      }
    }
  }
  else {
    // new BigInteger(int,RNG)
    var x = new Array(), t = a&7;
    x.length = (a>>3)+1;
    b.nextBytes(x);
    if(t > 0) x[0] &= ((1<<t)-1); else x[0] = 0;
    this.fromString(x,256);
  }
}

// (public) convert to bigendian byte array
function bnToByteArray() {
  var i = this.t, r = new Array();
  r[0] = this.s;
  var p = this.DB-(i*this.DB)%8, d, k = 0;
  if(i-- > 0) {
    if(p < this.DB && (d = this[i]>>p) != (this.s&this.DM)>>p)
      r[k++] = d|(this.s<<(this.DB-p));
    while(i >= 0) {
      if(p < 8) {
        d = (this[i]&((1<<p)-1))<<(8-p);
        d |= this[--i]>>(p+=this.DB-8);
      }
      else {
        d = (this[i]>>(p-=8))&0xff;
        if(p <= 0) { p += this.DB; --i; }
      }
      if((d&0x80) != 0) d |= -256;
      if(k == 0 && (this.s&0x80) != (d&0x80)) ++k;
      if(k > 0 || d != this.s) r[k++] = d;
    }
  }
  return r;
}

function bnEquals(a) { return(this.compareTo(a)==0); }
function bnMin(a) { return(this.compareTo(a)<0)?this:a; }
function bnMax(a) { return(this.compareTo(a)>0)?this:a; }

// (protected) r = this op a (bitwise)
function bnpBitwiseTo(a,op,r) {
  var i, f, m = Math.min(a.t,this.t);
  for(i = 0; i < m; ++i) r[i] = op(this[i],a[i]);
  if(a.t < this.t) {
    f = a.s&this.DM;
    for(i = m; i < this.t; ++i) r[i] = op(this[i],f);
    r.t = this.t;
  }
  else {
    f = this.s&this.DM;
    for(i = m; i < a.t; ++i) r[i] = op(f,a[i]);
    r.t = a.t;
  }
  r.s = op(this.s,a.s);
  r.clamp();
}

// (public) this & a
function op_and(x,y) { return x&y; }
function bnAnd(a) { var r = nbi(); this.bitwiseTo(a,op_and,r); return r; }

// (public) this | a
function op_or(x,y) { return x|y; }
function bnOr(a) { var r = nbi(); this.bitwiseTo(a,op_or,r); return r; }

// (public) this ^ a
function op_xor(x,y) { return x^y; }
function bnXor(a) { var r = nbi(); this.bitwiseTo(a,op_xor,r); return r; }

// (public) this & ~a
function op_andnot(x,y) { return x&~y; }
function bnAndNot(a) { var r = nbi(); this.bitwiseTo(a,op_andnot,r); return r; }

// (public) ~this
function bnNot() {
  var r = nbi();
  for(var i = 0; i < this.t; ++i) r[i] = this.DM&~this[i];
  r.t = this.t;
  r.s = ~this.s;
  return r;
}

// (public) this << n
function bnShiftLeft(n) {
  var r = nbi();
  if(n < 0) this.rShiftTo(-n,r); else this.lShiftTo(n,r);
  return r;
}

// (public) this >> n
function bnShiftRight(n) {
  var r = nbi();
  if(n < 0) this.lShiftTo(-n,r); else this.rShiftTo(n,r);
  return r;
}

// return index of lowest 1-bit in x, x < 2^31
function lbit(x) {
  if(x == 0) return -1;
  var r = 0;
  if((x&0xffff) == 0) { x >>= 16; r += 16; }
  if((x&0xff) == 0) { x >>= 8; r += 8; }
  if((x&0xf) == 0) { x >>= 4; r += 4; }
  if((x&3) == 0) { x >>= 2; r += 2; }
  if((x&1) == 0) ++r;
  return r;
}

// (public) returns index of lowest 1-bit (or -1 if none)
function bnGetLowestSetBit() {
  for(var i = 0; i < this.t; ++i)
    if(this[i] != 0) return i*this.DB+lbit(this[i]);
  if(this.s < 0) return this.t*this.DB;
  return -1;
}

// return number of 1 bits in x
function cbit(x) {
  var r = 0;
  while(x != 0) { x &= x-1; ++r; }
  return r;
}

// (public) return number of set bits
function bnBitCount() {
  var r = 0, x = this.s&this.DM;
  for(var i = 0; i < this.t; ++i) r += cbit(this[i]^x);
  return r;
}

// (public) true iff nth bit is set
function bnTestBit(n) {
  var j = Math.floor(n/this.DB);
  if(j >= this.t) return(this.s!=0);
  return((this[j]&(1<<(n%this.DB)))!=0);
}

// (protected) this op (1<<n)
function bnpChangeBit(n,op) {
  var r = BigInteger.ONE.shiftLeft(n);
  this.bitwiseTo(r,op,r);
  return r;
}

// (public) this | (1<<n)
function bnSetBit(n) { return this.changeBit(n,op_or); }

// (public) this & ~(1<<n)
function bnClearBit(n) { return this.changeBit(n,op_andnot); }

// (public) this ^ (1<<n)
function bnFlipBit(n) { return this.changeBit(n,op_xor); }

// (protected) r = this + a
function bnpAddTo(a,r) {
  var i = 0, c = 0, m = Math.min(a.t,this.t);
  while(i < m) {
    c += this[i]+a[i];
    r[i++] = c&this.DM;
    c >>= this.DB;
  }
  if(a.t < this.t) {
    c += a.s;
    while(i < this.t) {
      c += this[i];
      r[i++] = c&this.DM;
      c >>= this.DB;
    }
    c += this.s;
  }
  else {
    c += this.s;
    while(i < a.t) {
      c += a[i];
      r[i++] = c&this.DM;
      c >>= this.DB;
    }
    c += a.s;
  }
  r.s = (c<0)?-1:0;
  if(c > 0) r[i++] = c;
  else if(c < -1) r[i++] = this.DV+c;
  r.t = i;
  r.clamp();
}

// (public) this + a
function bnAdd(a) { var r = nbi(); this.addTo(a,r); return r; }

// (public) this - a
function bnSubtract(a) { var r = nbi(); this.subTo(a,r); return r; }

// (public) this * a
function bnMultiply(a) { var r = nbi(); this.multiplyTo(a,r); return r; }

// (public) this^2
function bnSquare() { var r = nbi(); this.squareTo(r); return r; }

// (public) this / a
function bnDivide(a) { var r = nbi(); this.divRemTo(a,r,null); return r; }

// (public) this % a
function bnRemainder(a) { var r = nbi(); this.divRemTo(a,null,r); return r; }

// (public) [this/a,this%a]
function bnDivideAndRemainder(a) {
  var q = nbi(), r = nbi();
  this.divRemTo(a,q,r);
  return new Array(q,r);
}

// (protected) this *= n, this >= 0, 1 < n < DV
function bnpDMultiply(n) {
  this[this.t] = this.am(0,n-1,this,0,0,this.t);
  ++this.t;
  this.clamp();
}

// (protected) this += n << w words, this >= 0
function bnpDAddOffset(n,w) {
  if(n == 0) return;
  while(this.t <= w) this[this.t++] = 0;
  this[w] += n;
  while(this[w] >= this.DV) {
    this[w] -= this.DV;
    if(++w >= this.t) this[this.t++] = 0;
    ++this[w];
  }
}

// A "null" reducer
function NullExp() {}
function nNop(x) { return x; }
function nMulTo(x,y,r) { x.multiplyTo(y,r); }
function nSqrTo(x,r) { x.squareTo(r); }

NullExp.prototype.convert = nNop;
NullExp.prototype.revert = nNop;
NullExp.prototype.mulTo = nMulTo;
NullExp.prototype.sqrTo = nSqrTo;

// (public) this^e
function bnPow(e) { return this.exp(e,new NullExp()); }

// (protected) r = lower n words of "this * a", a.t <= n
// "this" should be the larger one if appropriate.
function bnpMultiplyLowerTo(a,n,r) {
  var i = Math.min(this.t+a.t,n);
  r.s = 0; // assumes a,this >= 0
  r.t = i;
  while(i > 0) r[--i] = 0;
  var j;
  for(j = r.t-this.t; i < j; ++i) r[i+this.t] = this.am(0,a[i],r,i,0,this.t);
  for(j = Math.min(a.t,n); i < j; ++i) this.am(0,a[i],r,i,0,n-i);
  r.clamp();
}

// (protected) r = "this * a" without lower n words, n > 0
// "this" should be the larger one if appropriate.
function bnpMultiplyUpperTo(a,n,r) {
  --n;
  var i = r.t = this.t+a.t-n;
  r.s = 0; // assumes a,this >= 0
  while(--i >= 0) r[i] = 0;
  for(i = Math.max(n-this.t,0); i < a.t; ++i)
    r[this.t+i-n] = this.am(n-i,a[i],r,0,0,this.t+i-n);
  r.clamp();
  r.drShiftTo(1,r);
}

// Barrett modular reduction
function Barrett(m) {
  // setup Barrett
  this.r2 = nbi();
  this.q3 = nbi();
  BigInteger.ONE.dlShiftTo(2*m.t,this.r2);
  this.mu = this.r2.divide(m);
  this.m = m;
}

function barrettConvert(x) {
  if(x.s < 0 || x.t > 2*this.m.t) return x.mod(this.m);
  else if(x.compareTo(this.m) < 0) return x;
  else { var r = nbi(); x.copyTo(r); this.reduce(r); return r; }
}

function barrettRevert(x) { return x; }

// x = x mod m (HAC 14.42)
function barrettReduce(x) {
  x.drShiftTo(this.m.t-1,this.r2);
  if(x.t > this.m.t+1) { x.t = this.m.t+1; x.clamp(); }
  this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3);
  this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);
  while(x.compareTo(this.r2) < 0) x.dAddOffset(1,this.m.t+1);
  x.subTo(this.r2,x);
  while(x.compareTo(this.m) >= 0) x.subTo(this.m,x);
}

// r = x^2 mod m; x != r
function barrettSqrTo(x,r) { x.squareTo(r); this.reduce(r); }

// r = x*y mod m; x,y != r
function barrettMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }

Barrett.prototype.convert = barrettConvert;
Barrett.prototype.revert = barrettRevert;
Barrett.prototype.reduce = barrettReduce;
Barrett.prototype.mulTo = barrettMulTo;
Barrett.prototype.sqrTo = barrettSqrTo;

// (public) this^e % m (HAC 14.85)
function bnModPow(e,m) {
  var i = e.bitLength(), k, r = nbv(1), z;
  if(i <= 0) return r;
  else if(i < 18) k = 1;
  else if(i < 48) k = 3;
  else if(i < 144) k = 4;
  else if(i < 768) k = 5;
  else k = 6;
  if(i < 8)
    z = new Classic(m);
  else if(m.isEven())
    z = new Barrett(m);
  else
    z = new Montgomery(m);

  // precomputation
  var g = new Array(), n = 3, k1 = k-1, km = (1<<k)-1;
  g[1] = z.convert(this);
  if(k > 1) {
    var g2 = nbi();
    z.sqrTo(g[1],g2);
    while(n <= km) {
      g[n] = nbi();
      z.mulTo(g2,g[n-2],g[n]);
      n += 2;
    }
  }

  var j = e.t-1, w, is1 = true, r2 = nbi(), t;
  i = nbits(e[j])-1;
  while(j >= 0) {
    if(i >= k1) w = (e[j]>>(i-k1))&km;
    else {
      w = (e[j]&((1<<(i+1))-1))<<(k1-i);
      if(j > 0) w |= e[j-1]>>(this.DB+i-k1);
    }

    n = k;
    while((w&1) == 0) { w >>= 1; --n; }
    if((i -= n) < 0) { i += this.DB; --j; }
    if(is1) {	// ret == 1, don't bother squaring or multiplying it
      g[w].copyTo(r);
      is1 = false;
    }
    else {
      while(n > 1) { z.sqrTo(r,r2); z.sqrTo(r2,r); n -= 2; }
      if(n > 0) z.sqrTo(r,r2); else { t = r; r = r2; r2 = t; }
      z.mulTo(r2,g[w],r);
    }

    while(j >= 0 && (e[j]&(1<<i)) == 0) {
      z.sqrTo(r,r2); t = r; r = r2; r2 = t;
      if(--i < 0) { i = this.DB-1; --j; }
    }
  }
  return z.revert(r);
}

// (public) gcd(this,a) (HAC 14.54)
function bnGCD(a) {
  var x = (this.s<0)?this.negate():this.clone();
  var y = (a.s<0)?a.negate():a.clone();
  if(x.compareTo(y) < 0) { var t = x; x = y; y = t; }
  var i = x.getLowestSetBit(), g = y.getLowestSetBit();
  if(g < 0) return x;
  if(i < g) g = i;
  if(g > 0) {
    x.rShiftTo(g,x);
    y.rShiftTo(g,y);
  }
  while(x.signum() > 0) {
    if((i = x.getLowestSetBit()) > 0) x.rShiftTo(i,x);
    if((i = y.getLowestSetBit()) > 0) y.rShiftTo(i,y);
    if(x.compareTo(y) >= 0) {
      x.subTo(y,x);
      x.rShiftTo(1,x);
    }
    else {
      y.subTo(x,y);
      y.rShiftTo(1,y);
    }
  }
  if(g > 0) y.lShiftTo(g,y);
  return y;
}

// (protected) this % n, n < 2^26
function bnpModInt(n) {
  if(n <= 0) return 0;
  var d = this.DV%n, r = (this.s<0)?n-1:0;
  if(this.t > 0)
    if(d == 0) r = this[0]%n;
    else for(var i = this.t-1; i >= 0; --i) r = (d*r+this[i])%n;
  return r;
}

// (public) 1/this % m (HAC 14.61)
function bnModInverse(m) {
  var ac = m.isEven();
  if((this.isEven() && ac) || m.signum() == 0) return BigInteger.ZERO;
  var u = m.clone(), v = this.clone();
  var a = nbv(1), b = nbv(0), c = nbv(0), d = nbv(1);
  while(u.signum() != 0) {
    while(u.isEven()) {
      u.rShiftTo(1,u);
      if(ac) {
        if(!a.isEven() || !b.isEven()) { a.addTo(this,a); b.subTo(m,b); }
        a.rShiftTo(1,a);
      }
      else if(!b.isEven()) b.subTo(m,b);
      b.rShiftTo(1,b);
    }
    while(v.isEven()) {
      v.rShiftTo(1,v);
      if(ac) {
        if(!c.isEven() || !d.isEven()) { c.addTo(this,c); d.subTo(m,d); }
        c.rShiftTo(1,c);
      }
      else if(!d.isEven()) d.subTo(m,d);
      d.rShiftTo(1,d);
    }
    if(u.compareTo(v) >= 0) {
      u.subTo(v,u);
      if(ac) a.subTo(c,a);
      b.subTo(d,b);
    }
    else {
      v.subTo(u,v);
      if(ac) c.subTo(a,c);
      d.subTo(b,d);
    }
  }
  if(v.compareTo(BigInteger.ONE) != 0) return BigInteger.ZERO;
  if(d.compareTo(m) >= 0) return d.subtract(m);
  if(d.signum() < 0) d.addTo(m,d); else return d;
  if(d.signum() < 0) return d.add(m); else return d;
}

var lowprimes = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997];
var lplim = (1<<26)/lowprimes[lowprimes.length-1];

// (public) test primality with certainty >= 1-.5^t
function bnIsProbablePrime(t) {
  var i, x = this.abs();
  if(x.t == 1 && x[0] <= lowprimes[lowprimes.length-1]) {
    for(i = 0; i < lowprimes.length; ++i)
      if(x[0] == lowprimes[i]) return true;
    return false;
  }
  if(x.isEven()) return false;
  i = 1;
  while(i < lowprimes.length) {
    var m = lowprimes[i], j = i+1;
    while(j < lowprimes.length && m < lplim) m *= lowprimes[j++];
    m = x.modInt(m);
    while(i < j) if(m%lowprimes[i++] == 0) return false;
  }
  return x.millerRabin(t);
}

// (protected) true if probably prime (HAC 4.24, Miller-Rabin)
function bnpMillerRabin(t) {
  var n1 = this.subtract(BigInteger.ONE);
  var k = n1.getLowestSetBit();
  if(k <= 0) return false;
  var r = n1.shiftRight(k);
  t = (t+1)>>1;
  if(t > lowprimes.length) t = lowprimes.length;
  var a = nbi();
  for(var i = 0; i < t; ++i) {
    //Pick bases at random, instead of starting at 2
    a.fromInt(lowprimes[Math.floor(Math.random()*lowprimes.length)]);
    var y = a.modPow(r,this);
    if(y.compareTo(BigInteger.ONE) != 0 && y.compareTo(n1) != 0) {
      var j = 1;
      while(j++ < k && y.compareTo(n1) != 0) {
        y = y.modPowInt(2,this);
        if(y.compareTo(BigInteger.ONE) == 0) return false;
      }
      if(y.compareTo(n1) != 0) return false;
    }
  }
  return true;
}

// protected
BigInteger.prototype.chunkSize = bnpChunkSize;
BigInteger.prototype.toRadix = bnpToRadix;
BigInteger.prototype.fromRadix = bnpFromRadix;
BigInteger.prototype.fromNumber = bnpFromNumber;
BigInteger.prototype.bitwiseTo = bnpBitwiseTo;
BigInteger.prototype.changeBit = bnpChangeBit;
BigInteger.prototype.addTo = bnpAddTo;
BigInteger.prototype.dMultiply = bnpDMultiply;
BigInteger.prototype.dAddOffset = bnpDAddOffset;
BigInteger.prototype.multiplyLowerTo = bnpMultiplyLowerTo;
BigInteger.prototype.multiplyUpperTo = bnpMultiplyUpperTo;
BigInteger.prototype.modInt = bnpModInt;
BigInteger.prototype.millerRabin = bnpMillerRabin;

// public
BigInteger.prototype.clone = bnClone;
BigInteger.prototype.intValue = bnIntValue;
BigInteger.prototype.byteValue = bnByteValue;
BigInteger.prototype.shortValue = bnShortValue;
BigInteger.prototype.signum = bnSigNum;
BigInteger.prototype.toByteArray = bnToByteArray;
BigInteger.prototype.equals = bnEquals;
BigInteger.prototype.min = bnMin;
BigInteger.prototype.max = bnMax;
BigInteger.prototype.and = bnAnd;
BigInteger.prototype.or = bnOr;
BigInteger.prototype.xor = bnXor;
BigInteger.prototype.andNot = bnAndNot;
BigInteger.prototype.not = bnNot;
BigInteger.prototype.shiftLeft = bnShiftLeft;
BigInteger.prototype.shiftRight = bnShiftRight;
BigInteger.prototype.getLowestSetBit = bnGetLowestSetBit;
BigInteger.prototype.bitCount = bnBitCount;
BigInteger.prototype.testBit = bnTestBit;
BigInteger.prototype.setBit = bnSetBit;
BigInteger.prototype.clearBit = bnClearBit;
BigInteger.prototype.flipBit = bnFlipBit;
BigInteger.prototype.add = bnAdd;
BigInteger.prototype.subtract = bnSubtract;
BigInteger.prototype.multiply = bnMultiply;
BigInteger.prototype.divide = bnDivide;
BigInteger.prototype.remainder = bnRemainder;
BigInteger.prototype.divideAndRemainder = bnDivideAndRemainder;
BigInteger.prototype.modPow = bnModPow;
BigInteger.prototype.modInverse = bnModInverse;
BigInteger.prototype.pow = bnPow;
BigInteger.prototype.gcd = bnGCD;
BigInteger.prototype.isProbablePrime = bnIsProbablePrime;

// JSBN-specific extension
BigInteger.prototype.square = bnSquare;

// BigInteger interfaces not implemented in jsbn:

// BigInteger(int signum, byte[] magnitude)
// double doubleValue()
// float floatValue()
// int hashCode()
// long longValue()
// static BigInteger valueOf(long val)

/* based on https://github.com/jbenet/go-base58/blob/master/base58.go */

var base58 = {
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
    bigRadix: new BigInteger("58"),

    byte_array: function(s) {
        var arr = [];
        for (var i = 0; i < s.length; i++) {
            arr.push(s.charCodeAt(i));
        }
        return arr;
    },
    string: function(arr) {
        var s = '';
        for (var i = 0; i < arr.length; i++) {
            s += String.fromCharCode(arr[i]);
        }
        return s;
    },

    // take byte array as input, give string as output
    encode: function(plain) {
        // create a copy with an extra leading 0 byte so that BigInteger
        // doesn't treat "plain" as a two's-complement value
        var plain_with_leading_zero = plain.slice();
        var x = new BigInteger(plain_with_leading_zero, 256);

        var answer = '';

        while (x.compareTo(BigInteger.ZERO) > 0) {
            var mod = new BigInteger();
            x.divRemTo(base58.bigRadix, x, mod);
            answer = base58.alphabet.charAt(Number(mod.toString())) + answer;
        }

        for (var i = 0; i < plain.length; i++) {
            if (plain[i] != 0)
                break;
            answer = base58.alphabet.charAt(0) + answer;
        }

        return answer;
    },
    // take string as input, give byte array as output
    decode: function(encoded) {
        if (encoded == '')
            return '';

        var answer = new BigInteger("0");
        var j = new BigInteger("1");

        for (var i = encoded.length-1; i >= 0; i--) {
            var tmp = base58.alphabet.indexOf(encoded.charAt(i));
            if (tmp == -1) {
                // TODO: throw error?
                return undefined;
            }
            var idx = new BigInteger("" + tmp);
            var tmp1 = new BigInteger(j.toString());
            tmp1.dMultiply(idx);
            answer = answer.add(tmp1);
            j.dMultiply(base58.bigRadix);
        }

        var ans = answer.toByteArray();
        while (ans[0] == 0)
            ans.shift();

        for (var i = 0; i < encoded.length; i++) {
            if (encoded.charAt(i) != base58.alphabet[0]) {
                break;
            }
            ans.unshift(0);
        }

        return ans;
    },
};

class Tonspack{
  constructor(uuid,config)
  {
      if(uuid)
      {
          this.uuid = uuid
      }else{
          this.uuid = crypto.randomUUID();
      }

      if(config?.baseurl)
      {
          this.baseurl = config.baseurl
      }else{
          this.baseurl = "https://pack.tons.ink/api"
      }

      if(config?.actionUrl)
      {
          this.actionUrl = config.actionUrl
      }else{
          this.actionUrl = 'https://t.me/tonspack_bot/connect?startapp='
      }

      if(config?.loopInterval)
      {
          this.loopInterval = config.loopInterval
      }else{
          this.loopInterval = 500 //0.5
      }

      if(config?.loopTimeout)
      {
          this.loopTimeout = config.loopTimeout
      }else{
          this.loopTimeout = 120 //1min
      }

      this.encryptionKp = nacl.box.keyPair()
  }

  encode(pubKey, msg) {
    try{
      let ephemKeys = nacl.box.keyPair()
      let msgArr = Buffer.from(msg)
      let nonce = nacl.randomBytes(nacl.box.nonceLength)
      let encrypted = nacl.box(
          msgArr,
          nonce,
          pubKey,
          ephemKeys.secretKey
      )
      let nonce64 = Buffer.from(nonce).toString("base64")
      let pubKey64 = Buffer.from(ephemKeys.publicKey).toString("base64")
      let encrypted64 = Buffer.from(encrypted).toString("base64")
      return {nonce: nonce64, ephemPubKey: pubKey64, encrypted: encrypted64}
    }catch(e)
    {
      return false;
    }
  }

  decode(secretKey , encryption)
  {
    try{
      const decode =  nacl.box.open( 
        new Uint8Array(Buffer.from(encryption.encrypted,"base64")),
        new Uint8Array(Buffer.from(encryption.nonce,"base64")),
        new Uint8Array(Buffer.from(encryption.ephemPubKey,"base64")),
        secretKey
      )
      return  Buffer.from(decode).toString("utf8")
    }catch(e)
    {
      return false;
    }
  }
  async loopCheck() {
      for(var i = 0 ; i < this.loopTimeout ; i++)
      {
          const ret = await this.check_request_action()
          if(ret?.data)
          {
            if(ret?.key && ret?.key.length > 10)
            {
              let retJson = JSON.parse(ret.data)
              {
                return this.decode(this.encryptionKp.secretKey,retJson)
              }
            }else{
              return ret.data
            }
          }
          await this.sleep(this.loopInterval)
      }
      return {
          status:false,
          reason:"user operation timeout"
      }
  }

  async sleep (ms) {
      return new Promise((resolve) => {
      setTimeout(resolve, ms);
      });
  }
  async check_request_action(){
      try{
          return (await fetch(this.baseurl+'/result/'+this.uuid,{
              method: "GET",
              headers: {},
              redirect: 'follow'
          })).json()
      }catch(e)
      {
          console.error(e)
          return false;
      }
  }

  async connect(chian,redirect) {
      const site = window.location.origin
      
      const d =  {
                      t:0,
                      i:this.uuid, 
                      d:site, 
                      c:chian, 
                      r:redirect || null,
                      k:Buffer.from(this.encryptionKp.publicKey).toString("base64") // Add public Key to do msg reply encryption
                  }
      window.open(this.actionUrl+base58.encode(Buffer.from(JSON.stringify(d))),"newwindow","height=800, width=400, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no");
      return await this.loopCheck()
  }

  async sign(chian,sign,redirect,preconnect) {
      var d =  {
                      t:1,
                      i:this.uuid, 
                      d:sign, 
                      c:chian, 
                      r:redirect || null,
                      k:Buffer.from(this.encryptionKp.publicKey).toString("base64")// Add public Key to do msg reply encryption
                  }
      if(preconnect)
      {
          var hd = new Headers();
          hd.append("Content-Type", "application/json");
          var op = {
            method: 'POST',
            headers:hd,
            body: JSON.stringify({"data":base58.encode(Buffer.from(JSON.stringify(d)))}),
            redirect: 'follow'
          };
          await fetch(`${this.baseurl}/preconnect/${d.i}`, op);
          d = {
              i:this.uuid, 
              p:1
          }
      }
      window.open(this.actionUrl+base58.encode(Buffer.from(JSON.stringify(d))),"newwindow","height=800, width=400, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no");
      return await this.loopCheck()
  }

  async send(chian,txs,redirect,preconnect) {
      var d =  {
                      t:2,
                      i:this.uuid, 
                      d:txs, 
                      c:chian, 
                      r:redirect || null,
                      k:Buffer.from(this.encryptionKp.publicKey).toString("base64")// Add public Key to do msg reply encryption
                  }
      if(preconnect)
      {
          var hd = new Headers();
          hd.append("Content-Type", "application/json");
          var op = {
            method: 'POST',
            headers:hd,
            body: JSON.stringify({"data":base58.encode(Buffer.from(JSON.stringify(d)))}),
            redirect: 'follow'
          };
          await fetch(`${this.baseurl}/preconnect/${d.i}`, op);
          d = {
              i:this.uuid, 
              p:1
          }
      }
      window.open(this.actionUrl+base58.encode(Buffer.from(JSON.stringify(d))),"newwindow","height=800, width=400, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no");
      return await this.loopCheck()
  }
}