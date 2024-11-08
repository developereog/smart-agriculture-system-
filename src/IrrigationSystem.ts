import { WeatherService } from './WeatherService';

/**
 * Manages the irrigation system for a specific zone.
 */
export class IrrigationSystem {
    zoneId: string;         // Unique identifier for the irrigation zone
    moistureLevel: number;  // Current moisture level in the soil

    /**
     * Constructs an IrrigationSystem instance.
     * @param zoneId - The unique identifier for the irrigation zone
     * @param moistureLevel - The initial moisture level of the zone
     */
    constructor(zoneId: string, moistureLevel: number) {
        this.zoneId = zoneId;
        this.moistureLevel = moistureLevel;
    }

    /**
     * Adjusts the water flow based on current moisture levels and weather forecasts.
     * @param weatherService - The weather service providing forecasts
     */
    adjustWaterFlow(weatherService: WeatherService) {
        const forecast = weatherService.getForecast();
        if (this.moistureLevel < 30 && forecast !== "Rain expected in 24 hours") {
            console.log(`Increasing water flow in zone ${this.zoneId}`);
        } else {
            console.log(`No irrigation required due to moisture level or upcoming rain.`);
        }
    }
}