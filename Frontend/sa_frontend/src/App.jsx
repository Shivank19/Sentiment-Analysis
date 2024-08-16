/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import SentimentAnalysis from './SentimentAnalysis';
import LandingPage from './LandingPage';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={LandingPage} />
        <Route path='/predict' component={SentimentAnalysis} />
      </Switch>
    </Router>
  );
}

export default App;
