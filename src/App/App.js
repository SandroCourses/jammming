import React from 'react';
import './App.css';
import SearchBar from '../components/SearchBar/SearchBar';
import ContentContainer from '../components/ContentContainer/ContentContainer';
import Spotify from '../util/Spotify';

class App extends React.Component {
  render() {
    Spotify.checkQueryParameters(window.location.href);

    return (
      <div className="app">
        <header>Ja<span className="highlight">mmm</span>ing</header>
        <main>
          <SearchBar />
          <ContentContainer />
        </main>
      </div>
    );
  }
}

export default App;
