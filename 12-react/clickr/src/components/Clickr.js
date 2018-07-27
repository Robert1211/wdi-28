import React, { Component } from 'react';

class Clickr extends Component {

  constructor() {
    /* oh */ super(); // This calls the original constructor which React needs.
    this.state = { clicks: 0 };
    this._incrementClicks = this._incrementClicks.bind(this);
  }

  // Update: event handlers usually start with an underscore by convention.
  _incrementClicks() {
    this.setState({ clicks: this.state.clicks + 1 }); // Avoid mutating state directly.
  }

  render() {
    return(<button onClick={ this._incrementClicks }>{ this.state.clicks } clicks so far</button>);
  }
}

export default Clickr;
