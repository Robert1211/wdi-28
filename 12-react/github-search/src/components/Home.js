import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  constructor() {
    super();
    this._randomUser = this._randomUser.bind(this);
  }

  _randomUser() {
    const names = ["zailleh", "zabrinatan", "williamlieu", "sonicakes", "shelleyyz", "Robert1211", "MisaelMP", "Quantumfishcake", "Lukeaton", "Lucasp22", "kennyliuwenjun", "ellijayne", "cyrusthecool", "DreamerMay", "AlphaCarinae"];
    const index = Math.floor( Math.random() * names.length );
    const username = names[ index ];
    this.context.router.history.push(`/details/${ username }`);
  }

  render() {
    return (
      <div className="app">
        <h1>Github Search</h1>
        <Link to="/search">
          <button>Search for a user</button>
        </Link>
        <button onClick={ this._randomUser }>Random user</button>
      </div>
    );
  }
}
