import React from 'react';

interface EventProps { event: string }

const Event = ({event}: EventProps) => {
    return (
            <h3>{ event }</h3>
    )
}

export default Event;