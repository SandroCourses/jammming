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

    this.handleOnKeyUp = this.handleOnKeyUp.bind(this);
  }

  handleOnKeyUp(newSearchInput) {
    this.setState({
      searchInput: newSearchInput
    });
  }

  render() {
    return (
      <div className="searchbar">
        <SearchInput onKeyUp={this.handleOnKeyUp} />
        <SearchButton searchInput={this.state.searchInput} />
      </div>
    );
  }
}

export default SearchBar;
