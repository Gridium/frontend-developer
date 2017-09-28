webpackJsonp([0],{

/***/ 569:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(15);

var _react2 = _interopRequireDefault(_react);

var _Headline = __webpack_require__(154);

var _Headline2 = _interopRequireDefault(_Headline);

var _List = __webpack_require__(229);

var _List2 = _interopRequireDefault(_List);

var _ListItem = __webpack_require__(230);

var _ListItem2 = _interopRequireDefault(_ListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Specs = function (_Component) {
    _inherits(Specs, _Component);

    function Specs() {
        _classCallCheck(this, Specs);

        return _possibleConstructorReturn(this, (Specs.__proto__ || Object.getPrototypeOf(Specs)).apply(this, arguments));
    }

    _createClass(Specs, [{
        key: 'render',
        value: function render() {
            var specs = this.props.specs ? this.props.specs : job.specs;

            var listStyle = 'lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--orange-30';

            var workload = specs.workload,
                workweek = specs.workweek,
                schedule = specs.schedule,
                remote = specs.remote,
                pto = specs.pto;


            return _react2.default.createElement(
                'div',
                { className: 'pa3 pa5-ns' },
                _react2.default.createElement(_Headline2.default, {
                    style: 'f2 tc',
                    headline: 'Specs'
                }),
                _react2.default.createElement(
                    _List2.default,
                    null,
                    _react2.default.createElement(_ListItem2.default, {
                        style: listStyle,
                        name: 'Workload',
                        value: workload
                    }),
                    _react2.default.createElement(_ListItem2.default, {
                        style: listStyle,
                        name: 'Work Week',
                        value: workweek + ' Hours'
                    }),
                    _react2.default.createElement(_ListItem2.default, {
                        style: listStyle,
                        name: 'Schedule',
                        value: schedule
                    }),
                    _react2.default.createElement(_ListItem2.default, {
                        style: listStyle,
                        name: 'Remote',
                        value: remote
                    }),
                    _react2.default.createElement(_ListItem2.default, {
                        style: listStyle,
                        name: 'PTO',
                        value: pto
                    })
                )
            );
        }
    }]);

    return Specs;
}(_react.Component);

exports.default = Specs;

/***/ })

});
//# sourceMappingURL=0.bundle.js.map