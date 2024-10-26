<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class TestController extends Controller
{
    public function show()
    {
        return Inertia::render(
            'Home',
            [
                'event' => [
                    'id' => 1,
                    'title' => 'Laravel Event',
                    'description' => 'This is a test event',
                    'date' => '2021-09-01',
                    'time' => '10:00:00',
                    'location' => 'Laravel City',
                    'price' => 100.00,
                    'image' => 'https://via.placeholder.com/800x400',
                    'created_at' => '2021-08-01 10:00:00',
                    'updated_at' => '2021-08-01 10:00:00',
                ]
            ]
        );
    }
}
