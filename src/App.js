import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';

class App extends Component {

  // this function is the first thing that runs
  // think of it as the entry point to the app
  // everything u put in here will run before render()
  componentDidMount() {
    // to see this message, right click the screen and hit inspect
    // then go to console tab
    console.log('lmao');

    this.sup();
  }

  sup() {
    prompt('u lit??');
  }

  // this renders the UI of the page
  // it runs last
  render() {
    return(
      <BrowserRouter>
        <div>
          <Switch>

            <Route exact path='/' render={() => (
                <HomePage />
              )}
            />

            <Route exact path='/profile' render={() => (
                <ProfilePage />
              )}
            />

          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
