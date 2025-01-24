<div class="flex justify-center py-1">
    <div class="inline-flex rounded-md shadow-sm" role="group">
        <a data-tooltip-target="tooltip-bottom-lang-en" data-tooltip-placement="bottom" href="{{ route('lang', 'en') }}"
            class="{{ session()->get('locale') === 'en' ? 'bg-gray-100 font-semibold' : 'bg-white font-medium' }} px-4 py-2 text-sm text-gray-900 border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">EN</a>
            <div id="tooltip-bottom-lang-en" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                {{ __('accessibility.lang_en_tooltip') }}
            <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
        <a data-tooltip-target="tooltip-bottom-lang-pl" data-tooltip-placement="bottom" href="{{ route('lang', 'pl') }}"
            class="{{ session()->get('locale') === 'pl' ? 'bg-gray-100 font-semibold' : 'bg-white font-medium' }} px-4 py-2 text-sm text-gray-900 border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">PL</a>
            <div id="tooltip-bottom-lang-pl" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                {{ __('accessibility.lang_pl_tooltip') }}
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
    </div>

    <div class="inline-flex rounded-md shadow-sm pl-1" role="group">
        <button data-tooltip-target="tooltip-bottom-increase-font" data-tooltip-placement="bottom" onclick="increaseFontSize()"
            class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
            {{ __('accessibility.increase_font') }}
        </button>
        <div id="tooltip-bottom-increase-font" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            {{ __('accessibility.increase_font_tooltip') }}
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button data-tooltip-target="tooltip-bottom-decrease-font" data-tooltip-placement="bottom" onclick="decreaseFontSize()"
            class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
            {{ __('accessibility.decrease_font') }}
        </button>
        <div id="tooltip-bottom-decrease-font" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            {{ __('accessibility.decrease_font_tooltip') }}
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button data-tooltip-target="tooltip-bottom-reset-font" data-tooltip-placement="bottom" onclick="resetFontSize()"
            class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
            {{ __('accessibility.reset_font') }}
        </button>
        <div id="tooltip-bottom-reset-font" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            {{ __('accessibility.reset_font_tooltip') }}
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
    </div>

    <div class="inline-flex rounded-md shadow-sm pl-1" role="group">
        <button data-tooltip-target="tooltip-bottom-contrast" data-tooltip-placement="bottom" onclick="toggleContrast()"
            class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
            {{ __('accessibility.toggle_contrast') }}
        </button>
        <div id="tooltip-bottom-contrast" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            {{ __('accessibility.toggle_contrast_tooltip') }}
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
    </div>

    <div class="inline-flex rounded-md shadow-sm pl-1" role="group">
        <button data-tooltip-target="tooltip-bottom-dark_mode" data-tooltip-placement="bottom" id="theme-toggle" type="button" 
            class="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-900 dark:focus:text-white">
            <svg id="theme-toggle-dark-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
            <svg id="theme-toggle-light-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
        </button>
        <div id="tooltip-bottom-dark_mode" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            {{ __('accessibility.toggle_dark_mode') }}
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
    </div>
    
</div>
