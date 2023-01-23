<?php

namespace App\Http\Controllers;

use App\Models\Category;
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
        $title = null;
        if (request('kategori')) {
            $cat = Category::firstWhere('slug', request('kategori'));
            $title = $cat->name;
        };
        return inertia('Blog/Index', [
            'title' => $title,
            'lokers' => Post::latest()->filter(request(['search', 'kategori']))->with(['category', 'user'])->fastPaginate(8)->onEachSide(2)
        ]);
    }

    public function show(Post $post)
    {
        return inertia('Blog/Show', ['article' => $post->load('category', 'user')]);
    }
}
