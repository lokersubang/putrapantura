<?php

namespace App\Http\Controllers;

use App\Http\Requests\ArticleRequest;
use App\Models\Post;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    public function create()
    {
        return view('admin.create');
    }

    public function store(ArticleRequest $request)
    {
        Post::create($request->all());
        return back()->with('message', 'Lowongan Kerja Berhasil di Posting');
    }
}
