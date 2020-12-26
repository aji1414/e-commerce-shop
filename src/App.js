// external libraries and stylesheet
import { Switch, Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import {connect} from "react-redux";
import './App.css';

// components
import Header from "./Components/Header/Header.component";
import HomePage from "./Pages/HomePage/HomePage.component";
import ShopPage from "./Pages/ShopPage/Shop.component";
import SignInAndSignUp from "./Pages/Sign-In-And-Sign-Up/Sign-In-And-Sign-Up.component";
import { auth, createUserProfileDocument } from "./Firebase/Firebase.utils";
import CheckoutPage from "./Pages/Checkout/Checkout.component";

// redux actions
import {createStructuredSelector} from "reselect";
import {setCurrentUser} from "./Redux/User/User.actions";
import {selectCurrentUser} from "./Redux/User/User.selectors";

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
      
      // addCollectionAndDocuments("collections", collectionsArray.map(({title, items}) => ({title: title, items: items})));
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Switch >
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/signin" render={() => this.props.currentUser ? (<Redirect to="/" />) : (<SignInAndSignUp />)} />
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
      </div>
    );
  };
};


const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
