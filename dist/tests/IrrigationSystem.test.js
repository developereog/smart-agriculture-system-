"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IrrigationSystem_1 = require("../src/IrrigationSystem");
const WeatherService_1 = require("../src/WeatherService");
test('IrrigationSystem should adjust water flow', () => {
    const weatherService = new WeatherService_1.WeatherService();
    const irrigation = new IrrigationSystem_1.IrrigationSystem("Zone-1", 25);
    irrigation.adjustWaterFlow(weatherService); // Expected output based on conditions
});
