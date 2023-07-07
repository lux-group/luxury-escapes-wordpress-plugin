<?php

/**
 * Plugin Name: Luxury Escapes Offers
 * Plugin URI: https://github.com/
 * Description: Display Luxury Escapes deals as a content block
 * Version: 1.0.0
 * Author: Luxury Escapes
 *
 * @package luxury-escapes-plugin
**/

defined( 'ABSPATH' ) || exit;

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 */
function le_offers_register_block() {
  // automatically load dependencies and version
  $admin_assets = include( plugin_dir_path( __FILE__ ) . 'build/admin.asset.php');

  wp_register_script(
    'le-offers',
    plugins_url( 'build/admin.js', __FILE__ ),
    $admin_assets['dependencies'],
    $admin_assets['version']
  );

  wp_register_style(
    'le-offers',
    plugins_url( 'style.css', __FILE__ ),
    array( ),
    filemtime( plugin_dir_path( __FILE__ ) . 'style.css' )
  );

    // Enqueue Bootstrap CSS
    wp_enqueue_style(
      'bootstrap-css',
      'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css',
      array(),
      '4.5.2'
    );

    // Enqueue Bootstrap JS
    wp_enqueue_script(
      'bootstrap-js',
      'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js',
      array('jquery'), // Bootstrap JS requires jQuery
      '4.5.2',
      true // Load it in the footer
    );

  register_block_type( 'luxury-escapes-plugin/le-offers', array(
    'style' => 'le-offers',
    'editor_script' => 'le-offers',
    'render_callback' => 'renderCarousel',
  ));
}

// From https://stackoverflow.com/questions/11905140/php-pass-variable-to-include
function includeWithVariables($filePath, $variables = array()) {
  extract($variables);
  ob_start();
  include $filePath;
  $output = ob_get_clean();
  return $output;
}

function renderCarousel($attrs, $content) {
  // TODO: do error handling if no attrs are entered
  $departure = $attrs['departure'];
  $arrival = $attrs['arrival'];
  $campaigns = isset($attrs['campaigns']) ? urlencode(implode(',', $attrs['campaigns'])) : "";

  $url = "https://api.luxuryescapes.com/api/search/cruise/v1/list?departurePlaceId=${departure}&arrivalPlaceId=${arrival}&campaigns=${campaigns}&brand=luxuryescapes&limit=10";

  $json = file_get_contents($url);

  $obj = json_decode($json);
  $offerIds = $obj->result;

  $offers = [];
  
  foreach ($offerIds as $offerId) {
    $offerDetailsUrl = "https://api.luxuryescapes.com/api/cruise/v1/offers/$offerId?brand=luxuryescapes";

    $jsonDetails = file_get_contents($offerDetailsUrl);
    $objDetails = json_decode($jsonDetails);
    $offers[] = $objDetails->result;
  }

  $attrs['offers'] = $offers;

  return includeWithVariables('template.php', $attrs);

}

add_action( 'init', 'le_offers_register_block' );
