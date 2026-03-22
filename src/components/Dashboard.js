import { logout } from '../state/state';
import { addToWallet } from '../utils/wallet';
import appleWalletSvg from '../assets/apple-wallet.svg?raw';
import googleWalletSvg from '../assets/google-wallet.svg?raw';

export function renderDashboardLoading(contentEl) {
    contentEl.innerHTML = `
        <div class="flex flex-col items-center justify-center space-y-4">
            <div class="spinner"></div>
            <span class="text-sm text-text-muted">Fetching your fuel pass...</span>
        </div>
    `;
}

export function renderDashboard(contentEl, state) {
    const data = state.fuelPassData;
    const quota = data && data.quota && data.quota[0] ? data.quota[0] : {
        remainingQuota: 0,
        eligibleQuota: 0,
        quotaExpire: [0,0,0],
        quotaResetDate: [0,0,0]
    };

    const quotaVal = Number(quota.remainingQuota) || 0;
    const eligibleVal = Number(quota.eligibleQuota) || 0;
    const percentage = eligibleVal > 0 ? Math.min((quotaVal / eligibleVal) * 100, 100) : 0;
    const isLow = percentage <= 20;

    contentEl.innerHTML = `
        <div class="space-y-6 animate-fade-in">
            <!-- Header Actions -->
            <div class="flex items-center justify-between px-1 py-1">
                <h1 class="text-xl font-bold tracking-tight text-left flex-1">National Fuel Pass</h1>
                <div class="flex items-center">
                    <div id="logout-btn" class="w-5 h-5 flex items-center justify-end text-text-muted hover:text-text cursor-pointer transition-all" aria-label="Sign Out">
                        <i data-lucide="power-off" class="w-5 h-5 bold-icon"></i>
                    </div>
                </div>
            </div>

            <!-- Flippable Card Container -->
            <div id="flip-card-container" class="flip-card">
                <div class="flip-card-inner">
                    <!-- Front Side: Vehicle & QR -->
                    <div id="flip-card-front" class="flip-card-front card text-center space-y-6 pt-8 pb-8 relative cursor-pointer">
                        <div>
                            <div class="text-2xl font-bold tracking-tighter">${(data && data.itemNo) || '---'}</div>
                        </div>

                        <div class="qr-container mx-auto">
                            <canvas id="qr-canvas"></canvas>
                        </div>

                        <div>
                            <div class="badge badge-success mb-2 font-mono">${(data && data.qrCodeNo) || '---'}</div>
                        </div>
                    </div>

                    <!-- Back Side: Quota Details -->
                    <div id="flip-card-back" class="flip-card-back card relative text-left pt-6 pb-6 cursor-pointer">
                        <div class="quota-grid">
                            <div class="quota-item">
                                <div class="quota-label">Remaining</div>
                                <div class="quota-value">${quotaVal.toFixed(3)} L</div>
                            </div>
                            <div class="quota-item">
                                <div class="quota-label">Eligible</div>
                                <div class="quota-value">${eligibleVal.toFixed(3)} L</div>
                            </div>
                        </div>

                        <div class="quota-progress-container">
                            <div class="quota-progress-bar ${isLow ? 'low' : ''}" style="width: ${percentage}%"></div>
                        </div>
                        <div class="flex justify-between items-center text-2xs text-text-muted mt-1 uppercase tracking-wider font-semibold">
                            <span>Usage Level</span>
                            <span>${percentage.toFixed(0)}% Left</span>
                        </div>

                        <div class="mt-2 pt-6 mb-6 flex gap-3">
                            <div class="date-indicator flex-1">
                                <div class="date-icon-container">
                                    <i data-lucide="calendar" class="w-4 h-4"></i>
                                </div>
                                <div class="date-info">
                                    <div class="text-2xs uppercase text-text-muted font-bold tracking-widest">Expires On</div>
                                    <div class="text-sm font-semibold">${Array.isArray(quota.quotaExpire) ? quota.quotaExpire.join('-') : '---'}</div>
                                </div>
                            </div>
                            
                            <div class="date-indicator flex-1">
                                <div class="date-icon-container">
                                    <i data-lucide="refresh-cw" class="w-4 h-4"></i>
                                </div>
                                <div class="date-info">
                                    <div class="text-2xs uppercase text-text-muted font-bold tracking-widest">Next Reset</div>
                                    <div class="text-sm font-semibold">${Array.isArray(quota.quotaResetDate) ? quota.quotaResetDate.join('-') : '---'}</div>
                                </div>
                            </div>
                        </div>

                        <div class="mt-auto pt-6 text-center text-xs text-text-muted">
                            Tap the card to see your QR code
                        </div>
                    </div>
                </div>
            </div>

            <!-- Everything Else (Bottom) -->
            <div class="space-y-4">
                <!-- Wallet Integration -->
                <div class="wallet-buttons">
                    <button id="apple-wallet-btn" class="wallet-badge" aria-label="Add to Apple Wallet">
                        ${appleWalletSvg}
                    </button>
                    <button id="google-wallet-btn" class="wallet-badge" aria-label="Add to Google Wallet">
                        ${googleWalletSvg}
                    </button>
                </div>
            </div>
            
            <p class="text-xs text-center text-text-muted">
                Ministry of Power & Energy • Dialog • MIT
            </p>
        </div>
    `;

    const flipCard = () => {
        const card = document.getElementById('flip-card-container');
        if (card) {
            card.classList.toggle('flipped');
            const icon = document.querySelector('.flip-icon-trigger');
            if (icon) {
                icon.classList.toggle('rotate-180');
            }
        }
    };

    document.getElementById('flip-card-front').addEventListener('click', flipCard);
    document.getElementById('flip-card-back').addEventListener('click', flipCard);
    document.getElementById('logout-btn').addEventListener('click', logout);
    document.getElementById('apple-wallet-btn').addEventListener('click', () => addToWallet('apple', data));
    document.getElementById('google-wallet-btn').addEventListener('click', () => addToWallet('google', data));
}
