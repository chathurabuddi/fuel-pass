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

export function sanitize(str) {
    if (typeof str !== 'string') return str;
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return str.replace(/[&<>"']/g, function(m) { return map[m]; });
}

/**
 * Simple HTML template tag for creating sanitized HTML strings.
 * It automatically sanitizes string values but allows nested `html` calls.
 */
export function html(strings, ...values) {
    const result = strings.reduce((acc, str, i) => {
        const val = values[i - 1];
        let escaped = val;
        
        if (val && typeof val === 'object' && val._isSafe) {
            // Value is from another html`` call or marked safe, it's already safe.
            escaped = val.toString();
        } else if (typeof val === 'string') {
            // Raw string values are sanitized.
            escaped = sanitize(val);
        } else if (val === undefined || val === null) {
            escaped = '';
        }
        // Numbers and other types are just stringified during addition.

        return acc + escaped + str;
    });

    return {
        _isSafe: true,
        toString: () => result
    };
}

/**
 * Manually marks a string as safe to prevent auto-sanitization by `html`.
 */
export function safe(str) {
    return {
        _isSafe: true,
        toString: () => str
    };
}

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
