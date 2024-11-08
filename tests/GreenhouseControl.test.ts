import { GreenhouseControl } from '../src/GreenhouseControl';

test('GreenhouseControl should adjust climate', () => {
    const greenhouse = new GreenhouseControl("Greenhouse-1", 25, 60);
    greenhouse.adjustClimate(22, 55);
    expect(greenhouse.temperature).toBe(22);
    expect(greenhouse.humidity).toBe(55);
});