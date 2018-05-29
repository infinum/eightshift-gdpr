/* global esgdprLocalization */

import {GdprModal} from './gdpr-modal';

$(function() {
  const modal = new GdprModal({
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
    nonceFieldElement: '#esgdpr_stats',
  });

  if (modal.$modal.length) {
    modal.init();

    modal.$btn.on('click', function(e) {
      e.preventDefault();
      const level = $(this).attr('data-level');

      modal.statsAjax(level, esgdprLocalization.locale);
      modal.close(level);
    });

    // On open default link.
    modal.$open.on('click', function(e) {
      e.preventDefault();
      modal.open();
    });

    // On advance options button click.
    modal.$showAdvance.on('click', function(e) {
      e.preventDefault();
      $(this).slideUp();
      modal.showAdvanceContent();
    });

    // On advance selection value change.
    modal.$selectionInput.on('change', function() {
      const level = $(this).val();

      modal.toggleDescription(level);
    });

    // On url open modal.
    $('a[href="#gdpr-modal"]').on('click', function(e) {
      e.preventDefault();
      modal.open();
    });
  }
});
