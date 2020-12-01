// external libraries and stylesheet
import { Switch, Route } from "react-router-dom";
import React, { Component } from "react";
import './App.css';


// components
import Header from "./Components/Header/Header.component";
import HomePage from "./Pages/HomePage/HomePage.component";
import ShopPage from "./Pages/ShopPage/Shop.component";
import SignInAndSignUp from "./Pages/Sign-In-And-Sign-Up/Sign-In-And-Sign-Up.component";
import { auth } from "./Firebase/Firebase.utils";

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })

      console.log(user);
    })
  };

  componentWillMount() {
    this.unsubscribeFromAuth = null;
  };

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch >
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  };
};

export default App;
