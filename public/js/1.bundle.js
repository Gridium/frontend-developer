webpackJsonp([1],{

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _lodash = __webpack_require__(231);

var _lodash2 = _interopRequireDefault(_lodash);

var _Headline = __webpack_require__(49);

var _Headline2 = _interopRequireDefault(_Headline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Other = function (_Component) {
    _inherits(Other, _Component);

    function Other() {
        _classCallCheck(this, Other);

        return _possibleConstructorReturn(this, (Other.__proto__ || Object.getPrototypeOf(Other)).apply(this, arguments));
    }

    _createClass(Other, [{
        key: 'render',
        value: function render() {
            var other = this.props.other ? this.props.other : job.other;

            var listStyle = 'lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--orange-30';

            var otherItems = other.map(function (item) {
                return _react2.default.createElement(
                    'li',
                    {
                        key: item,
                        className: listStyle
                    },
                    (0, _lodash2.default)(item)
                );
            });

            return _react2.default.createElement(
                'div',
                { className: 'pa3 pa5-ns',
                    style: { height: '100vh' }
                },
                _react2.default.createElement(_Headline2.default, {
                    style: 'f2 tc',
                    headline: 'Equipment'
                }),
                _react2.default.createElement(
                    'ul',
                    {
                        className: 'mt0 list pl0 measure center'
                    },
                    otherItems
                )
            );
        }
    }]);

    return Other;
}(_react.Component);

exports.default = Other;

/***/ })

});
//# sourceMappingURL=1.bundle.js.map