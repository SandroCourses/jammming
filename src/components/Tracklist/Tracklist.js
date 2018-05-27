import React from 'react';
import Track from '../Track/Track';
import './Tracklist.css';

class Tracklist extends React.Component {
  render() {
    return (
      <div className="tracklist">
        {
          this.props.tracks.map(track => {
            const trackInfo = {
              title: track.name,
              artist: track.artists[0].name,
              album: track.album.name
            };

            return <Track key={track.id} track={trackInfo} />;
          })
        }
      </div>
    );
  }
}

export default Tracklist;
