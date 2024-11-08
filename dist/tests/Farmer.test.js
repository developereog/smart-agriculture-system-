"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Farmer_1 = require("../src/Farmer");
test('Farmer should monitor crops', () => {
    const farmer = new Farmer_1.Farmer("F123", "John Doe", "Farm Location 1");
    farmer.monitorCrops(); // Expect this to log a message
});
