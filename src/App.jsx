import React, { Component } from 'react';

import Logo from './logo.png';

class App extends Component {
  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center', height: '100vh' }}>
        <div style={{ textAlign: 'center' }}>
          <img src={Logo} />
          <h1>Character Forge</h1>
          <p>Under Construction</p>
        </div>
      </div>
    );
  }
}

export default App;
