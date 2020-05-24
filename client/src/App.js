import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// Components
import Login from './components/Login/Login';
import Nav from './components/Navbar/Nav';
// import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Register from './components/Register/Register';

// Pages
import Landing from './pages/Landing/Landing';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4062bb',
    },
    secondary: {
      main: '#ebebeb',
    },
    info: {
      main: '#59c3c3',
    },
    error: {
      main: '#f45b69',
    },
  },
});
function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Nav />
        <div className='App'>
          <Route exact path='/' component={Landing} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/profile' component={Profile} />
        </div>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
