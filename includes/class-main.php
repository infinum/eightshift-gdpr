<?php
/**
 * The file that defines the core plugin class
 *
 * A class definition that includes attributes and functions used across both the
 * public-facing side of the site and the admin area.
 *
 * @since   1.0.0
 * @package eightshift-gdpr
 */

namespace Eightshift_Gdpr\Includes;

use Eightshift_Gdpr\Admin\Admin;
use Eightshift_Gdpr\Front\Front;

/**
 * The main start class.
 *
 * This is used to define admin-specific hooks
 *
 * Also maintains the unique identifier of this plugin as well as the current
 * version of the plugin.
 */
class Main {

  /**
   * Loader variable for hooks
   *
   * @var Loader $loader Maintains and registers all hooks for the plugin.
   *
   * @since 1.0.0
   */
  protected $loader;

  /**
   * Global plugin name
   *
   * @var string
   *
   * @since 1.0.0
   */
  protected $plugin_name;

  /**
   * Global plugin version
   *
   * @var string
   *
   * @since 1.0.0
   */
  protected $plugin_version;

  /**
   * Global assets version
   *
   * @var string
   *
   * @since 1.0.0
   */
  protected $assets_version;

  /**
   * Initialize class
   * Load hooks and define some global variables.
   *
   * @since 1.0.0
   */
  public function __construct() {
    if ( defined( 'EIGHTSHIFT_GDPR_VERSION' ) ) {
      $this->plugin_version = EIGHTSHIFT_GDPR_VERSION;
    } else {
      $this->plugin_version = '1.0.0';
    }

    if ( defined( 'EIGHTSHIFT_GDPR_NAME' ) ) {
      $this->plugin_name = EIGHTSHIFT_GDPR_NAME;
    } else {
      $this->plugin_name = 'eightshift-gdpr';
    }

    $this->load_dependencies();
    $this->set_locale();
    $this->define_admin_hooks();
    $this->define_front_hooks();
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
    $plugin_i18n = new Internationalization( $this->get_plugin_info() );

    $this->loader->add_action( 'init', $plugin_i18n, 'load_plugin_textdomain' );
  }

  /**
   * Register all of the hooks related to the admin area functionality
   * of the plugin.
   *
   * @since 1.0.0
   */
  private function define_admin_hooks() {
    $admin = new Admin( $this->get_plugin_info() );

    $this->loader->add_action( 'admin_menu', $admin, 'register_settings_page' );
    $this->loader->add_action( 'admin_init', $admin, 'register_settings' );

    $this->loader->add_filter( 'option_page_capability_' . $admin->options_name, $admin, 'permission_level', 10 );
  }

  /**
   * Register all of the hooks related to the front area functionality
   * of the plugin.
   *
   * @since 1.0.0
   */
  private function define_front_hooks() {
    $front = new Front( $this->get_plugin_info() );

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
   * The reference to the class that orchestrates the hooks.
   *
   * @return Loader Orchestrates the hooks.
   *
   * @since 1.0.0
   */
  public function get_loader() {
    return $this->loader;
  }

  /**
   * The name used to uniquely identify it within the context of
   * WordPress and to define internationalization functionality.
   *
   * @return string Plugin name.
   *
   * @since 1.0.0
   */
  public function get_plugin_name() {
    return $this->plugin_name;
  }

  /**
   * Retrieve the version number.
   *
   * @return string Plugin version number.
   *
   * @since 1.0.0
   */
  public function get_plugin_version() {
    return $this->plugin_version;
  }

  /**
   * Retrieve the plugin info array.
   *
   * @return array Plugin info array.
   *
   * @since 1.0.0
   */
  public function get_plugin_info() {
    return array(
        'plugin_name'    => $this->plugin_name,
        'plugin_version' => $this->plugin_version,
    );
  }

}
