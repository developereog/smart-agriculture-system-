import { Farmer } from '../src/Farmer';

test('Farmer should monitor crops', () => {
    const farmer = new Farmer("F123", "John Doe", "Farm Location 1");
    farmer.monitorCrops(); // Expect this to log a message
});