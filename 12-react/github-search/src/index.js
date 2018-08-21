import React from 'react';
import ReactDOM from 'react-dom';
import 'preact/devtools';

import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
// TODO: import Search and Profile

const Routes = (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
    </div>
  </Router>
);

ReactDOM.render(Routes, document.body);
