(this.webpackJsonpreact5=this.webpackJsonpreact5||[]).push([[0],{17:function(e,t,n){e.exports={enter:"ContactsListItem_enter__2lc4u",enterActive:"ContactsListItem_enterActive__zRiJv",exit:"ContactsListItem_exit__2BVIh",exitActive:"ContactsListItem_exitActive__3-q-f"}},22:function(e,t,n){e.exports=n(33)},27:function(e,t,n){},28:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(3),l=n.n(c),i=(n(27),n(13)),m=n(18),u=n(14),o=n(15),s=n(20),f=n(19),d=(n(28),n(16)),b=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",null,t))},p=n(35),v=n(34),_=n(17),h=n.n(_),E=function(e){var t=e.filteredContacts,n=e.removePhone;return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,null,t.map((function(e){return r.a.createElement(v.a,{key:e.id,timeout:1e3,classNames:h.a},r.a.createElement("li",{name:"name"},e.name,": ",e.number,r.a.createElement("button",{type:"button",onClick:function(){return n(e.id)}},"Delete")))}))))},C=n(7),A=n.n(C),x=function(e){var t=e.handleSubmit,n=e.name,a=e.addContact,c=e.filter,l=e.chengeFilter,i=e.number;return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{in:!0,appear:!0,classNames:A.a,timeout:500,unmountOnExit:!0},r.a.createElement("h2",{className:A.a.title},"Phonebook")),r.a.createElement("form",{onSubmit:t},r.a.createElement("label",null,"Name:"," ",r.a.createElement("input",{type:"text",value:n,name:"name",onChange:a})),r.a.createElement("label",null,"Number:"," ",r.a.createElement("input",{type:"tel",value:i,name:"number",onChange:a})),r.a.createElement("button",{type:"submit"},"Add contacts")),r.a.createElement("h2",null,"Contacts"),r.a.createElement("p",null,"Find contacts by name"),r.a.createElement("label",null,"Filter:"," ",r.a.createElement("input",{type:"text",value:c,name:"filter",onChange:l})))},g=n(8),y=n.n(g);function S(e){e.name;var t=e.alert;return r.a.createElement(v.a,{in:t,classNames:y.a,timeout:500,unmountOnExit:!0},r.a.createElement("div",null,r.a.createElement("span",{className:y.a.alert},"This name is already in your contacts")))}var F=function(e){Object(s.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:"",name:"",number:"",alert:!1},e.chengeFilter=function(t){e.setState({filter:t})},e.findContacts=function(){var t=e.state,n=t.filter;return t.contacts.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.name,r=n.number,c=n.contacts;n.alert;c.map((function(e){return e.name})).find((function(e){return e===a}))?(e.setState({alert:!0}),setTimeout((function(){return e.setState({alert:!1})}),2e3)):e.setState((function(e){return{contacts:[].concat(Object(m.a)(e.contacts),[{id:Object(d.v4)(),name:a,number:r}])}})),e.setState({name:"",number:""})},e.addContact=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(i.a)({},a,r))},e.removePhone=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.filter,a=t.name,c=t.number,l=t.contacts,i=t.alert,m=this.findContacts();return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,{name:a,alert:i}),r.a.createElement(x,{handleSubmit:this.handleSubmit,name:a,number:c,addContact:this.addContact,filter:n,chengeFilter:function(t){return e.chengeFilter(t.target.value)}}),r.a.createElement(b,null,r.a.createElement(E,{filteredContacts:m,contacts:l,removePhone:this.removePhone})))}}]),n}(a.Component);l.a.render(r.a.createElement(F,null),document.getElementById("root"))},7:function(e,t,n){e.exports={title:"Form_title__lNS_Y",appear:"Form_appear__2zyrQ",appearActive:"Form_appearActive__LYba0"}},8:function(e,t,n){e.exports={alert:"Alert_alert__1rkHi",enter:"Alert_enter__2H2-l",enterActive:"Alert_enterActive__3N49p",exit:"Alert_exit__2bOIM",exitActive:"Alert_exitActive__tyqhD"}}},[[22,1,2]]]);
//# sourceMappingURL=main.19e9d250.chunk.js.map