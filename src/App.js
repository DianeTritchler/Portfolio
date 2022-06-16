import React from 'react';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar/Navbar.js';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Arrows from './components/Arrows'

function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}

        <Switch>
          <Route path="/Home" component={Home} />
          <Route path="/AboutMe" component={AboutMe} />
          <Route path="/Projects" component={Projects} />
        </Switch>

        <Arrows />


      </Router>
    </>
  );
}

export default App;
