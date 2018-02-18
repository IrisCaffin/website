import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home';
import Resume from './components/resume/Resume';
import Projects from './components/projects/Projects';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/resume" component={Resume} />
          <Route path="/projects" component={Projects} />
        </div>
      </Router>
    );
  }
}

export default App;
