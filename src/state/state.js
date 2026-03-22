import { SCREENS } from '../constants';
import { showToast } from '../utils/toast';

export const state = {
    screen: SCREENS.LOGIN,
    mobileNo: (localStorage.getItem('fuel_pass_mobile') || '').replace(/^0/, ''),
    jwt: localStorage.getItem('fuel_pass_jwt') || '',
    fuelPassData: null,
    loading: false,
    error: null,
    onStateChange: null // This will be set in main.js to trigger a re-render
};

export function updateState(updates) {
    Object.assign(state, updates);
    if (state.onStateChange) {
        state.onStateChange();
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
    state.mobileNo = newMobileNo;
}

export function setFuelPassData(fuelPassData) {
    updateState({ fuelPassData });
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
