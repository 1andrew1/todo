<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="UTF-8">
    <title>{{ __('messages.tasks_report') }}</title>
    <style>

        body {
            font-family: 'DejaVu Sans', sans-serif;
        }
        h1 {
            font-family: 'DejaVu Sans', sans-serif;
        }
        table {
            width: 100%;
            border-collapse: collapse;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>
    <h1>{{ __('messages.tasks_report') }}</h1>
    <table>
        <thead>
            <tr>
                <th>{{ __('messages.table_no') }}</th>
                <th>{{ __('messages.table_name') }}</th>
                <th>{{ __('messages.table_status') }}</th>
                <th>{{ __('messages.table_date_created') }}</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($tasks as $index => $task)
            <tr>
                <td>{{ $index + 1 }}</td>
                <td>{{ $task->title }}</td>
                <td>{{ $task->is_completed ? __('messages.task_closed') : __('messages.task_open') }}</td>
                <td>{{ $task->created_at->format('Y-m-d') }}</td>
            </tr>
        @endforeach
        </tbody>
    </table>
</body>
</html>
