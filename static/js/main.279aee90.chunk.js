(this["webpackJsonpvideo-framing"]=this["webpackJsonpvideo-framing"]||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(8),c=n.n(a),s=n(4),i=n.n(s),o=n(6),u=n(7),d=n(5),j=n(3),l=function(e){var t=e.frames;return Object(j.jsx)(d.b,{className:"w-100 mt-3",children:Object(j.jsxs)(d.c,{children:[Object(j.jsx)("h3",{children:"Frames:"}),Object(j.jsx)("hr",{}),t.map((function(e,t){return Object(j.jsx)("img",{src:e,alt:"...",width:160,height:90,className:"m-2"},t)}))]})})},m=n(12),f={getVideoData:function(e){return new Promise((function(t,n){var r=document.createElement("video"),a=URL.createObjectURL(e);r.addEventListener("error",(function(){n(new Error("Couldn't process the video. Please ensure the video is one of the supported formats (MP4, MOV, M4V) and streamable."))})),r.addEventListener("loadedmetadata",Object(o.a)(i.a.mark((function n(){var r;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(m.getInfo)(e);case 2:r=n.sent.media.track[0],t({name:e.name.split(".").slice(0,-1).join("."),urlObject:a,duration:parseFloat(r.Duration),fps:parseFloat(r.FrameRate),framesTotal:parseInt(r.FrameCount)});case 4:case"end":return n.stop()}}),n)})))),r.preload="metadata",r.src=a}))},getVideoFrames:function(e,t,n,r){return console.log("Variant:",r),1===r?f.getVideoFrames1(e,t,n):2===r?f.getVideoFrames2(e,t,n):3===r?f.getVideoFrames3(e,t,n):f.getVideoFrames4(e,t,n)},getVideoFrames1:function(e,t,n){return new Promise(function(){var r=Object(o.a)(i.a.mark((function r(a){var c,s;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:(c=document.createElement("video")).addEventListener("seeked",Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s&&s();case 1:case"end":return e.stop()}}),e)})))),c.addEventListener("loadeddata",Object(o.a)(i.a.mark((function r(){var o,u,d,j,l,m,f,b;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:o=document.createElement("canvas"),u=o.getContext("2d"),d=[c.videoWidth,c.videoWidth],j=d[0],l=d[1],o.width=j,o.height=l,m=e.duration/t,f=[],b=0;case 8:if(!(f.length<t)){r.next=18;break}return c.currentTime=b,r.next=12,new Promise((function(e){return s=e}));case 12:u.drawImage(c,0,0,j,l),f.push(o.toDataURL("image/jpeg")),n(Math.round(f.length/t*100)),b+=m,r.next=8;break;case 18:a(f);case 19:case"end":return r.stop()}}),r)})))),c.src=e.urlObject;case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())},getVideoFrames2:function(e,t,n){return new Promise(function(){var r=Object(o.a)(i.a.mark((function r(a){var c,s;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:(c=document.createElement("video")).addEventListener("seeked",Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s&&s();case 1:case"end":return e.stop()}}),e)})))),c.addEventListener("loadeddata",Object(o.a)(i.a.mark((function r(){var o,u,d,j,l,m,f,b,p,h,v;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:o=document.createElement("canvas"),u=o.getContext("2d"),d=[c.videoWidth,c.videoWidth],j=d[0],l=d[1],o.width=j,o.height=l,m=e.duration/t,f=[],b=0,p=0,h=function(r){if(r){var c="".concat(e.name,"_").concat(b,".jpeg");f.push(new File([r],c,{type:"jpeg"}))}b++,n(Math.round(b/t*100)),b===t&&a(f)},v=0;case 11:if(!(v<t)){r.next=21;break}return c.currentTime=p,r.next=15,new Promise((function(e){return s=e}));case 15:u.drawImage(c,0,0,j,l),o.toBlob(h),p+=m;case 18:++v,r.next=11;break;case 21:case"end":return r.stop()}}),r)})))),c.src=e.urlObject;case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())},getVideoFrames3:function(e,t,n){return new Promise(function(){var r=Object(o.a)(i.a.mark((function r(a){var c,s,u;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:c=document.createElement("video"),s=document.createElement("canvas"),c.addEventListener("seeked",Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u&&u();case 1:case"end":return e.stop()}}),e)})))),c.addEventListener("loadedmetadata",(function(){requestAnimationFrame((function(){return requestAnimationFrame(Object(o.a)(i.a.mark((function r(){var o,d,j,l,m,f,b,p,h,v;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:o=s.getContext("2d"),d=[c.videoWidth,c.videoWidth],j=d[0],l=d[1],s.width=j,s.height=l,m=e.duration/t,f=[],b=0,p=0,h=function(r){if(r){var c="".concat(e.name,"_").concat(b,".jpeg");f.push(new File([r],c,{type:"jpeg"}))}b++,n(Math.round(b/t*100)),b===t&&a(f)},v=0;case 10:if(!(v<t)){r.next=20;break}return c.currentTime=p,r.next=14,new Promise((function(e){return u=e}));case 14:o.drawImage(c,0,0,j,l),s.toBlob(h),p+=m;case 17:++v,r.next=10;break;case 20:case"end":return r.stop()}}),r)}))))}))})),c.preload="metadata",c.src=e.urlObject;case 6:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())},getVideoFrames4:function(e,t,n){return new Promise(function(){var r=Object(o.a)(i.a.mark((function r(a){var c,s,u;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:c=document.createElement("video"),s=document.createElement("canvas"),c.addEventListener("seeked",Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u&&u();case 1:case"end":return e.stop()}}),e)})))),c.addEventListener("loadedmetadata",(function(){requestAnimationFrame((function(){return requestAnimationFrame(Object(o.a)(i.a.mark((function r(){var o,d,j,l,m,f,b,p,h,v;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:o=s.getContext("2d"),d=[c.videoWidth,c.videoWidth],j=d[0],l=d[1],s.width=j,s.height=l,m=e.duration/t,f=[],b=0,p=0,h=function(r){if(r){var c="".concat(e.name,"_").concat(b,".jpeg");f.push(new File([r],c,{type:"jpeg"}))}b++,n(Math.round(b/t*100)),b===t&&a(f)},v=0;case 10:if(!(v<t)){r.next=20;break}return c.currentTime=p,r.next=14,new Promise((function(e){return u=e}));case 14:o.drawImage(c,0,0,j,l),s.toBlob(h),p+=m;case 17:++v,r.next=10;break;case 20:case"end":return r.stop()}}),r)}))))}))})),c.src=e.urlObject,c.load();case 6:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())}};n(23);var b=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(!1),s=Object(u.a)(c,2),m=s[0],b=s[1],p=Object(r.useState)(!1),h=Object(u.a)(p,2),v=h[0],O=h[1],x=Object(r.useState)(null),g=Object(u.a)(x,2),w=g[0],k=g[1],F=Object(r.useState)(0),y=Object(u.a)(F,2),E=y[0],V=y[1],N=Object(r.useState)(0),P=Object(u.a)(N,2),C=P[0],L=P[1],M=Object(r.useState)(""),S=Object(u.a)(M,2),T=S[0],I=S[1],W=Object(r.useState)(!1),A=Object(u.a)(W,2),_=A[0],D=A[1],q=Object(r.useState)(1),B=Object(u.a)(q,2),R=B[0],U=B[1],J=Object(r.useState)(0),z=Object(u.a)(J,2),H=z[0],G=z[1],K=function(){var e=Object(o.a)(i.a.mark((function e(t){var n,r,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.target.files){e.next=2;break}return e.abrupt("return");case 2:return O(!0),k(null),I(""),U(1),e.prev=6,e.next=9,f.getVideoData(t.target.files[0]);case 9:n=e.sent,r=Math.min(100,n.framesTotal),a=Math.ceil(r/n.framesTotal*100),k(n),V(r),L(a),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(6),I(e.t0.message);case 20:case"end":return e.stop()}}),e,null,[[6,17]])})));return function(t){return e.apply(this,arguments)}}(),Q=function(){var e=Object(o.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),w&&E){e.next=3;break}return e.abrupt("return");case 3:return b(!1),D(!0),G(0),e.next=8,f.getVideoFrames(w,E,G,R);case 8:n=e.sent,D(!1),a(n),b(1===R),O(!1),alert("Success!"),console.log(n);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)(d.d,{className:"App__container",children:[Object(j.jsx)(d.b,{className:"App__formCard",children:Object(j.jsxs)(d.c,{children:[Object(j.jsx)(d.h,{children:"Select video to process:"}),Object(j.jsx)(d.g,{type:"file",lang:"en",onChange:K})]})}),m&&Object(j.jsx)(l,{frames:n})]}),Object(j.jsx)(d.i,{centered:!0,isOpen:v,children:Object(j.jsxs)(d.e,{onSubmit:Q,children:[Object(j.jsx)(d.l,{toggle:function(){return O(!1)},children:"Video processing"}),Object(j.jsx)(d.j,{children:T?Object(j.jsx)("div",{className:"text-danger my-4",children:T}):w?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(d.f,{children:[Object(j.jsxs)("p",{children:[Object(j.jsx)("b",{children:"Video duration:"})," ",w.duration]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("b",{children:"Video frames per second:"})," ",w.fps]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("b",{children:"Total frames:"})," ",w.framesTotal]})]}),Object(j.jsx)(d.f,{children:Object(j.jsx)("video",{className:"w-100 rounded",src:w.urlObject,controls:!0,style:{maxHeight:"30vh"}})}),Object(j.jsxs)(d.f,{children:[Object(j.jsx)(d.h,{children:Object(j.jsx)("b",{children:"Number of images to load:"})}),Object(j.jsx)(d.g,{type:"text",inputMode:"numeric",pattern:"[-+]?[0-9]*[.,]?[0-9]+",value:E,onChange:function(e){if(w){var t=parseInt(e.target.value),n=Math.min(isNaN(t)?0:t,w.framesTotal),r=Math.ceil(n/w.framesTotal*100);V(n),L(r)}}})]}),Object(j.jsx)(d.f,{children:Object(j.jsx)(d.g,{type:"range",value:C,onChange:function(e){if(w){var t=parseInt(e.target.value),n=Math.floor(t/100*w.framesTotal);V(n),L(t)}}})}),Object(j.jsxs)(d.f,{children:[Object(j.jsx)(d.h,{children:Object(j.jsx)("b",{children:"Process variant:"})}),Object(j.jsxs)(d.g,{type:"select",onChange:function(e){return U(parseInt(e.target.value))},children:[Object(j.jsx)("option",{value:"1",children:"1"}),Object(j.jsx)("option",{value:"2",children:"2"}),Object(j.jsx)("option",{value:"3",children:"3"}),Object(j.jsx)("option",{value:"4",children:"4"})]})]})]}):Object(j.jsx)("div",{className:"d-flex justify-content-center my-4",children:Object(j.jsx)(d.m,{})})}),Object(j.jsx)(d.k,{className:"flex-row-reverse justify-content-between align-items-center",children:T?Object(j.jsx)(d.a,{color:"dark",outline:!0,onClick:function(){return O(!1)},children:"Close"}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(d.a,{type:"submit",color:"dark",outline:!0,disabled:_,children:"Process video"}),_&&Object(j.jsxs)("div",{className:"d-flex align-items-center",children:[Object(j.jsx)(d.m,{size:"sm",type:"grow",className:"me-3"}),"Processing: ",H,"%"]})]})})]})})]})};n(24);c.a.render(Object(j.jsx)(b,{}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.279aee90.chunk.js.map