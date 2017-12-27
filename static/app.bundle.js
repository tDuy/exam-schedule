webpackJsonp([0],{

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(15);


/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(20);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _MyTable = __webpack_require__(29);

var _MyTable2 = _interopRequireDefault(_MyTable);

var _AddRow = __webpack_require__(31);

var _AddRow2 = _interopRequireDefault(_AddRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arr = [{ name: "Phuc", subject: "Toan" }, { name: "Phuc", subject: "Van" }, { name: "Phuc", subject: "Su" }, { name: "Truc", subject: "Toan" }, { name: "Truc", subject: "Anh" }];

var App = function (_React$Component) {
	_inherits(App, _React$Component);

	function App(props) {
		_classCallCheck(this, App);

		var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

		_this.state = { list: arr };
		_this.addRowHandler = _this.addRowHandler.bind(_this);
		_this.delRowHandler = _this.delRowHandler.bind(_this);
		return _this;
	}

	_createClass(App, [{
		key: 'addRowHandler',
		value: function addRowHandler(obj) {
			var arr = this.state.list.concat(obj);
			this.setState({ list: arr });
		}
	}, {
		key: 'delRowHandler',
		value: function delRowHandler(obj) {
			var arr = this.state.list;
			var s2 = JSON.stringify(obj);
			var index;

			for (var i = 0; i < arr; i++) {
				var s1 = JSON.stringify(arr[i]);
				console.log(s1);
				if (s2 === s1) {
					// index = i;
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
				null,
				_react2.default.createElement(_MyTable2.default, { arr: this.state.list, deleteRow: this.delRowHandler }),
				_react2.default.createElement(_AddRow2.default, { createRow: this.addRowHandler })
			);
		}
	}]);

	return App;
}(_react2.default.Component);

var rootNode = document.getElementById('root');
_reactDom2.default.render(_react2.default.createElement(App, null), rootNode);

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _MyRow = __webpack_require__(30);

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
				return _react2.default.createElement(_MyRow2.default, { key: index, data: el, deleteRow: _this2.props.deleteRow });
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

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

		// this.state = {input: false};
		return _this;
	}

	_createClass(MyRow, [{
		key: "onDblClick",
		value: function onDblClick(e) {}
	}, {
		key: "onClick",
		value: function onClick(e) {
			e.preventDefault();
			var subject = e.target.parentNode.previousSibling;
			var name = subject.previousSibling;
			this.props.deleteRow({ name: name.innerText, subject: subject.innerText });
		}
	}, {
		key: "render",
		value: function render() {

			return _react2.default.createElement(
				"tr",
				null,
				_react2.default.createElement(
					"td",
					{ onDoubleClick: this.onDblClick },
					this.props.data.name
				),
				_react2.default.createElement(
					"td",
					{ onDoubleClick: this.onDblClick },
					this.props.data.subject
				),
				_react2.default.createElement(
					"td",
					null,
					_react2.default.createElement("a", { className: "delete is-medium", onClick: this.onClick })
				)
			);
		}
	}]);

	return MyRow;
}(_react2.default.Component);

exports.default = MyRow;

/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

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
				name: form.name.value,
				subject: form.subject.value
			});

			form.name.value = "";
			form.subject.value = "";
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"form",
				{ onSubmit: this.onSubmit, name: "AddRowForm" },
				_react2.default.createElement("input", { type: "text", name: "name", placeholder: "Name" }),
				_react2.default.createElement("input", { type: "text", name: "subject", placeholder: "Subject" }),
				_react2.default.createElement("input", { type: "submit", name: "submit" })
			);
		}
	}]);

	return AddRow;
}(_react2.default.Component);

exports.default = AddRow;

/***/ })

},[14]);
//# sourceMappingURL=app.bundle.js.map