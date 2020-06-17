<?php
/**
 * The global utilities helper specific functionality.
 *
 * @since   1.0.0
 * @package Eightshift_Gdpr\Helpers
 */

use Eightshift_Gdpr\Front\Front;
use Eightshift_Gdpr\Helpers\General_Helper;

if ( ! function_exists( 'esgdpr_get_cookie_name' ) ) {
  /**
   * Return cookie name.
   *
   * @return string
   * @since  1.0.0
   */
  function esgdpr_get_cookie_name() {
    $general_helper = new General_Helper();
    $front = new Front( $general_helper );
    return $front->get_cookie_name();
  }
}

if ( ! function_exists( 'esgdpr_check_level' ) ) {
  /**
   * Output level of cookie set.
   *
   * @return string
   * @since  1.0.0
   */
  function esgdpr_check_level() {
    $general_helper = new General_Helper();
    $front = new Front( $general_helper );
    return $front->check_level();
  }
}

if ( ! function_exists( 'esgdpr_is_gdpr_cookie_set' ) ) {
  /**
   * Check if cookie is set.
   *
   * @return boolian
   * @since  1.0.0
   */
  function esgdpr_is_gdpr_cookie_set() {
    $general_helper = new General_Helper();
    $front = new Front( $general_helper );
    return $front->is_gdpr_cookie_set();
  }
}
