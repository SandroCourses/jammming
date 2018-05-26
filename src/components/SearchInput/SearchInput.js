import React from 'react';
import './SearchInput.css';

class SearchInput extends React.Component {
  constructor(props) {
    super(props);

    this.handleOnKeyUp = this.handleOnKeyUp.bind(this);
  }

  handleOnKeyUp(e) {
    const value = e.target.value;
    this.props.onKeyUp(value);
  }

  render() {
    return <input placeholder="Enter A Song Title" onKeyUp={this.handleOnKeyUp} />;
  }
}

export default SearchInput;
