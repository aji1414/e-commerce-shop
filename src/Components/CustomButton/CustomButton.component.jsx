// external libraries and stylesheet
import React from "react";
import "./CustomButton.styles.scss";

// components used

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
    <button className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}{...otherProps}>
        {children}
    </button>
);


export default CustomButton;