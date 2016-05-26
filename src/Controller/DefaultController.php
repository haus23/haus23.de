<?php

namespace Haus23\Controller;

class DefaultController
{
    /** @var \Twig_Environment */
    private $twig;

    /**
     * DefaultController constructor.
     * @param \Twig_Environment $twig
     */
    public function __construct(\Twig_Environment $twig)
    {
        $this->twig = $twig;
    }

    public function indexAction()
    {
        return $this->twig->render('index.html.twig');
    }
}