import React, { Component } from 'react';
import { register } from '../../utils/UserFunctions';
// CSS
import './Register.css';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { firstName: '', lastName: '', email: '', password: '' };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password,
    };

    register(user).then((res) => {
      this.props.history.push('/login');
    });
  }

  render() {
    return (
      <div className='Register'>
        <h1>Register</h1>

        {/* Must build form */}
        <div className='col-md-6 mt-5 mx-auto'>
          <form noValidate onSubmit={this.onSubmit}>
            <h1 className='h3 mb-3 font-weight-normal'>Please Register</h1>
            <div className='form-group'>
              <label htmlFor='first_name'>First Name</label>
              <input
                type='text'
                className='form-control'
                name='first_name'
                placeholder='First Name'
                value={this.state.first_name}
                onChange={this.onChange}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='last_name'>Last Name</label>
              <input
                type='text'
                className='form-control'
                name='last_name'
                placeholder='Last Name'
                value={this.state.last_name}
                onChange={this.onChange}
              />
            </div>
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
              Register
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
