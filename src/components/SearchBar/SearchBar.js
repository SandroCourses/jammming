import React from 'react';
import SearchInput from '../SearchInput/SearchInput';
import SearchButton from '../SearchButton/SearchButton';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: ''
    };

    this.changeSearchInput = this.changeSearchInput.bind(this);
  }

  changeSearchInput(newSearchInput) {
    this.setState({
      searchInput: newSearchInput
    });
  }

  render() {
    return (
      <div className="searchbar">
        <SearchInput changeSearchInput={this.changeSearchInput} />
        <SearchButton searchInput={this.state.searchInput} searchSpotify={this.props.searchSpotify} />
      </div>
    );
  }
}

export default SearchBar;
