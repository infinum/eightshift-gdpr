# Eightshift GDPR Plugin

**Contributors**: mustra, dingo_bastard  
**Tags**: json, gdpr, law, content, modal, privacy, compliance, general data protection regulation  
**Tested up to**: 4.9.8  
**Stable tag**: 1.0.0  
**Requires at least**: 4.4  
**Requires PHP**: 5.6  
**License**: GPLv2 or later  
**License URI**: http://www.gnu.org/licenses/gpl-2.0.html

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

## Credits
Eightshift GDPR is maintained and sponsored by
[Infinum](https://www.infinum.co).

<img src="https://infinum.co/infinum.png" width="264">

## License

Eightshift GDPR is Copyright © 2017 Infinum. It is free software, and may be redistributed under the terms specified in the LICENSE file.
