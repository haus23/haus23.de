<?php

class AppKernel extends \Silex\Application
{
    /**
     * AppKernel constructor.
     */
    public function __construct()
    {
        parent::__construct();

        $this->register(new Silex\Provider\ServiceControllerServiceProvider());
        $this->register(new Silex\Provider\TwigServiceProvider(), array(
            'twig.path' => __DIR__.'/../app/views',
        ));

        $this['default.controller'] = function() {
            return new \Haus23\Controller\DefaultController($this['twig']);
        };

        $this->get('/', "default.controller:indexAction");
    }
}