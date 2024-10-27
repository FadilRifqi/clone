<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::middleware('auth')->get('/home', [HomeController::class, 'show'])->name('home');
Route::middleware('guest')->get('/', [AuthController::class, 'loginView'])->name('login.view');
Route::get('/about', function () {
    return Inertia::render('About/Page');
})->name('about');
