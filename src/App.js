import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./component/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Favourite from "./pages/Favourite";
import Lifestyle from "./pages/Lifestyle";

function App() {
  return (
    <div className="App">
       <Navigation />
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Favourite />} />
         <Route path="/blog" element={<Lifestyle />} />
       </Routes>
    </div>
  );
}

export default App;
