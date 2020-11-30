// external libraries and stylesheet
import { Switch, Route } from "react-router-dom";
import React from "react";
import './App.css';


// components
import Header from "./Components/Header/Header.component";
import HomePage from "./Pages/HomePage/HomePage.component";
import ShopPage from "./Pages/ShopPage/Shop.component";


function App() {
  return (
    <div className="App">
      <Header />
      <Switch  >
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
