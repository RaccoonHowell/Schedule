import React from 'react';
import './App.css';
import Header from './components/header';
import DateHeader from './components/dateHeader';

function App() {
  const date1: Date = new Date(2021, 0, 8);
  return (
    <div className="App">
      <Header month='January' />
      <DateHeader date={ date1 } />
      <Header month='February' />
      <Header month='March' />
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
