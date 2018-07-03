<?php
/**
 * The general helper specific functionality.
 *
 * @since   1.0.0
 * @package Eightshift_Gdpr\Helpers
 */

namespace Eightshift_Gdpr\Helpers;

/**
 * Class General Helper
 */
class General_Helper {

  /**
   * Return full path for specific asset from manifest.json
   * This is used for cache busting assets.
   *
   * @param string $key File name key you want to get from manifest.
   * @return string Full path to asset.
   *
   * @since 1.0.0
   */
  public function get_manifest_assets_data( $key = null ) {
    $data = ESGDPR_ASSETS_MANIFEST;

    if ( ! ( $key || $data ) ) {
      return;
    }

    $asset = $this->get_array_value( $key, $data );

    if ( ! empty( $asset ) ) {
      return plugins_url( $asset, __DIR__ );
    }
  }

  /**
   * Check if array has key and return its value if true.
   * Useful if you want to be sure that key exists and return empty if it doesn't.
   *
   * @param string $key   Array key to check.
   * @param array  $array Array in which the key should be checked.
   * @return string       Value of the key if it exists, empty string if not.
   *
   * @since 1.0.0
   */
  public function get_array_value( $key, $array ) {
    return ( gettype( $array ) === 'array' && array_key_exists( $key, $array ) ) ? $array[ $key ] : '';
  }

  /**
   * Flatten multidimensional array.
   *
   * @param  array $array Multidimensional array.
   * @return array
   *
   * @since 1.0.0
   */
  public function flatten_array( array $array ) {
    $return = array();
    array_walk_recursive(
      $array, function( $a ) use ( &$return ) {
        $return[] = $a;
      }
    );
    return $return;
  }


  /**
   * Check if login page is open.
   *
   * @return boolean
   *
   * @since 1.0.0
   */
  public function is_login_page() {
    $page = isset( $_SERVER['PHP_SELF'] ) ? sanitize_text_field( wp_unslash( $_SERVER['PHP_SELF'] ) ) : '';

    if ( $page === '/wp-login.php' ) {
      return true;
    }

    return false;
  }

  /**
   * Expolode input to array and remove spaces for lists.
   *
   * @param string $delimiter Key to expolode by.
   * @param string $string    String to expolode.
   * @return array Exploded array.
   *
   * @since 1.0.0
   */
  public function explode_input( $delimiter = null, $string = null ) {
    if ( ! $delimiter || ! $string ) {
      return false;
    }

    return str_replace( ' ', '', explode( $delimiter, $string ) );
  }

  /**
   * Check if feature is active.
   *
   * @return boolean
   *
   * @since 1.0.0
   */
  public function is_gdpr_active() {
    $options = $this->get_prepared_options();
    $active  = $this->get_array_value( 'active', $options );

    return ( $active === 'on' ) ? true : false;
  }

  /**
   * Set locale depending ond default locale or hook override.
   *
   * @return string
   *
   * @since 1.0.0
   */
  public function get_locale() {
    $locale = get_locale();

    if ( has_filter( 'esgdpr_set_locale' ) ) {
      $locale = apply_filters( 'esgdpr_set_locale', $locale );
    }

    $code = explode( '_', $locale );

    return $this->get_array_value( 0, $code );
  }

  /**
   * Return options without locale.
   *
   * @return array
   *
   * @since 1.0.0
   */
  public function get_admin_options() {
    return array(
        'esgdpr_activate_checkbox',
        'esgdpr_stats_level_0',
        'esgdpr_stats_level_1',
        'esgdpr_stats_level_2',
        'esgdpr_title',
        'esgdpr_intro',
        'esgdpr_cookie_required_title',
        'esgdpr_cookie_required_list',
        'esgdpr_cookie_required_summary',
        'esgdpr_cookie_required_description',
        'esgdpr_cookie_functional_title',
        'esgdpr_cookie_functional_list',
        'esgdpr_cookie_functional_summary',
        'esgdpr_cookie_functional_description',
        'esgdpr_cookie_marketing_title',
        'esgdpr_cookie_marketing_summary',
        'esgdpr_cookie_marketing_description',
        'esgdpr_cookie_domain_list',
    );
  }

  /**
   * Flip options array to get array of keys.
   *
   * @since 1.0.0
   *
   * @return string
   */
  public function get_admin_prepared_options() {
    return array_flip( $this->get_admin_options() );
  }

  /**
   * Return admin option key depending on language
   *
   * @param string $key Providing key.
   * @since 1.0.0
   *
   * @return string
   */
  public function get_option_key( $key = null ) {
    if ( empty( $key ) ) {
      return false;
    }

    $options = $this->get_admin_prepared_options();

    if ( ! isset( $options[ $key ] ) ) {
      return false;
    }

    return $this->append_locale( $key );
  }

  /**
   * Return admin option value depending on language
   *
   * @param string $key Providing key.
   * @since 1.0.0
   *
   * @return string
   */
  public function get_option_value( $key = null ) {
    if ( empty( $key ) ) {
      return false;
    }

    $options = $this->get_admin_prepared_options();

    if ( ! isset( $options[ $key ] ) ) {
      return false;
    }

    return get_option( $this->append_locale( $key ) );
  }

  /**
   * Append locale to string
   *
   * @param string $string Providing string to append to.
   * @since 1.0.0
   *
   * @return string
   */
  public function append_locale( $string = null ) {
    if ( empty( $string ) ) {
      return false;
    }

    return $string . '_' . $this->get_locale();
  }

  /**
   * Return prepared key value array for frontend modal.
   *
   * @return array
   *
   * @since 1.0.0
   */
  public function get_prepared_options() {
    return array(
        'active'  => $this->get_option_value( 'esgdpr_activate_checkbox' ),
        'title'   => $this->get_option_value( 'esgdpr_title' ),
        'intro'   => $this->get_option_value( 'esgdpr_intro' ),
        'domains' => $this->get_option_value( 'esgdpr_cookie_domain_list' ),
        'stats' => array(
            'level_0' => $this->get_option_value( 'esgdpr_stats_level_0' ),
            'level_1' => $this->get_option_value( 'esgdpr_stats_level_1' ),
            'level_2' => $this->get_option_value( 'esgdpr_stats_level_2' ),
        ),
        'items' => array(
            'required' => array(
                'title'       => $this->get_option_value( 'esgdpr_cookie_required_title' ),
                'list'        => $this->get_option_value( 'esgdpr_cookie_required_list' ),
                'summary'     => $this->get_option_value( 'esgdpr_cookie_required_summary' ),
                'description' => $this->get_option_value( 'esgdpr_cookie_required_description' ),
            ),
            'functional' => array(
                'title'       => $this->get_option_value( 'esgdpr_cookie_functional_title' ),
                'list'        => $this->get_option_value( 'esgdpr_cookie_functional_list' ),
                'summary'     => $this->get_option_value( 'esgdpr_cookie_functional_summary' ),
                'description' => $this->get_option_value( 'esgdpr_cookie_functional_description' ),
            ),
            'marketing' => array(
                'title'       => $this->get_option_value( 'esgdpr_cookie_marketing_title' ),
                'summary'     => $this->get_option_value( 'esgdpr_cookie_marketing_summary' ),
                'description' => $this->get_option_value( 'esgdpr_cookie_marketing_description' ),
            ),
        ),
    );
  }

  /**
   * Check if bot is visiting the site.
   *
   * @since 1.0.0
   *
   * @return boolean
   */
  public function is_bot() {
    if ( isset( $_SERVER['HTTP_USER_AGENT'] ) ) {
      if ( preg_match( '/bot|crawl|slurp|spider|mediapartners/i', sanitize_text_field( wp_unslash( $_SERVER['HTTP_USER_AGENT'] ) ) ) ) {
        return true;
      }
    }

    return false;
  }
}
