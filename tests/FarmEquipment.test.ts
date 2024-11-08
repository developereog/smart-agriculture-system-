import { FarmEquipment } from '../src/FarmEquipment';

test('FarmEquipment should operate if maintenance is not due', () => {
    const equipment = new FarmEquipment("Equip-1", "Plowing");
    equipment.operate(); // Expected output: Operating Plowing with equipment Equip-1.
});

test('FarmEquipment should not operate if maintenance is due', () => {
    const equipment = new FarmEquipment("Equip-2", "Harvesting");
    equipment.scheduleMaintenance();
    equipment.operate(); // Expected output: Maintenance required for equipment Equip-2. Operation halted.
});