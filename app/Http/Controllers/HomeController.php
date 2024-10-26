<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function show()
    {
        return Inertia::render(
            'Home',
            [
                'response' => [
                    'status' => 200,
                    'message' => 'Success',
                    'data' => [
                        'user' => auth()->user()
                    ]
                ]
            ]
        );
    }
}
