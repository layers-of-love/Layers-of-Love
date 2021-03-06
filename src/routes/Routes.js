import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
// contexts
import { GalleryArtworkProvider } from '../contexts/GalleryArtworkContext';
// pages
import LandingPage from '../pages/LandingPage/LandingPage';
import GalleryPage from '../pages/GalleryPage/GalleryPage';
import AboutPage from '../pages/AboutPage/AboutPage';

export default function Routes() {
  return(
    <Router>
      <GalleryArtworkProvider>
        <Switch>
          <Route exact path='/' component={LandingPage}/>
        </Switch>
        <Switch>
          <Route exact path='/gallery' component={GalleryPage}/>
        </Switch>
      </GalleryArtworkProvider>
      <Switch>
        <Route exact path='/about' component={AboutPage}/>
      </Switch>
    </Router>
  )
}
