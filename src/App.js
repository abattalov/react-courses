import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <div className="App">
        <h1> Hello</h1>
      </div>
    </Router>
    
  );
}

export default App;
