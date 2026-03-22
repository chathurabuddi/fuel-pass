import { apiRequest } from './api';
import { setScreen, setError, setLoading, setJwt, setMobileNo } from '../state/state';
import { SCREENS } from '../constants';
import { toast } from '../utils/toast';
import { validateMobileNo } from '../utils/validation';

export async function handleRequestOtp(mobileNoRaw) {
    // Validation
    if (!mobileNoRaw) {
        setError('Mobile number is required');
        return;
    }

    const mobileNo = validateMobileNo(mobileNoRaw);
    if (!mobileNo) {
        setError('Incorrect mobile number. Should be in format 771234567 or 0771234567');
        return;
    }

    setLoading(true);
    setError(null);

    try {
        await apiRequest('/otp/login/consumer', 'POST', { mobileNo, isQr: false });
        setMobileNo(mobileNo);
        setScreen(SCREENS.VERIFY);
        toast.success('OTP sent successfully');
    } catch (err) {
        setError(err.message);
    } finally {
        setLoading(false);
    }
}

export async function handleVerifyOtp(otpRaw, mobileNo) {
    const otp = otpRaw.replace(/\s+/g, '');
    if (!otp) {
        setError('OTP is required');
        return;
    }

    if (!/^\d+$/.test(otp)) {
        setError('OTP should only contain digits');
        return;
    }

    if (otp.length !== 6) {
        setError('Please enter the 6-digit OTP');
        return;
    }

    setLoading(true);
    setError(null);

    try {
        const fullMobileNo = mobileNo.startsWith('0') ? mobileNo : '0' + mobileNo;
        const data = await apiRequest('/otp/login/consumer/verify', 'POST', {
            mobileNo: fullMobileNo,
            otp
        });

        if (data.jwt) {
            setJwt(data.jwt);
            setScreen(SCREENS.DASHBOARD);
        } else {
            throw new Error('Verification failed: No token received');
        }
    } catch (err) {
        setError(err.message);
    } finally {
        setLoading(false);
    }
}
