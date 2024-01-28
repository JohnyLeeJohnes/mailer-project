<?php

namespace App\Application\Actions\Email;

use App\Application\Actions\Action;
use Psr\Http\Message\ResponseInterface as Response;

class SendEmailAction extends Action
{
    protected function action(): Response
    {
        return $this->respondWithData(["PRDEL"]);
    }
}