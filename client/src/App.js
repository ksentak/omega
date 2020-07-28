import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Components
import Login from './components/Login/Login';
// import Nav from './components/Navbar/Nav';
// import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Register from './components/Register/Register';

// Pages
import Landing from './pages/Landing/Landing';

function App() {
  return (
    <Router>
      {/* <Nav /> */}
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
