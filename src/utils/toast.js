import { updateLucideIcons } from './ui';

/**
 * Toast notification system for displaying error and success messages
 * consistent with the project's design system.
 */

let container = null;

function getContainer() {
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        document.body.appendChild(container);
    }
    return container;
}

export function showToast(message, type = 'error', duration = 6000) {
    const parent = getContainer();
    
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    let iconName = 'alert-circle';
    let iconColor = 'text-accent';
    
    if (type === 'success') {
        iconName = 'check-circle';
        iconColor = 'text-primary';
    } else if (type === 'info') {
        iconName = 'info';
        iconColor = 'text-secondary';
    }
    
    toast.innerHTML = `
        <div class="toast-icon ${iconColor}">
            <i data-lucide="${iconName}" class="w-5 h-5"></i>
        </div>
        <div class="toast-content flex-1 text-sm font-medium">${message}</div>
    `;
    
    parent.appendChild(toast);
    updateLucideIcons();
    
    // Auto remove
    const timer = setTimeout(() => {
        removeToast(toast);
    }, duration);
    
    // Manual remove on click
    toast.addEventListener('click', () => {
        clearTimeout(timer);
        removeToast(toast);
    });
}

function removeToast(toast) {
    if (!toast.parentNode) return;
    
    toast.classList.add('toast-exit');
    toast.addEventListener('animationend', () => {
        if (toast.parentNode) {
            toast.parentNode.removeChild(toast);
        }
    });
}

// Convenience methods
export const toast = {
    error: (msg, dur) => showToast(msg, 'error', dur),
    success: (msg, dur) => showToast(msg, 'success', dur),
    info: (msg, dur) => showToast(msg, 'info', dur)
};
