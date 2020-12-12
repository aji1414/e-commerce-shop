// external libraries and stylesheet
import React from "react";
import "./CartDropdown.styles.scss";

// redux
import {connect} from "react-redux";
import {selectCartItems} from "../../Redux/Cart/Cart.selectors";

// components used
import CustomButton from "../CustomButton/CustomButton.component";
import CartItem from "../CartItem/CartItem.component";

const CartDropdown = ({cartItems}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem} />
            ))}
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)    


const mapStateToProps = (state) =>({
    cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown);