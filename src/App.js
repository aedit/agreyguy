import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import './App.css';
import Header from './Components/Header'
import Home from './Components/Home'
import Posts from './Components/Posts'
import About from './Components/About'
import Error404 from './Components/Error404'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/posts" exact component={Posts}/>
      <Route path="/about" component={About}/>
      <Route path="*" component={Error404}/>
    </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
