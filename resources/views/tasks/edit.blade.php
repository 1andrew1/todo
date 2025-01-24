@extends('layouts.app')

@section('title', 'Edytuj zadanie')

@section('content')
<div class="max-w-md mx-auto py-8">
    <h2 class="text-2xl font-bold mb-4">{{ __('messages.task_edit') }}</h2>
    <form method="POST" action="{{ route('tasks.update', $task->id) }}">
        @csrf
        @method('PUT')

        <div class="mb-4">
            <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('messages.name') }}:</label>
            <input type="text" name="title" id="base-input" value="{{ $task->title }}" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        </div>

        <div class="mb-4">
            <label for="is_completed" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('messages.status') }}:</label>
            <select name="is_completed" id="is_completed" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="0" {{ !$task->is_completed ? 'selected' : '' }}>{{ __('messages.task_open') }}</option>
                <option value="1" {{ $task->is_completed ? 'selected' : '' }}>{{ __('messages.task_closed') }}</option>
            </select>
        </div>
        <div class="flex justify-between items-center mt-6">
            <div class="text-start">
                <a href="{{ route('tasks.index') }}" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                    {{ __('buttons.button_back') }}
                </a>
            </div>
            <div class="text-end">
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 rounded-lg px-5 py-2.5">{{ __('buttons.button_save') }}</button>
            </div>
        </div>
    </form>
</div>
@endsection
