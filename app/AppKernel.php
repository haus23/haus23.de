<?php

use Slim\Http\Response;

class AppKernel extends \Slim\App
{
    public function __construct($config = [])
    {
        parent::__construct($config);

        // Get container
        $container = $this->getContainer();

        // Register component on container
        $container['view'] = function ($container) {
            $view = new \Slim\Views\Twig(__DIR__.'/views', [
                'cache' => false
            ]);

            return $view;
        };

        $this->get('/', function (\Slim\Http\Request $request, Response $response) {
            return $this->view->render($response, 'index.html.twig');
        });
    }

}