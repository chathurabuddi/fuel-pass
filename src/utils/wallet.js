import { downloadQR } from './qr';
import { toast } from './toast';

export function addToWallet(platform, fuelPassData) {
    if (platform === 'apple') {
        toast.info('This would typically call a backend to generate a signed .pkpass file for Apple Wallet. For this demo, we\'ll download the QR code image.', 6000);
        downloadQR(fuelPassData);
    } else {
        toast.info('This would typically use the Google Wallet API to save a Pass object. For this demo, we\'ll download the QR code image.', 6000);
        downloadQR(fuelPassData);
    }
}
