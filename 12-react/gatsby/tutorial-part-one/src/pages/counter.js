import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = { count: 0 }
    this._increment = this._increment.bind(this);
    this._decrement = this._decrement.bind(this);
  }

  _increment() {
    this.setState({count: this.state.count + 1});
  }

  _decrement() {
    this.setState({count: this.state.count - 1});
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <p>current count: { this.state.count }</p>
        <button onClick={this._increment}>plus</button>
        <button onClick={this._decrement}>minus</button>
      </div>
    );
  }
};

export default Counter;
