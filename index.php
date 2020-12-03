<?php
/**
 * The main template file
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Qubely_Starters
 */

defined( 'ABSPATH' ) || exit;

get_header(); ?>

<div class="container">
	<div class="row align-stretch">
		<?php if ( 'sidebar_left' === get_theme_mod( 'sidebar_type_select' ) ) : ?>
			<div id="sidebar" class="col-sm-4">
				<?php get_sidebar(); ?>
			</div><!-- .col- -->
		<?php endif; ?>
		<div class="<?php echo 'sidebar_none' === get_theme_mod( 'sidebar_type_select' ) ? 'col-lg-12 col-sm-12' : 'col-sm-8'; ?>">
			<div id="primary" class="content-area">
				<main id="main" class="site-main" role="main">
					<div class="blog-post-container">
						<div class="blog-post-content <?php echo 'grid_view' === get_theme_mod( 'blog_layout_select' ) ? 'layout_grid_2' === get_theme_mod( 'blog_grid_selected' ) ? 'layout-grid-2' : 'layout-grid-3' : 'layout-list'; ?>">

					<?php
					if ( have_posts() ) :

						if ( is_home() && ! is_front_page() ) :
							?>
							<header>
								<h1 class="page-title"><?php single_post_title(); ?></h1>
							</header>

							<?php
						endif;

						/* Start the Loop */
						while ( have_posts() ) :
							the_post();

							if ( 'list_view' === get_theme_mod( 'blog_layout_select' ) ) {
								get_template_part( 'views/blog/blog', 'list' );
							} elseif ( 'grid_view' === get_theme_mod( 'blog_layout_select' ) ) {
								get_template_part( 'views/blog/blog', 'grid' );
							} else {
								get_template_part( 'views/content', get_post_format() );
							}

						endwhile;

						the_posts_navigation();

					else :

						get_template_part( 'views/content', 'none' );

					endif;
					?>
						</div>
				</div>
				</main><!-- #main -->
			</div><!-- #primary -->
		</div><!-- .col- -->
		<?php if ( 'sidebar_right' === get_theme_mod( 'sidebar_type_select' ) ) : ?>
			<div id="sidebar" class="col-sm-4">
				<?php get_sidebar(); ?>
			</div><!-- .col- -->
		<?php endif; ?>
	</div><!-- .row -->
</div><!-- .container -->

<?php
get_footer();
