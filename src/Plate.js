export default class Plate {
    constructor(plateNumber = '') {
        this.plateNumber = plateNumber
    }

    regEx = /^[A-Za-z]{3}-?\d{3}\d?$/
    invalidFirstLetters = ['d', 'f', 'ñ']
    
    setPlateNumber = (plate) => {
        this.plateNumber = plate
    }

    validatePlateNumber = () => {
        if (this.invalidFirstLetters.includes(this.plateNumber[0]?.toLowerCase())) {
            return false
        }
        return this.regEx.test(this.plateNumber)
    }
}