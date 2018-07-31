import React, { Component } from 'react';
import axios from 'axios';

const SERVER_URL = 'http://localhost:3000/secrets.json';

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
    // How would you return focus to the textarea -- bit annoying
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
        { this.props.secrets.map( (s) => <p key={s.id}>{s.content}</p> ) }
      </div>
    );
  }
}


class Secrets extends Component {
  constructor() {
    super();
    this.state = {
      secrets: []
    };

    this.saveSecret = this.saveSecret.bind( this );

    // In a fancier application, our AJAX request would be in componentDidMount()
    const fetchSecrets = () => {
      axios.get(SERVER_URL).then( (results) => {
        this.setState({ secrets: results.data });
        setTimeout(fetchSecrets, 4000); // Recursion
      });
    }

    fetchSecrets();
  }

  saveSecret(s) {
    axios.post(SERVER_URL, {content: s}).then((results) => {
      // Add the newly created secret to the collection in our state.
      this.setState( {secrets: [results.data, ...this.state.secrets]} );
    });
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
