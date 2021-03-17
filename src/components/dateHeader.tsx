import React from 'react';

interface DateProps { date: Date }

const DateHeader = ({date}: DateProps) => {
    return (
        <h2>{ date.toDateString() }</h2>
    )
}

export default DateHeader;