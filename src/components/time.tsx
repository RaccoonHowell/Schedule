import React from 'react';
import formatTime from "../useCases/formatTime";

interface TimeProps { startTime: Date, finishTime: Date }

const Time = ({startTime, finishTime}: TimeProps) => {
    const formattedStartTime = formatTime(startTime);
    const formattedFinishTime = formatTime(finishTime);
    return (
            <h4>{ `${formattedStartTime} - ${formattedFinishTime}` }</h4>
    )
}

export default Time;