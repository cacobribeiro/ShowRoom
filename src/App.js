import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Github from './pages/Github';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';
import AboutMe from './pages/AboutMe';
import Facebook from './components/Facebook Project/index';
import SuperMarket from './pages/SuperMarket Pages/index';
import DetailPage from './pages/SuperMarket Pages/DetailPage';
import Cart from './pages/SuperMarket Pages/Cart';

const App = () => {
  return (
    <div style={{ backgroundColor: 'whitesmoke' }}>
      <div className="App">
        <Header />
      </div>
      <div className="container-fluid">
        <Switch>
          <Route exact path="/project/supermarket/cart" component={Cart} />
          <Route exact path="/project/supermarket/product/:id" component={DetailPage} />
          <Route exact path="/project/supermarket" component={SuperMarket} />
          <Route exact path="/sobre" component={AboutMe} />
          <Route exact path="/ShowRoom" component={Home} />
          <Route exact path="/project/facebook" component={Facebook} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/github" component={Github} />
          <Route exact path="/project" component={Projects} />
          <Route exact component={NotFound} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
