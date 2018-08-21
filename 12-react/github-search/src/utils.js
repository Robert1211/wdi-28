import axios from 'axios';

const Github = {
  getUserInfo(username) {
    // Return the promise from axios to allow the caller to attach handlers with .then
    return axios.get(`https://api.github.com/users/${ username }`); // TODO: api key
  },

  getUserRepos(username) {
    console.log('fetching repos', username);
  }
};

export default Github;
