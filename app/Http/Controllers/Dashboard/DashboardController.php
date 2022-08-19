<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Resume;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index() {
        if(Auth::user()->is_admin){
            $data = Resume::with(['author'])->get();
        }else {
            $data = Resume::with(['author'])->where('user_id', Auth::user()->id)->get();
        }
        return Inertia::render('Dashboard/Dashboard',compact('data'));    
    }

    public function post() {

    }

    public function users() {

    }
}
