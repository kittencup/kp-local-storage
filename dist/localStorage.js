var LocalStorage =
/******/ (function(modules) { // webpackBootstrap
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

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _ContainerContainerJs = __webpack_require__(1);
	
	var _ContainerContainerJs2 = _interopRequireDefault(_ContainerContainerJs);
	
	var _AdapterLocalStorageJs = __webpack_require__(2);
	
	var _AdapterLocalStorageJs2 = _interopRequireDefault(_AdapterLocalStorageJs);
	
	exports["default"] = {
	    Adapter: {
	        LocalStorage: _AdapterLocalStorageJs2["default"]
	    },
	    Container: _ContainerContainerJs2["default"]
	};
	module.exports = exports["default"];

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Container = (function () {
	    function Container(name, adapter) {
	        _classCallCheck(this, Container);
	
	        this.name = name;
	
	        if (adapter) {
	            this.setAdapter(adapter);
	        }
	    }
	
	    _createClass(Container, [{
	        key: "setName",
	        value: function setName(name) {
	            this.name = name;
	            return this;
	        }
	    }, {
	        key: "getName",
	        value: function getName() {
	            return this.name;
	        }
	    }, {
	        key: "setAdapter",
	        value: function setAdapter(adapter) {
	            this.adapter = adapter;
	            this.adapter.setContainerName(this.name);
	            return this;
	        }
	    }, {
	        key: "getAdapter",
	        value: function getAdapter() {
	            return this.adapter;
	        }
	    }, {
	        key: "keys",
	        value: function keys() {
	            return this.adapter.keys();
	        }
	    }, {
	        key: "getItem",
	        value: function getItem(key) {
	            return this.adapter.getItem(key);
	        }
	    }, {
	        key: "setItem",
	        value: function setItem(key, item) {
	            this.adapter.setItem(key, item);
	            return this;
	        }
	    }, {
	        key: "removeItem",
	        value: function removeItem(key) {
	            this.adapter.removeItem(key);
	            return this;
	        }
	    }]);
	
	    return Container;
	})();
	
	exports["default"] = Container;
	module.exports = exports["default"];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _AbstractAdapterJs = __webpack_require__(3);
	
	var _AbstractAdapterJs2 = _interopRequireDefault(_AbstractAdapterJs);
	
	var _UnitUtilJs = __webpack_require__(4);
	
	var _UnitUtilJs2 = _interopRequireDefault(_UnitUtilJs);
	
	var LocalStorage = (function (_AbstractAdapter) {
	    _inherits(LocalStorage, _AbstractAdapter);
	
	    function LocalStorage() {
	        _classCallCheck(this, LocalStorage);
	
	        _get(Object.getPrototypeOf(LocalStorage.prototype), "constructor", this).apply(this, arguments);
	    }
	
	    _createClass(LocalStorage, [{
	        key: "isSupported",
	        value: function isSupported() {
	            try {
	                var supported = "localStorage" in window && window.localStorage !== null;
	
	                // safari (OS X or iOS) is in private browsing mode
	                if (supported) {
	                    var key = this._containerName + "__" + Math.round(Math.random() * 1e7);
	                    var storage = window.localStorage;
	                    storage.setItem(key, "");
	                    storage.removeItem(key);
	                }
	                return supported;
	            } catch (e) {
	                return false;
	            }
	        }
	    }, {
	        key: "setContainer",
	        value: function setContainer(container) {
	            if (this._isSupported) {
	                var containerJson = _UnitUtilJs2["default"].toJson(container);
	                try {
	                    window.localStorage.setItem(this._containerName, containerJson);
	                } catch (e) {
	                    // @todo error 可能存满了？
	                }
	            } else {
	                    // @todo error
	                }
	            return this;
	        }
	    }, {
	        key: "getContainer",
	        value: function getContainer() {
	            if (this._isSupported) {
	
	                var containerJson = window.localStorage.getItem(this._containerName);
	
	                if (!containerJson) {
	                    return {};
	                }
	
	                return _UnitUtilJs2["default"].jsonTo(containerJson);
	            } else {
	                // @todo error;
	            }
	        }
	    }, {
	        key: "removeContainer",
	        value: function removeContainer() {
	            if (this.isSupported) {
	                window.localStorage.removeItem(this._containerName);
	            }
	            return this;
	        }
	    }]);
	
	    return LocalStorage;
	})(_AbstractAdapterJs2["default"]);
	
	exports["default"] = LocalStorage;
	module.exports = exports["default"];

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var AbstractAdapter = (function () {
	    function AbstractAdapter() {
	        _classCallCheck(this, AbstractAdapter);
	
	        this._isSupported = this.isSupported();
	    }
	
	    _createClass(AbstractAdapter, [{
	        key: "isSupported",
	        value: function isSupported() {
	            throw new Error("This method is abstract");
	        }
	    }, {
	        key: "setContainer",
	        value: function setContainer(container) {
	            throw new Error("This method is abstract");
	        }
	    }, {
	        key: "getContainer",
	        value: function getContainer() {
	            throw new Error("This method is abstract");
	        }
	    }, {
	        key: "removeContainer",
	        value: function removeContainer() {
	            throw new Error("This method is abstract");
	        }
	    }, {
	        key: "getItem",
	        value: function getItem(key) {
	            return this.getContainer()[key];
	        }
	    }, {
	        key: "setItem",
	        value: function setItem(key, item) {
	            var container = this.getContainer();
	            container[key] = item;
	            this.setContainer(container);
	            return this;
	        }
	    }, {
	        key: "removeItem",
	        value: function removeItem(key) {
	            var container = this.getContainer();
	            delete container[key];
	            this.setContainer(container);
	            return this;
	        }
	    }, {
	        key: "keys",
	        value: function keys() {
	            var container = this.getContainer();
	            var keys = [];
	            for (var key in container) {
	                if (container.hasOwnProperty(key)) {
	                    keys.push(key);
	                }
	            }
	            return keys;
	        }
	    }, {
	        key: "setContainerName",
	        value: function setContainerName(containerName) {
	            this._containerName = containerName;
	            return this;
	        }
	    }, {
	        key: "getContainerName",
	        value: function getContainerName() {
	            return this._containerName;
	        }
	    }]);
	
	    return AbstractAdapter;
	})();
	
	exports["default"] = AbstractAdapter;
	module.exports = exports["default"];

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var Util = {
	    jsonTo: function jsonTo(json) {
	        return JSON.parse(json);
	    },
	    toJson: function toJson(value) {
	        return JSON.stringify(value);
	    }
	};
	
	exports["default"] = Util;
	module.exports = exports["default"];

/***/ }
/******/ ]);
//# sourceMappingURL=localStorage.js.map