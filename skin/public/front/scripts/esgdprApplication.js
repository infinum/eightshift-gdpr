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
    value: function statsAjax(level) {
      if (typeof level === 'undefined') {
        return;
      }

      var ajaxData = {
        action: this.ajaxAction,
        nonce: this.$nonceField.val(),
        url: this.ajaxUrl,
        level: level
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

      modal.statsAjax(level);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2tpbi9hc3NldHMvZnJvbnQvYXBwbGljYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc2tpbi9hc3NldHMvZnJvbnQvc2NyaXB0cy9nZHByLW1vZGFsLmpzIiwid2VicGFjazovLy8uL3NraW4vYXNzZXRzL2Zyb250L3NjcmlwdHMvaGVscGVycy9jb29raWVzLmpzIiwid2VicGFjazovLy8uL3NraW4vYXNzZXRzL2Zyb250L3NjcmlwdHMvaGVscGVycy9kZXZpY2VzLmpzIiwid2VicGFjazovLy8uL3NraW4vYXNzZXRzL2Zyb250L3NjcmlwdHMvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9za2luL2Fzc2V0cy9mcm9udC9zdHlsZXMvYXBwbGljYXRpb24uc2Nzcz82YTRlIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIl0sIm5hbWVzIjpbIkdkcHJNb2RhbCIsIm9wdGlvbnMiLCJtb2RhbElkIiwibW9kYWxFbGVtZW50IiwiZGVzY3JpcHRpb25FbGVtZW50IiwiYnRuRWxlbWVudCIsImJ0bkFkdmFuY2VFbGVtZW50Iiwic2NyZWVuQmFzaWNFbGVtZW50Iiwic2NyZWVuQWR2YW5jZUVsZW1lbnQiLCJzaG93QWR2YW5jZUVsZW1lbnQiLCJzZWxlY3Rpb25QYXJlbnRFbGVtZW50Iiwic2VsZWN0aW9uRWxlbWVudCIsInNlbGVjdGlvbklucHV0RWxlbWVudCIsIm9wZW5FbGVtZW50Iiwibm9uY2VGaWVsZEVsZW1lbnQiLCJBQ1RJVkVfQ0xBU1MiLCJhamF4QWN0aW9uIiwiYWpheFVybCIsIiRtb2RhbCIsIiQiLCIkb3BlbiIsIiRzaG93QWR2YW5jZSIsIiRzY3JlZW5CYXNpYyIsIiRzY3JlZW5BZHZhbmNlIiwiJGRlc2NyaXB0aW9uIiwiJHNlbGVjdGlvblBhcmVudCIsIiRzZWxlY3Rpb24iLCIkc2VsZWN0aW9uSW5wdXQiLCIkYnRuIiwiJGJ0bkFkdmFuY2UiLCIkYm9keSIsIiRub25jZUZpZWxkIiwibGV2ZWwiLCJhamF4RGF0YSIsImFjdGlvbiIsIm5vbmNlIiwidmFsIiwidXJsIiwicG9zdCIsImdldENvb2tpZSIsInNldFNlbGVjdGlvbkNvbnRhaW5lckxldmVsIiwib3BlbiIsImlQaG9uZSIsInNjcm9sbFBvc2l0aW9uIiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJnZXRNb2RhbEJ5SWQiLCJhZGRDbGFzcyIsInNldFRpbWVvdXQiLCJnZXRCb2R5QWN0aXZlQ2xhc3MiLCJzY3JvbGwiLCJzZXRMZXZlbCIsInJlbW92ZUNsYXNzIiwic2V0Q29va2llIiwic2V0T25lWWVhciIsImxvY2F0aW9uIiwicmVsb2FkIiwiYWN0aXZlQ2xhc3MiLCJzbGlkZVVwIiwic2xpZGVEb3duIiwiYWN0aXZlTGV2ZWwiLCJhdHRyIiwiX3Njcm9sbFBvc2l0aW9uIiwiY29va2llcyIsImtleSIsInZhbHVlIiwidGltZSIsInBhdGgiLCJleHBpcmVzIiwiRGF0ZSIsInNldFRpbWUiLCJnZXRUaW1lIiwicGF0aFZhbHVlIiwiZG9jdW1lbnQiLCJjb29raWUiLCJ0b1VUQ1N0cmluZyIsImtleVZhbHVlIiwibWF0Y2giLCJkZXZpY2UiLCJjaGVja0lwaG9uZSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsIm1vZGFsIiwiZXNnZHByTG9jYWxpemF0aW9uIiwibGVuZ3RoIiwiaW5pdCIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RhdHNBamF4IiwiY2xvc2UiLCJzaG93QWR2YW5jZUNvbnRlbnQiLCJ0b2dnbGVEZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7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QW1DLFlBQVc7QUFDNUMsVUFBTXRELFFBQVFiLEVBQUUsSUFBRixFQUFRaUIsR0FBUixFQUFkOztBQUVBOEMsWUFBTVUsaUJBQU4sQ0FBd0I1RCxLQUF4QjtBQUNELEtBSkQ7O0FBTUE7QUFDQWIsTUFBRSx1QkFBRixFQUEyQm1FLEVBQTNCLENBQThCLE9BQTlCLEVBQXVDLFVBQVNDLENBQVQsRUFBWTtBQUNqREEsUUFBRUMsY0FBRjtBQUNBTixZQUFNekMsSUFBTjtBQUNELEtBSEQ7QUFJRDtBQUNGLENBMURELEUsQ0FKQSwrQjs7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsd0IiLCJmaWxlIjoic2NyaXB0cy9lc2dkcHJBcHBsaWNhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9za2luL3B1YmxpYy9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLy8gTG9hZCBTdHlsZXNcbmltcG9ydCAnLi9zdHlsZXMvYXBwbGljYXRpb24uc2Nzcyc7XG5cbi8vIExvYWQgU2NyaXB0c1xuaW1wb3J0ICcuL3NjcmlwdHMvc2NyaXB0cyc7XG4iLCJpbXBvcnQgZGV2aWNlIGZyb20gJy4vaGVscGVycy9kZXZpY2VzJztcbmltcG9ydCB7Y29va2llc30gZnJvbSAnLi9oZWxwZXJzL2Nvb2tpZXMnO1xuXG5leHBvcnQgY2xhc3MgR2Rwck1vZGFsIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHRoaXMubW9kYWxJZCA9IG9wdGlvbnMubW9kYWxJZDtcbiAgICB0aGlzLm1vZGFsRWxlbWVudCA9IG9wdGlvbnMubW9kYWxFbGVtZW50O1xuICAgIHRoaXMuZGVzY3JpcHRpb25FbGVtZW50ID0gb3B0aW9ucy5kZXNjcmlwdGlvbkVsZW1lbnQ7XG4gICAgdGhpcy5idG5FbGVtZW50ID0gb3B0aW9ucy5idG5FbGVtZW50O1xuICAgIHRoaXMuYnRuQWR2YW5jZUVsZW1lbnQgPSBvcHRpb25zLmJ0bkFkdmFuY2VFbGVtZW50O1xuICAgIHRoaXMuc2NyZWVuQmFzaWNFbGVtZW50ID0gb3B0aW9ucy5zY3JlZW5CYXNpY0VsZW1lbnQ7XG4gICAgdGhpcy5zY3JlZW5BZHZhbmNlRWxlbWVudCA9IG9wdGlvbnMuc2NyZWVuQWR2YW5jZUVsZW1lbnQ7XG4gICAgdGhpcy5zaG93QWR2YW5jZUVsZW1lbnQgPSBvcHRpb25zLnNob3dBZHZhbmNlRWxlbWVudDtcbiAgICB0aGlzLnNlbGVjdGlvblBhcmVudEVsZW1lbnQgPSBvcHRpb25zLnNlbGVjdGlvblBhcmVudEVsZW1lbnQ7XG4gICAgdGhpcy5zZWxlY3Rpb25FbGVtZW50ID0gb3B0aW9ucy5zZWxlY3Rpb25FbGVtZW50O1xuICAgIHRoaXMuc2VsZWN0aW9uSW5wdXRFbGVtZW50ID0gb3B0aW9ucy5zZWxlY3Rpb25JbnB1dEVsZW1lbnQ7XG4gICAgdGhpcy5vcGVuRWxlbWVudCA9IG9wdGlvbnMub3BlbkVsZW1lbnQ7XG4gICAgdGhpcy5ub25jZUZpZWxkRWxlbWVudCA9IG9wdGlvbnMubm9uY2VGaWVsZEVsZW1lbnQ7XG4gICAgdGhpcy5BQ1RJVkVfQ0xBU1MgPSBvcHRpb25zLkFDVElWRV9DTEFTUztcbiAgICB0aGlzLmFqYXhBY3Rpb24gPSBvcHRpb25zLmFqYXhBY3Rpb247XG4gICAgdGhpcy5hamF4VXJsID0gb3B0aW9ucy5hamF4VXJsO1xuXG4gICAgdGhpcy4kbW9kYWwgPSAkKHRoaXMubW9kYWxFbGVtZW50KTtcbiAgICB0aGlzLiRvcGVuID0gJCh0aGlzLm9wZW5FbGVtZW50KTtcbiAgICB0aGlzLiRzaG93QWR2YW5jZSA9ICQodGhpcy5zaG93QWR2YW5jZUVsZW1lbnQpO1xuICAgIHRoaXMuJHNjcmVlbkJhc2ljID0gJCh0aGlzLnNjcmVlbkJhc2ljRWxlbWVudCk7XG4gICAgdGhpcy4kc2NyZWVuQWR2YW5jZSA9ICQodGhpcy5zY3JlZW5BZHZhbmNlRWxlbWVudCk7XG4gICAgdGhpcy4kZGVzY3JpcHRpb24gPSAkKHRoaXMuZGVzY3JpcHRpb25FbGVtZW50KTtcbiAgICB0aGlzLiRzZWxlY3Rpb25QYXJlbnQgPSAkKHRoaXMuc2VsZWN0aW9uUGFyZW50RWxlbWVudCk7XG4gICAgdGhpcy4kc2VsZWN0aW9uID0gJCh0aGlzLnNlbGVjdGlvbkVsZW1lbnQpO1xuICAgIHRoaXMuJHNlbGVjdGlvbklucHV0ID0gJCh0aGlzLnNlbGVjdGlvbklucHV0RWxlbWVudCk7XG4gICAgdGhpcy4kYnRuID0gJCh0aGlzLmJ0bkVsZW1lbnQpO1xuICAgIHRoaXMuJGJ0bkFkdmFuY2UgPSAkKHRoaXMuYnRuQWR2YW5jZUVsZW1lbnQpO1xuICAgIHRoaXMuJGJvZHkgPSAkKCdodG1sLCBib2R5Jyk7XG4gICAgdGhpcy4kbm9uY2VGaWVsZCA9ICQodGhpcy5ub25jZUZpZWxkRWxlbWVudCk7XG5cbiAgICB0aGlzLmxldmVsID0gJzAnO1xuICB9XG5cbiAgc2V0IHNjcm9sbFBvc2l0aW9uKHNjcm9sbFBvc2l0aW9uKSB7XG4gICAgdGhpcy5fc2Nyb2xsUG9zaXRpb24gPSBzY3JvbGxQb3NpdGlvbjtcbiAgfVxuXG4gIGdldCBzY3JvbGxQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fc2Nyb2xsUG9zaXRpb247XG4gIH1cblxuICBzdGF0c0FqYXgobGV2ZWwpIHtcbiAgICBpZiAodHlwZW9mIGxldmVsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGFqYXhEYXRhID0ge1xuICAgICAgYWN0aW9uOiB0aGlzLmFqYXhBY3Rpb24sXG4gICAgICBub25jZTogdGhpcy4kbm9uY2VGaWVsZC52YWwoKSxcbiAgICAgIHVybDogdGhpcy5hamF4VXJsLFxuICAgICAgbGV2ZWwsXG4gICAgfTtcblxuICAgICQucG9zdChhamF4RGF0YS51cmwsIGFqYXhEYXRhKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBjb29raWVzLmdldENvb2tpZSh0aGlzLm1vZGFsSWQpO1xuICAgIHRoaXMubGV2ZWwgPSAobGV2ZWwgPT09IG51bGwpID8gdGhpcy5sZXZlbCA6IGxldmVsO1xuICAgIHRoaXMuc2V0U2VsZWN0aW9uQ29udGFpbmVyTGV2ZWwoKTtcblxuICAgIGlmIChsZXZlbCA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5vcGVuKHRoaXMubW9kYWxJZCk7XG4gICAgfVxuICB9XG5cbiAgb3BlbigpIHtcbiAgICBpZiAoZGV2aWNlLmlQaG9uZSgpKSB7XG4gICAgICB0aGlzLnNjcm9sbFBvc2l0aW9uID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgIH1cblxuICAgIHRoaXMuZ2V0TW9kYWxCeUlkKHRoaXMubW9kYWxJZCkuYWRkQ2xhc3ModGhpcy5BQ1RJVkVfQ0xBU1MpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLiRib2R5LmFkZENsYXNzKHRoaXMuZ2V0Qm9keUFjdGl2ZUNsYXNzKCkpO1xuICAgIH0sIDMwMCk7XG4gIH1cblxuICBjbG9zZShsZXZlbCkge1xuICAgIGlmIChkZXZpY2UuaVBob25lKCkpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGwoMCwgdGhpcy5zY3JvbGxQb3NpdGlvbik7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRMZXZlbChsZXZlbCk7XG4gICAgdGhpcy5nZXRNb2RhbEJ5SWQodGhpcy5tb2RhbElkKS5yZW1vdmVDbGFzcyh0aGlzLkFDVElWRV9DTEFTUyk7XG4gICAgdGhpcy4kYm9keS5yZW1vdmVDbGFzcyh0aGlzLmdldEJvZHlBY3RpdmVDbGFzcygpKTtcbiAgfVxuXG4gIHNldExldmVsKGxldmVsKSB7XG4gICAgY29va2llcy5zZXRDb29raWUodGhpcy5tb2RhbElkLCBsZXZlbCwgY29va2llcy5zZXRPbmVZZWFyKCksICcvJyk7XG5cbiAgICBpZiAodGhpcy5sZXZlbCAhPT0gbGV2ZWwpIHtcbiAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cbiAgfVxuXG4gIGdldE1vZGFsQnlJZCgpIHtcbiAgICByZXR1cm4gJChgJHt0aGlzLm1vZGFsRWxlbWVudH1bZGF0YS1tb2RhbD1cIiR7dGhpcy5tb2RhbElkfVwiXWApO1xuICB9XG5cbiAgZ2V0Qm9keUFjdGl2ZUNsYXNzKCkge1xuICAgIGxldCBhY3RpdmVDbGFzcyA9ICcnO1xuXG4gICAgLy8gRm9yIElwaG9uZSBhbmQgaVBhZCBjaGVjayBhbmQgYWRkIGRpZmZlcmVudCBzdHlsZVxuXG4gICAgaWYgKGRldmljZS5pUGhvbmUoKSkge1xuICAgICAgYWN0aXZlQ2xhc3MgPSAndS1uby1zY3JvbGwtaW9zJztcbiAgICB9IGVsc2Uge1xuICAgICAgYWN0aXZlQ2xhc3MgPSAndS1uby1zY3JvbGwnO1xuICAgIH1cblxuICAgIHJldHVybiBhY3RpdmVDbGFzcztcbiAgfVxuXG4gIHNob3dBZHZhbmNlQ29udGVudCgpIHtcbiAgICB0aGlzLiRzY3JlZW5CYXNpYy5zbGlkZVVwKCk7XG4gICAgdGhpcy4kc2NyZWVuQWR2YW5jZS5zbGlkZURvd24oKTtcbiAgfVxuXG4gIHNldFNlbGVjdGlvbkNvbnRhaW5lckxldmVsKCkge1xuICAgIGNvbnN0IGFjdGl2ZUxldmVsID0gJChgJHt0aGlzLnNlbGVjdGlvbkVsZW1lbnR9LiR7dGhpcy5BQ1RJVkVfQ0xBU1N9YCkuYXR0cignZGF0YS1sZXZlbCcpO1xuICAgIHRoaXMuJHNlbGVjdGlvblBhcmVudC5hdHRyKCdkYXRhLWxldmVsJywgYWN0aXZlTGV2ZWwpO1xuICB9XG5cbiAgdG9nZ2xlRGVzY3JpcHRpb24obGV2ZWwpIHtcbiAgICBpZiAodHlwZW9mIGxldmVsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuJGRlc2NyaXB0aW9uLnJlbW92ZUNsYXNzKHRoaXMuQUNUSVZFX0NMQVNTKTtcbiAgICB0aGlzLiRzZWxlY3Rpb24ucmVtb3ZlQ2xhc3ModGhpcy5BQ1RJVkVfQ0xBU1MpO1xuXG4gICAgJChgJHt0aGlzLmRlc2NyaXB0aW9uRWxlbWVudH1bZGF0YS1sZXZlbD1cIiR7bGV2ZWx9XCJdYCkuYWRkQ2xhc3ModGhpcy5BQ1RJVkVfQ0xBU1MpO1xuICAgICQoYCR7dGhpcy5zZWxlY3Rpb25FbGVtZW50fVtkYXRhLWxldmVsPVwiJHtsZXZlbH1cIl1gKS5hZGRDbGFzcyh0aGlzLkFDVElWRV9DTEFTUyk7XG4gICAgdGhpcy4kYnRuQWR2YW5jZS5hdHRyKCdkYXRhLWxldmVsJywgbGV2ZWwpO1xuICAgIHRoaXMuc2V0U2VsZWN0aW9uQ29udGFpbmVyTGV2ZWwoKTtcbiAgfVxufVxuIiwiXG5leHBvcnQgY29uc3QgY29va2llcyA9IHtcbiAgc2V0Q29va2llKGtleSwgdmFsdWUsIHRpbWUsIHBhdGgpIHtcbiAgICBjb25zdCBleHBpcmVzID0gbmV3IERhdGUoKTtcbiAgICBleHBpcmVzLnNldFRpbWUoZXhwaXJlcy5nZXRUaW1lKCkgKyAodGltZSkpO1xuICAgIGxldCBwYXRoVmFsdWUgPSAnJztcblxuICAgIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHBhdGhWYWx1ZSA9IGBwYXRoPSR7cGF0aH07YDtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5jb29raWUgPSBgJHtrZXl9PSR7dmFsdWV9OyR7cGF0aFZhbHVlfWV4cGlyZXM9JHtleHBpcmVzLnRvVVRDU3RyaW5nKCl9YDtcbiAgfSxcbiAgZ2V0Q29va2llKGtleSkge1xuICAgIGNvbnN0IGtleVZhbHVlID0gZG9jdW1lbnQuY29va2llLm1hdGNoKGAoXnw7KSA/JHtrZXl9PShbXjtdKikoO3wkKWApO1xuICAgIHJldHVybiBrZXlWYWx1ZSA/IGtleVZhbHVlWzJdIDogbnVsbDtcbiAgfSxcbiAgc2V0T25lWWVhcigpIHtcbiAgICByZXR1cm4gMzE1MzYwMDAwMDA7XG4gIH0sXG59O1xuIiwiY29uc3QgZGV2aWNlID0ge1xuICBpUGhvbmUoKSB7XG4gICAgbGV0IGNoZWNrSXBob25lID0gZmFsc2U7XG5cbiAgICBpZiAoKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lQaG9uZS9pKSkgfHwgKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lQb2QvaSkpIHx8IChuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUGFkL2kpKSkge1xuICAgICAgY2hlY2tJcGhvbmUgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBjaGVja0lwaG9uZTtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRldmljZTtcbiIsIi8qIGdsb2JhbCBlc2dkcHJMb2NhbGl6YXRpb24gKi9cblxuaW1wb3J0IHtHZHByTW9kYWx9IGZyb20gJy4vZ2Rwci1tb2RhbCc7XG5cbiQoZnVuY3Rpb24oKSB7XG4gIGNvbnN0IG1vZGFsID0gbmV3IEdkcHJNb2RhbCh7XG4gICAgbW9kYWxJZDogJ2dkcHInLFxuICAgIG1vZGFsRWxlbWVudDogJy5qcy1tb2RhbC1nZHByJyxcbiAgICBkZXNjcmlwdGlvbkVsZW1lbnQ6ICcuanMtbW9kYWwtZ2Rwci1kZXNjcmlwdGlvbicsXG4gICAgYnRuRWxlbWVudDogJy5qcy1tb2RhbC1nZHByLWJ0bicsXG4gICAgYnRuQWR2YW5jZUVsZW1lbnQ6ICcuanMtbW9kYWwtZ2Rwci1idG4tYWR2YW5jZScsXG4gICAgc2NyZWVuQmFzaWNFbGVtZW50OiAnLmpzLW1vZGFsLWdkcHItc2NyZWVuLWJhc2ljJyxcbiAgICBzY3JlZW5BZHZhbmNlRWxlbWVudDogJy5qcy1tb2RhbC1nZHByLXNjcmVlbi1hZHZhbmNlJyxcbiAgICBzaG93QWR2YW5jZUVsZW1lbnQ6ICcuanMtbW9kYWwtZ2Rwci1zaG93LWFkdmFuY2UnLFxuICAgIHNlbGVjdGlvblBhcmVudEVsZW1lbnQ6ICcuanMtbW9kYWwtZ2Rwci1zZWxlY3Rpb24tY29udGFpbmVyJyxcbiAgICBzZWxlY3Rpb25FbGVtZW50OiAnLmpzLW1vZGFsLWdkcHItc2VsZWN0aW9uJyxcbiAgICBzZWxlY3Rpb25JbnB1dEVsZW1lbnQ6ICcuanMtbW9kYWwtZ2Rwci1zZWxlY3Rpb24taW5wdXQnLFxuICAgIG9wZW5FbGVtZW50OiAnLmpzLW1vZGFsLWdkcHItb3BlbicsXG4gICAgQUNUSVZFX0NMQVNTOiAnaXMtYWN0aXZlJyxcblxuICAgIGFqYXhBY3Rpb246ICdzdGF0c191cGRhdGUnLFxuICAgIGFqYXhVcmw6IGVzZ2RwckxvY2FsaXphdGlvbi5hamF4VXJsLFxuICAgIG5vbmNlRmllbGRFbGVtZW50OiAnI2VzZ2Rwcl9zdGF0cycsXG4gIH0pO1xuXG4gIGlmIChtb2RhbC4kbW9kYWwubGVuZ3RoKSB7XG4gICAgbW9kYWwuaW5pdCgpO1xuXG4gICAgbW9kYWwuJGJ0bi5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBsZXZlbCA9ICQodGhpcykuYXR0cignZGF0YS1sZXZlbCcpO1xuXG4gICAgICBtb2RhbC5zdGF0c0FqYXgobGV2ZWwpO1xuICAgICAgbW9kYWwuY2xvc2UobGV2ZWwpO1xuICAgIH0pO1xuXG4gICAgLy8gT24gb3BlbiBkZWZhdWx0IGxpbmsuXG4gICAgbW9kYWwuJG9wZW4ub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbW9kYWwub3BlbigpO1xuICAgIH0pO1xuXG4gICAgLy8gT24gYWR2YW5jZSBvcHRpb25zIGJ1dHRvbiBjbGljay5cbiAgICBtb2RhbC4kc2hvd0FkdmFuY2Uub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgJCh0aGlzKS5zbGlkZVVwKCk7XG4gICAgICBtb2RhbC5zaG93QWR2YW5jZUNvbnRlbnQoKTtcbiAgICB9KTtcblxuICAgIC8vIE9uIGFkdmFuY2Ugc2VsZWN0aW9uIHZhbHVlIGNoYW5nZS5cbiAgICBtb2RhbC4kc2VsZWN0aW9uSW5wdXQub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgbGV2ZWwgPSAkKHRoaXMpLnZhbCgpO1xuXG4gICAgICBtb2RhbC50b2dnbGVEZXNjcmlwdGlvbihsZXZlbCk7XG4gICAgfSk7XG5cbiAgICAvLyBPbiB1cmwgb3BlbiBtb2RhbC5cbiAgICAkKCdhW2hyZWY9XCIjZ2Rwci1tb2RhbFwiXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIG1vZGFsLm9wZW4oKTtcbiAgICB9KTtcbiAgfVxufSk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiXSwic291cmNlUm9vdCI6IiJ9