<?php
/**
 * Handles sidebar customization
 *
 * @package Qubely_Starters
 */

namespace Qubely_Starters\Api\Customizer\Blog;

use Qubely_Starters\Api\Customizer\Custom_Controls\Radio_Image_Control;

defined( 'ABSPATH' ) || exit;

/**
 * Sidebar class
 */
class Sidebar {

	/**
	 * Register
	 *
	 * @param WP_Customize_Manager $wp_customize theme customizer object.
	 */
	public function register( $wp_customize ) {

		$wp_customize->add_section(
			'qubelystarters_blog_section',
			array(
				'panel'       => 'qubelystarters_customizer_panel',
				'title'       => esc_html__( 'Blog', 'qubelystarters' ),
				'description' => esc_html__( 'Customize blog', 'qubelystarters' ),
				'priority'    => 6,
			)
		);
		$wp_customize->add_setting(
			'sidebar_type_select',
			array(
				'title'             => esc_html__( 'Blog Sidebar Type', 'qubelystarters' ),
				'transport'         => 'postMessage',
				'default'           => 'sidebar_right',
				'sanitize_callback' => 'sanitize_select_radio',
			)
		);
		$wp_customize->selective_refresh->add_partial(
			'sidebar_type_select',
			array(
				'selector'            => '#sidebar',
				'container_inclusive' => true,
				'render_callback'     => '__return_true',
			)
		);
		$wp_customize->add_control(
			new Radio_Image_Control(
				$wp_customize,
				'sidebar_type_select',
				array(
					'label'   => esc_html__( 'Blog Sidebar Type', 'qubelystarters' ),
					'section' => 'qubelystarters_blog_section',
					'choices' => array(
						'sidebar_none'  => array(
							'name'  => esc_html__( 'No Sidebar', 'qubelystarters' ),
							'image' => get_template_directory_uri() . '/assets/dist/images/no-sidebar.svg',
						),
						'sidebar_left'  => array(
							'name'  => esc_html__( 'Left Sidebar', 'qubelystarters' ),
							'image' => get_template_directory_uri() . '/assets/dist/images/sidebar-left.svg',
						),
						'sidebar_right' => array(
							'name'  => esc_html__( 'Right Sidebar', 'qubelystarters' ),
							'image' => get_template_directory_uri() . '/assets/dist/images/sidebar-right.svg',
						),
					),
				)
			)
		);
		$wp_customize->add_setting(
			'sidebar_type_single',
			array(
				'title'             => esc_html__( 'Single Sidebar Type', 'qubelystarters' ),
				'transport'         => 'postMessage',
				'default'           => 'sidebar_right',
				'sanitize_callback' => 'sanitize_select_radio',
			)
		);
		$wp_customize->selective_refresh->add_partial(
			'sidebar_type_single',
			array(
				'selector'            => '#sidebar',
				'container_inclusive' => true,
				'render_callback'     => '__return_true',
			)
		);
		$wp_customize->add_control(
			new Radio_Image_Control(
				$wp_customize,
				'sidebar_type_single',
				array(
					'label'   => esc_html__( 'Single Sidebar Type', 'qubelystarters' ),
					'section' => 'qubelystarters_blog_section',
					'choices' => array(
						'sidebar_none'  => array(
							'name'  => esc_html__( 'No Sidebar', 'qubelystarters' ),
							'image' => get_template_directory_uri() . '/assets/dist/images/no-sidebar.svg',
						),
						'sidebar_left'  => array(
							'name'  => esc_html__( 'Left Sidebar', 'qubelystarters' ),
							'image' => get_template_directory_uri() . '/assets/dist/images/sidebar-left.svg',
						),
						'sidebar_right' => array(
							'name'  => esc_html__( 'Right Sidebar', 'qubelystarters' ),
							'image' => get_template_directory_uri() . '/assets/dist/images/sidebar-right.svg',
						),
					),
				)
			)
		);
	}
}
