import Plate from "./Plate";

test('should return true for a valid plate', () => {
    const plate = new Plate('PCI-8865')
    const isValid = plate.validatePlateNumber()
    expect(isValid).toBe(true);
});

