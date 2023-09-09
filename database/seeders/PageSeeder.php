<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
//        \App\Models\Page::factory()->count(5)->create();

        \App\Models\Page::factory()->create([
            'title' => 'Home',
            'slug' => 'home',
            'content' => [
                'hero' => [
                    'title' => 'Welcome to our website!',
                    'subtitle' => 'This is a subtitle',
                    'image' => [
                        'url' => 'https://source.unsplash.com/random/800x600',
                        'alt' => 'Random image',
                    ],
                    'cta' => [
                        'label' => 'Learn more',
                        'url' => '#',
                    ],
                    'cta2' => [
                        'label' => 'Contact us',
                        'url' => '#',
                    ],
                ],
                'heading' => [
                    'title' => 'About us',
                ],
            ],
        ]);
    }
}
