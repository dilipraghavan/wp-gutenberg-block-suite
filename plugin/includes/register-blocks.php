<?php

namespace WPGS;

if(!defined('ABSPATH'))
    exit;


function wpgs_register_blocks(){
    register_block_type(WPGS_PATH . '../../blocks/cta');
    register_block_type(WPGS_PATH . '../../blocks/dynamic-grid', 
        [
            'render_callback' => 'wpgs_grid_render_dynamic_block'
        ]
    );
}

add_action('init', __NAMESPACE__.'\wpgs_register_blocks');


function wpgs_grid_render_dynamic_block(){
    
}

