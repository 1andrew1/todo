<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskController;
//use App\Http\Controllers\LanguageController;
//use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Log;

Route::get('/', function () {
    return view('home');
})->name('home');

Route::get('/tasks', [TaskController::class, 'index'])->name('tasks.index'); // Wyświetlenie wszystkich zadań
Route::post('/tasks', [TaskController::class, 'store'])->name('tasks.store'); // Zapisanie nowego zadania
Route::get('/tasks/show/{task}', [TaskController::class, 'show'])->name('tasks.show'); // Wyświetlenie wybranego zadania
Route::get('/tasks/edit/{task}', [TaskController::class, 'edit'])->name('tasks.edit'); // Formularz edycji zadania
Route::put('/tasks/{task}', [TaskController::class, 'update'])->name('tasks.update'); // Aktualizacja zadania
Route::delete('/tasks/{task}', [TaskController::class, 'destroy'])->where('task', '[0-9]+')->name('tasks.destroy'); // Usunięcie zadania

Route::get('lang/{lang}', function ($lang) {
    if (in_array($lang, ['en', 'pl', 'fr'])) { // Walidacja obsługiwanych języków
        //Log::info('Sesja z Roure przed: ' . json_encode(session()->all()));
        session()->put('locale', $lang); //zapisujemy wartość lang w sessji
        //Log::info('Sesja z Roure po: ' . json_encode(session()->all()));
        //dd(session()->all());
    }
    return redirect()->back();
})->name('lang');