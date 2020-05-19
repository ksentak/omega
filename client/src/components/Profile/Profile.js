import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import { Link, withRouter } from 'react-router-dom';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      _id: '',
    };
  }

  componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);

    this.setState({
      first_name: decoded.first_name,
      _id: decoded._id,
    });
  }

  render() {
    return (
      <div className='Profile'>
        <div className='greeting-box'>
          <h1 className='wb'>Welcome Back {this.state.first_name}!</h1>
          <span className='cta-span'>
            What would you like to achieve today?
          </span>
        </div>
      </div>
    );
  }
}

export default withRouter(Profile);
