import React from 'react';
import './Track.css';

class Track extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const innerHTML = e.target.innerHTML;

    if(innerHTML !== '+' && innerHTML !== '-') {
      // do nothing
    } else if(innerHTML === '+') {
      this.props.updateSelectedTracks(this.props.track, 'add');
    } else if(innerHTML === '-') {
      this.props.updateSelectedTracks(this.props.track, 'remove');
    }
  }

  render() {
    return (
      <div className="track">
        <div className="track-information">
          <h3>{this.props.track.title}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        <a className="track-action" onClick={this.handleClick}>{this.props.typeButton}</a>
      </div>
    );
  }
}

export default Track;
