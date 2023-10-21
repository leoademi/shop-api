<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $attributes = $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if (auth()->attempt($attributes)) {
            $user = User::where('email', $request->email)->first();
            $user->api_token = Str::random(60);
            $user->save();

            return response()->json([
                "status" => "success",
                "data" => $user
            ]);
        } else {
            throw new Exception("Wrong credentials", 401);
        }
    }
}
