<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        if (!\App\Models\User::where('email', 'admin@shieldgroup.ae')->exists()){
             \App\Models\User::factory()->firstOrCreate([
            'name' => 'Admin',
            'email' => 'admin@shieldgroup.ae',
            'password' => 'secret',
            'is_admin' => true,
        ]);
        }

         $this->call([
             PageSeeder::class,
         ]);
    }
}
