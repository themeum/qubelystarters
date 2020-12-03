<?php
/**
 * Handles sidebar
 *
 * @package Qubely_Starters
 */

namespace Qubely_Starters\Core;

defined( 'ABSPATH' ) || exit;

/**
 * Sidebar class
 */
class Sidebar {

	/**
	 * Register default hooks and actions for WordPress
	 */
	public function register() {
		add_action( 'widgets_init', array( $this, 'widgets_init' ) );
	}

	/**
	 * Define the sidebar
	 */
	public function widgets_init() {
		register_sidebar(
			array(
				'name'          => esc_html__( 'Sidebar', 'qubelystarters' ),
				'id'            => 'qubelystarters-sidebar',
				'description'   => esc_html__( 'Default sidebar to add all your widgets.', 'qubelystarters' ),
				'before_widget' => '<section id="%1$s" class="widget %2$s p-2">',
				'after_widget'  => '</section>',
				'before_title'  => '<h2 class="widget-title">',
				'after_title'   => '</h2>',
			)
		);
		register_sidebar(
			array(
				'name'          => esc_html__( 'Footer Widget 1', 'qubelystarters' ),
				'id'            => 'qubelystarters-footer-widget1',
				'description'   => esc_html__( 'Footer One Widget Area', 'qubelystarters' ),
				'before_widget' => '<section id="%1$s" class="widget %2$s p-2">',
				'after_widget'  => '</section>',
				'before_title'  => '<h2 class="widget-title">',
				'after_title'   => '</h2>',
			)
		);
		register_sidebar(
			array(
				'name'          => esc_html__( 'Footer Widget 2', 'qubelystarters' ),
				'id'            => 'qubelystarters-footer-widget2',
				'description'   => esc_html__( 'Footer Two Widget Area', 'qubelystarters' ),
				'before_widget' => '<section id="%1$s" class="widget %2$s p-2">',
				'after_widget'  => '</section>',
				'before_title'  => '<h2 class="widget-title">',
				'after_title'   => '</h2>',
			)
		);
		register_sidebar(
			array(
				'name'          => esc_html__( 'Footer Widget 3', 'qubelystarters' ),
				'id'            => 'qubelystarters-footer-widget3',
				'description'   => esc_html__( 'Footer Three Widget Area', 'qubelystarters' ),
				'before_widget' => '<section id="%1$s" class="widget %2$s p-2">',
				'after_widget'  => '</section>',
				'before_title'  => '<h2 class="widget-title">',
				'after_title'   => '</h2>',
			)
		);
		register_sidebar(
			array(
				'name'          => esc_html__( 'Footer Widget 4', 'qubelystarters' ),
				'id'            => 'qubelystarters-footer-widget4',
				'description'   => esc_html__( 'Footer Four Widget Area', 'qubelystarters' ),
				'before_widget' => '<section id="%1$s" class="widget %2$s p-2">',
				'after_widget'  => '</section>',
				'before_title'  => '<h2 class="widget-title">',
				'after_title'   => '</h2>',
			)
		);
	}
}
