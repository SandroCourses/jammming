import React from 'react';
import './SearchButton.css';

class SearchButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.searchSpotify(this.props.searchInput);
  }

  render() {
    return <a onClick={this.handleClick}>SEARCH</a>;
  }
}

export default SearchButton;
