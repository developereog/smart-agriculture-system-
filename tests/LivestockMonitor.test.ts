import { LivestockMonitor } from '../src/LivestockMonitor';

test('LivestockMonitor should monitor health', () => {
    const livestock = new LivestockMonitor("Livestock-1", "RFID-001", "Healthy");
    livestock.checkHealth(); // Expected output: Monitoring health for livestock Livestock-1: Healthy
});