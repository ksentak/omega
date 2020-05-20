import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Components
import Landing from '../Landing/Landing';
import Login from '../Login/Login';
import Navbar from '../Navbar/Navbar';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';

// CSS
import './App.css';

function App() {
  return (
    // FINAL APPLICATION ROUTING

    // <Router>
    //   <div className='App'>
    //     <Route exact path='/' component={Landing} />
    //   </div>
    // </Router>

    // DEVELOPMENT TESTING
    <Router>
      <Navbar />
      <div className='App'>
        <Route exact path='/' component={Landing} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/profile' component={Profile} />
      </div>
    </Router>
  );
}

export default App;
