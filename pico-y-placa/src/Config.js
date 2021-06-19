import moment from 'moment'

const format = 'hh:mm A'

export const config = {
    nonPermitedHours: [
        {
            start: moment('07:00 am', format),
            end: moment('09:30 am', format)
        },
        {
            start: moment('04:00 pm', format),
            end: moment('07:30 pm', format)
        }
    ],
    lastDigitsPerDay: {
        monday: [1, 2],
        tuesday: [3, 4],
        wednesday: [5, 6],
        thursday: [7, 8],
        friday: [9, 0]
    }
}