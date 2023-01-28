<?php

use App\Http\Controllers\{ArticleController, CategoryController, DataArticleController, InformationController, LokerController, PostController, ProfileController};
use App\Models\Category;
use App\Models\Post;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



Route::group(['prefix' => 'laravel-filemanager', 'middleware' => ['web', 'auth']], function () {
    \UniSharp\LaravelFilemanager\Lfm::routes();
});
Route::group(['prefix' => 'data-lowongan/laravel-filemanager', 'middleware' => ['web', 'auth']], function () {
    \UniSharp\LaravelFilemanager\Lfm::routes();
});





// Information
Route::get('about', [InformationController::class, 'about'])->name('about');
Route::get('contact', [InformationController::class, 'contact'])->name('contact');
Route::get('privacy-policy', [InformationController::class, 'privacyPolicy'])->name('privacyPolicy');
Route::get('disclaimer', [InformationController::class, 'disclaimer'])->name('disclaimer');
Route::get('term-of-service', [InformationController::class, 'termofservice'])->name('termOfService');
Route::get('faq', [InformationController::class, 'faq'])->name('faq');



Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    // Post
    Route::get('tulis-lowongan', [ArticleController::class, 'create'])->name('article.create');
    Route::post('tulis-lowongan', [ArticleController::class, 'store'])->name('article.store');

    // Data Post
    Route::get('data-lowongan', [DataArticleController::class, 'index'])->name('article.index');
    Route::get('data-lowongan/{id}', [DataArticleController::class, 'edit'])->name('article.edit');
    Route::put('data-lowongan/{id}', [DataArticleController::class, 'update'])->name('article.update');
    Route::delete('data-lowongan/{id}', [DataArticleController::class, 'destroy'])->name('article.delete');


    // Profil
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';

// Home Page
Route::get('/', [LokerController::class, 'index'])->name('home');
Route::post('/', [LokerController::class, 'index'])->name('home.post');
Route::get('/{post:slug}.html', [LokerController::class, 'show'])->name('post.show');

// Category
Route::get('kategori', [CategoryController::class, 'index'])->name('category');
Route::get('kategori/{category:slug}', [CategoryController::class, 'show'])->name('category.show');

// sitemap
