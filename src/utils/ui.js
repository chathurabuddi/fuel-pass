import {
    createIcons,
    LogIn,
    Phone,
    ShieldCheck,
    Fuel,
    QrCode,
    Wallet,
    ArrowRight,
    RefreshCw,
    RotateCw,
    PowerOff,
    CheckCircle,
    AlertCircle,
    Info,
    Calendar,
    Sun,
    Moon
} from 'lucide';

export function updateLucideIcons() {
    if (typeof createIcons === 'function') {
        createIcons({
            icons: {
                LogIn,
                Phone,
                ShieldCheck,
                Fuel,
                QrCode,
                Wallet,
                ArrowRight,
                RefreshCw,
                RotateCw,
                PowerOff,
                CheckCircle,
                AlertCircle,
                Info,
                Calendar,
                Sun,
                Moon
            }
        });
    }
}

export function toggleFlipCard() {
    const card = document.querySelector('.flip-card');
    if (card) {
        card.classList.toggle('flipped');

        // Rotate the icon for visual feedback
        const icon = document.querySelector('.flip-icon-trigger');
        if (icon) {
            icon.classList.toggle('rotate-180');
        }
    }
}
