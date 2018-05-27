import React from 'react';
import './Playlist.css';
import Tracklist from '../Tracklist/Tracklist';

class Playlist extends React.Component {
  render() {
    return (
      <div className="playlist">
        <input defaultValue='New Playlist' />
        <Tracklist searchResults={[]} />
        <a className="playlist-save">SAVE TO SPOTIFY</a>
      </div>
    );
  }
}

export default Playlist;
