// external libraries and stylesheet
import React, { Component } from "react";
import "./SignUp.styles.scss";

// components used
import FormInput from "../FormInput/FormInput.component";
import CustomButton from "../CustomButton/CustomButton.component";
import {auth, createUserProfileDocument} from "../../Firebase/Firebase.utils";

class SignUp extends Component{
    constructor(){
        super();

        this.state = {
            displayName:"",
            email:"",
            password:"",
            confirmPassword:""
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert("passwords don't match");
            return;
        }

        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, {displayName});

            this.setState({
                displayName:"",
                email:"",
                password:"",
                confirmPassword:""
            });

        }catch(error){
            console.error(error);
        }
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    render(){
        const {displayName, email, password, confirmPassword} = this.state;

        return(
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span className="">Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput 
                    type="text"
                    name="displayName"
                    value={displayName}
                    onChange={this.handleChange}
                    label="Display Name"
                    required>   
                    </FormInput>

                    <FormInput 
                    type="email"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                    label="Email"
                    required>   
                    </FormInput>

                    <FormInput 
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                    label="Password"
                    required>   
                    </FormInput>

                    <FormInput 
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={this.handleChange}
                    label="Confirm Password"
                    required>   
                    </FormInput>

                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
};



export default SignUp;