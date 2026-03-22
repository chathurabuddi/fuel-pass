export const API_BASE = window.location.origin.includes('localhost') || window.location.origin.includes('127.0.0.1') ? '/api' : 'https://fuelpass.gov.lk/api';

export const HEADERS = {
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
    'Content-Type': 'application/json'
};

export const SCREENS = {
    LOGIN: 'LOGIN',
    VERIFY: 'VERIFY',
    DASHBOARD: 'DASHBOARD'
};
