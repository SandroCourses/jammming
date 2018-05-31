import React from 'react';
import './Playlist.css';
import PlaylistInput from '../PlaylistInput/PlaylistInput';
import Tracklist from '../Tracklist/Tracklist';
import SaveButton from '../SaveButton/SaveButton';

class Playlist extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playlistTitle: ''
    };

    this.updatePlaylistTitle = this.updatePlaylistTitle.bind(this);
  }

  updatePlaylistTitle(newPlaylistTitle) {
    this.setState({
      playlistTitle: newPlaylistTitle
    });
  }

  render() {
    return (
      <div className="playlist">
        <PlaylistInput updatePlaylistTitle={this.updatePlaylistTitle} />
        <Tracklist tracks={this.props.tracks} typeButton={'-'} updateSelectedTracks={this.props.updateSelectedTracks} />
        <SaveButton tracks={this.props.tracks} playlistTitle={this.state.playlistTitle} emptySelectedTracks={this.props.emptySelectedTracks} />
      </div>
    );
  }
}

export default Playlist;
