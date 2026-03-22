import { SCREENS } from '../constants';
import { showToast } from '../utils/toast';

const _state = {
    screen: SCREENS.LOGIN,
    mobileNo: (localStorage.getItem('fuel_pass_mobile') || '').replace(/^0/, ''),
    jwt: localStorage.getItem('fuel_pass_jwt') || '',
    theme: localStorage.getItem('fuel_pass_theme') || 'dark',
    fuelPassData: null,
    loading: false,
    error: null,
    onStateChange: null // This will be set in main.js to trigger a re-render
};

/**
 * State Proxy to prevent direct mutations from outside
 */
export const state = new Proxy(_state, {
    get(target, prop) {
        return target[prop];
    },
    set(target, prop, value) {
        if (prop === 'onStateChange' || prop === 'screen' || prop === 'error' || prop === 'loading' || prop === 'jwt' || prop === 'mobileNo' || prop === 'fuelPassData' || prop === 'theme') {
            // Some legacy code might still try to set these directly.
            // Let's gradually move them to actions.
            // For now, allow but warn if we want to be strict.
            // But actually, we want to enforce updateState.
            if (prop === 'onStateChange') {
                target[prop] = value;
                return true;
            }
        }
        console.error(`Direct mutation of state.${prop} is not allowed. Use dedicated setter functions.`);
        return false;
    }
});

export function updateState(updates) {
    Object.assign(_state, updates);
    if (_state.onStateChange) {
        _state.onStateChange();
    }
}

export function setScreen(screen) {
    updateState({ screen, error: null });
}

export function setError(error) {
    if (error) {
        showToast(error, 'error');
    }
    updateState({ error });
}

export function setLoading(loading) {
    updateState({ loading });
}

export function setJwt(jwt) {
    updateState({ jwt });
    if (jwt) {
        localStorage.setItem('fuel_pass_jwt', jwt);
    } else {
        localStorage.removeItem('fuel_pass_jwt');
    }
}

export function setMobileNo(mobileNo) {
    const stripped = mobileNo.replace(/^0/, '');
    updateState({ mobileNo: stripped });
    localStorage.setItem('fuel_pass_mobile', stripped);
}

export function clearStoredMobileIfModified(newMobileNo) {
    const stored = localStorage.getItem('fuel_pass_mobile');
    if (stored && newMobileNo !== stored) {
        localStorage.removeItem('fuel_pass_mobile');
    }
    updateState({ mobileNo: newMobileNo });
}

export function setFuelPassData(fuelPassData) {
    updateState({ fuelPassData });
}

export function toggleTheme() {
    const newTheme = _state.theme === 'light' ? 'dark' : 'light';
    updateState({ theme: newTheme });
    localStorage.setItem('fuel_pass_theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
}

export function logout() {
    updateState({
        jwt: '',
        fuelPassData: null,
        screen: SCREENS.LOGIN,
        error: null
    });
    localStorage.removeItem('fuel_pass_jwt');
}
