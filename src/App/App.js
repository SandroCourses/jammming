import React, { Component } from 'react';
import './App.css';
import SearchBar from '../components/SearchBar/SearchBar';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header>Ja<span class="highlight">mmm</span>ing</header>
        <main>
          <SearchBar />
        </main>
      </div>
    );
  }
}

export default App;
