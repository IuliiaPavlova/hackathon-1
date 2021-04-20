/* eslint-disable react/jsx-filename-extension */
// import './App.css';
import React from 'react';
import Planet from './components/Planet';
import Person from './components/Person';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Star Wars App
      </header>
      <Planet />
      <Person />
    </div>
  );
}

export default App;
