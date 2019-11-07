<?php
namespace App\Controller\Old;

use Symfony\Component\HttpFoundation\JsonResponse;

class Challenge
{
    /**
     * @return JsonResponse
     */
    public function __invoke(): JsonResponse
    {
        //!TODO Use App\Service\APIService to send your information, if you obtain success response return a 200 response
        //!TODO Destination API Rest has suffered some changes and a new parameter (valid=true) has to be sent to work properly
        return new JsonResponse(
            [
                'error' => 'You have to implement the Controller'
            ],
            JsonResponse::HTTP_NOT_IMPLEMENTED
        );
    }
}
