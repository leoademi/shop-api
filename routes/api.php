<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/users', [UserController::class, 'getAll']);
Route::middleware('auth:api')->get('/users/{id}', [UserController::class, 'getById'])->middleware('auth');
Route::post('/users', [UserController::class, 'create']);
Route::post('/login', [AuthController::class, 'login']);
