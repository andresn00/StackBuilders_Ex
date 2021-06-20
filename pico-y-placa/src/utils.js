import moment from 'moment'
import { config, dateFormat, timeFormat } from './Config'

export const CarCanGoOut = (plateNumber, date, time) => {
    // date -> weekday
    console.log('dateUtils', date);
    const weekDay = moment(date, dateFormat).format('dddd')
    console.log('weekDay', weekDay);
    const weekDayArr = config.lastDigitsPerDay[weekDay]

    // last digit of plate
    const lastDigit = parseInt(plateNumber[plateNumber.length - 1])

    // last digit indexOf() in weekday arr
    if (weekDayArr?.indexOf(lastDigit) === -1) {
        return true
    }

    // time isBetween() each hour
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