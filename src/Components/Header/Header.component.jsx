// external libraries and stylesheet
import React from "react";
import { Link } from "react-router-dom";
import "./Header.styles.scss";

// components used
import { ReactComponent as Logo } from "../../Assets/crown.svg";



const Header = () => (
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
        </div>
    </div>
);

export default Header;