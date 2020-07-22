import React, { Component } from 'react';

import { Nav } from './components/nav/nav.component';
import { HomePage } from './pages/homepage/homepage.component';

import './App.css';

class App extends Component {

  render () {
    return (
      <div className="App">
        <Nav />
      </div>
    )
  }
}

export default App;
