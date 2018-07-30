import React, { Component } from 'react';

class FlickrSearch extends Component {
  render() {
    return (
      <div>
        <h2>Flickr Search</h2>
        <SearchForm />
        <Gallery images={ ['http://placekitten.com/400/400', 'http://placekitten.com/401/401'] }/>
      </div>
    );
  }
};

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {query: ''};
    this._handleInput = this._handleInput.bind( this ); // Keep this object as the value for this.
  }

  _handleInput(e) {
    console.log('this', this);
    this.setState({query: e.target.value});
  }

  render() {
    return (
      <form>
        <input type="search" placeholder="Butterfly" required onInput={ this._handleInput }/>
        <input type="button" value="Search" />
      </form>
    );
  }
}

class Gallery extends Component {
  render() {
    return (
      <div>
        { this.props.images.map( (url) => <Image url={url} /> ) }
      </div>
    )
  }
}

// Functional component
// (for when you don't need state)
function Image (props) {
  return (
    <img src={ props.url } width="250" height="250" alt={ props.url }/>
  );
}

export default FlickrSearch;
