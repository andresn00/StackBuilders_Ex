import Plate from "./Plate";

test('should return true for a valid plate', () => {
    const plate = new Plate('PCI-8865')
    const isValid = plate.validatePlateNumber()
    expect(isValid).toBe(true);
});

test('should return false for an invalid plate', () => {
    const plate = new Plate('P-8865')
    const isValid = plate.validatePlateNumber()
    expect(isValid).toBe(false);
});

test('should return true for a valid plate without hyphen', () => {
    const plate = new Plate('PCI8865')
    const isValid = plate.validatePlateNumber()
    expect(isValid).toBe(true);
});