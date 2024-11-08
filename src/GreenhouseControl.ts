 /**
 * Manages the climate conditions inside a greenhouse.
 */
export class GreenhouseControl {
    greenhouseId: string; // Unique identifier for the greenhouse
    temperature: number;   // Current temperature in the greenhouse
    humidity: number;      // Current humidity level in the greenhouse

    /**
     * Constructs a GreenhouseControl instance.
     * @param greenhouseId - The unique identifier for the greenhouse
     * @param temperature - The initial temperature of the greenhouse
     * @param humidity - The initial humidity level of the greenhouse
     */
    constructor(greenhouseId: string, temperature: number, humidity: number) {
        this.greenhouseId = greenhouseId;
        this.temperature = temperature;
        this.humidity = humidity;
    }

    /**
     * Adjusts the climate conditions in the greenhouse.
     * @param newTemperature - The new temperature setting
     * @param newHumidity - The new humidity setting
     */
    adjustClimate(newTemperature: number, newHumidity: number) {
        this.temperature = newTemperature;
        this.humidity = newHumidity;
        console.log(`Adjusted climate in greenhouse ${this.greenhouseId}: Temperature ${this.temperature}, Humidity ${this.humidity}`);
    }
}