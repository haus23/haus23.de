<?php

use Interop\Container\ContainerInterface;
use Slim\Http\Response;
use Slim\Views\Twig;

class AppKernel extends \DI\Bridge\Slim\App
{
    public function __construct()
    {
        parent::__construct();

        $this->get('/', [\Haus23\Controller\DefaultController::class, 'indexAction']);
        $this->get('/user', [\Haus23\Controller\DefaultController::class, 'userInfoAction']);
    }

    protected function configureContainer(\DI\ContainerBuilder $builder)
    {
        $builder->addDefinitions([
            // Enable debug information
            'settings.displayErrorDetails' => true,
        ]);

        // Register services
        $definitions = [

            \Slim\Views\Twig::class => function (ContainerInterface $c) {
                $twig = new \Slim\Views\Twig(__DIR__.'/views', [
                    'cache' => false
                ]);

                $twig->addExtension(new \Slim\Views\TwigExtension(
                    $c->get('router'),
                    $c->get('request')->getUri()
                ));

                return $twig;
            },
        ];

        $builder->addDefinitions($definitions);
    }

}