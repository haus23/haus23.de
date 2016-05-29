<?php

use Slim\Http\Response;

require_once __DIR__.'/../vendor/autoload.php';

require '../vendor/autoload.php';

$app = new \Slim\App;
$app->get('/', function (\Slim\Http\Request $request, Response $response) {
    $response->getBody()->write("Hello Slim World");

    return $response;
});
$app->run();
