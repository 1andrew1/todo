import './bootstrap';

import { toggleContrast, increaseFontSize, decreaseFontSize, resetFontSize } from './accessibility';

// Aby funkcje były globalnie dostępne w przeglądarce:
window.toggleContrast = toggleContrast;
window.increaseFontSize = increaseFontSize;
window.decreaseFontSize = decreaseFontSize;
window.resetFontSize = resetFontSize;