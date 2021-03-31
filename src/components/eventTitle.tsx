import React from 'react';

interface EventProps { event: string }

const EventTitle = ({event}: EventProps) => {
    return (
            <h3>{ event }</h3>
    )
}

export default EventTitle;