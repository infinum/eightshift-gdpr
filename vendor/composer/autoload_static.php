<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitac162df7a1e3aefce2b2fb705a6d5c92
{
    public static $prefixLengthsPsr4 = array (
        'D' => 
        array (
            'Dealerdirect\\Composer\\Plugin\\Installers\\PHPCodeSniffer\\' => 55,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Dealerdirect\\Composer\\Plugin\\Installers\\PHPCodeSniffer\\' => 
        array (
            0 => __DIR__ . '/..' . '/dealerdirect/phpcodesniffer-composer-installer/src',
        ),
    );

    public static $classMap = array (
        'Eightshift_Gdpr\\Admin\\Admin' => __DIR__ . '/../..' . '/admin/class-admin.php',
        'Eightshift_Gdpr\\Front\\Front' => __DIR__ . '/../..' . '/front/class-front.php',
        'Eightshift_Gdpr\\Helpers\\General_Helper' => __DIR__ . '/../..' . '/helpers/class-general-helper.php',
        'Eightshift_Gdpr\\Includes\\Config' => __DIR__ . '/../..' . '/includes/class-config.php',
        'Eightshift_Gdpr\\Includes\\Internationalization' => __DIR__ . '/../..' . '/includes/class-internationalization.php',
        'Eightshift_Gdpr\\Includes\\Loader' => __DIR__ . '/../..' . '/includes/class-loader.php',
        'Eightshift_Gdpr\\Includes\\Main' => __DIR__ . '/../..' . '/includes/class-main.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitac162df7a1e3aefce2b2fb705a6d5c92::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitac162df7a1e3aefce2b2fb705a6d5c92::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitac162df7a1e3aefce2b2fb705a6d5c92::$classMap;

        }, null, ClassLoader::class);
    }
}
