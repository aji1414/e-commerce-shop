// external libraries and stylesheet
import React from "react";
import "./Sign-In-And-Sign-Up.styles.scss";

// components used
import SignIn from "../../Components/SignIn/SignIn.component";
import SignUp from "../../Components/SignUp/SignUp.component";

const SignInAndSignUp = () => (
    <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
    </div>

);


export default SignInAndSignUp;