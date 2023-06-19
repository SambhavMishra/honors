import React, { Component } from 'react';
import MemoComponent from './MemoComponent';
import PureComponent from './PureComponent';

export default class ParentComponent extends Component {
  constructor (props) {
    super(props);

    this.state = {
      name: "P"
    }
  }
    componentDidMount = () => {
        setInterval(() => {
            this.setState({
                name: "Sambhav",
            });
        }, 200);
    };
  render() {
    console.log("Parent Component");

    return (
      <div>
        Parent Component 
        
        {/* <RegComponent name={this.state.name}></RegComponent> */}
        {/* <PureComponent name={this.state.name}></PureComponent> */}
        <MemoComponent name={this.state.name}></MemoComponent>
      </div>
    );
  }
}
