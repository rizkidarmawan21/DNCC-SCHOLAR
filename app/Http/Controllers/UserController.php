<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Rules\MatchOldPassword;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class UserController extends Controller
{
    public function profile()
    {
        return Inertia::render('Settings/Profile', [
            'title' => "General Setting",
        ]);
    }

    public function updateProfile(Request $request, User $user)
    {
        if (Auth::user()->id !== $user->id) {
            return redirect()->back();
        }

        $data = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,' . $user->id,
            'dncc_year' => 'required|min:4|max:4',
        ]);

        $user->update($data);

        return redirect()->back()->with('message', 'Profile updated successfully');
    }

    public function password()
    {
        return Inertia::render('Settings/Password', [
            'title' => "Password Setting",
        ]);
    }

    public function updatePassword(Request $request, User $user)
    {
        $data = $request->validate([
            'password_current' => ['required', new MatchOldPassword, 'min:8'],
            'new_password'     => 'required|min:8',
            'repeat_password'  => 'required|same:new_password'
        ]);

        $user->update(['password' => Hash::make($request->new_password)]);

        // return 'masuk lek';
        return redirect()->back()->with('message', 'New Password updated successfully');
    }
}
