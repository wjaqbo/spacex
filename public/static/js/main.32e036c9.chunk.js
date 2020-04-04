(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{53:function(e,t,a){e.exports=a.p+"static/media/logo.4fe0a39d.svg"},62:function(e,t,a){e.exports=a(93)},67:function(e,t,a){},68:function(e,t,a){},93:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(52),l=a.n(r),o=(a(67),a(68),a(61)),s=a(13),m=a(8),i=a(19),u=a(53),d=a.n(u),p=a(41),h=a(16),E=a(12),g=a.n(E),b=a(31),f=a.n(b),k=a(54),v=a.n(k),y=function(e){var t=e.launch,a=t.flight_number,n=t.mission_name,r=t.launch_date_local,l=t.launch_success;return c.a.createElement("div",{className:"card card-body mb-3"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-9"},c.a.createElement("h4",null,"Mission name:"," ",c.a.createElement("span",{className:f()({"text-success":l,"text-danger":!l})},n)," "),c.a.createElement("p",null,"Date: ",c.a.createElement(v.a,{format:"YYYY-MM-DD HH:mm"},r))),c.a.createElement("div",{className:"col-md-3"},c.a.createElement(m.b,{to:"/launch/".concat(a),className:"btn btn-secondary"},"Launch Details"))))},N=function(e){for(var t=e.itemsPerPage,a=e.totalItems,n=e.paginate,r=[],l=1;l<=Math.ceil(a/t);l++)r.push(l);return c.a.createElement("nav",null,c.a.createElement("ul",{className:"pagination"},r.map(function(e){return c.a.createElement("li",{key:e,className:"page-item"},c.a.createElement("button",{onClick:function(){return n(e)},className:"page-link"},e))})))},_=function(){return c.a.createElement("div",{className:"my-3",style:{position:"sticky",top:50}},c.a.createElement("p",null,c.a.createElement("span",{className:"px-3 mr-2 bg-success"})," = Success"),c.a.createElement("p",null,c.a.createElement("span",{className:"px-3 mr-2 bg-danger"})," = Failed"))};function j(){var e=Object(h.a)(["\n    query LaunchesQuery {\n        launches {\n            flight_number\n            mission_name\n            launch_date_local\n            launch_success\n        }\n    }\n"]);return j=function(){return e},e}var O=g()(j()),S=function(){var e=Object(n.useState)(1),t=Object(p.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(5),o=Object(p.a)(l,2),m=o[0],i=o[1],u=a*m,d=u-m,h=function(e){return r(e)};return Object(n.useEffect)(function(){console.log("component reloaded")}),c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"card card-header mb-3"},c.a.createElement("h1",null,"Launches")),c.a.createElement("input",{type:"text",value:m,placeholder:"Items per page",onChange:function(e){return i(e.target.value)}}),c.a.createElement(_,null),c.a.createElement(s.b,{query:O},function(e){var t=e.loading,a=e.error,r=e.data;if(t)return c.a.createElement("h4",null,"Loading...");a&&console.log(a);var l=r.launches.slice(d,u);return c.a.createElement(n.Fragment,null,l.map(function(e){return c.a.createElement(y,{key:e.flight_number,launch:e})}),c.a.createElement(N,{itemsPerPage:m,totalItems:r.launches.length,paginate:h}))}))},x=function(e){var t=e.rocket,a=t.rocket_id,n=t.rocket_name;return c.a.createElement("div",{className:"card card-body mb-3",key:a},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-9"},c.a.createElement("h4",null,n)),c.a.createElement("div",{className:"col-md-3"},c.a.createElement(m.b,{to:"/rocket/".concat(a),className:"btn btn-secondary"},"Rocket Details"))))};function w(){var e=Object(h.a)(["\n    {\n        rockets {\n            rocket_id\n            rocket_name\n            rocket_type\n            wikipedia\n        }\n    }\n"]);return w=function(){return e},e}var C=g()(w()),L=function(){return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"card card-header mb-3"},c.a.createElement("h1",null,"Rockets")),c.a.createElement(s.b,{query:C},function(e){var t=e.loading,a=e.error,r=e.data;return t?c.a.createElement("h4",null,"Loading..."):(a&&console.log(a),c.a.createElement(n.Fragment,null,r.rockets.map(function(e){return c.a.createElement(x,{key:e.rocket_id,rocket:e})})))}))};function F(){var e=Object(h.a)(["\n    query LaunchQuery($flight_number: Int!) {\n        launch(flight_number: $flight_number) {\n            flight_number\n            mission_name\n            launch_year\n            launch_success\n            launch_date_local\n            rocket {\n                rocket_id\n                rocket_name\n                rocket_type\n            }\n        }\n    }\n"]);return F=function(){return e},e}var T=g()(F()),R=function(e){var t=e.match.params.flight_number;return t=parseInt(t,10),c.a.createElement(n.Fragment,null,c.a.createElement(s.b,{query:T,variables:{flight_number:t}},function(e){var a=e.loading,n=e.error,r=e.data;if(a)return c.a.createElement("h4",null,"Loading...");n&&console.log(n);var l=r.launch,o=l.mission_name,s=l.launch_year,i=l.launch_success,u=l.rocket,d=u.rocket_id,p=u.rocket_name,h=u.rocket_type;return c.a.createElement("div",null,c.a.createElement("h1",{className:"display-4 my-3"},c.a.createElement("span",{className:"text-dark"},"Misson name: "),o),c.a.createElement("h4",{className:"mb-3"},"Launch Details"),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},"Flight Number: ",t),c.a.createElement("li",{className:"list-group-item"},"Launch Year: ",s),c.a.createElement("li",{className:"list-group-item"},"Launch Successful:"," ",c.a.createElement("span",{className:f()({"text-success":i,"text-danger":!i})},i?"Yes":"No"))),c.a.createElement("h4",{className:"my-3"},"Rocket Details"),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},"Rocket Id: ",d),c.a.createElement("li",{className:"list-group-item"},"Rocket Name: ",p),c.a.createElement("li",{className:"list-group-item"},"Rocket Type: ",h)),c.a.createElement(m.b,{to:"/launches",className:"btn btn-secondary mt-3"},"Back"))}))};function D(){var e=Object(h.a)(["\n    query RocketQuery($rocket_id: String!) {\n        rocket(rocket_id: $rocket_id) {\n            rocket_id\n            rocket_name\n            rocket_type\n            wikipedia\n        }\n    }\n"]);return D=function(){return e},e}var q=g()(D()),I=function(e){var t=e.match.params.rocket_id;return c.a.createElement(n.Fragment,null,c.a.createElement(s.b,{query:q,variables:{rocket_id:t}},function(e){var t=e.loading,a=e.error,n=e.data;if(t)return c.a.createElement("h4",null,"Loading...");a&&console.log(a);var r=n.rocket,l=r.rocket_name,o=r.rocket_type,s=r.wikipedia;return c.a.createElement("div",null,c.a.createElement("h1",{className:"display-4 my-3"},c.a.createElement("span",{className:"text-dark"},"Rocket name: "),l),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},"Rocket Type: ",o),c.a.createElement("li",{className:"list-group-item"},c.a.createElement("a",{href:s},"Wikipedia link"))),c.a.createElement(m.b,{to:"/rockets",className:"btn btn-secondary mt-3"},"Back"))}))},M=function(){return c.a.createElement("nav",{className:"main-nav"},c.a.createElement(m.b,{to:"/launches",className:"btn btn-primary mr-3"},"Launches"),c.a.createElement(m.b,{to:"/rockets",className:"btn btn-primary mr-3"},"Rockets"),c.a.createElement(m.b,{to:"/ships",className:"btn btn-primary mr-3"},"Ships"),c.a.createElement(m.b,{to:"/todos",className:"btn btn-primary"},"Todos"))},Y=function(e){var t=e.ship,a=t.ship_id,n=t.ship_name,r=t.image;return c.a.createElement("div",{className:"card card-body mb-3",key:a},c.a.createElement("h4",null,n),c.a.createElement("img",{src:r,alt:n,className:"img-responsive"}))};function $(){var e=Object(h.a)(["\n    {\n        ships {\n            ship_id\n            ship_name\n            image\n        }\n    }\n"]);return $=function(){return e},e}var A=g()($()),B=function(){return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"card card-header mb-3"},c.a.createElement("h1",null,"Ships")),c.a.createElement(s.b,{query:A},function(e){var t=e.loading,a=e.error,r=e.data;return t?c.a.createElement("h4",null,"Loading..."):(a&&console.log(a),c.a.createElement(n.Fragment,null,r.ships.map(function(e){return c.a.createElement(Y,{key:e.ship_id,ship:e})})))}))},P=a(40),Q=a(21),W=a(22),H=a(24),J=a(23),z=a(25),X=a(32),G=a.n(X),K=function(e){function t(){return Object(Q.a)(this,t),Object(H.a)(this,Object(J.a)(t).apply(this,arguments))}return Object(z.a)(t,e),Object(W.a)(t,[{key:"render",value:function(){var e=this.props.todo,t=e.id,a=e.title,r=e.completed,l={backgroundColor:"#333",textDecoration:r?"line-through":"none",fontSize:"1.2rem",margin:0};return c.a.createElement(n.Fragment,null,c.a.createElement("li",{className:"list-group-item"},c.a.createElement("label",{htmlFor:"todo-item".concat(t),style:l},c.a.createElement("input",{type:"checkbox",id:"todo-item".concat(t),checked:r,onChange:this.props.toggleComplete.bind(this,t)})," ",a),c.a.createElement("button",{className:"btn btn-danger",onClick:this.props.delTodo.bind(this,t)},"Remove")))}}]),t}(n.Component),U=a(60),V=function(e){function t(){var e,a;Object(Q.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(H.a)(this,(e=Object(J.a)(t)).call.apply(e,[this].concat(c)))).state={title:""},a.onChange=function(e){a.setState(Object(U.a)({},e.target.name,e.target.value))},a.onSubmit=function(e){e.preventDefault(),a.props.addTodo(a.state.title),a.setState({title:""})},a}return Object(z.a)(t,e),Object(W.a)(t,[{key:"render",value:function(){return c.a.createElement("form",{onSubmit:this.onSubmit,className:"form-inline mb-3"},c.a.createElement("input",{type:"text",className:"form-control",name:"title",placeholder:"Add Todo ...",value:this.state.title,onChange:this.onChange}),c.a.createElement("input",{type:"submit",value:"Add",className:"btn"}))}}]),t}(n.Component),Z=function(e){function t(){var e,a;Object(Q.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(H.a)(this,(e=Object(J.a)(t)).call.apply(e,[this].concat(c)))).state={todos:[],loading:!0},a.toggleComplete=function(e){a.setState({todos:a.state.todos.map(function(t){return t.id===e&&(t.completed=!t.completed),t})})},a.delTodo=function(e){a.setState({loading:!0}),console.log("todo removing..."),G.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(e)).then(function(){a.setState({todos:Object(P.a)(a.state.todos.filter(function(t){return t.id!==e}))})}).finally(function(){a.setState({loading:!1}),console.log("todo removed successfuly ")})},a.addTodo=function(e){a.setState({loading:!0}),G.a.post("https://jsonplaceholder.typicode.com/todos",{title:e,completed:!1}).then(function(e){return a.setState({todos:[].concat(Object(P.a)(a.state.todos),[e.data])})}).finally(function(){a.setState({loading:!1}),console.log("todo added successfuly")})},a}return Object(z.a)(t,e),Object(W.a)(t,[{key:"componentDidMount",value:function(){var e=this;G.a.get("https://jsonplaceholder.typicode.com/todos?_limit=5").then(function(t){e.setState({todos:t.data})}).finally(function(){e.setState({loading:!1})})}},{key:"render",value:function(){var e=this;return this.state.loading?c.a.createElement("h4",null,"Loading..."):c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"card card-header mb-3"},c.a.createElement("h1",null,"To do")),c.a.createElement(V,{addTodo:this.addTodo}),c.a.createElement("ul",{className:"list-group"},this.state.todos.map(function(t){return c.a.createElement(K,{key:t.id,todo:t,toggleComplete:e.toggleComplete,delTodo:e.delTodo})})))}}]),t}(n.Component),ee=new o.a({uri:"/graphql"}),te=function(){return c.a.createElement(s.a,{client:ee},c.a.createElement(m.a,null,c.a.createElement("header",{className:"container header"},c.a.createElement(m.b,{to:"/"},c.a.createElement("img",{src:d.a,alt:"SpeceX",style:{width:"400px",margin:"20px 0"}})),c.a.createElement(M,null)),c.a.createElement("div",{className:"container"},c.a.createElement(i.a,{exact:!0,path:"/launches",component:S}),c.a.createElement(i.a,{exact:!0,path:"/rockets",component:L}),c.a.createElement(i.a,{exact:!0,path:"/launch/:flight_number",component:R}),c.a.createElement(i.a,{exact:!0,path:"/rocket/:rocket_id",component:I}),c.a.createElement(i.a,{exact:!0,path:"/ships",component:B}),c.a.createElement(i.a,{exact:!0,path:"/todos",component:Z}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(te,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[62,1,2]]]);
//# sourceMappingURL=main.32e036c9.chunk.js.map