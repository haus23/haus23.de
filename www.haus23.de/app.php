<?php

require_once __DIR__.'/../vendor/autoload.php';

$app = new AppKernel();
$app['debug'] = true;

$app->run();

