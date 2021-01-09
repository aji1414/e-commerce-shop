// external libraries and stylesheet
import React, {Component} from "react";
import {CartTotal, CartDropdownContainer, CartItemsContainer, EmptyMessageContainer, ClearButtonContainer} from "./CartDropdown.styles";
import {withRouter} from "react-router-dom";
import {confirmAlert} from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css';

// redux
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectCartItems, selectCartTotal} from "../../Redux/Cart/Cart.selectors";
import {toggleCartHidden, clearCart} from "../../Redux/Cart/Cart.actions";

// components used
import CustomButton from "../CustomButton/CustomButton.component";
import CartItem from "../CartItem/CartItem.component";

// ({cartTotal,cartItems, history, dispatch})

class CartDropdown extends Component {
    emptyCartSubmit = () => {
        const {dispatch} = this.props;

        confirmAlert({
            title: 'Are you sure you want to empty your cart?',
            buttons: [
              {
                label: 'Yes, proceed!',
                onClick: (output) =>{
                    dispatch(clearCart());
                }
              },
              {
                label: 'No, go back',
                onClick: (output) => {return}
              }
            ]
          });
    };
    
    render(){
        const {cartTotal, cartItems, history, dispatch} = this.props;
        return(
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
                <ClearButtonContainer onClick={async () =>{
                    this.emptyCartSubmit();
                }}>
                    Empty Cart
                </ClearButtonContainer>
            </CartDropdownContainer>
        )
    }
}    


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal
})

export default withRouter(connect(mapStateToProps)(CartDropdown));