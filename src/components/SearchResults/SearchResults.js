import React from 'react';
import './SearchResults.css';
import Tracklist from '../Tracklist/Tracklist';

class SearchResults extends React.Component {
  render() {
    return (
      <div className="search-results">
        <h2>Results</h2>
        <Tracklist tracks={this.props.tracks}  typeButton={'+'} updateSelectedTracks={this.props.updateSelectedTracks} />
      </div>
    );
  }
}

export default SearchResults;
