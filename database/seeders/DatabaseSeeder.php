<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Category;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        $category = [
            [
                'name' => 'Aplikasi',
                'slug' => 'aplikasi'
            ],
            [
                'name' => 'Game',
                'slug' => 'game'
            ],
            [
                'name' => 'Informasi',
                'slug' => 'informasi'
            ],
            [
                'name' => 'Software',
                'slug' => 'software'
            ],
            [
                'name' => 'Tutorial',
                'slug' => 'tutorial'
            ],
        ];

        foreach ($category as $c) {
            Category::create($c);
        }


        \App\Models\User::factory()->create([
            'name' => 'Dadan Nurmaulana',
            'email' => 'dadan@gmail.com',
        ]);
    }
}
