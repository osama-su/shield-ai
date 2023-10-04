<?php

namespace App\Http\Controllers;

use App\Models\ContactMessage;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $contactMessagesThisMonth = ContactMessage::query()->where('created_at', now()->month)->count();
        $allContactMessages = ContactMessage::query()->count();
//        [3, 1, 0, 1, 4, 3, 3,3,3,0, 3, 3,]
//        empty months will be 0
        $contactMessagesPerMonth = ContactMessage::query()->selectRaw('count(*) as count, MONTH(created_at) month')
            ->groupBy('month')
            ->pluck('count', 'month')
            ->toArray();
        $contactMessagesPerMonth = array_replace(array_fill(1, 12, 0), $contactMessagesPerMonth);
        // get only values
        $contactMessagesPerMonth = array_values($contactMessagesPerMonth);
        return Inertia::render('Dashboard', compact('contactMessagesThisMonth', 'allContactMessages', 'contactMessagesPerMonth'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $user = User::create($request->validated());

        return response()->json([
            'message' => 'User stored successfully',
            'data' => $user,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        return response()->json([
            'message' => 'ContactMessage retrieved successfully',
            'data' => $user,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        $data = $request->validate([
            'name' => 'required|string',
            'status' => 'required|string|in:active,pending',
        ]);



        $user->update($data);


        return response()->json([
            'message' => 'ContactMessage updated successfully',
            'data' => $user,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        $user->delete();

        return response()->json([
            'message' => 'ContactMessage deleted successfully',
        ]);
    }
}
