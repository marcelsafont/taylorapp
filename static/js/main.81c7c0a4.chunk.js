(this["webpackJsonpfirebase-react-auth"]=this["webpackJsonpfirebase-react-auth"]||[]).push([[0],{53:function(e,a,t){e.exports=t(69)},69:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(23),l=t.n(c),o=t(12),u=t.n(o),s=t(16),i=t(6),m=t(77),E=t(75),p=t(73),d=t(71),b=t(45),f=t.n(b),h=(t(61),f.a.initializeApp({apiKey:"AIzaSyAFX3NIv9W_79ofc05khg28lXi_TfSKva8",authDomain:"tailor-c48c8.firebaseapp.com",databaseURL:Object({NODE_ENV:"production",PUBLIC_URL:"/taylorapp",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_FIREBASE_APIKEY:"AIzaSyAFX3NIv9W_79ofc05khg28lXi_TfSKva8",REACT_APP_FIREBASE_AUTHDOMAIN:"tailor-c48c8.firebaseapp.com",REACT_APP_FIREBASE_PROJECTID:"tailor-c48c8",REACT_APP_FIREBASE_STORAGEBUCKET:"tailor-c48c8.appspot.com",REACT_APP_FIREBASE_MESSAGESENDERID:"797380101686",REACT_APP_FIREBASE_APPID:"1:797380101686:web:aafd0f680a34bc4ce77a97",REACT_APP_FIREBASE_CHECKUSER:"http://localhost:5001/tailor-c48c8/us-central1/checkUserEmailAndRole",REACT_APP_FIREBASE_USERORDERS:"http://localhost:5001/tailor-c48c8/us-central1/getUserOrders"}).REACT_APP_FIREBASE_DATABASE_URL,projectId:"tailor-c48c8",storageBucket:"tailor-c48c8.appspot.com",messagingSenderId:"797380101686",appId:"1:797380101686:web:aafd0f680a34bc4ce77a97"})),v=h.auth(),g=n.a.createContext();function O(){return Object(r.useContext)(g)}function w(e){var a=e.children,t=Object(r.useState)(),c=Object(i.a)(t,2),l=c[0],o=c[1],u=Object(r.useState)(!0),s=Object(i.a)(u,2),m=s[0],E=s[1];Object(r.useEffect)((function(){return v.onAuthStateChanged((function(e){o(e),E(!1)}))}),[]);var p={currentUser:l,login:function(e,a){return v.signInWithEmailAndPassword(e,a)},signup:function(e,a){return v.createUserWithEmailAndPassword(e,a)},logout:function(){return v.signOut()},resetPassword:function(e){return v.sendPasswordResetEmail(e)},updateEmail:function(e){return l.updateEmail(e)},updatePassword:function(e){return l.updatePassword(e)}};return n.a.createElement(g.Provider,{value:p},!m&&a)}var S=t(5),P=t(9);function j(){var e=Object(r.useRef)(),a=Object(r.useRef)(),t=Object(r.useRef)(),c=O().signup,l=Object(r.useState)(""),o=Object(i.a)(l,2),b=o[0],f=o[1],h=Object(r.useState)(!1),v=Object(i.a)(h,2),g=v[0],w=v[1],j=Object(S.g)();function A(){return(A=Object(s.a)(u.a.mark((function r(n){var l;return u.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n.preventDefault(),a.current.value===t.current.value){r.next=3;break}return r.abrupt("return",f("Passwords do not match"));case 3:if(!(a.current.value.length<6)){r.next=5;break}return r.abrupt("return",f("Password must be 6 characters minimum"));case 5:return r.prev=5,f(""),w(!0),r.next=10,fetch("http://localhost:5001/tailor-c48c8/us-central1/checkUserEmailAndRole",{method:"POST",body:JSON.stringify({email:e.current.value})});case 10:return l=r.sent,r.next=13,l.json();case 13:if(0!==r.sent.length){r.next=16;break}throw new Error("Usuario no es cliente");case 16:return r.next=18,c(e.current.value,a.current.value);case 18:j.push("/"),r.next=28;break;case 21:if(r.prev=21,r.t0=r.catch(5),console.log(r.t0),"Error: Usuario no es cliente"!=r.t0){r.next=27;break}return f("Este correo no es de un cliente de Tailoryou"),r.abrupt("return");case 27:f("Failed to create an account");case 28:w(!1);case 29:case"end":return r.stop()}}),r,null,[[5,21]])})))).apply(this,arguments)}return n.a.createElement(n.a.Fragment,null,n.a.createElement(m.a,null,n.a.createElement(m.a.Body,null,n.a.createElement("h2",{className:"text-center mb-4"},"Sign Up"),b&&n.a.createElement(E.a,{variant:"danger"},b),n.a.createElement(p.a,{onSubmit:function(e){return A.apply(this,arguments)}},n.a.createElement(p.a.Group,{id:"email"},n.a.createElement(p.a.Label,null,"Email"),n.a.createElement(p.a.Control,{type:"email",ref:e,required:!0})),n.a.createElement(p.a.Group,{id:"password"},n.a.createElement(p.a.Label,null,"Password"),n.a.createElement(p.a.Control,{type:"password",ref:a,required:!0})),n.a.createElement(p.a.Group,{id:"password-confirm"},n.a.createElement(p.a.Label,null,"Password Confirmation"),n.a.createElement(p.a.Control,{type:"password",ref:t,required:!0})),n.a.createElement(d.a,{disabled:g,className:"w-100",type:"submit"},"Sign Up")))),n.a.createElement("div",{className:"w-100 text-center mt-2"},"Already have an account? ",n.a.createElement(P.b,{to:"/login"},"Log In")))}var A=t(72),R=t(74),_=t(76);function y(){var e=Object(r.useState)(""),a=Object(i.a)(e,2),t=a[0],c=a[1],l=O(),o=l.currentUser,m=l.logout,p=Object(S.g)();function b(){return(b=Object(s.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(""),e.prev=1,e.next=4,m();case 4:p.push("/login"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),c("Failed to log out");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}return n.a.createElement(n.a.Fragment,null,n.a.createElement(R.a,{bg:"light",expand:"lg"},n.a.createElement(R.a.Brand,{href:"#home"},"React-Bootstrap"),n.a.createElement(R.a.Toggle,{"aria-controls":"basic-navbar-nav"}),n.a.createElement(R.a.Collapse,{id:"basic-navbar-nav"},n.a.createElement(_.a,{className:"me-auto"},n.a.createElement(_.a.Link,{href:"/dashboard"},"Home"),n.a.createElement(_.a.Link,{href:"/update-profile"},"Update Profile"),n.a.createElement(_.a.Link,{href:"/orders"},"Orders")))),n.a.createElement("h2",{className:"text-center mb-4"},"Profile"),t&&n.a.createElement(E.a,{variant:"danger"},t),n.a.createElement("strong",null,"Email:")," ",o.email,n.a.createElement("div",{className:"w-100 text-center mt-2"},n.a.createElement(d.a,{variant:"link",onClick:function(){return b.apply(this,arguments)}},"Log Out")))}function x(){var e=Object(r.useRef)(),a=Object(r.useRef)(),t=O().login,c=Object(r.useState)(""),l=Object(i.a)(c,2),o=l[0],b=l[1],f=Object(r.useState)(!1),h=Object(i.a)(f,2),v=h[0],g=h[1],w=Object(S.g)();function j(){return(j=Object(s.a)(u.a.mark((function r(n){return u.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n.preventDefault(),r.prev=1,b(""),g(!0),r.next=6,t(e.current.value,a.current.value);case 6:w.push("/"),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(1),b("Failed to log in");case 12:g(!1);case 13:case"end":return r.stop()}}),r,null,[[1,9]])})))).apply(this,arguments)}return n.a.createElement(n.a.Fragment,null,n.a.createElement(m.a,null,n.a.createElement(m.a.Body,null,n.a.createElement("h2",{className:"text-center mb-4"},"Log In"),o&&n.a.createElement(E.a,{variant:"danger"},o),n.a.createElement(p.a,{onSubmit:function(e){return j.apply(this,arguments)}},n.a.createElement(p.a.Group,{id:"email"},n.a.createElement(p.a.Label,null,"Email"),n.a.createElement(p.a.Control,{type:"email",ref:e,required:!0})),n.a.createElement(p.a.Group,{id:"password"},n.a.createElement(p.a.Label,null,"Password"),n.a.createElement(p.a.Control,{type:"password",ref:a,required:!0})),n.a.createElement(d.a,{disabled:v,className:"w-100",type:"submit"},"Log In")),n.a.createElement("div",{className:"w-100 text-center mt-3"},n.a.createElement(P.b,{to:"/forgot-password"},"Forgot Password?")))),n.a.createElement("div",{className:"w-100 text-center mt-2"},"Need an account? ",n.a.createElement(P.b,{to:"/signup"},"Sign Up")))}var C=t(52);function k(e){var a=e.component,t=Object(C.a)(e,["component"]),r=O().currentUser;return n.a.createElement(S.b,Object.assign({},t,{render:function(e){return r?n.a.createElement(a,e):n.a.createElement(S.a,{to:"/login"})}}))}function I(){var e=Object(r.useRef)(),a=O().resetPassword,t=Object(r.useState)(""),c=Object(i.a)(t,2),l=c[0],o=c[1],b=Object(r.useState)(""),f=Object(i.a)(b,2),h=f[0],v=f[1],g=Object(r.useState)(!1),w=Object(i.a)(g,2),S=w[0],j=w[1];function A(){return(A=Object(s.a)(u.a.mark((function t(r){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.preventDefault(),t.prev=1,v(""),o(""),j(!0),t.next=7,a(e.current.value);case 7:v("Check your inbox for further instructions"),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),o("Failed to reset password");case 13:j(!1);case 14:case"end":return t.stop()}}),t,null,[[1,10]])})))).apply(this,arguments)}return n.a.createElement(n.a.Fragment,null,n.a.createElement(m.a,null,n.a.createElement(m.a.Body,null,n.a.createElement("h2",{className:"text-center mb-4"},"Password Reset"),l&&n.a.createElement(E.a,{variant:"danger"},l),h&&n.a.createElement(E.a,{variant:"success"},h),n.a.createElement(p.a,{onSubmit:function(e){return A.apply(this,arguments)}},n.a.createElement(p.a.Group,{id:"email"},n.a.createElement(p.a.Label,null,"Email"),n.a.createElement(p.a.Control,{type:"email",ref:e,required:!0})),n.a.createElement(d.a,{disabled:S,className:"w-100",type:"submit"},"Reset Password")),n.a.createElement("div",{className:"w-100 text-center mt-3"},n.a.createElement(P.b,{to:"/login"},"Login")))),n.a.createElement("div",{className:"w-100 text-center mt-2"},"Need an account? ",n.a.createElement(P.b,{to:"/signup"},"Sign Up")))}function N(){var e=Object(r.useRef)(),a=Object(r.useRef)(),t=Object(r.useRef)(),c=O(),l=c.currentUser,o=c.updatePassword,u=c.updateEmail,s=Object(r.useState)(""),b=Object(i.a)(s,2),f=b[0],h=b[1],v=Object(r.useState)(!1),g=Object(i.a)(v,2),w=g[0],j=g[1],A=Object(S.g)();return n.a.createElement(n.a.Fragment,null,n.a.createElement(m.a,null,n.a.createElement(m.a.Body,null,n.a.createElement("h2",{className:"text-center mb-4"},"Update Profile"),f&&n.a.createElement(E.a,{variant:"danger"},f),n.a.createElement(p.a,{onSubmit:function(r){if(r.preventDefault(),a.current.value!==t.current.value)return h("Passwords do not match");var n=[];j(!0),h(""),e.current.value!==l.email&&n.push(u(e.current.value)),a.current.value&&n.push(o(a.current.value)),Promise.all(n).then((function(){A.push("/")})).catch((function(){h("Failed to update account")})).finally((function(){j(!1)}))}},n.a.createElement(p.a.Group,{id:"email"},n.a.createElement(p.a.Label,null,"Email"),n.a.createElement(p.a.Control,{type:"email",ref:e,required:!0,defaultValue:l.email})),n.a.createElement(p.a.Group,{id:"password"},n.a.createElement(p.a.Label,null,"Password"),n.a.createElement(p.a.Control,{type:"password",ref:a,placeholder:"Leave blank to keep the same"})),n.a.createElement(p.a.Group,{id:"password-confirm"},n.a.createElement(p.a.Label,null,"Password Confirmation"),n.a.createElement(p.a.Control,{type:"password",ref:t,placeholder:"Leave blank to keep the same"})),n.a.createElement(d.a,{disabled:w,className:"w-100",type:"submit"},"Update")))),n.a.createElement("div",{className:"w-100 text-center mt-2"},n.a.createElement(P.b,{to:"/"},"Cancel")))}var U=t(78);function T(){var e=O(),a=e.currentUser,t=(e.updatePassword,e.updateEmail,Object(r.useState)([])),c=Object(i.a)(t,2),l=c[0],o=c[1];return Object(r.useEffect)((function(){fetch("http://localhost:5001/tailor-c48c8/us-central1/getUserOrders",{method:"POST",body:JSON.stringify({email:a.email})}).then((function(e){return e.json()})).then(o)}),[]),n.a.createElement(n.a.Fragment,null,n.a.createElement(R.a,{bg:"light",expand:"lg"},n.a.createElement(R.a.Brand,{href:"#home"},"React-Bootstrap"),n.a.createElement(R.a.Toggle,{"aria-controls":"basic-navbar-nav"}),n.a.createElement(R.a.Collapse,{id:"basic-navbar-nav"},n.a.createElement(_.a,{className:"me-auto"},n.a.createElement(_.a.Link,{href:"/dashboard"},"Home"),n.a.createElement(_.a.Link,{href:"/update-profile"},"Update Profile"),n.a.createElement(_.a.Link,{href:"/orders"},"Orders")))),n.a.createElement(A.a,null,n.a.createElement(U.a,null,l.map((function(e){return n.a.createElement(U.a.Item,null,n.a.createElement("div",null,e.title),n.a.createElement("div",null,e.createdAt))})))))}var L=function(){return n.a.createElement(A.a,null,n.a.createElement("div",null,n.a.createElement(P.a,null,n.a.createElement(w,null,n.a.createElement(S.d,null,n.a.createElement(k,{exact:!0,path:"/",component:y}),n.a.createElement(k,{path:"/update-profile",component:N}),n.a.createElement(S.b,{path:"/signup",component:j}),n.a.createElement(S.b,{path:"/login",component:x}),n.a.createElement(S.b,{path:"/forgot-password",component:I}),n.a.createElement(S.b,{path:"/orders",component:T}))))))};t(68);l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(L,null)),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.81c7c0a4.chunk.js.map