import React, { Component } from 'react';

// TODO
// Create a <Time /> that shows how many seconds the user has been the page.
// You loaded this page 9 seconds ago.

class Clock extends Component {
  constructor() {
    super(); // Thanks EJ and Angie
    this.state = { time: (new Date()).toString() };

    setInterval(() => {
      this.setState({time: (new Date()).toString() });
    }, 1000);
  }

  render() {
    return (
      <h3>{ this.state.time }</h3>
    )
  }
}

export default Clock;
