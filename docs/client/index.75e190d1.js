import{S as s,i as a,s as e,e as c,t,c as l,a as r,b as n,d as i,f as o,g as u,h as m,l as f,j as h,n as v,k as d,m as p,q as g,o as k,p as E,r as $,u as w,v as I,w as b}from"./client.1fecba13.js";function x(s){let a,e,d,p;return{c(){a=c("button"),e=t(s[0]),this.h()},l(c){a=l(c,"BUTTON",{class:!0});var t=r(a);e=n(t,s[0]),t.forEach(i),this.h()},h(){o(a,"class","btn svelte-12rg59o")},m(c,t){u(c,a,t),m(a,e),d||(p=f(a,"click",s[1]),d=!0)},p(s,[a]){1&a&&h(e,s[0])},i:v,o:v,d(s){s&&i(a),d=!1,p()}}}function S(s,a,e){let{email:c}=a,{btnText:t="Send Email"}=a;return s.$set=s=>{"email"in s&&e(2,c=s.email),"btnText"in s&&e(0,t=s.btnText)},[t,function(){let s=document.createElement("a");s.href="mailto:"+c,s.click()},c]}class T extends s{constructor(s){super(),a(this,s,S,x,e,{email:2,btnText:0})}}function G(s){let a,e;return{c(){a=c("p"),e=t(P),this.h()},l(s){a=l(s,"P",{class:!0});var c=r(a);e=n(c,P),c.forEach(i),this.h()},h(){o(a,"class","test svelte-u0k2wk")},m(s,c){u(s,a,c),m(a,e)},p:v,d(s){s&&i(a)}}}function j(s){let a,e,f,h,v,x,S,j,P,D,F,N,O,V,H,M,R,U,A,C,K,Y,q,y,B,L,z,J,Q,W;const X=new T({props:{email:"max@none.com",btnText:"Email Max"}});let Z=G(s);const _=new T({props:{email:"none@none.com"}});return{c(){a=d(),e=c("h1"),f=t("Great success!"),h=d(),v=c("div"),x=c("div"),S=c("figure"),p(X.$$.fragment),j=d(),P=c("img"),F=d(),N=c("figcaption"),O=t("Have fun with Sapper!"),V=d(),Z.c(),H=d(),M=c("div"),R=c("figure"),p(_.$$.fragment),U=d(),A=c("img"),K=d(),Y=c("figcaption"),q=c("p"),y=t("You too can be a\r\n          "),B=c("strong"),L=t("cool kid"),z=t("\r\n          use Svelte"),J=d(),Q=c("div"),this.h()},l(s){g('[data-svelte="svelte-1mmcm6n"]',document.head).forEach(i),a=k(s),e=l(s,"H1",{class:!0});var c=r(e);f=n(c,"Great success!"),c.forEach(i),h=k(s),v=l(s,"DIV",{class:!0});var t=r(v);x=l(t,"DIV",{class:!0});var o=r(x);S=l(o,"FIGURE",{class:!0});var u=r(S);E(X.$$.fragment,u),j=k(u),P=l(u,"IMG",{alt:!0,src:!0,class:!0}),F=k(u),N=l(u,"FIGCAPTION",{});var m=r(N);O=n(m,"Have fun with Sapper!"),m.forEach(i),u.forEach(i),V=k(o),Z.l(o),o.forEach(i),H=k(t),M=l(t,"DIV",{class:!0});var d=r(M);R=l(d,"FIGURE",{class:!0});var p=r(R);E(_.$$.fragment,p),U=k(p),A=l(p,"IMG",{alt:!0,src:!0,class:!0}),K=k(p),Y=l(p,"FIGCAPTION",{});var $=r(Y);q=l($,"P",{class:!0});var w=r(q);y=n(w,"You too can be a\r\n          "),B=l(w,"STRONG",{class:!0});var I=r(B);L=n(I,"cool kid"),I.forEach(i),z=n(w,"\r\n          use Svelte"),w.forEach(i),$.forEach(i),p.forEach(i),d.forEach(i),J=k(t),Q=l(t,"DIV",{class:!0}),r(Q).forEach(i),t.forEach(i),this.h()},h(){document.title="Sapper project template",o(e,"class","svelte-u0k2wk"),o(P,"alt","Success Kid"),P.src!==(D="/images/successkid.jpg")&&o(P,"src","/images/successkid.jpg"),o(P,"class","svelte-u0k2wk"),o(S,"class","svelte-u0k2wk"),o(x,"class","card"),o(A,"alt","Success Kid"),A.src!==(C="/images/successkid.jpg")&&o(A,"src","/images/successkid.jpg"),o(A,"class","svelte-u0k2wk"),o(B,"class","svelte-u0k2wk"),o(q,"class","svelte-u0k2wk"),o(R,"class","svelte-u0k2wk"),o(M,"class","card"),o(Q,"class","card"),o(v,"class","grid svelte-u0k2wk")},m(s,c){u(s,a,c),u(s,e,c),m(e,f),u(s,h,c),u(s,v,c),m(v,x),m(x,S),$(X,S,null),m(S,j),m(S,P),m(S,F),m(S,N),m(N,O),m(x,V),Z.m(x,null),m(v,H),m(v,M),m(M,R),$(_,R,null),m(R,U),m(R,A),m(R,K),m(R,Y),m(Y,q),m(q,y),m(q,B),m(B,L),m(q,z),m(v,J),m(v,Q),W=!0},p(s,[a]){Z.p(s,a)},i(s){W||(w(X.$$.fragment,s),w(_.$$.fragment,s),W=!0)},o(s){I(X.$$.fragment,s),I(_.$$.fragment,s),W=!1},d(s){s&&i(a),s&&i(e),s&&i(h),s&&i(v),b(X),Z.d(),b(_)}}}let P="Light one up, Pug style";export default class extends s{constructor(s){super(),a(this,s,null,j,e,{})}}