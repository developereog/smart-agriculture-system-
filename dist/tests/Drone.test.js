"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Drone_1 = require("../src/Drone");
test('Drone should capture an image', () => {
    const drone = new Drone_1.Drone("Drone-1");
    drone.captureImage();
    expect(drone.imageData).toBe('drone_image_data');
});
