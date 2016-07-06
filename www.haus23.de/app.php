<?php

//require 'board/SSI.php';
require '../vendor/autoload.php';

define('SMF_BASE_PATH', __DIR__.'/board');

// Load environment via .env file
$dotenv = new \Dotenv\Dotenv(dirname(__DIR__));
$dotenv->load();

$app = new AppKernel();
$app->run();
