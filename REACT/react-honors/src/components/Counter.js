import React, { Component } from 'react';

export default class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }

        this.onIncrement = this.onIncrement.bind(this)
    }

    
  render() {
    return (
      <div>
        
      </div>
    );
  }
}
