<?php

namespace WPGS;

if(!defined('ABSPATH'))
    exit;


function wpgs_register_blocks(){
    error_log('WPGS: registering dynamic-grid...');
    //register_block_type(__DIR__ . '/../../src/cta');
    register_block_type(__DIR__ . '/../../build/dynamic-grid', 
        [
            'render_callback' => __NAMESPACE__ . '\\wpgs_grid_render_dynamic_block'
        ]
    );
}

add_action('init', __NAMESPACE__.'\wpgs_register_blocks');


function wpgs_grid_render_dynamic_block(){
    return "Will implement later...";
}

