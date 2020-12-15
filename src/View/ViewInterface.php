<?php

/**
 * Interface that handles plugin views
 *
 * @package Eightshift\EightshiftGdpr\View
 * @since 1.1.0
 */

declare(strict_types=1);

namespace Eightshift\EightshiftGdpr\View;

use Eightshift\EightshiftGdpr\Exception\InvalidUri;
use EightshiftGdprVendor\EightshiftLibs\Exception\FailedToLoadView;

/**
 * Interface view
 *
 * @package Eightshift\EightshiftGdpr\View
 * @since 1.1.0
 */
interface ViewInterface extends RenderableInterface
{
	/**
     * Render a given URI.
     *
     * @param array $context Context in which to render.
     *
     * @return string Rendered HTML.
	 *
     * @throws FailedToLoadView If the View URI could not be loaded.
     */
	public function render(array $context = []): string;

	/**
	 * Render a partial view.
	 *
	 * This can be used from within a currently rendered view, to include
	 * nested partials.
	 *
	 * The passed-in context is optional, and will fall back to the parent's
	 * context if omitted.
	 *
	 * @param string     $uri     URI of the partial to render.
	 * @param array|null $context Context in which to render the partial.
	 *
	 * @return string Rendered HTML.
	 *
	 * @throws InvalidURI       If the provided URI was not valid.
	 * @throws FailedToLoadView If the view could not be loaded.
	 */
	public function renderPartial(string $uri, array $context = null): string;
}
