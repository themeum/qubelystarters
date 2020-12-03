<?php
/**
 * Toggle switch
 *
 * @package Qubely_Starters
 */

namespace Qubely_Starters\Api\Customizer\Custom_Controls;

use WP_Customize_Control;

defined( 'ABSPATH' ) || exit;

/**
 * Toggle switch custom control
 */
class Toggle_Switch_Control extends WP_Customize_Control {

	/**
	 * Public $type
	 *
	 * @var string control type
	 */
	public $type = 'qubelystarters_toggle_switch';

	/**
	 * Public $deafult
	 *
	 * @var array
	 */
	public $default = array();

	/**
	 * Send PHP data to JS
	 */
	public function to_json() {
		parent::to_json();
		$this->json['default'] = $this->default;
	}

	/**
	 * Render content to override the default
	 * and create one using react
	 */
	public function render_content() {
	}
}

