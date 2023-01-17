<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class LokerController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // dd(Post::all());
        return inertia('Blog/Index', ['lokers' => Post::with(['category'])->latest()->get()]);
    }

    public function show()
    {
        return inertia('Blog/Show');
    }
}
