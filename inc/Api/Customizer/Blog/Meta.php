<?php
/**
 * Handles sidebar customization
 *
 * @package Qubely_Starters
 */

namespace Qubely_Starters\Api\Customizer\Blog;

use Qubely_Starters\Api\Customizer\Custom_Controls\Toggle_Switch_Control;

defined( 'ABSPATH' ) || exit;

/**
 * Sidebar class
 */
class Meta {

	/**
	 * Register
	 *
	 * @param WP_Customize_Manager $wp_customize theme customizer object.
	 */
	public function register( $wp_customize ) {
		$wp_customize->add_setting(
			'blog_meta_toggle',
			array(
				'title'             => esc_html__( 'Show Post Meta?', 'qubelystarters' ),
				'transport'         => 'postMessage',
				'default'           => true,
				'sanitize_callback' => isset( $input ) ? true : false,
			)
		);
		$wp_customize->selective_refresh->add_partial(
			'blog_meta_toggle',
			array(
				'selector'            => '.entry-meta',
				'container_inclusive' => true,
				'render_callback'     => '__return_true',
			)
		);
		$wp_customize->add_control(
			new Toggle_Switch_Control(
				$wp_customize,
				'blog_meta_toggle',
				array(
					'label'   => esc_html__( 'Show Post Meta?', 'qubelystarters' ),
					'section' => 'qubelystarters_blog_section',
				)
			)
		);
		$wp_customize->add_setting(
			'category_meta_toggle',
			array(
				'title'             => esc_html__( 'Show Post Categories?', 'qubelystarters' ),
				'transport'         => 'postMessage',
				'default'           => true,
				'sanitize_callback' => isset( $input ) ? true : false,
			)
		);
		$wp_customize->add_control(
			new Toggle_Switch_Control(
				$wp_customize,
				'category_meta_toggle',
				array(
					'label'           => esc_html__( 'Show Post Categories?', 'qubelystarters' ),
					'section'         => 'qubelystarters_blog_section',
					'active_callback' => 'control_active_callback_meta',
				)
			)
		);
		$wp_customize->add_setting(
			'author_meta_toggle',
			array(
				'title'             => esc_html__( 'Show Author?', 'qubelystarters' ),
				'transport'         => 'postMessage',
				'default'           => true,
				'sanitize_callback' => isset( $input ) ? true : false,
			)
		);
		$wp_customize->add_control(
			new Toggle_Switch_Control(
				$wp_customize,
				'author_meta_toggle',
				array(
					'label'           => esc_html__( 'Show Author?', 'qubelystarters' ),
					'section'         => 'qubelystarters_blog_section',
					'active_callback' => 'control_active_callback_meta',
				)
			)
		);
		$wp_customize->add_setting(
			'featured_image_toggle',
			array(
				'title'             => esc_html__( 'Show Featured Image?', 'qubelystarters' ),
				'transport'         => 'postMessage',
				'default'           => true,
				'sanitize_callback' => isset( $input ) ? true : false,
			)
		);
		$wp_customize->add_control(
			new Toggle_Switch_Control(
				$wp_customize,
				'featured_image_toggle',
				array(
					'label'   => esc_html__( 'Show Featured Image?', 'qubelystarters' ),
					'section' => 'qubelystarters_blog_section',
				)
			)
		);
		$wp_customize->add_setting(
			'post_title_toggle',
			array(
				'title'             => esc_html__( 'Show Post Title?', 'qubelystarters' ),
				'transport'         => 'postMessage',
				'default'           => true,
				'sanitize_callback' => isset( $input ) ? true : false,
			)
		);
		$wp_customize->add_control(
			new Toggle_Switch_Control(
				$wp_customize,
				'post_title_toggle',
				array(
					'label'   => esc_html__( 'Show Post Title?', 'qubelystarters' ),
					'section' => 'qubelystarters_blog_section',
				)
			)
		);
		$wp_customize->add_setting(
			'post_excerpt_toggle',
			array(
				'title'             => esc_html__( 'Show Post Excerpt?', 'qubelystarters' ),
				'transport'         => 'postMessage',
				'default'           => true,
				'sanitize_callback' => isset( $input ) ? true : false,
			)
		);
		$wp_customize->add_control(
			new Toggle_Switch_Control(
				$wp_customize,
				'post_excerpt_toggle',
				array(
					'label'   => esc_html__( 'Show Post Excerpt?', 'qubelystarters' ),
					'section' => 'qubelystarters_blog_section',
				)
			)
		);
		$wp_customize->add_setting(
			'post_readmore_toggle',
			array(
				'title'             => esc_html__( 'Show Read More Button?', 'qubelystarters' ),
				'transport'         => 'postMessage',
				'default'           => true,
				'sanitize_callback' => isset( $input ) ? true : false,
			)
		);
		$wp_customize->add_control(
			new Toggle_Switch_Control(
				$wp_customize,
				'post_readmore_toggle',
				array(
					'label'   => esc_html__( 'Show Read More Button?', 'qubelystarters' ),
					'section' => 'qubelystarters_blog_section',
				)
			)
		);
	}
}
