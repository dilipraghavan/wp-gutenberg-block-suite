<?php



/**
 * Plugin name: Gutenberg Block Suite
 * Description: A portfolio-ready WordPress plugin showcasing custom Gutenberg blocks (Dynamic Grid & Call-to-Action).
 * Version: 1.0.0
 * Plugin URI: https://github.com/dilipraghavan/wp-gutenberg-block-suite.git
 * Author: Dilip Raghavan
 * Author URI: https://www.wpshiftstudio.com
 * Domain Path: /languages
 * Text Domain: wp-gutenberg-block-suite
 */

namespace WPGS;

if(!defined('ABSPATH'))
    exit;

define('WPGS_PATH', plugin_dir_path(__FILE__));
define('WPGS_URL', plugin_dir_url(__FILE__));

register_activation_hook( __FILE__, __NAMESPACE__ . '\wpgs_activate' );
register_deactivation_hook( __FILE__, __NAMESPACE__ . '\wpgs_deactivate' );

include_once(WPGS_PATH . 'plugin/includes/register-blocks.php');

function wpgs_activate(){

}

function wpgs_deactivate(){

}


