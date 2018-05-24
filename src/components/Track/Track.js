import React from 'react';
import './Track.css';

class Track extends React.Component {
  render() {
    return (
      <div className="track">
        <div className="track-information">
          <h3>{"Visions of Johanna"}</h3>
          <p>Bob Dylan | Blonde on Blonde</p>
        </div>
        <a className="track-action">+</a>
      </div>
    );
  }
}

export default Track;
