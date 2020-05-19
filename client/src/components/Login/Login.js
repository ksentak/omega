import React, { Component } from 'react';
import { login } from '../../utils/UserFunctions';

// CSS
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password,
    };

    login(user).then((res) => {
      if (res) {
        this.props.history.push('/profile');
      }
    });
  }

  render() {
    return (
      <div className='Login'>
        <h1>Login</h1>
        <div className='col-md-6 mt-5 mx-auto'>
          <form noValidate onSubmit={this.onSubmit}>
            <h1 className='h3 mb-3 font-weight-normal'>Please Log In</h1>
            <div className='form-group'>
              <label htmlFor='email'>Email Address</label>
              <input
                type='email'
                className='form-control'
                name='email'
                placeholder='Email Address'
                value={this.state.email}
                onChange={this.onChange}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                className='form-control'
                name='password'
                placeholder='Password'
                value={this.state.password}
                onChange={this.onChange}
              />
            </div>
            <button type='submit' className='button btn-block'>
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
