(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(e,a,t){e.exports=t.p+"static/media/logo.4fe0a39d.svg"},45:function(e,a,t){e.exports=t(61)},50:function(e,a,t){},51:function(e,a,t){},61:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(36),l=t.n(r),m=(t(50),t(51),t(44)),s=t(14),o=t(8),i=t(18),u=t(37),d=t.n(u),E=t(32),p=t(16),h=t(13),g=t.n(h),k=t(25),b=t.n(k),f=t(38),v=t.n(f),N=function(e){var a=e.launch,t=a.flight_number,n=a.mission_name,r=a.launch_date_local,l=a.launch_success;return c.a.createElement("div",{className:"card card-body mb-3"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-9"},c.a.createElement("h4",null,"Mission name:"," ",c.a.createElement("span",{className:b()({"text-success":l,"text-danger":!l})},n)," "),c.a.createElement("p",null,"Date: ",c.a.createElement(v.a,{format:"YYYY-MM-DD HH:mm"},r))),c.a.createElement("div",{className:"col-md-3"},c.a.createElement(o.b,{to:"/launch/".concat(t),className:"btn btn-secondary"},"Launch Details"))))},_=function(e){for(var a=e.itemsPerPage,t=e.totalItems,n=e.paginate,r=[],l=1;l<=Math.ceil(t/a);l++)r.push(l);return c.a.createElement("nav",null,c.a.createElement("ul",{className:"pagination"},r.map(function(e){return c.a.createElement("li",{key:e,className:"page-item"},c.a.createElement("button",{onClick:function(){return n(e)},className:"page-link"},e))})))};function y(){var e=Object(p.a)(["\n    query LaunchesQuery {\n        launches {\n            flight_number\n            mission_name\n            launch_date_local\n            launch_success\n        }\n    }\n"]);return y=function(){return e},e}var w=g()(y()),x=function(){var e=Object(n.useState)(1),a=Object(E.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)(5),m=Object(E.a)(l,2),o=m[0],i=m[1],u=t*o,d=u-o,p=function(e){return r(e)};return Object(n.useEffect)(function(){console.log("component reloaded")}),c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"card card-header mb-3"},c.a.createElement("h1",null,"Launches")),c.a.createElement("input",{type:"text",value:o,placeholder:"Items per page",onChange:function(e){return i(e.target.value)}}),c.a.createElement(s.b,{query:w},function(e){var a=e.loading,t=e.error,r=e.data;if(a)return c.a.createElement("h4",null,"Loading...");t&&console.log(t);var l=r.launches.slice(d,u);return c.a.createElement(n.Fragment,null,l.map(function(e){return c.a.createElement(N,{key:e.flight_number,launch:e})}),c.a.createElement(_,{itemsPerPage:o,totalItems:r.launches.length,paginate:p}))}))},L=function(e){var a=e.rocket,t=a.rocket_id,n=a.rocket_name;return c.a.createElement("div",{className:"card card-body mb-3",key:t},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-9"},c.a.createElement("h4",null,n)),c.a.createElement("div",{className:"col-md-3"},c.a.createElement(o.b,{to:"/rocket/".concat(t),className:"btn btn-secondary"},"Rocket Details"))))};function j(){var e=Object(p.a)(["\n    {\n        rockets {\n            rocket_id\n            rocket_name\n            rocket_type\n            wikipedia\n        }\n    }\n"]);return j=function(){return e},e}var R=g()(j()),O=function(){return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"card card-header mb-3"},c.a.createElement("h1",null,"Rockets")),c.a.createElement(s.b,{query:R},function(e){var a=e.loading,t=e.error,r=e.data;return a?c.a.createElement("h4",null,"Loading..."):(t&&console.log(t),c.a.createElement(n.Fragment,null,r.rockets.map(function(e){return c.a.createElement(L,{key:e.rocket_id,rocket:e})})))}))};function q(){var e=Object(p.a)(["\n    query LaunchQuery($flight_number: Int!) {\n        launch(flight_number: $flight_number) {\n            flight_number\n            mission_name\n            launch_year\n            launch_success\n            launch_date_local\n            rocket {\n                rocket_id\n                rocket_name\n                rocket_type\n            }\n        }\n    }\n"]);return q=function(){return e},e}var F=g()(q()),I=function(e){var a=e.match.params.flight_number;return a=parseInt(a,10),c.a.createElement(n.Fragment,null,c.a.createElement(s.b,{query:F,variables:{flight_number:a}},function(e){var t=e.loading,n=e.error,r=e.data;if(t)return c.a.createElement("h4",null,"Loading...");n&&console.log(n);var l=r.launch,m=l.mission_name,s=l.launch_year,i=l.launch_success,u=l.rocket,d=u.rocket_id,E=u.rocket_name,p=u.rocket_type;return c.a.createElement("div",null,c.a.createElement("h1",{className:"display-4 my-3"},c.a.createElement("span",{className:"text-dark"},"Misson name: "),m),c.a.createElement("h4",{className:"mb-3"},"Launch Details"),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},"Flight Number: ",a),c.a.createElement("li",{className:"list-group-item"},"Launch Year: ",s),c.a.createElement("li",{className:"list-group-item"},"Launch Successful:"," ",c.a.createElement("span",{className:b()({"text-success":i,"text-danger":!i})},i?"Yes":"No"))),c.a.createElement("h4",{className:"my-3"},"Rocket Details"),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},"Rocket Id: ",d),c.a.createElement("li",{className:"list-group-item"},"Rocket Name: ",E),c.a.createElement("li",{className:"list-group-item"},"Rocket Type: ",p)),c.a.createElement(o.b,{to:"/launches",className:"btn btn-secondary mt-3"},"Back"))}))};function D(){var e=Object(p.a)(["\n    query RocketQuery($rocket_id: String!) {\n        rocket(rocket_id: $rocket_id) {\n            rocket_id\n            rocket_name\n            rocket_type\n            wikipedia\n        }\n    }\n"]);return D=function(){return e},e}var S=g()(D()),Y=function(e){var a=e.match.params.rocket_id;return c.a.createElement(n.Fragment,null,c.a.createElement(s.b,{query:S,variables:{rocket_id:a}},function(e){var a=e.loading,t=e.error,n=e.data;if(a)return c.a.createElement("h4",null,"Loading...");t&&console.log(t);var r=n.rocket,l=r.rocket_name,m=r.rocket_type,s=r.wikipedia;return c.a.createElement("div",null,c.a.createElement("h1",{className:"display-4 my-3"},c.a.createElement("span",{className:"text-dark"},"Rocket name: "),l),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},"Rocket Type: ",m),c.a.createElement("li",{className:"list-group-item"},c.a.createElement("a",{href:s},"Wikipedia link"))),c.a.createElement(o.b,{to:"/rockets",className:"btn btn-secondary mt-3"},"Back"))}))},M=function(){return c.a.createElement("div",{className:"my-3",style:{position:"sticky",top:50}},c.a.createElement("p",null,c.a.createElement("span",{className:"px-3 mr-2 bg-success"})," = Success"),c.a.createElement("p",null,c.a.createElement("span",{className:"px-3 mr-2 bg-danger"})," = Failed"))},$=function(){return c.a.createElement("div",null,c.a.createElement(o.b,{to:"/rockets",className:"btn btn-primary mr-3"},"Rockets"),c.a.createElement(o.b,{to:"/launches",className:"btn btn-primary"},"Launches"))},B=new m.a({uri:"/graphql"}),P=function(){return c.a.createElement(s.a,{client:B},c.a.createElement(o.a,null,c.a.createElement("header",{className:"container",style:{display:"flex",alignItems:"center",justifyContent:"space-between"}},c.a.createElement(o.b,{to:"/"},c.a.createElement("img",{src:d.a,alt:"SpeceX",style:{width:"400px",margin:"20px 0"}})),c.a.createElement($,null)),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-2"},c.a.createElement(M,null)),c.a.createElement("div",{className:"col-md-10"},c.a.createElement(i.a,{exact:!0,path:"/launches",component:x}),c.a.createElement(i.a,{exact:!0,path:"/rockets",component:O}),c.a.createElement(i.a,{exact:!0,path:"/launch/:flight_number",component:I}),c.a.createElement(i.a,{exact:!0,path:"/rocket/:rocket_id",component:Y}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[45,1,2]]]);
//# sourceMappingURL=main.c8ae7831.chunk.js.map