import moment from 'moment'
import { config, dateFormat, timeFormat } from './Config'

export const carCanGoOut = (plateNumber, date, time) => {
    const weekDay = moment(date, dateFormat).format('dddd')
    const weekDayArr = config.lastDigitsPerDay[weekDay]

    const lastDigit = parseInt(plateNumber[plateNumber.length - 1])
    if (weekDayArr?.indexOf(lastDigit) === -1) {
        return true
    }

    const nonPermitedHours = config.nonPermitedHours
    for (let i = 0; i < nonPermitedHours.length; i++) {
        const startHour = moment(nonPermitedHours[i].start, timeFormat)
        const endHour =  moment(nonPermitedHours[i].end, timeFormat)
        const res = moment(time, timeFormat).isBetween(startHour, endHour, undefined, [])
        if (res) {
            return false
        }
    }
    return true
}