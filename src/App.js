import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import './App.css';
import Header from './Components/Header'
import Home from './Components/Home'
import Posts from './Components/Posts'
import About from './Components/About'
const App = () => {
  return (
    <>
    <Header/>
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route></Route>
      <Route></Route>
    </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
