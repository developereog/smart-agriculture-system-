"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IrrigationSystem = void 0;
/**
 * Manages the irrigation system for a specific zone.
 */
class IrrigationSystem {
    /**
     * Constructs an IrrigationSystem instance.
     * @param zoneId - The unique identifier for the irrigation zone
     * @param moistureLevel - The initial moisture level of the zone
     */
    constructor(zoneId, moistureLevel) {
        this.zoneId = zoneId;
        this.moistureLevel = moistureLevel;
    }
    /**
     * Adjusts the water flow based on current moisture levels and weather forecasts.
     * @param weatherService - The weather service providing forecasts
     */
    adjustWaterFlow(weatherService) {
        const forecast = weatherService.getForecast();
        if (this.moistureLevel < 30 && forecast !== "Rain expected in 24 hours") {
            console.log(`Increasing water flow in zone ${this.zoneId}`);
        }
        else {
            console.log(`No irrigation required due to moisture level or upcoming rain.`);
        }
    }
}
exports.IrrigationSystem = IrrigationSystem;
