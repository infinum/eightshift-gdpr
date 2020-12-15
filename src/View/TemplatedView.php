<?php

/**
 * Templated view class file
 *
 * @package Eightshift\EightshiftGdpr\View
 * @since 1.1.0
 */

declare(strict_types=1);

namespace Eightshift\EightshiftGdpr\View;

use Eightshift\EightshiftGdpr\Exception\InvalidUri;

use function get_stylesheet_directory;
use function get_template_directory;

/**
 * Templated view
 *
 * Looks within the child theme and parent theme folders first for a view,
 * before defaulting to the plugin folder.
 *
 * @package Eightshift\EightshiftGdpr\View
 * @since 1.1.0
 */
final class TemplatedView extends BaseView
{

	/**
	 * Validate an URI.
	 *
	 * @param string $uri URI to validate.
	 *
	 * @return string Validated URI.
	 * @throws InvalidUri If an invalid URI was passed into the View.
	 */
	protected function validate(string $uri): string
	{
		$uri = $this->checkExtension($uri, TemplatedView::VIEW_EXTENSION);

		foreach ($this->getLocations($uri) as $location) {
			if (is_readable($location)) {
				return $location;
			}
		}

		if (!is_readable($uri)) {
			throw InvalidUri::fromUri($uri);
		}

		return $uri;
	}

	/**
	 * Get the possible locations for the view.
	 *
	 * @param string $uri URI of the view to get the locations for.
	 *
	 * @return array Array of possible locations.
	 */
	protected function getLocations(string $uri): array
	{
		return [
			trailingslashit(get_stylesheet_directory()) . $uri,
			trailingslashit(get_template_directory()) . $uri,
			trailingslashit(dirname(__DIR__, 2)) . $uri,
		];
	}
}
