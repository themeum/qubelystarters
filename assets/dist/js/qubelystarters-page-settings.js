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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./inc/Custom/Page/reactjs/src/page-settings/fields/page-settings-fields.js":
/*!**********************************************************************************!*\
  !*** ./inc/Custom/Page/reactjs/src/page-settings/fields/page-settings-fields.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
var _wp$components = wp.components,
    SelectControl = _wp$components.SelectControl,
    ToggleControl = _wp$components.ToggleControl;

var PageSettingsFields = function PageSettingsFields(_ref) {
  var updatedValue = _ref.updatedValue,
      updateMeta = _ref.updateMeta;
  var is_page = qubelystarters_admin.is_page;

  if ('1' === is_page) {
    return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(SelectControl, {
      label: __('Sidebar', 'qubelystarters'),
      value: updatedValue.sidebar_select,
      options: [{
        label: __('--Select Option--', 'qubelystarters'),
        value: ''
      }, {
        label: __('No Sidebar', 'qubelystarters'),
        value: 'no-sidebar'
      }, {
        label: __('Left Sidebar', 'qubelystarters'),
        value: 'left-sidebar'
      }, {
        label: __('Right Sidebar', 'qubelystarters'),
        value: 'right-sidebar'
      }],
      onChange: function onChange(value) {
        return updateMeta(value, 'sidebar_select');
      }
    }), /*#__PURE__*/React.createElement(ToggleControl, {
      label: __('Disable Title?', 'qubelystarters'),
      checked: updatedValue.page_title_toggle,
      onChange: function onChange(value) {
        return updateMeta(value, 'page_title_toggle');
      }
    }), /*#__PURE__*/React.createElement(ToggleControl, {
      label: __('Disable Header?', 'qubelystarters'),
      checked: updatedValue.header_toggle,
      onChange: function onChange(value) {
        return updateMeta(value, 'header_toggle');
      }
    }), /*#__PURE__*/React.createElement(ToggleControl, {
      label: __('Disable Footer?', 'qubelystarters'),
      checked: updatedValue.footer_toggle,
      onChange: function onChange(value) {
        return updateMeta(value, 'footer_toggle');
      }
    }));
  } else {
    return /*#__PURE__*/React.createElement(Fragment, null);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (PageSettingsFields);

/***/ }),

/***/ "./inc/Custom/Page/reactjs/src/page-settings/index.js":
/*!************************************************************!*\
  !*** ./inc/Custom/Page/reactjs/src/page-settings/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fields_page_settings_fields__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fields/page-settings-fields */ "./inc/Custom/Page/reactjs/src/page-settings/fields/page-settings-fields.js");
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var compose = wp.compose.compose;
var PluginDocumentSettingPanel = wp.editPost.PluginDocumentSettingPanel;
var _wp$data = wp.data,
    select = _wp$data.select,
    withSelect = _wp$data.withSelect,
    withDispatch = _wp$data.withDispatch;

var PageSettingsFieldsData = compose([withSelect(function () {
  return {
    updatedValue: select('core/editor').getEditedPostAttribute('meta')._qubelystarters_page_metadata
  };
}), withDispatch(function (dispatch) {
  return {
    updateMeta: function updateMeta(value, prop) {
      var meta = select('core/editor').getEditedPostAttribute('meta')._qubelystarters_page_metadata;

      meta = _objectSpread({
        sidebar_select: 'no-sidebar',
        page_title_toggle: false,
        header_toggle: false,
        footer_toggle: false
      }, meta);
      meta[prop] = value;
      dispatch('core/editor').editPost({
        meta: {
          _qubelystarters_page_metadata: meta
        }
      });
    }
  };
})])(_fields_page_settings_fields__WEBPACK_IMPORTED_MODULE_0__["default"]);

var QubelyStartersPageSettingsPanel = function QubelyStartersPageSettingsPanel() {
  return /*#__PURE__*/React.createElement(PluginDocumentSettingPanel, {
    name: "qubelystarters-settings-panel",
    title: "Qubely Starters Page Settings"
  }, /*#__PURE__*/React.createElement(PageSettingsFieldsData, null));
};

/* harmony default export */ __webpack_exports__["default"] = (QubelyStartersPageSettingsPanel);

/***/ }),

/***/ "./inc/Custom/Page/reactjs/src/qubelystarters-page-settings.js":
/*!*********************************************************************!*\
  !*** ./inc/Custom/Page/reactjs/src/qubelystarters-page-settings.js ***!
  \*********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-settings */ "./inc/Custom/Page/reactjs/src/page-settings/index.js");
var registerPlugin = wp.plugins.registerPlugin;

var is_page = qubelystarters_admin.is_page;

if ('1' === is_page) {
  registerPlugin('qubelystarters-settings-panel', {
    render: _page_settings__WEBPACK_IMPORTED_MODULE_0__["default"],
    icon: ''
  });
}

/***/ }),

/***/ 5:
/*!***************************************************************************!*\
  !*** multi ./inc/Custom/Page/reactjs/src/qubelystarters-page-settings.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/zaman/Local Sites/qubelythemeh/app/public/wp-content/themes/qubelystarters/inc/Custom/Page/reactjs/src/qubelystarters-page-settings.js */"./inc/Custom/Page/reactjs/src/qubelystarters-page-settings.js");


/***/ })

/******/ });