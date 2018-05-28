import device from './helpers/devices';
import {cookies} from './helpers/cookies';

export class GdprModal {
  constructor(options) {
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

  set scrollPosition(scrollPosition) {
    this._scrollPosition = scrollPosition;
  }

  get scrollPosition() {
    return this._scrollPosition;
  }

  statsAjax(level) {
    if (typeof level === 'undefined') {
      return;
    }

    const ajaxData = {
      action: this.ajaxAction,
      nonce: this.$nonceField.val(),
      url: this.ajaxUrl,
      level,
    };

    $.post(ajaxData.url, ajaxData);
  }

  init() {
    const level = cookies.getCookie(this.modalId);
    this.level = (level === null) ? this.level : level;
    this.setSelectionContainerLevel();

    if (level === null) {
      this.open(this.modalId);
    }
  }

  open() {
    if (device.iPhone()) {
      this.scrollPosition = window.pageYOffset;
    }

    this.getModalById(this.modalId).addClass(this.ACTIVE_CLASS);

    setTimeout(() => {
      this.$body.addClass(this.getBodyActiveClass());
    }, 300);
  }

  close(level) {
    if (device.iPhone()) {
      window.scroll(0, this.scrollPosition);
    }

    this.setLevel(level);
    this.getModalById(this.modalId).removeClass(this.ACTIVE_CLASS);
    this.$body.removeClass(this.getBodyActiveClass());
  }

  setLevel(level) {
    cookies.setCookie(this.modalId, level, cookies.setOneYear(), '/');

    if (this.level !== level) {
      location.reload();
    }
  }

  getModalById() {
    return $(`${this.modalElement}[data-modal="${this.modalId}"]`);
  }

  getBodyActiveClass() {
    let activeClass = '';

    // For Iphone and iPad check and add different style

    if (device.iPhone()) {
      activeClass = 'u-no-scroll-ios';
    } else {
      activeClass = 'u-no-scroll';
    }

    return activeClass;
  }

  showAdvanceContent() {
    this.$screenBasic.slideUp();
    this.$screenAdvance.slideDown();
  }

  setSelectionContainerLevel() {
    const activeLevel = $(`${this.selectionElement}.${this.ACTIVE_CLASS}`).attr('data-level');
    this.$selectionParent.attr('data-level', activeLevel);
  }

  toggleDescription(level) {
    if (typeof level === 'undefined') {
      return;
    }

    this.$description.removeClass(this.ACTIVE_CLASS);
    this.$selection.removeClass(this.ACTIVE_CLASS);

    $(`${this.descriptionElement}[data-level="${level}"]`).addClass(this.ACTIVE_CLASS);
    $(`${this.selectionElement}[data-level="${level}"]`).addClass(this.ACTIVE_CLASS);
    this.$btnAdvance.attr('data-level', level);
    this.setSelectionContainerLevel();
  }
}
