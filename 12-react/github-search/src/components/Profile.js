import React, { Component } from 'react';
import Github from '../utils';

export default class Profile extends Component {
  constructor() {
    super();
    this.state = { user: null, repos: null };
  }

  componentDidMount() {
    const username = this.props.match.params.username;
    Github.getUserInfo(username).then((result) => {
      this.setState({user: result.data});
    });
    Github.getUserRepos(username);
  }

  render() {
    return (
      <div>
        <h2>Github User Details</h2>
        <UserInfo user={this.state.user} />
      </div>
    )
  }
}

class UserInfo extends Component {
  render() {
    if (this.props.user === null) {
      return(<div className="info">Loading...</div>);
    }

    // Destructuring
    const { login, followers, following, public_repos, public_gists } = this.props.user;

    return (
      <div className="info">
        <h3>Stats for {login}</h3>
        <p>Followers: {followers}</p>
        <p>Following: {following}</p>
        <p>Repos: {public_repos}</p>
        <p>Gists: {public_gists}</p>
      </div>
    );
  }
}
