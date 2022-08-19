<?php

namespace App\Http\Controllers;

use App\Models\Resume;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;

class ResumeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Research/Research', [
            'title' => 'Research your interests',
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // dd($request);
        $data  = $request->validate([
            'title'       => 'required',
            'category'    => 'required',
            'description' => 'required',
            'year'        => 'required',
            'published'   => 'required',
        ]);
        

        $data['user_id'] = auth()->user()->id;
        $data['slug'] = Str::slug($request->title.'-'.Str::random(10), '-');
        $data['excerpt'] = Str::limit(strip_tags($request->description), 200, '...');

        if ($request->link) {
            $data['link'] = $request->link;
            $data['pdf'] = null;
        } elseif ($request->pdf) {
            $data['link'] = null;
            $path = $request->file('pdf')->store('post-pdf');
            $data['pdf'] = Storage::url($path);
        } elseif ($request->link && $request->pdf) {
            $data['link'] = $request->link;
            $path = $request->file('pdf')->store('post-pdf');
            $data['pdf'] = Storage::url($path);
        } elseif ($request->link === null && $request->pdf === null) {
            return redirect()->back()->withErrors(['resumeFile' => ' Please choose one of uploaded by link external or with pdf !']);
        }


        Resume::create($data);
        return redirect()->route('dashboard')->with('message', 'New journal created successfully');
    }

    
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Resume  $resume
     * @return \Illuminate\Http\Response
     */
    public function show(Resume $resume)
    {
        return Inertia::render('Research/DetailResearch', [
            'title' => 'JUDUL RESEARCH',
        ]);
    }
    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Resume  $resume
     * @return \Illuminate\Http\Response
     */
    public function edit(Resume $resume)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Resume  $resume
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Resume $resume)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Resume  $resume
     * @return \Illuminate\Http\Response
     */
    public function destroy(Resume $resume)
    {
        //
    }
}
