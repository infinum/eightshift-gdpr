<?php

/**
 * The Admin Enqueue specific functionality.
 *
 * @package Eightshift\EightshiftGdpr\Enqueue\Admin
 */

declare(strict_types=1);

namespace Eightshift\EightshiftGdpr\Enqueue\Admin;

use Eightshift\EightshiftGdpr\Config\Config;
use EightshiftGdprVendor\EightshiftLibs\Manifest\ManifestInterface;
use EightshiftGdprVendor\EightshiftLibs\Enqueue\Admin\AbstractEnqueueAdmin;

/**
 * Class EnqueueAdmin
 *
 * This class handles enqueue scripts and styles.
 */
class EnqueueAdmin extends AbstractEnqueueAdmin
{

	/**
	 * Create a new admin instance.
	 *
	 * @param ManifestInterface $manifest Inject manifest which holds data about assets from manifest.json.
	 */
	public function __construct(ManifestInterface $manifest)
	{
		$this->manifest = $manifest;
	}

	/**
	 * Register all the hooks
	 *
	 * @return void
	 */
	public function register(): void
	{
		\add_action('admin_enqueue_scripts', [$this, 'enqueueStyles'], 50);
		\add_action('admin_enqueue_scripts', [$this, 'enqueueScripts']);
		\add_action('init', [$this, 'setScriptTranslations']);
	}

	/**
	 * Method that returns assets name used to prefix asset handlers.
	 *
	 * @return string
	 */
	public function getAssetsPrefix(): string
	{
		return Config::getProjectName();
	}

	/**
	 * Method that returns assets version for versioning asset handlers.
	 *
	 * @return string
	 */
	public function getAssetsVersion(): string
	{
		return Config::getProjectVersion();
	}

	/**
	 * Set the translations inside the JS files
	 *
	 * @link https://developer.wordpress.org/reference/functions/wp_set_script_translations/
	 *
	 * @return void
	 */
	public function setScriptTranslations(): void
	{
		$handle = "{$this->getAssetsPrefix()}-scripts";

		wp_set_script_translations(
			$handle,
			'eightshift-gdpr',
			dirname(__FILE__, 3) . '/languages/'
		);
	}

	/**
	 * Get script dependencies
	 *
	 * @link https://developer.wordpress.org/reference/functions/wp_enqueue_script/#default-scripts-included-and-registered-by-wordpress
	 *
	 * @return array List of all the script dependencies
	 */
	protected function getAdminScriptDependencies(): array
	{
		return [
			'wp-api',
			'wp-i18n',
			'wp-components',
			'wp-element',
			'wp-api-fetch',
		];
	}

	/**
	 * Get script localizations
	 *
	 * @return array Key value pair of different localizations
	 */
	protected function getLocalizations(): array
	{
		return [
			'optionSaved' => esc_html__('Options saved.', 'eightshift-gdpr'),
		];
	}
}
