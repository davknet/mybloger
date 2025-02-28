<?php

use App\Http\Controllers\CategoryController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\NavbarController;
use App\Http\Middleware\ApiMiddleware;
use Illuminate\Http\Request;


Route::get('/test', function () {
    return response()->json(['message' => 'API route working!']);
});







Route::get('/navbars', [ NavbarController::class , 'index']);


// Route::get('/categories', [CategoryController::class, 'index']);
// Route::post('/categories', [CategoryController::class, 'store']);
// Route::get('/categories/{id}', [CategoryController::class, 'show']);
// Route::put('/categories/{id}', [CategoryController::class, 'update']);
// Route::delete('/categories/{id}', [CategoryController::class, 'destroy']);


Route::middleware([
    'api',
    ApiMiddleware::class
])->group(function () {
    Route::get('/navbars', [ NavbarController::class, 'index']);
    Route::get('/categories', [ CategoryController::class, 'getCategories']);
});
