import React from 'react';
import './App.css';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Header month='January' />
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
