<?php
/**
 * Handles stuff on Customizer
 *
 * @package Qubely_Starters
 */

namespace Qubely_Starters\Api\Customizer;

use Qubely_Starters\Api\Customizer\Blog\Meta;
use Qubely_Starters\Api\Customizer\Blog\Sidebar;
use Qubely_Starters\Api\Customizer\Header\Header;
use Qubely_Starters\Api\Customizer\Footer\Footer;
use Qubely_Starters\Api\Customizer\General\Colors;
use Qubely_Starters\Api\Customizer\General\Layout;
use Qubely_Starters\Api\Customizer\Blog\Blog_Layout;
use Qubely_Starters\Api\Customizer\General\Typography;

defined( 'ABSPATH' ) || exit;

/**
 * Customizer class
 */
class Customizer {

	/**
	 * Register default hooks and actions for WordPress
	 */
	public function register() {
		add_action( 'customize_register', array( $this, 'initialize' ) );
	}

	/**
	 * Store all the classes inside an array
	 *
	 * @return array Full list of classes
	 */
	public function get_classes() {
		return array(
			Meta::class,
			Header::class,
			Footer::class,
			Colors::class,
			Layout::class,
			Blog_Layout::class,
			Sidebar::class,
			Typography::class,
		);
	}

	/**
	 * Initialize services
	 *
	 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
	 */
	public function initialize( $wp_customize ) {
		foreach ( $this->get_classes() as $class ) {
			$service = new $class();
			if ( method_exists( $class, 'register' ) ) {
				$service->register( $wp_customize );
			}
		}

		$this->add_customizer_panel( $wp_customize );
	}

	/**
	 * Add customizer panel for Qubely_Starters
	 *
	 * @param WP_Customize_Manager $wp_customize theme customizer object.
	 */
	public function add_customizer_panel( $wp_customize ) {
		$wp_customize->remove_section( 'colors' );
		$wp_customize->add_panel(
			'qubelystarters_customizer_panel',
			array(
				'title'      => __( 'Qubely Starters Options Panel', 'qubelystarters' ),
				'capability' => 'edit_theme_options',
				'priority'   => 5,
			)
		);
	}
}
