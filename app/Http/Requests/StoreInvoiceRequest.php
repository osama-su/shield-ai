<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreInvoiceRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'contact_message_id' => ['required', 'exists:contact_messages,id'],
            'assigned_user_id' => ['required', 'exists:users,id'],
            'amount' => ['required', 'numeric'],
            'type' => ['required', 'in:withdrawal,deposit'],
        ];
    }
}
