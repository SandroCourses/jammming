import React from 'react';
import Track from '../Track/Track';
import './Tracklist.css';

class Tracklist extends React.Component {
  render() {
    return (
      <div className="tracklist">
        {
          this.props.searchResults.map(searchResult => {
            const trackInfo = {
              id: searchResult.id,
              title: searchResult.name,
              artist: searchResult.artists[0].name,
              album: searchResult.album.name
            };

            return <Track key={trackInfo.id} track={trackInfo} />;
          })
        }
      </div>
    );
  }
}

export default Tracklist;
