<?php
/**
 * Radio image
 *
 * @package Qubely_Starters
 */

namespace Qubely_Starters\Api\Customizer\Custom_Controls;

use WP_Customize_Control;

defined( 'ABSPATH' ) || exit;

/**
 * Radio image custom control
 */
class Radio_Image_Control extends WP_Customize_Control {

	/**
	 * Public $type
	 *
	 * @var string control type
	 */
	public $type = 'qubelystarters_radio_image';

	/**
	 * Public $choices
	 *
	 * @var array
	 */
	public $choices = array();

	/**
	 * Send PHP data to JS
	 */
	public function to_json() {
		parent::to_json();
		$this->json['choices'] = $this->choices;
	}

	/**
	 * Render content to override the default
	 * and create one using react
	 */
	public function render_content() {
	}
}

