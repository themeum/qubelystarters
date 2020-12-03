<?php
/**
 * Handles loading all the necessary files
 *
 * @package Qubely_Starters
 */

defined( 'ABSPATH' ) || exit;

// Theme GLOBALS.
define( 'QUBELY_STARTERS_VERSION', '1.0.0' );

if ( file_exists( dirname( __FILE__ ) . '/vendor/autoload.php' ) ) :
	require_once dirname( __FILE__ ) . '/vendor/autoload.php';
endif;

if ( file_exists( dirname( __FILE__ ) . '/inc/Custom/TGM_Plugin_Activation.php' ) ) :
	require_once dirname( __FILE__ ) . '/inc/Custom/TGM_Plugin_Activation.php';
endif;

if ( class_exists( 'Qubely_Starters\\Init' ) ) :
	Qubely_Starters\Init::register_services();
endif;
