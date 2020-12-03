<?php
/**
 * Handles enqueueing all scripts and styles
 *
 * @package Qubely_Starters
 */

namespace Qubely_Starters\Setup;

use Qubely_Starters\Traits\Inline_Css_Js;

defined( 'ABSPATH' ) || exit;

/**
 * Enqueue.
 */
class Enqueue {

	/**
	 * Register default hooks and actions for WordPress
	 */
	public function register() {
		add_action( 'wp_head', array( $this, 'preload_fontawesome' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_scripts' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_admin_scripts' ) );
		add_filter( 'style_loader_tag', array( $this, 'load_styles_deferred' ), 10, 4 );
		add_action( 'customize_preview_init', array( $this, 'enqueue_customize_preview' ) );
		add_action( 'enqueue_block_editor_assets', array( $this, 'enqueue_editor_assets' ) );
		add_action( 'customize_controls_enqueue_scripts', array( $this, 'enqueue_customizer_controls_scripts' ) );
	}

	/**
	 * Enqueue general scripts
	 */
	public function enqueue_scripts() {
		// CSS.
		$body_font        = get_theme_mod( 'body_font', 'Karla' );
		$heading_font     = get_theme_mod( 'heading_font', 'Karla' );
		$body_font_url    = '';
		$heading_font_url = '';

		if ( ! empty( $body_font ) && in_array( $body_font, Inline_Css_Js::get_google_fonts(), true ) ) {
			$body_font_url = 'family=' . $body_font . ':wght@100;300;400;500;700;900';
			wp_enqueue_style( 'gfonts', 'https://fonts.googleapis.com/css2?' . $body_font_url . '&display=swap', array(), QUBELY_STARTERS_VERSION, 'all' );
		}

		if ( ! empty( $heading_font ) && in_array( $heading_font, Inline_Css_Js::get_google_fonts(), true ) && $body_font !== $heading_font ) {
			$heading_font_url = 'family=' . $heading_font . ':wght@100;300;400;500;700;900';
			wp_enqueue_style( 'gfonts-heading', 'https://fonts.googleapis.com/css2?' . $heading_font_url . '&display=swap', array(), QUBELY_STARTERS_VERSION, 'all' );
		}

		wp_enqueue_style( 'main', mix( 'css/style.css' ), array(), QUBELY_STARTERS_VERSION, 'all' );

		// JS.
		wp_enqueue_script( 'main', mix( 'js/app.js' ), array(), QUBELY_STARTERS_VERSION, true );

		// Just in time preloading pages on hover.
		wp_enqueue_script( 'instant-page', '//instant.page/5.1.0', array(), QUBELY_STARTERS_VERSION, true );

		// Extra.
		if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
			wp_enqueue_script( 'comment-reply' );
		}

		// Localizable data.
		wp_localize_script( 'main', 'qubelystarters_vars', Inline_Css_Js::localized_js() );

		// Add all inline css that uses customizer settings.
		wp_add_inline_style( 'main', Inline_Css_Js::output_css() );

	}

	/**
	 * Load styles deferred
	 *
	 * @param string $html html.
	 * @param array  $handle handle.
	 * @param string $href href.
	 * @param string $media media.
	 *
	 * @return string $html html
	 */
	public function load_styles_deferred( $html, $handle, $href, $media ) {

		$handles = array( 'gfonts', 'gfonts-heading', 'main', 'qubely-bundle', 'qubely-font-awesome', 'wp-block-library' );

		if ( ! in_array( $handle, $handles, true ) ) {
			return $html;
		}
		$onload      = 'onload="this.media=\'all\'"';
		$print_media = 'media="print"';
		$html        = str_replace( "media='all'", "$print_media $onload", $html );

		return $html;
	}

	/**
	 * Preload font-awesome
	 */
	public function preload_fontawesome() {
		$link_to_preload = '<link rel="preload" href="' . get_site_url( null, '/wp-content/plugins/qubely/assets/fonts/fa-solid-900.woff2' ) . '" as="font" crossorigin="anonymous">';

		echo $link_to_preload;
	}

	/**
	 * Enqueue Admin assets
	 */
	public function enqueue_admin_scripts() {
		wp_enqueue_style( 'qubelystarters-dashboard', mix( 'css/dashboard.css' ), array( 'wp-components' ), QUBELY_STARTERS_VERSION, 'all' );

		if ( ! isset( $_GET['page'] ) || 'qubelystarters' !== $_GET['page'] ) {
			return;
		}

		wp_enqueue_script( 'qubelystarters-dashboard', mix( 'js/qubelystarters-dashboard.js' ), array( 'wp-api', 'wp-i18n', 'wp-components', 'wp-element' ), QUBELY_STARTERS_VERSION, true );
		wp_localize_script(
			'qubelystarters-dashboard',
			'qubelystarters_dashboard',
			array(
				'admin_url' => get_admin_url(),
			)
		);
	}

	/**
	 * Enqueue customizer controls
	 */
	public function enqueue_customizer_controls_scripts() {
		wp_enqueue_style( 'qubelystarters-controls', mix( 'css/all-controls.css' ), array( 'wp-components' ), QUBELY_STARTERS_VERSION, 'all' );

		$saved_fonts = get_transient( 'google_fonts' );
		if ( false === $saved_fonts ) {
			set_transient( 'google_fonts', Inline_Css_Js::get_google_fonts(), DAY_IN_SECONDS );
		}

		if ( ! empty( $saved_fonts ) && is_array( $saved_fonts ) ) {
			wp_enqueue_style( 'qubelystarters-control-gfonts', 'https://fonts.googleapis.com/css?family=' . join( '|', $saved_fonts ) . '&text=Abc&display=swap"', array(), QUBELY_STARTERS_VERSION );
		}
		wp_enqueue_script( 'qubelystarters-customizer', mix( 'js/customizer-controls.js' ), array( 'jquery', 'customize-controls', 'wp-i18n', 'wp-components', 'wp-compose', 'wp-edit-post', 'wp-element' ), QUBELY_STARTERS_VERSION, true );
		wp_localize_script( 'qubelystarters-customizer', 'qubelystarters_customizer', Inline_Css_Js::customizer_localized_js() );
	}

	/**
	 * Enqueue customizer preview
	 */
	public function enqueue_customize_preview() {
		wp_enqueue_script( 'qubelystarters-preview', mix( 'js/customizer-preview.js' ), array( 'customize-preview' ), QUBELY_STARTERS_VERSION, true );
	}

	/**
	 * Enqueue Editor scripts and assets
	 */
	public function enqueue_editor_assets() {
		wp_enqueue_style( 'qubelystarters-admin', mix( 'css/admin.css' ), array(), QUBELY_STARTERS_VERSION, 'all' );
		wp_enqueue_script( 'qubelystarters-schema', mix( 'js/qubelystarters-schema.js' ), array( 'wp-i18n', 'wp-compose', 'wp-data', 'wp-components', 'wp-edit-post', 'wp-element', 'wp-plugins' ), QUBELY_STARTERS_VERSION, true );
		wp_enqueue_script( 'qubelystarters-settings', mix( 'js/qubelystarters-page-settings.js' ), array( 'wp-i18n', 'wp-compose', 'wp-data', 'wp-components', 'wp-edit-post', 'wp-element', 'wp-plugins' ), QUBELY_STARTERS_VERSION, true );

		wp_localize_script( 'qubelystarters-schema', 'qubelystarters_admin', Inline_Css_Js::admin_localized_js() );
	}
}
