import { IrrigationSystem } from '../src/IrrigationSystem';
import { WeatherService } from '../src/WeatherService';

test('IrrigationSystem should adjust water flow', () => {
    const weatherService = new WeatherService();
    const irrigation = new IrrigationSystem("Zone-1", 25);
    irrigation.adjustWaterFlow(weatherService); // Expected output based on conditions
});