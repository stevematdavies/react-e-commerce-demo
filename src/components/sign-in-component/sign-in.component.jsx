import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button";
import { signInWithGoogle } from '../../firebase/firebase.utils'
import './sign-in.styles.scss'



class SignIn extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState(_ => ({
      email: '',
      password: ''
    }))
  }

  handleChange = e => {
    e.preventDefault()
    const {name, value} = e.target
    this.setState(_ => ({
      [name]: value
    }))
  }

  render() {
    const {email, password} = this.state
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your username and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            id="email"
            name="email"
            type="email"
            label="email"
            value={email}
            handleChange={this.handleChange}
            required/>
          <FormInput
            id="password"
            name="password"
            type="password"
            label="password"
            handleChange={this.handleChange}
            value={password}
            required/>
            <div className="buttons">
              <CustomButton type="submit">Submit Form</CustomButton>
              <CustomButton onClick={signInWithGoogle} isSignIn>Sign in with Google</CustomButton>
            </div>
        </form>
      </div>
    )
  }
}

export default SignIn
