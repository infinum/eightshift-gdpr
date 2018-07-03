<?php
/**
 * The admin-specific functionality of the plugin.
 *
 * @since   1.0.0
 * @package Eightshift_Gdpr\Admin
 */

namespace Eightshift_Gdpr\Admin;

use Eightshift_Gdpr\Helpers\General_Helper;
use Eightshift_Gdpr\Includes\Config;

/**
 * Class Admin
 */
class Admin extends Config {

  /**
   * General Helper class
   *
   * @var object General_Helper
   *
   * @since 1.0.0
   */
  public $general_helper;

  /**
   * Initialize class
   *
   * @param Helpers\General_Helper $general_helper Helper class instance.
   *
   * @since 1.0.0
   */
  public function __construct( General_Helper $general_helper ) {
    $this->general_helper = $general_helper;
  }

  /**
   * Register Setting page to sidebar navigation
   *
   * @since 1.0.0
   */
  public function register_settings_page() {

    add_menu_page(
      esc_html__( 'GDPR', 'eightshift-gdpr' ),
      esc_html__( 'GDPR', 'eightshift-gdpr' ),
      'edit_others_posts',
      static::SETTINGS_SLUG,
      '',
      'dashicons-products',
      54
    );

    add_submenu_page(
      static::SETTINGS_SLUG,
      esc_html__( 'Settings', 'eightshift-gdpr' ),
      esc_html__( 'Settings', 'eightshift-gdpr' ),
      'edit_others_posts',
      static::SETTINGS_SLUG,
      array( $this, 'get_settings_page' )
    );
  }

  /**
   * Get template view.
   *
   * @since 1.0.0
   */
  public function get_settings_page() {
    $general_helper = $this->general_helper;
    require_once plugin_dir_path( dirname( __FILE__ ) ) . 'admin/settings-pages/settings.php';
  }

  /**
   * Register options fields depending on locale.
   *
   * @since 1.0.0
   */
  public function register_settings() {
    $options = $this->general_helper->get_admin_options();

    if ( empty( $options ) ) {
      return false;
    }

    foreach ( $options as $option ) {
      register_setting( static::OPTIONS_NAME, $this->general_helper->append_locale( $option ) );
    }
  }

  /**
   * Set editor ability to edit this admin page.
   *
   * @param string $capability Add role.
   * @return string
   *
   * @since 1.0.0
   */
  public function permission_level( $capability ) {
    $default_capability = static::DEFAULT_CAPABILITY;

    if ( has_filter( 'esgdpr_set_capability' ) ) {
      $default_capability = apply_filters( 'esgdpr_set_capability', $default_capability );
    }

    return $default_capability;
  }
}
