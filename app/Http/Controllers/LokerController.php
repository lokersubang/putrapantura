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
        // return Post::latest()->filter(request(['search']))->with(['category', 'user'])->fastPaginate(2);
        return inertia('Blog/Index', ['lokers' => Post::latest()->filter(request(['search']))->with(['category', 'user'])->Paginate(2)]);
    }

    public function show(Post $post)
    {
        return inertia('Blog/Show', ['article' => $post->load('category', 'user')]);
    }
}
