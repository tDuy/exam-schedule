webpackJsonp([0],[,,,,,,,,,function(e,t,n){e.exports=n(10)},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=a(n(0)),o=a(n(5)),u=a(n(21)),i=a(n(23)),c=a(n(24)),s=a(n(26)),f=a(n(27)),d=[{id:0,name:"Phuc",subject:"Toan"},{id:1,name:"Phuc",subject:"Van"},{id:2,name:"Phuc",subject:"Su"},{id:3,name:"Truc",subject:"Toan"},{id:4,name:"Truc",subject:"Anh"}],p=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={list:d,exe:!1,result:[]},n.addRowHandler=n.addRowHandler.bind(n),n.delRowHandler=n.delRowHandler.bind(n),n.editRowHandler=n.editRowHandler.bind(n),n.execute=n.execute.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.default.Component),r(t,[{key:"addRowHandler",value:function(e){var t=(new Date).getTime(),n=this.state.list.concat({id:t,name:e.name,subject:e.subject});this.setState({list:n})}},{key:"editRowHandler",value:function(e){for(var t=this.state.list,n=0;n<t.length;n++)if(t[n].id===e.id){t[n]=e;break}this.setState({list:t})}},{key:"delRowHandler",value:function(e){for(var t=this.state.list,n=0;n<t.length;n++)if(t[n].id===e){t.splice(n,1);break}this.setState({list:t})}},{key:"execute",value:function(){var e=s.default.fromArr(this.state.list),t=e.coloring(),n=e.subjects.map(function(e,n){return{id:n,subject:e,label:t[n]}});this.setState({exe:!0,result:n})}},{key:"render",value:function(){return l.default.createElement("div",{className:"container"},l.default.createElement("div",{className:"columns"},l.default.createElement("div",{className:"column"},l.default.createElement("h1",{className:"title is-4"},"Input"),l.default.createElement(u.default,{arr:this.state.list,editRow:this.editRowHandler,deleteRow:this.delRowHandler})),l.default.createElement("div",{className:"column"},l.default.createElement("h1",{className:"title is-4"},"Result"),this.state.exe&&l.default.createElement(c.default,{arr:this.state.result}))),l.default.createElement("div",{className:"columns"},l.default.createElement("div",{className:"column"},l.default.createElement(i.default,{createRow:this.addRowHandler}),l.default.createElement("div",{className:""},l.default.createElement("button",{className:"button is-primary",onClick:this.execute},"Calculate"))),l.default.createElement("div",{className:"column"},l.default.createElement(f.default,null))))}}]),t}(),m=document.getElementById("root");o.default.render(l.default.createElement(p,null),m)},,,,,,,,,,,function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=a(n(0)),o=a(n(22)),u=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.default.Component),r(t,[{key:"render",value:function(){var e=this,t=this.props.arr.map(function(t,n){return l.default.createElement(o.default,{key:t.id,data:t,editRow:e.props.editRow,deleteRow:e.props.deleteRow})});return l.default.createElement("table",{className:"table is-striped is-fullwidth"},l.default.createElement("thead",null,l.default.createElement("tr",null,l.default.createElement("th",null,"Name"),l.default.createElement("th",null,"Subject"),l.default.createElement("th",null,"Delete"))),l.default.createElement("tbody",null,t))}}]),t}();t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=function(e){return e&&e.__esModule?e:{default:e}}(n(0)),l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onDblClick=n.onDblClick.bind(n),n.onClick=n.onClick.bind(n),n.onBlur=n.onBlur.bind(n),n.state={name:!0,subject:!0},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.default.Component),a(t,[{key:"componentDidUpdate",value:function(e,t){if(!1===this.state.name){document.querySelector('input[name="name"]').focus()}else if(!1===this.state.subject){document.querySelector('input[name="subject"]').focus()}}},{key:"onDblClick",value:function(e){var t=e.target.className;this.setState(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},t,!1))}},{key:"onBlur",value:function(){var e={};e.id=this.props.data.id,!1===this.state.name?(e.name=document.querySelector('input[name="name"]').value,e.subject=this.props.data.subject):(e.subject=document.querySelector('input[name="subject"]').value,e.name=this.props.data.name),this.props.editRow(e),this.setState({name:!0,subject:!0})}},{key:"onClick",value:function(e){e.preventDefault(),this.props.deleteRow(this.props.data.id)}},{key:"render",value:function(){var e,t;return e=this.state.name?r.default.createElement("td",{className:"name",onDoubleClick:this.onDblClick},this.props.data.name):r.default.createElement("td",{className:"name",onDoubleClick:this.onDblClick},r.default.createElement("input",{type:"text",name:"name",defaultValue:this.props.data.name,onBlur:this.onBlur})),t=this.state.subject?r.default.createElement("td",{className:"subject",onDoubleClick:this.onDblClick},this.props.data.subject):r.default.createElement("td",{className:"subject",onDoubleClick:this.onDblClick},r.default.createElement("input",{type:"text",name:"subject",defaultValue:this.props.data.subject,onBlur:this.onBlur})),r.default.createElement("tr",null,e,t,r.default.createElement("td",null,r.default.createElement("a",{className:"delete is-medium",onClick:this.onClick})))}}]),t}();t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=function(e){return e&&e.__esModule?e:{default:e}}(n(0)),l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onSubmit=n.onSubmit.bind(n),n.state={name:!0,subject:!0},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.default.Component),a(t,[{key:"onSubmit",value:function(e){e.preventDefault();var t=document.forms.AddRowForm,n=t.newName.value,a=t.newSubject.value,r=!0;""===n.trim()?(this.setState({name:!1}),r=!1):!1===this.state.name&&this.setState({name:!0}),""===a.trim()?(this.setState({subject:!1}),r=!1):!1===this.state.subject&&this.setState({subject:!0}),r&&(this.props.createRow({name:n,subject:a}),t.newName.value="",t.newSubject.value="")}},{key:"render",value:function(){return r.default.createElement("form",{className:"box",onSubmit:this.onSubmit,name:"AddRowForm"},r.default.createElement("div",{className:"field"},r.default.createElement("div",{className:"control"},r.default.createElement("input",{className:"input "+(this.state.name?"":"is-danger"),type:"text",name:"newName",placeholder:"Name"}))),r.default.createElement("div",{className:"field"},r.default.createElement("div",{className:"control"},r.default.createElement("input",{className:"input "+(this.state.subject?"":"is-danger"),type:"text",name:"newSubject",placeholder:"Subject"}))),r.default.createElement("div",{className:"field"},r.default.createElement("div",{className:"control"},r.default.createElement("input",{className:"button is-primary is-outlined",type:"submit",name:"submit",value:"Add"}))))}}]),t}();t.default=l},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=a(n(0)),o=a(n(25)),u=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.default.Component),r(t,[{key:"render",value:function(){var e=this.props.arr.map(function(e){return l.default.createElement(o.default,{key:e.id,data:e})}),t=Object.keys(this.props.arr[0]);t.splice(t.indexOf("id"),1);var n=t.map(function(e,t){return l.default.createElement("th",{key:t},e.charAt(0).toUpperCase()+e.slice(1))});return l.default.createElement("table",{className:"table is-hoverable"},l.default.createElement("thead",null,l.default.createElement("tr",null,n)),l.default.createElement("tbody",null,e))}}]),t}();t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=function(e){return e&&e.__esModule?e:{default:e}}(n(0)),l=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.default.Component),a(t,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.data);t.splice(t.indexOf("id"),1);var n=t.map(function(t,n){return r.default.createElement("td",{key:n},e.props.data[t])});return r.default.createElement("tr",null,n)}}]),t}();t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});class a{constructor(e,t){this.dinh=e,this.list=[];for(let t=0;t<e;t++)this.list.push([]);this.subjects=t}static fromArr(e){var t=[];for(let n=0;n<e.length;n++)-1===t.indexOf(e[n].subject)&&t.push(e[n].subject);var n=new a(t.length,t),r={};for(let t=0;t<e.length;t++){let n=e[t];r.hasOwnProperty(n.name)?r[n.name].push(n.subject):r[n.name]=[n.subject]}return Object.keys(r).forEach(e=>{for(let o=0;o<r[e].length-1;o++)for(let u=o+1;u<r[e].length;u++){var a=t.indexOf(r[e][o]),l=t.indexOf(r[e][u]);n.addEdge(a,l)}}),n}addEdge(e,t){-1===this.list[e].indexOf(t)&&(this.list[e].push(t),this.list[t].push(e))}coloring(){var e=Array(this.dinh).fill(-1);e[0]=0;var t=Array(this.dinh).fill(!0);for(let a=1;a<this.dinh;a++){this.list[a].forEach(n=>{-1!==e[n]&&(t[e[n]]=!1)});var n;for(let e=0;e<this.dinh;e++)if(t[e]){n=e;break}e[a]=n,t=Array(this.dinh).fill(!0)}return e}}t.default=a},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=a(n(0)),o=a(n(6)),u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleFile=n.handleFile.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.default.Component),r(t,[{key:"handleFile",value:function(e){var t,n=e.target.files,a=document.getElementById("filename");n.length>0&&(t=n[0],a.innerText=t.name);var r=new FileReader;r.onload=function(e){var t=e.target.result;var n=o.default.read(t,{type:"binary"}),a=o.default.write(n,{bookType:"xlsx",type:"base64"}),r=new FormData;r.append("data",a);var l=new XMLHttpRequest;l.onreadystatechange=function(){var e;if(4===l.readyState&&200===l.status){var t=new Blob([l.response],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(e=document.createElement("a")).href=window.URL.createObjectURL(t),e.download="Result-schedule.xlsx",e.style.display="none",document.body.appendChild(e),e.click()}},l.open("POST","/api/upload",!0),l.responseType="arraybuffer",l.send(r)},r.readAsBinaryString(t)}},{key:"render",value:function(){return l.default.createElement("div",{className:"box"},l.default.createElement("div",{className:"file is-info"},l.default.createElement("label",{className:"file-label"},l.default.createElement("div",{className:"control"},l.default.createElement("input",{id:"file",className:"file-input",type:"file",name:"resume",onChange:this.handleFile})),l.default.createElement("span",{className:"file-cta"},l.default.createElement("span",{className:"file-icon"},l.default.createElement("i",{className:"fa fa-upload"}," ")),l.default.createElement("span",{className:"file-label",id:"filename"},"Choose a file…")))),l.default.createElement("p",{className:"help is-info"},' The first worksheet must contain 2 columns "name" and "subject"'))}}]),t}();t.default=u}],[9]);