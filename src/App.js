import React from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from './Components/js/LandingPage.js';

function App() {
  return (
    <div className="App" style={{overflowX: "hidden"}}>
      <header className="App-header">
        <LandingPage />
      </header>
    </div>
  );
}

export default App;
