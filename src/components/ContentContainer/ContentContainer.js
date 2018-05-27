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

    this.updateSelectedTracks = this.updateSelectedTracks.bind(this);
  }

  updateSelectedTracks(track, typeAction) {
    const selectedTracks = this.state.selectedTracks;

    if(typeAction !== 'add' && typeAction !== 'remove') {
      // do nothing
    } else if(typeAction !== 'add') {
      selectedTracks.push(track);

      this.setState({
        selectedTracks: selectedTracks
      });
    } else if(typeAction !== 'remove') {
      let trackToBeRemovedIndex;

      selectedTracks.forEach((selectedTrack, index) => {
        if(selectedTrack.id === track.id) {
          trackToBeRemovedIndex = index;
        }
      });

      if(typeof trackToBeRemovedIndex !== 'undefined') {
        selectedTracks.splice(trackToBeRemovedIndex, 1);

        this.setState({
          selectedTracks: selectedTracks
        });
      }
    }
  }

  render() {
    return (
      <div className="content-container">
        <SearchResults tracks={this.props.searchResults} updateSelectedTracks={this.updateSelectedTracks} />
        <Playlist tracks={this.state.selectedTracks} updateSelectedTracks={this.updateSelectedTracks} />
      </div>
    );
  }
}

export default ContentContainer;
