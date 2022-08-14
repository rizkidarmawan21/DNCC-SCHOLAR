<?php

use App\Http\Controllers\ResumeController;
use App\Http\Controllers\UserController;
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

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'title' => "Dncc Scholar",
    ]);
});

Route::get('/research', [ResumeController::class, 'index'])->name('research');
Route::resource('/research', ResumeController::class)->except('index');


Route::middleware('auth')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard/Dashboard');
    })->name('dashboard');
    Route::get('/dashboard/post', function () {
        return Inertia::render('Dashboard/createPost');
    })->name('dashboard.post');
    Route::get('/dashboard/users', function () {
        return Inertia::render('Dashboard/users');
    })->name('dashboard.users')->middleware('admin');

    Route::get('/settings', [UserController::class, 'profile'])->name('settings');

    Route::get('/settings/password', [UserController::class, 'password'])->name('settings.password');

    Route::post('/settings/{user}', [UserController::class, 'updateProfile'])->name('settings.profile.update');
    Route::post('/settings/password/{user}', [UserController::class, 'updatePassword'])->name('settings.password.update');
});


require __DIR__ . '/auth.php';
