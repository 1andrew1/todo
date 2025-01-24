<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response;

class SetLocale
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $locale = session('locale'); // Pobierz język z sesji
        //Log::info('Sesja z Middleware: ' . json_encode(session()->all()));
        if (session()->has('locale')) { // sprawdzamy czy sesja isntnieje jeśli nie to ustawiamy język lokalny
            app()->setLocale(session()->get('locale'));
        } else {
            // Ustaw domyślny język z config/app.php, jeśli brak języka w sesji
            $defaultLocale = config('app.locale');
            app()->setLocale($defaultLocale);
            session()->put('locale', $defaultLocale);
        }
        return $next($request);
    }
}
