import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import data from "./data.json"; 
import Navigation from "./component/Navigation";

function App() {
  return (
    <div className="App">
       <Navigation />  
       {Object.entries(data).map(([key, items]) => (
            <table border="1" key={key}>
        
        <thead>
          <tr>
            <td colSpan="5" style={{backgroundColor: '#f2f2f2', textAlign: 'center', fontWeight: 'bold' }}>
                Ziua lunii {key}
              </td>
          </tr>
          <tr>
            <th>ora</th>
            <th>lectia</th>
            <th>Sala</th>
            <th>numele</th>
            <th>P-S-L</th>
          </tr>
        </thead>
        <tbody>
              {items.map((item) => (
                <tr key={item.id} {...console.log(item)}>
                <td>{item.ora}</td>
                <td>{item.lectia}</td>
                <td>{item.sala}</td>
                <td>{item.numele}</td>
                <td>{item.psl}</td>
              </tr>
              ))} 
        </tbody>
      </table>
          ))}
      
          
       
    </div>
  );
}

export default App;
