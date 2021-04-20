/* eslint-disable react/jsx-filename-extension */
// import './App.css';
import React from 'react';
import Planet from './components/Planet';
import Person from './components/Person';
import Planets from './components/Planets';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Star Wars App
      </header>
      <Planets />
      <Planet />
      <Person />
    </div>
  );
}

export default App;
