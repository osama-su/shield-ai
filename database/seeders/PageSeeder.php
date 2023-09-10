<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class PageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        if (\App\Models\Page::where('slug', 'home')->exists()) {
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

        if (\App\Models\Page::where('slug', 'about')->exists()) {
            \App\Models\Page::factory()->create([
                'title' => 'Header',
                'slug' => 'header',
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

        if (\App\Models\Page::where('slug', 'about')->exists()) {
            \App\Models\Page::factory()->create([
                'title' => 'Footer',
                'slug' => 'footer',
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
}
