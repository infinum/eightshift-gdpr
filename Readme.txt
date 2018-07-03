=== Eightshift GDPR ===
Contributors: mustra, dingo_bastard
Donate link: https://infinum.co/
Tags: json, gdpr, law, content, modal,
Tested up to: 4.9.6
Stable tag: 1.0.0
Requires at least: 4.4
Requires PHP: 5.6
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Simple and elegant plugin to display GDPR modal.

== Description ==
TODO

== Installation ==

1. Place `eightshift-gdpr` folder in the `/wp-content/plugins/` directory.
2. Activate the plugin through the 'Plugins' menu in WordPress.
3. Go to GDPR menu item, fill in the content and check "Activate GDPR" checkbox.

== Hooks ==

* esgdpr_set_capability - Set user access level. Options are saved to options table so ony admin can save changes. This hook provides the ability to change this. Default is "edit_pages" (editor).
* esgdpr_set_front_styles - Set you own styles and override plugins.
* esgdpr_set_front_scripts - Set you own scripts and override plugins.
* esgdpr_set_advance_default_level - When opening modal and clicking on the more info button there is a slider, set default level for this slider if no level is set.
* esgdpr_set_cookie_name - Change cookie name. Default is "GDPR".
* esgdpr_set_locale - If using multilanguage use this hook to provide current langauge code. Default uses from get_locale() function. Example: for WPML provide "ICL_LANGUAGE_CODE".

== Screenshots ==
TODO

== Changelog ==

= 1.0 =
* Initial release


== Credits ==

Eightshift GDPR is maintained and sponsored by
[Infinum](https://www.infinum.co).

<img src="https://infinum.co/infinum.png" width="264">

== License ==

Eightshift GDPR is Copyright © 2017 Infinum. It is free software, and may be redistributed under the terms specified in the LICENSE file.

== Donate ==

We don't need your donations. Give it to charity instead. And check out our work at [Infinum](https://www.infinum.co).
