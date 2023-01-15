<?php

use App\Http\Controllers\{AdminController, InformationController, LokerController, PostController, ProfileController};
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

Route::get('/', [LokerController::class, 'index'])->name('home');
Route::get('detail', [LokerController::class, 'show'])->name('show');



// Information
Route::get('about', [InformationController::class, 'about'])->name('about');
Route::get('contact', [InformationController::class, 'contact'])->name('contact');
Route::get('disclaimer', [InformationController::class, 'disclaimer'])->name('disclaimer');
Route::get('term-of-service', [InformationController::class, 'termofservice'])->name('termOfService');
Route::get('faq', [InformationController::class, 'faq'])->name('faq');





Route::get('/dashboard', [AdminController::class, 'index'])->name('dashboard');

Route::middleware('auth')->group(function () {
    // Post
    Route::get('posting-lowongan', [PostController::class, 'create'])->name('post.create');
    Route::post('posting-lowongan', [PostController::class, 'store'])->name('post.store');

    // Profil
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
