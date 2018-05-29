<?php
/**
 * Provide template for modal in theme.
 *
 * @since 1.0.0
 * @package Eightshift_Gdpr\Front\Tempaltes
 */

$title = $esgdpr_general_helper->get_array_value( 'title', $options );
$intro = $esgdpr_general_helper->get_array_value( 'intro', $options );
$items = $esgdpr_general_helper->get_array_value( 'items', $options );

?>

<div class="modal-gdpr js-modal-gdpr" data-modal="gdpr">
  <div class="modal-gdpr__inner">
    <div class="modal-gdpr__container">

      <?php if ( ! empty( $title ) ) { ?>
        <h2 class="modal-gdpr__title">
          <?php echo esc_html( $title ); ?>
        </h2>
      <?php } ?>

      <div class="modal-gdpr__content js-modal-gdpr-screen-basic">
        <?php if ( ! empty( $intro ) ) { ?>
          <div class="modal-gdpr__intro content-media-style">
            <?php echo wp_kses_post( apply_filters( 'the_content', $intro ) ); ?>
          </div>
        <?php } ?>

        <a href="#" class="modal-gdpr__more-link js-modal-gdpr-show-advance">
          <?php esc_html_e( 'More info', 'hpb' ); ?>
        </a>

        <div class="modal-gdpr__btn-list">
          <a href="#" class="btn modal-gdpr__btn js-modal-gdpr-btn" data-level="2">
            <?php esc_html_e( 'I accept', 'hpb' ); ?>
            <span class="icon-animated-arrow">
              <span class="icon-animated-arrow__item"></span>
              <span class="icon-animated-arrow__item"></span>
              <span class="icon-animated-arrow__item"></span>
            </span>
          </a>
          <a href="#" class="btn btn--color-default-bordered modal-gdpr__btn js-modal-gdpr-btn" data-level="0">
            <?php esc_html_e( 'I don\'t accept', 'hpb' ); ?>
            <span class="icon-animated-arrow">
              <span class="icon-animated-arrow__item"></span>
              <span class="icon-animated-arrow__item"></span>
              <span class="icon-animated-arrow__item"></span>
            </span>
          </a>
        </div>
      </div>

      <div class="modal-gdpr__content modal-gdpr__content--advance js-modal-gdpr-screen-advance">
        <div class="modal-gdpr__grid">
          <div class="modal-gdpr__grid-item modal-gdpr__selection">
            <?php if ( ! empty( $items ) ) { ?>
              <div class="modal-gdpr__selection-list js-modal-gdpr-selection-container" id="slider">
                <?php $i = 0; ?>
                <?php foreach ( $items as $key => $value ) { ?>
                  <?php if ( ! empty( $value ) ) { ?>
                    <?php
                    $title   = $esgdpr_general_helper->get_array_value( 'title', $value );
                    $summary = $esgdpr_general_helper->get_array_value( 'summary', $value );
                    ?>
                    <?php if ( ! empty( $title ) ) { ?>
                      <label for="gdpr-selection-<?php echo esc_attr( $i ); ?>" class="modal-gdpr__selection-item js-modal-gdpr-selection <?php echo ( $selected_item === $i ) ? 'is-active' : ''; ?>" data-id="<?php echo esc_attr( $key ); ?>" data-level="<?php echo esc_attr( $i ); ?>">
                        <input type="radio" class="js-modal-gdpr-selection-input modal-gdpr__selection-input" name="gdpr-selection" id="gdpr-selection-<?php echo esc_attr( $i ); ?>" value="<?php echo esc_attr( $i ); ?>" <?php echo ( $selected_item === $i ) ? 'checked' : ''; ?>>
                        <?php if ( ! empty( $title ) ) { ?>
                          <div class="modal-gdpr__selection-item-title">
                            <?php echo esc_html( $title ); ?>
                          </div>
                        <?php } ?>
                        <?php if ( ! empty( $summary ) ) { ?>
                          <div class="modal-gdpr__selection-item-summary">
                            <?php echo wp_kses_post( apply_filters( 'the_content', $summary ) ); ?>
                          </div>
                        <?php } ?>
                        <div class="modal-gdpr__selection-item-link">
                          <?php esc_html_e( 'Switch to cookie level', 'hpb' ); ?>
                        </div>
                      </label>
                    <?php } ?>
                  <?php } ?>
                <?php $i++; } ?>
              </div>
            <?php } ?>
          </div>
          <div class="modal-gdpr__grid-item modal-gdpr__description">
            <?php if ( ! empty( $items ) ) { ?>
              <?php $i = 0; ?>
              <?php foreach ( $items as $key => $value ) { ?>
                <?php if ( ! empty( $value ) ) { ?>
                  <?php $description = $esgdpr_general_helper->get_array_value( 'description', $value ); ?>
                  <?php if ( ! empty( $description ) ) { ?>
                    <div class="modal-gdpr__description-content js-modal-gdpr-description <?php echo ( $selected_item === $i ) ? 'is-active' : ''; ?>" data-id="<?php echo esc_attr( $key ); ?>" data-level="<?php echo esc_attr( $i ); ?>">
                      <?php echo wp_kses_post( apply_filters( 'the_content', $description ) ); ?>
                    </div>
                  <?php } ?>
                <?php } ?>
              <?php $i++; } ?>
            <?php } ?>
          </div>
        </div>

        <div class="modal-gdpr__btn-list">
          <a href="#" class="btn modal-gdpr__btn js-modal-gdpr-btn js-modal-gdpr-btn-advance" data-level="<?php echo esc_attr( $selected_item ); ?>">
            <?php esc_html_e( 'I accept', 'hpb' ); ?>
            <span class="icon-animated-arrow">
              <span class="icon-animated-arrow__item"></span>
              <span class="icon-animated-arrow__item"></span>
              <span class="icon-animated-arrow__item"></span>
            </span>
          </a>
          <a href="#" class="btn btn--color-default-bordered modal-gdpr__btn js-modal-gdpr-btn" data-level="0">
            <?php esc_html_e( 'I don\'t accept', 'hpb' ); ?>
            <span class="icon-animated-arrow">
              <span class="icon-animated-arrow__item"></span>
              <span class="icon-animated-arrow__item"></span>
              <span class="icon-animated-arrow__item"></span>
            </span>
          </a>
        </div>
      </div>

    </div>
  </div>
  <?php wp_nonce_field( 'esgdpr_stats_action', 'esgdpr_stats' ); ?>
</div>
