// external libraries and stylesheet
import React from "react";
import "./CustomButton.styles.scss";

// components used

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
    <button className={`${inverted ? "inverted" : ""} ${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}{...otherProps}>
        {children}
    </button>
);


export default CustomButton;