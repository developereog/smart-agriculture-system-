import { CropMonitor } from '../src/CropMonitor';

test('CropMonitor should check crop status', () => {
    const cropMonitor = new CropMonitor("Crop-1");
    cropMonitor.checkCropStatus(); // Expected output: Checking crop health based on sensor data...
});