import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Components
import Landing from './components/Landing/Landing';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
  return (
    // FINAL APPLICATION ROUTING

    // <Router>
    //   <div className='App'>
    //     <Route exact path='/' component={Landing} />
    //   </div>
    // </Router>

    // DEVELOPMENT TESTING
    <div className='App'>
      <Login />
      <Register />
    </div>
  );
}

export default App;
