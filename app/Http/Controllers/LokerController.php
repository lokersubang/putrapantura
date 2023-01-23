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
        return inertia('Blog/Index', ['lokers' => Post::with(['category', 'user'])->limit(9)->latest()->get()]);
    }

    public function show(Post $post)
    {

        return inertia('Blog/Show', ['article' => $post->load('category', 'user')]);
    }
}
