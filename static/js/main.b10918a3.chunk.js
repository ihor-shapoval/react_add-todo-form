(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{15:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a.n(n),s=a(9),i=a(2),o=a(3),c=a(5),l=a(4),d=a(7),u=a(1),m=a.n(u),h=(a(15),a(19)),b=a(0),p=function(e){var t=e.user,a=t.name,n=t.username,r=t.email;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"",children:"Name: ".concat(a)}),Object(b.jsx)("div",{className:"",children:"Username: ".concat(n)}),Object(b.jsx)("div",{className:"",children:"Email: ".concat(r)})]})},j=function(e){var t=e.todo,a=t.user,n=t.title;return Object(b.jsxs)(b.Fragment,{children:[a&&Object(b.jsx)(p,{user:a}),n]})},g=function(e){var t=e.todos;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("ul",{className:"list-group",children:t.map((function(e){return Object(b.jsx)("li",{className:"list-group-item d-flex justify-content-between",children:Object(b.jsx)(j,{todo:e})},e.id)}))})})},f=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={title:"",userId:0,titleError:!1,userError:!1},e.handleChangeSelect=function(t){e.setState({userId:+t.target.value})},e.handleChangeInput=function(t){e.setState({title:t.target.value,titleError:!1})},e.findSelectedUser=function(){return e.props.users.find((function(t){return t.id===e.state.userId}))},e.resetState=function(){e.setState({title:"",userId:0,titleError:!1,userError:!1})},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.userId,r=a.title;if(r.trim()||e.setState({titleError:!0}),n||e.setState({userError:!0}),n&&r){var s={userId:n,id:Object(h.a)(),title:r,user:e.findSelectedUser()};e.props.addTodo(s),e.resetState()}},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.title,a=e.userId,n=e.titleError,r=e.userError,s=this.props.users;return Object(b.jsxs)("form",{className:"d-flex justify-content-center flex-column mt-4 mb-4",onSubmit:this.handleSubmit,children:[Object(b.jsxs)("div",{className:"d-flex justify-content-center align-items-center",children:[Object(b.jsx)("div",{children:n&&Object(b.jsx)("div",{children:"Please, enter text"})}),Object(b.jsx)("input",{className:"form-control w-25",type:"text",placeholder:"Enter a title",value:t,onChange:this.handleChangeInput}),Object(b.jsxs)("select",{className:"form-select w-25",value:a,onChange:this.handleChangeSelect,children:[Object(b.jsx)("option",{defaultValue:"",children:"Choose name"}),s.map((function(e){return Object(b.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),Object(b.jsx)("div",{children:r&&Object(b.jsx)("span",{children:"Please, choose a user"})})]}),Object(b.jsx)("div",{className:"mt-4",children:Object(b.jsx)("button",{type:"submit",className:"btn btn-secondary",children:"Add Todo"})})]})}}]),a}(m.a.Component),y=(a(17),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}]),v=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}].map((function(e){return Object(d.a)(Object(d.a)({},e),{},{id:Object(h.a)(),user:y.find((function(t){return t.id===e.userId}))||null})})),x=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={todos:v},e.addTodo=function(t){e.setState((function(e){return{todos:[].concat(Object(s.a)(e.todos),[t])}}))},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{children:"List of todos "}),Object(b.jsx)(f,{addTodo:this.addTodo,users:y,todos:this.state.todos}),Object(b.jsx)(g,{todos:this.state.todos})]})}}]),a}(m.a.Component);r.a.render(Object(b.jsx)(x,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.b10918a3.chunk.js.map