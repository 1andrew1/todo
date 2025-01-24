@extends('layouts.app')

@section('title', 'Tasks')

@section('content')
    <div class="grid justify-items-center">
        <div class="w-2/5">
            <form method="GET" action="{{ route('tasks.index') }}" class="flex flex-col gap-4 mb-4">
                <!-- Wyszukiwanie po treści w nazwie -->
                <div>
                    <label for="search"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('messages.search_in_name') }}:</label>
                    <input type="text" name="search" id="search" value="{{ request('search') }}"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                </div>

                <!-- Filtr według statusu -->
                <div>
                    <label for="status"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('messages.status') }}:</label>
                    <select name="status" id="status"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="">{{ __('messages.task_all') }}</option>
                        <option value="0" {{ request('status') === '0' ? 'selected' : '' }}>
                            {{ __('messages.task_open') }}</option>
                        <option value="1" {{ request('status') === '1' ? 'selected' : '' }}>
                            {{ __('messages.task_closed') }}</option>
                    </select>
                </div>

                <!-- Filtr według dat -->
                <div class="flex gap-4 items-end">
                    <div>
                        <label for="from_date"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('messages.date_from') }}:</label>
                        <input type="date" name="from_date" id="from_date" value="{{ request('from_date') }}"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </div>
                    <div>
                        <label for="to_date"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('messages.date_to') }}:</label>
                        <input type="date" name="to_date" id="to_date" value="{{ request('to_date') }}"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </div>
                    <!-- Przycisk wyszukiwania -->
                    <div class="">
                        <button type="submit" class="px-4 py-2 text-white bg-blue-600 rounded-md">
                            {{ __('buttons.button_search') }}
                        </button>
                    </div>
                </div>
            </form>
        </div>
        <div class="w-2/5">
            <hr class="h-px my-6 bg-gray-200 border-0 dark:bg-gray-700">
        </div>
        <div class="w-2/5">
            <form method="POST" action="{{ route('tasks.store') }}" class="mx-auto">
                @csrf
                <div class="flex items-center w-full mb-3">
                    <input name="title" type="text" id="base-input" value=""
                        placeholder="{{ __('messages.task') }}"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <button type="submit"
                        class="ml-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        {{ __('buttons.button_add') }}
                    </button>
                </div>
            </form>
        </div>
    </div>

    <div class="flex justify-center flex-col py-4">
        <h2 class="text-2xl font-bold text-center">{{ __('messages.tasks_list') }}</h2>
        <div class="flex justify-center mt-6">
            <table class="text text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            {{ __('messages.table_no') }}
                        </th>
                        <th scope="col" class="px-6 py-3">
                            <div class="flex items-center">
                                {{ __('messages.table_name') }}
                                <a
                                    href="{{ route('tasks.index', array_merge(request()->query(), ['sort' => 'title', 'order' => request('order') === 'asc' ? 'desc' : 'asc'])) }}">
                                    <svg class="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                    </svg>
                                </a>
                            </div>
                        </th>
                        <th scope="col" class="px-6 py-3">
                            {{ __('messages.table_status') }}
                        </th>
                        <th scope="col" class="px-6 py-3">
                            <div class="flex items-center">
                                {{ __('messages.table_date_created') }}
                                <a
                                    href="{{ route('tasks.index', array_merge(request()->query(), ['sort' => 'created_at', 'order' => request('order') === 'asc' ? 'desc' : 'asc'])) }}">
                                    <svg class="w-3 h-3 ms-1.5 aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                    </svg>
                                </a>
                            </div>
                        </th>
                        <th scope="col" class="px-6 py-3">
                            {{ __('messages.table_action') }}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    @forelse ($tasks as $task)
                        <tr
                            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td class="text-center">
                                {{ $tasks->firstItem() + $loop->index }}
                            </td>
                            <td class="px-6 py-4">
                                {{ $task->title }}
                            </td>
                            <td class="px-6 py-4">
                                <div class="flex items-center">
                                    @if ($task->is_completed)
                                        <div class="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div>
                                        {{ __('messages.task_closed') }}
                                    @else
                                        <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>
                                        {{ __('messages.task_open') }}
                                    @endif
                                </div>
                            </td>
                            <td class="px-6 py-4">
                                {{ $task->created_at }}
                            </td>
                            <td class="px-6 py-4">
                                <div class="flex flex-wrap">
                                    <a href="{{ route('tasks.show', $task->id) }}"
                                        class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">
                                        {{ __('buttons.button_show') }}
                                    </a>
                                    <a href="{{ route('tasks.edit', $task->id) }}"
                                        class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">
                                        {{ __('buttons.button_edit') }}
                                    </a>
                                    <form method="POST" action="{{ route('tasks.destroy', $task->id) }}">
                                        @csrf
                                        @method('DELETE')
                                        <button onclick="confirmDelete(event)" type="button"
                                            class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
                                            {{ __('buttons.button_delete') }}
                                        </button>
                                    </form>
                                </div>
                            </td>
                        </tr>
                    @empty
                        <tr>
                            <td colspan="5" class="text-center px-6 py-3">{{ __('messages.task_empty') }}</td>
                        </tr>
                    @endforelse
                </tbody>
            </table>
            </form>

        </div>
        {{-- Stronicowanie --}}
        <div class="flex justify-center mt-6">
            {{ $tasks->links() }}
        </div>

            <div class="flex justify-center mt-6">
                <div class="px-1">
                    <a href="{{ route('tasks.exportExcel') }}" 
                    class="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                        <path d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z" />
                        <path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z" />
                    </svg>   
                    {{ __('buttons.export_excel') }}
                    </a>
                </div>
                <div class="px-1">
                    <a href="{{ route('tasks.exportPdf') }}" 
                    class="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                        <path d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z" />
                        <path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z" />
                    </svg> 
                    {{ __('buttons.export_pdf') }}
                    </a>
                </div>
        </div>
        
    </div>
@endsection

@section('scripts')
    <script>
        function confirmDelete(event) {
            // Zatrzymaj domyślną akcję wysłania formularza
            event.preventDefault();
            Swal.fire({
                title: '{{ __('alerts.confirm_delete_title') }}',
                text: '{{ __('alerts.confirm_delete_text') }}',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: '{{ __('alerts.confirm_delete_confirm') }}',
                cancelButtonText: '{{ __('alerts.confirm_delete_cancel') }}'
            }).then((result) => {
                if (result.isConfirmed) {
                    // Jeśli użytkownik potwierdzi, wyślij formularz programowo
                    event.target.closest('form').submit();
                }
            });
        }

        // Wyświetlenie komunikatu o sukcesie lub błędzie
        @if (session('status'))
            Swal.fire({
                position: "center",
                title: "{{ session('status') === 'success' ? __('alerts.success_title') : __('alerts.error_title') }}",
                text: "{{ session('message') }}",
                icon: "{{ session('status') === 'success' ? 'success' : 'error' }}",
                timer: 2000,
                showConfirmButton: false
            });
        @endif
    </script>
@endsection
