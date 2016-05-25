<?php

require_once __DIR__.'/../vendor/autoload.php';

$app = new Silex\Application();
$app['debug'] = true;

$app->register(new Silex\Provider\TwigServiceProvider(), array(
    'twig.path' => __DIR__.'/../app/views',
));

$app->get('/{name}', function ($name) use ($app) {
    return $app['twig']->render('index.twig', array(
        'name' => $name
    ));
});

$app->run();

