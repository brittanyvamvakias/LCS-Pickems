//libraries
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

//components
import Navbar from './navbar/Navbar';
import Container from './container/Container';
import Login from './login/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path='/home'>
            <Container/>
          </Route>
          <Route path='/login'>
            <Login/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
