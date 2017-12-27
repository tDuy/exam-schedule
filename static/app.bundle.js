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

		_this.state = { list: arr };
		_this.addRowHandler = _this.addRowHandler.bind(_this);
		_this.delRowHandler = _this.delRowHandler.bind(_this);
		_this.editRowHandler = _this.editRowHandler.bind(_this);
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
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'columns' },
				_react2.default.createElement(
					'div',
					{ className: 'column' },
					_react2.default.createElement(_MyTable2.default, { arr: this.state.list, editRow: this.editRowHandler, deleteRow: this.delRowHandler }),
					_react2.default.createElement(_AddRow2.default, { createRow: this.addRowHandler })
				),
				_react2.default.createElement(
					'div',
					{ className: 'column' },
					_react2.default.createElement(
						'h1',
						null,
						'Result'
					)
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
				{ className: 'table is-striped' },
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
		return _this;
	}

	_createClass(AddRow, [{
		key: "onSubmit",
		value: function onSubmit(e) {
			e.preventDefault();
			var form = document.forms.AddRowForm;
			this.props.createRow({
				name: form.newName.value,
				subject: form.newSubject.value
			});

			form.newName.value = "";
			form.newSubject.value = "";
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"form",
				{ onSubmit: this.onSubmit, name: "AddRowForm" },
				_react2.default.createElement("input", { type: "text", name: "newName", placeholder: "Name" }),
				_react2.default.createElement("input", { type: "text", name: "newSubject", placeholder: "Subject" }),
				_react2.default.createElement("input", { type: "submit", name: "submit" })
			);
		}
	}]);

	return AddRow;
}(_react2.default.Component);

exports.default = AddRow;

/***/ })

},[15]);
//# sourceMappingURL=app.bundle.js.map