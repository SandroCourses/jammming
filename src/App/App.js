import React from 'react';
import './App.css';
import SearchBar from '../components/SearchBar/SearchBar';
import ContentContainer from '../components/ContentContainer/ContentContainer';
import Spotify from '../util/Spotify';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: []
    };

    this.searchSpotify = this.searchSpotify.bind(this);
  }

  searchSpotify(searchInput) {
    const searchInputEncoded = searchInput.split(' ').join('%20');
    const searchResultsPromise = Spotify.search(searchInputEncoded);

    if(searchResultsPromise) {
      searchResultsPromise.then(searchResults => {
        this.setState({
          searchResults: searchResults
        });
      });
    }
  }

  render() {
    Spotify.checkQueryParameters(window.location.href);

    return (
      <div className="app">
        <header>Ja<span className="highlight">mmm</span>ing</header>
        <main>
          <SearchBar searchSpotify={this.searchSpotify} />
          <ContentContainer searchResults={this.state.searchResults} />
        </main>
      </div>
    );
  }
}

export default App;
