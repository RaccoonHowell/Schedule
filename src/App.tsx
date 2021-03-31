import React from 'react';
import './App.css';
import Header from './components/header';
import DateHeader from './components/dateHeader';
import Event from './components/event';
import Time from './components/time';
import EventCard from './components/eventCard';

const januaryEvents = [
  {
    startDate: new Date(2021, 0 , 8, 10, 0),
    endDate: new Date(2021, 0, 8, 12, 0),
    name: 'Morning Run'
  },
  {
    startDate: new Date(2021, 0 , 8, 15, 0),
    endDate: new Date(2021, 0, 8, 16, 0),
    name: 'Afternoon Run'
  }
]

const eventCardRender: JSX.Element[] = [];

januaryEvents.forEach((event) => {
  eventCardRender.push(<EventCard event={event} />)
})

function App() {
  return (
    <div className="App">
      <Header month='January' />
      {eventCardRender}
      <Header month='February' />
      <Header month='March' />
      <DateHeader date={ new Date(2021, 2, 12) } />
      <Event event='Code' />
      <Time startTime={new Date(2021, 2, 12, 14, 20)} finishTime={new Date(2021, 2, 12, 14, 50)} />
      <Header month='April' />
      <Header month='May' />
      <Header month='June' />
      <Header month='July' />
      <Header month='August' />
      <Header month='September' />
      <Header month='October' />
      <Header month='November' />
      <Header month='December' />
    </div>
  );
}

export default App;
