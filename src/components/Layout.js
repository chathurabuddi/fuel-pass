import { SCREENS } from '../constants';
import { renderLogin } from './Login';
import { renderVerify } from './Verify';
import { renderDashboard, renderDashboardLoading } from './Dashboard';
import { fetchDetails } from '../api/fuel';
import { generateQR } from '../utils/qr';
import { updateLucideIcons } from '../utils/ui';

export function render(contentEl, state) {
    if (!contentEl) return;

    try {
        if (state.screen === SCREENS.LOGIN) {
            renderLogin(contentEl, state);
        } else if (state.screen === SCREENS.VERIFY) {
            renderVerify(contentEl, state);
        } else if (state.screen === SCREENS.DASHBOARD) {
            if (state.fuelPassData) {
                renderDashboard(contentEl, state);
                generateQR(state.fuelPassData);
            } else if (state.jwt) {
                renderDashboardLoading(contentEl);
                if (!state.loading) {
                    fetchDetails();
                }
            }
        }

        updateLucideIcons();
    } catch (err) {
        console.error('Render error:', err);
        // We can't use setError here because it might cause infinite loop if render fails
        contentEl.innerHTML = `<div class="text-accent text-sm p-4">Render failed: ${err.message}</div>`;
    }
}
