import React from "react";
import './App.css';

// external libraries
import { Switch, Route } from "react-router-dom";

// components
import HomePage from "./Pages/HomePage/HomePage.component";



function App() {
  return (
    <div className="App">
      <Switch exact path="/" component={HomePage} />
    </div>
  );
}

export default App;
