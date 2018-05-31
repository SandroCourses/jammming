import React from 'react';
import './SearchInput.css';

class SearchInput extends React.Component {
  constructor(props) {
    super(props);

    this.handleOnKeyUp = this.handleOnKeyUp.bind(this);
  }

  handleOnKeyUp(e) {
    this.props.changeSearchInput(e.target.value);
  }

  render() {
    return <input placeholder="Enter A Song Title" onKeyUp={this.handleOnKeyUp} />;
  }
}

export default SearchInput;
