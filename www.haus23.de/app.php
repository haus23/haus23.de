<?php

require '../vendor/autoload.php';

$config = [
    'settings' => [
        'displayErrorDetails' => true,
    ]
];

$app = new AppKernel($config);
$app->run();
