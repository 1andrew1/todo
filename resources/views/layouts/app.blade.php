<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>@yield('title', 'TODO')</title> <!-- Możliwość zmiany tytułu na podstronach -->
    <script>
        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
        if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark')
        }
    </script>
    <link href="https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.css"  rel="stylesheet" />
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="dark:bg-black dark:text-white">
    <!-- Languages -->
    @include('partials.languages')

    <!-- Menu -->
    @include('partials.menu') <!-- Menu w osobnym pliku -->

    <!-- Główna treść strony -->
    <main class="container mx-auto py-4">
        @yield('content') <!-- Miejsce na zawartość każdej podstrony -->
    </main>

    <!-- Footer -->
    @include('partials.footer') <!-- Footer w osobnym pliku -->

    <script src="https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.js"></script>

    <!-- Sekcja na dodatkowe skrypty -->
    @yield('scripts')
</body>
</html>