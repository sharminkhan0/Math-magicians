import React from 'react';
import Calculator from './components/calculator';
import Quote from './components/Quote';
import './App.css';

function App() {
  return (
    <div className="app">
      <Quote />
      <Calculator />
    </div>
  );
}

export default App;
