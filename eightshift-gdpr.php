<?php

/**
 * Plugin main file starting point
 *
 * @since             1.0.0
 * @package           eightshift-gdpr
 *
 * @wordpress-plugin
 * Plugin Name:       Eightshift GDPR
 * Plugin URI:        https://github.com/infinum/eightshift-gdpr
 * Description:       Simple and elegant plugin to display GDPR modal that manages your site cookies.
 * Version:           1.1.0
 * Author:            Eightshift team <team@eightshift.com>
 * Author URI:        https://eightshift.com
 * License:           MIT
 * License URI:       https://opensource.org/licenses/MIT
 * Text Domain:       eightshift-gdpr
 * Requires at least: 5.3
 * Requires PHP:      7.3
 */

namespace Eightshift\EightshiftGdpr;

use Eightshift\EightshiftGdpr\Main\PluginFactory;
use EightshiftGdprVendor\EightshiftLibs\Cli\Cli;
use EightshiftGdprVendor\EightshiftLibs\Exception\PluginActivationFailure;

/*
 * Make sure this file is only run from within WordPress.
 */
if (!defined('ABSPATH')) {
	$errorMessage = \esc_html__('You cannot access this file outside WordPress.', 'eightshift-gdpr');
	throw PluginActivationFailure::activationMessage($errorMessage);
}

/**
 * Include the autoloader so we can dynamically include the rest of the classes.
 *
 * @since 1.0.0
 */
$loader = require dirname(__FILE__) . '/vendor/autoload.php';
$psr4Prefixes = $loader->getPrefixesPsr4();

/**
 * The code that runs during plugin activation.
 *
 * @since 1.1.0
 */
\register_activation_hook(
	__FILE__,
	function () use ($psr4Prefixes) {
		PluginFactory::create($psr4Prefixes, __NAMESPACE__)->activate();
	}
);

/**
 * The code that runs during plugin deactivation.
 *
 * @since 1.1.0
 */
\register_deactivation_hook(
	__FILE__,
	function () use ($psr4Prefixes) {
		PluginFactory::create($psr4Prefixes, __NAMESPACE__)->deactivate();
	}
);

/**
 * Begins plugin execution.
 *
 * @since 1.1.0
 */
PluginFactory::create($psr4Prefixes, __NAMESPACE__)->register();

/**
 * Run all WP-CLI commands.
 */
if (class_exists(Cli::class)) {
	(new Cli())->load('boilerplate');
}
