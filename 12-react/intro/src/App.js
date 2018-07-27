import React, { Component } from 'react';
import HelloWorld from './HelloWorld';
import HelloUser from './HelloUser';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloWorld />
        <HelloUser name="Glenn Gould" />
        <HelloUser name="Groucho Marx" />
        <HelloUser name="Krusty the Clown" />
        <HelloUser />
      </div>
    );
  }
}

export default App;
