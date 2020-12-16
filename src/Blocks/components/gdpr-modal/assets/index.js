import domReady from '@wordpress/dom-ready';

domReady(() => {
	const modal = document.querySelector('.js-modal-gdpr');

	if (modal) {
		import('./gdpr-modal').then(({ GdprModal }) => {
			const modalGdpr = new GdprModal({
				screenBasicElement: '.js-modal-gdpr-screen-basic',
				screenAdvanceElement: '.js-modal-gdpr-screen-advance',
				hideAdvanceElement: '.js-modal-gdpr-hide-advance',
				showAdvanceElement: '.js-modal-gdpr-show-advance',
			});

			modalGdpr.init();
		});
	}
});
