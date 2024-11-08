 /**
 * Monitors the health of livestock using RFID data.
 */
export class LivestockMonitor {
    livestockId: string;  // Unique identifier for the livestock
    RFIDData: string;     // RFID data associated with the livestock
    healthStatus: string; // Current health status of the livestock

    /**
     * Constructs a LivestockMonitor instance.
     * @param livestockId - The unique identifier for the livestock
     * @param RFIDData - The RFID data for the livestock
     * @param healthStatus - The initial health status of the livestock
     */
    constructor(livestockId: string, RFIDData: string, healthStatus: string) {
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