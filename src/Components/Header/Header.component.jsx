// external libraries and stylesheet
import React from "react";
import { Link } from "react-router-dom";
import "./Header.styles.scss";
import {connect} from "react-redux";

// components used
import CartIcon from "../CartIcon/CartIcon.component";
import CartDropdown from "../CartDropdown/CartDropdown.component";
import { ReactComponent as Logo } from "../../Assets/crown.svg";
import { auth } from "../../Firebase/Firebase.utils";


const Header = ({ currentUser, hidden }) => (
    <div className="header">
        <Link classname="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/contact">
                CONTACT
            </Link>
            {
                currentUser ?
                    <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className="option" to="/signin">SIGN IN</Link>
            }
            <CartIcon />
        </div>
        {!hidden && <CartDropdown />}
        
    </div>
);

const mapStateToProps = ({user:{currentUser}, cart:{hidden}}) => ({
    currentUser:currentUser,
    hidden: hidden
});


export default connect(mapStateToProps)(Header);