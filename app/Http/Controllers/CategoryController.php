<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index()
    {
        return inertia('Blog/Category/Index', ['categories' => Category::latest()->get()]);
    }

    public function show(Category $category)
    {
        // dd(Category::with('posts', 'category')->where('slug', $slug)->latest()->get());
        return inertia(
            'Blog/Category/Show',
            [
                'title' => $category->name,
                'lokers' => $category->post->load('category', 'user')
            ]
        );
    }
}
