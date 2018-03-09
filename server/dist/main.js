/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: Plugin/Preset files are not allowed to export objects, only functions.\\n    at createDescriptor (/projects/wac/react_web/server/node_modules/@babel/core/lib/config/config-descriptors.js:158:11)\\n    at /projects/wac/react_web/server/node_modules/@babel/core/lib/config/config-descriptors.js:101:12\\n    at Array.map (native)\\n    at createDescriptors (/projects/wac/react_web/server/node_modules/@babel/core/lib/config/config-descriptors.js:100:27)\\n    at createPresetDescriptors (/projects/wac/react_web/server/node_modules/@babel/core/lib/config/config-descriptors.js:92:10)\\n    at /projects/wac/react_web/server/node_modules/@babel/core/lib/config/config-descriptors.js:78:14\\n    at cachedFunction (/projects/wac/react_web/server/node_modules/@babel/core/lib/config/caching.js:40:17)\\n    at presets (/projects/wac/react_web/server/node_modules/@babel/core/lib/config/config-descriptors.js:23:68)\\n    at mergeChainOpts (/projects/wac/react_web/server/node_modules/@babel/core/lib/config/config-chain.js:294:68)\\n    at /projects/wac/react_web/server/node_modules/@babel/core/lib/config/config-chain.js:247:7\\n    at buildRootChain (/projects/wac/react_web/server/node_modules/@babel/core/lib/config/config-chain.js:64:27)\\n    at loadConfig (/projects/wac/react_web/server/node_modules/@babel/core/lib/config/index.js:50:53)\\n    at transformSync (/projects/wac/react_web/server/node_modules/@babel/core/lib/transform-sync.js:13:36)\\n    at Object.transform (/projects/wac/react_web/server/node_modules/@babel/core/lib/transform.js:20:65)\\n    at transpile (/projects/wac/react_web/server/node_modules/babel-loader/lib/index.js:55:20)\\n    at Object.module.exports (/projects/wac/react_web/server/node_modules/babel-loader/lib/index.js:179:20)\");\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });