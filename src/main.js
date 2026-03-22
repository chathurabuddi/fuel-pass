import { state } from './state/state';
import { render } from './components/Layout';
import { SCREENS } from './constants';

// UI Elements
const contentEl = document.getElementById('content');

// Initial start with error handling
function init() {
    try {
        // Set up the re-render trigger
        state.onStateChange = () => render(contentEl, state);

        if (state.jwt) {
            state.screen = SCREENS.DASHBOARD;
        }

        render(contentEl, state);
    } catch (err) {
        console.error('Initialization failed:', err);
        if (contentEl) {
            contentEl.innerHTML = `
                <div class="card border-accent text-center">
                    <h2 class="text-accent mb-2">Something went wrong</h2>
                    <p class="text-sm mb-4">${err.message}</p>
                    <button onclick="location.reload()" class="button button-primary">Retry</button>
                </div>
            `;
        }
    }
}

// Start once DOM is ready (though type="module" is already deferred)
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
