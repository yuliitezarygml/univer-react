import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Brands from './components/Brands';
import Cards from "./components/Cards";
import Subscribe from './components/Subscribe'
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Brands />
<Cards/>
        <Subscribe/>
    </div>
  );
}

export default App;
