import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Likes from './pages/Likes';
import Follow from './pages/Follow';
import Login from './pages/Login';
import './App.css';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/likes/">
          <Likes/>
        </Route>
        <Route path="/follows/:userId">
          <Follow/>
        </Route>
        <Route path="/">
          <Login/>
        </Route>
      </Switch>
    </Router>    
  );
}

export default App;
