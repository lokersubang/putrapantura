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
        return inertia(
            'Blog/Category/Show',
            [
                'title' => $category->name,
                'posts' => Post::where('category_id', $category->id)->with(['category', 'user'])->latest()->fastPaginate(8)
            ]
        );
    }
}
