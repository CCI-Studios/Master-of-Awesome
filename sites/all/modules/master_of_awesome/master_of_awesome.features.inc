<?php
/**
 * @file
 * master_of_awesome.features.inc
 */

/**
 * Implements hook_views_api().
 */
function master_of_awesome_views_api($module = NULL, $api = NULL) {
  return array("api" => "3.0");
}

/**
 * Implements hook_fe_nodequeue_export_fields().
 */
function master_of_awesome_fe_nodequeue_export_fields() {
  $nodequeues = array();

  // Exported nodequeues: home_header_images
  $nodequeues['home_header_images'] = array(
    'name' => 'home_header_images',
    'title' => 'Home Header Images',
    'subqueue_title' => '',
    'size' => 0,
    'link' => '',
    'link_remove' => '',
    'owner' => 'nodequeue',
    'show_in_ui' => 1,
    'show_in_tab' => 1,
    'show_in_links' => 0,
    'reference' => 0,
    'reverse' => 0,
    'i18n' => 0,
    'subqueues' => 1,
    'types' => array(
      0 => 'home_header_image',
    ),
    'roles' => array(),
    'count' => 0,
  );

  return $nodequeues;
}

/**
 * Implements hook_node_info().
 */
function master_of_awesome_node_info() {
  $items = array(
    'home_header_image' => array(
      'name' => t('Home Header Image'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
    'video' => array(
      'name' => t('Video'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  return $items;
}
