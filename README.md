# Eightshift GDPR Plugin

**Contributors**: mustra, dingo_bastard  
**Tags**: json, gdpr, law, content, modal, privacy, compliance, general data protection regulation  
**Tested up to**: 5.4.2  
**Stable tag**: 1.0.0  
**Requires at least**: 5.0  
**Requires PHP**: 7.2  
**License**: MIT  
**License URI**: https://opensource.org/licenses/MIT

## Usage 

In order for this plugin to work correctly there are some tweaks you need to make to your plugin or theme.
Just installing it doesn't provide any GDPR compliance. Keep this in mind.

### Hooks

The plugin has several action hooks which you can use in your theme or plugin.

* `esgdpr_set_capability` - Set user access level. Options are saved to options table. This hook provides the ability to change this. Default is "edit_pages" (editor).
* `esgdpr_set_front_styles` - Set you own styles and override plugin ones.
* `esgdpr_set_front_scripts` - Set you own scripts and override plugin ones.
* `esgdpr_set_advance_default_level` - When opening modal and clicking on the more info button there is a slider, set default level for this slider if no level is set.
* `esgdpr_set_cookie_name` - Change cookie name. Default is "GDPR".
* `esgdpr_set_locale` - If using multi language use this hook to provide current language code. Default uses get_locale() function. Example: for WPML plugin provide "ICL_LANGUAGE_CODE".

### Helper functions

In order for the plugin to work correctly, you'll need to wrap any script calls that generate cookies in the provided helper functions, so that the plugin knows not to execute them based on the accepted level. For instance, if you have a template part which loads the Google Tag Manager it would be done like this:

```php
if ( function_exists( 'esgdpr_check_level' ) ) {
  $cookie_level = esgdpr_check_level();
} else {
  $cookie_level = '0';
}

// Only load the GMT script if accepted cookie level was 2.
if ( $cookie_level === '2' ) {
  get_template_part( 'template-parts/tracking/parts/google-tag-manager' );
}
```

Plugin will check what level of cookie consent you've chosen and load the scripts based on that.

### Legal disclaimer

Just installing the plugin **doesn't mean your site will be GDPR compliant** out of the box. We (the Eightshift team), do not accept any legal responsibility for your site GDPR or any other privacy compliance. It is also imperative to understand how the plugin works before using it.

For more information read: https://make.wordpress.org/plugins/2018/04/12/legal-compliance-added-to-guidelines/

## Development 

Builds assets in watch mode using Webpack.

```bash
npm start
```

### Linting Assets (JS,SASS)

We are using Infinum [ES](https://www.npmjs.com/package/@infinumjs/eslint-config) and [Style](https://www.npmjs.com/package/@infinumjs/stylelint-config) linters. 
Lints JS and SASS using Webpack.

```bash
npm run precommit
```

### Linting PHP

We are using [Infinum coding standards for WordPress](https://github.com/infinum/coding-standards-wp) to check php files. There are some subtle differences between ours and WordPress coding standards like spaces vs tabs, 2 spaces vs 4 etc.

To install it, you need to install [Composer](https://getcomposer.org/) first.

Checking plugin for possible violations:

```bash
composer standards:check
```

Autofix plugin for minor violations:

```bash
composer standards:fix
```

### Build

Build creates public folder in plugin for all the assets.

Builds production ready assets

```bash
sh _build.sh
```

Ideally, you don't need all the development files in your plugin (especially the entire `node_modules` folder). This is why it's better to use the released zip file.

## Credits

Eightshift GDPR is maintained and sponsored by [Eightshift](https://www.eightshift.com) and [Infinum](https://www.infinum.com).

## License

Eightshift GDPR is Copyright © 2020 Infinum. It is free software, and may be redistributed under the terms specified in the LICENSE file.
