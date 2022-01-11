import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../fire-base/firebase.utils';

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name);

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I already had an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            value={this.state.email}
            required
            onChange={this.handleChange}
            label='email'
          />

          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            onChange={this.handleChange}
            required
            label='password'
          />
          <div className='button'>
            <CustomButton type='submit'> SIGN IN </CustomButton>
            <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
              {' '}
              SIGN IN WITH GOOGLE{' '}
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
