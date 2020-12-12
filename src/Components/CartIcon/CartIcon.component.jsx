// external libraries and stylesheet
import React from "react";
import "./CartIcon.styles.scss";

// redux
import {connect} from "react-redux";
import {toggleCartHidden} from "../../Redux/Cart/Cart.actions";

// components used
import {ReactComponent as ShoppingIcon} from "../../Assets/shopping-bag.svg"

const CartIcon = ({toggleCartHidden}) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">0</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden:() => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps) (CartIcon);