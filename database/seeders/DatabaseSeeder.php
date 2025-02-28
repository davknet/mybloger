<?php

namespace Database\Seeders;

use App\Models\DropdownTypes;
use App\Models\Language;
use App\Models\Navbar;
use App\Models\Page;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{




    public int $counter = 0 ;
    protected   $pages = [

        [ 'lang_id'  => 1 ,  'slug'  => '/' , 'title' => 'Home Page' ,   'content'  => '' , 'author' => 1 , 'is_active' => true   , 'name' => 'Home'] ,
        [ 'lang_id'  => 1 ,  'slug'  => '/contact' , 'title' => 'Contact Us' ,   'content'  => '' , 'author' => 1 , 'is_active' => true , 'name' => 'About' ] ,
        [ 'lang_id'  => 1 ,  'slug'  => '/about' , 'title' => 'About Us' ,   'content'  => '' , 'author' => 1 , 'is_active' => true  , 'name' => 'Contact'] ,


      ];
      protected  $dropdowns = [
        [  'type'  => 'small'   ]   ,
        [  'type'  =>  'madium' ]   ,
        [  'type'  =>  'large'  ]
     ] ;

     protected  $naves  = [
        [ 'lang_id'  => 1 , 'page_id' => 1 ,  'drop_id' => null ,  'position'  =>   1 , 'extra'  =>   '' , 'is_dropdown'  =>  false  , 'dropdown_type'  =>  'none' ,  ] ,
        [ 'lang_id'  => 1 , 'page_id' => 2 ,  'drop_id' => null ,  'position'  =>   2 , 'extra'  =>   '' , 'is_dropdown'  =>  false  , 'dropdown_type'  => 'none' ]    ,
        [ 'lang_id'  => 1 , 'page_id' => 3 , 'drop_id' => null  ,  'position'  =>   3 , 'extra'  =>   ''  , 'is_dropdown'  =>  false  , 'dropdown_type'  =>  'none' ] ,
        [ 'lang_id'  => 1 , 'page_id' => null , 'drop_id' => 1 ,  'position'  =>   3 , 'extra'  =>   'Categoriess'  , 'is_dropdown'  =>  false  , 'dropdown_type'  =>  'small' ]
     ] ;







    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);


        Language::create( [

            'lang_code'      =>  'en' ,
            'language_name'  =>  'English' ,
            'description'    =>  'Default Language English United State  '

        ]);

        foreach($this->dropdowns as $key => $dropdown ){

            DropdownTypes::create($dropdown) ;
        }




        foreach( $this->pages as $key => $page )
        {

              Page::create($page);

        }





        foreach($this->naves as $key => $nav )
        {
               Navbar::create( $nav  );
        }




    }
}
