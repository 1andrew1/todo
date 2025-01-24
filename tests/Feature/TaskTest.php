<?php

use App\Models\Task;

it('Tworzenie zadania', function () {
    // Tworzymy zadanie ręcznie
    $task = new Task([
        'title' => 'Przykładowe zadanie',
        'is_completed' => false,
    ]);
    $task->save();

    // Sprawdzamy, czy zadanie istnieje w bazie
    $this->assertDatabaseHas('tasks', [
        'title' => 'Przykładowe zadanie',
        'is_completed' => false,
    ]);
});
