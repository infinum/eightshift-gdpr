# Eightshift GDPR Plugin

**Contributors**: mustra, dingo_bastard  
**Tags**: json, gdpr, law, content, modal, privacy, compliance, general data protection regulation  
**Tested up to**: 5.4.2  
**Stable tag**: 1.0.0  
**Requires at least**: 5.0  
**Requires PHP**: 7.2  
**License**: MIT  
**License URI**: https://opensource.org/licenses/MIT

## Development Start
Builds assets in watch mode using Webpack.

```bash
npm start
```

## Linting Assets (JS,SASS)
We are using Infinum [ES](https://www.npmjs.com/package/@infinumjs/eslint-config) and [Style](https://www.npmjs.com/package/@infinumjs/stylelint-config) linters. 
Lints JS and SASS using Webpack.

```bash
npm run precommit
```

## Linting PHP ##
We are using [Infinum coding standards for WordPress](https://github.com/infinum/coding-standards-wp) to check php files. There are some subtle differences between ours and WordPress coding standards like spaces vs tabs, 2 spaces vs 4 etc.

To install it, you need to install [Composer](https://getcomposer.org/) first.

* Add this aliases to you bash config:

```bash
alias phpcs='vendor/bin/phpcs';
alias phpcbf='vendor/bin/phpcbf';
alias wpcs='phpcs --standard=vendor/infinum/coding-standards-wp/Infinum';
alias wpcbf='phpcbf --standard=vendor/infinum/coding-standards-wp/Infinum';
```
* Reload terminal

Checking plugin for possible violations:

```bash
wpcs eightshift-gdpr
```

Autofix plugin for minor violations:

```bash
wpcbf eightshift-gdpr
```

## Build
Build creates public folder in plugin for all the assets.

Builds production ready assets

```bash
sh _build.sh
```

## Note
This means that for the plugin to work you need to have, at the minimum, php 5.3. Although we recommend that you use php 7 because of the performance benefits.

## Hooks

The plugin has several action hooks which you can use in your theme or plugin.

* `esgdpr_set_capability` - Set user access level. Options are saved to options table so ony admin can save changes. This hook provides the ability to change this. Default is "edit_pages" (editor).
* `esgdpr_set_front_styles` - Set you own styles and override plugins.
* `esgdpr_set_front_scripts` - Set you own scripts and override plugins.
* `esgdpr_set_advance_default_level` - When opening modal and clicking on the more info button there is a slider, set default level for this slider if no level is set.
* `esgdpr_set_cookie_name` - Change cookie name. Default is "GDPR".
* `esgdpr_set_locale` - If using multilanguage use this hook to provide current langauge code. Default uses from get_locale() function. Example: for WPML provide "ICL_LANGUAGE_CODE".

## Credits
Eightshift GDPR is maintained and sponsored by
[Infinum](https://www.infinum.co).

## License

Eightshift GDPR is Copyright © 2020 Infinum. It is free software, and may be redistributed under the terms specified in the LICENSE file.
