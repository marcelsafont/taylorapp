(this["webpackJsonptaylor-app"]=this["webpackJsonptaylor-app"]||[]).push([[0],{53:function(e,t,a){e.exports=a(69)},69:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),l=a.n(c),o=a(12),u=a.n(o),s=a(16),i=a(6),m=a(77),E=a(75),p=a(73),d=a(71),b=a(45),f=a.n(b),v=(a(61),f.a.initializeApp({apiKey:"AIzaSyAFX3NIv9W_79ofc05khg28lXi_TfSKva8",authDomain:"tailor-c48c8.firebaseapp.com",databaseURL:Object({NODE_ENV:"production",PUBLIC_URL:"https://marcelsafont.github.io/taylorapp",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_FIREBASE_APIKEY:"AIzaSyAFX3NIv9W_79ofc05khg28lXi_TfSKva8",REACT_APP_FIREBASE_AUTHDOMAIN:"tailor-c48c8.firebaseapp.com",REACT_APP_FIREBASE_PROJECTID:"tailor-c48c8",REACT_APP_FIREBASE_STORAGEBUCKET:"tailor-c48c8.appspot.com",REACT_APP_FIREBASE_MESSAGESENDERID:"797380101686",REACT_APP_FIREBASE_APPID:"1:797380101686:web:aafd0f680a34bc4ce77a97",REACT_APP_FIREBASE_CHECKUSER:"https://us-central1-tailor-c48c8.cloudfunctions.net/checkUserEmailAndRole",REACT_APP_FIREBASE_USERORDERS:"https://us-central1-tailor-c48c8.cloudfunctions.net/getUserOrders"}).REACT_APP_FIREBASE_DATABASE_URL,projectId:"tailor-c48c8",storageBucket:"tailor-c48c8.appspot.com",messagingSenderId:"797380101686",appId:"1:797380101686:web:aafd0f680a34bc4ce77a97"})),h=v.auth(),O=r.a.createContext();function g(){return Object(n.useContext)(O)}function w(e){var t=e.children,a=Object(n.useState)(),c=Object(i.a)(a,2),l=c[0],o=c[1],u=Object(n.useState)(!0),s=Object(i.a)(u,2),m=s[0],E=s[1];Object(n.useEffect)((function(){return h.onAuthStateChanged((function(e){o(e),E(!1)}))}),[]);var p={currentUser:l,login:function(e,t){return h.signInWithEmailAndPassword(e,t)},signup:function(e,t){return h.createUserWithEmailAndPassword(e,t)},logout:function(){return h.signOut()},resetPassword:function(e){return h.sendPasswordResetEmail(e)},updateEmail:function(e){return l.updateEmail(e)},updatePassword:function(e){return l.updatePassword(e)}};return r.a.createElement(O.Provider,{value:p},!m&&t)}var S=a(5),j=a(7);function P(){var e=Object(n.useRef)(),t=Object(n.useRef)(),a=Object(n.useRef)(),c=g().signup,l=Object(n.useState)(""),o=Object(i.a)(l,2),b=o[0],f=o[1],v=Object(n.useState)(!1),h=Object(i.a)(v,2),O=h[0],w=h[1],P=Object(S.g)();function A(){return(A=Object(s.a)(u.a.mark((function n(r){var l;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r.preventDefault(),t.current.value===a.current.value){n.next=3;break}return n.abrupt("return",f("Passwords do not match"));case 3:if(!(t.current.value.length<6)){n.next=5;break}return n.abrupt("return",f("Password must be 6 characters minimum"));case 5:return n.prev=5,f(""),w(!0),n.next=10,fetch("https://us-central1-tailor-c48c8.cloudfunctions.net/checkUserEmailAndRole",{method:"POST",body:JSON.stringify({email:e.current.value})});case 10:return l=n.sent,n.next=13,l.json();case 13:if(0!==n.sent.length){n.next=16;break}throw new Error("Usuario no es cliente");case 16:return n.next=18,c(e.current.value,t.current.value);case 18:P.push("/"),n.next=28;break;case 21:if(n.prev=21,n.t0=n.catch(5),console.log(n.t0),"Error: Usuario no es cliente"!==n.t0){n.next=27;break}return f("Este correo no es de un cliente de Tailoryou"),n.abrupt("return");case 27:f("Failed to create an account");case 28:w(!1);case 29:case"end":return n.stop()}}),n,null,[[5,21]])})))).apply(this,arguments)}return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null,r.a.createElement(m.a.Body,null,r.a.createElement("h2",{className:"text-center mb-4"},"Sign Up"),b&&r.a.createElement(E.a,{variant:"danger"},b),r.a.createElement(p.a,{onSubmit:function(e){return A.apply(this,arguments)}},r.a.createElement(p.a.Group,{id:"email"},r.a.createElement(p.a.Label,null,"Email"),r.a.createElement(p.a.Control,{type:"email",ref:e,required:!0})),r.a.createElement(p.a.Group,{id:"password"},r.a.createElement(p.a.Label,null,"Password"),r.a.createElement(p.a.Control,{type:"password",ref:t,required:!0})),r.a.createElement(p.a.Group,{id:"password-confirm"},r.a.createElement(p.a.Label,null,"Password Confirmation"),r.a.createElement(p.a.Control,{type:"password",ref:a,required:!0})),r.a.createElement(d.a,{disabled:O,className:"w-100",type:"submit"},"Sign Up")))),r.a.createElement("div",{className:"w-100 text-center mt-2"},"Already have an account? ",r.a.createElement(j.b,{to:"/login"},"Log In")))}var A=a(72),R=a(74),y=a(76);function _(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],l=g(),o=l.currentUser,m=l.logout,p=Object(S.g)();function b(){return(b=Object(s.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(""),e.prev=1,e.next=4,m();case 4:p.push("/login"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),c("Failed to log out");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"text-center mb-4"},"Profile"),a&&r.a.createElement(E.a,{variant:"danger"},a),r.a.createElement("strong",null,"Email:")," ",o.email,r.a.createElement(R.a,{bg:"light",expand:"lg"},r.a.createElement(R.a.Brand,{href:"#home"},"React-Bootstrap"),r.a.createElement(R.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(R.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(y.a,{className:"me-auto"},r.a.createElement(y.a.Link,{as:j.b,to:"/"},"Home"),r.a.createElement(y.a.Link,{as:j.b,to:"/update-profile"},"Update Profile"),r.a.createElement(y.a.Link,{as:j.b,to:"/orders"},"Orders")))),r.a.createElement("div",{className:"w-100 text-center mt-2"},r.a.createElement(d.a,{variant:"link",onClick:function(){return b.apply(this,arguments)}},"Log Out")))}function x(){var e=Object(n.useRef)(),t=Object(n.useRef)(),a=g().login,c=Object(n.useState)(""),l=Object(i.a)(c,2),o=l[0],b=l[1],f=Object(n.useState)(!1),v=Object(i.a)(f,2),h=v[0],O=v[1],w=Object(S.g)();function P(){return(P=Object(s.a)(u.a.mark((function n(r){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.preventDefault(),n.prev=1,b(""),O(!0),n.next=6,a(e.current.value,t.current.value);case 6:w.push("/"),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),b("Failed to log in");case 12:O(!1);case 13:case"end":return n.stop()}}),n,null,[[1,9]])})))).apply(this,arguments)}return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null,r.a.createElement(m.a.Body,null,r.a.createElement("h2",{className:"text-center mb-4"},"Log In"),o&&r.a.createElement(E.a,{variant:"danger"},o),r.a.createElement(p.a,{onSubmit:function(e){return P.apply(this,arguments)}},r.a.createElement(p.a.Group,{id:"email"},r.a.createElement(p.a.Label,null,"Email"),r.a.createElement(p.a.Control,{type:"email",ref:e,required:!0})),r.a.createElement(p.a.Group,{id:"password"},r.a.createElement(p.a.Label,null,"Password"),r.a.createElement(p.a.Control,{type:"password",ref:t,required:!0})),r.a.createElement(d.a,{disabled:h,className:"w-100",type:"submit"},"Log In")),r.a.createElement("div",{className:"w-100 text-center mt-3"},r.a.createElement(j.b,{to:"/forgot-password"},"Forgot Password?")))),r.a.createElement("div",{className:"w-100 text-center mt-2"},"Need an account? ",r.a.createElement(j.b,{to:"/signup"},"Sign Up")))}var C=a(52);function k(e){var t=e.component,a=Object(C.a)(e,["component"]),n=g().currentUser;return r.a.createElement(S.b,Object.assign({},a,{render:function(e){return n?r.a.createElement(t,e):r.a.createElement(S.a,{to:"/login"})}}))}function I(){var e=Object(n.useRef)(),t=g().resetPassword,a=Object(n.useState)(""),c=Object(i.a)(a,2),l=c[0],o=c[1],b=Object(n.useState)(""),f=Object(i.a)(b,2),v=f[0],h=f[1],O=Object(n.useState)(!1),w=Object(i.a)(O,2),S=w[0],P=w[1];function A(){return(A=Object(s.a)(u.a.mark((function a(n){return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),a.prev=1,h(""),o(""),P(!0),a.next=7,t(e.current.value);case 7:h("Check your inbox for further instructions"),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(1),o("Failed to reset password");case 13:P(!1);case 14:case"end":return a.stop()}}),a,null,[[1,10]])})))).apply(this,arguments)}return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null,r.a.createElement(m.a.Body,null,r.a.createElement("h2",{className:"text-center mb-4"},"Password Reset"),l&&r.a.createElement(E.a,{variant:"danger"},l),v&&r.a.createElement(E.a,{variant:"success"},v),r.a.createElement(p.a,{onSubmit:function(e){return A.apply(this,arguments)}},r.a.createElement(p.a.Group,{id:"email"},r.a.createElement(p.a.Label,null,"Email"),r.a.createElement(p.a.Control,{type:"email",ref:e,required:!0})),r.a.createElement(d.a,{disabled:S,className:"w-100",type:"submit"},"Reset Password")),r.a.createElement("div",{className:"w-100 text-center mt-3"},r.a.createElement(j.b,{to:"/login"},"Login")))),r.a.createElement("div",{className:"w-100 text-center mt-2"},"Need an account? ",r.a.createElement(j.b,{to:"/signup"},"Sign Up")))}function N(){var e=Object(n.useRef)(),t=Object(n.useRef)(),a=Object(n.useRef)(),c=g(),l=c.currentUser,o=c.updatePassword,u=c.updateEmail,s=Object(n.useState)(""),b=Object(i.a)(s,2),f=b[0],v=b[1],h=Object(n.useState)(!1),O=Object(i.a)(h,2),w=O[0],P=O[1],A=Object(S.g)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null,r.a.createElement(m.a.Body,null,r.a.createElement("h2",{className:"text-center mb-4"},"Update Profile"),f&&r.a.createElement(E.a,{variant:"danger"},f),r.a.createElement(p.a,{onSubmit:function(n){if(n.preventDefault(),t.current.value!==a.current.value)return v("Passwords do not match");var r=[];P(!0),v(""),e.current.value!==l.email&&r.push(u(e.current.value)),t.current.value&&r.push(o(t.current.value)),Promise.all(r).then((function(){A.push("/")})).catch((function(){v("Failed to update account")})).finally((function(){P(!1)}))}},r.a.createElement(p.a.Group,{id:"email"},r.a.createElement(p.a.Label,null,"Email"),r.a.createElement(p.a.Control,{type:"email",ref:e,required:!0,defaultValue:l.email})),r.a.createElement(p.a.Group,{id:"password"},r.a.createElement(p.a.Label,null,"Password"),r.a.createElement(p.a.Control,{type:"password",ref:t,placeholder:"Leave blank to keep the same"})),r.a.createElement(p.a.Group,{id:"password-confirm"},r.a.createElement(p.a.Label,null,"Password Confirmation"),r.a.createElement(p.a.Control,{type:"password",ref:a,placeholder:"Leave blank to keep the same"})),r.a.createElement(d.a,{disabled:w,className:"w-100",type:"submit"},"Update")))),r.a.createElement("div",{className:"w-100 text-center mt-2"},r.a.createElement(j.b,{to:"/"},"Cancel")))}var U=a(78);function T(){var e=g().currentUser,t=Object(n.useState)([]),a=Object(i.a)(t,2),c=a[0],l=a[1];return Object(n.useEffect)((function(){fetch("https://us-central1-tailor-c48c8.cloudfunctions.net/getUserOrders",{method:"POST",body:JSON.stringify({email:e.email})}).then((function(e){return e.json()})).then(l)}),[e.email]),r.a.createElement(r.a.Fragment,null,r.a.createElement(A.a,null,r.a.createElement(U.a,null,c.map((function(e){return r.a.createElement(U.a.Item,null,r.a.createElement("div",null,e.title),r.a.createElement("div",null,e.createdAt))})))))}var F=function(){return r.a.createElement(A.a,null,r.a.createElement("div",null,r.a.createElement(j.a,null,r.a.createElement(w,null,r.a.createElement(S.d,null,r.a.createElement(k,{exact:!0,path:"/",component:_}),r.a.createElement(k,{path:"/update-profile",component:N}),r.a.createElement(k,{path:"/orders",component:T}),r.a.createElement(S.b,{path:"/signup",component:P}),r.a.createElement(S.b,{path:"/login",component:x}),r.a.createElement(S.b,{path:"/forgot-password",component:I}))))))};a(68);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(F,null)),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.d0a6f53e.chunk.js.map