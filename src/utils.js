import moment from 'moment'
import Plate from './Plate'
import { config, dateFormat, timeFormat } from './Config'

export const carCanGoOut = (plateNumber, date, time) => {
    const plate = new Plate(plateNumber)
    const _date = moment(date, dateFormat, true)
    const _time = moment(time, timeFormat, true)
    if (!plate.validatePlateNumber()) {
        return false
    }
    if (!_date.isValid()) {
        return false
    }
    if (!_time.isValid()) {
        return false
    }

    const weekDay = _date.format('dddd')
    const weekDayPlates = config.lastDigitsPerDay[weekDay]

    const lastDigit = parseInt(plateNumber[plateNumber.length - 1])
    if (!weekDayPlates || !weekDayPlates.includes(lastDigit)) {
        return true
    }

    const nonPermitedHours = config.nonPermitedHours
    for (let i = 0; i < nonPermitedHours.length; i++) {
        const startHour = moment(nonPermitedHours[i].start, timeFormat)
        const endHour =  moment(nonPermitedHours[i].end, timeFormat)
        const isBetween = _time.isBetween(startHour, endHour, undefined, [])
        if (isBetween) {
            return false
        }
    }
    return true
}