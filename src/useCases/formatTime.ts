const formatTime = (dateTime: Date) => {
    const hours = dateTime.getHours();
    const minutes = dateTime.getMinutes();
    const minuteString = (minutes.toString().length === 1) ? `0${minutes}` : minutes.toString();
    const hourString = (hours.toString().length === 1) ? `0${hours}` : hours.toString();
    
    return `${hourString}:${minuteString}`
}

export default formatTime;