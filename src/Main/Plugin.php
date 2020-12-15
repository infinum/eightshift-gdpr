<?php

/**
 * The file that defines the main start class.
 *
 * A class definition that includes attributes and functions used across both the
 * theme-facing side of the site and the admin area.
 *
 * @package EightshiftBoilerplate\Main
 */

declare(strict_types=1);

namespace Eightshift\EightshiftGdpr\Main;

use EightshiftGdprVendor\EightshiftLibs\Exception\PluginActivationFailure;
use EightshiftGdprVendor\EightshiftLibs\Main\AbstractMain;
use EightshiftGdprVendor\EightshiftLibs\Plugin\HasActivationInterface;
use EightshiftGdprVendor\EightshiftLibs\Plugin\HasDeactivationInterface;
use Exception;

/**
 * The main start class.
 *
 * This is used to define admin-specific hooks, and
 * theme-facing site hooks.
 *
 * Also maintains the unique identifier of this theme as well as the current
 * version of the theme.
 */
class Plugin extends AbstractMain
{

	/**
	 * Array of instantiated services.
	 *
	 * @var array[]
	 */
	private $services = [];

	/**
	 * Activate the plugin.
	 *
	 * @throws PluginActivationFailure|Exception If a condition for plugin activation isn't met.
	 */
	public function activate(): void
	{
		if (!function_exists('is_plugin_active_for_network')) {
			include ABSPATH . '/wp-admin/includes/plugin.php';
		}

		if (version_compare((string)PHP_VERSION_ID, '70200', '<')) {
			\deactivate_plugins(plugin_basename(__FILE__));

			$errorMessage = \esc_html__('This plugin requires PHP 7.2 or greater to function.', 'eightshift-gdpr');

			throw PluginActivationFailure::activationMessage($errorMessage);
		}

		$this->registerServices();

		// Activate that which can be activated.
		foreach ($this->services as $service) {
			if ($service instanceof HasActivationInterface) {
				$service->activate();
			}
		}

		\flush_rewrite_rules();
	}

	/**
	 * Deactivate the plugin.
	 *
	 * @throws Exception If a condition for plugin deactivation isn't met.
	 */
	public function deactivate(): void
	{
		$this->registerServices();

		// Deactivate that which can be deactivated.
		foreach ($this->services as $service) {
			if ($service instanceof HasDeactivationInterface) {
				$service->deactivate();
			}
		}

		\flush_rewrite_rules();
	}

	/**
	 * Register the project with the WordPress system.
	 *
	 * The register_service method will call the register() method in every service class,
	 * which holds the actions and filters - effectively replacing the need to manually add
	 * them in one place.
	 *
	 * @return void
	 */
	public function register(): void
	{
		\add_action('plugins_loaded', [$this, 'registerServices']);
	}
}
