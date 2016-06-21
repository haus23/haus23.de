<?php

require 'board/SSI.php';
require '../vendor/autoload.php';

define('SMF_BASE_PATH', __DIR__.'/board');

$app = new AppKernel();
$app->run();
