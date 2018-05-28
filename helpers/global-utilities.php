<?php
/**
 * The global utilities helper specific functionality.
 *
 * @since   1.0.0
 * @package eightshift-gdpr
 */

use Eightshift_Gdpr\Front;

if ( ! function_exists( 'esgdpr_get_cookie_name' ) ) {
  /**
   * Return cookie name.
   *
   * @return string
   * @since  1.0.0
   */
  function esgdpr_get_cookie_name() {
    $front = new Front\Front();
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
    $front = new Front\Front();
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
    $front = new Front\Front();
    return $front->is_gdpr_cookie_set();
  }
}
