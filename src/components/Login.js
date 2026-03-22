import { handleRequestOtp } from '../api/auth';
import { clearStoredMobileIfModified } from '../state/state';
import { html } from '../utils/ui';

export function renderLogin(contentEl, state) {
    contentEl.innerHTML = html`
        <div class="card animate-fade-in">
            <div class="flex items-center space-x-2 mb-6">
                <i data-lucide="fuel" class="text-primary"></i>
                <h2 class="text-xl">National Fuel Pass</h2>
            </div>
            
            <form id="login-form">
                <div class="space-y-4">
                    <div>
                        <label class="block text-xs font-medium text-text-muted uppercase mb-1">Mobile Number</label>
                        <div class="relative">
                            <span class="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted">+94</span>
                            <input type="tel" id="mobileNo" class="input pl-12" placeholder="771234567" required value="${state.mobileNo}">
                        </div>
                    </div>
                    
                    <button type="submit" class="button button-primary" data-original-text="Request OTP" ${state.loading ? 'disabled' : ''}>
                        ${state.loading ? html`<div class="spinner"></div>` : html`Request OTP <i data-lucide="arrow-right" class="w-4 h-4"></i>`}
                    </button>
                </div>
            </form>
        </div>
    `;
    const form = document.getElementById('login-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const mobileInput = document.getElementById('mobileNo');
            if (mobileInput) {
                handleRequestOtp(mobileInput.value);
            }
        });
    }
    const mobileInput = document.getElementById('mobileNo');
    if (mobileInput) {
        mobileInput.addEventListener('input', (e) => {
            clearStoredMobileIfModified(e.target.value);
        });
    }
}
