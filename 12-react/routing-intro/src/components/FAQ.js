import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FAQ extends Component {
  render() {
    return (
      <div>
        <h2>This is the frequently asked questions</h2>
        <p>
          <Link to="/">Back to home</Link>
        </p>
      </div>
    );
  }
}

export default FAQ;
