"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! FiraSans-Regular.ttf */ "./src/FiraSans-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./mainImg.jpg */ "./src/mainImg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  border: 0;
  padding: 0;
  font-family: "FiraSans";
}

/* body {
  background-color: black;
} */

@font-face {
  font-family: "FiraSans";
  src: local("Fira Sans Regular"), url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  font-weight: bold;
}
header {
  height: 20vh;
  background-color: black;
  color: brown;
  font-weight: 900;
  border: 0.2em solid rgb(130, 87, 7);
  border-radius: 15px 15px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  min-height: 100px;
}

h1 {
  font-size: 1.2rem;
}

.nav-btns {
  display: flex;
  gap: 10%;
  justify-content: center;
  /* border: 1px solid red; */
  width: 100%;
}

button {
  cursor: pointer;
  font-size: 0.8rem;
  padding: 2px 5px 2px 5px;
  border-radius: 5px 5px 0 0;
  border: 2px solid rgb(130, 87, 7);
}

button:hover {
  background-color: rgb(130, 87, 7, 0.9);
}

#content {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 20px;
}

.info-content {
  background-color: rgb(255, 255, 255, 0.8);
  width: 90%;
  height: fit-content;
  border-radius: 10px;
  border: 10px solid rgb(130, 87, 7, 0.5);
  padding: 20px;
  font-size: medium;
  font-family: Arial, Helvetica, sans-serif;
}

.menu-height {
  min-height: 950px;
}
.about-height {
  min-height: 400px;
}

.menu {
  text-align: center;
}

.menu li {
  list-style-type: none;
}

form {
  /* border: 1px red solid; */
  display: flex;
  flex-direction: column;

  padding-left: 20%;
  padding-right: 20%;
  align-items: center;
  /* text-align: center; */
}

form > p {
  width: 50%;
  /* border: 1px solid red; */
  display: flex;
  flex-wrap: wrap;
}

input {
  flex: 2;
  padding: 3px;
  border-radius: 3px;
  padding-top: 2px;
}

label {
  min-width: 100px;
  text-align: left;
}

.contact {
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  text-align: center;
}

.contact-height {
  min-height: 600px;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,uBAAuB;AACzB;;AAEA;;GAEG;;AAEH;EACE,uBAAuB;EACvB,wEAA4D;EAC5D,iBAAiB;AACnB;AACA;EACE,YAAY;EACZ,uBAAuB;EACvB,YAAY;EACZ,gBAAgB;EAChB,mCAAmC;EACnC,4BAA4B;EAC5B,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,6BAA6B;EAC7B,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,QAAQ;EACR,uBAAuB;EACvB,2BAA2B;EAC3B,WAAW;AACb;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,wBAAwB;EACxB,0BAA0B;EAC1B,iCAAiC;AACnC;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,iFAA8D;EAC9D,8BAA8B;EAC9B,2BAA2B;EAC3B,yBAAyB;EACzB,sBAAsB;EACtB,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,uBAAuB;EACvB,iBAAiB;AACnB;;AAEA;EACE,yCAAyC;EACzC,UAAU;EACV,mBAAmB;EACnB,mBAAmB;EACnB,uCAAuC;EACvC,aAAa;EACb,iBAAiB;EACjB,yCAAyC;AAC3C;;AAEA;EACE,iBAAiB;AACnB;AACA;EACE,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,2BAA2B;EAC3B,aAAa;EACb,sBAAsB;;EAEtB,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;EACnB,wBAAwB;AAC1B;;AAEA;EACE,UAAU;EACV,2BAA2B;EAC3B,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,OAAO;EACP,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE;;wBAEsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;AACnB","sourcesContent":["* {\n  border: 0;\n  padding: 0;\n  font-family: \"FiraSans\";\n}\n\n/* body {\n  background-color: black;\n} */\n\n@font-face {\n  font-family: \"FiraSans\";\n  src: local(\"Fira Sans Regular\"), url(\"FiraSans-Regular.ttf\");\n  font-weight: bold;\n}\nheader {\n  height: 20vh;\n  background-color: black;\n  color: brown;\n  font-weight: 900;\n  border: 0.2em solid rgb(130, 87, 7);\n  border-radius: 15px 15px 0 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  min-height: 100px;\n}\n\nh1 {\n  font-size: 1.2rem;\n}\n\n.nav-btns {\n  display: flex;\n  gap: 10%;\n  justify-content: center;\n  /* border: 1px solid red; */\n  width: 100%;\n}\n\nbutton {\n  cursor: pointer;\n  font-size: 0.8rem;\n  padding: 2px 5px 2px 5px;\n  border-radius: 5px 5px 0 0;\n  border: 2px solid rgb(130, 87, 7);\n}\n\nbutton:hover {\n  background-color: rgb(130, 87, 7, 0.9);\n}\n\n#content {\n  background: url(\"./mainImg.jpg\") no-repeat center center fixed;\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;\n  height: 80vh;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  padding-top: 20px;\n}\n\n.info-content {\n  background-color: rgb(255, 255, 255, 0.8);\n  width: 90%;\n  height: fit-content;\n  border-radius: 10px;\n  border: 10px solid rgb(130, 87, 7, 0.5);\n  padding: 20px;\n  font-size: medium;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.menu-height {\n  min-height: 950px;\n}\n.about-height {\n  min-height: 400px;\n}\n\n.menu {\n  text-align: center;\n}\n\n.menu li {\n  list-style-type: none;\n}\n\nform {\n  /* border: 1px red solid; */\n  display: flex;\n  flex-direction: column;\n\n  padding-left: 20%;\n  padding-right: 20%;\n  align-items: center;\n  /* text-align: center; */\n}\n\nform > p {\n  width: 50%;\n  /* border: 1px solid red; */\n  display: flex;\n  flex-wrap: wrap;\n}\n\ninput {\n  flex: 2;\n  padding: 3px;\n  border-radius: 3px;\n  padding-top: 2px;\n}\n\nlabel {\n  min-width: 100px;\n  text-align: left;\n}\n\n.contact {\n  /* display: flex;\n  flex-direction: column;\n  align-items: center; */\n  text-align: center;\n}\n\n.contact-height {\n  min-height: 600px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/aboutPage.js":
/*!**************************!*\
  !*** ./src/aboutPage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ populateAboutPage)
/* harmony export */ });


function populateAboutPage() {
  const content = document.querySelector("#content");
  const div = document.createElement("div");
  content.classList.add("about-height");
  div.classList.add("info-content");
  div.classList.add("about");

  div.textContent = ` Welcome to our French brasserie, where tradition meets modernity in the
  heart of the city. Enjoy classic dishes like coq au vin and
  bouillabaisse crafted with local ingredients. Our cozy ambiance and open
  kitchen create a charming atmosphere. Pair your meal with selections
  from our diverse wine list or enjoy handcrafted cocktails. Whether
  brunch with friends or a romantic dinner, our attentive staff ensure a
  memorable experience. Discover the charm of French dining with us.`;

  content.appendChild(div);
}


/***/ }),

/***/ "./src/contactPage.js":
/*!****************************!*\
  !*** ./src/contactPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ populateContactPage)
/* harmony export */ });


function populateContactPage() {
  const content = document.querySelector("#content");
  const div = document.createElement("div");
  const button = document.createElement("button");
  const h3 = document.createElement("h3");
  const form = document.createElement("form");
  content.classList.add("contact-height");
  div.classList.add("info-content");
  div.classList.add("contact");
  content.appendChild(div);

  h3.textContent = "Contact";
  div.appendChild(h3);

  const contactDetails = [
    "Tel: +33 6 12 34 56 78",
    "jp.baguette@example.fr",
    "Chez Marcel's Moulin de Baguette 123 Croissant Avenue Paris, France 75001",
  ];

  contactDetails.forEach((element) => {
    const p = document.createElement("p");
    p.textContent = element;
    div.appendChild(p);
  });

  const formData = [
    ["firstName", "First Name:", "text"],
    ["lastName", "Last Name:", "text"],
    ["email", "Email:", "email", "required"],
    ["inputMessage", "Message:", "text", "required"],
  ];

  formData.forEach((element) => {
    const label = document.createElement("label");
    const input = document.createElement("input");
    const p = document.createElement("p");
    label.htmlFor = element[0];
    label.textContent = element[1];
    input.id = element[0];
    input.setAttribute("type", element[2]);
    typeof element[3] !== "undefined"
      ? (input.required = true)
      : (input.required = false);
    p.appendChild(label);
    p.appendChild(input);
    form.appendChild(p);
  });

  button.textContent = "Submit";
  form.appendChild(button);
  div.appendChild(form);
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _aboutPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aboutPage.js */ "./src/aboutPage.js");
/* harmony import */ var _menuPage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuPage.js */ "./src/menuPage.js");
/* harmony import */ var _contactPage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contactPage.js */ "./src/contactPage.js");





const functions = [_aboutPage_js__WEBPACK_IMPORTED_MODULE_1__["default"], _menuPage_js__WEBPACK_IMPORTED_MODULE_2__["default"], _contactPage_js__WEBPACK_IMPORTED_MODULE_3__["default"]];

const btns = document.querySelectorAll(".btn");

(0,_aboutPage_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

btns.forEach((element) => {
  element.addEventListener("click", () => {
    deleteContent();
    // Dynamically call the function based on button text content
    console.log(`populate${element.textContent}Page`);
    functions[`populate${element.textContent}Page`]();
  });
});

function deleteContent() {
  const content = document.querySelector("#content");
  content.innerHTML = "";
}

// if (element.textContent === "About") {
//     populateAboutPage();
//   } else if (element.textContent === "Menu") {
//     populateMenuPage();
//   } else {
//     populateContactPage();
//     console.log(element);
//   }


/***/ }),

/***/ "./src/menuPage.js":
/*!*************************!*\
  !*** ./src/menuPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ populateMenuPage)
/* harmony export */ });


function populateMenuPage() {
  const arrayOfStarters = [
    `French Onion Soup - A classic blend of caramelized onions, beef broth, and melted Gruyère cheese.`,
    `Escargots à la Bourguignonne - Burgundy snails cooked in garlic herb butter, served with crusty bread.`,
    `Pâté de Campagne - Country-style pâté made with pork, chicken liver,and herbs, served with cornichons and mustard.`,
    `Salade Niçoise - A refreshing salad featuring mixed greens, tuna,
    hard-boiled eggs, olives, and anchovies, drizzled with a lemon
    vinaigrette.`,
  ];

  const arrayOfDesserts = [
    `Crème Brûlée - Creamy vanilla custard topped with a caramelized
  sugar crust.`,
    `Tarte Tatin - Upside-down apple tart with caramelized sugar and
  flaky pastry, served with vanilla ice cream.`,
    `Profiteroles au Chocolat - Light pastry puffs filled with vanilla
    ice cream and drizzled with warm chocolate sauce.`,
    `Mousse au Chocolat - Silky chocolate mousse made with rich dark
    chocolate and whipped cream, garnished with shaved chocolate.`,
  ];

  const arrayOfMain = [
    `Coq au Vin - Tender chicken braised in red wine with mushrooms,
  pearl onions, and bacon, served with mashed potatoes.`,
    `Steak Frites - Grilled sirloin steak served with golden fries and a
  side of Béarnaise sauce.`,
    `Ratatouille Provençale - A hearty vegetable stew made with eggplant,
  zucchini, bell peppers, tomatoes, and herbs, served with crusty
  bread.`,
    `Bouillabaisse - A traditional Provençal fish stew featuring a medley
  of seafood simmered in a flavorful broth, served with rouille and
  garlic croutons.`,
  ];

  const content = document.querySelector("#content");
  const div = document.createElement("div");
  const h3 = document.createElement("h3");
  const menuItems = [arrayOfStarters, arrayOfMain, arrayOfDesserts];
  const h4Headings = ["Starters", "Mains", "Desserts"];

  content.classList.add("menu-height");
  div.classList.add("info-content");
  div.classList.add("menu");
  content.appendChild(div);
  h3.textContent = "Menu";
  div.appendChild(h3);

  for (let i = 0; i < menuItems.length; i++) {
    const ul = document.createElement("ul");
    const h4 = document.createElement("h4");
    h4.textContent = h4Headings[i];
    div.appendChild(h4);
    for (let j = 0; j < menuItems[i].length; j++) {
      const li = document.createElement("li");
      li.textContent = menuItems[i][j];
      ul.appendChild(li);
    }
    div.appendChild(ul);
  }
}


/***/ }),

/***/ "./src/FiraSans-Regular.ttf":
/*!**********************************!*\
  !*** ./src/FiraSans-Regular.ttf ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f4eb295ecc2fb842d61c.ttf";

/***/ }),

/***/ "./src/mainImg.jpg":
/*!*************************!*\
  !*** ./src/mainImg.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7d05b745ff67b89cbba1.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixzQkFBc0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IseUJBQXlCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fib3V0UGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdFBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51UGFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiRmlyYVNhbnMtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL21haW5JbWcuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1mYW1pbHk6IFwiRmlyYVNhbnNcIjtcbn1cblxuLyogYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufSAqL1xuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiRmlyYVNhbnNcIjtcbiAgc3JjOiBsb2NhbChcIkZpcmEgU2FucyBSZWd1bGFyXCIpLCB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuaGVhZGVyIHtcbiAgaGVpZ2h0OiAyMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IGJyb3duO1xuICBmb250LXdlaWdodDogOTAwO1xuICBib3JkZXI6IDAuMmVtIHNvbGlkIHJnYigxMzAsIDg3LCA3KTtcbiAgYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDAgMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4ubmF2LWJ0bnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cbiAgd2lkdGg6IDEwMCU7XG59XG5cbmJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIHBhZGRpbmc6IDJweCA1cHggMnB4IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxMzAsIDg3LCA3KTtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzMCwgODcsIDcsIDAuOSk7XG59XG5cbiNjb250ZW50IHtcbiAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgaGVpZ2h0OiA4MHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG4uaW5mby1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogMTBweCBzb2xpZCByZ2IoMTMwLCA4NywgNywgMC41KTtcbiAgcGFkZGluZzogMjBweDtcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG4ubWVudS1oZWlnaHQge1xuICBtaW4taGVpZ2h0OiA5NTBweDtcbn1cbi5hYm91dC1oZWlnaHQge1xuICBtaW4taGVpZ2h0OiA0MDBweDtcbn1cblxuLm1lbnUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tZW51IGxpIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG5mb3JtIHtcbiAgLyogYm9yZGVyOiAxcHggcmVkIHNvbGlkOyAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gIHBhZGRpbmctbGVmdDogMjAlO1xuICBwYWRkaW5nLXJpZ2h0OiAyMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cbn1cblxuZm9ybSA+IHAge1xuICB3aWR0aDogNTAlO1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuaW5wdXQge1xuICBmbGV4OiAyO1xuICBwYWRkaW5nOiAzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcGFkZGluZy10b3A6IDJweDtcbn1cblxubGFiZWwge1xuICBtaW4td2lkdGg6IDEwMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uY29udGFjdCB7XG4gIC8qIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbnRhY3QtaGVpZ2h0IHtcbiAgbWluLWhlaWdodDogNjAwcHg7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHVCQUF1QjtBQUN6Qjs7QUFFQTs7R0FFRzs7QUFFSDtFQUNFLHVCQUF1QjtFQUN2Qix3RUFBNEQ7RUFDNUQsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUNBQW1DO0VBQ25DLDRCQUE0QjtFQUM1QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLFFBQVE7RUFDUix1QkFBdUI7RUFDdkIsMkJBQTJCO0VBQzNCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsd0JBQXdCO0VBQ3hCLDBCQUEwQjtFQUMxQixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxpRkFBOEQ7RUFDOUQsOEJBQThCO0VBQzlCLDJCQUEyQjtFQUMzQix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx5Q0FBeUM7RUFDekMsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsdUNBQXVDO0VBQ3ZDLGFBQWE7RUFDYixpQkFBaUI7RUFDakIseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLHNCQUFzQjs7RUFFdEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLE9BQU87RUFDUCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRTs7d0JBRXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTogXFxcIkZpcmFTYW5zXFxcIjtcXG59XFxuXFxuLyogYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59ICovXFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkZpcmFTYW5zXFxcIjtcXG4gIHNyYzogbG9jYWwoXFxcIkZpcmEgU2FucyBSZWd1bGFyXFxcIiksIHVybChcXFwiRmlyYVNhbnMtUmVndWxhci50dGZcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5oZWFkZXIge1xcbiAgaGVpZ2h0OiAyMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogYnJvd247XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgYm9yZGVyOiAwLjJlbSBzb2xpZCByZ2IoMTMwLCA4NywgNyk7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMCAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBtaW4taGVpZ2h0OiAxMDBweDtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5uYXYtYnRucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBwYWRkaW5nOiAycHggNXB4IDJweCA1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxMzAsIDg3LCA3KTtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzAsIDg3LCA3LCAwLjkpO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4vbWFpbkltZy5qcGdcXFwiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDtcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgaGVpZ2h0OiA4MHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBwYWRkaW5nLXRvcDogMjBweDtcXG59XFxuXFxuLmluZm8tY29udGVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gIHdpZHRoOiA5MCU7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlcjogMTBweCBzb2xpZCByZ2IoMTMwLCA4NywgNywgMC41KTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBmb250LXNpemU6IG1lZGl1bTtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4ubWVudS1oZWlnaHQge1xcbiAgbWluLWhlaWdodDogOTUwcHg7XFxufVxcbi5hYm91dC1oZWlnaHQge1xcbiAgbWluLWhlaWdodDogNDAwcHg7XFxufVxcblxcbi5tZW51IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1lbnUgbGkge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG5mb3JtIHtcXG4gIC8qIGJvcmRlcjogMXB4IHJlZCBzb2xpZDsgKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgcGFkZGluZy1sZWZ0OiAyMCU7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMCU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xcbn1cXG5cXG5mb3JtID4gcCB7XFxuICB3aWR0aDogNTAlO1xcbiAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuaW5wdXQge1xcbiAgZmxleDogMjtcXG4gIHBhZGRpbmc6IDNweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHBhZGRpbmctdG9wOiAycHg7XFxufVxcblxcbmxhYmVsIHtcXG4gIG1pbi13aWR0aDogMTAwcHg7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4uY29udGFjdCB7XFxuICAvKiBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jb250YWN0LWhlaWdodCB7XFxuICBtaW4taGVpZ2h0OiA2MDBweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgeyBwb3B1bGF0ZUFib3V0UGFnZSBhcyBkZWZhdWx0IH07XG5cbmZ1bmN0aW9uIHBvcHVsYXRlQWJvdXRQYWdlKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJhYm91dC1oZWlnaHRcIik7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKFwiaW5mby1jb250ZW50XCIpO1xuICBkaXYuY2xhc3NMaXN0LmFkZChcImFib3V0XCIpO1xuXG4gIGRpdi50ZXh0Q29udGVudCA9IGAgV2VsY29tZSB0byBvdXIgRnJlbmNoIGJyYXNzZXJpZSwgd2hlcmUgdHJhZGl0aW9uIG1lZXRzIG1vZGVybml0eSBpbiB0aGVcbiAgaGVhcnQgb2YgdGhlIGNpdHkuIEVuam95IGNsYXNzaWMgZGlzaGVzIGxpa2UgY29xIGF1IHZpbiBhbmRcbiAgYm91aWxsYWJhaXNzZSBjcmFmdGVkIHdpdGggbG9jYWwgaW5ncmVkaWVudHMuIE91ciBjb3p5IGFtYmlhbmNlIGFuZCBvcGVuXG4gIGtpdGNoZW4gY3JlYXRlIGEgY2hhcm1pbmcgYXRtb3NwaGVyZS4gUGFpciB5b3VyIG1lYWwgd2l0aCBzZWxlY3Rpb25zXG4gIGZyb20gb3VyIGRpdmVyc2Ugd2luZSBsaXN0IG9yIGVuam95IGhhbmRjcmFmdGVkIGNvY2t0YWlscy4gV2hldGhlclxuICBicnVuY2ggd2l0aCBmcmllbmRzIG9yIGEgcm9tYW50aWMgZGlubmVyLCBvdXIgYXR0ZW50aXZlIHN0YWZmIGVuc3VyZSBhXG4gIG1lbW9yYWJsZSBleHBlcmllbmNlLiBEaXNjb3ZlciB0aGUgY2hhcm0gb2YgRnJlbmNoIGRpbmluZyB3aXRoIHVzLmA7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChkaXYpO1xufVxuIiwiZXhwb3J0IHsgcG9wdWxhdGVDb250YWN0UGFnZSBhcyBkZWZhdWx0IH07XG5cbmZ1bmN0aW9uIHBvcHVsYXRlQ29udGFjdFBhZ2UoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtaGVpZ2h0XCIpO1xuICBkaXYuY2xhc3NMaXN0LmFkZChcImluZm8tY29udGVudFwiKTtcbiAgZGl2LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0XCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGRpdik7XG5cbiAgaDMudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcbiAgZGl2LmFwcGVuZENoaWxkKGgzKTtcblxuICBjb25zdCBjb250YWN0RGV0YWlscyA9IFtcbiAgICBcIlRlbDogKzMzIDYgMTIgMzQgNTYgNzhcIixcbiAgICBcImpwLmJhZ3VldHRlQGV4YW1wbGUuZnJcIixcbiAgICBcIkNoZXogTWFyY2VsJ3MgTW91bGluIGRlIEJhZ3VldHRlIDEyMyBDcm9pc3NhbnQgQXZlbnVlIFBhcmlzLCBGcmFuY2UgNzUwMDFcIixcbiAgXTtcblxuICBjb250YWN0RGV0YWlscy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHAudGV4dENvbnRlbnQgPSBlbGVtZW50O1xuICAgIGRpdi5hcHBlbmRDaGlsZChwKTtcbiAgfSk7XG5cbiAgY29uc3QgZm9ybURhdGEgPSBbXG4gICAgW1wiZmlyc3ROYW1lXCIsIFwiRmlyc3QgTmFtZTpcIiwgXCJ0ZXh0XCJdLFxuICAgIFtcImxhc3ROYW1lXCIsIFwiTGFzdCBOYW1lOlwiLCBcInRleHRcIl0sXG4gICAgW1wiZW1haWxcIiwgXCJFbWFpbDpcIiwgXCJlbWFpbFwiLCBcInJlcXVpcmVkXCJdLFxuICAgIFtcImlucHV0TWVzc2FnZVwiLCBcIk1lc3NhZ2U6XCIsIFwidGV4dFwiLCBcInJlcXVpcmVkXCJdLFxuICBdO1xuXG4gIGZvcm1EYXRhLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbGFiZWwuaHRtbEZvciA9IGVsZW1lbnRbMF07XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBlbGVtZW50WzFdO1xuICAgIGlucHV0LmlkID0gZWxlbWVudFswXTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIGVsZW1lbnRbMl0pO1xuICAgIHR5cGVvZiBlbGVtZW50WzNdICE9PSBcInVuZGVmaW5lZFwiXG4gICAgICA/IChpbnB1dC5yZXF1aXJlZCA9IHRydWUpXG4gICAgICA6IChpbnB1dC5yZXF1aXJlZCA9IGZhbHNlKTtcbiAgICBwLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBwLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHApO1xuICB9KTtcblxuICBidXR0b24udGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xuICBmb3JtLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gIGRpdi5hcHBlbmRDaGlsZChmb3JtKTtcbn1cbiIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgcG9wdWxhdGVBYm91dFBhZ2UgZnJvbSBcIi4vYWJvdXRQYWdlLmpzXCI7XG5pbXBvcnQgcG9wdWxhdGVNZW51UGFnZSBmcm9tIFwiLi9tZW51UGFnZS5qc1wiO1xuaW1wb3J0IHBvcHVsYXRlQ29udGFjdFBhZ2UgZnJvbSBcIi4vY29udGFjdFBhZ2UuanNcIjtcblxuY29uc3QgZnVuY3Rpb25zID0gW3BvcHVsYXRlQWJvdXRQYWdlLCBwb3B1bGF0ZU1lbnVQYWdlLCBwb3B1bGF0ZUNvbnRhY3RQYWdlXTtcblxuY29uc3QgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnRuXCIpO1xuXG5wb3B1bGF0ZUFib3V0UGFnZSgpO1xuXG5idG5zLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGRlbGV0ZUNvbnRlbnQoKTtcbiAgICAvLyBEeW5hbWljYWxseSBjYWxsIHRoZSBmdW5jdGlvbiBiYXNlZCBvbiBidXR0b24gdGV4dCBjb250ZW50XG4gICAgY29uc29sZS5sb2coYHBvcHVsYXRlJHtlbGVtZW50LnRleHRDb250ZW50fVBhZ2VgKTtcbiAgICBmdW5jdGlvbnNbYHBvcHVsYXRlJHtlbGVtZW50LnRleHRDb250ZW50fVBhZ2VgXSgpO1xuICB9KTtcbn0pO1xuXG5mdW5jdGlvbiBkZWxldGVDb250ZW50KCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG59XG5cbi8vIGlmIChlbGVtZW50LnRleHRDb250ZW50ID09PSBcIkFib3V0XCIpIHtcbi8vICAgICBwb3B1bGF0ZUFib3V0UGFnZSgpO1xuLy8gICB9IGVsc2UgaWYgKGVsZW1lbnQudGV4dENvbnRlbnQgPT09IFwiTWVudVwiKSB7XG4vLyAgICAgcG9wdWxhdGVNZW51UGFnZSgpO1xuLy8gICB9IGVsc2Uge1xuLy8gICAgIHBvcHVsYXRlQ29udGFjdFBhZ2UoKTtcbi8vICAgICBjb25zb2xlLmxvZyhlbGVtZW50KTtcbi8vICAgfVxuIiwiZXhwb3J0IHsgcG9wdWxhdGVNZW51UGFnZSBhcyBkZWZhdWx0IH07XG5cbmZ1bmN0aW9uIHBvcHVsYXRlTWVudVBhZ2UoKSB7XG4gIGNvbnN0IGFycmF5T2ZTdGFydGVycyA9IFtcbiAgICBgRnJlbmNoIE9uaW9uIFNvdXAgLSBBIGNsYXNzaWMgYmxlbmQgb2YgY2FyYW1lbGl6ZWQgb25pb25zLCBiZWVmIGJyb3RoLCBhbmQgbWVsdGVkIEdydXnDqHJlIGNoZWVzZS5gLFxuICAgIGBFc2NhcmdvdHMgw6AgbGEgQm91cmd1aWdub25uZSAtIEJ1cmd1bmR5IHNuYWlscyBjb29rZWQgaW4gZ2FybGljIGhlcmIgYnV0dGVyLCBzZXJ2ZWQgd2l0aCBjcnVzdHkgYnJlYWQuYCxcbiAgICBgUMOidMOpIGRlIENhbXBhZ25lIC0gQ291bnRyeS1zdHlsZSBww6J0w6kgbWFkZSB3aXRoIHBvcmssIGNoaWNrZW4gbGl2ZXIsYW5kIGhlcmJzLCBzZXJ2ZWQgd2l0aCBjb3JuaWNob25zIGFuZCBtdXN0YXJkLmAsXG4gICAgYFNhbGFkZSBOacOnb2lzZSAtIEEgcmVmcmVzaGluZyBzYWxhZCBmZWF0dXJpbmcgbWl4ZWQgZ3JlZW5zLCB0dW5hLFxuICAgIGhhcmQtYm9pbGVkIGVnZ3MsIG9saXZlcywgYW5kIGFuY2hvdmllcywgZHJpenpsZWQgd2l0aCBhIGxlbW9uXG4gICAgdmluYWlncmV0dGUuYCxcbiAgXTtcblxuICBjb25zdCBhcnJheU9mRGVzc2VydHMgPSBbXG4gICAgYENyw6htZSBCcsO7bMOpZSAtIENyZWFteSB2YW5pbGxhIGN1c3RhcmQgdG9wcGVkIHdpdGggYSBjYXJhbWVsaXplZFxuICBzdWdhciBjcnVzdC5gLFxuICAgIGBUYXJ0ZSBUYXRpbiAtIFVwc2lkZS1kb3duIGFwcGxlIHRhcnQgd2l0aCBjYXJhbWVsaXplZCBzdWdhciBhbmRcbiAgZmxha3kgcGFzdHJ5LCBzZXJ2ZWQgd2l0aCB2YW5pbGxhIGljZSBjcmVhbS5gLFxuICAgIGBQcm9maXRlcm9sZXMgYXUgQ2hvY29sYXQgLSBMaWdodCBwYXN0cnkgcHVmZnMgZmlsbGVkIHdpdGggdmFuaWxsYVxuICAgIGljZSBjcmVhbSBhbmQgZHJpenpsZWQgd2l0aCB3YXJtIGNob2NvbGF0ZSBzYXVjZS5gLFxuICAgIGBNb3Vzc2UgYXUgQ2hvY29sYXQgLSBTaWxreSBjaG9jb2xhdGUgbW91c3NlIG1hZGUgd2l0aCByaWNoIGRhcmtcbiAgICBjaG9jb2xhdGUgYW5kIHdoaXBwZWQgY3JlYW0sIGdhcm5pc2hlZCB3aXRoIHNoYXZlZCBjaG9jb2xhdGUuYCxcbiAgXTtcblxuICBjb25zdCBhcnJheU9mTWFpbiA9IFtcbiAgICBgQ29xIGF1IFZpbiAtIFRlbmRlciBjaGlja2VuIGJyYWlzZWQgaW4gcmVkIHdpbmUgd2l0aCBtdXNocm9vbXMsXG4gIHBlYXJsIG9uaW9ucywgYW5kIGJhY29uLCBzZXJ2ZWQgd2l0aCBtYXNoZWQgcG90YXRvZXMuYCxcbiAgICBgU3RlYWsgRnJpdGVzIC0gR3JpbGxlZCBzaXJsb2luIHN0ZWFrIHNlcnZlZCB3aXRoIGdvbGRlbiBmcmllcyBhbmQgYVxuICBzaWRlIG9mIELDqWFybmFpc2Ugc2F1Y2UuYCxcbiAgICBgUmF0YXRvdWlsbGUgUHJvdmVuw6dhbGUgLSBBIGhlYXJ0eSB2ZWdldGFibGUgc3RldyBtYWRlIHdpdGggZWdncGxhbnQsXG4gIHp1Y2NoaW5pLCBiZWxsIHBlcHBlcnMsIHRvbWF0b2VzLCBhbmQgaGVyYnMsIHNlcnZlZCB3aXRoIGNydXN0eVxuICBicmVhZC5gLFxuICAgIGBCb3VpbGxhYmFpc3NlIC0gQSB0cmFkaXRpb25hbCBQcm92ZW7Dp2FsIGZpc2ggc3RldyBmZWF0dXJpbmcgYSBtZWRsZXlcbiAgb2Ygc2VhZm9vZCBzaW1tZXJlZCBpbiBhIGZsYXZvcmZ1bCBicm90aCwgc2VydmVkIHdpdGggcm91aWxsZSBhbmRcbiAgZ2FybGljIGNyb3V0b25zLmAsXG4gIF07XG5cbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGNvbnN0IG1lbnVJdGVtcyA9IFthcnJheU9mU3RhcnRlcnMsIGFycmF5T2ZNYWluLCBhcnJheU9mRGVzc2VydHNdO1xuICBjb25zdCBoNEhlYWRpbmdzID0gW1wiU3RhcnRlcnNcIiwgXCJNYWluc1wiLCBcIkRlc3NlcnRzXCJdO1xuXG4gIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcIm1lbnUtaGVpZ2h0XCIpO1xuICBkaXYuY2xhc3NMaXN0LmFkZChcImluZm8tY29udGVudFwiKTtcbiAgZGl2LmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGRpdik7XG4gIGgzLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gIGRpdi5hcHBlbmRDaGlsZChoMyk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZW51SXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICBjb25zdCBoNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgICBoNC50ZXh0Q29udGVudCA9IGg0SGVhZGluZ3NbaV07XG4gICAgZGl2LmFwcGVuZENoaWxkKGg0KTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1lbnVJdGVtc1tpXS5sZW5ndGg7IGorKykge1xuICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICBsaS50ZXh0Q29udGVudCA9IG1lbnVJdGVtc1tpXVtqXTtcbiAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgICB9XG4gICAgZGl2LmFwcGVuZENoaWxkKHVsKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9