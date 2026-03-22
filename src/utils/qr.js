import * as QRCode from 'qrcode';

export async function generateQR(fuelPassData) {
    const canvas = document.getElementById('qr-canvas');
    if (canvas && fuelPassData) {
        const qrText = `${fuelPassData.itemNo} | ${fuelPassData.qrCodeNo}`;
        await QRCode.toCanvas(canvas, qrText, {
            width: 200,
            margin: 0,
            color: {
                dark: '#000000',
                light: '#ffffff'
            }
        });
    }
}

export function downloadQR(fuelPassData) {
    const canvas = document.getElementById('qr-canvas');
    if (canvas && fuelPassData) {
        const link = document.createElement('a');
        link.download = `fuel-pass-${fuelPassData.itemNo}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
    }
}
