import React from 'react';
import "./App.css";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Siginin from './pages/Signin';
import Home from './pages/Home';
import NotFound from './pages/NotFound';



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/signin" component={Siginin} />
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
