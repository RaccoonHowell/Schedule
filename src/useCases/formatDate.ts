const formatDate = (date: Date) => {
    const day: any = {
        '0': 'Sunday',
        '1': 'Monday',
        '2': 'Tuesday',
        '3': 'Wednesday',
        '4': 'Thursday',
        '5': 'Friday',
        '6': 'Saturday'
    }

    const month: any = {
        '0': 'January',
        '1': 'February',
        '2': 'March',
        '3': 'April',
        '4': 'May',
        '5': 'June',
        '6': 'July',
        '7': 'August',
        '8': 'September',
        '9': 'October',
        '10': 'November',
        '11': 'December',
    }

    const formattedDay: string = day[date.getDay().toString()];
    const formattedDate: string = date.getDate().toString();
    const formattedMonth: string = month[date.getMonth().toString()];

    return `${formattedDay}, ${formattedDate} ${formattedMonth}`;
}

export default formatDate;