import React, { Component } from 'react';
import Profile from './Profile';
import Clock from './Clock';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Clock />
        <Profile name="Groucho" age="101" motto="No gods no masters" pic="http://fillmurray.com/400/400" />
        <Profile name="Harpo" age="99" motto="No gods no masters" pic="http://fillmurray.com/401/400" />
        <Profile name="Chico" age="87" pic="http://fillmurray.com/400/399" />
      </div>
    );
  }
}

export default App;
