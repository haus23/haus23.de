<?php

namespace Haus23\Controller;

use Haus23\Service\SmfBridge;
use Slim\Views\Twig;

class DefaultController
{
    /** @var Twig */
    private $twig;

    /** @var SmfBridge */
    private $smf;

    /**
     * DefaultController constructor.
     * @param Twig $twig
     */
    public function __construct(Twig $twig, SmfBridge $smf)
    {
        $this->twig = $twig;
        $this->smf = $smf;
    }

    public function indexAction($response)
    {   var_dump($this->smf->recentTopics());
        return $this->twig->render($response, 'index.html.twig');
    }
}