<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Navbar extends Model
{


    use HasFactory, Notifiable ;

    protected $fillable = [
        'page_id'     ,
        'lang_id'     ,
        'drop_id'     ,
        'position'    ,
        'extra'       ,
        'is_dropdown' ,
        'dropdown_type'
    ];

    public function page() {
        return $this->belongsTo(Page::class);
    }
}
