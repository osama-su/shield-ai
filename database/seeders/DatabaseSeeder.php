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
        // admin user
        \App\Models\User::factory()->firstOrCreate([
            'name' => 'Admin',
            'email' => 'admin@app.com',
            'password' => 'secret',
        ]);
         $this->call([
             PageSeeder::class,
         ]);
    }
}
