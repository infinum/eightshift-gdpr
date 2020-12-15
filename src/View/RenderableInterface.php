<?php

/**
 * File holding RenderableInterface interface
 *
 * @package Eightshift\EightshiftGdpr\View
 *
 * @since 1.1.0
 */

declare(strict_types=1);

namespace Eightshift\EightshiftGdpr\View;

/**
 * Renderable interface
 *
 * An object that can be rendered.
 *
 * @package Eightshift\EightshiftGdpr\View
 * @since 1.1.0
 */
interface RenderableInterface
{
	/**
	 * Render the current Renderable.
	 *
	 * @param array $context Context in which to render.
	 *
	 * @return string Rendered HTML.
	 */
	public function render(array $context = []): string;
}
