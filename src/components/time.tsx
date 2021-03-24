import React from 'react';

interface TimeProps { startTime: Date, finishTime: Date }

const Time = ({startTime, finishTime}: TimeProps) => {
    return (
            <h4>{ `${startTime.getHours()}:${startTime.getMinutes()} - ${finishTime.getHours()}:${finishTime.getMinutes()}` }</h4>
    )
}

export default Time;