import React from 'react';
import './ContentContainer.css';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class ContentContainer extends React.Component {
  render() {
    return (
      <div className="content-container">
        <SearchResults />
        <Playlist />
      </div>
    );
  }
}

export default ContentContainer;
