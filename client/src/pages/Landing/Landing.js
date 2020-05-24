import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Images
import logo from '../../assets/images/logo.png';

// Material UI
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import styles from './LandingStyles';

class Landing extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className='Landing'>
        <div className='container-fluid text-center'>
          <img src={logo} alt='logo' className={classes.logoImg} />
          <div classsName='row'>
            {/* Log in */}
            <Link to='/login'>
              <Button
                className={classes.landingBtn}
                variant='outlined'
                size='large'
              >
                Log in
              </Button>
            </Link>
            {/* Register */}
            <Link to='register'>
              <Button
                className={classes.landingBtn}
                variant='outlined'
                size='large'
              >
                Sign up
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Landing);
