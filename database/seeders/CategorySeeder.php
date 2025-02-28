<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */

     public function run(): void
{
    DB::table('categories')->insert([
        [
            'name'      => 'Lifestyle',
            'slug'      => 'lifestyle',
            'parent_id' => null,
            'lang_id'   => 1, 
            'created_at'=> now(),
            'updated_at'=> now(),
        ],
        [
            'name'      => 'Travel',
            'slug'      => 'travel',
            'parent_id' => null,
            'lang_id'   => 1,
            'created_at'=> now(),
            'updated_at'=> now(),
        ],
        [
            'name'      => 'Food&Recipes',
            'slug'      => 'food-&-recipes',
            'parent_id' => null,
            'lang_id'   => 1,
            'created_at'=> now(),
            'updated_at'=> now(),
        ],
        [
            'name'      => 'Health & Wellness',
            'slug'      => 'health-wellness',
            'parent_id' => null,
            'lang_id'   => 1,
            'created_at'=> now(),
            'updated_at'=> now(),
        ],
        [
            'name'      => 'Fitness',
            'slug'      => 'fitness',
            'parent_id' => null,
            'lang_id'   => 1,
            'created_at'=> now(),
            'updated_at'=> now(),
        ],
        [
            'name'      => 'Technology',
            'slug'      => 'technology',
            'parent_id' => null,
            'lang_id'   => 1,
            'created_at'=> now(),
            'updated_at'=> now(),
        ],
        [
            'name'      => 'Entertainment',
            'slug'      => 'intertainment',
            'parent_id' => null,
            'lang_id'   => 1,
            'created_at'=> now(),
            'updated_at'=> now(),
        ],
    ]);
}


}
