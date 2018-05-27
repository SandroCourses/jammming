import React from 'react';
import './ContentContainer.css';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class ContentContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTracks: []
    };

    this.addTrack = this.addTrack.bind(this);
  }

  addTrack(newTrack) {
    const selectedTracks = this.state.selectedTracks;
    selectedTracks.push(newTrack);

    this.setState({
      selectedTracks: selectedTracks
    });
  }

  render() {
    return (
      <div className="content-container">
        <SearchResults tracks={this.props.searchResults} updateSelectedTracks={this.addTrack} />
        <Playlist tracks={this.state.selectedTracks} />
      </div>
    );
  }
}

export default ContentContainer;
