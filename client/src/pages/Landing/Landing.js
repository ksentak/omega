import React, { Component } from 'react';

// Material UI
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import styles from './LandingStyles';

// Images
import logo from '../../assets/images/logo.png';

class Landing extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className='Landing'>
        <div className='container-fluid text-center'>
          <img src={logo} alt='logo' className={classes.logoImg} />
          <div classsName='row'>
            <Button
              className={classes.landingBtn}
              variant='outlined'
              size='large'
            >
              Login
            </Button>
            <Button
              className={classes.landingBtn}
              variant='outlined'
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

export default withStyles(styles)(Landing);
