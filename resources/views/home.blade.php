@extends('layouts.app')

@section('title', 'Home')

@section('content')
<div class="text-center py-8">
    <h1 class="text-3xl font-bold">{{ __('messages.home_welcome') }} {{ config('app.app_name_full') }}</h1>
    <p class="text-gray-600 mt-4">{{ __('messages.home_info') }}</p>
</div>
@endsection
