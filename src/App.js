import React, { Component } from 'react';

import { Nav } from './components/nav/nav.component';

import './App.css';

class App extends Component {
  constructor() {

    super();

  }

  render () {
    return (
      <div className="App">
        <Nav />
      </div>
    )
  }
}

export default App;
