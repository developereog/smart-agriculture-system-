import { Drone } from '../src/Drone';

test('Drone should capture an image', () => {
    const drone = new Drone("Drone-1");
    drone.captureImage();
    expect(drone.imageData).toBe('drone_image_data');
});