<?php

/**
 * This file will add the plugin settings link to the plugins page
 *
 * @package Eightshift\EightshiftGdpr\Admin;
 */

declare(strict_types=1);

namespace Eightshift\EightshiftGdpr\Admin;

use Eightshift\EightshiftGdpr\AdminMenus\OptionsPage;
use EightshiftGdprVendor\EightshiftLibs\Services\ServiceInterface;

/**
 * PluginsPage class.
 */
class PluginsPage implements ServiceInterface
{

	public const PLUGIN_LINK_HOOK = 'plugin_action_links_eightshift-gdpr/eightshift-gdpr.php';

	/**
	 * Register all the hooks
	 *
	 * @return void
	 */
	public function register(): void
	{
		add_action(self::PLUGIN_LINK_HOOK, [$this, 'addActionLink']);
	}

	/**
	 * Add plugin settings link on plugins page
	 *
	 * @param array $links Plugin action links.
	 *
	 * @return array Updated links that will be shown on the plugins install page.
	 */
	public function addActionLink(array $links): array
	{
		$parentPage = OptionsPage::PARENT_PAGE;
		$page = OptionsPage::MENU_SLUG;

		$links[] = '<a href="' . admin_url("{$parentPage}?page={$page}") . '">' . esc_html__('Settings', 'eightshift-gdpr') . '</a>';

		return $links;
	}
}
