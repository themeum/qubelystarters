<?php
/**
 * Handles layout customization
 *
 * @package Qubely_Starters
 */

namespace Qubely_Starters\Api\Customizer\General;

use WP_Customize_Control;

defined( 'ABSPATH' ) || exit;

/**
 * Layout class
 */
class Layout {

	/**
	 * Register
	 *
	 * @param WP_Customize_Manager $wp_customize theme customizer object.
	 */
	public function register( $wp_customize ) {

		$wp_customize->add_section(
			'qubelystarters_layout_section',
			array(
				'panel'       => 'qubelystarters_customizer_panel',
				'title'       => esc_html__( 'Layout', 'qubelystarters' ),
				'description' => esc_html__( 'Layout Settings', 'qubelystarters' ),
				'priority'    => 3,
			)
		);
		$wp_customize->add_setting(
			'content_width',
			array(
				'title'             => esc_html__( 'Content Width (px)', 'qubelystarters' ),
				'transport'         => 'postMessage',
				'default'           => 1140,
				'sanitize_callback' => 'absint',
			)
		);
		$wp_customize->add_control(
			new WP_Customize_Control(
				$wp_customize,
				'content_width',
				array(
					'label'   => esc_html__( 'Content Width (px)', 'qubelystarters' ),
					'type'    => 'number',
					'section' => 'qubelystarters_layout_section',
				)
			)
		);
	}
}
