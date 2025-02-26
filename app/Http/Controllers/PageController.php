<?php

namespace App\Http\Controllers;

use App\Models\Page;
use Illuminate\Http\Request;
use Illuminate\Support\Sleep;
use Inertia\Inertia;

class PageController extends Controller
{


    //
    public function home(){

          $page = [

            'page_id' =>  1 ,
            'title'   =>  'Home Page' ,


          ];



        return inertia('Home' , [ 'page' => $page  ]) ;
    }

    public function about(){

        // sleep(10);
        $page = [

            'page_id' =>  3 ,
            'title'   =>  'About Us Page' ,


          ];

        return inertia('About',  ['page' => $page ]);
    }

    public function contact(){

        // sleep(10);
        $page = [

            'page_id' =>  3 ,
            'title'   =>  'Contact Page' ,


          ];

        return inertia('Contact' , ['page' => $page  ]);
    }
}
