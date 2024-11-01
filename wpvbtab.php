<?php 
/**
* Plugin Name:video bottom tab qrcode-embed-share button 
* Plugin URI: 
* Description:A plugin add tab to bottom of vedio for create Qrcode-embed and share button 
* Version: 1.0.0
* Author:Behzad rohozadeh
*
 */



add_action('wp_enqueue_scripts','vbtab_js_and_css');
function vbtab_js_and_css()
	{
	 wp_register_style('vbtab_css', plugins_url('/css/style.css', __FILE__) );
     wp_enqueue_style( 'vbtab_css' );	
     wp_enqueue_script( "vbtab_js", plugin_dir_url( __FILE__ ) . 'js/vbtab.js', array( 'jquery' ) );
	}



