(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["KpLocalStorage"] = factory();
	else
		root["KpLocalStorage"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _ContainerContainerJs = __webpack_require__(1);
	
	var _ContainerContainerJs2 = _interopRequireDefault(_ContainerContainerJs);
	
	var _AdapterLocalStorageJs = __webpack_require__(2);
	
	var _AdapterLocalStorageJs2 = _interopRequireDefault(_AdapterLocalStorageJs);
	
	var _AdapterSessionStorageJs = __webpack_require__(5);
	
	var _AdapterSessionStorageJs2 = _interopRequireDefault(_AdapterSessionStorageJs);
	
	var _AdapterCookieStorageJs = __webpack_require__(6);
	
	var _AdapterCookieStorageJs2 = _interopRequireDefault(_AdapterCookieStorageJs);
	
	var _AdapterArrayStorageJs = __webpack_require__(7);
	
	var _AdapterArrayStorageJs2 = _interopRequireDefault(_AdapterArrayStorageJs);
	
	var _ContainerContainerFactoryJs = __webpack_require__(8);
	
	var _ContainerContainerFactoryJs2 = _interopRequireDefault(_ContainerContainerFactoryJs);
	
	var _UnitUtilJs = __webpack_require__(4);
	
	var _UnitUtilJs2 = _interopRequireDefault(_UnitUtilJs);
	
	exports['default'] = {
	    Adapter: {
	        LocalStorage: _AdapterLocalStorageJs2['default'],
	        SessionStorage: _AdapterSessionStorageJs2['default'],
	        CookieStorage: _AdapterCookieStorageJs2['default'],
	        ArrayStorage: _AdapterArrayStorageJs2['default']
	    },
	    Container: _ContainerContainerJs2['default'],
	    Util: _UnitUtilJs2['default'],
	    ContainerFactory: _ContainerContainerFactoryJs2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _AdapterLocalStorageJs = __webpack_require__(2);
	
	var _AdapterLocalStorageJs2 = _interopRequireDefault(_AdapterLocalStorageJs);
	
	var Container = (function () {
	    function Container(name, adapter) {
	        _classCallCheck(this, Container);
	
	        this._name = name;
	
	        if (adapter) {
	            this._adapter = adapter;
	        } else {
	            this._adapter = new _AdapterLocalStorageJs2['default']();
	        }
	    }
	
	    _createClass(Container, [{
	        key: 'isSupported',
	        value: function isSupported() {
	            return this._adapter.isSupported();
	        }
	    }, {
	        key: 'setName',
	        value: function setName(name) {
	            this._name = name;
	            return this;
	        }
	    }, {
	        key: 'getName',
	        value: function getName() {
	            return this._name;
	        }
	    }, {
	        key: 'setAdapter',
	        value: function setAdapter(adapter) {
	            this._adapter = adapter;
	            return this;
	        }
	    }, {
	        key: 'getAdapter',
	        value: function getAdapter() {
	            return this._adapter;
	        }
	    }, {
	        key: 'keys',
	        value: function keys() {
	            var itemContainer = this.getItemContainer();
	            var keys = [];
	
	            for (var key in itemContainer) {
	                if (itemContainer.hasOwnProperty(key)) {
	                    keys.push(key);
	                }
	            }
	
	            return keys;
	        }
	    }, {
	        key: 'getItem',
	        value: function getItem(key) {
	
	            var itemContainer = this.getItemContainer();
	
	            if (itemContainer) {
	                return itemContainer[key] || null;
	            }
	
	            return null;
	        }
	    }, {
	        key: 'setItem',
	        value: function setItem(key, item) {
	
	            var itemContainer = this.getItemContainer();
	
	            if (!itemContainer) {
	                itemContainer = {};
	            }
	
	            itemContainer[key] = item;
	
	            this.setItemContainer(itemContainer);
	
	            return this;
	        }
	    }, {
	        key: 'removeItem',
	        value: function removeItem(key) {
	
	            var itemContainer = this.getItemContainer();
	
	            if (itemContainer) {
	                delete itemContainer[key];
	                this.setItemContainer(itemContainer);
	            }
	
	            return this;
	        }
	    }, {
	        key: 'getItemContainer',
	        value: function getItemContainer() {
	            return this._adapter.getItem(this._name);
	        }
	    }, {
	        key: 'removeItemContainer',
	        value: function removeItemContainer() {
	            this._adapter.removeItem(this._name);
	            return this;
	        }
	    }, {
	        key: 'setItemContainer',
	        value: function setItemContainer(itemContainer) {
	            this._adapter.setItem(this._name, itemContainer);
	            return this;
	        }
	    }]);
	
	    return Container;
	})();
	
	exports['default'] = Container;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _AbstractAdapterJs = __webpack_require__(3);
	
	var _AbstractAdapterJs2 = _interopRequireDefault(_AbstractAdapterJs);
	
	var _UnitUtilJs = __webpack_require__(4);
	
	var _UnitUtilJs2 = _interopRequireDefault(_UnitUtilJs);
	
	var LocalStorage = (function (_AbstractAdapter) {
	    _inherits(LocalStorage, _AbstractAdapter);
	
	    function LocalStorage() {
	        var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	        _classCallCheck(this, LocalStorage);
	
	        _get(Object.getPrototypeOf(LocalStorage.prototype), 'constructor', this).call(this, options);
	        this._type = 'localStorage';
	    }
	
	    _createClass(LocalStorage, [{
	        key: 'getName',
	        value: function getName() {
	            return 'LocalStorage';
	        }
	    }, {
	        key: 'isSupported',
	        value: function isSupported() {
	            try {
	                var supported = this._type in window && window[this._type] !== null;
	
	                // safari (OS X or iOS) is in private browsing mode
	                if (supported) {
	                    var key = this._containerName + '__' + Math.round(Math.random() * 1e7);
	                    var storage = window[this._type];
	                    storage.setItem(key, '');
	                    storage.removeItem(key);
	                }
	                return supported;
	            } catch (e) {
	                return false;
	            }
	        }
	    }, {
	        key: 'getItem',
	        value: function getItem(key) {
	            var itemJson = window[this._type].getItem(key);
	
	            if (!itemJson) {
	                return null;
	            }
	
	            return _UnitUtilJs2['default'].jsonTo(itemJson);
	        }
	    }, {
	        key: 'setItem',
	        value: function setItem(key, item) {
	            var itemJson = _UnitUtilJs2['default'].toJson(item);
	            try {
	                window[this._type].setItem(key, itemJson);
	            } catch (e) {
	                // @todo error 可能存满了？
	            }
	            return this;
	        }
	    }, {
	        key: 'removeItem',
	        value: function removeItem(key) {
	            window[this._type].removeItem(key);
	            return this;
	        }
	    }]);
	
	    return LocalStorage;
	})(_AbstractAdapterJs2['default']);
	
	exports['default'] = LocalStorage;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var AbstractAdapter = (function () {
	    function AbstractAdapter() {
	        _classCallCheck(this, AbstractAdapter);
	    }
	
	    _createClass(AbstractAdapter, [{
	        key: 'getName',
	        value: function getName() {
	            throw new Error('This method is abstract');
	        }
	    }, {
	        key: 'isSupported',
	        value: function isSupported() {
	            throw new Error('This method is abstract');
	        }
	    }, {
	        key: 'getItem',
	        value: function getItem() {
	            throw new Error('This method is abstract');
	        }
	    }, {
	        key: 'setItem',
	        value: function setItem() {
	            throw new Error('This method is abstract');
	        }
	    }, {
	        key: 'removeItem',
	        value: function removeItem() {
	            throw new Error('This method is abstract');
	        }
	    }]);
	
	    return AbstractAdapter;
	})();
	
	exports['default'] = AbstractAdapter;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Util = (function () {
	    function Util() {
	        _classCallCheck(this, Util);
	    }
	
	    _createClass(Util, [{
	        key: "jsonTo",
	        value: function jsonTo(json) {
	            return JSON.parse(json);
	        }
	    }, {
	        key: "toJson",
	        value: function toJson(value) {
	            return JSON.stringify(value);
	        }
	    }]);
	
	    return Util;
	})();
	
	exports["default"] = new Util();
	module.exports = exports["default"];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _LocalStorageJs = __webpack_require__(2);
	
	var _LocalStorageJs2 = _interopRequireDefault(_LocalStorageJs);
	
	var SessionStorage = (function (_LocalStorage) {
	    _inherits(SessionStorage, _LocalStorage);
	
	    function SessionStorage() {
	        var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	        _classCallCheck(this, SessionStorage);
	
	        _get(Object.getPrototypeOf(SessionStorage.prototype), 'constructor', this).call(this, options);
	
	        this._type = 'sessionStorage';
	    }
	
	    _createClass(SessionStorage, [{
	        key: 'getName',
	        value: function getName() {
	            return 'SessionStorage';
	        }
	    }]);
	
	    return SessionStorage;
	})(_LocalStorageJs2['default']);
	
	exports['default'] = SessionStorage;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _AbstractAdapterJs = __webpack_require__(3);
	
	var _AbstractAdapterJs2 = _interopRequireDefault(_AbstractAdapterJs);
	
	var _UnitUtilJs = __webpack_require__(4);
	
	var _UnitUtilJs2 = _interopRequireDefault(_UnitUtilJs);
	
	var CookieStorage = (function (_AbstractAdapter) {
	    _inherits(CookieStorage, _AbstractAdapter);
	
	    function CookieStorage() {
	        var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	        _classCallCheck(this, CookieStorage);
	
	        _get(Object.getPrototypeOf(CookieStorage.prototype), 'constructor', this).call(this, options);
	        this._expiry = options.expiry || this.dayToMillisecond(100);
	        this._path = options.path || '/';
	        this._domain = options.domain || '';
	    }
	
	    _createClass(CookieStorage, [{
	        key: 'getName',
	        value: function getName() {
	            return 'CookieStorage';
	        }
	    }, {
	        key: 'isSupported',
	        value: function isSupported() {
	            try {
	                return window.navigator.cookieEnabled || 'cookie' in document && (document.cookie.length > 0 || (document.cookie = 'test').indexOf.call(document.cookie, 'test') > -1);
	            } catch (e) {
	                return false;
	            }
	        }
	    }, {
	        key: 'getItem',
	        value: function getItem(key) {
	            var cookies = document.cookie && document.cookie.split(';') || [];
	
	            for (var i = 0, l = cookies.length; i < l; i++) {
	
	                var cookie = cookies[i];
	
	                while (cookie.charAt(0) === ' ') {
	                    cookie = cookie.substring(1, cookie.length);
	                }
	
	                if (cookie.indexOf(key + '=') === 0) {
	                    var itemJson = decodeURIComponent(cookie.substring(key.length + 1, cookie.length));
	                    try {
	                        return _UnitUtilJs2['default'].jsonTo(itemJson);
	                    } catch (e) {}
	                }
	            }
	            return null;
	        }
	    }, {
	        key: 'setItem',
	        value: function setItem(key, item) {
	            var itemJson = _UnitUtilJs2['default'].toJson(item);
	            document.cookie = key + '=' + encodeURIComponent(itemJson) + this.getCookieExpiry(this._expiry) + this.getCookiePath() + this.getCookieDomain();
	            return this;
	        }
	    }, {
	        key: 'removeItem',
	        value: function removeItem(key) {
	            var expiry = this._expiry;
	            this._expiry = this.dayToMillisecond(-1);
	            this.setItem(key, {});
	            this._expiry = expiry;
	            return this;
	        }
	    }, {
	        key: 'getCookieDomain',
	        value: function getCookieDomain() {
	            if (this._domain) {
	                return '; domain=' + this._domain;
	            }
	            return '';
	        }
	    }, {
	        key: 'getCookieExpiry',
	        value: function getCookieExpiry(time) {
	            var expiryDate = new Date();
	            expiryDate.setTime(expiryDate.getTime() + time);
	            return '; expires=' + expiryDate.toUTCString();
	        }
	    }, {
	        key: 'getCookiePath',
	        value: function getCookiePath() {
	            return '; path=' + this._path;
	        }
	    }, {
	        key: 'dayToMillisecond',
	        value: function dayToMillisecond(day) {
	            return day * 24 * 60 * 60 * 1000;
	        }
	    }]);
	
	    return CookieStorage;
	})(_AbstractAdapterJs2['default']);
	
	exports['default'] = CookieStorage;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _AbstractAdapterJs = __webpack_require__(3);
	
	var _AbstractAdapterJs2 = _interopRequireDefault(_AbstractAdapterJs);
	
	var ArrayStorage = (function (_AbstractAdapter) {
	    _inherits(ArrayStorage, _AbstractAdapter);
	
	    function ArrayStorage() {
	        var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	        _classCallCheck(this, ArrayStorage);
	
	        _get(Object.getPrototypeOf(ArrayStorage.prototype), 'constructor', this).call(this, options);
	        this._storage = {};
	    }
	
	    _createClass(ArrayStorage, [{
	        key: 'getName',
	        value: function getName() {
	            return 'ArrayStorage';
	        }
	    }, {
	        key: 'isSupported',
	        value: function isSupported() {
	            return true;
	        }
	    }, {
	        key: 'getItem',
	        value: function getItem(key) {
	            return this._storage[key] || null;
	        }
	    }, {
	        key: 'setItem',
	        value: function setItem(key, item) {
	            this._storage[key] = item;
	            return this;
	        }
	    }, {
	        key: 'removeItem',
	        value: function removeItem(key) {
	            delete this._storage[key];
	            return this;
	        }
	    }]);
	
	    return ArrayStorage;
	})(_AbstractAdapterJs2['default']);
	
	exports['default'] = ArrayStorage;
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _ContainerJs = __webpack_require__(1);
	
	var _ContainerJs2 = _interopRequireDefault(_ContainerJs);
	
	var _AdapterArrayStorageJs = __webpack_require__(7);
	
	var _AdapterArrayStorageJs2 = _interopRequireDefault(_AdapterArrayStorageJs);
	
	var _AdapterCookieStorageJs = __webpack_require__(6);
	
	var _AdapterCookieStorageJs2 = _interopRequireDefault(_AdapterCookieStorageJs);
	
	var _AdapterSessionStorageJs = __webpack_require__(5);
	
	var _AdapterSessionStorageJs2 = _interopRequireDefault(_AdapterSessionStorageJs);
	
	var _AdapterLocalStorageJs = __webpack_require__(2);
	
	var _AdapterLocalStorageJs2 = _interopRequireDefault(_AdapterLocalStorageJs);
	
	var _AdapterAbstractAdapterJs = __webpack_require__(3);
	
	var _AdapterAbstractAdapterJs2 = _interopRequireDefault(_AdapterAbstractAdapterJs);
	
	var adapters = {
	    localstorage: _AdapterLocalStorageJs2['default'],
	    sessionstorage: _AdapterSessionStorageJs2['default'],
	    cookiestorage: _AdapterCookieStorageJs2['default'],
	    arraystorage: _AdapterArrayStorageJs2['default']
	};
	
	function ContainerFactory(options) {
	
	    'use strict';
	
	    var name = options.name;
	    var adapter = options.adapter;
	
	    if (!name || typeof name !== 'string') {
	        throw new Error('name is required and string type');
	    }
	
	    if (!(adapter instanceof _AdapterAbstractAdapterJs2['default'])) {
	        if (typeof adapter === 'object') {
	
	            var adapterName = adapter.name;
	
	            if (typeof adapterName !== 'string') {
	                throw new Error('Adapter name invalid. String expected');
	            }
	
	            adapterName = adapter.name.toLowerCase();
	
	            if (!adapters[adapterName]) {
	                throw new Error('The ' + adapterName + ' was not found in the Adapters');
	            }
	
	            adapter = new adapters[adapterName](adapter.options || {});
	        }
	    }
	
	    return new _ContainerJs2['default'](name, adapter);
	}
	
	exports['default'] = ContainerFactory;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=KpLocalStorage.js.map