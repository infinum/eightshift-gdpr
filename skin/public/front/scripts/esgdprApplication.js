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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2tpbi9hc3NldHMvZnJvbnQvYXBwbGljYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc2tpbi9hc3NldHMvZnJvbnQvc2NyaXB0cy9nZHByLW1vZGFsLmpzIiwid2VicGFjazovLy8uL3NraW4vYXNzZXRzL2Zyb250L3NjcmlwdHMvaGVscGVycy9jb29raWVzLmpzIiwid2VicGFjazovLy8uL3NraW4vYXNzZXRzL2Zyb250L3NjcmlwdHMvaGVscGVycy9kZXZpY2VzLmpzIiwid2VicGFjazovLy8uL3NraW4vYXNzZXRzL2Zyb250L3NjcmlwdHMvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9za2luL2Fzc2V0cy9mcm9udC9zdHlsZXMvYXBwbGljYXRpb24uc2Nzcz82YTRlIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIl0sIm5hbWVzIjpbIkdkcHJNb2RhbCIsIm9wdGlvbnMiLCJtb2RhbElkIiwibW9kYWxFbGVtZW50IiwiZGVzY3JpcHRpb25FbGVtZW50IiwiYnRuRWxlbWVudCIsImJ0bkFkdmFuY2VFbGVtZW50Iiwic2NyZWVuQmFzaWNFbGVtZW50Iiwic2NyZWVuQWR2YW5jZUVsZW1lbnQiLCJzaG93QWR2YW5jZUVsZW1lbnQiLCJzZWxlY3Rpb25QYXJlbnRFbGVtZW50Iiwic2VsZWN0aW9uRWxlbWVudCIsInNlbGVjdGlvbklucHV0RWxlbWVudCIsIm9wZW5FbGVtZW50Iiwibm9uY2VGaWVsZEVsZW1lbnQiLCJBQ1RJVkVfQ0xBU1MiLCJhamF4QWN0aW9uIiwiYWpheFVybCIsIiRtb2RhbCIsIiQiLCIkb3BlbiIsIiRzaG93QWR2YW5jZSIsIiRzY3JlZW5CYXNpYyIsIiRzY3JlZW5BZHZhbmNlIiwiJGRlc2NyaXB0aW9uIiwiJHNlbGVjdGlvblBhcmVudCIsIiRzZWxlY3Rpb24iLCIkc2VsZWN0aW9uSW5wdXQiLCIkYnRuIiwiJGJ0bkFkdmFuY2UiLCIkYm9keSIsIiRub25jZUZpZWxkIiwibGV2ZWwiLCJsb2NhbGUiLCJhamF4RGF0YSIsImFjdGlvbiIsIm5vbmNlIiwidmFsIiwidXJsIiwicG9zdCIsImdldENvb2tpZSIsInNldFNlbGVjdGlvbkNvbnRhaW5lckxldmVsIiwib3BlbiIsImlQaG9uZSIsInNjcm9sbFBvc2l0aW9uIiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJnZXRNb2RhbEJ5SWQiLCJhZGRDbGFzcyIsInNldFRpbWVvdXQiLCJnZXRCb2R5QWN0aXZlQ2xhc3MiLCJzY3JvbGwiLCJzZXRMZXZlbCIsInJlbW92ZUNsYXNzIiwic2V0Q29va2llIiwic2V0T25lWWVhciIsImxvY2F0aW9uIiwicmVsb2FkIiwiYWN0aXZlQ2xhc3MiLCJzbGlkZVVwIiwic2xpZGVEb3duIiwiYWN0aXZlTGV2ZWwiLCJhdHRyIiwiX3Njcm9sbFBvc2l0aW9uIiwiY29va2llcyIsImtleSIsInZhbHVlIiwidGltZSIsInBhdGgiLCJleHBpcmVzIiwiRGF0ZSIsInNldFRpbWUiLCJnZXRUaW1lIiwicGF0aFZhbHVlIiwiZG9jdW1lbnQiLCJjb29raWUiLCJ0b1VUQ1N0cmluZyIsImtleVZhbHVlIiwibWF0Y2giLCJkZXZpY2UiLCJjaGVja0lwaG9uZSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsIm1vZGFsIiwiZXNnZHByTG9jYWxpemF0aW9uIiwibGVuZ3RoIiwiaW5pdCIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RhdHNBamF4IiwiY2xvc2UiLCJzaG93QWR2YW5jZUNvbnRlbnQiLCJ0b2dnbGVEZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxh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dEUsUUFBRSxJQUFGLEVBQVF3QyxPQUFSO0FBQ0F3QixZQUFNUyxrQkFBTjtBQUNELEtBSkQ7O0FBTUE7QUFDQVQsVUFBTXhELGVBQU4sQ0FBc0I0RCxFQUF0QixDQUF5QixRQUF6QixFQUFtQyxZQUFXO0FBQzVDLFVBQU12RCxRQUFRYixFQUFFLElBQUYsRUFBUWtCLEdBQVIsRUFBZDs7QUFFQThDLFlBQU1VLGlCQUFOLENBQXdCN0QsS0FBeEI7QUFDRCxLQUpEOztBQU1BO0FBQ0FiLE1BQUUsdUJBQUYsRUFBMkJvRSxFQUEzQixDQUE4QixPQUE5QixFQUF1QyxVQUFTQyxDQUFULEVBQVk7QUFDakRBLFFBQUVDLGNBQUY7QUFDQU4sWUFBTXpDLElBQU47QUFDRCxLQUhEO0FBSUQ7QUFDRixDQTFERCxFLENBSkEsK0I7Ozs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLHdCIiwiZmlsZSI6InNjcmlwdHMvZXNnZHByQXBwbGljYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvc2tpbi9wdWJsaWMvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8vIExvYWQgU3R5bGVzXG5pbXBvcnQgJy4vc3R5bGVzL2FwcGxpY2F0aW9uLnNjc3MnO1xuXG4vLyBMb2FkIFNjcmlwdHNcbmltcG9ydCAnLi9zY3JpcHRzL3NjcmlwdHMnO1xuIiwiaW1wb3J0IGRldmljZSBmcm9tICcuL2hlbHBlcnMvZGV2aWNlcyc7XG5pbXBvcnQge2Nvb2tpZXN9IGZyb20gJy4vaGVscGVycy9jb29raWVzJztcblxuZXhwb3J0IGNsYXNzIEdkcHJNb2RhbCB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICB0aGlzLm1vZGFsSWQgPSBvcHRpb25zLm1vZGFsSWQ7XG4gICAgdGhpcy5tb2RhbEVsZW1lbnQgPSBvcHRpb25zLm1vZGFsRWxlbWVudDtcbiAgICB0aGlzLmRlc2NyaXB0aW9uRWxlbWVudCA9IG9wdGlvbnMuZGVzY3JpcHRpb25FbGVtZW50O1xuICAgIHRoaXMuYnRuRWxlbWVudCA9IG9wdGlvbnMuYnRuRWxlbWVudDtcbiAgICB0aGlzLmJ0bkFkdmFuY2VFbGVtZW50ID0gb3B0aW9ucy5idG5BZHZhbmNlRWxlbWVudDtcbiAgICB0aGlzLnNjcmVlbkJhc2ljRWxlbWVudCA9IG9wdGlvbnMuc2NyZWVuQmFzaWNFbGVtZW50O1xuICAgIHRoaXMuc2NyZWVuQWR2YW5jZUVsZW1lbnQgPSBvcHRpb25zLnNjcmVlbkFkdmFuY2VFbGVtZW50O1xuICAgIHRoaXMuc2hvd0FkdmFuY2VFbGVtZW50ID0gb3B0aW9ucy5zaG93QWR2YW5jZUVsZW1lbnQ7XG4gICAgdGhpcy5zZWxlY3Rpb25QYXJlbnRFbGVtZW50ID0gb3B0aW9ucy5zZWxlY3Rpb25QYXJlbnRFbGVtZW50O1xuICAgIHRoaXMuc2VsZWN0aW9uRWxlbWVudCA9IG9wdGlvbnMuc2VsZWN0aW9uRWxlbWVudDtcbiAgICB0aGlzLnNlbGVjdGlvbklucHV0RWxlbWVudCA9IG9wdGlvbnMuc2VsZWN0aW9uSW5wdXRFbGVtZW50O1xuICAgIHRoaXMub3BlbkVsZW1lbnQgPSBvcHRpb25zLm9wZW5FbGVtZW50O1xuICAgIHRoaXMubm9uY2VGaWVsZEVsZW1lbnQgPSBvcHRpb25zLm5vbmNlRmllbGRFbGVtZW50O1xuICAgIHRoaXMuQUNUSVZFX0NMQVNTID0gb3B0aW9ucy5BQ1RJVkVfQ0xBU1M7XG4gICAgdGhpcy5hamF4QWN0aW9uID0gb3B0aW9ucy5hamF4QWN0aW9uO1xuICAgIHRoaXMuYWpheFVybCA9IG9wdGlvbnMuYWpheFVybDtcblxuICAgIHRoaXMuJG1vZGFsID0gJCh0aGlzLm1vZGFsRWxlbWVudCk7XG4gICAgdGhpcy4kb3BlbiA9ICQodGhpcy5vcGVuRWxlbWVudCk7XG4gICAgdGhpcy4kc2hvd0FkdmFuY2UgPSAkKHRoaXMuc2hvd0FkdmFuY2VFbGVtZW50KTtcbiAgICB0aGlzLiRzY3JlZW5CYXNpYyA9ICQodGhpcy5zY3JlZW5CYXNpY0VsZW1lbnQpO1xuICAgIHRoaXMuJHNjcmVlbkFkdmFuY2UgPSAkKHRoaXMuc2NyZWVuQWR2YW5jZUVsZW1lbnQpO1xuICAgIHRoaXMuJGRlc2NyaXB0aW9uID0gJCh0aGlzLmRlc2NyaXB0aW9uRWxlbWVudCk7XG4gICAgdGhpcy4kc2VsZWN0aW9uUGFyZW50ID0gJCh0aGlzLnNlbGVjdGlvblBhcmVudEVsZW1lbnQpO1xuICAgIHRoaXMuJHNlbGVjdGlvbiA9ICQodGhpcy5zZWxlY3Rpb25FbGVtZW50KTtcbiAgICB0aGlzLiRzZWxlY3Rpb25JbnB1dCA9ICQodGhpcy5zZWxlY3Rpb25JbnB1dEVsZW1lbnQpO1xuICAgIHRoaXMuJGJ0biA9ICQodGhpcy5idG5FbGVtZW50KTtcbiAgICB0aGlzLiRidG5BZHZhbmNlID0gJCh0aGlzLmJ0bkFkdmFuY2VFbGVtZW50KTtcbiAgICB0aGlzLiRib2R5ID0gJCgnaHRtbCwgYm9keScpO1xuICAgIHRoaXMuJG5vbmNlRmllbGQgPSAkKHRoaXMubm9uY2VGaWVsZEVsZW1lbnQpO1xuXG4gICAgdGhpcy5sZXZlbCA9ICcwJztcbiAgfVxuXG4gIHNldCBzY3JvbGxQb3NpdGlvbihzY3JvbGxQb3NpdGlvbikge1xuICAgIHRoaXMuX3Njcm9sbFBvc2l0aW9uID0gc2Nyb2xsUG9zaXRpb247XG4gIH1cblxuICBnZXQgc2Nyb2xsUG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Njcm9sbFBvc2l0aW9uO1xuICB9XG5cbiAgc3RhdHNBamF4KGxldmVsLCBsb2NhbGUpIHtcbiAgICBpZiAodHlwZW9mIGxldmVsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgbG9jYWxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGFqYXhEYXRhID0ge1xuICAgICAgYWN0aW9uOiB0aGlzLmFqYXhBY3Rpb24sXG4gICAgICBub25jZTogdGhpcy4kbm9uY2VGaWVsZC52YWwoKSxcbiAgICAgIHVybDogdGhpcy5hamF4VXJsLFxuICAgICAgbGV2ZWwsXG4gICAgICBsb2NhbGUsXG4gICAgfTtcblxuICAgICQucG9zdChhamF4RGF0YS51cmwsIGFqYXhEYXRhKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBjb29raWVzLmdldENvb2tpZSh0aGlzLm1vZGFsSWQpO1xuICAgIHRoaXMubGV2ZWwgPSAobGV2ZWwgPT09IG51bGwpID8gdGhpcy5sZXZlbCA6IGxldmVsO1xuICAgIHRoaXMuc2V0U2VsZWN0aW9uQ29udGFpbmVyTGV2ZWwoKTtcblxuICAgIGlmIChsZXZlbCA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5vcGVuKHRoaXMubW9kYWxJZCk7XG4gICAgfVxuICB9XG5cbiAgb3BlbigpIHtcbiAgICBpZiAoZGV2aWNlLmlQaG9uZSgpKSB7XG4gICAgICB0aGlzLnNjcm9sbFBvc2l0aW9uID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgIH1cblxuICAgIHRoaXMuZ2V0TW9kYWxCeUlkKHRoaXMubW9kYWxJZCkuYWRkQ2xhc3ModGhpcy5BQ1RJVkVfQ0xBU1MpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLiRib2R5LmFkZENsYXNzKHRoaXMuZ2V0Qm9keUFjdGl2ZUNsYXNzKCkpO1xuICAgIH0sIDMwMCk7XG4gIH1cblxuICBjbG9zZShsZXZlbCkge1xuICAgIGlmIChkZXZpY2UuaVBob25lKCkpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGwoMCwgdGhpcy5zY3JvbGxQb3NpdGlvbik7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRMZXZlbChsZXZlbCk7XG4gICAgdGhpcy5nZXRNb2RhbEJ5SWQodGhpcy5tb2RhbElkKS5yZW1vdmVDbGFzcyh0aGlzLkFDVElWRV9DTEFTUyk7XG4gICAgdGhpcy4kYm9keS5yZW1vdmVDbGFzcyh0aGlzLmdldEJvZHlBY3RpdmVDbGFzcygpKTtcbiAgfVxuXG4gIHNldExldmVsKGxldmVsKSB7XG4gICAgY29va2llcy5zZXRDb29raWUodGhpcy5tb2RhbElkLCBsZXZlbCwgY29va2llcy5zZXRPbmVZZWFyKCksICcvJyk7XG5cbiAgICBpZiAodGhpcy5sZXZlbCAhPT0gbGV2ZWwpIHtcbiAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cbiAgfVxuXG4gIGdldE1vZGFsQnlJZCgpIHtcbiAgICByZXR1cm4gJChgJHt0aGlzLm1vZGFsRWxlbWVudH1bZGF0YS1tb2RhbD1cIiR7dGhpcy5tb2RhbElkfVwiXWApO1xuICB9XG5cbiAgZ2V0Qm9keUFjdGl2ZUNsYXNzKCkge1xuICAgIGxldCBhY3RpdmVDbGFzcyA9ICcnO1xuXG4gICAgLy8gRm9yIElwaG9uZSBhbmQgaVBhZCBjaGVjayBhbmQgYWRkIGRpZmZlcmVudCBzdHlsZVxuXG4gICAgaWYgKGRldmljZS5pUGhvbmUoKSkge1xuICAgICAgYWN0aXZlQ2xhc3MgPSAndS1uby1zY3JvbGwtaW9zJztcbiAgICB9IGVsc2Uge1xuICAgICAgYWN0aXZlQ2xhc3MgPSAndS1uby1zY3JvbGwnO1xuICAgIH1cblxuICAgIHJldHVybiBhY3RpdmVDbGFzcztcbiAgfVxuXG4gIHNob3dBZHZhbmNlQ29udGVudCgpIHtcbiAgICB0aGlzLiRzY3JlZW5CYXNpYy5zbGlkZVVwKCk7XG4gICAgdGhpcy4kc2NyZWVuQWR2YW5jZS5zbGlkZURvd24oKTtcbiAgfVxuXG4gIHNldFNlbGVjdGlvbkNvbnRhaW5lckxldmVsKCkge1xuICAgIGNvbnN0IGFjdGl2ZUxldmVsID0gJChgJHt0aGlzLnNlbGVjdGlvbkVsZW1lbnR9LiR7dGhpcy5BQ1RJVkVfQ0xBU1N9YCkuYXR0cignZGF0YS1sZXZlbCcpO1xuICAgIHRoaXMuJHNlbGVjdGlvblBhcmVudC5hdHRyKCdkYXRhLWxldmVsJywgYWN0aXZlTGV2ZWwpO1xuICB9XG5cbiAgdG9nZ2xlRGVzY3JpcHRpb24obGV2ZWwpIHtcbiAgICBpZiAodHlwZW9mIGxldmVsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuJGRlc2NyaXB0aW9uLnJlbW92ZUNsYXNzKHRoaXMuQUNUSVZFX0NMQVNTKTtcbiAgICB0aGlzLiRzZWxlY3Rpb24ucmVtb3ZlQ2xhc3ModGhpcy5BQ1RJVkVfQ0xBU1MpO1xuXG4gICAgJChgJHt0aGlzLmRlc2NyaXB0aW9uRWxlbWVudH1bZGF0YS1sZXZlbD1cIiR7bGV2ZWx9XCJdYCkuYWRkQ2xhc3ModGhpcy5BQ1RJVkVfQ0xBU1MpO1xuICAgICQoYCR7dGhpcy5zZWxlY3Rpb25FbGVtZW50fVtkYXRhLWxldmVsPVwiJHtsZXZlbH1cIl1gKS5hZGRDbGFzcyh0aGlzLkFDVElWRV9DTEFTUyk7XG4gICAgdGhpcy4kYnRuQWR2YW5jZS5hdHRyKCdkYXRhLWxldmVsJywgbGV2ZWwpO1xuICAgIHRoaXMuc2V0U2VsZWN0aW9uQ29udGFpbmVyTGV2ZWwoKTtcbiAgfVxufVxuIiwiXG5leHBvcnQgY29uc3QgY29va2llcyA9IHtcbiAgc2V0Q29va2llKGtleSwgdmFsdWUsIHRpbWUsIHBhdGgpIHtcbiAgICBjb25zdCBleHBpcmVzID0gbmV3IERhdGUoKTtcbiAgICBleHBpcmVzLnNldFRpbWUoZXhwaXJlcy5nZXRUaW1lKCkgKyAodGltZSkpO1xuICAgIGxldCBwYXRoVmFsdWUgPSAnJztcblxuICAgIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHBhdGhWYWx1ZSA9IGBwYXRoPSR7cGF0aH07YDtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5jb29raWUgPSBgJHtrZXl9PSR7dmFsdWV9OyR7cGF0aFZhbHVlfWV4cGlyZXM9JHtleHBpcmVzLnRvVVRDU3RyaW5nKCl9YDtcbiAgfSxcbiAgZ2V0Q29va2llKGtleSkge1xuICAgIGNvbnN0IGtleVZhbHVlID0gZG9jdW1lbnQuY29va2llLm1hdGNoKGAoXnw7KSA/JHtrZXl9PShbXjtdKikoO3wkKWApO1xuICAgIHJldHVybiBrZXlWYWx1ZSA/IGtleVZhbHVlWzJdIDogbnVsbDtcbiAgfSxcbiAgc2V0T25lWWVhcigpIHtcbiAgICByZXR1cm4gMzE1MzYwMDAwMDA7XG4gIH0sXG59O1xuIiwiY29uc3QgZGV2aWNlID0ge1xuICBpUGhvbmUoKSB7XG4gICAgbGV0IGNoZWNrSXBob25lID0gZmFsc2U7XG5cbiAgICBpZiAoKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lQaG9uZS9pKSkgfHwgKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lQb2QvaSkpIHx8IChuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUGFkL2kpKSkge1xuICAgICAgY2hlY2tJcGhvbmUgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBjaGVja0lwaG9uZTtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRldmljZTtcbiIsIi8qIGdsb2JhbCBlc2dkcHJMb2NhbGl6YXRpb24gKi9cblxuaW1wb3J0IHtHZHByTW9kYWx9IGZyb20gJy4vZ2Rwci1tb2RhbCc7XG5cbiQoZnVuY3Rpb24oKSB7XG4gIGNvbnN0IG1vZGFsID0gbmV3IEdkcHJNb2RhbCh7XG4gICAgbW9kYWxJZDogJ2dkcHInLFxuICAgIG1vZGFsRWxlbWVudDogJy5qcy1tb2RhbC1nZHByJyxcbiAgICBkZXNjcmlwdGlvbkVsZW1lbnQ6ICcuanMtbW9kYWwtZ2Rwci1kZXNjcmlwdGlvbicsXG4gICAgYnRuRWxlbWVudDogJy5qcy1tb2RhbC1nZHByLWJ0bicsXG4gICAgYnRuQWR2YW5jZUVsZW1lbnQ6ICcuanMtbW9kYWwtZ2Rwci1idG4tYWR2YW5jZScsXG4gICAgc2NyZWVuQmFzaWNFbGVtZW50OiAnLmpzLW1vZGFsLWdkcHItc2NyZWVuLWJhc2ljJyxcbiAgICBzY3JlZW5BZHZhbmNlRWxlbWVudDogJy5qcy1tb2RhbC1nZHByLXNjcmVlbi1hZHZhbmNlJyxcbiAgICBzaG93QWR2YW5jZUVsZW1lbnQ6ICcuanMtbW9kYWwtZ2Rwci1zaG93LWFkdmFuY2UnLFxuICAgIHNlbGVjdGlvblBhcmVudEVsZW1lbnQ6ICcuanMtbW9kYWwtZ2Rwci1zZWxlY3Rpb24tY29udGFpbmVyJyxcbiAgICBzZWxlY3Rpb25FbGVtZW50OiAnLmpzLW1vZGFsLWdkcHItc2VsZWN0aW9uJyxcbiAgICBzZWxlY3Rpb25JbnB1dEVsZW1lbnQ6ICcuanMtbW9kYWwtZ2Rwci1zZWxlY3Rpb24taW5wdXQnLFxuICAgIG9wZW5FbGVtZW50OiAnLmpzLW1vZGFsLWdkcHItb3BlbicsXG4gICAgQUNUSVZFX0NMQVNTOiAnaXMtYWN0aXZlJyxcblxuICAgIGFqYXhBY3Rpb246ICdzdGF0c191cGRhdGUnLFxuICAgIGFqYXhVcmw6IGVzZ2RwckxvY2FsaXphdGlvbi5hamF4VXJsLFxuICAgIG5vbmNlRmllbGRFbGVtZW50OiAnI2VzZ2Rwcl9zdGF0cycsXG4gIH0pO1xuXG4gIGlmIChtb2RhbC4kbW9kYWwubGVuZ3RoKSB7XG4gICAgbW9kYWwuaW5pdCgpO1xuXG4gICAgbW9kYWwuJGJ0bi5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBsZXZlbCA9ICQodGhpcykuYXR0cignZGF0YS1sZXZlbCcpO1xuXG4gICAgICBtb2RhbC5zdGF0c0FqYXgobGV2ZWwsIGVzZ2RwckxvY2FsaXphdGlvbi5sb2NhbGUpO1xuICAgICAgbW9kYWwuY2xvc2UobGV2ZWwpO1xuICAgIH0pO1xuXG4gICAgLy8gT24gb3BlbiBkZWZhdWx0IGxpbmsuXG4gICAgbW9kYWwuJG9wZW4ub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbW9kYWwub3BlbigpO1xuICAgIH0pO1xuXG4gICAgLy8gT24gYWR2YW5jZSBvcHRpb25zIGJ1dHRvbiBjbGljay5cbiAgICBtb2RhbC4kc2hvd0FkdmFuY2Uub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgJCh0aGlzKS5zbGlkZVVwKCk7XG4gICAgICBtb2RhbC5zaG93QWR2YW5jZUNvbnRlbnQoKTtcbiAgICB9KTtcblxuICAgIC8vIE9uIGFkdmFuY2Ugc2VsZWN0aW9uIHZhbHVlIGNoYW5nZS5cbiAgICBtb2RhbC4kc2VsZWN0aW9uSW5wdXQub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgbGV2ZWwgPSAkKHRoaXMpLnZhbCgpO1xuXG4gICAgICBtb2RhbC50b2dnbGVEZXNjcmlwdGlvbihsZXZlbCk7XG4gICAgfSk7XG5cbiAgICAvLyBPbiB1cmwgb3BlbiBtb2RhbC5cbiAgICAkKCdhW2hyZWY9XCIjZ2Rwci1tb2RhbFwiXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIG1vZGFsLm9wZW4oKTtcbiAgICB9KTtcbiAgfVxufSk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiXSwic291cmNlUm9vdCI6IiJ9