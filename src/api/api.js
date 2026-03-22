import { API_BASE, HEADERS } from '../constants';
import { state } from '../state/state';

export async function apiRequest(endpoint, method = 'GET', body = null, auth = false) {
    const headers = { ...HEADERS };
    if (auth && state.jwt) {
        headers['Authorization'] = `Bearer ${state.jwt}`;
    }

    try {
        const response = await fetch(`${API_BASE}${endpoint}`, {
            method,
            headers,
            body: body ? JSON.stringify(body) : null
        });

        if (!response.ok) {
            if (response.status === 500) {
                throw new Error('Our servers are currently experiencing issues. Please try again later.');
            }
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.msg || `API Error: ${response.status}`);
        }

        return await response.json();
    } catch (err) {
        console.error(`Request failed: ${endpoint}`, err);
        throw err;
    }
}
