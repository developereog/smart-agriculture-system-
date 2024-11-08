 /**
 * Represents a drone used for capturing images for crop monitoring.
 */
export class Drone {
    droneId: string;  // Unique identifier for the drone
    imageData: string; // Data captured by the drone

    /**
     * Constructs a Drone instance.
     * @param droneId - The unique identifier for the drone
     */
    constructor(droneId: string) {
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