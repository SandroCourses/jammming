import React from 'react';
import './App.css';
import SearchBar from '../components/SearchBar/SearchBar';
import ContentContainer from '../components/ContentContainer/ContentContainer';
import Spotify from '../util/Spotify';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tracks: []
    };

    this.searchSpotify = this.searchSpotify.bind(this);
  }

  searchSpotify(tracks) {
    this.setState({
      tracks: tracks
    });
  }

  render() {
    Spotify.checkQueryParameters(window.location.href);
    
    return (
      <div className="app">
        <header>Ja<span className="highlight">mmm</span>ing</header>
        <main>
          <SearchBar searchSpotify={this.searchSpotify} />
          <ContentContainer tracks={this.state.tracks} />
        </main>
      </div>
    );
  }
}

export default App;
