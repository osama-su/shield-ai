<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class SigntureController extends Controller
{

    public function upload(Request $request): JsonResponse
    {
        $data = $request->validate([
            'image' => 'required|string',
        ]);

        // Extract the base64 encoded image data
        $base64Image = $data['image'];

        // Decode the base64 data and generate a unique filename
        $imageData = base64_decode($base64Image);
        $imageName = uniqid() . '.png';

        Storage::put('public/signtures/' . $imageName, $imageData);

        $user = Auth::user();
        $user->signature = $imageName;
        $user->save();

        return response()->json([
            'data' => [
                'signture' => $user->signature,
            ],
        ]);
    }

}
