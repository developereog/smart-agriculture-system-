"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FarmEquipment = void 0;
/**
* Represents farm equipment used for various agricultural tasks.
*/
class FarmEquipment {
    /**
     * Constructs a FarmEquipment instance.
     * @param equipmentId - The unique identifier for the equipment
     * @param operationType - The type of operation the equipment performs
     */
    constructor(equipmentId, operationType) {
        this.equipmentId = equipmentId;
        this.operationType = operationType;
        this.maintenanceDue = false; // Initialize with no maintenance due
    }
    /**
     * Operates the equipment if maintenance is not due.
     */
    operate() {
        if (!this.maintenanceDue) {
            console.log(`Operating ${this.operationType} with equipment ${this.equipmentId}.`);
        }
        else {
            console.log(`Maintenance required for equipment ${this.equipmentId}. Operation halted.`);
        }
    }
    /**
     * Schedules maintenance for the equipment.
     */
    scheduleMaintenance() {
        this.maintenanceDue = true;
        console.log(`Maintenance scheduled for equipment ${this.equipmentId}.`);
    }
    /**
     * Performs maintenance on the equipment.
     */
    performMaintenance() {
        this.maintenanceDue = false;
        console.log(`Maintenance completed for equipment ${this.equipmentId}.`);
    }
}
exports.FarmEquipment = FarmEquipment;
