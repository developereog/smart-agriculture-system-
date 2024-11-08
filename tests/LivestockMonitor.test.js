"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LivestockMonitor_1 = require("../src/LivestockMonitor");
test('LivestockMonitor should monitor health', () => {
    const livestock = new LivestockMonitor_1.LivestockMonitor("Livestock-1", "RFID-001", "Healthy");
    livestock.checkHealth(); // Expected output: Monitoring health for livestock Livestock-1: Healthy
});
