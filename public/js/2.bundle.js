webpackJsonp([2],{

/***/ 568:
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

var _gridium = __webpack_require__(155);

var _gridium2 = _interopRequireDefault(_gridium);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Methodology = function (_Component) {
    _inherits(Methodology, _Component);

    function Methodology() {
        _classCallCheck(this, Methodology);

        return _possibleConstructorReturn(this, (Methodology.__proto__ || Object.getPrototypeOf(Methodology)).apply(this, arguments));
    }

    _createClass(Methodology, [{
        key: 'isMethodUsed',
        value: function isMethodUsed(isUsed) {
            if (isUsed === true) {
                return _react2.default.createElement('i', { className: 'glyphicon glyphicon-ok' });
            } else {
                return _react2.default.createElement('i', { className: 'glyphicon glyphicon-remove' });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var methods = this.props.methodology ? this.props.methodology : _gridium2.default.methodology;

            var listStyle = 'lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--orange-30';

            var codereviews = methods.codereviews,
                prototyping = methods.prototyping,
                failfast = methods.failfast,
                unittests = methods.unittests,
                integrationtests = methods.integrationtests,
                buildserver = methods.buildserver,
                staticcodeanalysis = methods.staticcodeanalysis,
                versioncontrol = methods.versioncontrol,
                issuetracker = methods.issuetracker,
                standups = methods.standups,
                quickstart = methods.quickstart,
                commitondayone = methods.commitondayone;


            return _react2.default.createElement(
                'div',
                { className: 'pa3 pa5-ns' },
                _react2.default.createElement(_Headline2.default, {
                    style: 'f2 tc',
                    headline: 'Methodology'
                }),
                _react2.default.createElement(
                    _List2.default,
                    null,
                    _react2.default.createElement(_ListItem2.default, {
                        style: listStyle,
                        name: 'Code Reviews',
                        value: this.isMethodUsed(codereviews) }),
                    _react2.default.createElement(_ListItem2.default, {
                        style: listStyle,
                        name: 'Prototyping',
                        value: this.isMethodUsed(prototyping)
                    }),
                    _react2.default.createElement(_ListItem2.default, {
                        style: listStyle,
                        name: ' Fail Fast',
                        value: this.isMethodUsed(failfast)
                    }),
                    _react2.default.createElement(_ListItem2.default, {
                        style: listStyle,
                        name: 'Unit Tests',
                        value: this.isMethodUsed(unittests)
                    }),
                    _react2.default.createElement(_ListItem2.default, {
                        style: listStyle,
                        name: 'Integration Tests',
                        value: this.isMethodUsed(integrationtests)
                    }),
                    _react2.default.createElement(_ListItem2.default, {
                        style: listStyle,
                        name: 'Fail Fast',
                        value: this.isMethodUsed(failfast)
                    }),
                    _react2.default.createElement(_ListItem2.default, {
                        style: listStyle,
                        name: 'Build Server',
                        value: buildserver
                    }),
                    _react2.default.createElement(_ListItem2.default, {
                        style: listStyle,
                        name: 'Static Code Analysis',
                        value: staticcodeanalysis
                    }),
                    _react2.default.createElement(_ListItem2.default, {
                        style: listStyle,
                        name: 'Version Control',
                        value: versioncontrol
                    }),
                    _react2.default.createElement(_ListItem2.default, {
                        style: listStyle,
                        name: 'Issue Tracker',
                        value: issuetracker
                    }),
                    _react2.default.createElement(_ListItem2.default, {
                        style: listStyle,
                        name: 'Stand Ups',
                        value: this.isMethodUsed(standups)
                    }),
                    _react2.default.createElement(_ListItem2.default, {
                        style: listStyle,
                        name: 'Quick Start',
                        value: this.isMethodUsed(quickstart)
                    }),
                    _react2.default.createElement(_ListItem2.default, {
                        style: listStyle,
                        name: 'Commit On Day One',
                        value: this.isMethodUsed(commitondayone)
                    })
                )
            );
        }
    }]);

    return Methodology;
}(_react.Component);

exports.default = Methodology;

/***/ })

});
//# sourceMappingURL=2.bundle.js.map