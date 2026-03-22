/**
 * Validates a Sri Lankan mobile number.
 * Supports:
 * - 9 digits (e.g. 771234567)
 * - 10 digits starting with 0 (e.g. 0771234567)
 * 
 * @param {string} mobileNo 
 * @returns {string|null} The normalized mobile number (starting with 0) or null if invalid.
 */
export function validateMobileNo(mobileNo) {
    const stripped = mobileNo.replace(/\s+/g, '');
    
    if (!/^\d+$/.test(stripped)) {
        return null;
    }

    if (stripped.length === 9) {
        if (!stripped.startsWith('7')) {
            return null;
        }
        return '0' + stripped;
    } else if (stripped.length === 10) {
        if (!stripped.startsWith('07')) {
            return null;
        }
        return stripped;
    }
    
    return null;
}

/**
 * Formats a mobile number for display.
 * 
 * @param {string} mobileNo 
 * @returns {string}
 */
export function formatMobileNo(mobileNo) {
    const normalized = mobileNo.replace(/^0/, '');
    if (normalized.length === 9) {
        return `+94 ${normalized.substring(0, 2)} ${normalized.substring(2, 5)} ${normalized.substring(5)}`;
    }
    return mobileNo;
}
