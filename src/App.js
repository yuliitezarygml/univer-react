import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Brands from './components/Brands';
import Models from "./components/models";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Brands />
        <Models />
    </div>
  );
}

export default App;
