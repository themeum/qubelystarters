<?php
/**
 * Handles header customization
 *
 * @package Qubely_Starters
 */

namespace Qubely_Starters\Api\Customizer\Header;

use WP_Customize_Control;
use WP_Customize_Color_Control;
use Qubely_Starters\Api\Customizer\Custom_Controls\Radio_Image_Control;
use Qubely_Starters\Api\Customizer\Custom_Controls\Toggle_Switch_Control;
use Qubely_Starters\Api\Customizer\Custom_Controls\Responsive_Range_Slider_Control;

defined( 'ABSPATH' ) || exit;

/**
 * Header class
 */
class Header {

	/**
	 * Register
	 *
	 * @param WP_Customize_Manager $wp_customize theme customizer object.
	 */
	public function register( $wp_customize ) {

		$wp_customize->add_section(
			'qubelystarters_header_section',
			array(
				'panel'       => 'qubelystarters_customizer_panel',
				'title'       => esc_html__( 'Header', 'qubelystarters' ),
				'description' => esc_html__( 'Customize the header', 'qubelystarters' ),
				'priority'    => 5,
			)
		);

		// Overriding default controls.
		$wp_customize->get_control( 'custom_logo' )->section   = 'qubelystarters_header_section';
		$wp_customize->get_control( 'custom_logo' )->transport = 'postMessage';

		// Selective refresh for custom_logo.
		$wp_customize->selective_refresh->add_partial(
			'custom_logo',
			array(
				'selector'            => '.site-branding',
				'container_inclusive' => true,
				'render_callback'     => function() {
					return the_custom_logo();
				},
			)
		);
		$wp_customize->add_setting(
			'header_type_select',
			array(
				'title'             => esc_html__( 'Select Header Type', 'qubelystarters' ),
				'transport'         => 'postMessage',
				'default'           => 'header_one',
				'sanitize_callback' => 'sanitize_select_radio',
			)
		);
		$wp_customize->add_control(
			new Radio_Image_Control(
				$wp_customize,
				'header_type_select',
				array(
					'label'   => esc_html__( 'Select Header Type', 'qubelystarters' ),
					'section' => 'qubelystarters_header_section',
					'choices' => array(
						'header_one'   => array(
							'name'  => esc_html__( 'Header Fullwidth', 'qubelystarters' ),
							'image' => get_template_directory_uri() . '/assets/dist/images/header-fullwidth.svg',
						),
						'header_two'   => array(
							'name'  => esc_html__( 'Header Standard', 'qubelystarters' ),
							'image' => get_template_directory_uri() . '/assets/dist/images/header-standard.svg',
						),
						'header_three' => array(
							'name'  => esc_html__( 'Header Transparent', 'qubelystarters' ),
							'image' => get_template_directory_uri() . '/assets/dist/images/header-transparent.svg',
						),
						'header_four'  => array(
							'name'  => esc_html__( 'Header Centered Logo', 'qubelystarters' ),
							'image' => get_template_directory_uri() . '/assets/dist/images/logo-center.svg',
						),
					),
				)
			)
		);
		$wp_customize->selective_refresh->add_partial(
			'header_type_select',
			array(
				'selector'            => '#masthead',
				'container_inclusive' => true,
				'render_callback'     => function() {
					return get_template_part( 'views/partials/header/header_type_select' );
				},
			)
		);
		$wp_customize->add_setting(
			'menu_bg_color',
			array(
				'title'             => esc_html__( 'Header BG Color', 'qubelystarters' ),
				'transport'         => 'postMessage',
				'default'           => '#ffffff',
				'sanitize_callback' => 'sanitize_hex_color',
			)
		);
		$wp_customize->add_control(
			new WP_Customize_Color_Control(
				$wp_customize,
				'menu_bg_color',
				array(
					'label'   => esc_html__( 'Header BG Color', 'qubelystarters' ),
					'section' => 'qubelystarters_header_section',
				)
			)
		);
		$wp_customize->add_setting(
			'menu_link_color',
			array(
				'title'             => esc_html__( 'Menu Link Color', 'qubelystarters' ),
				'transport'         => 'postMessage',
				'default'           => '#000000',
				'sanitize_callback' => 'sanitize_hex_color',
			)
		);
		$wp_customize->add_control(
			new WP_Customize_Color_Control(
				$wp_customize,
				'menu_link_color',
				array(
					'label'   => esc_html__( 'Menu Link Color', 'qubelystarters' ),
					'section' => 'qubelystarters_header_section',
				)
			)
		);
		$wp_customize->add_setting(
			'menu_link_active_color',
			array(
				'title'             => esc_html__( 'Menu Link Active and Hover Color', 'qubelystarters' ),
				'transport'         => 'postMessage',
				'default'           => '#1500ff',
				'sanitize_callback' => 'sanitize_hex_color',
			)
		);
		$wp_customize->add_control(
			new WP_Customize_Color_Control(
				$wp_customize,
				'menu_link_active_color',
				array(
					'label'   => esc_html__( 'Menu Link Active and Hover Color', 'qubelystarters' ),
					'section' => 'qubelystarters_header_section',
				)
			)
		);
		$wp_customize->add_setting(
			'menu_link_font_size',
			array(
				'title'             => esc_html__( 'Font Size (px)', 'qubelystarters' ),
				'transport'         => 'postMessage',
				'default'           => '{ "mobile": 13, "tablet": 13, "desktop": 16 }',
				'sanitize_callback' => 'sanitize_range_value',
			)
		);
		$wp_customize->add_control(
			new Responsive_Range_Slider_Control(
				$wp_customize,
				'menu_link_font_size',
				array(
					'label'       => esc_html__( 'Font Size (px)', 'qubelystarters' ),
					'section'     => 'qubelystarters_header_section',
					'input_attrs' => array(
						'min'        => 8,
						'max'        => 100,
						'units'      => array( 'px' ),
						'defaultVal' => array(
							'mobile'  => 13,
							'tablet'  => 13,
							'desktop' => 16,
						),
					),
				)
			)
		);
		$wp_customize->add_setting(
			'menu_link_font_weight',
			array(
				'title'             => esc_html__( 'Font Weight', 'qubelystarters' ),
				'transport'         => 'postMessage',
				'default'           => 700,
				'sanitize_callback' => 'sanitize_select_radio',
			)
		);
		$wp_customize->add_control(
			new WP_Customize_Control(
				$wp_customize,
				'menu_link_font_weight',
				array(
					'label'   => esc_html__( 'Font Weight', 'qubelystarters' ),
					'section' => 'qubelystarters_header_section',
					'type'    => 'select',
					'choices' => array(
						100 => 100,
						300 => 300,
						400 => 400,
						500 => 500,
						700 => 700,
						900 => 900,
					),
				)
			)
		);
		$wp_customize->add_setting(
			'header_search_toggle',
			array(
				'title'             => esc_html__( 'Show Search Icon?', 'qubelystarters' ),
				'transport'         => 'postMessage',
				'default'           => true,
				'sanitize_callback' => isset( $input ) ? true : false,
			)
		);
		$wp_customize->add_control(
			new Toggle_Switch_Control(
				$wp_customize,
				'header_search_toggle',
				array(
					'label'           => esc_html__( 'Show Search Icon?', 'qubelystarters' ),
					'section'         => 'qubelystarters_header_section',
					'active_callback' => 'control_active_callback_search',
				)
			)
		);
		$wp_customize->add_setting(
			'cta_text_toggle',
			array(
				'title'             => esc_html__( 'Show CTA Button?', 'qubelystarters' ),
				'transport'         => 'postMessage',
				'default'           => true,
				'sanitize_callback' => isset( $input ) ? true : false,
			)
		);
		$wp_customize->add_control(
			new Toggle_Switch_Control(
				$wp_customize,
				'cta_text_toggle',
				array(
					'label'           => esc_html__( 'Show CTA Button?', 'qubelystarters' ),
					'section'         => 'qubelystarters_header_section',
					'active_callback' => 'control_active_callback',
				)
			)
		);
		$wp_customize->add_setting(
			'cta_background',
			array(
				'title'             => esc_html__( 'CTA Background Color', 'qubelystarters' ),
				'transport'         => 'postMessage',
				'default'           => '#1539e9',
				'sanitize_callback' => 'sanitize_hex_color',
			)
		);
		$wp_customize->add_control(
			new WP_Customize_Color_Control(
				$wp_customize,
				'cta_background',
				array(
					'label'           => esc_html__( 'CTA Background Color', 'qubelystarters' ),
					'section'         => 'qubelystarters_header_section',
					'active_callback' => 'control_active_callback',
				)
			)
		);
		$wp_customize->add_setting(
			'cta_color',
			array(
				'title'             => esc_html__( 'CTA Text Color', 'qubelystarters' ),
				'transport'         => 'postMessage',
				'default'           => '#ffffff',
				'sanitize_callback' => 'sanitize_hex_color',
			)
		);
		$wp_customize->add_control(
			new WP_Customize_Color_Control(
				$wp_customize,
				'cta_color',
				array(
					'label'           => esc_html__( 'CTA Text Color', 'qubelystarters' ),
					'section'         => 'qubelystarters_header_section',
					'active_callback' => 'control_active_callback',
				)
			)
		);
		$wp_customize->add_setting(
			'cta_text',
			array(
				'title'             => esc_html__( 'CTA Text', 'qubelystarters' ),
				'transport'         => 'postMessage',
				'default'           => 'BUY NOW',
				'sanitize_callback' => 'wp_filter_nohtml_kses',
			)
		);
		$wp_customize->add_control(
			new WP_Customize_Control(
				$wp_customize,
				'cta_text',
				array(
					'label'           => esc_html__( 'CTA text', 'qubelystarters' ),
					'section'         => 'qubelystarters_header_section',
					'type'            => 'text',
					'active_callback' => 'control_active_callback',
				)
			)
		);
		$wp_customize->add_setting(
			'cta_text_link',
			array(
				'title'             => esc_html__( 'CTA Text Link', 'qubelystarters' ),
				'transport'         => 'postMessage',
				'default'           => '#',
				'sanitize_callback' => 'esc_url_raw',
			)
		);
		$wp_customize->add_control(
			new WP_Customize_Control(
				$wp_customize,
				'cta_text_link',
				array(
					'label'           => esc_html__( 'CTA Text Link', 'qubelystarters' ),
					'section'         => 'qubelystarters_header_section',
					'type'            => 'text',
					'active_callback' => 'control_active_callback',
				)
			)
		);
		$wp_customize->add_setting(
			'cta_font_size',
			array(
				'title'             => esc_html__( 'CTA Font Size (px)', 'qubelystarters' ),
				'transport'         => 'postMessage',
				'default'           => '{ "mobile": 13, "tablet": 13, "desktop": 16 }',
				'sanitize_callback' => 'sanitize_range_value',
			)
		);
		$wp_customize->add_control(
			new Responsive_Range_Slider_Control(
				$wp_customize,
				'cta_font_size',
				array(
					'label'           => esc_html__( 'CTA Font Size (px)', 'qubelystarters' ),
					'section'         => 'qubelystarters_header_section',
					'active_callback' => 'control_active_callback',
					'input_attrs'     => array(
						'min'        => 8,
						'max'        => 100,
						'units'      => array( 'px' ),
						'defaultVal' => array(
							'mobile'  => 13,
							'tablet'  => 13,
							'desktop' => 16,
						),
					),
				)
			)
		);
		$wp_customize->add_setting(
			'cta_text_font_weight',
			array(
				'title'             => esc_html__( 'CTA Font Weight', 'qubelystarters' ),
				'transport'         => 'postMessage',
				'default'           => 700,
				'sanitize_callback' => 'sanitize_select_radio',
			)
		);
		$wp_customize->add_control(
			new WP_Customize_Control(
				$wp_customize,
				'cta_text_font_weight',
				array(
					'label'           => esc_html__( 'CTA Font Weight', 'qubelystarters' ),
					'section'         => 'qubelystarters_header_section',
					'type'            => 'select',
					'choices'         => array(
						100 => 100,
						300 => 300,
						400 => 400,
						500 => 500,
						700 => 700,
						900 => 900,
					),
					'active_callback' => 'control_active_callback',
				)
			)
		);
	}
}
