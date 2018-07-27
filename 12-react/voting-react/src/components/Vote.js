import React, { Component } from 'react';

class Vote extends Component {
  constructor() {
    super();
    this.state = { vote: 0, score: 0 };
    this._upvote = this._upvote.bind( this );
    this._downvote = this._downvote.bind( this );
  }

  _upvote() {
    if (this.state.vote === 1) { // cancel upvote
      this.setState({score: this.state.score - 1, vote: 0});
    } else if (this.state.vote === -1) { // change downvote to upvote
      this.setState({score: this.state.score + 2, vote: 1});
    } else { // regular upvote
      this.setState({score: this.state.score + 1, vote: 1});
    }
  }

  _downvote() {
    if (this.state.vote === -1) { // cancel downvote
      this.setState({score: this.state.score + 1, vote: 0});
    } else if (this.state.vote === 1) { // change upvote to downvote
      this.setState({score: this.state.score - 2, vote: -1});
    } else { // regular downvote
      this.setState({score: this.state.score - 1, vote: -1});
    }
  }

  render() {
    // Render must return a single element (which can contain more elements)
    return (
      <div>
        <h1>{ this.state.score }</h1>
        <button onClick={this._upvote}>Upvote</button>
        <button onClick={this._downvote}>Downvote</button>
      </div>
    );
  }
}

export default Vote;
