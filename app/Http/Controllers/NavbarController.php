<?php

namespace App\Http\Controllers;

use App\Models\Navbar;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NavbarController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Navbar::join('languages as LN', 'LN.id', '=', 'navbars.lang_id')
                  ->leftJoin('pages as PG', 'PG.id', '=', 'navbars.page_id')
                  ->where('LN.lang_code', 'en')
                  ->orderBy('navbars.position')
                  ->select([
                      'navbars.id as nav_id',
                      'navbars.lang_id',
                      'navbars.page_id',
                      'navbars.drop_id',
                      'navbars.position',
                      'navbars.extra',
                      'navbars.is_dropdown',
                      'navbars.dropdown_type',
                      'PG.slug',
                      'PG.title',
                      'PG.name' ,
                      'PG.is_active'
                  ])
                  ->get();

    return response()->json($data);

    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
