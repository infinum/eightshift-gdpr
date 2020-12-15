/* eslint-disable camelcase */

import { bind } from 'decko';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { apiFetch } = wp;

const {
	Button,
	ExternalLink,
	TextareaControl,
	TextControl,
	CheckboxControl,
	PanelBody,
	PanelRow,
	Spinner,
	ToggleControl,
	SelectControl,
	Snackbar,
} = wp.components;

const {
	render,
	Fragment,
	Component,
	createInterpolateElement
} = wp.element;

const defaultState = {
	isLoading: true,
	isApiRequestOver: true,
	isSaving: false,
	isSaved: false,
	hasErrors: false,
	errors: {},
	apiResponse: '',
};

class App extends Component {
	constructor() {
		super(...arguments);

		this.state = defaultState;

		this.settings = {};
	}

	componentDidMount() {
		wp.api.loadPromise.done(() => {
			if (this.state.isLoading) {
				this.settings = new wp.api.models.Settings();

				this.settings.fetch().then(res => {

					this.setState({
						isLoading: false,
					});
				});
			}
		});
	}

	@bind
	setStateSynchronous(stateUpdate) {
		return new Promise(resolve => {
			this.setState(stateUpdate, () => resolve());
		})
	}

	@bind
	async updateOptions() {
		await this.setStateSynchronous(
			state => ({isSaving: true, errors: {}})
		);

		// Create options object.
		const options = [];

		this.settings.save(options, {
			success: (model, res) => {



				setTimeout(() => {
					this.setState({
						isSaved: false
					});
				}, 3000);
			},
			error: (model, res) => {
				const errors = res.responseJSON.data.params;

				this.setState({
					errors: errors,
					isSaving: false,
					isSaved: true,
					hasErrors: true,
				});

				const target = document.querySelector(`[name=${Object.keys(errors)[0]}]`);

				window.scrollTo({
					top: target.offsetTop - 30,
					left: 0,
					behavior: 'smooth',
				});

				setTimeout(() => {
					this.setState({
						isSaved: false
					});
				}, 3000);
			}
		});
	}

	renderSnackbar() {
		return (
			<Snackbar className={this.state.isSaved ? 'is-visible' : 'is-hidden'}>
				{
					this.state.hasErrors ?
						__('Errors happened during saving', 'eightshift-gdpr') :
						__('Settings saved', 'eightshift-gdpr')
				}
			</Snackbar>
		)
	}

	objectHasEmptyProperties(object) {
		for (const key in object) {
			if (object.hasOwnProperty(key)) {
				if (object[key] != null && object[key] !== '' && typeof(object[key]) !== 'undefined') {
					return false;
				}
			}
		}

		return true;
	}

	renderError(type) {
		if (this.state.errors.hasOwnProperty(type)) {
			return (
				<p className='components-base-control__error'>
					{__('Validation error: ', 'eightshift-gdpr') + this.state.errors[type]}
				</p>
			)
		}
	}

	hasErrorClass(type) {
		return this.state.errors.hasOwnProperty(type) ? 'has-error' : '';
	}

	render() {
		if (this.state.isLoading) {
			return (
				<Fragment>
					<div className='options-wrapper is-loading'>
						<Spinner/>
					</div>
				</Fragment>
			);
		}

		const paymentGateways = this.state.solo_api_available_gateways;

		return (
			<Fragment>
				{this.renderNotification()}
				<div className='options-wrapper'>
					<PanelBody
						title={__('Basic screen', 'eightshift-gdpr')}
						initialOpen={true}
					>
						<PanelRow>

						</PanelRow>
					</PanelBody>
					<PanelBody
						title={__('Advanced screen', 'eightshift-gdpr')}
						initialOpen={true}
					>
						<PanelRow>

						</PanelRow>
					</PanelBody>
					<PanelBody
						title={__('Genral settings', 'eightshift-gdpr')}
						initialOpen={true}
					>
						<PanelRow>

						</PanelRow>
					</PanelBody>

					<div className='options-wrapper__item'>
						<Button
							isPrimary
							isLarge
							disabled={this.state.isSaving}
							onClick={this.updateOptions}
						>
							{__('Save settings', 'eightshift-gdpr')}
						</Button>
						{this.state.isSaving ? <Spinner /> : ''}
						{this.renderSnackbar()}
					</div>
				</div>
				<div className="options-wrapper options-wrapper--separated">
					<PanelBody
						title={__('Statistics', 'eightshift-gdpr')}
						initialOpen={false}
					>
						<PanelRow>

						</PanelRow>
					</PanelBody>
				</div>
			</Fragment>
		);
	}
}

render(
	<App/>,
	document.getElementById('eightshift-gdpr-settings-page')
);
