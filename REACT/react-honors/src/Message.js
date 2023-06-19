import React, { Component } from 'react';

export default class Message extends Component {
    constructor() {
        super()
        this.state = {
            message: "Welcome visitor"
        }
    }

    changeMessage() {
        this.setState({
            message: "Thank you for subscribing"
        })
    }
  render() {
    return (
      <div>
        <div>
            <h1>Hello, {this.state.message}</h1>
            <button onClick={() => this.changeMessage()}>Subscribe</button>
        </div>
      </div>
    );
  }
}
