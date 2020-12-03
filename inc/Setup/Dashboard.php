<?php
/**
 * Dashboard options page
 *
 * @package Qubely_Starters
 */

namespace Qubely_Starters\Setup;

defined( 'ABSPATH' ) || exit;

/**
 * Dashboard class
 */
class Dashboard {

	/**
	 * Register
	 */
	public function register() {
		add_action( 'admin_menu', array( $this, 'add_admin_menu' ), 9 );
	}

	/**
	 * Add admin menu
	 */
	public function add_admin_menu() {

		$page_title = __( 'Qubely Starters Options', 'qubelystarters' );
		$menu_title = __( 'Qubely Starters', 'qubelystarters' );
		$capability = 'manage_options';
		$menu_slug  = 'qubelystarters';
		$callback   = array( $this, 'callback' );
		$icon       = 'dashicons-superhero-alt';

		add_menu_page( $page_title, $menu_title, $capability, $menu_slug, $callback, $icon );
		add_submenu_page( $menu_slug, $page_title, __( 'General', 'qubelystarters' ), $capability, $menu_slug, $callback );
	}

	/**
	 * Callback
	 */
	public function callback() {
		echo '<div id="qubelystarters-dashboard"></div>';
	}
}
