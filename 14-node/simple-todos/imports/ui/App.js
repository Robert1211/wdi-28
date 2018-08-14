import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { withTracker } from 'meteor/react-meteor-data'; // Mysterious

import { Tasks } from '../api/tasks'; // Isomorphic

import Task from './Task';

class App extends Component {
  handleSubmit(event) {
    event.preventDefault();
    // Fetch the user input.
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

    Tasks.insert({
      text, // equivalent to: text: text,
      createdAt: new Date()
    });

    // Clear the user input.
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }

  renderTasks() {
    return this.props.tasks.map((task) => <Task key={task._id} task={task} />);
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>

          <form className="new-task" onSubmit={this.handleSubmit.bind(this)}>
            <input
              type="text"
              ref="textInput"
              placeholder="Type here to add new tasks"
            />
          </form>

        </header>

        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
}

// You are not expected to understand this. It is a bit magic.
// Higher order functional component.
export default withTracker(() => {
  return {
    tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch() // Mongodb
  };
})(App);
