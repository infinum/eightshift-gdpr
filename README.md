# Eightshift GDPR Plugin

## Development Start
Builds assets in watch mode using Webpack.

```
npm start
```

## Linting Assets (JS,SASS)
We are using Infinum [ES](https://www.npmjs.com/package/@infinumjs/eslint-config) and [Style](https://www.npmjs.com/package/@infinumjs/stylelint-config) linters. 
Lints JS and SASS using Webpack.

```
npm run precommit
```

## Linting PHP ##
We are using [Infinum coding standards for WordPress](https://github.com/infinum/coding-standards-wp) to check php files. There are some subtle differences between ours and WordPress coding standards like spaces vs tabs, 2 spaces vs 4 etc.

To install it, you need to install [Composer](https://getcomposer.org/) first.

* Add this aliases to you bash config:

```
alias phpcs='vendor/bin/phpcs';
alias phpcbf='vendor/bin/phpcbf';
alias wpcs='phpcs --standard=vendor/infinum/coding-standards-wp/Infinum';
alias wpcbf='phpcbf --standard=vendor/infinum/coding-standards-wp/Infinum';
```
* Reload terminal

Checking plugin for possible violations:
```
wpcs eightshift-gdpr
```

Autofix plugin for minor violations:
```
wpcbf eightshift-gdpr
```

## Build
Build creates public folder in plugin for all the assets.

```

Builds production ready assets

```
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
