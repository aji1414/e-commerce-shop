// external libraries and stylesheet
import React, { Component } from "react";
import "./SignIn.styles.scss";

// components used
import FormInput from "../FormInput/FormInput.component";
import CustomButton from "../CustomButton/CustomButton.component";

// redux
import {googleSignInStart, emailSignInStart} from "../../Redux/User/User.actions";
import {connect} from "react-redux";

class SignIn extends Component {
    constructor() {
        super()

        this.state = {
            email:"",
            password:""
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {emailSignInStart} = this.props;
        const { email, password } = this.state;
        
        emailSignInStart(email, password);

      };

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    } 

    render() {
        const {googleSignInStart} = this.props;

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
                        <CustomButton 
                        type="button" 
                        onClick={googleSignInStart} 
                        isGoogleSignIn={true}>SIGN IN WITH GOOGLE</CustomButton>
                    </div>

                </form>
            </div>
        )

    }
};


const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
});

export default connect(null, mapDispatchToProps)(SignIn);
