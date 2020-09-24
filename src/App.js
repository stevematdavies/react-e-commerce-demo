import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from './pages/shop/shop-page.component'
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component"

import './App.css';


function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/sign-in' component={SignInAndSignUpPage}/>
      </Switch>
    </div>
  );
}

export default App;
