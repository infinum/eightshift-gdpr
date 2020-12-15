<?php

/**
 * Factory pattern that creates a plugin instance
 *
 * @since 1.1.0
 * @package EightshiftGdpr\Main
 */

declare(strict_types=1);

namespace Eightshift\EightshiftGdpr\Main;

/**
 * Class PluginFactory
 *
 * Creates a plugin instance
 *
 * @since 1.1.0
 */
final class PluginFactory
{
	/**
	 * Create and return an instance of the plugin.
	 *
	 * This always returns a shared instance.
	 *
	 * @param array $psr4Prefixes Array of PSR-4 prefixes from the autoloader.
	 * @param string $namespace Core plugin namespace.
	 *
	 * @return Plugin Plugin instance.
	 */
    public static function create(array $psr4Prefixes, string $namespace): Plugin
    {
        static $plugin = null;

        if ($plugin === null) {
            $plugin = new Plugin($psr4Prefixes, $namespace);
        }

        return $plugin;
    }
}
