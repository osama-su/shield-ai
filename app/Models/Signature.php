<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Signature extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'signature',
        'national_id',
        'email',
        'phone',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];

}
