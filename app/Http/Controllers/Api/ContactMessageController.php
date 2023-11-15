<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreContactMessageRequest;
use App\Http\Requests\UpdateContactMessageRequest;
use App\Models\ContactMessage;

class ContactMessageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $contactMessages = ContactMessage::all();

        return response()->json([
            'message' => 'ContactMessage retrieved successfully',
            'data' => $contactMessages,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreContactMessageRequest $request)
    {
        $data = $request->validated();
        // check if service not in request
        if (!isset($data['service'])) {
            $data['service'] = 'general';
        }
        $contactMessage = ContactMessage::create($data);

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
     * Remove the specified resource from storage.
     */
    public function destroy(ContactMessage $contactMessage)
    {
        $contactMessage->delete();

        return response()->json([
            'message' => 'ContactMessage deleted successfully',
        ]);
    }
}
