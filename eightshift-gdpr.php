<?php
/**
 * Plugin main file starting point
 *
 * @since             1.0.0
 * @package           eightshift-gdpr
 *
 * @wordpress-plugin
 * Plugin Name:       Eightshift GDPR
 * Plugin URI:
 * Description:       This is plugin for GDPR on WordPress
 * Version:           1.0.0
 * Author:            Eightshift team <team@eightshift.com>
 * Author URI:
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       eightshift-gdpr
 */

namespace Eightshift_Gdpr;

use Eightshift_Gdpr\Includes\Main;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
  die;
}

/**
 * Plugins version global
 *
 * @since 1.0.0
 * @package eightshift-gdpr
 */
define( 'EIGHTSHIFT_GDPR_VERSION', '1.0.0' );

/**
 * Plugins name global
 *
 * @since 1.0.0
 * @package eightshift-gdpr
 */
define( 'EIGHTSHIFT_GDPR_NAME', 'eightshift-gdpr' );

/**
 * Cookie Name global
 *
 * @since 1.0.0
 * @package eightshift-gdpr
 */
define( 'EIGHTSHIFT_GDPR_COOKIE_NAME', 'gdpr' );

/**
 * Include the autoloader so we can dynamically include the rest of the classes.
 *
 * @since 1.0.0
 * @package eightshift-gdpr
 */
require __DIR__ . '/vendor/autoload.php';

/**
 * Include the autoloader so we can dynamically include the rest of the classes.
 *
 * @since 1.0.0
 * @package eightshift-gdpr
 */
require_once 'helpers/global-utilities.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since 1.0.0
 */
function init_plugin() {
  $plugin = new Main();
  $plugin->run();
}

init_plugin();
