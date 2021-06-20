import moment from 'moment'
import { config, dateFormat, timeFormat } from './Config'

export const carCanGoOut = (plateNumber, date, time) => {
    const weekDay = moment(date, dateFormat).format('dddd')
    const weekDayPlates = config.lastDigitsPerDay[weekDay]

    const lastDigit = parseInt(plateNumber[plateNumber.length - 1])
    if (!weekDayPlates || !weekDayPlates.includes(lastDigit)) {
        return true
    }

    const nonPermitedHours = config.nonPermitedHours
    for (let i = 0; i < nonPermitedHours.length; i++) {
        const startHour = moment(nonPermitedHours[i].start, timeFormat)
        const endHour =  moment(nonPermitedHours[i].end, timeFormat)
        const isBetween = moment(time, timeFormat).isBetween(startHour, endHour, undefined, [])
        if (isBetween) {
            return false
        }
    }
    return true
}