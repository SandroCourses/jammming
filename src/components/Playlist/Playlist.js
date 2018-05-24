import React from 'react';
import './Playlist.css';

class Playlist extends React.Component {
  render() {
    return (
      <div className="playlist">
        <input defaultValue='New Playlist' />
      </div>
    );
  }
}

export default Playlist;
