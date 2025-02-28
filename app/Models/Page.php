<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Page extends Model
{
    use HasFactory ;

    protected $fillable = [
        'lang_id'   ,
        'slug'      ,
        "title"     ,
        'content'   ,
        'author'    ,
        'is_active'
    ];

    public function navbar() {
        return $this->hasOne(Navbar::class);
    }



    public function language(){

        return $this->belongsTo( Language::class);
    }

}
