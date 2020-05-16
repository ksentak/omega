import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Component Imports
import Landing from './components/Landing/Landing';

function App() {
  return (
    <Router>
      <div className='App'>
        <Route exact path='/' component={Landing} />
      </div>
    </Router>
  );
}

export default App;
