// external libraries and stylesheet
import React from "react";
import {SpinnerContainer, SpinnerOverlay} from "./WithSpinner.styles";
// import './WithSpinner.styles.scss';

// components


// redux actions
const WithSpinner = WrappedComponent =>({isLoading, ...otherProps}) =>{
    return (
    isLoading ? 
    <SpinnerOverlay>
        <SpinnerContainer />
    </SpinnerOverlay>
    :
    <WrappedComponent {...otherProps} />
    )

};

export default WithSpinner;