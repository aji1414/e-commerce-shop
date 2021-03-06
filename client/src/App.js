// external libraries and stylesheet
import { Switch, Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import {connect} from "react-redux";


// components
import {GlobalStyle} from "./global.styles";
import Header from "./Components/Header/Header.component";
import HomePage from "./Pages/HomePage/HomePage.component";
import ShopPage from "./Pages/ShopPage/Shop.component";
import SignInAndSignUp from "./Pages/Sign-In-And-Sign-Up/Sign-In-And-Sign-Up.component";
import CheckoutPage from "./Pages/Checkout/Checkout.component";

// redux actions
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "./Redux/User/User.selectors";
import {checkUserSession} from "./Redux/User/User.actions";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const {checkUserSession} = this.props;
    checkUserSession();
    //   // addCollectionAndDocuments("collections", collectionsArray.map(({title, items}) => ({title: title, items: items})));
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  };

  render() {
    return (
      <div>
        <GlobalStyle />
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
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);