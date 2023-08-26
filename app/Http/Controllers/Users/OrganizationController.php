<?php

namespace App\Http\Controllers\Users;

use App\Http\Controllers\Controller;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\{RedirectResponse, Request};
use Illuminate\Support\Facades\{Auth,Redirect};
use Inertia\{Inertia,Response};

use App\Http\Requests\OrganizationRequest;


class OrganizationController extends Controller
{
    /**
     * Display the Organizations list.
     */
    public function index(Request $request): Response
    {
        return Inertia::render('Organization/View', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /**
     * Create the Organization.
     */
    public function create(OrganizationRequest $request): RedirectResponse
    {

    }

    /**
     * Update the Organization.
     */
    public function update(): RedirectResponse
    {
        
    }

    /**
     * Delete the Organization.
     */
    public function destroy(): RedirectResponse
    {

    }
}
