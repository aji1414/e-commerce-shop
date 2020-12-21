// external libraries and stylesheet
import React from "react";
// import './App.styles.scss';

// components
import StripeCheckout from "react-stripe-checkout";

// redux actions


const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51HRCiUGSLiXBk61g60DGnKse4UvJjERVZHAYym51W7s4zzAsb3644aeCbz88VnsxG0fl2MiVLqCUhMMOcCQHP4rj00NyXlAnEa"

    const onToken = token => {
        console.log(token);
        alert("Payment Successfull")
    }

    return(
        <StripeCheckout
            label="Pay Now"
            name="Red Sea Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://sendeyo.com/up/d/f3eb2117da"
            description={`Your total is ${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};


export default StripeCheckoutButton;