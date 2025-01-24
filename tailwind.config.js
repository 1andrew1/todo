import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.vue',
    ],
    theme: {
        extend: {
            colors: {
                'high-contrast-bg': '#000000',   // Kolor tła w trybie wysokiego kontrastu
                'high-contrast-text': '#ffffff', // Kolor tekstu w trybie wysokiego kontrastu
                'high-contrast-button-bg': '#ffffff', // Kolor tła dla przycisków w trybie wysokiego kontrastu
                'high-contrast-button-text': '#000000', // Kolor tekstu dla przycisków w trybie wysokiego kontrastu
            },
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
};
