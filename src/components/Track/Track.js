import React from 'react';
import './Track.css';

class Track extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.updateSelectedTracks(this.props.track);
  }

  render() {
    return (
      <div className="track">
        <div className="track-information">
          <h3>{this.props.track.title}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        <a className="track-action" onClick={this.handleClick} >+</a>
      </div>
    );
  }
}

export default Track;
