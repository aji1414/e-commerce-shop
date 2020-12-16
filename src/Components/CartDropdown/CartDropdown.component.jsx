// external libraries and stylesheet
import React from "react";
import "./CartDropdown.styles.scss";
import {withRouter} from "react-router-dom";

// redux
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectCartItems} from "../../Redux/Cart/Cart.selectors";
import {toggleCartHidden} from "../../Redux/Cart/Cart.actions";

// components used
import CustomButton from "../CustomButton/CustomButton.component";
import CartItem from "../CartItem/CartItem.component";

const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
            cartItems.length ?
            cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem} />
            ))
            :
            <span className="empty-message">Your cart is empty</span>
            }
        </div>
        <CustomButton onClick={() => {
            history.push("/checkout");
            dispatch(toggleCartHidden())}}>GO TO CHECKOUT</CustomButton>
    </div>
)    


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));