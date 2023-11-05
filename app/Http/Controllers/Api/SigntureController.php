<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Signature;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class SigntureController extends Controller
{

    public function upload(Request $request): JsonResponse
    {
        $data = $request->validate([
            'image' => 'sometimes|string',
            'name' => 'sometimes|string',
            'national_id' => 'sometimes|string',
            'email' => 'sometimes|string',
            'phone' => 'sometimes|string',
        ]);

        // Extract the base64 encoded image data
        $base64Image = $data['image'];

        // remove the base64 "header"
        $base64Image = str_replace('data:image/png;base64,', '', $base64Image);

        // Decode the base64 data and generate a unique filename
        $imageData = base64_decode($base64Image);
        $imageName = uniqid() . '.png';

        Storage::put('public/signatures/' . $imageName, $imageData);


        Signature::create([
            'signature' => $imageName,
            'name' => $data['name'],
            'national_id' => $data['national_id'],
            'email' => $data['email'],
            'phone' => $data['phone'],
        ]);

        return response()->json([
            'message' => 'Signature uploaded successfully',
            'signature' => $imageName,
        ]);
    }

}
