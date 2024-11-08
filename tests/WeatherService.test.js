"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WeatherService_1 = require("../src/WeatherService");
test('WeatherService should return forecast', () => {
    const weatherService = new WeatherService_1.WeatherService();
    const forecast = weatherService.getForecast();
    expect(forecast).toBe("Sunny with no rain expected");
});
