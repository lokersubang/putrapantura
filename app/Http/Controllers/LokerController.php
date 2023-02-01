<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Post;
use Illuminate\Http\Request;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;

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


        //     ->add(Url::create('/kategori'))
        //     ->add(Url::create('/contact_us'));

        $sitemap = Sitemap::create();
        $posts = Post::all();
        foreach ($posts as $post) {
            $sitemap->add(Url::create("/{$post->slug}.html"));
        }
        $sitemap->writeToFile(public_path('sitemap.xml'));

        return inertia('Blog/Index', [
            'title' => $title,
            'lokers' => Post::latest()->filter(request(['search', 'kategori']))->with(['category', 'user'])->fastPaginate(8)->withQueryString()]);
    }

    public function show(Post $post)
    {
        return inertia('Blog/Show', ['article' => $post->load('category', 'user')]);
    }
}
