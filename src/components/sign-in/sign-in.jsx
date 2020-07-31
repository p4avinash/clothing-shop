import React, { Component } from "react";
import "./sign-in.scss";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    //we did so because we don't have to write separate functions for the email and password field for doing the same job,
    //and now we can pass the same function in both.
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            type="email"
            name="email"
            value={this.state.email}
            label="email"
            required
          />

          <FormInput
            handleChange={this.handleChange}
            type="password"
            name="password"
            value={this.state.password}
            label="password"
            required
          />

          <div className="buttons">
            <CustomButton type="submit" onClick={this.handleSubmit}>
              Sign In
            </CustomButton>
            {/* I don't know why, but the "custombutton tag" should work here but it's not working so i just made it a normal button and gave the styles */}
            <button className="googlebtn" onClick={signInWithGoogle}>
              sign in with google
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
