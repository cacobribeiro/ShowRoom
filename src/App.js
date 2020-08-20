import React from 'react';
import './App.css';
import Header from './components/Header';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Github from './pages/Github';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <div>
      <div className="App">
        <Header />
      </div>
      <div>
        <Switch>
          <Route exact path="/ShowRoom" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/github" component={Github} />
          <Route exact path="/projects" component={Projects} />
          <Route exact component={NotFound} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
