import React, { Component } from 'react';

class SecretForm extends Component {
  constructor() {
    super();
    this.state = { content: '' };
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange(e) {
    this.setState( {content: e.target.value} );
  }

  _handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit( this.state.content );
    this.setState({content: ''});
    // How would you return focus to the textarea -- HARD
  }

  render() {
    return (
      <form onSubmit={ this._handleSubmit }>
        <textarea onChange={ this._handleChange } value={this.state.content}></textarea>
        <input type="submit" value="Tell" />
      </form>
    );
  }
}

class Gallery extends Component {
  render() {
    return (
      <div>
        { this.props.secrets.map( (s) => <p>{s.content}</p> ) }
      </div>
    );
  }
}


class Secrets extends Component {
  constructor() {
    super();
    this.state = {
      secrets: [{content: 'secret A'}, {content: 'secret B'}, {content: 'secret C'}, {content: 'secret D'}]
    };
    this.saveSecret = this.saveSecret.bind( this );
  }

  saveSecret(s) {
    const newSecret = { content: s }; // this will come via AJAX later
    this.setState( { secrets: [newSecret, ...this.state.secrets] } ); // ... spread operator
  }

  render() {
    return (
      <div>
        <h1>Tell Us All Your Secrets</h1>
        <SecretForm onSubmit={ this.saveSecret } />
        <Gallery secrets={ this.state.secrets } />
      </div>
    );
  }
}

export default Secrets;
