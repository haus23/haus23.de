<?php

namespace Haus23\Controller;

use Firebase\JWT\JWT;
use Haus23\Service\SmfBridge;
use Psr\Http\Message\ResponseInterface;
use Slim\Http\Response;
use Slim\Views\Twig;

class DefaultController
{
    /** @var Twig */
    private $twig;

    /** @var SmfBridge */
    private $smf;

    /** @var JWT */
    private $token;

    /**
     * DefaultController constructor.
     * @param Twig $twig
     * @param SmfBridge $smf
     * @param JWT $token
     */
    public function __construct(Twig $twig, SmfBridge $smf, JWT $token)
    {
        $this->twig = $twig;
        $this->smf = $smf;
        $this->token = $token;
    }

    /**
     * @param Response $response
     * @return \Psr\Http\Message\ResponseInterface
     */
    public function indexAction($response) {
        return $this->twig->render($response, 'index.html.twig', [ 'topics' => $this->smf->recentTopics()]);
    }

    /**
     * @param Response $response
     * @return \Psr\Http\Message\ResponseInterface
     */
    public function userInfoAction($response)
    {
        return $response->withJson([ 'token' => $this->token, 'user' => $this->smf->getUserInfo()]);
    }
}
