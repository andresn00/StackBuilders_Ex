export const timeFormat = 'hh:mm A'
export const dateFormat = 'DD-MM-YYYY'

export const config = {
    nonPermitedHours: [
        {
            start: '07:00 am',
            end: '09:30 am'
        },
        {
            start: '04:00 pm',
            end: '07:30 pm'
        }
    ],
    lastDigitsPerDay: {
        Monday: [1, 2],
        Tuesday: [3, 4],
        Wednesday: [5, 6],
        Thursday: [7, 8],
        Friday: [9, 0]
    }
}