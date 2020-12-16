export class GdprModal {

	// TO-DO: Rewrite the old JS written in jQuery in vanilla JS for the frontend modal.
	constructor(options) {
		this.$screenBasic = document.querySelector(options.screenBasicElement);
		this.$screenAdvance = document.querySelector(options.screenAdvanceElement);
		this.$hideAdvance = document.querySelector(options.hideAdvanceElement);
		this.$showAdvance = document.querySelector(options.showAdvanceElement);
	}

	init() {
		this.$hideAdvance.addEventListener('click', () => {
			$(this.$screenAdvance).slideUp();
			$(this.$screenBasic).slideDown();
			$(this.$showAdvance).show();
		});
	}
}
