<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreContactMessageRequest;
use App\Imports\ContactMessageImport;
use App\Models\ContactMessage;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Maatwebsite\Excel\Facades\Excel;

class ContactMessageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        if (auth()->user()->is_admin) {
            $contactMessages = ContactMessage::paginate();
        }else{
            $contactMessages = ContactMessage::where('assigned_user_id', auth()->user()->id)->paginate();
        }
        $users = User::where('is_admin', false)->get();

        return Inertia::render('ContactMessages/Index', [
            'data' => $contactMessages,
            'users' => $users,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreContactMessageRequest $request)
    {
        $contactMessage = ContactMessage::create($request->validated());

        return response()->json([
            'message' => 'ContactMessage stored successfully',
            'data' => $contactMessage,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(ContactMessage $contactMessage)
    {
        return response()->json([
            'message' => 'ContactMessage retrieved successfully',
            'data' => $contactMessage,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(StoreContactMessageRequest $request, ContactMessage $contactMessage)
    {
        $contactMessage->update($request->validated());

        return response()->json([
            'message' => 'ContactMessage updated successfully',
            'data' => $contactMessage,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ContactMessage $contactMessage)
    {
        $contactMessage->delete();

        return response()->json([
            'message' => 'ContactMessage deleted successfully',
        ]);
    }

    public function import(Request $request)
    {
        try {
            // Validate the request
            $request->validate([
                'csv' => 'required|mimes:csv,xls,xlsx,txt|max:10240', // adjust max file size as needed
            ]);

            // Get the uploaded file
            $csvFile = $request->file('csv');

            Excel::import(new ContactMessageImport(), $csvFile);
            // Return a success response
            return response()->json(['message' => 'CSV file imported successfully'], 200);
        } catch (\Exception $e) {
            // Handle exceptions or validation errors
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

}
