import { handleVerifyOtp } from '../api/auth';
import { html } from '../utils/ui';
import { formatMobileNo } from '../utils/validation';

export function renderVerify(contentEl, state) {
    contentEl.innerHTML = html`
        <div class="card animate-fade-in">
            <div class="flex items-center space-x-2 mb-6">
                <i data-lucide="shield-check" class="text-primary"></i>
                <h2 class="text-xl">Verify OTP</h2>
            </div>
            <p class="mb-6">We've sent a 6-digit code to <strong>${formatMobileNo(state.mobileNo)}</strong>.</p>
            
            <form id="verify-form">
                <div class="space-y-4">
                    <div>
                        <label class="block text-xs font-medium text-text-muted uppercase mb-1">Enter Code</label>
                        <input type="text" id="otp" class="input text-center tracking-widest font-mono text-lg" placeholder="000000" maxlength="6" required autofocus>
                    </div>
                    
                    <button type="submit" class="button button-primary" data-original-text="Verify & Login" ${state.loading ? 'disabled' : ''}>
                         ${state.loading ? html`<div class="spinner"></div>` : html`Verify & Login <i data-lucide="arrow-right" class="w-4 h-4"></i>`}
                    </button>
                    
                    <button type="button" class="button button-secondary text-sm" onclick="location.reload()">
                        <i data-lucide="refresh-cw" class="w-3 h-3"></i>
                        Resend Code
                    </button>
                </div>
            </form>
        </div>
    `;
    const form = document.getElementById('verify-form');
    if (form) {
        form.addEventListener('submit', (e) => handleVerifyOtp(e, state.mobileNo));
    }
}
