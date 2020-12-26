// external libraries and stylesheet
import React from "react";
import { Link } from "react-router-dom";
import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from "./Header.styles";
// import "./Header.styles.scss";


// redux
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectCartHidden} from "../../Redux/Cart/Cart.selectors";
import {selectCurrentUser} from "../../Redux/User/User.selectors";

// components used
import CartIcon from "../CartIcon/CartIcon.component";
import CartDropdown from "../CartDropdown/CartDropdown.component";
import { ReactComponent as Logo } from "../../Assets/crown.svg";
import { auth } from "../../Firebase/Firebase.utils";


const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className="logo" />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to="/shop">
                SHOP
            </OptionLink>
            <OptionLink to="/contact">
                CONTACT
            </OptionLink>
            {
                currentUser ?
                    <OptionLink as="div" onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
                    :
                    <OptionLink to="/signin">SIGN IN</OptionLink>
            }
            <CartIcon />
        </OptionsContainer>
        {!hidden && <CartDropdown />}
        
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden: selectCartHidden
});


export default connect(mapStateToProps)(Header);