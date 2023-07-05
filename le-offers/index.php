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
  $placeIds = isset($attrs['placeIds']) ? implode(',', $attrs['placeIds']) : "";
  $holidays = isset($attrs['holidays']) ? implode(',', $attrs['holidays']) : "";
  // $campaigns = isset($attrs['campaigns']) ? implode(',', $attrs['campaigns']) : "";


//   $url = "https://api.luxuryescapes.com/api/v2/public-offers/list?offerType=hotel%2Clast_minute_hotel%2Ctactical_ao_hotel&campaigns=&holidayTypes=&locations=&placeIds=$placeId&region=$region&occupancy%5B0%5D=2&brand=$brand";
  $url = "https://api.luxuryescapes.com/api/search/hotel/v1/list?offerType=tactical_ao_hotel&placeIds=$placeIds&region=AU&occupancy=2&brand=luxuryescapes&holidayTypes=$holidays";

  $json = file_get_contents($url);
  $obj = json_decode($json);

  $offerIds = array_map(function($item) {
      return $item->id;
  }, $obj->result);

  $commaSeparatedIds = implode(',', $offerIds);

  $offerDetailsUrl = "https://api.luxuryescapes.com/api/v2/public-offers?offerIds=$commaSeparatedIds&region=AU&brand=luxuryescapes";

  $jsonDetails = file_get_contents($offerDetailsUrl);
  $objDetails = json_decode($jsonDetails);

//   foreach($objDetails->result as $offer) {
//     $offer->imageList = array_map(function($image) {
//       return "https://images.luxuryescapes.com/q_auto:good,c_fill,g_auto,w_700,ar_16:9/{$image->id}.webp";
//     }, $offer->images);
//   }
  $attrs['offers'] = $objDetails->result;

   return includeWithVariables('template.php', $attrs);
}

add_action( 'init', 'le_offers_register_block' );
