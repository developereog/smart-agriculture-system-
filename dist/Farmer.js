"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Farmer = void 0;
/**
* Represents a farmer who manages crops and livestock on a farm.
*/
class Farmer {
    /**
     * Constructs a Farmer instance.
     * @param farmerId - The unique identifier for the farmer
     * @param name - The name of the farmer
     * @param farmLocation - The location of the farm
     */
    constructor(farmerId, name, farmLocation) {
        this.crops = []; // Array to hold crop monitors
        this.livestock = []; // Array to hold livestock monitors
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
    adjustIrrigation(irrigationSystem, weatherService) {
        irrigationSystem.adjustWaterFlow(weatherService);
    }
}
exports.Farmer = Farmer;
