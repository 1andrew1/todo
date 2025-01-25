<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Log;
use Maatwebsite\Excel\Facades\Excel;
use App\Exports\TasksExport;
use Barryvdh\DomPDF\Facade\Pdf;

use Maatwebsite\Excel\Excel as ExcelWriter;
use Symfony\Component\HttpFoundation\StreamedResponse;

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

    public function exportExcel(Request $request)
    {
        // Pobieranie przefiltrowanych danych
        $query = Task::query();

        // Wyszukiwanie po treści w nazwie
        if ($request->filled('search')) {
            $query->where('title', 'like', '%' . $request->search . '%');
        }
        
        if ($request->filled('from_date') && $request->filled('to_date')) {
            $query->whereBetween('created_at', [$request->from_date, $request->to_date]);
        }

        if ($request->filled('status')) {
            $query->where('is_completed', $request->status);
        }

        if ($request->filled('search')) {
            $query->where('title', 'LIKE', '%' . $request->search . '%');
        }

        $tasks = $query->get();

        // Generowanie danych do Excela
        $data = $tasks->map(function ($task, $index) {
            return [
                __('messages.lp') => $index + 1,
                __('messages.task_title') => $task->title,
                __('messages.task_status') => $task->is_completed ? __('messages.task_closed') : __('messages.task_open'),
                __('messages.task_created_at') => $task->created_at->format('Y-m-d'),
            ];
        });

        // Dodanie nagłówków do danych
        $headers = [
            __('messages.table_no'),
            __('messages.table_name'),
            __('messages.table_status'),
            __('messages.table_date_created'),
        ];

        $data->prepend($headers);

        // Tworzenie pliku Excel
        return Excel::download(new class($data->toArray()) implements \Maatwebsite\Excel\Concerns\FromArray {
            private $data;

            public function __construct($data)
            {
                $this->data = $data;
            }

            public function array(): array
            {
                return $this->data;
            }
        }, 'tasks.xlsx');
    }

    public function exportPdf(Request $request)
    {
        /*
        $tasks = Task::all()->map(function ($task, $index) {
            return [
                'lp' => $index + 1,
                'title' => $task->title,
                'status' => $task->is_completed ? __('messages.task_closed') : __('messages.task_open'),
                'created_at' => $task->created_at->format('Y-m-d H:i:s'),
            ];
        });

        $pdf = Pdf::loadView('tasks.pdf', compact('tasks'));

        return $pdf->download('tasks.pdf');
        */
    // Pobieramy dane z modelu z uwzględnieniem filtrów
    $query = Task::query();

    // Wyszukiwanie po treści w nazwie
    if ($request->filled('search')) {
       $query->where('title', 'like', '%' . $request->search . '%');
    }

    if ($request->filled('from_date') && $request->filled('to_date')) {
        $query->whereBetween('created_at', [$request->from_date, $request->to_date]);
    }

    if ($request->filled('status')) {
        $query->where('is_completed', $request->status);
    }

    $tasks = $query->get();

    $pdf = PDF::loadView('tasks.pdf', compact('tasks'));

    return $pdf->download('tasks.pdf');
    }

}
