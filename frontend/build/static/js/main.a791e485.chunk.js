(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{144:function(e,t,n){},145:function(e,t,n){},241:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),i=n(35),c=n.n(i),l=(n(144),n(145),n(58)),o=n(22),r=n(48),d=n(243),j=n(247),h=n(244),m=n(246),u=n(135),p=(n(106),n.p+"static/media/logo-1.da7fd3f9.png"),g=(n(107),n(46)),b=n.n(g),x=n(6),O=d.a.Header,f=d.a.Content,y=function(e){var t=Object(a.useState)(!1),n=Object(r.a)(t,2),s=n[0],i=n[1];return null!==localStorage.getItem("uid")&&e.history.push("/mainpage"),Object(x.jsxs)(d.a,{children:[Object(x.jsx)(O,{style:{position:"fixed",zIndex:1,width:"100%",height:"100px"},children:Object(x.jsx)("div",{className:"logo",children:Object(x.jsx)(j.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["2"],children:Object(x.jsx)("img",{src:p,width:"100",height:"100",alt:"logo"})})})}),Object(x.jsx)(f,{className:"site-layout",style:{padding:"50px",marginTop:64},children:Object(x.jsxs)("div",{className:"site-layout-background",style:{padding:100,minHeight:380},children:[Object(x.jsx)("div",{className:"",children:Object(x.jsx)("strong",{children:s})}),Object(x.jsx)(f,{style:{padding:"0 50px",marginTop:64,marginLeft:-130},children:Object(x.jsx)("div",{className:"site-layout-content",children:Object(x.jsxs)(h.a,{name:"basic",labelCol:{span:8},wrapperCol:{span:2},initialValues:{remember:!0},onFinish:function(t){console.log("Success:",t);var n=new URLSearchParams;n.append("email",t.email),n.append("password",t.password),b.a.post("".concat("http://localhost:8000","/signIn"),n).then((function(t){!0===t.data.status?(localStorage.setItem("uid",t.data.data.uid),localStorage.setItem("uname",t.data.data.uname),e.history.push("/mainpage")):i(t.data.msg)})).catch((function(e){console.log(e)}))},onFinishFailed:function(e){console.log("Failed:",e)},autoComplete:"off",children:[Object(x.jsx)(h.a.Item,{style:{width:250},label:"Email",name:"email",rules:[{required:!0,message:"Please input your email!"}],children:Object(x.jsx)(m.a,{style:{width:250}})}),Object(x.jsx)(h.a.Item,{style:{width:250},label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}],children:Object(x.jsx)(m.a.Password,{style:{width:250}})}),Object(x.jsxs)(h.a.Item,{wrapperCol:{span:4},children:[Object(x.jsx)(u.a,{type:"primary",style:{margin:20},htmlType:"submit",children:"Submit"}),Object(x.jsx)(l.b,{wrapperCol:{offset:8,span:16},to:"/register",children:"Register here"})]})]})})})]})})]})},w=n(245),I=m.a.Search,S=d.a.Header,v=d.a.Content,C=d.a.Sider,k=function(e){var t="http://localhost:8000";console.log(t);var n=Object(a.useState)([]),s=Object(r.a)(n,2),i=s[0],c=s[1],l=Object(a.useState)(""),o=Object(r.a)(l,2),h=o[0],m=o[1],g=function(e){console.log(e),m(e)};Object(a.useEffect)((function(){(new URLSearchParams).append("category",h),console.log(t),b.a.get("".concat(t,"/newsGenerator/?category=").concat(h)).then((function(e){c(e.data.articles)})).catch((function(e){console.log(e)}))}),[h]);var O=localStorage.getItem("uid");console.log(O),null===O&&e.history.push("/login");var f={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"};return Object(x.jsxs)(d.a,{children:[Object(x.jsx)(S,{className:"header",style:{position:"fixed",zIndex:1,width:"100%",height:"100px"},children:Object(x.jsx)("div",{className:"logo",children:Object(x.jsxs)(j.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["2"],children:[Object(x.jsx)(j.a.Item,{children:Object(x.jsx)("img",{src:p,width:"100",height:"100",alt:"logo"})},"1"),Object(x.jsx)(I,{placeholder:"input search text",onSearch:function(e){b.a.get("".concat(t,"/searchNews/?query=").concat(e)).then((function(e){c(e.data.articles)})).catch((function(e){console.log(e)}))},style:{width:200,marginTop:40,marginRight:20}}),Object(x.jsx)("div",{children:Object(x.jsx)(u.a,{type:"primary",style:{height:100,alignItems:"self-end",marginRight:0},onClick:function(){localStorage.removeItem("uid"),e.history.push("/login")},children:"Logout"})})]})})}),Object(x.jsx)(v,{style:{padding:"0 50px"},children:Object(x.jsxs)(d.a,{className:"site-layout-background",style:{padding:"24px 0"},children:[Object(x.jsx)(C,{className:"site-layout-background",width:200,style:{marginTop:100,marginLeft:-40},children:Object(x.jsxs)(j.a,{mode:"inline",defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],style:{height:"100%"},children:[Object(x.jsx)(j.a.Item,{onClick:function(){g("general")},children:"General"},"1"),Object(x.jsx)(j.a.Item,{onClick:function(){g("business")},children:"Business"},"2"),Object(x.jsx)(j.a.Item,{onClick:function(){g("sports")},children:"Sports"},"3"),Object(x.jsx)(j.a.Item,{onClick:function(){g("entertainment")},children:"Entertainment"},"4"),Object(x.jsx)(j.a.Item,{onClick:function(){g("science")},children:"Science"},"5"),Object(x.jsx)(j.a.Item,{onClick:function(){g("technology")},children:"Technology"},"6")]})}),Object(x.jsx)(v,{style:{padding:"100px 24px",minHeight:280},children:Object(x.jsx)(w.b,{itemLayout:"vertical",size:"large",pagination:{onChange:function(e){console.log(e)},pageSize:4},dataSource:i,renderItem:function(e){return Object(x.jsxs)(w.b.Item,{extra:Object(x.jsx)("img",{width:272,alt:"logo",src:e.urlToImage}),children:[Object(x.jsx)(w.b.Item.Meta,{title:Object(x.jsx)("a",{rel:"noreferrer",href:e.url,target:"_blank",children:e.title}),description:e.description}),Object(x.jsx)("p",{children:new Date(e.publishedAt).toLocaleDateString("en-IN",f)})]},e.title)}})})]})})]})},N=d.a.Header,P=d.a.Content,F=window.location.href.split(window.location.pathname)[0],L=function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),n=t[0],s=t[1];return Object(x.jsxs)(d.a,{children:[Object(x.jsx)(N,{style:{position:"fixed",zIndex:1,width:"100%",height:"100px"},children:Object(x.jsx)("div",{className:"logo",children:Object(x.jsx)(j.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["2"],children:Object(x.jsx)("img",{src:p,width:"100",height:"100",alt:"logo"})})})}),Object(x.jsx)(P,{className:"site-layout",style:{padding:"0 50px",marginTop:64},children:Object(x.jsxs)("div",{className:"site-layout-background",style:{padding:100,minHeight:380},children:[Object(x.jsx)("div",{className:"",children:Object(x.jsx)("strong",{children:n})}),Object(x.jsx)(P,{style:{padding:"0 50px",marginTop:64,marginLeft:-130},children:Object(x.jsx)("div",{className:"site-layout-content",children:Object(x.jsxs)(h.a,{name:"basic",labelCol:{span:8},wrapperCol:{span:2},initialValues:{remember:!0},onFinish:function(e){console.log("Success:",e);var t=new URLSearchParams;t.append("email",e.email),t.append("password",e.password),b.a.post("".concat(F,"/registerUser"),t).then((function(e){e.data.status,s(e.data.msg),console.log(e)})).catch((function(e){console.log(e)}))},onFinishFailed:function(e){console.log("Failed:",e)},autoComplete:"off",children:[Object(x.jsx)(h.a.Item,{style:{width:250},label:"Email",name:"email",rules:[{required:!0,message:"Please input your email!"}],children:Object(x.jsx)(m.a,{style:{width:250}})}),Object(x.jsx)(h.a.Item,{style:{width:250},label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}],children:Object(x.jsx)(m.a.Password,{style:{width:250}})}),Object(x.jsxs)(h.a.Item,{wrapperCol:{span:4},children:[Object(x.jsx)(u.a,{type:"primary",style:{margin:20},htmlType:"submit",children:"Register"}),Object(x.jsx)(l.b,{wrapperCol:{offset:8,span:16},to:"/login",children:"Login here"})]})]})})})]})})]})};function T(){return Object(x.jsx)(l.a,{children:Object(x.jsx)("div",{children:Object(x.jsxs)(o.c,{children:[Object(x.jsx)(o.a,{path:"/register",component:L}),Object(x.jsx)(o.a,{path:"/mainpage",component:k}),Object(x.jsx)(o.a,{path:"*",component:y})]})})})}var z=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(T,{})})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,248)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),i(e),c(e)}))};c.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(z,{})}),document.getElementById("root")),R()}},[[241,1,2]]]);
//# sourceMappingURL=main.a791e485.chunk.js.map