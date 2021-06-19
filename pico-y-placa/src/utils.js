import moment from 'moment'
import config from './Config'

export const CarCanGoOut = (plateNumber, date, time) => {
    // date -> weekday
    const weekDay = moment(date).format('dddd')
    const weekDayArr = config.lastDigitsPerDay[weekDay]

    // last digit of plate
    const lastDigit = parseInt(plateNumber[plateNumber.length - 1])

    // last digit indexOf() in weekday arr
    if (weekDayArr?.indexOf(lastDigit) === -1) {
        return true
    }

    // time isBetween() each hour
    const nonPermitedHours = config.nonPermitedHours
    const format = 'hh:mm A'
    for (let i = 0; i < nonPermitedHours.length; i++) {
        const startHour = moment(nonPermitedHours[i].start, format)
        const endHour =  moment(nonPermitedHours[i].end, format)
        const res = moment(time, format).isBetween(startHour, endHour, undefined, [])
        if (res) {
            return false
        }
    }
    return true
}