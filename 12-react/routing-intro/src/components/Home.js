import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <h2>This is the homepage</h2>
        <p>
          Please check out our <Link to="/faq">FAQ</Link>
        </p>
        <Link to="/characters/Luke">Luke Skywalker</Link>
        <br />
        <Link to="/characters/R2D2">R2D2</Link>
      </div>
    );
  }
}

export default Home;
