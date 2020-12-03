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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./inc/Custom/Schema/reactjs/src/qubelystarters-schema.js":
/*!****************************************************************!*\
  !*** ./inc/Custom/Schema/reactjs/src/qubelystarters-schema.js ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schema */ "./inc/Custom/Schema/reactjs/src/schema/index.js");
var registerPlugin = wp.plugins.registerPlugin;

registerPlugin('qubelystarters-schema-panel', {
  render: _schema__WEBPACK_IMPORTED_MODULE_0__["default"],
  icon: ''
});

/***/ }),

/***/ "./inc/Custom/Schema/reactjs/src/schema/fields/schema-fields.js":
/*!**********************************************************************!*\
  !*** ./inc/Custom/Schema/reactjs/src/schema/fields/schema-fields.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _select_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select-options */ "./inc/Custom/Schema/reactjs/src/schema/fields/select-options.js");
var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
var _wp$components = wp.components,
    SelectControl = _wp$components.SelectControl,
    TextControl = _wp$components.TextControl,
    TextareaControl = _wp$components.TextareaControl;


var SchemaFields = function SchemaFields(_ref) {
  var updatedValue = _ref.updatedValue,
      updateMeta = _ref.updateMeta;
  var optionsGroup = [];
  var is_blog_post = qubelystarters_admin.is_post;
  var post_title = qubelystarters_admin.post_title;
  var post_excerpt = qubelystarters_admin.post_excerpt;
  var post_content = qubelystarters_admin.post_content;
  var post_thumbnail = qubelystarters_admin.post_thumbnail;

  var selectOptions = function selectOptions(input) {
    if ('LocalBusiness' === input) {
      optionsGroup = _select_options__WEBPACK_IMPORTED_MODULE_0__["localBusiness"];
    } else if ('Organization' === input) {
      optionsGroup = _select_options__WEBPACK_IMPORTED_MODULE_0__["organization"];
    } else if ('Person' === input) {
      optionsGroup = _select_options__WEBPACK_IMPORTED_MODULE_0__["person"];
    } else if ('Review' === input) {
      optionsGroup = _select_options__WEBPACK_IMPORTED_MODULE_0__["review"];
    }

    return optionsGroup;
  };

  if ('1' === is_blog_post) {
    return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(TextControl, {
      label: __('Schema Type', 'qubelystarters'),
      value: "Blog Post",
      disabled: true,
      style: {
        backgroundColor: '#eeeeee',
        cursor: 'not-allowed'
      }
    }), /*#__PURE__*/React.createElement(TextControl, {
      label: __('Title', 'qubelystarters'),
      placeholder: __('e.g: My Awesome Post', 'qubelystarters'),
      value: updatedValue.name ? updatedValue.name : post_title,
      onChange: function onChange(value) {
        return updateMeta(value, 'name');
      }
    }), /*#__PURE__*/React.createElement(TextControl, {
      label: __('Image URL', 'qubelystarters'),
      placeholder: __('e.g: https://site.com/image-url.jpg', 'qubelystarters'),
      value: updatedValue.logo_url ? updatedValue.logo_url : post_thumbnail,
      onChange: function onChange(value) {
        return updateMeta(value, 'logo_url');
      }
    }), /*#__PURE__*/React.createElement(TextControl, {
      label: __('Keywords', 'qubelystarters'),
      placeholder: __('e.g: seo wordpress blog', 'qubelystarters'),
      value: updatedValue.keywords,
      onChange: function onChange(value) {
        return updateMeta(value, 'keywords');
      }
    }), /*#__PURE__*/React.createElement(TextareaControl, {
      label: __('Description', 'qubelystarters'),
      placeholder: __('e.g: Awesome Description', 'qubelystarters'),
      value: updatedValue.description ? updatedValue.description : post_excerpt,
      onChange: function onChange(value) {
        return updateMeta(value, 'description');
      }
    }), /*#__PURE__*/React.createElement(TextareaControl, {
      label: __('Article Body', 'qubelystarters'),
      placeholder: __('e.g: Awesome Post Content', 'qubelystarters'),
      value: updatedValue.article_body ? updatedValue.article_body : post_content,
      onChange: function onChange(value) {
        return updateMeta(value, 'article_body');
      }
    }));
  } else {
    return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(SelectControl, {
      label: __('Schema Type', 'qubelystarters'),
      value: updatedValue.main_schema_select,
      options: [{
        label: __('--Select--', 'qubelystarters'),
        value: ''
      }, {
        label: __('Local Business', 'qubelystarters'),
        value: 'LocalBusiness'
      }, {
        label: __('Organization', 'qubelystarters'),
        value: 'Organization'
      }, {
        label: __('Web Page', 'qubelystarters'),
        value: 'WebPage'
      }, {
        label: __('Video', 'qubelystarters'),
        value: 'Video'
      }, {
        label: __('Review', 'qubelystarters'),
        value: 'Review'
      }, {
        label: __('Person', 'qubelystarters'),
        value: 'Person'
      }],
      onChange: function onChange(value) {
        return updateMeta(value, 'main_schema_select');
      }
    }), 'WebPage' !== updatedValue.main_schema_select && 'Video' !== updatedValue.main_schema_select && /*#__PURE__*/React.createElement(SelectControl, {
      label: 'Person' === updatedValue.main_schema_select ? __('Gender', 'qubelystarters') : __('Sub Schema Type', 'qubelystarters'),
      value: updatedValue.sub_schema_select,
      options: selectOptions(updatedValue.main_schema_select),
      onChange: function onChange(value) {
        return updateMeta(value, 'sub_schema_select');
      }
    }), /*#__PURE__*/React.createElement(TextControl, {
      label: __('Name', 'qubelystarters'),
      placeholder: __('e.g: John Doe', 'qubelystarters'),
      value: updatedValue.name,
      onChange: function onChange(value) {
        return updateMeta(value, 'name');
      }
    }), 'Person' === updatedValue.main_schema_select && /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(TextControl, {
      label: __('Job Title', 'qubelystarters'),
      placeholder: __('e.g: Software Engineer', 'qubelystarters'),
      value: updatedValue.job_title,
      onChange: function onChange(value) {
        return updateMeta(value, 'job_title');
      }
    }), /*#__PURE__*/React.createElement(TextControl, {
      label: __('Height', 'qubelystarters'),
      placeholder: __('e.g: 165 cm', 'qubelystarters'),
      value: updatedValue.height,
      onChange: function onChange(value) {
        return updateMeta(value, 'height');
      }
    }), /*#__PURE__*/React.createElement(TextControl, {
      label: __('Email', 'qubelystarters'),
      placeholder: __('e.g: john@doe.com', 'qubelystarters'),
      value: updatedValue.email,
      onChange: function onChange(value) {
        return updateMeta(value, 'email');
      }
    }), /*#__PURE__*/React.createElement(TextControl, {
      label: __('Birth Date', 'qubelystarters'),
      placeholder: __('e.g: YYYY-MM-DD', 'qubelystarters'),
      value: updatedValue.birth_date,
      onChange: function onChange(value) {
        return updateMeta(value, 'birth_date');
      }
    }), /*#__PURE__*/React.createElement(TextControl, {
      label: __('Birth Place', 'qubelystarters'),
      placeholder: __('e.g: Zurich, Switzerland', 'qubelystarters'),
      value: updatedValue.birth_place,
      onChange: function onChange(value) {
        return updateMeta(value, 'birth_place');
      }
    }), /*#__PURE__*/React.createElement(TextControl, {
      label: __('Nationality', 'qubelystarters'),
      placeholder: __('e.g: American', 'qubelystarters'),
      value: updatedValue.nationality,
      onChange: function onChange(value) {
        return updateMeta(value, 'nationality');
      }
    }), /*#__PURE__*/React.createElement(TextControl, {
      label: __('PO Box', 'qubelystarters'),
      placeholder: __('e.g: 4521', 'qubelystarters'),
      value: updatedValue.po_box,
      onChange: function onChange(value) {
        return updateMeta(value, 'po_box');
      }
    })), 'Person' !== updatedValue.main_schema_select && 'WebPage' !== updatedValue.main_schema_select && /*#__PURE__*/React.createElement(TextControl, {
      label: 'Video' === updatedValue.main_schema_select ? __('Thumbnail URL', 'qubelystarters') : __('Logo/Image URL', 'qubelystarters'),
      placeholder: __('e.g: https://site.com/image-url.jpg', 'qubelystarters'),
      value: updatedValue.logo_url,
      onChange: function onChange(value) {
        return updateMeta(value, 'logo_url');
      }
    }), 'Person' !== updatedValue.main_schema_select && /*#__PURE__*/React.createElement(TextareaControl, {
      label: __('Description', 'qubelystarters'),
      placeholder: __('e.g: Awesome description', 'qubelystarters'),
      value: updatedValue.description,
      onChange: function onChange(value) {
        return updateMeta(value, 'description');
      }
    }), 'Organization' === updatedValue.main_schema_select && /*#__PURE__*/React.createElement(TextControl, {
      label: __('PO Box', 'qubelystarters'),
      placeholder: __('e.g: 4521', 'qubelystarters'),
      value: updatedValue.po_box,
      onChange: function onChange(value) {
        return updateMeta(value, 'po_box');
      }
    }), 'WebPage' !== updatedValue.main_schema_select && 'Video' !== updatedValue.main_schema_select && 'Review' !== updatedValue.main_schema_select && /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(TextControl, {
      label: __('Address', 'qubelystarters'),
      placeholder: __('e.g: 45, johnson road', 'qubelystarters'),
      value: updatedValue.address,
      onChange: function onChange(value) {
        return updateMeta(value, 'address');
      }
    }), /*#__PURE__*/React.createElement(TextControl, {
      label: __('Phone Number', 'qubelystarters'),
      placeholder: __('e.g: +1 22 33 4567', 'qubelystarters'),
      value: updatedValue.phone,
      onChange: function onChange(value) {
        return updateMeta(value, 'phone');
      }
    }), /*#__PURE__*/React.createElement(TextControl, {
      label: __('City', 'qubelystarters'),
      placeholder: __('e.g: New York', 'qubelystarters'),
      value: updatedValue.city,
      onChange: function onChange(value) {
        return updateMeta(value, 'city');
      }
    }), /*#__PURE__*/React.createElement(TextControl, {
      label: __('State/Region', 'qubelystarters'),
      placeholder: __('e.g: California(CA)', 'qubelystarters'),
      value: updatedValue.state_region,
      onChange: function onChange(value) {
        return updateMeta(value, 'state_region');
      }
    }), /*#__PURE__*/React.createElement(TextControl, {
      label: __('Zip/Postal Code', 'qubelystarters'),
      placeholder: __('e.g: 1234', 'qubelystarters'),
      value: updatedValue.zip_code,
      onChange: function onChange(value) {
        return updateMeta(value, 'zip_code');
      }
    }), /*#__PURE__*/React.createElement(TextControl, {
      label: __('Country', 'qubelystarters'),
      placeholder: __('e.g: USA', 'qubelystarters'),
      value: updatedValue.country,
      onChange: function onChange(value) {
        return updateMeta(value, 'country');
      }
    })), 'Video' === updatedValue.main_schema_select && /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(TextControl, {
      label: __('Upload Date', 'qubelystarters'),
      help: __('Format it like this YYYY-MM-DD and the time with "T then hour:minute:second+timezone"', 'qubelystarters'),
      placeholder: __('e.g: 2020-10-10T08:00:00+08:00', 'qubelystarters'),
      value: updatedValue.upload_date,
      onChange: function onChange(value) {
        return updateMeta(value, 'upload_date');
      }
    }), /*#__PURE__*/React.createElement(TextControl, {
      label: __('Duration', 'qubelystarters'),
      help: __('Format it like this: PT then 1 minute and then 30 second', 'qubelystarters'),
      placeholder: __('e.g: PT1M30S', 'qubelystarters'),
      value: updatedValue.duration,
      onChange: function onChange(value) {
        return updateMeta(value, 'duration');
      }
    }), /*#__PURE__*/React.createElement(TextControl, {
      label: __('Content URL', 'qubelystarters'),
      placeholder: __('e.g: https://example.com/video-url.mp4', 'qubelystarters'),
      value: updatedValue.content_url,
      onChange: function onChange(value) {
        return updateMeta(value, 'content_url');
      }
    }), /*#__PURE__*/React.createElement(TextControl, {
      label: __('Embed URL', 'qubelystarters'),
      placeholder: __('e.g: https://example.com/videoplayer.swf?video=123', 'qubelystarters'),
      value: updatedValue.embed_url,
      onChange: function onChange(value) {
        return updateMeta(value, 'embed_url');
      }
    }), /*#__PURE__*/React.createElement(TextControl, {
      label: __('Interaction Count', 'qubelystarters'),
      placeholder: __('e.g: 1254', 'qubelystarters'),
      value: updatedValue.interaction_count,
      onChange: function onChange(value) {
        return updateMeta(value, 'interaction_count');
      }
    })), 'Review' === updatedValue.main_schema_select && /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(TextControl, {
      label: __('Rating Value', 'qubelystarters'),
      placeholder: __('e.g: 4', 'qubelystarters'),
      value: updatedValue.rating_value,
      onChange: function onChange(value) {
        return updateMeta(value, 'rating_value');
      }
    }), /*#__PURE__*/React.createElement(TextControl, {
      label: __('Reviewed Item', 'qubelystarters'),
      placeholder: __('e.g: iPhone 11 Pro Case', 'qubelystarters'),
      value: updatedValue.reviewed_product,
      onChange: function onChange(value) {
        return updateMeta(value, 'reviewed_product');
      }
    }), /*#__PURE__*/React.createElement(TextControl, {
      label: __('Reviewed By', 'qubelystarters'),
      placeholder: __('e.g: Mr John Doe', 'qubelystarters'),
      value: updatedValue.reviewed_by,
      onChange: function onChange(value) {
        return updateMeta(value, 'reviewed_by');
      }
    }), /*#__PURE__*/React.createElement(TextControl, {
      label: __('Date Published', 'qubelystarters'),
      help: __('Format it like this YYYY-MM-DD', 'qubelystarters'),
      placeholder: __('e.g: 2020-10-10', 'qubelystarters'),
      value: updatedValue.date_published,
      onChange: function onChange(value) {
        return updateMeta(value, 'date_published');
      }
    }), /*#__PURE__*/React.createElement(TextControl, {
      label: __('Review Publisher Type', 'qubelystarters'),
      placeholder: __('e.g: Organization', 'qubelystarters'),
      value: updatedValue.publisher_type,
      onChange: function onChange(value) {
        return updateMeta(value, 'publisher_type');
      }
    }), /*#__PURE__*/React.createElement(TextControl, {
      label: __('Publisher Name', 'qubelystarters'),
      placeholder: __('e.g: iPhone 11 Pro Case Inc.', 'qubelystarters'),
      value: updatedValue.publisher_name,
      onChange: function onChange(value) {
        return updateMeta(value, 'publisher_name');
      }
    })));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (SchemaFields);

/***/ }),

/***/ "./inc/Custom/Schema/reactjs/src/schema/fields/select-options.js":
/*!***********************************************************************!*\
  !*** ./inc/Custom/Schema/reactjs/src/schema/fields/select-options.js ***!
  \***********************************************************************/
/*! exports provided: localBusiness, organization, person, review */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localBusiness", function() { return localBusiness; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "organization", function() { return organization; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "person", function() { return person; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "review", function() { return review; });
var __ = wp.i18n.__;
var localBusiness = [{
  label: __('--Select--', 'qubelystarters'),
  value: ''
}, {
  label: __('Accounting Service', 'qubelystarters'),
  value: 'AccountingService'
}, {
  label: __('Amusement Park', 'qubelystarters'),
  value: 'AmusementPark'
}, {
  label: __('Animal Shelter', 'qubelystarters'),
  value: 'AnimalShelter'
}, {
  label: __('Art Gallery', 'qubelystarters'),
  value: 'ArtGallery'
}, {
  label: __('Automotive Business', 'qubelystarters'),
  value: 'AutomotiveBusiness'
}, {
  label: __('Auto Body Shop', 'qubelystarters'),
  value: 'AutoBodyShop'
}, {
  label: __('Auto Dealer', 'qubelystarters'),
  value: 'AutoDealer'
}, {
  label: __('Auto Parts Store', 'qubelystarters'),
  value: 'AutoPartsStore'
}, {
  label: __('Auto Rental', 'qubelystarters'),
  value: 'AutoRental'
}, {
  label: __('Auto Repair', 'qubelystarters'),
  value: 'AutoRepair'
}, {
  label: __('Auto Wash', 'qubelystarters'),
  value: 'AutoWash'
}, {
  label: __('Bakery', 'qubelystarters'),
  value: 'Bakery'
}, {
  label: __('Bar Or Pub', 'qubelystarters'),
  value: 'BarOrPub'
}, {
  label: __('Beauty Salon', 'qubelystarters'),
  value: 'BeautySalon'
}, {
  label: __('Cafe Or Coffee Shop', 'qubelystarters'),
  value: 'CafeOrCoffeeShop'
}, {
  label: __('Casino', 'qubelystarters'),
  value: 'Casino'
}, {
  label: __('Child Care', 'qubelystarters'),
  value: 'ChildCare'
}, {
  label: __('Comedy Club', 'qubelystarters'),
  value: 'ComedyClub'
}, {
  label: __('Day Spa', 'qubelystarters'),
  value: 'DaySpa'
}, {
  label: __('Dry Cleaning Or Laundry', 'qubelystarters'),
  value: 'DryCleaningOrLaundry'
}, {
  label: __('Emergency Service', 'qubelystarters'),
  value: 'EmergencyService'
}, {
  label: __('Employment Agency', 'qubelystarters'),
  value: 'EmploymentAgency'
}, {
  label: __('Entertainment Business', 'qubelystarters'),
  value: 'EntertainmentBusiness'
}, {
  label: __('Fast Food Restaurant', 'qubelystarters'),
  value: 'FastFoodRestaurant'
}, {
  label: __('Fire Station', 'qubelystarters'),
  value: 'FireStation'
}, {
  label: __('Gas Station', 'qubelystarters'),
  value: 'GasStation'
}, {
  label: __('Hair Salon', 'qubelystarters'),
  value: 'HairSalon'
}, {
  label: __('Health And Beauty Business', 'qubelystarters'),
  value: 'HealthAndBeautyBusiness'
}, {
  label: __('Health Club', 'qubelystarters'),
  value: 'HealthClub'
}, {
  label: __('Hospital', 'qubelystarters'),
  value: 'Hospital'
}, {
  label: __('Ice Cream Shop', 'qubelystarters'),
  value: 'IceCreamShop'
}, {
  label: __('Insurance Agency', 'qubelystarters'),
  value: 'InsuranceAgency'
}, {
  label: __('Motorcycle Dealer', 'qubelystarters'),
  value: 'MotorcycleDealer'
}, {
  label: __('Motorcycle Repair', 'qubelystarters'),
  value: 'MotorcycleRepair'
}, {
  label: __('Movie Theater', 'qubelystarters'),
  value: 'MovieTheater'
}, {
  label: __('Nail Salon', 'qubelystarters'),
  value: 'NailSalon'
}, {
  label: __('Night Club', 'qubelystarters'),
  value: 'NightClub'
}, {
  label: __('Police Station', 'qubelystarters'),
  value: 'PoliceStation'
}, {
  label: __('Restaurant', 'qubelystarters'),
  value: 'Restaurant'
}, {
  label: __('Tatto Parlor', 'qubelystarters'),
  value: 'TattoParlor'
}];
var organization = [{
  label: __('--Select--', 'qubelystarters'),
  value: ''
}, {
  label: __('Organization', 'qubelystarters'),
  value: 'Organization'
}, {
  label: __('Corporation', 'qubelystarters'),
  value: 'Corporation'
}, {
  label: __('Educational Organization', 'qubelystarters'),
  value: 'EducationalOrganization'
}, {
  label: __('Government Organization', 'qubelystarters'),
  value: 'GovernmentOrganization'
}, {
  label: __('NGO', 'qubelystarters'),
  value: 'NGO'
}, {
  label: __('Performing Group', 'qubelystarters'),
  value: 'PerformingGroup'
}, {
  label: __('Sports Team', 'qubelystarters'),
  value: 'SportsTeam'
}];
var person = [{
  label: __('--Select--', 'qubelystarters'),
  value: ''
}, {
  label: __('Male', 'qubelystarters'),
  value: 'Male'
}, {
  label: __('Female', 'qubelystarters'),
  value: 'Female'
}, {
  label: __('Other', 'qubelystarters'),
  value: 'Other'
}];
var review = [{
  label: __('--Select--', 'qubelystarters'),
  value: ''
}, {
  label: __('Product', 'qubelystarters'),
  value: 'Product'
}, {
  label: __('Book', 'qubelystarters'),
  value: 'Book'
}];

/***/ }),

/***/ "./inc/Custom/Schema/reactjs/src/schema/index.js":
/*!*******************************************************!*\
  !*** ./inc/Custom/Schema/reactjs/src/schema/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fields_schema_fields__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fields/schema-fields */ "./inc/Custom/Schema/reactjs/src/schema/fields/schema-fields.js");
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

var SchemaFieldsData = compose([withSelect(function () {
  return {
    updatedValue: select('core/editor').getEditedPostAttribute('meta')._qubelystarters_schema_metadata
  };
}), withDispatch(function (dispatch) {
  return {
    updateMeta: function updateMeta(value, prop) {
      var meta = select('core/editor').getEditedPostAttribute('meta')._qubelystarters_schema_metadata;

      meta = _objectSpread({
        main_schema_select: '',
        sub_schema_select: '',
        name: '',
        logo_url: '',
        description: '',
        address: '',
        phone: '',
        city: '',
        state_region: '',
        zip_code: '',
        country: '',
        po_box: '',
        job_title: '',
        height: '',
        birth_date: '',
        birth_place: '',
        nationality: '',
        duration: '',
        upload_date: '',
        content_url: '',
        embed_url: '',
        interaction_count: '',
        rating_value: '',
        reviewed_product: '',
        reviewed_by: '',
        date_published: '',
        publisher_type: '',
        publisher_name: '',
        keywords: '',
        article_body: ''
      }, meta);
      meta[prop] = value;
      dispatch('core/editor').editPost({
        meta: {
          _qubelystarters_schema_metadata: meta
        }
      });
    }
  };
})])(_fields_schema_fields__WEBPACK_IMPORTED_MODULE_0__["default"]);

var QubelyStartersSchemaPanel = function QubelyStartersSchemaPanel() {
  return /*#__PURE__*/React.createElement(PluginDocumentSettingPanel, {
    name: "qubelystarters-schema-panel",
    title: "Qubely Starters Schema Settings"
  }, /*#__PURE__*/React.createElement(SchemaFieldsData, null));
};

/* harmony default export */ __webpack_exports__["default"] = (QubelyStartersSchemaPanel);

/***/ }),

/***/ 4:
/*!**********************************************************************!*\
  !*** multi ./inc/Custom/Schema/reactjs/src/qubelystarters-schema.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/zaman/Local Sites/qubelythemeh/app/public/wp-content/themes/qubelystarters/inc/Custom/Schema/reactjs/src/qubelystarters-schema.js */"./inc/Custom/Schema/reactjs/src/qubelystarters-schema.js");


/***/ })

/******/ });