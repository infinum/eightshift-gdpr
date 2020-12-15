<?php
/**
 * The abstract class that will be used to extend for all config files.
 *
 * @since   1.0.0
 * @package Eightshift_Gdpr\Includes
 */

namespace Eightshift_Gdpr\Includes;

/**
 * Abstract Class Config
 *
 * Abstract class that exposes constants that are used across multiple files.
 */
abstract class Config {

  /**
   * Plugin Name Constant
   *
   * @var string
   *
   * @since 1.0.0
   */
  const PLUGIN_NAME = 'eightshift-gdpr';

  /**
   * Plugin Version Constant
   *
   * @var string
   *
   * @since 1.0.0
   */
  const PLUGIN_VERSION = '1.0.0';

  /**
   * Plugin Cookie name
   *
   * @var string
   *
   * @since 1.0.0
   */
  const COOKIE_NAME = 'gdpr';

  /**
   * Settings page main page slug
   *
   * @since 1.0.0
   */
  const SETTINGS_SLUG = 'eightshift-gdpr';

  /**
   * Admin options group name;
   *
   * @var string
   *
   * @since 1.0.0
   */
  const OPTIONS_NAME = 'gdpr_settings_options';

  /**
   * Default level of accest to be able to edit data in backend.
   *
   * @var string
   *
   * @since 1.0.0
   */
  const DEFAULT_CAPABILITY = 'edit_pages';

  /**
   * Default selected level in advance part of modal window.
   *
   * @var string
   *
   * @since 1.0.0
   */
  const DEFAULT_MODAL_ADVANCE_SELECTED_LEVEL = 2;

}
