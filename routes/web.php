<?php


use App\Http\Controllers\PageController;
use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\NavbarController;

// Route::get('/', function () {
//     return inertia('Home');
// });


// Route::get('/about' , function(){
//     //sleep();
//     return Inertia::render('About');
// });

Route::get('/' , [ PageController::class  , 'home'] );
Route::get('/about' , [ PageController::class  , 'about'] );
Route::get('/contact' , [ PageController::class  , 'contact'] );
Route::resource('posts' , PostController::class )->except('index');





