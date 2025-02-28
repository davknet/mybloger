<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\NavbarController;
use Illuminate\Http\Request;


Route::get('/test', function () {
    return response()->json(['message' => 'API route working!']);
});







Route::get('/navbars', [NavbarController::class, 'index']);
