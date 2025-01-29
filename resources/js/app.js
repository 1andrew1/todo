import './bootstrap';

import { toggleContrast, increaseFontSize, decreaseFontSize, resetFontSize } from './accessibility';

// To make functions globally available in the browser:
window.toggleContrast = toggleContrast;
window.increaseFontSize = increaseFontSize;
window.decreaseFontSize = decreaseFontSize;
window.resetFontSize = resetFontSize;