<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Post;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index()
    {
        return inertia('Blog/Category/Index', ['categories' => Category::latest()->get()]);
    }

    public function show(Category $category)
    {
        // return $data = Post::where('category_id', $category->id)->with(['category', 'user'])->latest()->fastPaginate(8);
        // dd($data);
        // foreach ($data as $d) {
        //     return $d->title;
        // }
        // dd(Category::with('posts', 'category')->where('slug', $slug)->latest()->get());
        return inertia(
            'Blog/Category/Show',
            [
                'title' => $category->name,
                // 'lokers' => $category->post->load('category', 'user')
                'lokers' => Post::where('category_id', $category->id)->with(['category', 'user'])->latest()->fastPaginate(8)
            ]
        );
    }
}
