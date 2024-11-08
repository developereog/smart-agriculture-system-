"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LivestockMonitor = void 0;
/**
* Monitors the health of livestock using RFID data.
*/
class LivestockMonitor {
    /**
     * Constructs a LivestockMonitor instance.
     * @param livestockId - The unique identifier for the livestock
     * @param RFIDData - The RFID data for the livestock
     * @param healthStatus - The initial health status of the livestock
     */
    constructor(livestockId, RFIDData, healthStatus) {
        this.livestockId = livestockId;
        this.RFIDData = RFIDData;
        this.healthStatus = healthStatus;
    }
    /**
     * Checks the health status of the livestock.
     */
    checkHealth() {
        console.log(`Monitoring health for livestock ${this.livestockId}: ${this.healthStatus}`);
    }
}
exports.LivestockMonitor = LivestockMonitor;
