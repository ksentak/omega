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
      </div>
    );
  }
}

export default Register;
