"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./constants/theme.ts":
/*!****************************!*\
  !*** ./constants/theme.ts ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"theme\": function() { return /* binding */ theme; }\n/* harmony export */ });\nvar pallete = {\n    white: \"#FFFFFF\",\n    whiteTint: \"#FFFFFE\",\n    black: \"#222222\",\n    blackLight: \"#4F4F4F\",\n    grey: {\n        100: \"#898989\",\n        200: \"#D9D9D9\",\n        300: \"#F4F4F4\",\n        400: \"#828282\"\n    },\n    orange: {\n        100: \"#f4f4f6\",\n        200: \"#dddddd\",\n        300: \"#313638\",\n        400: \"#aaaaaa\"\n    }\n};\nvar theme = {\n    colors: {\n        primary: pallete.orange[400],\n        mainBackground: pallete.whiteTint,\n        headingPrimary: pallete.black,\n        headingSecondary: pallete.orange[400],\n        textPrimary: pallete.grey[100],\n        textSecondary: pallete.grey[400],\n        footerBackground: pallete.orange[100],\n        gradientBackground: pallete.orange[400],\n        gradientBackgroundSecondary: pallete.orange[100]\n    },\n    navHeight: \"11.5rem\"\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25zdGFudHMvdGhlbWUudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLElBQU1BLE9BQU8sR0FBRztJQUNmQyxLQUFLLEVBQUUsU0FBUztJQUNoQkMsU0FBUyxFQUFFLFNBQVM7SUFDcEJDLEtBQUssRUFBRSxTQUFTO0lBQ2hCQyxVQUFVLEVBQUUsU0FBUztJQUNyQkMsSUFBSSxFQUFFO0FBQ0wsV0FBRyxFQUFFLFNBQVM7QUFDZCxXQUFHLEVBQUUsU0FBUztBQUNkLFdBQUcsRUFBRSxTQUFTO0FBQ2QsV0FBRyxFQUFFLFNBQVM7S0FDZDtJQUNEQyxNQUFNLEVBQUU7QUFDUCxXQUFHLEVBQUUsU0FBUztBQUNkLFdBQUcsRUFBRSxTQUFTO0FBQ2QsV0FBRyxFQUFFLFNBQVM7QUFDZCxXQUFHLEVBQUUsU0FBUztLQUNkO0NBQ0Q7QUFpQk0sSUFBTUMsS0FBSyxHQUFjO0lBQy9CQyxNQUFNLEVBQUU7UUFDUEMsT0FBTyxFQUFFVCxPQUFPLENBQUNNLE1BQU0sQ0FBQyxHQUFHLENBQUM7UUFDNUJJLGNBQWMsRUFBRVYsT0FBTyxDQUFDRSxTQUFTO1FBQ2pDUyxjQUFjLEVBQUVYLE9BQU8sQ0FBQ0csS0FBSztRQUM3QlMsZ0JBQWdCLEVBQUVaLE9BQU8sQ0FBQ00sTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUNyQ08sV0FBVyxFQUFFYixPQUFPLENBQUNLLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDOUJTLGFBQWEsRUFBRWQsT0FBTyxDQUFDSyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ2hDVSxnQkFBZ0IsRUFBRWYsT0FBTyxDQUFDTSxNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ3JDVSxrQkFBa0IsRUFBRWhCLE9BQU8sQ0FBQ00sTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUN2Q1csMkJBQTJCLEVBQUVqQixPQUFPLENBQUNNLE1BQU0sQ0FBQyxHQUFHLENBQUM7S0FDaEQ7SUFDRFksU0FBUyxFQUFFLFNBQVM7Q0FDcEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb25zdGFudHMvdGhlbWUudHM/ODk5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwYWxsZXRlID0ge1xuXHR3aGl0ZTogXCIjRkZGRkZGXCIsXG5cdHdoaXRlVGludDogXCIjRkZGRkZFXCIsXG5cdGJsYWNrOiBcIiMyMjIyMjJcIixcblx0YmxhY2tMaWdodDogXCIjNEY0RjRGXCIsXG5cdGdyZXk6IHtcblx0XHQxMDA6IFwiIzg5ODk4OVwiLFxuXHRcdDIwMDogXCIjRDlEOUQ5XCIsXG5cdFx0MzAwOiBcIiNGNEY0RjRcIixcblx0XHQ0MDA6IFwiIzgyODI4MlwiLFxuXHR9LFxuXHRvcmFuZ2U6IHtcblx0XHQxMDA6IFwiI2Y0ZjRmNlwiLFxuXHRcdDIwMDogXCIjZGRkZGRkXCIsXG5cdFx0MzAwOiBcIiMzMTM2MzhcIixcblx0XHQ0MDA6IFwiI2FhYWFhYVwiLFxuXHR9LFxufTtcblxuZXhwb3J0IHR5cGUgVGhlbWVUeXBlID0ge1xuXHRjb2xvcnM6IHtcblx0XHRwcmltYXJ5OiBzdHJpbmc7XG5cdFx0bWFpbkJhY2tncm91bmQ6IHN0cmluZztcblx0XHRoZWFkaW5nUHJpbWFyeTogc3RyaW5nO1xuXHRcdGhlYWRpbmdTZWNvbmRhcnk6IHN0cmluZztcblx0XHR0ZXh0UHJpbWFyeTogc3RyaW5nO1xuXHRcdHRleHRTZWNvbmRhcnk6IHN0cmluZztcblx0XHRmb290ZXJCYWNrZ3JvdW5kOiBzdHJpbmc7XG5cdFx0Z3JhZGllbnRCYWNrZ3JvdW5kOiBzdHJpbmc7XG5cdFx0Z3JhZGllbnRCYWNrZ3JvdW5kU2Vjb25kYXJ5OiBzdHJpbmc7XG5cdH07XG5cdG5hdkhlaWdodDogc3RyaW5nO1xufTtcblxuZXhwb3J0IGNvbnN0IHRoZW1lOiBUaGVtZVR5cGUgPSB7XG5cdGNvbG9yczoge1xuXHRcdHByaW1hcnk6IHBhbGxldGUub3JhbmdlWzQwMF0sXG5cdFx0bWFpbkJhY2tncm91bmQ6IHBhbGxldGUud2hpdGVUaW50LFxuXHRcdGhlYWRpbmdQcmltYXJ5OiBwYWxsZXRlLmJsYWNrLFxuXHRcdGhlYWRpbmdTZWNvbmRhcnk6IHBhbGxldGUub3JhbmdlWzQwMF0sXG5cdFx0dGV4dFByaW1hcnk6IHBhbGxldGUuZ3JleVsxMDBdLFxuXHRcdHRleHRTZWNvbmRhcnk6IHBhbGxldGUuZ3JleVs0MDBdLFxuXHRcdGZvb3RlckJhY2tncm91bmQ6IHBhbGxldGUub3JhbmdlWzEwMF0sXG5cdFx0Z3JhZGllbnRCYWNrZ3JvdW5kOiBwYWxsZXRlLm9yYW5nZVs0MDBdLFxuXHRcdGdyYWRpZW50QmFja2dyb3VuZFNlY29uZGFyeTogcGFsbGV0ZS5vcmFuZ2VbMTAwXSxcblx0fSxcblx0bmF2SGVpZ2h0OiBcIjExLjVyZW1cIixcbn07XG4iXSwibmFtZXMiOlsicGFsbGV0ZSIsIndoaXRlIiwid2hpdGVUaW50IiwiYmxhY2siLCJibGFja0xpZ2h0IiwiZ3JleSIsIm9yYW5nZSIsInRoZW1lIiwiY29sb3JzIiwicHJpbWFyeSIsIm1haW5CYWNrZ3JvdW5kIiwiaGVhZGluZ1ByaW1hcnkiLCJoZWFkaW5nU2Vjb25kYXJ5IiwidGV4dFByaW1hcnkiLCJ0ZXh0U2Vjb25kYXJ5IiwiZm9vdGVyQmFja2dyb3VuZCIsImdyYWRpZW50QmFja2dyb3VuZCIsImdyYWRpZW50QmFja2dyb3VuZFNlY29uZGFyeSIsIm5hdkhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./constants/theme.ts\n"));

/***/ })

});