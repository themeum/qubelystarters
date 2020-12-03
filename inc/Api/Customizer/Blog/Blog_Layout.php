<?php
/**
 * Handles blog layout customization
 *
 * @package Qubely_Starters
 */

namespace Qubely_Starters\Api\Customizer\Blog;

use WP_Customize_Control;
use Qubely_Starters\Api\Customizer\Custom_Controls\Radio_Image_Control;

defined( 'ABSPATH' ) || exit;

/**
 * Blog Layout class
 */
class Blog_Layout {

	/**
	 * Register
	 *
	 * @param WP_Customize_Manager $wp_customize theme customizer object.
	 */
	public function register( $wp_customize ) {

		$wp_customize->add_setting(
			'blog_layout_select',
			array(
				'title'             => esc_html__( 'Blog Layout', 'qubelystarters' ),
				'transport'         => 'postMessage',
				'default'           => 'default',
				'sanitize_callback' => 'sanitize_select_radio',
			)
		);
		$wp_customize->selective_refresh->add_partial(
			'blog_layout_select',
			array(
				'selector'            => '.blog-post-container',
				'container_inclusive' => true,
				'render_callback'     => '__return_true',
			)
		);
		$wp_customize->add_control(
			new Radio_Image_Control(
				$wp_customize,
				'blog_layout_select',
				array(
					'label'   => esc_html__( 'Blog Layout', 'qubelystarters' ),
					'section' => 'qubelystarters_blog_section',
					'choices' => array(
						'default'   => array(
							'name'  => esc_html__( 'Default', 'qubelystarters' ),
							'image' => get_template_directory_uri() . '/assets/dist/images/default-view.svg',
						),
						'list_view' => array(
							'name'  => esc_html__( 'List View', 'qubelystarters' ),
							'image' => get_template_directory_uri() . '/assets/dist/images/list-view.svg',
						),
						'grid_view' => array(
							'name'  => esc_html__( 'Grid View', 'qubelystarters' ),
							'image' => get_template_directory_uri() . '/assets/dist/images/grid-view.svg',
						),
					),
				)
			)
		);
		$wp_customize->add_setting(
			'blog_grid_selected',
			array(
				'title'             => esc_html__( 'Grid Columns', 'qubelystarters' ),
				'transport'         => 'postMessage',
				'default'           => 'layout_grid_3',
				'sanitize_callback' => 'sanitize_select_radio',
			)
		);
		$wp_customize->selective_refresh->add_partial(
			'blog_grid_selected',
			array(
				'selector'            => '.blog-post-container',
				'container_inclusive' => true,
				'render_callback'     => '__return_true',
			)
		);
		$wp_customize->add_control(
			new WP_Customize_Control(
				$wp_customize,
				'blog_grid_selected',
				array(
					'label'           => esc_html__( 'Grid Columns', 'qubelystarters' ),
					'section'         => 'qubelystarters_blog_section',
					'type'            => 'select',
					'choices'         => array(
						'layout_grid_3' => esc_html__( '3 Columns', 'qubelystarters' ),
						'layout_grid_2' => esc_html__( '2 Columns', 'qubelystarters' ),
					),
					'active_callback' => 'control_active_callback_grid',
				)
			)
		);
	}
}
