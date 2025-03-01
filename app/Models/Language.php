<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Language extends Model
{
    use HasFactory, Notifiable ;
    protected $fillable = [

        'lang_code'     ,
        'language_name' ,
        'description'   ,
    ] ;

    public function page(){

        return $this->hasOne(Page::class);
    }

}
