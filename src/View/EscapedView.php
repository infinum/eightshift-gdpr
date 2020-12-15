<?php

/**
 * Escaped view class file
 *
 * @package Eightshift\EightshiftGdpr\View
 * @since 1.1.0
 */

declare(strict_types=1);

namespace Eightshift\EightshiftGdpr\View;

use \EightshiftGdprVendor\EightshiftLibs\Exception\FailedToLoadView;
use Eightshift\EightshiftGdpr\Exception\InvalidUri;

/**
 * Escaped view
 *
 * This is a Decorator that decorates a given View with escaping meant for
 * HTML output.
 *
 * @package Eightshift\EightshiftGdpr\View
 * @since 1.1.0
 */
final class EscapedView implements ViewInterface
{

	/**
	 * Tags that are allowed to be rendered.
	 */
	public const ALLOWED_TAGS = [
		'form'   => [
			'id'     => true,
			'class'  => true,
			'action' => true,
			'method' => true,
		],
		'input'  => [
			'id'      => true,
			'class'   => true,
			'type'    => true,
			'name'    => true,
			'value'   => true,
			'checked' => true,
		],
		'select' => [
			'id'    => true,
			'class' => true,
			'type'  => true,
			'name'  => true,
			'value' => true,
		],
		'option' => [
			'id'       => true,
			'class'    => true,
			'type'     => true,
			'name'     => true,
			'value'    => true,
			'selected' => true,
		],
		'label'  => [
			'for' => true,
		],
		'div'    => [
			'class' => true,
		],
		'svg'    => [
			'class'   => true,
			'style'   => true,
			'width'   => true,
			'height'  => true,
			'viewbox' => true,
			'xmlns'   => true,
		],
		'g'      => [
			'fill'      => true,
			'fill-rule' => true,
			'transform' => true,
		],
		'path'   => [
			'd'            => true,
			'id'           => true,
			'fill'         => true,
			'style'        => true,
			'stroke'       => true,
			'stroke-width' => true,
		],
		'mask'   => [
			'id'   => true,
			'fill' => true,
		],
		'rect'   => [
			'transform' => true,
			'fill'      => true,
			'width'     => true,
			'height'    => true,
			'rx'        => true,
			'ry'        => true,
			'x'         => true,
			'y'         => true,
		],
		'xmlns'  => [
			'xlink' => true,
		],
		'defs'   => [],
		'span'   => [
			'title' => true,
		],
		'br'     => [],
	];

	/**
	 * View instance to decorate.
	 *
	 * @var ViewInterface
	 */
	private $view;

	/**
	 * Tags that are allowed to pass through the escaping function.
	 *
	 * @var array
	 */
	private $allowedTags;

	/**
	 * Instantiate a Escaped_View object.
	 *
	 * @param ViewInterface $viewInterface View instance to decorate.
	 * @param array|null $allowedTags Optional. Array of allowed tags to let
	 *                                 through escaping functions. Set to sane
	 *                                 defaults if none provided.
	 */
	public function __construct(ViewInterface $viewInterface, $allowedTags = null)
	{
		$this->view = $viewInterface;
		$this->allowedTags = null === $allowedTags ?
			$this->prepareAllowedTags(wp_kses_allowed_html('post')) :
			$allowedTags;
	}

	/**
	 * Render a given URI.
	 *
	 * @param array $context Context in which to render.
	 *
	 * @return string Rendered HTML.
	 * @throws FailedToLoadView If the View URI could not be loaded.
	 */
	public function render(array $context = []): string
	{
		return wp_kses($this->view->render($context), $this->allowedTags);
	}

	/**
	 * Render a partial view.
	 *
	 * This can be used from within a currently rendered view, to include
	 * nested partials.
	 *
	 * The passed-in context is optional, and will fall back to the parent's
	 * context if omitted.
	 *
	 * @param string $uri URI of the partial to render.
	 * @param array|null $context Context in which to render the partial.
	 *
	 * @return string Rendered HTML.
	 * @throws InvalidUri If the provided URI was not valid.
	 * @throws FailedToLoadView If the view could not be loaded.
	 */
	public function renderPartial(string $uri, array $context = null): string
	{
		return wp_kses(
			$this->view->renderPartial($uri, $context),
			$this->allowedTags
		);
	}

	/**
	 * Prepare an array of allowed tags by adding form elements to the existing
	 * array.
	 *
	 * This makes sure that the basic form elements always pass through the
	 * escaping functions.
	 *
	 * @param array $allowedTags Allowed tags as fetched from the WordPress
	 *                           defaults.
	 *
	 * @return array Modified tags array.
	 */
	private function prepareAllowedTags(array $allowedTags): array
	{
		return (array) array_replace_recursive($allowedTags, self::ALLOWED_TAGS);
	}
}
