<?php

namespace WPGS;

if(!defined('ABSPATH'))
    exit;


function wpgs_register_blocks(){
    //register_block_type(__DIR__ . '/../../src/cta');
    register_block_type(__DIR__ . '/../../build/dynamic-grid'); 
    
}

add_action('init', __NAMESPACE__.'\\wpgs_register_blocks');

