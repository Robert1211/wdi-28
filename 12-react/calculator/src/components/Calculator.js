import React, { Component } from 'react';

class Calculator extends Component {
  constructor() {
    super();
    this.state = { a: 0, b: 0 };
    this._updateA = this._updateA.bind(this);
    this._updateB = this._updateB.bind(this);
  }

  _updateA(event) {
    const a = Number( event.target.value ) || 0;
    this.setState( {a} ); // equivalent to { a: a }
  }

  _updateB(event) {
    const b = Number( event.target.value ) || 0;
    this.setState( {b} ); // equivalent to { b: b }
  }

  render() {
    const { a, b } = this.state;
    return (
      <div>
        <h1>Not So Crappy Calculator</h1>
        <input type="number" value={this.state.a} onChange={ this._updateA } />
        <input type="number" value={this.state.b} onChange={ this._updateB }/>

        <h2>Results</h2>
        <p>{ a } + { b } = { a + b }</p>
        <p>{ a } - { b } = { a - b }</p>
        <p>{ a } * { b } = { a * b }</p>
        <p>{ a } / { b } = { a / b }</p>
      </div>
    );
  }
}

export default Calculator;
