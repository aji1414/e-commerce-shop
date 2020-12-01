// external libraries and stylesheet
import React, { Component } from "react";
import "./SignIn.styles.scss";

// components used
import FormInput from "../FormInput/FormInput.component";
import CustomButton from "../CustomButton/CustomButton.component";
import SignInWithGoogle, { signInWithGoogle } from "../../Firebase/Firebase.utils";

class SignIn extends Component {
    constructor() {
        super()

        this.state = {

        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: "", password: "" });
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className="sign-in">
                <h2 className="">I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        required
                        label="email" />
                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label="password"
                        required />
                    <div className="buttons">
                        <CustomButton>SIGN IN</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn={true}>SIGN IN WITH GOOGLE</CustomButton>
                    </div>

                </form>
            </div>
        )

    }
};

export default SignIn;
