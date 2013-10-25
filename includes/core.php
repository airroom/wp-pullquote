<?php 

// Shortcode

function pullquote_simple_shortcode($atts, $content) {
    extract(shortcode_atts(array(
        'position' => 'left',
        'hidden' => 'false'
    ), $atts));
    
    return "<span class='pullquote-source' data-float='".$position."' data-hidden='".$hidden."'>".$content."</span>";
}
add_shortcode('pullquote', 'pullquote_simple_shortcode');

// Javascript Files

function pullquote_enqueue_scripts() {
    global $realtidbitsPushquote;
    if ( !is_admin() ){ 
        wp_enqueue_script( 'jquery' );
        wp_enqueue_script( 'realtidbitsPushquote', pullquote_plugin_url( 'js/pullquote.js' ),
            array('jquery'), PULLQUOTE_VER, false); 
    }
}

add_action( 'init', 'pullquote_enqueue_scripts' );

// Styles 

function pullquote_enqueue_styles() {
  global $post, $realtidbitsPushquote, $wp_registered_widgets, $wp_widget_factory;
  
  wp_enqueue_style( 'realtidbitsPushquote_headcss', pullquote_plugin_url( 'css/pullquote.css' ),
    false, PULLQUOTE_VER, 'all');
}
add_action( 'wp', 'pullquote_enqueue_styles' );

?>