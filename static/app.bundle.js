webpackJsonp([0],{

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(16);


/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(8);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _MyTable = __webpack_require__(28);

var _MyTable2 = _interopRequireDefault(_MyTable);

var _AddRow = __webpack_require__(30);

var _AddRow2 = _interopRequireDefault(_AddRow);

var _ResultTable = __webpack_require__(33);

var _ResultTable2 = _interopRequireDefault(_ResultTable);

var _Graph = __webpack_require__(32);

var _Graph2 = _interopRequireDefault(_Graph);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arr = [{ id: 0, name: "Phuc", subject: "Toan" }, { id: 1, name: "Phuc", subject: "Van" }, { id: 2, name: "Phuc", subject: "Su" }, { id: 3, name: "Truc", subject: "Toan" }, { id: 4, name: "Truc", subject: "Anh" }];

var App = function (_React$Component) {
	_inherits(App, _React$Component);

	function App(props) {
		_classCallCheck(this, App);

		var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

		_this.state = { list: arr, exe: false, result: [] };
		_this.addRowHandler = _this.addRowHandler.bind(_this);
		_this.delRowHandler = _this.delRowHandler.bind(_this);
		_this.editRowHandler = _this.editRowHandler.bind(_this);

		_this.execute = _this.execute.bind(_this);
		return _this;
	}

	_createClass(App, [{
		key: 'addRowHandler',
		value: function addRowHandler(obj) {
			var id = new Date().getTime();
			var arr = this.state.list.concat({ id: id, name: obj.name, subject: obj.subject });
			this.setState({ list: arr });
		}
	}, {
		key: 'editRowHandler',
		value: function editRowHandler(obj) {
			var arr = this.state.list;
			for (var i = 0; i < arr.length; i++) {
				if (arr[i].id === obj.id) {
					arr[i] = obj;
					break;
				}
			}
			this.setState({ list: arr });
		}
	}, {
		key: 'delRowHandler',
		value: function delRowHandler(id) {
			var arr = this.state.list;

			for (var i = 0; i < arr.length; i++) {
				if (arr[i].id === id) {
					arr.splice(i, 1);
					break;
				}
			}

			this.setState({ list: arr });
		}
	}, {
		key: 'execute',
		value: function execute() {
			var myGraph = _Graph2.default.fromArr(this.state.list);
			var labels = myGraph.coloring();
			// console.log(labels);

			var result = myGraph.subjects.map(function (sub, index) {
				return { id: index, subject: sub, label: labels[index] };
			});

			this.setState({ exe: true, result: result });
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'container columns' },
				_react2.default.createElement(
					'div',
					{ className: 'column' },
					_react2.default.createElement(
						'h1',
						{ className: 'title is-4' },
						'Input'
					),
					_react2.default.createElement(_MyTable2.default, { arr: this.state.list, editRow: this.editRowHandler, deleteRow: this.delRowHandler }),
					_react2.default.createElement(_AddRow2.default, { createRow: this.addRowHandler }),
					_react2.default.createElement(
						'div',
						{ className: '' },
						_react2.default.createElement(
							'button',
							{ className: 'button is-primary', onClick: this.execute },
							'Calculate'
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'column' },
					_react2.default.createElement(
						'h1',
						{ className: 'title is-4' },
						'Result'
					),
					this.state.exe && _react2.default.createElement(_ResultTable2.default, { arr: this.state.result })
				)
			);
		}
	}]);

	return App;
}(_react2.default.Component);

var rootNode = document.getElementById('root');
_reactDom2.default.render(_react2.default.createElement(App, null), rootNode);

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _MyRow = __webpack_require__(29);

var _MyRow2 = _interopRequireDefault(_MyRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyTable = function (_React$Component) {
	_inherits(MyTable, _React$Component);

	function MyTable(props) {
		_classCallCheck(this, MyTable);

		return _possibleConstructorReturn(this, (MyTable.__proto__ || Object.getPrototypeOf(MyTable)).call(this, props));
	}

	_createClass(MyTable, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			var listRow = this.props.arr.map(function (el, index) {
				return _react2.default.createElement(_MyRow2.default, {
					key: el.id,

					data: el,
					editRow: _this2.props.editRow,
					deleteRow: _this2.props.deleteRow });
			});
			return _react2.default.createElement(
				'table',
				{ className: 'table is-striped is-fullwidth' },
				_react2.default.createElement(
					'thead',
					null,
					_react2.default.createElement(
						'tr',
						null,
						_react2.default.createElement(
							'th',
							null,
							'Name'
						),
						_react2.default.createElement(
							'th',
							null,
							'Subject'
						),
						_react2.default.createElement(
							'th',
							null,
							'Delete'
						)
					)
				),
				_react2.default.createElement(
					'tbody',
					null,
					listRow
				)
			);
		}
	}]);

	return MyTable;
}(_react2.default.Component);

exports.default = MyTable;

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyRow = function (_React$Component) {
	_inherits(MyRow, _React$Component);

	function MyRow(props) {
		_classCallCheck(this, MyRow);

		var _this = _possibleConstructorReturn(this, (MyRow.__proto__ || Object.getPrototypeOf(MyRow)).call(this, props));

		_this.onDblClick = _this.onDblClick.bind(_this);
		_this.onClick = _this.onClick.bind(_this);
		_this.onBlur = _this.onBlur.bind(_this);

		_this.state = { name: true, subject: true };
		return _this;
	}

	_createClass(MyRow, [{
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {
			if (this.state.name === false) {
				var input = document.querySelector('input[name="name"]');
				input.focus();
			} else if (this.state.subject === false) {
				var input = document.querySelector('input[name="subject"]');
				input.focus();
			}
		}
	}, {
		key: 'onDblClick',
		value: function onDblClick(e) {
			// e.stopPropagation();
			var className = e.target.className;
			this.setState(_defineProperty({}, className, false));
		}
	}, {
		key: 'onBlur',
		value: function onBlur() {
			var obj = {};
			obj.id = this.props.data.id;
			if (this.state.name === false) {
				obj.name = document.querySelector('input[name="name"]').value;
				obj.subject = this.props.data.subject;
			} else {
				obj.subject = document.querySelector('input[name="subject"]').value;
				obj.name = this.props.data.name;
			}

			this.props.editRow(obj);

			this.setState({ name: true, subject: true });
		}
	}, {
		key: 'onClick',
		value: function onClick(e) {
			e.preventDefault();
			this.props.deleteRow(this.props.data.id);
		}
	}, {
		key: 'render',
		value: function render() {
			var name_td;
			var input;
			var subject_td;
			if (this.state.name) {
				// name_td = <td className="name" onDoubleClick={this.onDblClick} >{this.props.data.name}</td>;
				name_td = _react2.default.createElement(
					'td',
					{ className: 'name', onDoubleClick: this.onDblClick },
					this.props.data.name
				);
			} else {
				name_td = _react2.default.createElement(
					'td',
					{ className: 'name', onDoubleClick: this.onDblClick },
					_react2.default.createElement('input', { type: 'text', name: 'name', defaultValue: this.props.data.name, onBlur: this.onBlur })
				);
			}
			if (this.state.subject) {
				subject_td = _react2.default.createElement(
					'td',
					{ className: 'subject', onDoubleClick: this.onDblClick },
					this.props.data.subject
				);
			} else {
				subject_td = _react2.default.createElement(
					'td',
					{ className: 'subject', onDoubleClick: this.onDblClick },
					_react2.default.createElement('input', { type: 'text', name: 'subject', defaultValue: this.props.data.subject, onBlur: this.onBlur })
				);
			}

			return _react2.default.createElement(
				'tr',
				null,
				name_td,
				subject_td,
				_react2.default.createElement(
					'td',
					null,
					_react2.default.createElement('a', { className: 'delete is-medium', onClick: this.onClick })
				)
			);
		}
	}]);

	return MyRow;
}(_react2.default.Component);

exports.default = MyRow;

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddRow = function (_React$Component) {
	_inherits(AddRow, _React$Component);

	function AddRow(props) {
		_classCallCheck(this, AddRow);

		var _this = _possibleConstructorReturn(this, (AddRow.__proto__ || Object.getPrototypeOf(AddRow)).call(this, props));

		_this.onSubmit = _this.onSubmit.bind(_this);

		_this.state = { name: true, subject: true };
		return _this;
	}

	_createClass(AddRow, [{
		key: "onSubmit",
		value: function onSubmit(e) {
			e.preventDefault();
			var form = document.forms.AddRowForm;
			var nameVal = form.newName.value;
			var subVal = form.newSubject.value;

			var flag = true;
			if (nameVal.trim() === "") {
				this.setState({ name: false });
				flag = false;
			} else if (this.state.name === false) this.setState({ name: true });

			if (subVal.trim() === "") {
				this.setState({ subject: false });
				flag = false;
			} else if (this.state.subject === false) this.setState({ subject: true });

			if (flag) {
				this.props.createRow({
					name: nameVal,
					subject: subVal
				});

				form.newName.value = "";
				form.newSubject.value = "";
			}
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"form",
				{ className: "box", onSubmit: this.onSubmit, name: "AddRowForm" },
				_react2.default.createElement(
					"div",
					{ className: "field" },
					_react2.default.createElement(
						"div",
						{ className: "control" },
						_react2.default.createElement("input", { className: "input " + (!this.state.name ? 'is-danger' : ''), type: "text", name: "newName", placeholder: "Name" })
					)
				),
				_react2.default.createElement(
					"div",
					{ className: "field" },
					_react2.default.createElement(
						"div",
						{ className: "control" },
						_react2.default.createElement("input", { className: "input " + (!this.state.subject ? 'is-danger' : ''), type: "text", name: "newSubject", placeholder: "Subject" })
					)
				),
				_react2.default.createElement(
					"div",
					{ className: "field" },
					_react2.default.createElement(
						"div",
						{ className: "control" },
						_react2.default.createElement("input", { className: "button is-info is-outlined", type: "submit", name: "submit", value: "Add" })
					)
				)
			);
		}
	}]);

	return AddRow;
}(_react2.default.Component);

exports.default = AddRow;

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
class Graph {
  constructor(dinh, arrSubj){
	this.dinh = dinh;
	// this.list = Array(dinh).fill([]);
	this.list = [];
	for(let i=0; i<dinh; i++)
	  this.list.push([]);
	this.subjects = arrSubj;
  }
  
  static fromArr(arr){
	  var listSubject = [];
	  for(let i=0; i<arr.length; i++){
		  if(listSubject.indexOf(arr[i].subject) === -1){
			  listSubject.push(arr[i].subject);
		  }
	  }
	  
	  var graph = new Graph(listSubject.length, listSubject);
	  
	//   for(let i=0; i<listSubject.length-1; i++){
	//       for(let j=i+1; j<listSubject.length; j++){
	//           for(let k=0; k<arr.length; k++){
	//               if()
	//           }
	//       }
	//   }
	
	  var listSubjectsOfStudent = {};
	  for(let i=0; i<arr.length; i++){
	  	let obj = arr[i];
		if(!listSubjectsOfStudent.hasOwnProperty(obj.name)){
			listSubjectsOfStudent[obj.name] = [obj.subject];
			
		} else {
			listSubjectsOfStudent[obj.name].push(obj.subject);
		}
	  }
	  
	  var added = [];
	  Object.keys(listSubjectsOfStudent).forEach((key) => {
	  	for(let i=0; i<listSubjectsOfStudent[key].length-1; i++){
	  		for(let j=i+1; j<listSubjectsOfStudent[key].length; j++)	{
	  			var u = listSubject.indexOf(listSubjectsOfStudent[key][i]);
	  			var v = listSubject.indexOf(listSubjectsOfStudent[key][j]);
	  			graph.addEdge(u, v);
	  		}
	  	}
	  });
	  
	  //console.log(JSON.stringify(graph));
	  //console.log(JSON.stringify(listSubjectsOfStudent));
	  
	  return graph;
  }
  
  addEdge(u, v){
  	//check value: trung`, dao nguoc ko can ? (u,v)==(v,u)
  	if(this.list[u].indexOf(v) === -1){
		this.list[u].push(v);
		this.list[v].push(u);
  	}
  }
  coloring(){
	var result = Array(this.dinh).fill(-1);
	result[0] = 0;  // assign first vertex color
	
	var availableColor = Array(this.dinh).fill(true);

	for(let i=1; i<this.dinh; i++){
	  this.list[i].forEach((node)=> {
		if(result[node] !== -1){
		  availableColor[result[node]] = false;
		}
	  });

	  var color;
	  for(let i=0; i<this.dinh; i++){
		if(availableColor[i]){
		  color = i;
		  break;
		}
	  }

	  result[i] = color;

	  availableColor = Array(this.dinh).fill(true);
	}

	return result;
  }
}
/* harmony export (immutable) */ __webpack_exports__["default"] = Graph;


// [[1], [0], []]

// var myGraph = new Graph(5);
// myGraph.addEdge(0, 1);
// myGraph.addEdge(0, 2);
// myGraph.addEdge(1, 2);
// myGraph.addEdge(1, 3);
// myGraph.addEdge(2, 3);
// myGraph.addEdge(4, 3);

// console.log(JSON.stringify(myGraph));
// var x = myGraph.coloring();
// console.log(x);

/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _ResultRow = __webpack_require__(34);

var _ResultRow2 = _interopRequireDefault(_ResultRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResultTable = function (_React$Component) {
    _inherits(ResultTable, _React$Component);

    function ResultTable(props) {
        _classCallCheck(this, ResultTable);

        return _possibleConstructorReturn(this, (ResultTable.__proto__ || Object.getPrototypeOf(ResultTable)).call(this, props));
    }

    _createClass(ResultTable, [{
        key: 'render',
        value: function render() {
            var listRow = this.props.arr.map(function (el) {
                return _react2.default.createElement(_ResultRow2.default, { key: el.id, data: el });
            });
            var keys = Object.keys(this.props.arr[0]);
            keys.splice(keys.indexOf('id'), 1);
            var listTh = keys.map(function (key, index) {
                return _react2.default.createElement(
                    'th',
                    { key: index },
                    key.charAt(0).toUpperCase() + key.slice(1)
                );
            });
            return _react2.default.createElement(
                'table',
                { className: 'table is-hoverable' },
                _react2.default.createElement(
                    'thead',
                    null,
                    _react2.default.createElement(
                        'tr',
                        null,
                        listTh
                    )
                ),
                _react2.default.createElement(
                    'tbody',
                    null,
                    listRow
                )
            );
        }
    }]);

    return ResultTable;
}(_react2.default.Component);

exports.default = ResultTable;

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResultRow = function (_React$Component) {
    _inherits(ResultRow, _React$Component);

    function ResultRow(props) {
        _classCallCheck(this, ResultRow);

        return _possibleConstructorReturn(this, (ResultRow.__proto__ || Object.getPrototypeOf(ResultRow)).call(this, props));
    }

    _createClass(ResultRow, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var keys = Object.keys(this.props.data);
            keys.splice(keys.indexOf('id'), 1);
            var list = keys.map(function (key, index) {
                return _react2.default.createElement(
                    'td',
                    { key: index },
                    _this2.props.data[key]
                );
            });
            return _react2.default.createElement(
                'tr',
                null,
                list
            );
        }
    }]);

    return ResultRow;
}(_react2.default.Component);

exports.default = ResultRow;

/***/ })

},[15]);
//# sourceMappingURL=app.bundle.js.map