<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContactMessage extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'phone_number',
        'gender',
        'country',
        'service',
        'notes',
        'assigned_user_id',
    ];


    public function assignedUser()
    {
        return $this->belongsTo(User::class, 'assigned_user_id');
    }
}
