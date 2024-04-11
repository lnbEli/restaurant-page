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





const btns = document.querySelectorAll(".btn");

(0,_aboutPage_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

btns.forEach((element) => {
  element.addEventListener("click", () => {
    deleteContent();
    if (element.textContent === "About") {
      (0,_aboutPage_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    } else if (element.textContent === "Menu") {
      (0,_menuPage_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    } else {
      (0,_contactPage_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
      console.log(element);
    }
  });
});

function deleteContent() {
  const content = document.querySelector("#content");
  content.innerHTML = "";
}

// This does not This return the very similar error - Uncaught TypeError: functions[element.textContent] is not a function
//     at HTMLButtonElement

// console.log(`populate${element.textContent}Page`);
// functions[`populate${element.textContent}Page`]();


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0Isc0JBQXNCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHlCQUF5QjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hYm91dFBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3RQYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudVBhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIkZpcmFTYW5zLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9tYWluSW1nLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBib3JkZXI6IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtZmFtaWx5OiBcIkZpcmFTYW5zXCI7XG59XG5cbi8qIGJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn0gKi9cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkZpcmFTYW5zXCI7XG4gIHNyYzogbG9jYWwoXCJGaXJhIFNhbnMgUmVndWxhclwiKSwgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbmhlYWRlciB7XG4gIGhlaWdodDogMjB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiBicm93bjtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgYm9yZGVyOiAwLjJlbSBzb2xpZCByZ2IoMTMwLCA4NywgNyk7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAwIDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuLm5hdi1idG5zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXG4gIHdpZHRoOiAxMDAlO1xufVxuXG5idXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBwYWRkaW5nOiAycHggNXB4IDJweCA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTMwLCA4NywgNyk7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzAsIDg3LCA3LCAwLjkpO1xufVxuXG4jY29udGVudCB7XG4gIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGhlaWdodDogODB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLmluZm8tY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IDEwcHggc29saWQgcmdiKDEzMCwgODcsIDcsIDAuNSk7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuLm1lbnUtaGVpZ2h0IHtcbiAgbWluLWhlaWdodDogOTUwcHg7XG59XG4uYWJvdXQtaGVpZ2h0IHtcbiAgbWluLWhlaWdodDogNDAwcHg7XG59XG5cbi5tZW51IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWVudSBsaSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuZm9ybSB7XG4gIC8qIGJvcmRlcjogMXB4IHJlZCBzb2xpZDsgKi9cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICBwYWRkaW5nLWxlZnQ6IDIwJTtcbiAgcGFkZGluZy1yaWdodDogMjAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXG59XG5cbmZvcm0gPiBwIHtcbiAgd2lkdGg6IDUwJTtcbiAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbmlucHV0IHtcbiAgZmxleDogMjtcbiAgcGFkZGluZzogM3B4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBhZGRpbmctdG9wOiAycHg7XG59XG5cbmxhYmVsIHtcbiAgbWluLXdpZHRoOiAxMDBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmNvbnRhY3Qge1xuICAvKiBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb250YWN0LWhlaWdodCB7XG4gIG1pbi1oZWlnaHQ6IDYwMHB4O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVix1QkFBdUI7QUFDekI7O0FBRUE7O0dBRUc7O0FBRUg7RUFDRSx1QkFBdUI7RUFDdkIsd0VBQTREO0VBQzVELGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG1DQUFtQztFQUNuQyw0QkFBNEI7RUFDNUIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixRQUFRO0VBQ1IsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtFQUMzQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QiwwQkFBMEI7RUFDMUIsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsaUZBQThEO0VBQzlELDhCQUE4QjtFQUM5QiwyQkFBMkI7RUFDM0IseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHVDQUF1QztFQUN2QyxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYixzQkFBc0I7O0VBRXRCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLFVBQVU7RUFDViwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7O3dCQUVzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGaXJhU2Fuc1xcXCI7XFxufVxcblxcbi8qIGJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufSAqL1xcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGaXJhU2Fuc1xcXCI7XFxuICBzcmM6IGxvY2FsKFxcXCJGaXJhIFNhbnMgUmVndWxhclxcXCIpLCB1cmwoXFxcIkZpcmFTYW5zLVJlZ3VsYXIudHRmXFxcIik7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuaGVhZGVyIHtcXG4gIGhlaWdodDogMjB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IGJyb3duO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGJvcmRlcjogMC4yZW0gc29saWQgcmdiKDEzMCwgODcsIDcpO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDAgMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgbWluLWhlaWdodDogMTAwcHg7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4ubmF2LWJ0bnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTAlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgcGFkZGluZzogMnB4IDVweCAycHggNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTMwLCA4NywgNyk7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTMwLCA4NywgNywgMC45KTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgYmFja2dyb3VuZDogdXJsKFxcXCIuL21haW5JbWcuanBnXFxcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XFxuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGhlaWdodDogODB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgcGFkZGluZy10b3A6IDIwcHg7XFxufVxcblxcbi5pbmZvLWNvbnRlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxuICB3aWR0aDogOTAlO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXI6IDEwcHggc29saWQgcmdiKDEzMCwgODcsIDcsIDAuNSk7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgZm9udC1zaXplOiBtZWRpdW07XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLm1lbnUtaGVpZ2h0IHtcXG4gIG1pbi1oZWlnaHQ6IDk1MHB4O1xcbn1cXG4uYWJvdXQtaGVpZ2h0IHtcXG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xcbn1cXG5cXG4ubWVudSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5tZW51IGxpIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuZm9ybSB7XFxuICAvKiBib3JkZXI6IDFweCByZWQgc29saWQ7ICovXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gIHBhZGRpbmctbGVmdDogMjAlO1xcbiAgcGFkZGluZy1yaWdodDogMjAlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cXG59XFxuXFxuZm9ybSA+IHAge1xcbiAgd2lkdGg6IDUwJTtcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbmlucHV0IHtcXG4gIGZsZXg6IDI7XFxuICBwYWRkaW5nOiAzcHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBwYWRkaW5nLXRvcDogMnB4O1xcbn1cXG5cXG5sYWJlbCB7XFxuICBtaW4td2lkdGg6IDEwMHB4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLmNvbnRhY3Qge1xcbiAgLyogZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY29udGFjdC1oZWlnaHQge1xcbiAgbWluLWhlaWdodDogNjAwcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IHsgcG9wdWxhdGVBYm91dFBhZ2UgYXMgZGVmYXVsdCB9O1xuXG5mdW5jdGlvbiBwb3B1bGF0ZUFib3V0UGFnZSgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiYWJvdXQtaGVpZ2h0XCIpO1xuICBkaXYuY2xhc3NMaXN0LmFkZChcImluZm8tY29udGVudFwiKTtcbiAgZGl2LmNsYXNzTGlzdC5hZGQoXCJhYm91dFwiKTtcblxuICBkaXYudGV4dENvbnRlbnQgPSBgIFdlbGNvbWUgdG8gb3VyIEZyZW5jaCBicmFzc2VyaWUsIHdoZXJlIHRyYWRpdGlvbiBtZWV0cyBtb2Rlcm5pdHkgaW4gdGhlXG4gIGhlYXJ0IG9mIHRoZSBjaXR5LiBFbmpveSBjbGFzc2ljIGRpc2hlcyBsaWtlIGNvcSBhdSB2aW4gYW5kXG4gIGJvdWlsbGFiYWlzc2UgY3JhZnRlZCB3aXRoIGxvY2FsIGluZ3JlZGllbnRzLiBPdXIgY296eSBhbWJpYW5jZSBhbmQgb3BlblxuICBraXRjaGVuIGNyZWF0ZSBhIGNoYXJtaW5nIGF0bW9zcGhlcmUuIFBhaXIgeW91ciBtZWFsIHdpdGggc2VsZWN0aW9uc1xuICBmcm9tIG91ciBkaXZlcnNlIHdpbmUgbGlzdCBvciBlbmpveSBoYW5kY3JhZnRlZCBjb2NrdGFpbHMuIFdoZXRoZXJcbiAgYnJ1bmNoIHdpdGggZnJpZW5kcyBvciBhIHJvbWFudGljIGRpbm5lciwgb3VyIGF0dGVudGl2ZSBzdGFmZiBlbnN1cmUgYVxuICBtZW1vcmFibGUgZXhwZXJpZW5jZS4gRGlzY292ZXIgdGhlIGNoYXJtIG9mIEZyZW5jaCBkaW5pbmcgd2l0aCB1cy5gO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2KTtcbn1cbiIsImV4cG9ydCB7IHBvcHVsYXRlQ29udGFjdFBhZ2UgYXMgZGVmYXVsdCB9O1xuXG5mdW5jdGlvbiBwb3B1bGF0ZUNvbnRhY3RQYWdlKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWhlaWdodFwiKTtcbiAgZGl2LmNsYXNzTGlzdC5hZGQoXCJpbmZvLWNvbnRlbnRcIik7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKFwiY29udGFjdFwiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChkaXYpO1xuXG4gIGgzLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG4gIGRpdi5hcHBlbmRDaGlsZChoMyk7XG5cbiAgY29uc3QgY29udGFjdERldGFpbHMgPSBbXG4gICAgXCJUZWw6ICszMyA2IDEyIDM0IDU2IDc4XCIsXG4gICAgXCJqcC5iYWd1ZXR0ZUBleGFtcGxlLmZyXCIsXG4gICAgXCJDaGV6IE1hcmNlbCdzIE1vdWxpbiBkZSBCYWd1ZXR0ZSAxMjMgQ3JvaXNzYW50IEF2ZW51ZSBQYXJpcywgRnJhbmNlIDc1MDAxXCIsXG4gIF07XG5cbiAgY29udGFjdERldGFpbHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwLnRleHRDb250ZW50ID0gZWxlbWVudDtcbiAgICBkaXYuYXBwZW5kQ2hpbGQocCk7XG4gIH0pO1xuXG4gIGNvbnN0IGZvcm1EYXRhID0gW1xuICAgIFtcImZpcnN0TmFtZVwiLCBcIkZpcnN0IE5hbWU6XCIsIFwidGV4dFwiXSxcbiAgICBbXCJsYXN0TmFtZVwiLCBcIkxhc3QgTmFtZTpcIiwgXCJ0ZXh0XCJdLFxuICAgIFtcImVtYWlsXCIsIFwiRW1haWw6XCIsIFwiZW1haWxcIiwgXCJyZXF1aXJlZFwiXSxcbiAgICBbXCJpbnB1dE1lc3NhZ2VcIiwgXCJNZXNzYWdlOlwiLCBcInRleHRcIiwgXCJyZXF1aXJlZFwiXSxcbiAgXTtcblxuICBmb3JtRGF0YS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGxhYmVsLmh0bWxGb3IgPSBlbGVtZW50WzBdO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gZWxlbWVudFsxXTtcbiAgICBpbnB1dC5pZCA9IGVsZW1lbnRbMF07XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBlbGVtZW50WzJdKTtcbiAgICB0eXBlb2YgZWxlbWVudFszXSAhPT0gXCJ1bmRlZmluZWRcIlxuICAgICAgPyAoaW5wdXQucmVxdWlyZWQgPSB0cnVlKVxuICAgICAgOiAoaW5wdXQucmVxdWlyZWQgPSBmYWxzZSk7XG4gICAgcC5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgcC5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChwKTtcbiAgfSk7XG5cbiAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJTdWJtaXRcIjtcbiAgZm9ybS5hcHBlbmRDaGlsZChidXR0b24pO1xuICBkaXYuYXBwZW5kQ2hpbGQoZm9ybSk7XG59XG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHBvcHVsYXRlQWJvdXRQYWdlIGZyb20gXCIuL2Fib3V0UGFnZS5qc1wiO1xuaW1wb3J0IHBvcHVsYXRlTWVudVBhZ2UgZnJvbSBcIi4vbWVudVBhZ2UuanNcIjtcbmltcG9ydCBwb3B1bGF0ZUNvbnRhY3RQYWdlIGZyb20gXCIuL2NvbnRhY3RQYWdlLmpzXCI7XG5cbmNvbnN0IGJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJ0blwiKTtcblxucG9wdWxhdGVBYm91dFBhZ2UoKTtcblxuYnRucy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBkZWxldGVDb250ZW50KCk7XG4gICAgaWYgKGVsZW1lbnQudGV4dENvbnRlbnQgPT09IFwiQWJvdXRcIikge1xuICAgICAgcG9wdWxhdGVBYm91dFBhZ2UoKTtcbiAgICB9IGVsc2UgaWYgKGVsZW1lbnQudGV4dENvbnRlbnQgPT09IFwiTWVudVwiKSB7XG4gICAgICBwb3B1bGF0ZU1lbnVQYWdlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBvcHVsYXRlQ29udGFjdFBhZ2UoKTtcbiAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnQpO1xuICAgIH1cbiAgfSk7XG59KTtcblxuZnVuY3Rpb24gZGVsZXRlQ29udGVudCgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xufVxuXG4vLyBUaGlzIGRvZXMgbm90IFRoaXMgcmV0dXJuIHRoZSB2ZXJ5IHNpbWlsYXIgZXJyb3IgLSBVbmNhdWdodCBUeXBlRXJyb3I6IGZ1bmN0aW9uc1tlbGVtZW50LnRleHRDb250ZW50XSBpcyBub3QgYSBmdW5jdGlvblxuLy8gICAgIGF0IEhUTUxCdXR0b25FbGVtZW50XG5cbi8vIGNvbnNvbGUubG9nKGBwb3B1bGF0ZSR7ZWxlbWVudC50ZXh0Q29udGVudH1QYWdlYCk7XG4vLyBmdW5jdGlvbnNbYHBvcHVsYXRlJHtlbGVtZW50LnRleHRDb250ZW50fVBhZ2VgXSgpO1xuIiwiZXhwb3J0IHsgcG9wdWxhdGVNZW51UGFnZSBhcyBkZWZhdWx0IH07XG5cbmZ1bmN0aW9uIHBvcHVsYXRlTWVudVBhZ2UoKSB7XG4gIGNvbnN0IGFycmF5T2ZTdGFydGVycyA9IFtcbiAgICBgRnJlbmNoIE9uaW9uIFNvdXAgLSBBIGNsYXNzaWMgYmxlbmQgb2YgY2FyYW1lbGl6ZWQgb25pb25zLCBiZWVmIGJyb3RoLCBhbmQgbWVsdGVkIEdydXnDqHJlIGNoZWVzZS5gLFxuICAgIGBFc2NhcmdvdHMgw6AgbGEgQm91cmd1aWdub25uZSAtIEJ1cmd1bmR5IHNuYWlscyBjb29rZWQgaW4gZ2FybGljIGhlcmIgYnV0dGVyLCBzZXJ2ZWQgd2l0aCBjcnVzdHkgYnJlYWQuYCxcbiAgICBgUMOidMOpIGRlIENhbXBhZ25lIC0gQ291bnRyeS1zdHlsZSBww6J0w6kgbWFkZSB3aXRoIHBvcmssIGNoaWNrZW4gbGl2ZXIsYW5kIGhlcmJzLCBzZXJ2ZWQgd2l0aCBjb3JuaWNob25zIGFuZCBtdXN0YXJkLmAsXG4gICAgYFNhbGFkZSBOacOnb2lzZSAtIEEgcmVmcmVzaGluZyBzYWxhZCBmZWF0dXJpbmcgbWl4ZWQgZ3JlZW5zLCB0dW5hLFxuICAgIGhhcmQtYm9pbGVkIGVnZ3MsIG9saXZlcywgYW5kIGFuY2hvdmllcywgZHJpenpsZWQgd2l0aCBhIGxlbW9uXG4gICAgdmluYWlncmV0dGUuYCxcbiAgXTtcblxuICBjb25zdCBhcnJheU9mRGVzc2VydHMgPSBbXG4gICAgYENyw6htZSBCcsO7bMOpZSAtIENyZWFteSB2YW5pbGxhIGN1c3RhcmQgdG9wcGVkIHdpdGggYSBjYXJhbWVsaXplZFxuICBzdWdhciBjcnVzdC5gLFxuICAgIGBUYXJ0ZSBUYXRpbiAtIFVwc2lkZS1kb3duIGFwcGxlIHRhcnQgd2l0aCBjYXJhbWVsaXplZCBzdWdhciBhbmRcbiAgZmxha3kgcGFzdHJ5LCBzZXJ2ZWQgd2l0aCB2YW5pbGxhIGljZSBjcmVhbS5gLFxuICAgIGBQcm9maXRlcm9sZXMgYXUgQ2hvY29sYXQgLSBMaWdodCBwYXN0cnkgcHVmZnMgZmlsbGVkIHdpdGggdmFuaWxsYVxuICAgIGljZSBjcmVhbSBhbmQgZHJpenpsZWQgd2l0aCB3YXJtIGNob2NvbGF0ZSBzYXVjZS5gLFxuICAgIGBNb3Vzc2UgYXUgQ2hvY29sYXQgLSBTaWxreSBjaG9jb2xhdGUgbW91c3NlIG1hZGUgd2l0aCByaWNoIGRhcmtcbiAgICBjaG9jb2xhdGUgYW5kIHdoaXBwZWQgY3JlYW0sIGdhcm5pc2hlZCB3aXRoIHNoYXZlZCBjaG9jb2xhdGUuYCxcbiAgXTtcblxuICBjb25zdCBhcnJheU9mTWFpbiA9IFtcbiAgICBgQ29xIGF1IFZpbiAtIFRlbmRlciBjaGlja2VuIGJyYWlzZWQgaW4gcmVkIHdpbmUgd2l0aCBtdXNocm9vbXMsXG4gIHBlYXJsIG9uaW9ucywgYW5kIGJhY29uLCBzZXJ2ZWQgd2l0aCBtYXNoZWQgcG90YXRvZXMuYCxcbiAgICBgU3RlYWsgRnJpdGVzIC0gR3JpbGxlZCBzaXJsb2luIHN0ZWFrIHNlcnZlZCB3aXRoIGdvbGRlbiBmcmllcyBhbmQgYVxuICBzaWRlIG9mIELDqWFybmFpc2Ugc2F1Y2UuYCxcbiAgICBgUmF0YXRvdWlsbGUgUHJvdmVuw6dhbGUgLSBBIGhlYXJ0eSB2ZWdldGFibGUgc3RldyBtYWRlIHdpdGggZWdncGxhbnQsXG4gIHp1Y2NoaW5pLCBiZWxsIHBlcHBlcnMsIHRvbWF0b2VzLCBhbmQgaGVyYnMsIHNlcnZlZCB3aXRoIGNydXN0eVxuICBicmVhZC5gLFxuICAgIGBCb3VpbGxhYmFpc3NlIC0gQSB0cmFkaXRpb25hbCBQcm92ZW7Dp2FsIGZpc2ggc3RldyBmZWF0dXJpbmcgYSBtZWRsZXlcbiAgb2Ygc2VhZm9vZCBzaW1tZXJlZCBpbiBhIGZsYXZvcmZ1bCBicm90aCwgc2VydmVkIHdpdGggcm91aWxsZSBhbmRcbiAgZ2FybGljIGNyb3V0b25zLmAsXG4gIF07XG5cbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGNvbnN0IG1lbnVJdGVtcyA9IFthcnJheU9mU3RhcnRlcnMsIGFycmF5T2ZNYWluLCBhcnJheU9mRGVzc2VydHNdO1xuICBjb25zdCBoNEhlYWRpbmdzID0gW1wiU3RhcnRlcnNcIiwgXCJNYWluc1wiLCBcIkRlc3NlcnRzXCJdO1xuXG4gIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcIm1lbnUtaGVpZ2h0XCIpO1xuICBkaXYuY2xhc3NMaXN0LmFkZChcImluZm8tY29udGVudFwiKTtcbiAgZGl2LmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGRpdik7XG4gIGgzLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gIGRpdi5hcHBlbmRDaGlsZChoMyk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZW51SXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICBjb25zdCBoNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgICBoNC50ZXh0Q29udGVudCA9IGg0SGVhZGluZ3NbaV07XG4gICAgZGl2LmFwcGVuZENoaWxkKGg0KTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1lbnVJdGVtc1tpXS5sZW5ndGg7IGorKykge1xuICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICBsaS50ZXh0Q29udGVudCA9IG1lbnVJdGVtc1tpXVtqXTtcbiAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgICB9XG4gICAgZGl2LmFwcGVuZENoaWxkKHVsKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9