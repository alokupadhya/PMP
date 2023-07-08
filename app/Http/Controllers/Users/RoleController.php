<?php

namespace App\Http\Controllers\Users;

use App\Http\Controllers\Controller;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class RoleController extends Controller
{
    /**
     * Display the roles list.
     */
    public function index(Request $request): Response
    {
        return Inertia::render('Role/View', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /**
     * Create the role.
     */
    public function create(): RedirectResponse
    {

    }

    /**
     * Update the role.
     */
    public function update(): RedirectResponse
    {
        
    }

    /**
     * Delete the role.
     */
    public function destroy(): RedirectResponse
    {

    }
}
