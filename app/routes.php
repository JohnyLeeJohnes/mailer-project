<?php

declare(strict_types=1);

use App\Application\Actions\Email\SendEmailAction;
use App\Application\Middleware\APIMiddleware;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\App;
use Slim\Views\PhpRenderer;

return function (App $app) {
    $app->options('/{routes:.*}', function (Request $request, Response $response) {
        return $response;
    });

    $app->get('/', function (Request $request, Response $response) {
        $renderer = new PhpRenderer('../templates');
        return $renderer->render($response, 'index.php');
    });

    $app->post('/api/sendEmail', SendEmailAction::class)
        ->add(APIMiddleware::class);
};
