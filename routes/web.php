<?php

use App\Http\Controllers\ResumeController;
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


Route::get('/settings', function () {
    return Inertia::render('Settings/Profile', [
        'title' => "General Setting",
    ]);
})->name('settings');

Route::get('/settings/password',function(){
    return Inertia::render('Settings/Password', [
        'title' => "Password Setting",
    ]);
})->name('settings.password');


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'admin'])->name('dashboard');


require __DIR__ . '/auth.php';
