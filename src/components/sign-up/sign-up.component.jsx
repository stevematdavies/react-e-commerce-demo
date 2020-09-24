import React from "react";
import {auth, createUserProfileDocument} from "../../firebase/firebase.utils";

import './sign-up.styles.scss'
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button";


class SignUp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = async e => {
    e.preventDefault()
    const {displayName, email, password, confirmPassword} = this.state
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return
    }
    try {
      const {user} = await auth.createUserWithEmailAndPassword(email, password)
      await createUserProfileDocument(user, {displayName})
      this.setState(ps => ({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }))
    } catch (error) {
      console.log("There was a problem creating a user: ", error)
    }
  }

  handleChange = e => {
    const {name, value} = e.target
    this.setState(ps => ({
      [name]: value
    }))
  }

  render() {
    const {displayName, email, password, confirmPassword} = this.state
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required/>
          <FormInput
            type="emai"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required/>
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required/>
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required/>
          <div className="buttons">
            <CustomButton type="submit">Submit</CustomButton>
          </div>

        </form>
      </div>
    )
  }
}

export default SignUp
