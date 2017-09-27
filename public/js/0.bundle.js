webpackJsonp([0],{

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(15);

var _react2 = _interopRequireDefault(_react);

var _reactLoadable = __webpack_require__(568);

var _reactLoadable2 = _interopRequireDefault(_reactLoadable);

var _LoadingComponent = __webpack_require__(571);

var _LoadingComponent2 = _interopRequireDefault(_LoadingComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AsyncMethodology = (0, _reactLoadable2.default)({
    loadable: function loadable() {
        return __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, 572));
    },
    loading: function loading() {
        return null;
    }
});

exports.default = AsyncMethodology;

/***/ }),

/***/ 567:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*::
declare var __webpack_require__: mixed;
*/

module.exports = typeof __webpack_require__ !== "undefined";

/***/ }),

/***/ 568:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var React = __webpack_require__(15);
var isWebpackBundle = __webpack_require__(567);
var webpackRequireWeak = __webpack_require__(569);

var _require = __webpack_require__(570),
    inspect = _require.inspect;

function capture(fn) {
  var reported = [];
  var stopInspecting = inspect(function (metadata) {
    return reported.push(metadata);
  });
  var promise = fn();
  stopInspecting();
  return { promise: promise, reported: reported };
}

function load(loader) {
  var _capture = capture(function () {
    return loader();
  }),
      promise = _capture.promise,
      reported = _capture.reported;

  if (reported.length > 1) {
    throw new Error('react-loadable cannot handle more than one import() in each loader');
  }

  var state = {
    loading: true,
    loaded: null,
    error: null
  };

  var metadata = reported[0] || {};

  try {
    if (isWebpackBundle) {
      if (typeof metadata.webpackRequireWeakId === 'function') {
        state.loaded = webpackRequireWeak(metadata.webpackRequireWeakId());
        if (state.loaded) state.loading = false;
      }
    } else {
      if (typeof metadata.serverSideRequirePath === 'string') {
        state.loading = false;
        state.loaded = module.require(metadata.serverSideRequirePath);
      }
    }
  } catch (err) {
    state.error = err;
  }

  state.promise = promise.then(function (loaded) {
    state.loading = false;
    state.loaded = loaded;
    return loaded;
  }).catch(function (err) {
    state.loading = false;
    state.error = err;
    throw err;
  });

  return state;
}

function loadMap(obj) {
  var state = {
    loading: false,
    loaded: {},
    error: null
  };

  var promises = [];

  try {
    Object.keys(obj).forEach(function (key) {
      var result = load(obj[key]);

      if (!result.loading) {
        state.loaded[key] = result.loaded;
        state.error = result.error;
      } else {
        state.loading = true;
      }

      promises.push(result.promise);

      result.promise.then(function (res) {
        state.loaded[key] = res;
      }).catch(function (err) {
        state.error = err;
      });
    });
  } catch (err) {
    state.error = err;
  }

  state.promise = Promise.all(promises).then(function (res) {
    state.loading = false;
    return res;
  }).catch(function (err) {
    state.loading = false;
    throw err;
  });

  return state;
}

function resolve(obj) {
  return obj && obj.__esModule ? obj.default : obj;
}

function render(loaded, props) {
  return React.createElement(resolve(loaded), props);
}

function createLoadableComponent(loadFn, options) {
  if (!options.loading) {
    throw new Error('react-loadable requires a `loading` component');
  }

  var opts = Object.assign({
    loader: null,
    loading: null,
    delay: 200,
    timeout: null,
    render: render
  }, options);

  var res = null;

  return function (_React$Component) {
    _inherits(LoadableComponent, _React$Component);

    function LoadableComponent(props) {
      _classCallCheck(this, LoadableComponent);

      var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

      if (!res) {
        res = loadFn(opts.loader);
      }

      _this.state = {
        error: res.error,
        pastDelay: false,
        timedOut: false,
        loading: res.loading,
        loaded: res.loaded
      };
      return _this;
    }

    LoadableComponent.preload = function preload() {
      if (!res) {
        res = loadFn(opts.loader);
      }
    };

    LoadableComponent.prototype.componentWillMount = function componentWillMount() {
      var _this2 = this;

      this._mounted = true;

      if (res.resolved) {
        return;
      }

      if (typeof opts.delay === 'number') {
        this._delay = setTimeout(function () {
          _this2.setState({ pastDelay: true });
        }, opts.delay);
      }

      if (typeof opts.timeout === 'number') {
        this._timeout = setTimeout(function () {
          _this2.setState({ timedOut: true });
        }, opts.timeout);
      }

      var update = function update() {
        if (!_this2._mounted) {
          return;
        }

        _this2.setState({
          error: res.error,
          loaded: res.loaded,
          loading: res.loading
        });

        _this2._clearTimeouts();
      };

      res.promise.then(function () {
        update();
      }).catch(function (err) {
        update();
        throw err;
      });
    };

    LoadableComponent.prototype.componentWillUnmount = function componentWillUnmount() {
      this._mounted = false;
      this._clearTimeouts();
    };

    LoadableComponent.prototype._clearTimeouts = function _clearTimeouts() {
      clearTimeout(this._delay);
      clearTimeout(this._timeout);
    };

    LoadableComponent.prototype.render = function render() {
      if (this.state.loading || this.state.error) {
        return React.createElement(opts.loading, {
          isLoading: this.state.loading,
          pastDelay: this.state.pastDelay,
          timedOut: this.state.timedOut,
          error: this.state.error
        });
      } else if (this.state.loaded) {
        return opts.render(this.state.loaded, this.props);
      } else {
        return null;
      }
    };

    return LoadableComponent;
  }(React.Component);
}

function Loadable(opts) {
  return createLoadableComponent(load, opts);
}

function LoadableMap(opts) {
  if (typeof opts.render !== 'function') {
    throw new Error('LoadableMap requires a `render(loaded, props)` function');
  }

  return createLoadableComponent(loadMap, opts);
}

Loadable.Map = LoadableMap;

module.exports = Loadable;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(228)(module)))

/***/ }),

/***/ 569:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isWebpackBundle = __webpack_require__(567);

/*::
declare var __webpack_require__: Function;
declare var __webpack_modules__: Object;
*/

function requireWeak(id /*: number | string */) {
  if (__webpack_require__.m[id]) {
    return __webpack_require__(id);
  }
}

module.exports = isWebpackBundle ? requireWeak : null;

/***/ }),

/***/ 570:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var callbacks = [];

function report(promise, metadata) {
  callbacks.forEach(function (callback) {
    callback(metadata);
  });

  return promise;
}

function inspect(callback) {
  var index = callbacks.push(callback) - 1;

  return function stopInspecting() {
    callbacks.splice(index, 1);
  };
}

exports.report = report;
exports.inspect = inspect;

/***/ }),

/***/ 571:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(15);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loading = function Loading(_ref) {
  var isLoading = _ref.isLoading,
      error = _ref.error;

  // Handle the loading state
  if (isLoading) {
    return _react2.default.createElement(
      'div',
      null,
      'Loading...'
    );
  }
  // Handle the error state
  else if (error) {
      return _react2.default.createElement(
        'div',
        null,
        'Sorry, there was a problem loading the page.'
      );
    } else {
      return null;
    }
};

exports.default = Loading;

/***/ })

});
//# sourceMappingURL=0.bundle.js.map