<?php

$aliases['dev'] = array(
	'uri'=> 'dev.masterofawesome.ca',
	'root' => '/home/moa/subdomains/dev/public_html',
	'remote-host'=> 'host.lambtonshield.com',
	'remote-user'=> 'moa',
	'path-aliases'=> array(
		'%files'=> 'sites/default/files',
	)
);

$aliases['live'] = array(
	'uri'=> 'live.masterofawesome.ca',
	'root' => '/home/moa/subdomains/live/public_html',
	'remote-host'=> 'host.lambtonshield.com',
	'remote-user'=> 'moa',
	'path-aliases'=> array(
		'%files'=> 'sites/default/files',
	)
);
