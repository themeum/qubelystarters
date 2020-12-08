<?php
/**
 * Typography
 *
 * @package Qubely_Starters
 */

namespace Qubely_Starters\Api\Customizer\Custom_Controls;

use WP_Customize_Control;

defined( 'ABSPATH' ) || exit;

/**
 * Typography custom control
 */
class Typography_Control extends WP_Customize_Control {

	/**
	 * Public $type
	 *
	 * @var string control type
	 */
	public $type = 'qubelystarters_typography';

	/**
	 * Additional arguments passed to JS.
	 *
	 * @var array
	 */
	public $input_attrs = array();

	/**
	 * Send PHP data to JS
	 */
	public function to_json() {
		parent::to_json();
		$this->json['input_attrs'] = is_array( $this->input_attrs ) ? wp_json_encode( $this->input_attrs ) : $this->input_attrs;
	}

	/**
	 * Render content to override the default
	 * and create one using react
	 */
	public function render_content() {
	}
}

