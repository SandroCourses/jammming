import React from 'react';
import Spotify from '../../util/Spotify';
import './SearchButton.css';

class SearchButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const searchInput = this.props.searchInput;
    const searchInputEncoded = searchInput.split(' ').join('%20');
    const searchResultsPromise = Spotify.search(searchInputEncoded);
    
    if(searchResultsPromise) {
      searchResultsPromise.then(searchResults => {
        this.props.searchSpotify(searchResults);
      });
    }
  }

  render() {
    return <a onClick={this.handleClick}>SEARCH</a>;
  }
}

export default SearchButton;
