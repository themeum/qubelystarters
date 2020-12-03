<?php
/**
 * Template part for displaying page content in page.php
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Qubely_Starters
 */

defined( 'ABSPATH' ) || exit;

$page_meta  = get_post_meta( get_the_ID(), '_qubelystarters_page_metadata', true );
$hide_title = ( ! empty( $page_meta ) ? $page_meta['page_title_toggle'] : false );
?>

<article id="post-<?php the_ID(); ?>"<?php post_class(); ?>>
<?php if ( false === $hide_title ) : ?>
	<header class="entry-header">
	<?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
	</header><!-- .entry-header -->
<?php endif; ?>
	<div class="entry-content">
	<?php
	the_content();

	wp_link_pages(
		array(
			'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'qubelystarters' ),
			'after'  => '</div>',
		)
	);
	?>
	</div><!-- .entry-content -->
</article><!-- #post-## -->
