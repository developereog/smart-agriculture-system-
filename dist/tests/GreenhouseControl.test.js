"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GreenhouseControl_1 = require("../src/GreenhouseControl");
test('GreenhouseControl should adjust climate', () => {
    const greenhouse = new GreenhouseControl_1.GreenhouseControl("Greenhouse-1", 25, 60);
    greenhouse.adjustClimate(22, 55);
    expect(greenhouse.temperature).toBe(22);
    expect(greenhouse.humidity).toBe(55);
});
