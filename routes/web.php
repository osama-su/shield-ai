<?php

use App\Http\Controllers\ContactMessageController;
use App\Http\Controllers\InvoiceController;
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


            return redirect()->route('dashboard');


//        return Inertia::render('Welcome', [
//            'canLogin' => Route::has('login'),
//            'canRegister' => Route::has('register'),
//        ]);
});

Route::get('/need-activation', function () {
    return Inertia::render('NeedActivation');
})->name('need-activation');

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
    'active',
])->group(function () {
    Route::get('/dashboard', [\App\Http\Controllers\DashboardController::class,'index'])->name('dashboard');

    Route::resource('contact-messages', ContactMessageController::class);
    Route::post('contact-messages/import', [ContactMessageController::class, 'import'])->name('contact-messages.import');

    Route::resource('{contactMessage}/invoices', InvoiceController::class);
    Route::resource('users', UserController::class);
});
