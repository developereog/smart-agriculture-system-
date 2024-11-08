import { CropMonitor } from "./CropMonitor";
import { IrrigationSystem } from "./IrrigationSystem";
import { LivestockMonitor } from "./LivestockMonitor";
import { WeatherService } from "./WeatherService";

 /**
 * Represents a farmer who manages crops and livestock on a farm.
 */
export class Farmer {
    farmerId: string;  // Unique identifier for the farmer
    name: string;      // Name of the farmer
    farmLocation: string; // Location of the farm
    crops: CropMonitor[] = [];  // Array to hold crop monitors
    livestock: LivestockMonitor[] = [];  // Array to hold livestock monitors

    /**
     * Constructs a Farmer instance.
     * @param farmerId - The unique identifier for the farmer
     * @param name - The name of the farmer
     * @param farmLocation - The location of the farm
     */
    constructor(farmerId: string, name: string, farmLocation: string) {
        this.farmerId = farmerId;
        this.name = name;
        this.farmLocation = farmLocation;
    }

    /**
     * Monitors the status of crops by checking each crop monitor.
     */
    monitorCrops() {
        this.crops.forEach(crop => crop.checkCropStatus());
    }

    /**
     * Monitors the health of livestock by checking each livestock monitor.
     */
    monitorLivestock() {
        this.livestock.forEach(animal => animal.checkHealth());
    }

    /**
     * Adjusts the irrigation system based on weather data.
     * @param irrigationSystem - The irrigation system to adjust
     * @param weatherService - The weather service providing forecasts
     */
    adjustIrrigation(irrigationSystem: IrrigationSystem, weatherService: WeatherService) {
        irrigationSystem.adjustWaterFlow(weatherService);
    }
}