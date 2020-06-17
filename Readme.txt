=== Eightshift GDPR ===
Contributors: mustra, dingo_bastard
Donate link: https://infinum.co/
Tags: json, gdpr, law, content, modal, privacy, compliance, general data protection regulation
Tested up to: 5.4.2
Stable tag: 1.0.0
Requires at least: 5.0
Requires PHP: 7.2
License: MIT
License URI: https://opensource.org/licenses/MIT

Simple and elegant plugin to display GDPR modal that manages your site cookies.

== Description ==

This plugin will show a modal with three distinct cookie levels used for the site functionality - general cookies (privacy cookies); required cookies (things like Google maps and fonts); functional cookies (additional site functionality and security like translation settings); advertising cookies (cookies used for analytics purposes, either from companies like Google, Facebook or Adobe).

You can also set the cookie keys that you want to use inside certain level, and list all cookie domains that are not automatically deleted when setting basic level of cookies. If the user clicks on the I don't agree, no cookies will be saved.

In addition to that you have a simple statistics of which cookie setting is selected in the admin dashboard.

=== Legal disclaimer ===

Just installing the plugin **doesn't mean your site will be GDPR compliant** out of the box. We (the Eightshift team), do not accept any legal responsibility for your site GDPR or any other privacy compliance. It is also imperative to understand how the plugin works before using it.

For more information read: https://make.wordpress.org/plugins/2018/04/12/legal-compliance-added-to-guidelines/

== Installation ==

In order for this plugin to work correctly there are some tweaks you need to make to your plugin or theme.
Just installing it doesn't provide any GDPR compliance. Keep this in mind.

In order for the plugin to work correctly, you'll need to wrap any script calls that generate cookies in the provided helper functions, so that the plugin knows not to execute them based on the accepted level. For instance, if you have a template part which loads the Google Tag Manager it would be done like this:

<code>
if ( function_exists( 'esgdpr_check_level' ) ) {
  $cookie_level = esgdpr_check_level();
} else {
  $cookie_level = '0';
}

// Only load the GMT script if accepted cookie level was 2.
if ( $cookie_level === '2' ) {
  get_template_part( 'template-parts/tracking/parts/google-tag-manager' );
}
</code>

Plugin will check what level of cookie consent you've chosen and load the scripts based on that.

== Hooks ==

The plugin has several action hooks which you can use in your theme or plugin.

* `esgdpr_set_capability` - Set user access level. Options are saved to options table. This hook provides the ability to change this. Default is "edit_pages" (editor).
* `esgdpr_set_front_styles` - Set you own styles and override plugin ones.
* `esgdpr_set_front_scripts` - Set you own scripts and override plugin ones.
* `esgdpr_set_advance_default_level` - When opening modal and clicking on the more info button there is a slider, set default level for this slider if no level is set.
* `esgdpr_set_cookie_name` - Change cookie name. Default is "GDPR".
* `esgdpr_set_locale` - If using multi language use this hook to provide current language code. Default uses get_locale() function. Example: for WPML plugin provide "ICL_LANGUAGE_CODE".

== Screenshots ==

1. GDPR menu settings
2. Modal on Twentytwenty theme
3. Expanded information on the modal - functional level
4. Expanded information on the modal - marketing level

== Changelog ==

= 1.0.0 =

* Initial release

== Credits ==

Eightshift GDPR is maintained and sponsored by [Eightshift](https://www.eightshift.com) and [Infinum](https://www.infinum.com).

== License ==

Eightshift GDPR is Copyright © 2020 Infinum. It is free software, and may be redistributed under the terms specified in the LICENSE file.

== Donate ==

We don't need your donations. Give it to charity instead. And check out our work at [Infinum foundation](https://infinum.com/foundation).
