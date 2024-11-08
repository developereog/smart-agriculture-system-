"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Drone = void 0;
/**
* Represents a drone used for capturing images for crop monitoring.
*/
class Drone {
    /**
     * Constructs a Drone instance.
     * @param droneId - The unique identifier for the drone
     */
    constructor(droneId) {
        this.droneId = droneId;
        this.imageData = '';
    }
    /**
     * Captures an image and stores the data.
     */
    captureImage() {
        this.imageData = 'drone_image_data'; // Simulate capturing an image
        console.log(`Drone ${this.droneId} captured an image.`);
    }
}
exports.Drone = Drone;
