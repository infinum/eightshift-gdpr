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
/******/ 	__webpack_require__.p = "/skin/public/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./skin/assets/front/application.js":
/*!******************************************!*\
  !*** ./skin/assets/front/application.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./styles/application.scss */ "./skin/assets/front/styles/application.scss");

__webpack_require__(/*! ./scripts/scripts */ "./skin/assets/front/scripts/scripts.js");

/***/ }),

/***/ "./skin/assets/front/scripts/gdpr-modal.js":
/*!*************************************************!*\
  !*** ./skin/assets/front/scripts/gdpr-modal.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GdprModal = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _devices = __webpack_require__(/*! ./helpers/devices */ "./skin/assets/front/scripts/helpers/devices.js");

var _devices2 = _interopRequireDefault(_devices);

var _cookies = __webpack_require__(/*! ./helpers/cookies */ "./skin/assets/front/scripts/helpers/cookies.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GdprModal = exports.GdprModal = function () {
  function GdprModal(options) {
    _classCallCheck(this, GdprModal);

    this.modalId = options.modalId;
    this.modalElement = options.modalElement;
    this.descriptionElement = options.descriptionElement;
    this.btnElement = options.btnElement;
    this.btnAdvanceElement = options.btnAdvanceElement;
    this.screenBasicElement = options.screenBasicElement;
    this.screenAdvanceElement = options.screenAdvanceElement;
    this.showAdvanceElement = options.showAdvanceElement;
    this.selectionParentElement = options.selectionParentElement;
    this.selectionElement = options.selectionElement;
    this.selectionInputElement = options.selectionInputElement;
    this.openElement = options.openElement;
    this.nonceFieldElement = options.nonceFieldElement;
    this.ACTIVE_CLASS = options.ACTIVE_CLASS;
    this.ajaxAction = options.ajaxAction;
    this.ajaxUrl = options.ajaxUrl;

    this.$modal = $(this.modalElement);
    this.$open = $(this.openElement);
    this.$showAdvance = $(this.showAdvanceElement);
    this.$screenBasic = $(this.screenBasicElement);
    this.$screenAdvance = $(this.screenAdvanceElement);
    this.$description = $(this.descriptionElement);
    this.$selectionParent = $(this.selectionParentElement);
    this.$selection = $(this.selectionElement);
    this.$selectionInput = $(this.selectionInputElement);
    this.$btn = $(this.btnElement);
    this.$btnAdvance = $(this.btnAdvanceElement);
    this.$body = $('html, body');
    this.$nonceField = $(this.nonceFieldElement);

    this.level = '0';
  }

  _createClass(GdprModal, [{
    key: 'statsAjax',
    value: function statsAjax(level, locale) {
      if (typeof level === 'undefined') {
        return;
      }

      if (typeof locale === 'undefined') {
        return;
      }

      var ajaxData = {
        action: this.ajaxAction,
        nonce: this.$nonceField.val(),
        url: this.ajaxUrl,
        level: level,
        locale: locale
      };

      $.post(ajaxData.url, ajaxData);
    }
  }, {
    key: 'init',
    value: function init() {
      var level = _cookies.cookies.getCookie(this.modalId);
      this.level = level === null ? this.level : level;
      this.setSelectionContainerLevel();

      if (level === null) {
        this.open(this.modalId);
      }
    }
  }, {
    key: 'open',
    value: function open() {
      var _this = this;

      if (_devices2.default.iPhone()) {
        this.scrollPosition = window.pageYOffset;
      }

      this.getModalById(this.modalId).addClass(this.ACTIVE_CLASS);

      setTimeout(function () {
        _this.$body.addClass(_this.getBodyActiveClass());
      }, 300);
    }
  }, {
    key: 'close',
    value: function close(level) {
      if (_devices2.default.iPhone()) {
        window.scroll(0, this.scrollPosition);
      }

      this.setLevel(level);
      this.getModalById(this.modalId).removeClass(this.ACTIVE_CLASS);
      this.$body.removeClass(this.getBodyActiveClass());
    }
  }, {
    key: 'setLevel',
    value: function setLevel(level) {
      _cookies.cookies.setCookie(this.modalId, level, _cookies.cookies.setOneYear(), '/');

      if (this.level !== level) {
        location.reload();
      }
    }
  }, {
    key: 'getModalById',
    value: function getModalById() {
      return $(this.modalElement + '[data-modal="' + this.modalId + '"]');
    }
  }, {
    key: 'getBodyActiveClass',
    value: function getBodyActiveClass() {
      var activeClass = '';

      // For Iphone and iPad check and add different style

      if (_devices2.default.iPhone()) {
        activeClass = 'u-no-scroll-ios';
      } else {
        activeClass = 'u-no-scroll';
      }

      return activeClass;
    }
  }, {
    key: 'showAdvanceContent',
    value: function showAdvanceContent() {
      this.$screenBasic.slideUp();
      this.$screenAdvance.slideDown();
    }
  }, {
    key: 'setSelectionContainerLevel',
    value: function setSelectionContainerLevel() {
      var activeLevel = $(this.selectionElement + '.' + this.ACTIVE_CLASS).attr('data-level');
      this.$selectionParent.attr('data-level', activeLevel);
    }
  }, {
    key: 'toggleDescription',
    value: function toggleDescription(level) {
      if (typeof level === 'undefined') {
        return;
      }

      this.$description.removeClass(this.ACTIVE_CLASS);
      this.$selection.removeClass(this.ACTIVE_CLASS);

      $(this.descriptionElement + '[data-level="' + level + '"]').addClass(this.ACTIVE_CLASS);
      $(this.selectionElement + '[data-level="' + level + '"]').addClass(this.ACTIVE_CLASS);
      this.$btnAdvance.attr('data-level', level);
      this.setSelectionContainerLevel();
    }
  }, {
    key: 'scrollPosition',
    set: function set(scrollPosition) {
      this._scrollPosition = scrollPosition;
    },
    get: function get() {
      return this._scrollPosition;
    }
  }]);

  return GdprModal;
}();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./skin/assets/front/scripts/helpers/cookies.js":
/*!******************************************************!*\
  !*** ./skin/assets/front/scripts/helpers/cookies.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var cookies = exports.cookies = {
  setCookie: function setCookie(key, value, time, path) {
    var expires = new Date();
    expires.setTime(expires.getTime() + time);
    var pathValue = '';

    if (typeof path !== 'undefined') {
      pathValue = 'path=' + path + ';';
    }

    document.cookie = key + '=' + value + ';' + pathValue + 'expires=' + expires.toUTCString();
  },
  getCookie: function getCookie(key) {
    var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
    return keyValue ? keyValue[2] : null;
  },
  setOneYear: function setOneYear() {
    return 31536000000;
  }
};

/***/ }),

/***/ "./skin/assets/front/scripts/helpers/devices.js":
/*!******************************************************!*\
  !*** ./skin/assets/front/scripts/helpers/devices.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var device = {
  iPhone: function iPhone() {
    var checkIphone = false;

    if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i)) {
      checkIphone = true;
    }

    return checkIphone;
  }
};

exports.default = device;

/***/ }),

/***/ "./skin/assets/front/scripts/scripts.js":
/*!**********************************************!*\
  !*** ./skin/assets/front/scripts/scripts.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var _gdprModal = __webpack_require__(/*! ./gdpr-modal */ "./skin/assets/front/scripts/gdpr-modal.js");

$(function () {
  var modal = new _gdprModal.GdprModal({
    modalId: 'gdpr',
    modalElement: '.js-modal-gdpr',
    descriptionElement: '.js-modal-gdpr-description',
    btnElement: '.js-modal-gdpr-btn',
    btnAdvanceElement: '.js-modal-gdpr-btn-advance',
    screenBasicElement: '.js-modal-gdpr-screen-basic',
    screenAdvanceElement: '.js-modal-gdpr-screen-advance',
    showAdvanceElement: '.js-modal-gdpr-show-advance',
    selectionParentElement: '.js-modal-gdpr-selection-container',
    selectionElement: '.js-modal-gdpr-selection',
    selectionInputElement: '.js-modal-gdpr-selection-input',
    openElement: '.js-modal-gdpr-open',
    ACTIVE_CLASS: 'is-active',

    ajaxAction: 'stats_update',
    ajaxUrl: esgdprLocalization.ajaxUrl,
    nonceFieldElement: '#esgdpr_stats'
  });

  if (modal.$modal.length) {
    modal.init();

    modal.$btn.on('click', function (e) {
      e.preventDefault();
      var level = $(this).attr('data-level');

      modal.statsAjax(level, esgdprLocalization.locale);
      modal.close(level);
    });

    // On open default link.
    modal.$open.on('click', function (e) {
      e.preventDefault();
      modal.open();
    });

    // On advance options button click.
    modal.$showAdvance.on('click', function (e) {
      e.preventDefault();
      $(this).slideUp();
      modal.showAdvanceContent();
    });

    // On advance selection value change.
    modal.$selectionInput.on('change', function () {
      var level = $(this).val();

      modal.toggleDescription(level);
    });

    // On url open modal.
    $('a[href="#gdpr-modal"]').on('click', function (e) {
      e.preventDefault();
      modal.open();
    });
  }
}); /* global esgdprLocalization */
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./skin/assets/front/styles/application.scss":
/*!***************************************************!*\
  !*** ./skin/assets/front/styles/application.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!************************************************!*\
  !*** multi ./skin/assets/front/application.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ruzevic/projects/wordpress-plugins/eightshift-gdpr/wp-content/plugins/eightshift-gdpr/skin/assets/front/application.js */"./skin/assets/front/application.js");


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2tpbi9hc3NldHMvZnJvbnQvYXBwbGljYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc2tpbi9hc3NldHMvZnJvbnQvc2NyaXB0cy9nZHByLW1vZGFsLmpzIiwid2VicGFjazovLy8uL3NraW4vYXNzZXRzL2Zyb250L3NjcmlwdHMvaGVscGVycy9jb29raWVzLmpzIiwid2VicGFjazovLy8uL3NraW4vYXNzZXRzL2Zyb250L3NjcmlwdHMvaGVscGVycy9kZXZpY2VzLmpzIiwid2VicGFjazovLy8uL3NraW4vYXNzZXRzL2Zyb250L3NjcmlwdHMvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9za2luL2Fzc2V0cy9mcm9udC9zdHlsZXMvYXBwbGljYXRpb24uc2NzcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiJdLCJuYW1lcyI6WyJHZHByTW9kYWwiLCJvcHRpb25zIiwibW9kYWxJZCIsIm1vZGFsRWxlbWVudCIsImRlc2NyaXB0aW9uRWxlbWVudCIsImJ0bkVsZW1lbnQiLCJidG5BZHZhbmNlRWxlbWVudCIsInNjcmVlbkJhc2ljRWxlbWVudCIsInNjcmVlbkFkdmFuY2VFbGVtZW50Iiwic2hvd0FkdmFuY2VFbGVtZW50Iiwic2VsZWN0aW9uUGFyZW50RWxlbWVudCIsInNlbGVjdGlvbkVsZW1lbnQiLCJzZWxlY3Rpb25JbnB1dEVsZW1lbnQiLCJvcGVuRWxlbWVudCIsIm5vbmNlRmllbGRFbGVtZW50IiwiQUNUSVZFX0NMQVNTIiwiYWpheEFjdGlvbiIsImFqYXhVcmwiLCIkbW9kYWwiLCIkIiwiJG9wZW4iLCIkc2hvd0FkdmFuY2UiLCIkc2NyZWVuQmFzaWMiLCIkc2NyZWVuQWR2YW5jZSIsIiRkZXNjcmlwdGlvbiIsIiRzZWxlY3Rpb25QYXJlbnQiLCIkc2VsZWN0aW9uIiwiJHNlbGVjdGlvbklucHV0IiwiJGJ0biIsIiRidG5BZHZhbmNlIiwiJGJvZHkiLCIkbm9uY2VGaWVsZCIsImxldmVsIiwibG9jYWxlIiwiYWpheERhdGEiLCJhY3Rpb24iLCJub25jZSIsInZhbCIsInVybCIsInBvc3QiLCJnZXRDb29raWUiLCJzZXRTZWxlY3Rpb25Db250YWluZXJMZXZlbCIsIm9wZW4iLCJpUGhvbmUiLCJzY3JvbGxQb3NpdGlvbiIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwiZ2V0TW9kYWxCeUlkIiwiYWRkQ2xhc3MiLCJzZXRUaW1lb3V0IiwiZ2V0Qm9keUFjdGl2ZUNsYXNzIiwic2Nyb2xsIiwic2V0TGV2ZWwiLCJyZW1vdmVDbGFzcyIsInNldENvb2tpZSIsInNldE9uZVllYXIiLCJsb2NhdGlvbiIsInJlbG9hZCIsImFjdGl2ZUNsYXNzIiwic2xpZGVVcCIsInNsaWRlRG93biIsImFjdGl2ZUxldmVsIiwiYXR0ciIsIl9zY3JvbGxQb3NpdGlvbiIsImNvb2tpZXMiLCJrZXkiLCJ2YWx1ZSIsInRpbWUiLCJwYXRoIiwiZXhwaXJlcyIsIkRhdGUiLCJzZXRUaW1lIiwiZ2V0VGltZSIsInBhdGhWYWx1ZSIsImRvY3VtZW50IiwiY29va2llIiwidG9VVENTdHJpbmciLCJrZXlWYWx1ZSIsIm1hdGNoIiwiZGV2aWNlIiwiY2hlY2tJcGhvbmUiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJtb2RhbCIsImVzZ2RwckxvY2FsaXphdGlvbiIsImxlbmd0aCIsImluaXQiLCJvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0YXRzQWpheCIsImNsb3NlIiwic2hvd0FkdmFuY2VDb250ZW50IiwidG9nZ2xlRGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztB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QUUsSUFBRixFQUFRd0MsT0FBUjtBQUNBd0IsWUFBTVMsa0JBQU47QUFDRCxLQUpEOztBQU1BO0FBQ0FULFVBQU14RCxlQUFOLENBQXNCNEQsRUFBdEIsQ0FBeUIsUUFBekIsRUFBbUMsWUFBVztBQUM1QyxVQUFNdkQsUUFBUWIsRUFBRSxJQUFGLEVBQVFrQixHQUFSLEVBQWQ7O0FBRUE4QyxZQUFNVSxpQkFBTixDQUF3QjdELEtBQXhCO0FBQ0QsS0FKRDs7QUFNQTtBQUNBYixNQUFFLHVCQUFGLEVBQTJCb0UsRUFBM0IsQ0FBOEIsT0FBOUIsRUFBdUMsVUFBU0MsQ0FBVCxFQUFZO0FBQ2pEQSxRQUFFQyxjQUFGO0FBQ0FOLFlBQU16QyxJQUFOO0FBQ0QsS0FIRDtBQUlEO0FBQ0YsQ0ExREQsRSxDQUpBLCtCOzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSx3QiIsImZpbGUiOiJzY3JpcHRzL2VzZ2RwckFwcGxpY2F0aW9uLTZjMDVkMjA3NzczNjBhYWE4OWEzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL3NraW4vcHVibGljL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIvLyBMb2FkIFN0eWxlc1xuaW1wb3J0ICcuL3N0eWxlcy9hcHBsaWNhdGlvbi5zY3NzJztcblxuLy8gTG9hZCBTY3JpcHRzXG5pbXBvcnQgJy4vc2NyaXB0cy9zY3JpcHRzJztcbiIsImltcG9ydCBkZXZpY2UgZnJvbSAnLi9oZWxwZXJzL2RldmljZXMnO1xuaW1wb3J0IHtjb29raWVzfSBmcm9tICcuL2hlbHBlcnMvY29va2llcyc7XG5cbmV4cG9ydCBjbGFzcyBHZHByTW9kYWwge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgdGhpcy5tb2RhbElkID0gb3B0aW9ucy5tb2RhbElkO1xuICAgIHRoaXMubW9kYWxFbGVtZW50ID0gb3B0aW9ucy5tb2RhbEVsZW1lbnQ7XG4gICAgdGhpcy5kZXNjcmlwdGlvbkVsZW1lbnQgPSBvcHRpb25zLmRlc2NyaXB0aW9uRWxlbWVudDtcbiAgICB0aGlzLmJ0bkVsZW1lbnQgPSBvcHRpb25zLmJ0bkVsZW1lbnQ7XG4gICAgdGhpcy5idG5BZHZhbmNlRWxlbWVudCA9IG9wdGlvbnMuYnRuQWR2YW5jZUVsZW1lbnQ7XG4gICAgdGhpcy5zY3JlZW5CYXNpY0VsZW1lbnQgPSBvcHRpb25zLnNjcmVlbkJhc2ljRWxlbWVudDtcbiAgICB0aGlzLnNjcmVlbkFkdmFuY2VFbGVtZW50ID0gb3B0aW9ucy5zY3JlZW5BZHZhbmNlRWxlbWVudDtcbiAgICB0aGlzLnNob3dBZHZhbmNlRWxlbWVudCA9IG9wdGlvbnMuc2hvd0FkdmFuY2VFbGVtZW50O1xuICAgIHRoaXMuc2VsZWN0aW9uUGFyZW50RWxlbWVudCA9IG9wdGlvbnMuc2VsZWN0aW9uUGFyZW50RWxlbWVudDtcbiAgICB0aGlzLnNlbGVjdGlvbkVsZW1lbnQgPSBvcHRpb25zLnNlbGVjdGlvbkVsZW1lbnQ7XG4gICAgdGhpcy5zZWxlY3Rpb25JbnB1dEVsZW1lbnQgPSBvcHRpb25zLnNlbGVjdGlvbklucHV0RWxlbWVudDtcbiAgICB0aGlzLm9wZW5FbGVtZW50ID0gb3B0aW9ucy5vcGVuRWxlbWVudDtcbiAgICB0aGlzLm5vbmNlRmllbGRFbGVtZW50ID0gb3B0aW9ucy5ub25jZUZpZWxkRWxlbWVudDtcbiAgICB0aGlzLkFDVElWRV9DTEFTUyA9IG9wdGlvbnMuQUNUSVZFX0NMQVNTO1xuICAgIHRoaXMuYWpheEFjdGlvbiA9IG9wdGlvbnMuYWpheEFjdGlvbjtcbiAgICB0aGlzLmFqYXhVcmwgPSBvcHRpb25zLmFqYXhVcmw7XG5cbiAgICB0aGlzLiRtb2RhbCA9ICQodGhpcy5tb2RhbEVsZW1lbnQpO1xuICAgIHRoaXMuJG9wZW4gPSAkKHRoaXMub3BlbkVsZW1lbnQpO1xuICAgIHRoaXMuJHNob3dBZHZhbmNlID0gJCh0aGlzLnNob3dBZHZhbmNlRWxlbWVudCk7XG4gICAgdGhpcy4kc2NyZWVuQmFzaWMgPSAkKHRoaXMuc2NyZWVuQmFzaWNFbGVtZW50KTtcbiAgICB0aGlzLiRzY3JlZW5BZHZhbmNlID0gJCh0aGlzLnNjcmVlbkFkdmFuY2VFbGVtZW50KTtcbiAgICB0aGlzLiRkZXNjcmlwdGlvbiA9ICQodGhpcy5kZXNjcmlwdGlvbkVsZW1lbnQpO1xuICAgIHRoaXMuJHNlbGVjdGlvblBhcmVudCA9ICQodGhpcy5zZWxlY3Rpb25QYXJlbnRFbGVtZW50KTtcbiAgICB0aGlzLiRzZWxlY3Rpb24gPSAkKHRoaXMuc2VsZWN0aW9uRWxlbWVudCk7XG4gICAgdGhpcy4kc2VsZWN0aW9uSW5wdXQgPSAkKHRoaXMuc2VsZWN0aW9uSW5wdXRFbGVtZW50KTtcbiAgICB0aGlzLiRidG4gPSAkKHRoaXMuYnRuRWxlbWVudCk7XG4gICAgdGhpcy4kYnRuQWR2YW5jZSA9ICQodGhpcy5idG5BZHZhbmNlRWxlbWVudCk7XG4gICAgdGhpcy4kYm9keSA9ICQoJ2h0bWwsIGJvZHknKTtcbiAgICB0aGlzLiRub25jZUZpZWxkID0gJCh0aGlzLm5vbmNlRmllbGRFbGVtZW50KTtcblxuICAgIHRoaXMubGV2ZWwgPSAnMCc7XG4gIH1cblxuICBzZXQgc2Nyb2xsUG9zaXRpb24oc2Nyb2xsUG9zaXRpb24pIHtcbiAgICB0aGlzLl9zY3JvbGxQb3NpdGlvbiA9IHNjcm9sbFBvc2l0aW9uO1xuICB9XG5cbiAgZ2V0IHNjcm9sbFBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9zY3JvbGxQb3NpdGlvbjtcbiAgfVxuXG4gIHN0YXRzQWpheChsZXZlbCwgbG9jYWxlKSB7XG4gICAgaWYgKHR5cGVvZiBsZXZlbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGxvY2FsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBhamF4RGF0YSA9IHtcbiAgICAgIGFjdGlvbjogdGhpcy5hamF4QWN0aW9uLFxuICAgICAgbm9uY2U6IHRoaXMuJG5vbmNlRmllbGQudmFsKCksXG4gICAgICB1cmw6IHRoaXMuYWpheFVybCxcbiAgICAgIGxldmVsLFxuICAgICAgbG9jYWxlLFxuICAgIH07XG5cbiAgICAkLnBvc3QoYWpheERhdGEudXJsLCBhamF4RGF0YSk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIGNvbnN0IGxldmVsID0gY29va2llcy5nZXRDb29raWUodGhpcy5tb2RhbElkKTtcbiAgICB0aGlzLmxldmVsID0gKGxldmVsID09PSBudWxsKSA/IHRoaXMubGV2ZWwgOiBsZXZlbDtcbiAgICB0aGlzLnNldFNlbGVjdGlvbkNvbnRhaW5lckxldmVsKCk7XG5cbiAgICBpZiAobGV2ZWwgPT09IG51bGwpIHtcbiAgICAgIHRoaXMub3Blbih0aGlzLm1vZGFsSWQpO1xuICAgIH1cbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgaWYgKGRldmljZS5pUGhvbmUoKSkge1xuICAgICAgdGhpcy5zY3JvbGxQb3NpdGlvbiA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICB9XG5cbiAgICB0aGlzLmdldE1vZGFsQnlJZCh0aGlzLm1vZGFsSWQpLmFkZENsYXNzKHRoaXMuQUNUSVZFX0NMQVNTKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy4kYm9keS5hZGRDbGFzcyh0aGlzLmdldEJvZHlBY3RpdmVDbGFzcygpKTtcbiAgICB9LCAzMDApO1xuICB9XG5cbiAgY2xvc2UobGV2ZWwpIHtcbiAgICBpZiAoZGV2aWNlLmlQaG9uZSgpKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsKDAsIHRoaXMuc2Nyb2xsUG9zaXRpb24pO1xuICAgIH1cblxuICAgIHRoaXMuc2V0TGV2ZWwobGV2ZWwpO1xuICAgIHRoaXMuZ2V0TW9kYWxCeUlkKHRoaXMubW9kYWxJZCkucmVtb3ZlQ2xhc3ModGhpcy5BQ1RJVkVfQ0xBU1MpO1xuICAgIHRoaXMuJGJvZHkucmVtb3ZlQ2xhc3ModGhpcy5nZXRCb2R5QWN0aXZlQ2xhc3MoKSk7XG4gIH1cblxuICBzZXRMZXZlbChsZXZlbCkge1xuICAgIGNvb2tpZXMuc2V0Q29va2llKHRoaXMubW9kYWxJZCwgbGV2ZWwsIGNvb2tpZXMuc2V0T25lWWVhcigpLCAnLycpO1xuXG4gICAgaWYgKHRoaXMubGV2ZWwgIT09IGxldmVsKSB7XG4gICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9XG4gIH1cblxuICBnZXRNb2RhbEJ5SWQoKSB7XG4gICAgcmV0dXJuICQoYCR7dGhpcy5tb2RhbEVsZW1lbnR9W2RhdGEtbW9kYWw9XCIke3RoaXMubW9kYWxJZH1cIl1gKTtcbiAgfVxuXG4gIGdldEJvZHlBY3RpdmVDbGFzcygpIHtcbiAgICBsZXQgYWN0aXZlQ2xhc3MgPSAnJztcblxuICAgIC8vIEZvciBJcGhvbmUgYW5kIGlQYWQgY2hlY2sgYW5kIGFkZCBkaWZmZXJlbnQgc3R5bGVcblxuICAgIGlmIChkZXZpY2UuaVBob25lKCkpIHtcbiAgICAgIGFjdGl2ZUNsYXNzID0gJ3Utbm8tc2Nyb2xsLWlvcyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFjdGl2ZUNsYXNzID0gJ3Utbm8tc2Nyb2xsJztcbiAgICB9XG5cbiAgICByZXR1cm4gYWN0aXZlQ2xhc3M7XG4gIH1cblxuICBzaG93QWR2YW5jZUNvbnRlbnQoKSB7XG4gICAgdGhpcy4kc2NyZWVuQmFzaWMuc2xpZGVVcCgpO1xuICAgIHRoaXMuJHNjcmVlbkFkdmFuY2Uuc2xpZGVEb3duKCk7XG4gIH1cblxuICBzZXRTZWxlY3Rpb25Db250YWluZXJMZXZlbCgpIHtcbiAgICBjb25zdCBhY3RpdmVMZXZlbCA9ICQoYCR7dGhpcy5zZWxlY3Rpb25FbGVtZW50fS4ke3RoaXMuQUNUSVZFX0NMQVNTfWApLmF0dHIoJ2RhdGEtbGV2ZWwnKTtcbiAgICB0aGlzLiRzZWxlY3Rpb25QYXJlbnQuYXR0cignZGF0YS1sZXZlbCcsIGFjdGl2ZUxldmVsKTtcbiAgfVxuXG4gIHRvZ2dsZURlc2NyaXB0aW9uKGxldmVsKSB7XG4gICAgaWYgKHR5cGVvZiBsZXZlbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLiRkZXNjcmlwdGlvbi5yZW1vdmVDbGFzcyh0aGlzLkFDVElWRV9DTEFTUyk7XG4gICAgdGhpcy4kc2VsZWN0aW9uLnJlbW92ZUNsYXNzKHRoaXMuQUNUSVZFX0NMQVNTKTtcblxuICAgICQoYCR7dGhpcy5kZXNjcmlwdGlvbkVsZW1lbnR9W2RhdGEtbGV2ZWw9XCIke2xldmVsfVwiXWApLmFkZENsYXNzKHRoaXMuQUNUSVZFX0NMQVNTKTtcbiAgICAkKGAke3RoaXMuc2VsZWN0aW9uRWxlbWVudH1bZGF0YS1sZXZlbD1cIiR7bGV2ZWx9XCJdYCkuYWRkQ2xhc3ModGhpcy5BQ1RJVkVfQ0xBU1MpO1xuICAgIHRoaXMuJGJ0bkFkdmFuY2UuYXR0cignZGF0YS1sZXZlbCcsIGxldmVsKTtcbiAgICB0aGlzLnNldFNlbGVjdGlvbkNvbnRhaW5lckxldmVsKCk7XG4gIH1cbn1cbiIsIlxuZXhwb3J0IGNvbnN0IGNvb2tpZXMgPSB7XG4gIHNldENvb2tpZShrZXksIHZhbHVlLCB0aW1lLCBwYXRoKSB7XG4gICAgY29uc3QgZXhwaXJlcyA9IG5ldyBEYXRlKCk7XG4gICAgZXhwaXJlcy5zZXRUaW1lKGV4cGlyZXMuZ2V0VGltZSgpICsgKHRpbWUpKTtcbiAgICBsZXQgcGF0aFZhbHVlID0gJyc7XG5cbiAgICBpZiAodHlwZW9mIHBhdGggIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBwYXRoVmFsdWUgPSBgcGF0aD0ke3BhdGh9O2A7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuY29va2llID0gYCR7a2V5fT0ke3ZhbHVlfTske3BhdGhWYWx1ZX1leHBpcmVzPSR7ZXhwaXJlcy50b1VUQ1N0cmluZygpfWA7XG4gIH0sXG4gIGdldENvb2tpZShrZXkpIHtcbiAgICBjb25zdCBrZXlWYWx1ZSA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChgKF58OykgPyR7a2V5fT0oW147XSopKDt8JClgKTtcbiAgICByZXR1cm4ga2V5VmFsdWUgPyBrZXlWYWx1ZVsyXSA6IG51bGw7XG4gIH0sXG4gIHNldE9uZVllYXIoKSB7XG4gICAgcmV0dXJuIDMxNTM2MDAwMDAwO1xuICB9LFxufTtcbiIsImNvbnN0IGRldmljZSA9IHtcbiAgaVBob25lKCkge1xuICAgIGxldCBjaGVja0lwaG9uZSA9IGZhbHNlO1xuXG4gICAgaWYgKChuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUGhvbmUvaSkpIHx8IChuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUG9kL2kpKSB8fCAobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVBhZC9pKSkpIHtcbiAgICAgIGNoZWNrSXBob25lID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hlY2tJcGhvbmU7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBkZXZpY2U7XG4iLCIvKiBnbG9iYWwgZXNnZHByTG9jYWxpemF0aW9uICovXG5cbmltcG9ydCB7R2Rwck1vZGFsfSBmcm9tICcuL2dkcHItbW9kYWwnO1xuXG4kKGZ1bmN0aW9uKCkge1xuICBjb25zdCBtb2RhbCA9IG5ldyBHZHByTW9kYWwoe1xuICAgIG1vZGFsSWQ6ICdnZHByJyxcbiAgICBtb2RhbEVsZW1lbnQ6ICcuanMtbW9kYWwtZ2RwcicsXG4gICAgZGVzY3JpcHRpb25FbGVtZW50OiAnLmpzLW1vZGFsLWdkcHItZGVzY3JpcHRpb24nLFxuICAgIGJ0bkVsZW1lbnQ6ICcuanMtbW9kYWwtZ2Rwci1idG4nLFxuICAgIGJ0bkFkdmFuY2VFbGVtZW50OiAnLmpzLW1vZGFsLWdkcHItYnRuLWFkdmFuY2UnLFxuICAgIHNjcmVlbkJhc2ljRWxlbWVudDogJy5qcy1tb2RhbC1nZHByLXNjcmVlbi1iYXNpYycsXG4gICAgc2NyZWVuQWR2YW5jZUVsZW1lbnQ6ICcuanMtbW9kYWwtZ2Rwci1zY3JlZW4tYWR2YW5jZScsXG4gICAgc2hvd0FkdmFuY2VFbGVtZW50OiAnLmpzLW1vZGFsLWdkcHItc2hvdy1hZHZhbmNlJyxcbiAgICBzZWxlY3Rpb25QYXJlbnRFbGVtZW50OiAnLmpzLW1vZGFsLWdkcHItc2VsZWN0aW9uLWNvbnRhaW5lcicsXG4gICAgc2VsZWN0aW9uRWxlbWVudDogJy5qcy1tb2RhbC1nZHByLXNlbGVjdGlvbicsXG4gICAgc2VsZWN0aW9uSW5wdXRFbGVtZW50OiAnLmpzLW1vZGFsLWdkcHItc2VsZWN0aW9uLWlucHV0JyxcbiAgICBvcGVuRWxlbWVudDogJy5qcy1tb2RhbC1nZHByLW9wZW4nLFxuICAgIEFDVElWRV9DTEFTUzogJ2lzLWFjdGl2ZScsXG5cbiAgICBhamF4QWN0aW9uOiAnc3RhdHNfdXBkYXRlJyxcbiAgICBhamF4VXJsOiBlc2dkcHJMb2NhbGl6YXRpb24uYWpheFVybCxcbiAgICBub25jZUZpZWxkRWxlbWVudDogJyNlc2dkcHJfc3RhdHMnLFxuICB9KTtcblxuICBpZiAobW9kYWwuJG1vZGFsLmxlbmd0aCkge1xuICAgIG1vZGFsLmluaXQoKTtcblxuICAgIG1vZGFsLiRidG4ub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgbGV2ZWwgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtbGV2ZWwnKTtcblxuICAgICAgbW9kYWwuc3RhdHNBamF4KGxldmVsLCBlc2dkcHJMb2NhbGl6YXRpb24ubG9jYWxlKTtcbiAgICAgIG1vZGFsLmNsb3NlKGxldmVsKTtcbiAgICB9KTtcblxuICAgIC8vIE9uIG9wZW4gZGVmYXVsdCBsaW5rLlxuICAgIG1vZGFsLiRvcGVuLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIG1vZGFsLm9wZW4oKTtcbiAgICB9KTtcblxuICAgIC8vIE9uIGFkdmFuY2Ugb3B0aW9ucyBidXR0b24gY2xpY2suXG4gICAgbW9kYWwuJHNob3dBZHZhbmNlLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICQodGhpcykuc2xpZGVVcCgpO1xuICAgICAgbW9kYWwuc2hvd0FkdmFuY2VDb250ZW50KCk7XG4gICAgfSk7XG5cbiAgICAvLyBPbiBhZHZhbmNlIHNlbGVjdGlvbiB2YWx1ZSBjaGFuZ2UuXG4gICAgbW9kYWwuJHNlbGVjdGlvbklucHV0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IGxldmVsID0gJCh0aGlzKS52YWwoKTtcblxuICAgICAgbW9kYWwudG9nZ2xlRGVzY3JpcHRpb24obGV2ZWwpO1xuICAgIH0pO1xuXG4gICAgLy8gT24gdXJsIG9wZW4gbW9kYWwuXG4gICAgJCgnYVtocmVmPVwiI2dkcHItbW9kYWxcIl0nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBtb2RhbC5vcGVuKCk7XG4gICAgfSk7XG4gIH1cbn0pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7Il0sInNvdXJjZVJvb3QiOiIifQ==