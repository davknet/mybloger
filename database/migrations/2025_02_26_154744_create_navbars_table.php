<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('navbars', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('lang_id')->unsigned();
            $table->integer('page_id')->unsigned()->nullable();
            $table->integer('drop_id')->unsigned()->nullable();
            $table->integer('position')->default(0);
            $table->string( 'extra');
            $table->boolean('is_dropdown')->default(False);
            $table->string('dropdown_type')->default('none');
            $table->timestamps();
            $table->foreign('page_id')->references('id')->on('pages')->onDelete('cascade');
            $table->foreign('lang_id')->references('id')->on('languages')->onDelete('cascade');
            $table->foreign('drop_id')->references('id')->on('dropdown_types')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('navbars');
    }
};
