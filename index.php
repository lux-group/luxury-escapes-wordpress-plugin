<?php

/**
 * Plugin Name: Luxury Escapes Plugin
 * Plugin URI: https://github.com/
 * Description: Adds content blocks relevant to the Luxury Escapes blog
 * Version: 1.0.0
 * Author: Luxury Escapes
 *
 * @package luxury-escapes-plugin
 */

defined( 'ABSPATH' ) || exit;

// The one and only content block we have right now is "le-offers"
// which provides a carousel of offers.
// Later, we may have others, that pitch eg. LE Insurance, Cruises, Tours, etc.
include 'le-offers/index.php';

