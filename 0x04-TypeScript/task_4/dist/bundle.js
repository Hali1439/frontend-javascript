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

/***/ "./js/main.ts":
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
/***/ (() => {

eval("{\n/// <reference path=\"./subjects/Teacher.ts\" />\n/// <reference path=\"./subjects/Subject.ts\" />\n/// <reference path=\"./subjects/Cpp.ts\" />\n/// <reference path=\"./subjects/Java.ts\" />\n/// <reference path=\"./subjects/React.ts\" />\nvar cpp = new Subjects.Cpp();\nvar java = new Subjects.Java();\nvar react = new Subjects.React();\nvar cTeacher = {\n    firstName: 'Guillaume',\n    lastName: 'Salva',\n    experienceTeachingC: 10,\n};\nconsole.log('C++');\ncpp.setTeacher(cTeacher);\nconsole.log(cpp.getRequirements());\nconsole.log(cpp.getAvailableTeacher());\nconsole.log('Java');\njava.setTeacher(cTeacher);\nconsole.log(java.getRequirements());\nconsole.log(java.getAvailableTeacher());\nconsole.log('React');\nreact.setTeacher(cTeacher);\nconsole.log(react.getRequirements());\nconsole.log(react.getAvailableTeacher());\n\n\n//# sourceURL=webpack://task_4/./js/main.ts?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/main.ts"]();
/******/ 	
/******/ })()
;
