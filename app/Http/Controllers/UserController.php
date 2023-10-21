<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{

    public function getAll() 
    {
        return User::get();
    }

    public function getById($id)
    {
        $user = User::find($id);
        
        if (!$user) {
            throw new Exception("User not found", 404);
        }

        return $user;
    }

    public function create(Request $request)
    {
        try {
            $attributes = $request->validate([
                'first_name' => 'required|string',
                'last_name' => 'required|string',
                'email' => 'required|email',
                'birthdate' => 'required|date',
                'password' => 'required'
            ]);
        } catch (\Illuminate\Validation\ValidationException $th) {
            return $th->validator->errors();
        }
        $user = new User();

        $user->fill($attributes);

        $user->save();

        return $user;
    }
}
