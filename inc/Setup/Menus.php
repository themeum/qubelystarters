<?php
/**
 * Handles menu registration
 *
 * @package Qubely_Starters
 */

namespace Qubely_Starters\Setup;

defined( 'ABSPATH' ) || exit;

/**
 * Menus class
 */
class Menus {
	/**
	 * Register default hooks and actions for WordPress
	 */
	public function register() {
		add_action( 'after_setup_theme', array( $this, 'menus' ) );
	}

	/**
	 * List of registered menus
	 *
	 * @return void
	 */
	public function menus() {
		register_nav_menus(
			array(
				'primary'   => esc_html__( 'Primary', 'qubelystarters' ),
				'secondary' => esc_html__( 'Footer', 'qubelystarters' ),
			)
		);
	}
}
