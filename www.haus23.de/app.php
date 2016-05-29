<?php

use Slim\Http\Response;

require_once __DIR__.'/../vendor/autoload.php';

require '../vendor/autoload.php';

$app = new \Slim\App;

// Get container
$container = $app->getContainer();

// Register component on container
$container['view'] = function ($container) {
    $view = new \Slim\Views\Twig(__DIR__.'/../app/views', [
        'cache' => false
    ]);

    return $view;
};

$app->get('/', function (\Slim\Http\Request $request, Response $response) {
    return $this->view->render($response, 'index.html.twig');
});
$app->run();
