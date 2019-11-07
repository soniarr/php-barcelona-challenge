<?php

namespace App\Service;

use GuzzleHttp\Client;
use GuzzleHttp\Exception\GuzzleException;

class APIService
{
    const API_URL = ''; //!TODO destination API url has been lost through the code, help us find it

    /**
     * @var Client
     */
    private $client;

    public function __construct(Client $client)
    {
        $this->client = $client;
    }

    /**
     * @param string $name
     * @param string $email
     * @param string $reference
     * @return string
     * @throws GuzzleException
     */
    public function sendToken(string $name, string $email, string $reference): string
    {
        $response = $this->client->request('POST', self::API_URL, [
            'name' => $name,
            'email' => $email,
            'ticket' => $reference
        ]);

        return $response->getStatusCode() === 200;
    }
}
