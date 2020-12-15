<?php

/**
 * The file holds the code for registering options page
 *
 * @package Eightshift\EightshiftGdpr\Settings;
 */

declare(strict_types=1);

namespace Eightshift\EightshiftGdpr\AdminMenus;

use EightshiftGdprVendor\EightshiftLibs\Services\ServiceInterface;

/**
 * OptionsPage class.
 */
class OptionsPage extends AbstractPages implements ServiceInterface
{
	public const CAPABILITY = 'manage_options';
	public const PARENT_PAGE = 'options-general.php';
	public const MENU_SLUG = 'eightshift-gdpr-settings';
	public const VIEW_URI = 'views/settings-page';

	/**
	 * Register all the hooks
	 *
	 * @return void
	 */
	public function register(): void
	{
		\add_action('admin_menu', [$this, 'addSettingsPage']);
	}
	/**
	 * Add plugin options page
	 *
	 * @return void
	 */
	public function addSettingsPage(): void
	{
		\add_submenu_page(
			self::PARENT_PAGE,
			$this->getTitle(),
			$this->getMenuTitle(),
			$this->getCapability(),
			$this->getMenuSlug(),
			[$this, 'processAdminSubmenu']
		);
	}

	/**
	 * Process the admin submenu attributes and prepare rendering.
	 *
	 * The echo doesn't need to be escaped since it's escaped
	 * in the render method.
	 *
	 * @param array|string $attr Attributes as passed to the admin menu.
	 *
	 * @return void The rendered content needs to be echoed.
	 */
	public function processAdminSubmenu($attr): void
	{
		$attr = $this->processAttributes($attr);
		$attr['adminMenuId'] = $this->getMenuSlug();
		$attr['nonceField'] = $this->renderNonce();

		echo $this->render((array)$attr); // phpcs:ignore
	}

	/**
	 * @inheritDoc
	 */
	protected function getTitle(): string
	{
		return __('GDPR Settings', 'eightshift-gdpr');
	}

	/**
	 * @inheritDoc
	 */
	protected function getMenuTitle(): string
	{
		return __('GDPR Settings', 'eightshift-gdpr');
	}

	/**
	 * @inheritDoc
	 */
	protected function getCapability(): string
	{
		return self::CAPABILITY;
	}

	/**
	 * @inheritDoc
	 */
	protected function getMenuSlug(): string
	{
		return self::MENU_SLUG;
	}

	/**
	 * @inheritDoc
	 */
	protected function getViewUri(): string
	{
		return self::VIEW_URI;
	}

	/**
	 * @inheritDoc
	 */
	protected function processAttributes($attr): array
	{
		$attr = (array) $attr;

		return $attr;
	}
}
