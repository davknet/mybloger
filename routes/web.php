<?php


use App\Http\Controllers\CategoryController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\NavbarController;


Route::get('/' , [ PageController::class  , 'home'] );
Route::get('/about' , [ PageController::class  , 'about'] );
Route::get('/contact' , [ PageController::class  , 'contact'] );
Route::resource('posts' , PostController::class )->except('index');
Route::get('/categories', [CategoryController ::class, 'index']);
Route::get('/categories/{slug}', [CategoryController::class, 'show']);





