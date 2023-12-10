<?php

namespace App\Imports;

use App\Models\ContactMessage;
use Illuminate\Database\Eloquent\Model;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithStartRow;
use Maatwebsite\Excel\Concerns\WithUpserts;
use Maatwebsite\Excel\Concerns\WithValidation;

class ContactMessageImport implements ToModel, WithUpserts, WithStartRow, WithValidation
{
    /**
    * @param array $row
    *
    * @return Model|null
    */
    public function model(array $row)
    {
        return new ContactMessage([
            'name' => $row[0],
            'email' => $row[1],
            'phone_number' => $row[2],
            'gender' => $row[3],
            'country' => $row[4],
            'service' => $row[5],
            'notes' => $row[6],
        ]);
    }

    public function uniqueBy()
    {
        return 'email';
    }

    public function startRow(): int
    {
        return 2;
    }

    public function rules(): array
    {
//        return [
//            '1' => [
//                'unique:contact_messages,email'
//            ]
//        ] ;
        return [

        ] ;
    }
}
