import React from 'react';
import Track from '../Track/Track';
import './Tracklist.css';

class Tracklist extends React.Component {
  render() {
    return (
      <div className="tracklist">
        {
          this.props.tracks.map(track => {
            return <Track key={track.id} track={track} updateSelectedTracks={this.props.updateSelectedTracks} />;
          })
        }
      </div>
    );
  }
}

export default Tracklist;
