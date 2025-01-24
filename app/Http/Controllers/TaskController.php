<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Log;

class TaskController extends Controller
{
    public function index(Request $request)
    {
        $query = Task::query();
    
        // Wyszukiwanie po treści w nazwie
        if ($request->filled('search')) {
            $query->where('title', 'like', '%' . $request->search . '%');
        }
    
        // Filtr według statusu
        if ($request->filled('status')) {
            $query->where('is_completed', $request->status);
        }
    
        // Filtr według dat
        if ($request->filled('from_date')) {
            $query->whereDate('created_at', '>=', $request->from_date);
        }
        if ($request->filled('to_date')) {
            $query->whereDate('created_at', '<=', $request->to_date);
        }
    
        if ($request->filled('sort') && $request->filled('order')) {
            $query->orderBy($request->sort, $request->order);
        } else {
            $query->orderBy('created_at', 'desc'); // Domyślne sortowanie
        }

        // Pobieranie wyników z paginacją
        // $tasks = $query->paginate(10)->withQueryString();
        $tasks = $query->paginate(10)->appends($request->query());
        return view('tasks.index', compact('tasks'));
    }

    public function show(Request $request, Task $task)
    {
        return view('tasks.show', compact('task'));
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
        ]);

        try {
            Task::create($validated); // Utworzenie nowego zadania
            
            return redirect()->route('tasks.index')
            ->with('status', 'success')
            ->with('message', __('messages.task_created'));
        } catch (\Exception $e) {
            return redirect()->route('tasks.index')
                ->with('status', 'error')
                ->with('message', __('messages.task_create_failed'));
        }
    }

    public function edit(Task $task)
    {
        return view('tasks.edit', compact('task'));
    }

    public function update(Request $request, Task $task)
    {
        // Walidacja danych wejściowych
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'is_completed' => 'required|boolean',
        ]);

        try {
            $task->update($validated);

            return redirect()->route('tasks.index')
                ->with('status', 'success')
                ->with('message', __('messages.task_updated'));
        } catch (\Exception $e) {
            return redirect()->route('tasks.index')
                ->with('status', 'error')
                ->with('message', __('messages.task_update_failed'));
        }
    }

    public function destroy(Task $task)
    {
        // Tylko otwarte zadania można usuwać
        if ($task->is_completed === 1) {
            return redirect()->back()
                ->with('status', 'error')
                ->with('message', __('messages.task_cannot_be_deleted'));
        }

        try {
            $task->delete();
            return redirect()->route('tasks.index')
                ->with('status', 'success')
                ->with('message', __('messages.task_deleted'));
        } catch (\Exception $e) {
            //\Log::error('Error: ' . $e->getMessage());
            return redirect()->route('tasks.index')
                ->with('status', 'error')
                ->with('message', __('messages.task_delete_failed'));
        }
    }
}
