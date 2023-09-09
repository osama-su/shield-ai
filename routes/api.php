<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\dashboard\PageController as DashboardPageController;
use App\Http\Controllers\Api\website\PageController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('/login', [AuthController::class, 'login']);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// admin routes
Route::middleware(['auth:sanctum'])->prefix('admin')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/refresh', [AuthController::class, 'refresh']);
    Route::get('/me', [AuthController::class, 'me']);


    Route::get('pages', [DashboardPageController::class, 'index'])->name('dashboard.pages.index');
    Route::get('{page}', [DashboardPageController::class, 'show'])->name('dashboard.pages.show');
    Route::put('{page}', [DashboardPageController::class, 'update'])->name('dashboard.pages.update');
});

Route::get('{page}', [PageController::class, 'show'])->name('pages.show');
