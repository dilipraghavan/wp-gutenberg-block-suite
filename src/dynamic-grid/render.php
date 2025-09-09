<?php

    if ( ! defined( 'ABSPATH' ) ) 
        exit;
 
    $post_type = sanitize_key( isset($attributes['postType']) ? $attributes['postType'] : 'post');
    if(!post_type_exists($post_type)){
        $post_type = 'post';
    }

    
    $count = absint(isset($attributes['count']) ? $attributes['count'] : 6);
    $count = max(1, min(12, $count));
    
    $columns = absint(isset($attributes['columns']) ? $attributes['columns'] : 3);
    $columns = max(1, min(4, $columns));

    ob_start();

    $query_args = [
        'post_type' => $post_type,
        'posts_per_page' => $count,
        'post_status' => 'publish',
        'orderby' => 'date',
        'order' => 'DESC',
        'no_found_rows' => true,
        'ignore_sticky_posts' => true
    ];
    $the_query = new \WP_Query($query_args);

    $grid_class_names = "wpsuite-grid columns-{$columns}";
    ?>
    <div class='<?php echo(esc_attr($grid_class_names)); ?>' >
    <?php    
    if($the_query->have_posts()){
        while($the_query->have_posts()){
            $the_query->the_post();
            ?>
            <article <?php post_class('wpsuite-grid-item'); ?> >
                <a href='<?php echo esc_url(get_permalink()) ?>' target='_blank' rel='noopener noreferrer' >
                    <h3> <?php echo esc_html(get_the_title()) ?> </h3>
                </a>
                <p> <?php echo wp_kses_post(get_the_excerpt()) ?> </p>
            </article>


            <?php
        }
    }else{
        echo "<div>" . esc_html__("No items found for this post type.", "wp-gutenberg-block-suite") . "</div>";
    }
    ?> 
    </div> 
    <?php 
    wp_reset_postdata();
    return ob_get_clean();