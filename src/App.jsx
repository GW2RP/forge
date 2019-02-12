import React, { Component } from 'react';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";

import HomePage from "./pages/Home/Home.component";
import Logo from "./logo.png";


class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route path='/codex'>

            </Route>
            <Route path='/personnage'>

            </Route>
            <Route path='/preview'>
              <HomePage />
            </Route>
            <Route>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center', height: '100vh' }}>
                <div style={{ textAlign: 'center' }}>
                  <img src={Logo} />
                  <h1>Character Forge</h1>
                  <p>Under Construction</p>
                </div>
              </div>
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
