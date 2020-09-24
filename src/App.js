import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from './pages/shop/shop-page.component'
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component"
import {auth, createUserProfileDocument} from './firebase/firebase.utils'

import './App.css';


class App extends React.Component {

  state = {currentUser: null}
  unsubScribeFromAuth = null


  componentDidMount() {
    this.unsubScribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot((snapShot) => {
          this.setState(ps => ({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }))
        })
      }
      this.setState(ps => ({currentUser: null}))
    })
  }

  componentWillUnmount() {
    this.unsubScribeFromAuth()
  }


  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/sign-in' component={SignInAndSignUpPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
