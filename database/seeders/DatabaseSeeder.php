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
                'name' => 'CPNS',
                'slug' => 'cpns'
            ],
            [
                'name' => 'BUMN',
                'slug' => 'bumn'
            ],
            [
                'name' => 'Instansi',
                'slug' => 'instansi'
            ],
            [
                'name' => 'Loker Subang',
                'slug' => 'loker-subang'
            ],
            [
                'name' => 'Luar Kota',
                'slug' => 'luar-kota'
            ],
            [
                'name' => 'Freelance',
                'slug' => 'freelance'
            ],
            [
                'name' => 'Magang',
                'slug' => 'magang'
            ],
            [
                'name' => 'Pelatihan',
                'slug' => 'pelatihan'
            ],
            [
                'name' => 'Informasi',
                'slug' => 'informasi'
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
