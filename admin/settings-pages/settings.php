<?php
/**
 * Provide an admin area view for the plugin
 *
 * @since 1.0.0
 * @package Eightshift_Gdpr\Admin\Settings_Pages
 */

?>

<div class="wrap">
  <h1><?php esc_html_e( 'GDPR', 'eightshift-gdpr' ); ?></h1>
  <hr/>

  <form method="post" action="options.php">
    <?php settings_fields( 'gdpr_settings_options' ); ?>
    <?php do_settings_sections( 'gdpr_settings_options' ); ?>
    <?php do_action( 'wpml_add_language_form_field' ); ?>
    <table class="form-table">
      <tr valign="top">
        <th scope="row"><?php esc_html_e( 'Activate GDPR', 'eightshift-gdpr' ); ?></th>
        <td>
          <?php $activate_checkbox = $general_helper->get_option_value( 'esgdpr_activate_checkbox' ); ?>
          <input <?php echo ( 'on' === $activate_checkbox ) ? 'checked="checked"' : ''; ?> name='<?php echo esc_attr( $general_helper->get_option_key( 'esgdpr_activate_checkbox' ) ); ?>' type='checkbox' />
        </td>
        <tr valign="top">
          <th scope="row"><?php esc_html_e( 'Statistics', 'eightshift-gdpr' ); ?></th>
          <td>
            <p class="description"><?php esc_html_e( 'Level 0', 'eightshift-gdpr' ); ?></p>
            <input class="large-text" readonly type="number" name="<?php echo esc_attr( $general_helper->get_option_key( 'esgdpr_stats_level_0' ) ); ?>" value="<?php echo esc_attr( $general_helper->get_option_value( 'esgdpr_stats_level_0' ) ); ?>" />
          </td>
          <td>
            <p class="description"><?php esc_html_e( 'Level 1', 'eightshift-gdpr' ); ?></p>
            <input class="large-text" readonly type="number" name="<?php echo esc_attr( $general_helper->get_option_key( 'esgdpr_stats_level_1' ) ); ?>" value="<?php echo esc_attr( $general_helper->get_option_value( 'esgdpr_stats_level_1' ) ); ?>" />
          </td>
          <td>
            <p class="description"><?php esc_html_e( 'Level 2', 'eightshift-gdpr' ); ?></p>
            <input class="large-text" readonly type="number" name="<?php echo esc_attr( $general_helper->get_option_key( 'esgdpr_stats_level_2' ) ); ?>" value="<?php echo esc_attr( $general_helper->get_option_value( 'esgdpr_stats_level_2' ) ); ?>" />
          </td>
        </tr>
      </tr>
    </table>

    <hr/>

    <h2><?php esc_html_e( 'General', 'eightshift-gdpr' ); ?></h2>
    <table class="form-table">
      <tr valign="top">
        <th scope="row"><?php esc_html_e( 'Title', 'eightshift-gdpr' ); ?></th>
        <td><input class="large-text" type="text" name="<?php echo esc_attr( $general_helper->get_option_key( 'esgdpr_title' ) ); ?>" value="<?php echo esc_attr( $general_helper->get_option_value( 'esgdpr_title' ) ); ?>" /></td>
      </tr>
      <tr valign="top">
        <th scope="row"><?php esc_html_e( 'Intro', 'eightshift-gdpr' ); ?></th>
        <td><?php wp_editor( $general_helper->get_option_value( 'esgdpr_intro' ), $general_helper->get_option_key( 'esgdpr_intro' ), array( 'textarea_rows' => '10' ) ); ?></td>
      </tr>
    </table>

    <hr/>

    <h2><?php esc_html_e( 'Required Level', 'eightshift-gdpr' ); ?></h2>
    <table class="form-table">
      <tr valign="top">
        <th scope="row"><?php esc_html_e( 'Title', 'eightshift-gdpr' ); ?></th>
        <td><input class="large-text" type="text" name="<?php echo esc_attr( $general_helper->get_option_key( 'esgdpr_cookie_required_title' ) ); ?>" value="<?php echo esc_attr( $general_helper->get_option_value( 'esgdpr_cookie_required_title' ) ); ?>" /></td>
      </tr>
      <tr valign="top">
        <th scope="row"><?php esc_html_e( 'Exclude List', 'eightshift-gdpr' ); ?></th>
        <td>
          <input class="large-text" type="text" name="<?php echo esc_attr( $general_helper->get_option_key( 'esgdpr_cookie_required_list' ) ); ?>" value="<?php echo esc_attr( $general_helper->get_option_value( 'esgdpr_cookie_required_list' ) ); ?>" />
          <p class="description"><?php esc_html_e( 'List all cookie keys that you want to use inside this level. Separate keys by comma "," with no space.', 'eightshift-gdpr' ); ?></p>
        </td>
      </tr>
      <tr valign="top">
        <th scope="row"><?php esc_html_e( 'Summary', 'eightshift-gdpr' ); ?></th>
        <td><?php wp_editor( $general_helper->get_option_value( 'esgdpr_cookie_required_summary' ), $general_helper->get_option_key( 'esgdpr_cookie_required_summary' ), array( 'textarea_rows' => '10' ) ); ?></td>
      </tr>
      <tr valign="top">
        <th scope="row"><?php esc_html_e( 'Description', 'eightshift-gdpr' ); ?></th>
        <td><?php wp_editor( $general_helper->get_option_value( 'esgdpr_cookie_required_description' ), $general_helper->get_option_key( 'esgdpr_cookie_required_description' ), array( 'textarea_rows' => '10' ) ); ?></td>
      </tr>
    </table>

    <hr/>

    <h2><?php esc_html_e( 'Functional Level', 'eightshift-gdpr' ); ?></h2>
    <table class="form-table">
      <tr valign="top">
        <th scope="row"><?php esc_html_e( 'Title', 'eightshift-gdpr' ); ?></th>
        <td><input class="large-text" type="text" name="<?php echo esc_attr( $general_helper->get_option_key( 'esgdpr_cookie_functional_title' ) ); ?>" value="<?php echo esc_attr( $general_helper->get_option_value( 'esgdpr_cookie_functional_title' ) ); ?>" /></td>
      </tr>
      <tr valign="top">
        <th scope="row"><?php esc_html_e( 'Exclude List', 'eightshift-gdpr' ); ?></th>
        <td>
          <input class="large-text" type="text" name="<?php echo esc_attr( $general_helper->get_option_key( 'esgdpr_cookie_functional_list' ) ); ?>" value="<?php echo esc_attr( $general_helper->get_option_value( 'esgdpr_cookie_functional_list' ) ); ?>" />
          <p class="description"><?php esc_html_e( 'List all cookie keys that you want to use inside this level. Separate keys by comma "," with no space.', 'eightshift-gdpr' ); ?></p>
        </td>
      </tr>
      <tr valign="top">
        <th scope="row"><?php esc_html_e( 'Summary', 'eightshift-gdpr' ); ?></th>
        <td><?php wp_editor( $general_helper->get_option_value( 'esgdpr_cookie_functional_summary' ), $general_helper->get_option_key( 'esgdpr_cookie_functional_summary' ), array( 'textarea_rows' => '10' ) ); ?></td>
      </tr>
      <tr valign="top">
        <th scope="row"><?php esc_html_e( 'Description', 'eightshift-gdpr' ); ?></th>
        <td><?php wp_editor( $general_helper->get_option_value( 'esgdpr_cookie_functional_description' ), $general_helper->get_option_key( 'esgdpr_cookie_functional_description' ), array( 'textarea_rows' => '10' ) ); ?></td>
      </tr>
    </table>

    <hr/>

    <h2><?php esc_html_e( 'Marketing Level', 'eightshift-gdpr' ); ?></h2>
    <table class="form-table">
      <tr valign="top">
        <th scope="row"><?php esc_html_e( 'Title', 'eightshift-gdpr' ); ?></th>
        <td><input class="large-text" type="text" name="<?php echo esc_attr( $general_helper->get_option_key( 'esgdpr_cookie_marketing_title' ) ); ?>" value="<?php echo esc_attr( $general_helper->get_option_value( 'esgdpr_cookie_marketing_title' ) ); ?>" /></td>
      </tr>
      <tr valign="top">
        <th scope="row"><?php esc_html_e( 'Summary', 'eightshift-gdpr' ); ?></th>
        <td><?php wp_editor( $general_helper->get_option_value( 'esgdpr_cookie_marketing_summary' ), $general_helper->get_option_key( 'esgdpr_cookie_marketing_summary' ), array( 'textarea_rows' => '10' ) ); ?></td>
      </tr>
      <tr valign="top">
        <th scope="row"><?php esc_html_e( 'Description', 'eightshift-gdpr' ); ?></th>
        <td><?php wp_editor( $general_helper->get_option_value( 'esgdpr_cookie_marketing_description' ), $general_helper->get_option_key( 'esgdpr_cookie_marketing_description' ), array( 'textarea_rows' => '10' ) ); ?></td>
      </tr>
    </table>

    <hr/>

    <h2><?php esc_html_e( 'General', 'eightshift-gdpr' ); ?></h2>
    <table class="form-table">
      <tr valign="top">
        <th scope="row"><?php esc_html_e( 'Additional External Domain List', 'eightshift-gdpr' ); ?></th>
        <td>
          <input class="large-text" type="text" name="<?php echo esc_attr( $general_helper->get_option_key( 'esgdpr_cookie_domain_list' ) ); ?>" value="<?php echo esc_attr( $general_helper->get_option_value( 'esgdpr_cookie_domain_list' ) ); ?>" />
          <p class="description"><?php esc_html_e( 'List all cookie domains that are not automaticly deleted when setting level to 0. Separate keys by comma "," with no space.', 'eightshift-gdpr' ); ?></p>
        </td>
      </tr>
    </table>

    <hr/>

    <?php submit_button(); ?>
  </form>
</div>
