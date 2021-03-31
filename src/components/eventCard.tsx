import React from 'react';
import DateHeader from './dateHeader';
import Event from './event';
import Time from './time';

interface EventCardProps {
    event: {
        startDate: Date,
        endDate: Date,
        name: string,
    }
}

const EventCard = ({event}: EventCardProps) :any => {
    return (
        <>
            <DateHeader date={ event.startDate }/>
            <Event event={event.name}/>
            <Time startTime={event.startDate} finishTime={event.endDate} />
        </>
    )
}

export default EventCard;