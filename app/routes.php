<?php

declare(strict_types=1);

use App\Application\Actions\Email\SendEmailAction;
use App\Application\Middleware\APIMiddleware;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\App;

return function (App $app) {
    //OPTIONS Pre-Flight
    $app->options('/{routes:.*}', function (Request $request, Response $response) {
        return $response;
    });

    //REST API
    $app->post('/api/sendEmail', SendEmailAction::class)
        ->add(APIMiddleware::class);
};
