<?php
/**
 * Handles color customization
 *
 * @package Qubely_Starters
 */

namespace Qubely_Starters\Api\Customizer\General;

use WP_Customize_Color_Control;

defined( 'ABSPATH' ) || exit;

/**
 * Colors class
 */
class Colors {

	/**
	 * Register
	 *
	 * @param WP_Customize_Manager $wp_customize theme customizer object.
	 */
	public function register( $wp_customize ) {

		$wp_customize->add_section(
			'qubelystarters_colors_section',
			array(
				'panel'       => 'qubelystarters_customizer_panel',
				'title'       => esc_html__( 'Colors', 'qubelystarters' ),
				'description' => esc_html__( 'Colors Settings', 'qubelystarters' ),
				'priority'    => 3,
			)
		);
		$wp_customize->add_setting(
			'body_bg_color',
			array(
				'title'             => esc_html__( 'Body Background Color', 'qubelystarters' ),
				'transport'         => 'postMessage',
				'default'           => '#ffffff',
				'sanitize_callback' => 'sanitize_hex_color',
			)
		);
		$wp_customize->add_control(
			new WP_Customize_Color_Control(
				$wp_customize,
				'body_bg_color',
				array(
					'label'   => esc_html__( 'Body Background Color', 'qubelystarters' ),
					'section' => 'qubelystarters_colors_section',
				)
			)
		);
		$wp_customize->add_setting(
			'body_text_color',
			array(
				'title'             => esc_html__( 'Body Text Color', 'qubelystarters' ),
				'transport'         => 'postMessage',
				'default'           => '#000000',
				'sanitize_callback' => 'sanitize_hex_color',
			)
		);
		$wp_customize->add_control(
			new WP_Customize_Color_Control(
				$wp_customize,
				'body_text_color',
				array(
					'label'   => esc_html__( 'Body Text Color', 'qubelystarters' ),
					'section' => 'qubelystarters_colors_section',
				)
			)
		);
		$wp_customize->add_setting(
			'link_color',
			array(
				'title'             => esc_html__( 'Link Color', 'qubelystarters' ),
				'transport'         => 'postMessage',
				'default'           => '#000000',
				'sanitize_callback' => 'sanitize_hex_color',
			)
		);
		$wp_customize->add_control(
			new WP_Customize_Color_Control(
				$wp_customize,
				'link_color',
				array(
					'label'   => esc_html__( 'Link Color', 'qubelystarters' ),
					'section' => 'qubelystarters_colors_section',
				)
			)
		);
	}
}
