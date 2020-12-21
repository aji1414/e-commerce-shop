// external libraries and stylesheet
import React from "react";

import './Checkout.styles.scss';

// components
import CheckoutItem from "../../Components/CheckoutItem/CheckoutItem.component";
import StripeCheckoutButton from "../../Components/StripeButton/StripeButton.component";

// redux actions
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectCartItems, selectCartTotal} from "../../Redux/Cart/Cart.selectors";



const CheckoutPage = ({cartItems, total}) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-blocks">
                <span className="">Product</span>
            </div>
            <div className="header-blocks">
                <span className="">Description</span>
            </div>
            <div className="header-blocks">
                <span className="">Quantity</span>
            </div>
            <div className="header-blocks">
                <span className="">Price</span>
            </div>
            <div className="header-blocks">
                <span className="">Remove</span>
            </div>
        </div>
        {cartItems.map(cartItem =>
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        )}
        <div className="total">
            <span>TOTAL: ${total}</span>
        </div>
        <div className="test-warning">
            *Please use the following test credit card for paytments*
            <br />
            cardNo:4242 4242 4242 4242 Exp:01/22 CVV:123
        </div>

        <StripeCheckoutButton price={total} />
    </div>
)


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total:selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);