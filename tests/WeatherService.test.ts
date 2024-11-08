import { WeatherService } from '../src/WeatherService';

test('WeatherService should return forecast', () => {
    const weatherService = new WeatherService();
    const forecast = weatherService.getForecast();
    expect(forecast).toBe("Sunny with no rain expected");
});