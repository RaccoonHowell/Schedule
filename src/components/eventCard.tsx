import React from 'react';
import DateHeader from './dateHeader';
import EventTitle from './eventTitle';
import Time from './time';
import Event from '../interfaces/event';

interface EventCardProps {
    event: Event
}

const EventCard = ({event}: EventCardProps) :any => {
    return (
        <>
            <DateHeader date={ event.startDate }/>
            <EventTitle event={event.name}/>
            <Time startTime={event.startDate} finishTime={event.endDate} />
        </>
    )
}

export default EventCard;