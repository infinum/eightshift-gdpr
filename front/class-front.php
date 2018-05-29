<?php
/**
 * The front-specific functionality of the plugin.
 *
 * @since   1.0.0
 * @package eightshift-gdpr
 */

namespace Eightshift_Gdpr\Front;

use Eightshift_Gdpr\Helpers as General_Helpers;

/**
 * Class Front
 */
class Front {

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
   * @param array $plugin_info Load global plugin info.
   *
   * @since 1.0.0
   */
  public function __construct( $plugin_info = null ) {
    $this->plugin_name    = $plugin_info['plugin_name'];
    $this->plugin_version = $plugin_info['plugin_version'];

    $this->general_helper = new General_Helpers\General_Helper();
  }

  /**
   * Register the Stylesheets for the admin area.
   *
   * @since 1.0.0
   */
  public function enqueue_styles() {
    if ( ! $this->general_helper->is_gdpr_active() ) {
      return false;
    }

    if ( has_filter( 'esgdpr_set_front_styles' ) ) {
      apply_filters( 'esgdpr_set_front_styles', '' );
    } else {
      $main_style = 'skin/public/front/styles/esgdprApplication.css';
      wp_register_style( $this->plugin_name . '-style', plugin_dir_url( __DIR__ ) . $main_style, array(), $this->general_helper->get_assets_version( $main_style ) );
      wp_enqueue_style( $this->plugin_name . '-style' );
    }
  }

  /**
   * Register the JavaScript for the admin area.
   *
   * @since 1.0.0
   */
  public function enqueue_scripts() {
    if ( ! $this->general_helper->is_gdpr_active() ) {
      return false;
    }

    if ( has_filter( 'esgdpr_set_front_scripts' ) ) {
      apply_filters( 'esgdpr_set_front_scripts', '' );
    } else {
      $main_script = 'skin/public/front/scripts/esgdprApplication.js';
      wp_register_script( $this->plugin_name . '-scripts', plugin_dir_url( __DIR__ ) . $main_script, array(), $this->general_helper->get_assets_version( $main_script ), true );
      wp_enqueue_script( $this->plugin_name . '-scripts' );
    }

    wp_localize_script(
      $this->plugin_name . '-scripts', 'esgdprLocalization', array(
          'ajaxUrl' => admin_url( 'admin-ajax.php' ),
      )
    );
  }

  /**
   * Insert modal content in footer.
   *
   * @since 1.0.0
   */
  public function modal() {

    // Check if is active in options.
    if ( ! $this->general_helper->is_gdpr_active() ) {
      return false;
    }

    // Check if is bot on page and don't load modal.
    if ( $this->general_helper->is_bot() ) {
      return false;
    }

    // Populate data to variable.
    $options = $this->general_helper->get_prepared_options();
    if ( empty( $options ) ) {
      return false;
    }

    // Add helper to variable so it can be used inside the template.
    $esgdpr_general_helper = $this->general_helper;

    // Check what level is default level.
    if ( $this->is_gdpr_cookie_set() ) {
      $selected_item = (int) $this->check_level();
    } else {
      $selected_item = 2;

      // Ability to override default level.
      if ( has_filter( 'esgdpr_set_advance_default_level' ) ) {
        $selected_item = apply_filters( 'esgdpr_set_advance_default_level', $selected_item );
      }
    }

    // Load theme template if doesn't exist use plugins default template.
    $template = get_template_directory() . '/' . $this->plugin_name . '/modal.php';

    if ( ! file_exists( $template ) ) {
      $template = plugin_dir_path( dirname( __FILE__ ) ) . 'front/templates/modal.php';
    }

    require_once $template;
  }

  /**
   * Return cookie name.
   *
   * @return string
   *
   * @since  1.0.0
   */
  public function get_cookie_name() {
    $cookie_name = EIGHTSHIFT_GDPR_COOKIE_NAME;

    if ( has_filter( 'esgdpr_set_cookie_name' ) ) {
      $cookie_name = apply_filters( 'esgdpr_set_cookie_name', $cookie_name );
    }

    return $cookie_name;
  }

  /**
   * Output level of cookies set in modal.
   *
   * @return string
   *
   * @since  1.0.0
   */
  public function check_level() {
    $cookie_gdpr_level = '0';
    $cookie_name       = $this->get_cookie_name();

    if ( isset( $_COOKIE[ $cookie_name ] ) ) {
      $cookie_gdpr_level = sanitize_text_field( wp_unslash( $_COOKIE[ $cookie_name ] ) );
    }

    return $cookie_gdpr_level;
  }

  /**
   * Check if cookie is set.
   *
   * @return boolean
   *
   * @since  1.0.0
   */
  public function is_gdpr_cookie_set() {
    $cookie_name = $this->get_cookie_name();

    if ( isset( $_COOKIE[ $cookie_name ] ) ) {
      return true;
    }

    return false;
  }

  /**
   * Return all cookies from server global var.
   *
   * @return array
   *
   * @since 1.0.0
   */
  public function get_all_server_cookies() {
    $all_cookies = isset( $_SERVER['HTTP_COOKIE'] ) ? sanitize_text_field( wp_unslash( $_SERVER['HTTP_COOKIE'] ) ) : '';

    if ( $all_cookies === null || empty( $all_cookies ) ) {
      return false;
    }

    $cookies_array  = $this->general_helper->explode_input( ';', $all_cookies );
    $cookies_output = array();

    if ( ! empty( $cookies_array ) ) {
      foreach ( $cookies_array as $cookie ) {
        $cookie = explode( '=', $cookie );

        if ( ! empty( $cookie[0] ) ) {
          $cookies_output[] = $cookie[0];
        }
      }
      return $cookies_output;
    }

    return false;
  }

  /**
   * Return array of cookies per level from admin config.
   *
   * @return array
   *
   * @since 1.0.0
   */
  public function get_all_config_cookies_per_level() {
    $options = $this->general_helper->get_prepared_options();
    $items   = $this->general_helper->get_array_value( 'items', $options );

    $required      = $this->general_helper->get_array_value( 'required', $items );
    $required_list = $this->general_helper->get_array_value( 'list', $required );

    $functional      = $this->general_helper->get_array_value( 'functional', $items );
    $functional_list = $this->general_helper->get_array_value( 'list', $functional );

    $combine_options = array();

    if ( ! empty( $required_list ) ) {
      $combine_options['0'] = $this->general_helper->explode_input( ',', $required_list );
    }

    if ( ! empty( $functional_list ) ) {
      $combine_options['1'] = $this->general_helper->explode_input( ',', $functional_list );
    }

    return $combine_options;
  }

  /**
   * Provide the list of cookies to exclude depending on level.
   *
   * @return array
   *
   * @since 1.0.0
   */
  public function exclude_cookies() {
    $config_cookies = $this->get_all_config_cookies_per_level();

    $exclude_array = array( $this->get_cookie_name() );
    switch ( $this->check_level() ) {
      case '0':
        if ( array_key_exists( '0', $config_cookies ) ) {
          $exclude_array[] = $config_cookies[0];
        }
            break;

      case '1':
        if ( array_key_exists( '0', $config_cookies ) ) {
          $exclude_array[] = $config_cookies[0];
        }
        if ( array_key_exists( '1', $config_cookies ) ) {
          $exclude_array[] = $config_cookies[1];
        }
            break;
    }

    return $this->general_helper->flatten_array( $exclude_array );
  }

  /**
   * Get manual domain list from admin and expolode it to array.
   *
   * @return array
   *
   * @since 1.0.0
   */
  public function get_manual_domain_list() {
    $options = $this->general_helper->get_prepared_options();
    $domains = $this->general_helper->get_array_value( 'domains', $options );

    if ( empty( $domains ) ) {
      return false;
    }

    return $this->general_helper->explode_input( ',', $domains );
  }

  /**
   * Delete all cookies depending on the level.
   *
   * @since 1.0.0
   */
  public function remove_cookies() {
    if ( ! $this->general_helper->is_gdpr_active() ) {
      return false;
    }

    if ( is_admin() || $this->general_helper->is_login_page() || is_user_logged_in() ) {
      return false;
    }

    if ( $this->check_level() === '2' ) {
      return false;
    }

    $all_cookies        = $this->get_all_server_cookies();
    $exclude_cookies    = $this->exclude_cookies();
    $manual_domain_list = $this->get_manual_domain_list();
    $remove_time        = ( time() - 3600 );

    if ( ! $all_cookies ) {
      return false;
    }

    foreach ( $all_cookies as $item ) {
      if ( ! in_array( $item, $exclude_cookies, true ) ) {

        // Remove domain cookies.
        setcookie( $item, '', $remove_time, COOKIEPATH, COOKIE_DOMAIN );
        setcookie( $item, '', $remove_time, '/' );

        // Remove cookies that have different domain got from admin list.
        if ( ! empty( $manual_domain_list ) ) {
          foreach ( $manual_domain_list as $domain ) {
            setcookie( $item, '', $remove_time, COOKIEPATH, $domain );
          }
        }
      }
    }
  }

  /**
   * Update stats Ajax callback
   *
   * @since 1.0.0
   */
  public function stats_update() {
    if ( ! isset( $_POST['nonce'] ) || ! wp_verify_nonce( sanitize_key( $_POST['nonce'] ), 'esgdpr_stats_action' ) ) {
      return;
    }

    $level = '';
    if ( isset( $_POST['level'] ) ) { // WPCS: input var ok; CSRF ok.
      $level = sanitize_text_field( wp_unslash( $_POST['level'] ) ); // WPCS: input var ok; CSRF ok.

      $current_stats_value = (int) get_option( $this->general_helper->append_locale( 'esgdpr_stats_level_' . $level ) );

      update_option( $this->general_helper->append_locale( 'esgdpr_stats_level_' . $level, $current_stats_value + 1 ) );
    }

    wp_die();
  }
}
