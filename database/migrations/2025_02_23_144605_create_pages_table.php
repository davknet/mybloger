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
        Schema::create('pages', function (Blueprint $table) {
            $table->increments('id'); // Auto-incrementing integer primary key
            $table->integer('lang_id')->unsigned(); // Foreign key as an unsigned integer to match languages table
            $table->string('slug');
            $table->string('title');
            $table->string('name');
            $table->text('content');
            $table->foreignId('author')->constrained('users', 'id')->onDelete('cascade'); // Foreign key for author
            $table->boolean('is_active');
            $table->timestamps();
            $table->foreign('lang_id')->references('id')->on('languages')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pages');
    }
};
