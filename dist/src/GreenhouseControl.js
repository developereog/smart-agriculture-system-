"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GreenhouseControl = void 0;
/**
* Manages the climate conditions inside a greenhouse.
*/
class GreenhouseControl {
    /**
     * Constructs a GreenhouseControl instance.
     * @param greenhouseId - The unique identifier for the greenhouse
     * @param temperature - The initial temperature of the greenhouse
     * @param humidity - The initial humidity level of the greenhouse
     */
    constructor(greenhouseId, temperature, humidity) {
        this.greenhouseId = greenhouseId;
        this.temperature = temperature;
        this.humidity = humidity;
    }
    /**
     * Adjusts the climate conditions in the greenhouse.
     * @param newTemperature - The new temperature setting
     * @param newHumidity - The new humidity setting
     */
    adjustClimate(newTemperature, newHumidity) {
        this.temperature = newTemperature;
        this.humidity = newHumidity;
        console.log(`Adjusted climate in greenhouse ${this.greenhouseId}: Temperature ${this.temperature}, Humidity ${this.humidity}`);
    }
}
exports.GreenhouseControl = GreenhouseControl;
