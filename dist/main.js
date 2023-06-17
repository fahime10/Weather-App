/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_weather_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/weather.js */ \"./src/modules/weather.js\");\n/* harmony import */ var _modules_gyphy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/gyphy.js */ \"./src/modules/gyphy.js\");\n/* harmony import */ var _modules_validate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/validate.js */ \"./src/modules/validate.js\");\n\r\n\r\n\r\n\r\nlet country = document.querySelector(\"#country\");\r\nlet city = document.querySelector(\"#city\");\r\nlet temperature = document.querySelector(\"#temperature\");\r\n\r\ndocument.querySelector(\"button\").addEventListener(\"click\", (event) => {\r\n    event.preventDefault();\r\n\r\n    let city = document.querySelector(\"#location\").value;\r\n\r\n    let validatedCity = (0,_modules_validate_js__WEBPACK_IMPORTED_MODULE_2__.validateCity)(city);\r\n\r\n    if (validatedCity != \"\") {\r\n\r\n        const data = (0,_modules_weather_js__WEBPACK_IMPORTED_MODULE_0__.useWeatherAPI)(validatedCity);\r\n\r\n        console.log(data);\r\n\r\n        applyCurrentInfo(data);\r\n\r\n    } \r\n\r\n\r\n});\r\n\r\nasync function applyCurrentInfo(data) {\r\n    country.textContent = await data.then((response) => { return response.location.country });\r\n    city.textContent = await data.then((response) => { return response.location.name });\r\n    temperature.textContent = await data.then((response) => { return response.current.temp_c });\r\n}\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/modules/gyphy.js":
/*!******************************!*\
  !*** ./src/modules/gyphy.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   findGif: () => (/* binding */ findGif)\n/* harmony export */ });\nfunction findGif(value) {\r\n    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=XT9XjvLjB6JcU8vfL4Egl462Ab6m1wzn&s=${value}`, \r\n        {mode: 'cors'})\r\n    .then(function(response) {\r\n        return response.json();\r\n    })\r\n    .then(function(response) {\r\n        img.src = response.data.images.original.url;\r\n    })\r\n    .catch(function(error) {\r\n        img.src = 'assets/error-img.png';\r\n        console.log(error);\r\n    }); \r\n}\n\n//# sourceURL=webpack://weather-app/./src/modules/gyphy.js?");

/***/ }),

/***/ "./src/modules/validate.js":
/*!*********************************!*\
  !*** ./src/modules/validate.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   validateCity: () => (/* binding */ validateCity)\n/* harmony export */ });\nfunction validateCity(city) {\r\n    if (city.length > 0) {\r\n        return city.toLowerCase();\r\n    } else {\r\n        return \"\";\r\n    }\r\n}\n\n//# sourceURL=webpack://weather-app/./src/modules/validate.js?");

/***/ }),

/***/ "./src/modules/weather.js":
/*!********************************!*\
  !*** ./src/modules/weather.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useWeatherAPI: () => (/* binding */ useWeatherAPI)\n/* harmony export */ });\nasync function useWeatherAPI(city) {\r\n    try {\r\n        const response = \r\n            await fetch(`https://api.weatherapi.com/v1/current.json?key=bb29db4074ae448e94c125809231506&q=${city}`, \r\n                {mode: \"cors\"});\r\n\r\n        return await response.json();\r\n\r\n    } catch(error) {\r\n        console.log(\"Sorry, something went wrong, try again later whenever the weather is right\");\r\n    }\r\n}\n\n//# sourceURL=webpack://weather-app/./src/modules/weather.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;