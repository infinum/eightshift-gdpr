<?php

/**
 * GDPR notice popup component
 *
 * @package EightshiftGdpr
 */

use EightshiftGdprVendor\EightshiftLibs\Helpers\Components;

$selectedItem = $attributes['selectedItem'] ?? '';
$title = $attributes['title'] ?? '';
$intro = $attributes['intro'] ?? '';
$items = $attributes['items'] ?? '';

$selectorClass = 'modal-gdpr';

?>

<div class="modal-gdpr js-modal-gdpr" data-modal="gdpr">
	<div class="modal-gdpr__inner">
		<div class="modal-gdpr__container">
			<div class="modal-gdpr__content modal-gdpr__content--basic js-modal-gdpr-screen-basic">
				<?php
				echo wp_kses_post(
					Components::render(
						'paragraph',
						[
							'blockClass' => $selectorClass,
							'selectorClass' => 'intro',
							'paragraph' => [
								'content' => \wp_strip_all_tags($intro),
								'styleSize' => 'small',
							],
						]
					)
				);
				?>

				<div class="modal-gdpr__btn-list">
					<div class="modal-gdpr__btn-list-item">
						<?php
						echo wp_kses_post(
							Components::render(
								'button',
								[
									'blockClass' => $selectorClass,
									'button' => [
										'title' => __('Only required cookies', 'cormeum'),
										'jsSelector' => 'js-modal-gdpr-btn',
										'styleColor' => 'tertiary',
										'attrs' => [
											'data-level=0'
										]
									],
								]
							)
						);
						?>
					</div>
					<div class="modal-gdpr__btn-list-item">
						<?php
						echo wp_kses_post(
							Components::render(
								'button',
								[
									'blockClass' => $selectorClass,
									'button' => [
										'title' => __('Accept all cookies', 'cormeum'),
										'jsSelector' => 'js-modal-gdpr-btn',
										'styleColor' => 'tertiary',
										'hasIcon' => true,
										'attrs' => [
											'data-level=2'
										]
									],
								]
							)
						);
						?>
					</div>
					<div class="modal-gdpr__btn-list-item">
						<?php
						echo wp_kses_post(
							Components::render(
								'button',
								[
									'blockClass' => $selectorClass,
									'button' => [
										'title' => __('Info & settings', 'cormeum'),
										'jsSelector' => 'js-modal-gdpr-show-advance',
										'styleColor' => 'tertiary',
										'attrs' => [
											'data-level=0'
										]
									],
								]
							)
						);
						?>
					</div>
				</div>
			</div>

			<div class="modal-gdpr__content modal-gdpr__content--advance js-modal-gdpr-screen-advance">
				<div class="modal-gdpr__header">
					<?php
					echo wp_kses_post(
						Components::render(
							'heading',
							[
								'blockClass' => $selectorClass,
								'selectorClass' => 'title',
								'heading' => [
									'content' => $title,
									'styleSize' => 'large',
								],
							]
						)
					);
					?>
					<i class="modal-gdpr__close js-modal-gdpr-hide-advance"></i>
				</div>
				<div class="modal-gdpr__grid">
					<div class="modal-gdpr__grid-item modal-gdpr__selection">
						<?php if (! empty($items)) { ?>
							<div class="modal-gdpr__selection-list js-modal-gdpr-selection-container" id="slider">
								<?php $i = 0; ?>
								<?php foreach ($items as $key => $value) { ?>
									<?php if (! empty($value)) { ?>
										<?php
										$title   = $value['title'] ?? '';
										$summary = $value['summary'] ?? '';
										?>
										<?php if (! empty($title)) { ?>
											<label for="gdpr-selection-<?php echo esc_attr($i); ?>" class="modal-gdpr__selection-item js-modal-gdpr-selection <?php echo ($selectedItem === $i) ? 'is-active' : ''; ?>" data-id="<?php echo esc_attr($key); ?>" data-level="<?php echo esc_attr($i); ?>">
												<input type="radio" class="js-modal-gdpr-selection-input modal-gdpr__selection-input" name="gdpr-selection" id="gdpr-selection-<?php echo esc_attr($i); ?>" value="<?php echo esc_attr($i); ?>" <?php echo ($selectedItem === $i) ? 'checked' : ''; ?>>
												<?php
												echo \wp_kses_post(
													Components::render(
														'heading',
														[
															'blockClass' => $selectorClass,
															'selectorClass' => 'selection-item-title',
															'heading' => [
																'content' => $title,
																'styleSize' => 'default',
																'isBold' => true,
															],
														]
													)
												);
												?>
												<div class="wrapper wrapper__spacing-top-large--5 wrapper__spacing-bottom-large--10">
												</div>
												<?php
												echo \wp_kses_post(
													Components::render(
														'paragraph',
														[
															'blockClass' => $selectorClass,
															'selectorClass' => 'selection-item-summary',
															'paragraph' => [
																'content' => \wp_strip_all_tags($summary),
																'styleSize' => 'medium',
															],
														]
													)
												);
												?>
												<div class="wrapper wrapper__spacing-top-large--10 wrapper__spacing-bottom-large--10">
												</div>
												<strong>
												<?php
												echo \wp_kses_post(
													Components::render(
														'paragraph',
														[
															'blockClass' => $selectorClass,
															'selectorClass' => 'selection-item-link',
															'paragraph' => [
																'content' => __('Switch to cookie level', 'cormeum'),
																'styleSize' => 'medium',
															],
														]
													)
												);
												?>
												</strong>
											</label>
										<?php } ?>
									<?php } ?>
									<?php
										$i++;
								}
								?>
							</div>
						<?php } ?>
					</div>
					<div class="modal-gdpr__grid-item modal-gdpr__description">
						<?php if (! empty($items)) { ?>
							<?php $i = 0; ?>
							<?php foreach ($items as $key => $value) { ?>
								<?php if (! empty($value)) { ?>
									<?php $description = $value['description'] ?? ''; ?>
									<?php if (! empty($description)) { ?>
										<div class="modal-gdpr__description-content js-modal-gdpr-description <?php echo ($selectedItem === $i) ? 'is-active' : ''; ?>" data-id="<?php echo esc_attr($key); ?>" data-level="<?php echo esc_attr($i); ?>">
											<?php echo wp_kses_post(apply_filters('the_content', $description)); ?>
										</div>
									<?php } ?>
								<?php } ?>
								<?php
										$i++;
							}
							?>
						<?php } ?>
					</div>
				</div>

				<div class="modal-gdpr__btn-list modal-gdpr__btn-list--advanced">
					<div class="modal-gdpr__btn-list-item">
						<?php
						echo wp_kses_post(
							Components::render(
								'button',
								[
									'blockClass' => $selectorClass,
									'button' => [
										'title' => __('Accept selected level', 'cormeum'),
										'jsSelector' => 'js-modal-gdpr-btn-advance js-modal-gdpr-btn',
										'styleColor' => 'tertiary',
										'hasIcon' => true,
										'attrs' => [
											"data-level={$selectedItem}"
										]
									],
								]
							)
						);
						?>
					</div>
				</div>
			</div>

		</div>
	</div>
	<?php wp_nonce_field('esgdpr_stats_action', 'esgdpr_stats'); ?>
</div>
