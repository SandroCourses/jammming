import React from 'react';
import './SaveButton.css';
import Spotify from '../../util/Spotify';

class SaveButton extends React.Component {
  constructor(props) {
    super(props);

    this.pushSpotifyPlaylist = this.pushSpotifyPlaylist.bind(this);
  }

  pushSpotifyPlaylist() {
    if(this.props.playlistTitle) {
      const uris = [];
      this.props.tracks.forEach(track => {
        uris.push(track.uri);
      });

      if(uris.length > 0) {
        const userIdPromise = Spotify.getUserId();

        if(userIdPromise) {
          userIdPromise.then(userId => {
            Spotify.createPlaylist(userId, this.props.playlistTitle).then(playlistId => {
              Spotify.addTracksToPlayList(userId, playlistId, uris);
              this.props.emptySelectedTracks();
            });
          });
        }
      }
    }
  }

  render() {
    return <a className="playlist-save" onClick={this.pushSpotifyPlaylist}>SAVE TO SPOTIFY</a>;
  }
}

export default SaveButton;
