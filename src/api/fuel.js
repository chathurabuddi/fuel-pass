import { apiRequest } from './api';
import { setError, setLoading, setFuelPassData, logout } from '../state/state';

export async function fetchDetails() {
    setLoading(true);
    setError(null);

    try {
        const response = await apiRequest('/consumer-manager/consumer-items', 'GET', null, true);
        if (response.data && response.data.length > 0) {
            setFuelPassData(response.data[0]);
        } else {
            throw new Error('No fuel pass found for this account');
        }
    } catch (err) {
        logout();
        setError(err.message);
    } finally {
        setLoading(false);
    }
}
