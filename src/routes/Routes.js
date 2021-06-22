import React from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
// pages
import LandingPage from '../pages/LandingPage/LandingPage';

export default function Routes() {
  return(
    <Router>
      <Switch>
        <Route exact path='/' component={LandingPage}/>
      </Switch>
    </Router>
  )
}
