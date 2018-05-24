import React from 'react';
import './App.css';
import SearchBar from '../components/SearchBar/SearchBar';
import ContentContainer from '../components/ContentContainer/ContentContainer';

class App extends React.Component {
  render() {
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
