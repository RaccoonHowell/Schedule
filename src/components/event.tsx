import React from 'react';

interface EventProps { event: string }

const Event = ({event}: EventProps) => {
    return (
        <h1>{ event }</h1>
    )
}

export default Event;