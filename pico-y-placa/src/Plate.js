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
        if (this.invalidFirstLetters.indexOf(parseInt(this.plateNumber[0])) !== -1) {
            return false
        }
        if (this.regEx.test(this.plateNumber)) {
            return true
        }
        return false
    }
}