# Eightshift GDPR plugin

## Usage 

In order for this plugin to work correctly there are some tweaks you need to make to your plugin or theme.
Just installing it doesn't provide any GDPR compliance. Keep this in mind.

### Legal disclaimer

Just installing the plugin **doesn't mean your site will be GDPR compliant** out of the box. We (the Eightshift team), do not accept any legal responsibility for your site GDPR or any other privacy compliance. It is also imperative to understand how the plugin works before using it.

For more information read: https://make.wordpress.org/plugins/2018/04/12/legal-compliance-added-to-guidelines/

## Development 

### Requirements

1. PHP 7.3
2. Node 12
3. [Node.js](https://nodejs.org/en/)
4. [Composer](https://getcomposer.org/)
5. [(Optional) WP cli](https://wp-cli.org/)

### Installation

The project is built using [eighshift-boilerplate](https://github.com/infinum/eightshift-boilerplate), [eighshift-libs](https://github.com/infinum/eightshift-libs), and [eighshift-frontend-libs](https://github.com/infinum/eightshift-frontend-libs).

For more details on how to use them, check out the [official documentation](https://infinum.github.io/eightshift-docs/).

Once you clone this repository, you'll need to build it:

```bash
cd wp-config/plugins/eightshift-gdpr

composer install
npm install
npm run build
```

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

Checking code consistency can be also done using PHPStan:

```bash
composer analyze
```

## Credits

Eightshift GDPR is maintained and sponsored by [Eightshift](https://www.eightshift.com) and [Infinum](https://www.infinum.com).

## License

Eightshift GDPR is Copyright © 2020 Infinum. It is free software, and may be redistributed under the terms specified in the LICENSE file.
