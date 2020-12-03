<?php
/**
 * Handles registering header components
 *
 * @package Qubely_Starters
 */

namespace Qubely_Starters\Traits;

defined( 'ABSPATH' ) || exit;

/**
 * Header components trait
 */
trait Header_Components {

	/**
	 * Navbar toggler
	 */
	public static function navbar_toggler() {

		$toggler_html = '<li class="nav-close"><button class="btn-nav-close">X</button></li>';

		return $toggler_html;
	}
}
