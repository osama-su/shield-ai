<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    use HasFactory;

    protected $fillable = [
        'contact_message_id',
        'assigned_user_id',
        'type',
        'status',
        'amount',
    ];

    public function contactMessage()
    {
        return $this->belongsTo(ContactMessage::class);
    }

    public function assignedUser()
    {
        return $this->belongsTo(User::class);
    }

}
