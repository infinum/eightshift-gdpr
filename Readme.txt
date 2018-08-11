=== Eightshift GDPR ===
Contributors: mustra, dingo_bastard
Donate link: https://infinum.co/
Tags: json, gdpr, law, content, modal, privacy, compliance, general data protection regulation
Tested up to: 4.9.8
Stable tag: 1.0.0
Requires at least: 4.4
Requires PHP: 5.6
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Simple and elegant plugin to display GDPR modal that manages your site cookies.

== Description ==

This plugin will show a modal with three distinct cookie levels used for the site functionality - general cookies (privacy cookies); required cookies (things like Google maps and fonts); functional cookies (additional site functionality and security like translation settings); advertising cookies (cookies used for analytics purposes, either from companies like Google, Facebook or Adobe).

You can also set the cookie keys that you want to use inside certain level, and list all cookie domains that are not automaticly deleted when setting basic level of cookies. If the user clicks on the I don't agree, no cookies will be saved.

In addition to that you have a simple statistics of which cookie setting is selected in the admin dashboard.

This plugin doesn't takes any responsibility for your site GDPR compliance.

== Installation ==

= Install & Activate =

Installing the plugin is easy. Just follow these steps:

**Installing from WordPress repository:**

1. From the dashboard of your site, navigate to Plugins --> Add New.
2. In the Search type Eightshift GDPR
3. Click Install Now
4. When it's finished, activate the plugin via the prompt. A message will show confirming activation was successful.
5. Go to GDPR menu item, fill in the content and check "Activate GDPR" checkbox.

**Uploading the .zip file:**

1. From the dashboard of your site, navigate to Plugins --> Add New.
2. Select the Upload option and hit "Choose File."
3. When the popup appears select the eightshift-gdpr.x.x.zip file from your desktop. (The 'x.x' will change depending on the current version number).
4. Follow the on-screen instructions and wait as the upload completes.
5. When it's finished, activate the plugin via the prompt. A message will show confirming activation was successful.
6. Go to GDPR menu item, fill in the content and check "Activate GDPR" checkbox.

That's it!

== Hooks ==

The plugin has several action hooks which you can use in your theme or plugin.

* esgdpr_set_capability - Set user access level. Options are saved to options table so ony admin can save changes. This hook provides the ability to change this. Default is "edit_pages" (editor).
* esgdpr_set_front_styles - Set you own styles and override plugins.
* esgdpr_set_front_scripts - Set you own scripts and override plugins.
* esgdpr_set_advance_default_level - When opening modal and clicking on the more info button there is a slider, set default level for this slider if no level is set.
* esgdpr_set_cookie_name - Change cookie name. Default is "GDPR".
* esgdpr_set_locale - If using multilanguage use this hook to provide current langauge code. Default uses from get_locale() function. Example: for WPML provide "ICL_LANGUAGE_CODE".

== Screenshots ==

1. GDPR menu settings
2. Modal on Twentyseventeen theme
3. Expanded information on the modal - functional level
4. Expanded information on the modal - marketing level

== Changelog ==

= 1.0.0 =

* Initial release

== Credits ==

Eightshift GDPR is maintained and sponsored by
[Infinum](https://www.infinum.co).

<img src="https://infinum.co/infinum.png" width="264">

== License ==

Eightshift GDPR is Copyright © 2018 Infinum. It is free software, and may be redistributed under the terms specified in the LICENSE file.

== Donate ==

We don't need your donations. Give it to charity instead. And check out our work at [Infinum](https://www.infinum.co).
