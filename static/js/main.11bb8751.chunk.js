(this["webpackJsonptaylor-app"]=this["webpackJsonptaylor-app"]||[]).push([[0],{53:function(e,t,a){e.exports=a(69)},69:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(23),l=a.n(c),o=a(12),u=a.n(o),s=a(16),i=a(6),m=a(77),E=a(75),p=a(73),d=a(71),b=a(45),f=a.n(b),v=(a(61),f.a.initializeApp({apiKey:"AIzaSyAFX3NIv9W_79ofc05khg28lXi_TfSKva8",authDomain:"tailor-c48c8.firebaseapp.com",databaseURL:Object({NODE_ENV:"production",PUBLIC_URL:"/taylorapp",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_FIREBASE_APIKEY:"AIzaSyAFX3NIv9W_79ofc05khg28lXi_TfSKva8",REACT_APP_FIREBASE_AUTHDOMAIN:"tailor-c48c8.firebaseapp.com",REACT_APP_FIREBASE_PROJECTID:"tailor-c48c8",REACT_APP_FIREBASE_STORAGEBUCKET:"tailor-c48c8.appspot.com",REACT_APP_FIREBASE_MESSAGESENDERID:"797380101686",REACT_APP_FIREBASE_APPID:"1:797380101686:web:aafd0f680a34bc4ce77a97",REACT_APP_FIREBASE_CHECKUSER:"https://us-central1-tailor-c48c8.cloudfunctions.net/checkUserEmailAndRole",REACT_APP_FIREBASE_USERORDERS:"https://us-central1-tailor-c48c8.cloudfunctions.net/getUserOrders"}).REACT_APP_FIREBASE_DATABASE_URL,projectId:"tailor-c48c8",storageBucket:"tailor-c48c8.appspot.com",messagingSenderId:"797380101686",appId:"1:797380101686:web:aafd0f680a34bc4ce77a97"})),h=v.auth(),O=n.a.createContext();function g(){return Object(r.useContext)(O)}function w(e){var t=e.children,a=Object(r.useState)(),c=Object(i.a)(a,2),l=c[0],o=c[1],u=Object(r.useState)(!0),s=Object(i.a)(u,2),m=s[0],E=s[1];Object(r.useEffect)((function(){return h.onAuthStateChanged((function(e){o(e),E(!1)}))}),[]);var p={currentUser:l,login:function(e,t){return h.signInWithEmailAndPassword(e,t)},signup:function(e,t){return h.createUserWithEmailAndPassword(e,t)},logout:function(){return h.signOut()},resetPassword:function(e){return h.sendPasswordResetEmail(e)},updateEmail:function(e){return l.updateEmail(e)},updatePassword:function(e){return l.updatePassword(e)}};return n.a.createElement(O.Provider,{value:p},!m&&t)}var S=a(5),j=a(9);function P(){var e=Object(r.useRef)(),t=Object(r.useRef)(),a=Object(r.useRef)(),c=g().signup,l=Object(r.useState)(""),o=Object(i.a)(l,2),b=o[0],f=o[1],v=Object(r.useState)(!1),h=Object(i.a)(v,2),O=h[0],w=h[1],P=Object(S.g)();function A(){return(A=Object(s.a)(u.a.mark((function r(n){var l;return u.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n.preventDefault(),t.current.value===a.current.value){r.next=3;break}return r.abrupt("return",f("Passwords do not match"));case 3:if(!(t.current.value.length<6)){r.next=5;break}return r.abrupt("return",f("Password must be 6 characters minimum"));case 5:return r.prev=5,f(""),w(!0),r.next=10,fetch("https://us-central1-tailor-c48c8.cloudfunctions.net/checkUserEmailAndRole",{method:"POST",body:JSON.stringify({email:e.current.value})});case 10:return l=r.sent,r.next=13,l.json();case 13:if(0!==r.sent.length){r.next=16;break}throw new Error("Usuario no es cliente");case 16:return r.next=18,c(e.current.value,t.current.value);case 18:P.push("/"),r.next=28;break;case 21:if(r.prev=21,r.t0=r.catch(5),console.log(r.t0),"Error: Usuario no es cliente"!==r.t0){r.next=27;break}return f("Este correo no es de un cliente de Tailoryou"),r.abrupt("return");case 27:f("Failed to create an account");case 28:w(!1);case 29:case"end":return r.stop()}}),r,null,[[5,21]])})))).apply(this,arguments)}return n.a.createElement(n.a.Fragment,null,n.a.createElement(m.a,null,n.a.createElement(m.a.Body,null,n.a.createElement("h2",{className:"text-center mb-4"},"Sign Up"),b&&n.a.createElement(E.a,{variant:"danger"},b),n.a.createElement(p.a,{onSubmit:function(e){return A.apply(this,arguments)}},n.a.createElement(p.a.Group,{id:"email"},n.a.createElement(p.a.Label,null,"Email"),n.a.createElement(p.a.Control,{type:"email",ref:e,required:!0})),n.a.createElement(p.a.Group,{id:"password"},n.a.createElement(p.a.Label,null,"Password"),n.a.createElement(p.a.Control,{type:"password",ref:t,required:!0})),n.a.createElement(p.a.Group,{id:"password-confirm"},n.a.createElement(p.a.Label,null,"Password Confirmation"),n.a.createElement(p.a.Control,{type:"password",ref:a,required:!0})),n.a.createElement(d.a,{disabled:O,className:"w-100",type:"submit"},"Sign Up")))),n.a.createElement("div",{className:"w-100 text-center mt-2"},"Already have an account? ",n.a.createElement(j.b,{to:"/login"},"Log In")))}var A=a(72);function R(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],l=g(),o=l.currentUser,m=l.logout,p=Object(S.g)();function b(){return(b=Object(s.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(""),e.prev=1,e.next=4,m();case 4:p.push("/login"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),c("Failed to log out");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",{className:"text-center mb-4"},"Profile"),a&&n.a.createElement(E.a,{variant:"danger"},a),n.a.createElement("strong",null,"Email:")," ",o.email,n.a.createElement("div",{className:"w-100 text-center mt-2"},n.a.createElement(d.a,{variant:"link",onClick:function(){return b.apply(this,arguments)}},"Log Out")))}function y(){var e=Object(r.useRef)(),t=Object(r.useRef)(),a=g().login,c=Object(r.useState)(""),l=Object(i.a)(c,2),o=l[0],b=l[1],f=Object(r.useState)(!1),v=Object(i.a)(f,2),h=v[0],O=v[1],w=Object(S.g)();function P(){return(P=Object(s.a)(u.a.mark((function r(n){return u.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n.preventDefault(),r.prev=1,b(""),O(!0),r.next=6,a(e.current.value,t.current.value);case 6:w.push("/"),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(1),b("Failed to log in");case 12:O(!1);case 13:case"end":return r.stop()}}),r,null,[[1,9]])})))).apply(this,arguments)}return n.a.createElement(n.a.Fragment,null,n.a.createElement(m.a,null,n.a.createElement(m.a.Body,null,n.a.createElement("h2",{className:"text-center mb-4"},"Log In"),o&&n.a.createElement(E.a,{variant:"danger"},o),n.a.createElement(p.a,{onSubmit:function(e){return P.apply(this,arguments)}},n.a.createElement(p.a.Group,{id:"email"},n.a.createElement(p.a.Label,null,"Email"),n.a.createElement(p.a.Control,{type:"email",ref:e,required:!0})),n.a.createElement(p.a.Group,{id:"password"},n.a.createElement(p.a.Label,null,"Password"),n.a.createElement(p.a.Control,{type:"password",ref:t,required:!0})),n.a.createElement(d.a,{disabled:h,className:"w-100",type:"submit"},"Log In")),n.a.createElement("div",{className:"w-100 text-center mt-3"},n.a.createElement(j.b,{to:"/forgot-password"},"Forgot Password?")))),n.a.createElement("div",{className:"w-100 text-center mt-2"},"Need an account? ",n.a.createElement(j.b,{to:"/signup"},"Sign Up")))}var _=a(52);function x(e){var t=e.component,a=Object(_.a)(e,["component"]),r=g().currentUser;return n.a.createElement(S.b,Object.assign({},a,{render:function(e){return r?n.a.createElement(t,e):n.a.createElement(S.a,{to:"/login"})}}))}function C(){var e=Object(r.useRef)(),t=g().resetPassword,a=Object(r.useState)(""),c=Object(i.a)(a,2),l=c[0],o=c[1],b=Object(r.useState)(""),f=Object(i.a)(b,2),v=f[0],h=f[1],O=Object(r.useState)(!1),w=Object(i.a)(O,2),S=w[0],P=w[1];function A(){return(A=Object(s.a)(u.a.mark((function a(r){return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r.preventDefault(),a.prev=1,h(""),o(""),P(!0),a.next=7,t(e.current.value);case 7:h("Check your inbox for further instructions"),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(1),o("Failed to reset password");case 13:P(!1);case 14:case"end":return a.stop()}}),a,null,[[1,10]])})))).apply(this,arguments)}return n.a.createElement(n.a.Fragment,null,n.a.createElement(m.a,null,n.a.createElement(m.a.Body,null,n.a.createElement("h2",{className:"text-center mb-4"},"Password Reset"),l&&n.a.createElement(E.a,{variant:"danger"},l),v&&n.a.createElement(E.a,{variant:"success"},v),n.a.createElement(p.a,{onSubmit:function(e){return A.apply(this,arguments)}},n.a.createElement(p.a.Group,{id:"email"},n.a.createElement(p.a.Label,null,"Email"),n.a.createElement(p.a.Control,{type:"email",ref:e,required:!0})),n.a.createElement(d.a,{disabled:S,className:"w-100",type:"submit"},"Reset Password")),n.a.createElement("div",{className:"w-100 text-center mt-3"},n.a.createElement(j.b,{to:"/login"},"Login")))),n.a.createElement("div",{className:"w-100 text-center mt-2"},"Need an account? ",n.a.createElement(j.b,{to:"/signup"},"Sign Up")))}function k(){var e=Object(r.useRef)(),t=Object(r.useRef)(),a=Object(r.useRef)(),c=g(),l=c.currentUser,o=c.updatePassword,u=c.updateEmail,s=Object(r.useState)(""),b=Object(i.a)(s,2),f=b[0],v=b[1],h=Object(r.useState)(!1),O=Object(i.a)(h,2),w=O[0],P=O[1],A=Object(S.g)();return n.a.createElement(n.a.Fragment,null,n.a.createElement(m.a,null,n.a.createElement(m.a.Body,null,n.a.createElement("h2",{className:"text-center mb-4"},"Update Profile"),f&&n.a.createElement(E.a,{variant:"danger"},f),n.a.createElement(p.a,{onSubmit:function(r){if(r.preventDefault(),t.current.value!==a.current.value)return v("Passwords do not match");var n=[];P(!0),v(""),e.current.value!==l.email&&n.push(u(e.current.value)),t.current.value&&n.push(o(t.current.value)),Promise.all(n).then((function(){A.push("/")})).catch((function(){v("Failed to update account")})).finally((function(){P(!1)}))}},n.a.createElement(p.a.Group,{id:"email"},n.a.createElement(p.a.Label,null,"Email"),n.a.createElement(p.a.Control,{type:"email",ref:e,required:!0,defaultValue:l.email})),n.a.createElement(p.a.Group,{id:"password"},n.a.createElement(p.a.Label,null,"Password"),n.a.createElement(p.a.Control,{type:"password",ref:t,placeholder:"Leave blank to keep the same"})),n.a.createElement(p.a.Group,{id:"password-confirm"},n.a.createElement(p.a.Label,null,"Password Confirmation"),n.a.createElement(p.a.Control,{type:"password",ref:a,placeholder:"Leave blank to keep the same"})),n.a.createElement(d.a,{disabled:w,className:"w-100",type:"submit"},"Update")))),n.a.createElement("div",{className:"w-100 text-center mt-2"},n.a.createElement(j.b,{to:"/"},"Cancel")))}var I=a(74),N=a(76),U=a(78);function T(){var e=g().currentUser,t=Object(r.useState)([]),a=Object(i.a)(t,2),c=a[0],l=a[1];return Object(r.useEffect)((function(){fetch("https://us-central1-tailor-c48c8.cloudfunctions.net/getUserOrders",{method:"POST",body:JSON.stringify({email:e.email})}).then((function(e){return e.json()})).then(l)}),[e.email]),n.a.createElement(n.a.Fragment,null,n.a.createElement(I.a,{bg:"light",expand:"lg"},n.a.createElement(I.a.Brand,{href:"#home"},"React-Bootstrap"),n.a.createElement(I.a.Toggle,{"aria-controls":"basic-navbar-nav"}),n.a.createElement(I.a.Collapse,{id:"basic-navbar-nav"},n.a.createElement(N.a,{className:"me-auto"},n.a.createElement(N.a.Link,{href:"/dashboard"},"Home"),n.a.createElement(N.a.Link,{href:"/update-profile"},"Update Profile"),n.a.createElement(N.a.Link,{href:"/orders"},"Orders")))),n.a.createElement(A.a,null,n.a.createElement(U.a,null,c.map((function(e){return n.a.createElement(U.a.Item,null,n.a.createElement("div",null,e.title),n.a.createElement("div",null,e.createdAt))})))))}var F=function(){return n.a.createElement(A.a,null,n.a.createElement("div",null,n.a.createElement(j.a,{basename:"/taylorapp"},console.log("/taylorapp"),n.a.createElement(w,null,n.a.createElement(S.d,null,n.a.createElement(x,{exact:!0,path:"/",component:R}),n.a.createElement(x,{path:"/update-profile",component:k}),n.a.createElement(S.b,{path:"/signup",component:P}),n.a.createElement(S.b,{path:"/login",component:y}),n.a.createElement(S.b,{path:"/forgot-password",component:C}),n.a.createElement(S.b,{path:"/orders",component:T}))))))};a(68);l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(F,null)),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.11bb8751.chunk.js.map