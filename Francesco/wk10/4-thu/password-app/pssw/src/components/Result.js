import React, { Component } from 'react';
import './Result.css';

class Result extends Component {
  getColor = el => {
    if (el === undefined || el === false) {
      return 'red';
    } else {
      return 'green';
    }
  };

  render(props) {
    let { data } = this.props;
    return (
      <div>
        <p className={this.getColor(data.score)}>Score: {data.score || '0'}</p>
        <p className={this.getColor(data.hasLowerCase)}>
          hasLowerCase:
          {JSON.stringify(data.hasLowerCase) || '  false'}
        </p>
        <p className={this.getColor(data.hasSpecialChar)}>
          hasSpecialChar:
          {JSON.stringify(data.hasSpecialChar) || '  false'}
        </p>
        <p className={this.getColor(data.hasUpperCase)}>
          hasUpperCase:
          {JSON.stringify(data.hasUpperCase) || '  false'}
        </p>
        <p className={this.getColor(data.hasNumber)}>
          hasNumber:
          {JSON.stringify(data.hasNumber) || 'false'}
        </p>
        <p className={this.getColor(data.isOver8Char)}>
          isOver8Char:
          {JSON.stringify(data.isOver8Char) || '  false'}
        </p>
      </div>
    );
  }
}

export default Result;
