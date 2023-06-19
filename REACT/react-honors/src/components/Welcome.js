import React, { Component } from 'react';

export class Welcome extends Component {
  render() {
    return (
      <h1>Welcome, {this.props.firstname} {this.props.lastname}</h1>
    );
  }
}

export default Welcome;
