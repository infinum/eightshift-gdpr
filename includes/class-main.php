<?php
/**
 * The file that defines the core plugin class
 *
 * A class definition that includes attributes and functions used across both the
 * public-facing side of the site and the admin area.
 *
 * @since   1.0.0
 * @package Eightshift_Gdpr\Includes
 */

namespace Eightshift_Gdpr\Includes;

use Eightshift_Gdpr\Admin\Admin;
use Eightshift_Gdpr\Front\Front;
use Eightshift_Gdpr\Helpers\General_Helper;
use Eightshift_Gdpr\Includes\Config;

/**
 * The main start class.
 *
 * This is used to define admin-specific hooks
 *
 * Also maintains the unique identifier of this plugin as well as the current
 * version of the plugin.
 */
class Main extends Config {

  /**
   * Loader variable for hooks
   *
   * @var Loader $loader Maintains and registers all hooks for the plugin.
   *
   * @since 1.0.0
   */
  protected $loader;

  /**
   * Initialize class
   * Load hooks and define some global variables.
   *
   * @since 1.0.0
   */
  public function __construct() {
    $this->load_dependencies();
    $this->set_locale();
    $this->set_assets_manifest_data();
    $this->define_admin_hooks();
    $this->define_front_hooks();
  }

  /**
   * General Helper class instance
   *
   * @since 1.0.0
   *
   * @return class
   */
  public function general_helper() {
    return new General_Helper();
  }

  /**
   * Load the required dependencies.
   *
   * Create an instance of the loader which will be used to register the hooks
   * with WordPress.
   *
   * @since 1.0.0
   */
  private function load_dependencies() {
    $this->loader = new Loader();
  }

  /**
   * Define the locale for this plugin for internationalization.
   *
   * Uses the Eightshift_Gdpr_i18n class in order to set the domain and to register the hook
   * with WordPress.
   *
   * @since 1.0.0
   */
  private function set_locale() {
    $plugin_i18n = new Internationalization( $this->general_helper() );

    $this->loader->add_action( 'init', $plugin_i18n, 'load_plugin_textdomain' );
  }

  /**
   * Register all of the hooks related to the admin area functionality
   * of the plugin.
   *
   * @since 1.0.0
   */
  private function define_admin_hooks() {
    $admin = new Admin( $this->general_helper() );

    $this->loader->add_action( 'admin_menu', $admin, 'register_settings_page' );
    $this->loader->add_action( 'admin_init', $admin, 'register_settings' );

    $this->loader->add_filter( 'option_page_capability_' . static::OPTIONS_NAME, $admin, 'permission_level', 10 );

    $this->loader->add_filter( 'plugin_action_links_eightshift-gdpr/eightshift-gdpr.php', $admin, 'add_action_links' );

  }

  /**
   * Register all of the hooks related to the front area functionality
   * of the plugin.
   *
   * @since 1.0.0
   */
  private function define_front_hooks() {
    $front = new Front( $this->general_helper() );

    $this->loader->add_action( 'wp_enqueue_scripts', $front, 'enqueue_scripts' );
    $this->loader->add_action( 'wp_enqueue_scripts', $front, 'enqueue_styles' );

    $this->loader->add_action( 'wp_footer', $front, 'modal' );

    $this->loader->add_action( 'template_redirect', $front, 'remove_cookies' );

    $this->loader->add_action( 'wp_ajax_stats_update', $front, 'stats_update' );
    $this->loader->add_action( 'wp_ajax_nopriv_stats_update', $front, 'stats_update' );

  }

  /**
   * Run the loader to execute all of the hooks with WordPress.
   *
   * @since 1.0.0
   */
  public function run() {
    $this->loader->run();
  }

  /**
   * Define global variable to save memory when parsing manifest on every load.
   *
   * @since 1.0.0
   */
  public function set_assets_manifest_data() {
    $response = wp_remote_get( ESGDPR_ASSETS_PUBLIC_URL . 'manifest.json' );

    if ( ! is_array( $response ) && is_wp_error( $response ) ) {
      return;
    }

    define( 'ESGDPR_ASSETS_MANIFEST', (string) wp_remote_retrieve_body( $response ) );
  }
}
