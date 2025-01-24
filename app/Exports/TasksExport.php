<?php

namespace App\Exports;

use App\Models\Task;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;


class TasksExport implements FromCollection, WithHeadings
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        //return Task::all();

        // Pobierz dane z bazy i przygotuj je do eksportu
        return Task::select('id', 'title', 'is_completed', 'created_at')->get()
            ->map(function ($task, $index) {
                return [
                    'lp' => $index + 1,
                    'title' => $task->title,
                    'status' => $task->is_completed ? __('messages.task_closed') : __('messages.task_open'),
                    'created_at' => $task->created_at->format('Y-m-d H:i:s'),
                ];
            });
    }

    public function headings(): array
    {
        return [
            __('messages.table_no'),
            __('messages.table_name'),
            __('messages.table_status'),
            __('messages.table_date_created'),
        ];
    }
}
