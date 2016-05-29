<?php

namespace Haus23\Controller;

use Slim\Views\Twig;

class DefaultController
{
    /** @var Twig */
    private $twig;

    /**
     * DefaultController constructor.
     * @param Twig $twig
     */
    public function __construct(Twig $twig)
    {
        $this->twig = $twig;
    }

    public function indexAction($response)
    {
        return $this->twig->render($response, 'index.html.twig');
    }
}