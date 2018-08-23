import React, { Component } from 'react';
import Result from './Result';
import estimateStrength from '../estimateStrength';

class Input extends Component {
  state = {
    content: ''
  };
  handleValue = e => {
    this.setState({
      content: e.target.value
    });
  };
  calcResult = word => {
    let result = estimateStrength(word);
    return result;
  };
  render() {
    return (
      <div>
        <input type="text" onChange={this.handleValue} />
        <Result data={this.calcResult(this.state.content)} />
      </div>
    );
  }
}

export default Input;
