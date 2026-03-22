import { apiRequest } from './api';
import { updateState, setScreen, setError, setLoading, setJwt, setMobileNo } from '../state/state';
import { SCREENS } from '../constants';
import { toast } from '../utils/toast';

export async function handleRequestOtp(e) {
    e.preventDefault();
    let mobileNo = document.getElementById('mobileNo').value.replace(/\s+/g, '');
    
    // Validation
    if (!mobileNo) {
        setError('Mobile number is required');
        return;
    }

    if (!/^\d+$/.test(mobileNo)) {
        setError('Incorrect mobile number');
        return;
    }

    if (mobileNo.length === 9) {
        if (!mobileNo.startsWith('7')) {
            setError('Incorrect mobile number');
            return;
        }
        mobileNo = '0' + mobileNo;
    } else if (mobileNo.length === 10) {
        if (!mobileNo.startsWith('07')) {
            setError('Incorrect mobile number');
            return;
        }
    } else {
        setError('Incorrect mobile number');
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

export async function handleVerifyOtp(e, mobileNo) {
    e.preventDefault();
    const otp = document.getElementById('otp').value.replace(/\s+/g, '');
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
        const data = await apiRequest('/otp/login/consumer/verify', 'POST', {
            mobileNo,
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
