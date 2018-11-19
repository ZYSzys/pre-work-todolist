(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{115:function(e,t,n){},117:function(e,t,n){},119:function(e,t,n){},121:function(e,t,n){},123:function(e,t,n){},125:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),s=n(24),c=n.n(s),l=(n(66),n(2)),i=n(3),r=n(5),d=n(4),m=n(6),u=(n(68),function(e){var t=e.title;return o.a.createElement("header",{className:"TheHeader"},o.a.createElement("h1",null,t))}),p=n(60),h=n(59),f=(n(113),n(115),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(r.a)(this,Object(d.a)(t).call(this,e))).handleChange=function(e){n.setState(function(t){t.expireDate;return{expireDate:e}})},n.pressEnter=function(e){"Enter"===e.key&&n.saveTodoItem(e)},n.saveTodoItem=function(e){e.preventDefault();var t=n.refs.isEditing.value;n.validateTodo(t)&&(n.props.addTodoItem(t,!1),n.refs.isEditing.value="")},n.validateTodo=function(e){return""!==e||(alert("\u8bf7\u8f93\u5165 Todo!"),!1)},n.state={expireDate:new Date},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"TodoInput"},o.a.createElement("input",{type:"text",placeholder:"\u8f93\u5165\u4e0b\u4e00\u4e2a todo \u4efb\u52a1",className:"form-control TodoInput-Input",ref:"isEditing",onKeyPress:this.pressEnter}),o.a.createElement(h.a,{className:"TodoInput-Picker form-control",selected:this.state.expireDate,onchange:this.handleChange}),o.a.createElement("button",{className:"btn btn-primary",onClick:this.saveTodoItem},"+"))}}]),t}(a.Component)),b=(n(117),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(r.a)(this,Object(d.a)(t).call(this,e))).toggleTodo=function(){n.setState(function(e){return{completed:!e.completed}}),n.props.toggleTodo()},n.changeTodo=function(){var e=n.refs.isChanging.value;""===e?alert("\u8bf7\u8f93\u5165\u65b0 Todo!"):(n.props.changeTodo(e),n.refs.isChanging.value="")},n.state={completed:e.item.completed},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"TodoItem"},o.a.createElement("input",{type:"checkbox",className:"TodoItem-Checkbox",onClick:this.toggleTodo,checked:!!this.props.item.completed,onChange:function(){}}),o.a.createElement("span",{className:"form-control TodoItem-Span ".concat(this.props.item.completed?"TodoItem-Completed":"")},this.props.item.todo),o.a.createElement("button",{"data-toggle":"modal","data-target":"#myModal",className:"btn btn-info",onClick:this.props.startChangeTodo},"\u7f16\u8f91"),o.a.createElement("button",{className:"TodoItem-Button btn",onClick:this.props.deleteTodoItem},"-"),o.a.createElement("div",{className:"modal fade",id:"myModal",tabIndex:"-1",role:"dialog","aria-labelledby":"myModalLabel","aria-hidden":"true"},o.a.createElement("div",{className:"modal-dialog"},o.a.createElement("div",{className:"modal-content"},o.a.createElement("div",{className:"modal-header"},o.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-hidden":"true"},"\xd7"),o.a.createElement("h4",{className:"modal-title",id:"myModalLabel"},"\u7f16\u8f91 Todo \u5185\u5bb9")),o.a.createElement("textarea",{type:"text",className:"modal-body",placeholder:"\u8bf7\u8f93\u5165\u65b0 Todo",ref:"isChanging"}),o.a.createElement("div",{className:"modal-footer"},o.a.createElement("button",{type:"button",className:"btn btn-default","data-dismiss":"modal"},"\u53d6\u6d88"),o.a.createElement("button",{type:"button",className:"btn btn-primary","data-dismiss":"modal",onClick:this.changeTodo},"\u63d0\u4ea4\u66f4\u6539"))))))}}]),t}(a.Component)),g=(n(119),function(e){function t(){return Object(l.a)(this,t),Object(r.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"FilterButtons btn-group"},o.a.createElement("button",{className:"btn btn-success",onClick:this.props.showCompleted},"\u5df2\u5b8c\u6210"),o.a.createElement("button",{className:"btn btn-primary",onClick:this.props.showAll},"\u5168\u90e8"),o.a.createElement("button",{className:"btn btn-warning",onClick:this.props.showUncompleted},"\u672a\u5b8c\u6210"))}}]),t}(a.Component)),T=(n(121),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(r.a)(this,Object(d.a)(t).call(this,e))).addTodoItem=function(e,t){n.setState(function(n){var a=n.list;return{list:[{todo:e,completed:t}].concat(Object(p.a)(a))}})},n.deleteTodoItem=function(e){n.setState(function(t){return{list:t.list.filter(function(t,n){return n!==e})}})},n.toggleTodo=function(e){n.state.list.map(function(t,n){e===n&&(t.completed=!t.completed)})},n.startChangeTodo=function(e){n.setState(function(t){t.isChanging;return{isChanging:e}})},n.changeTodo=function(e){var t=n.state.isChanging,a=n.state.list;a[t].todo=e,n.setState(function(e){e.list;return{list:a}})},n.showAll=function(){n.setState(function(e){e.status;return{status:"all"}})},n.showCompleted=function(){n.setState(function(e){e.status;return{status:"completed"}})},n.showUncompleted=function(){n.setState(function(e){e.status;return{status:"uncompleted"}})},n.state={list:[{todo:"\u5403\u996d",completed:!1},{todo:"\u7761\u89c9",completed:!1},{todo:"\u6253\u8c46\u8c46",completed:!1}],status:"all"},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state.list.filter(function(t,n){switch(e.state.status){case"completed":return t.completed;case"uncompleted":return!t.completed;default:return!0}});return o.a.createElement("div",{className:"TodoContainer"},"\u5236\u5b9a\u4f60\u7684TodoList\u5427!",o.a.createElement(f,{addTodoItem:this.addTodoItem}),t.map(function(t,n){return o.a.createElement(b,{key:n,index:n,item:t,deleteTodoItem:e.deleteTodoItem.bind(e,n),toggleTodo:e.toggleTodo.bind(e,n),startChangeTodo:e.startChangeTodo.bind(e,n),changeTodo:e.changeTodo})}),o.a.createElement(g,{showAll:this.showAll,showCompleted:this.showCompleted,showUncompleted:this.showUncompleted}))}}]),t}(a.Component)),E=(n(123),function(e){function t(){return Object(l.a)(this,t),Object(r.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(u,{title:"pre-work-todolist"}),o.a.createElement(T,null))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},61:function(e,t,n){e.exports=n(125)},66:function(e,t,n){},68:function(e,t,n){}},[[61,2,1]]]);
//# sourceMappingURL=main.63bac202.chunk.js.map