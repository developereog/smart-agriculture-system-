"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CropMonitor_1 = require("../src/CropMonitor");
test('CropMonitor should check crop status', () => {
    const cropMonitor = new CropMonitor_1.CropMonitor("Crop-1");
    cropMonitor.checkCropStatus(); // Expected output: Checking crop health based on sensor data...
});
