<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Spatie\Sluggable\SlugOptions;
use Illuminate\Support\Str;

class DataArticleController extends Controller
{
    public function index()
    {
        return view('admin.article', ['posts' => Post::latest()->filter(request(['search']))->with(['user', 'category'])->fastPaginate(9)->withQueryString()]);
    }

    public function edit($id)
    {
        // dd(Post::where('id', $id)->first());
        return view('admin.edit', ['article' => Post::where('id', $id)->first()]);
    }

    public function update(Request $request, $id)
    {
        $attr = $request->validate([
            'category_id' => 'required|in:1,2,3,4,5,6,7,8,9',
            'user_id' => 'required',
            'title' => 'required',
            'description' => 'required|max:300',
            'body' => 'required',
            'address' => 'required',
            'company' => 'required',
            'image' => 'required'
        ]);
        Post::where('id', $id)->update($attr);

        return redirect(route('article.index'))->with('message', 'Berhasil di Update');
    }

    public function destroy($id)
    {
        Post::find($id)->delete();
        return back()->with('message', 'Berhasil di Hapus');
    }
}
