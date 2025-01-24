
// Ustaw tryb high-contrast podczas ładowania strony
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('contrast-mode') === 'high-contrast') {
        document.documentElement.classList.add('high-contrast');
    }
});


// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark')
}

var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function () {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

        // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }

});

function toggleContrast() {
    const htmlElement = document.documentElement; // Pobierz <html>
    if (localStorage.getItem('contrast-mode') === 'high-contrast') {
        htmlElement.classList.remove('high-contrast');
        localStorage.setItem('contrast-mode', 'normal');
    } else {
        htmlElement.classList.add('high-contrast');
        localStorage.setItem('contrast-mode', 'high-contrast');
    }
}

function increaseFontSize() {
    const htmlElement = document.documentElement;
    const currentFontSize = parseInt(getComputedStyle(htmlElement).fontSize);
    const newFontSize = Math.min(currentFontSize + 2, 32); // Maksymalny rozmiar to 32px
    htmlElement.style.fontSize = `${newFontSize}px`;
    localStorage.setItem('font-size', newFontSize); // Zapisz w LocalStorage
}

function decreaseFontSize() {
    const htmlElement = document.documentElement;
    const currentFontSize = parseInt(getComputedStyle(htmlElement).fontSize);
    const newFontSize = Math.max(currentFontSize - 2, 12); // Minimalny rozmiar to 12px
    htmlElement.style.fontSize = `${newFontSize}px`;
    localStorage.setItem('font-size', newFontSize); // Zapisz w LocalStorage
}

function resetFontSize() {
    const htmlElement = document.documentElement;
    const defaultFontSize = 16; // Domyślny rozmiar czcionki
    htmlElement.style.fontSize = `${defaultFontSize}px`;
    localStorage.setItem('font-size', defaultFontSize); // Zapisz w LocalStorage
}

document.addEventListener('DOMContentLoaded', () => {
    const savedFontSize = localStorage.getItem('font-size');
    if (savedFontSize) {
        document.documentElement.style.fontSize = `${savedFontSize}px`;
    }
});

export { toggleContrast, increaseFontSize, decreaseFontSize, resetFontSize };
