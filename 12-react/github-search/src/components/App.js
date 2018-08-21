import React, { Component } from 'react';
import Hello from './Hello';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Goodbye Cruel World</h1>
        <Hello />
      </div>
    );
  }
}
