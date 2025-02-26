<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Page extends Model
{

    protected $fillable = [
        'lang_id'   ,
        'slug'      ,
        "title"     ,
        'content'   ,
        'author'    ,
        'is_active'
    ];

}
