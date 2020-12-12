// external libraries and stylesheet
import { Switch, Route } from "react-router-dom";
import React, { Component } from "react";
import {connect} from "react-redux";
import './App.css';

// components
import Header from "./Components/Header/Header.component";
import HomePage from "./Pages/HomePage/HomePage.component";
import ShopPage from "./Pages/ShopPage/Shop.component";
import SignInAndSignUp from "./Pages/Sign-In-And-Sign-Up/Sign-In-And-Sign-Up.component";
import { auth, createUserProfileDocument } from "./Firebase/Firebase.utils";

// redux actions
import {setCurrentUser} from "./Redux/User/User.actions";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {

    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillMount() {
    this.unsubscribeFromAuth = null;
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Switch >
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  };
};


const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
