import React, { Component } from 'react';

// Material UI
import Button from '@material-ui/core/Button';
// Images
import logo from '../../assets/images/logo.png';
// CSS
import './Landing.css';

class Landing extends Component {
  render() {
    return (
      <div className='Landing'>
        <div className='container-fluid text-center'>
          <img src={logo} alt='logo' className='logoImg' />
          <div classsName='row'>
            <Button
              className='logoBtn'
              variant='outlined'
              color='secondary'
              size='large'
            >
              Login
            </Button>
            <Button
              className='logoBtn'
              variant='outlined'
              color='secondary'
              size='large'
            >
              Sign up
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
