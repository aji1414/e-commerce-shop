// external libraries and stylesheet
import React from "react";
import {CustomButtonContainer} from "./CustomButton.styles";
// import "./CustomButton.styles.scss";

// components used

const CustomButton = ({children,...props}) => (
    <CustomButtonContainer {...props}>
        {children}
    </CustomButtonContainer>
);


export default CustomButton;