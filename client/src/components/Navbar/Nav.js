import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

// Material-ui
import { AppBar, Tabs, Tab, Typography } from '@material-ui/core';

// CSS
import './Navbar.css';

class Nav extends Component {
  logOut(e) {
    e.preventDefault();
    localStorage.removeItem('usertoken');
    this.props.history.push('/');
  }

  render() {
    return (
      <AppBar position='static' aria-label='navigation' className='AppBar'>
        <Tabs className='Tabs'>
          <Tab label='Home' className='Tab' />
          <Tab label='Link 2' className='Tab' />
          <Tab label='Item 3' className='Tab' />
          <Tab label='Item 4' className='Tab' />
        </Tabs>
      </AppBar>
    );
  }
}

export default withRouter(Nav);
