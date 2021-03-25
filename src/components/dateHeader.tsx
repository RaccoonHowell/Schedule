import React from 'react';
import formatDate from "../useCases/formatDate";

interface DateProps { date: Date }

const DateHeader = ({date}: DateProps) => {
    const formattedDate = formatDate(date);
    return (
        <h2>{ formattedDate }</h2>
    )
}

export default DateHeader;