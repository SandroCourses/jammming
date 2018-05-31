import React from 'react';
import './PlaylistInput.css';

class PlaylistInput extends React.Component {
  constructor(props) {
    super(props);

    this.handleOnKeyUp = this.handleOnKeyUp.bind(this);
  }

  handleOnKeyUp(e) {
    this.props.updatePlaylistTitle(e.target.value);
  }

  render() {
    return <input defaultValue='New Playlist' onKeyUp={this.handleOnKeyUp} />;
  }
}

export default PlaylistInput;
