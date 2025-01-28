<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Task;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class TaskSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Tworzenie 100 losowych zadań
        for ($i = 0; $i < 100; $i++) {
            Task::create([
                'title' => 'Task ' . ($i + 1), //Str::random(10),
                'is_completed' => fake()->boolean(30), // 30% szans na zakończone zadanie
            ]);
        }
    }
}
