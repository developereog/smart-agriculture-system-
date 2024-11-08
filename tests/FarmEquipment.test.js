"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FarmEquipment_1 = require("../src/FarmEquipment");
test('FarmEquipment should operate if maintenance is not due', () => {
    const equipment = new FarmEquipment_1.FarmEquipment("Equip-1", "Plowing");
    equipment.operate(); // Expected output: Operating Plowing with equipment Equip-1.
});
test('FarmEquipment should not operate if maintenance is due', () => {
    const equipment = new FarmEquipment_1.FarmEquipment("Equip-2", "Harvesting");
    equipment.scheduleMaintenance();
    equipment.operate(); // Expected output: Maintenance required for equipment Equip-2. Operation halted.
});
