// external libraries and stylesheet
import React from "react";
import {CartTotal, CartDropdownContainer, CartItemsContainer, EmptyMessageContainer, ClearButtonContainer} from "./CartDropdown.styles";
// import "./CartDropdown.styles.scss";
import {withRouter} from "react-router-dom";

// redux
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectCartItems, selectCartTotal} from "../../Redux/Cart/Cart.selectors";
import {toggleCartHidden, clearCart} from "../../Redux/Cart/Cart.actions";

// components used
import CustomButton from "../CustomButton/CustomButton.component";
import CartItem from "../CartItem/CartItem.component";

const CartDropdown = ({cartTotal,cartItems, history, dispatch}) => (
    <CartDropdownContainer>
        <CartItemsContainer>
            {
            cartItems.length ?
            cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem} />
            ))
            :
            <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
            }
        </CartItemsContainer>
        {
            cartItems.length &&
            <CartTotal>
                Current Total: ${cartTotal}
            </CartTotal>
        }
        <CustomButton onClick={() => {
            history.push("/checkout");
            dispatch(toggleCartHidden())}}>
            GO TO CHECKOUT
        </CustomButton>
        <ClearButtonContainer onClick={() =>{
            dispatch(clearCart());
            dispatch(toggleCartHidden());
        }}>
            Empty Cart
        </ClearButtonContainer>
    </CartDropdownContainer>
)    


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal
})

export default withRouter(connect(mapStateToProps)(CartDropdown));