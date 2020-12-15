<?php

/**
 * File containing the invalid URI exception class
 *
 * @package Eightshift\EightshiftGdpr\Exception
 * @since 1.1.0
 */

declare(strict_types=1);

namespace Eightshift\EightshiftGdpr\Exception;

use InvalidArgumentException;

/**
 * Invalid uri exception
 *
 * Exception thrown when a URI is not valid in WordPress context.
 *
 * @package Eightshift\EightshiftGdpr\Exception
 * @since 1.1.0
 */
final class InvalidUri extends InvalidArgumentException implements GeneralException
{
	/**
	 * Create a new instance of the exception for a file that is not accessible
	 * or not readable.
	 *
	 * @param string $uri URI of the file that is not accessible or not
	 *                    readable.
	 *
	 * @return InvalidUri
	 */
	public static function fromUri(string $uri): InvalidUri
	{
		$message = sprintf('The View URI "%s" is not accessible or readable.', $uri);

		return new InvalidUri($message);
	}
}
