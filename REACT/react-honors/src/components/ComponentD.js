import React, { Component } from 'react';
import ComponentE from './ComponentE'
import useContext from './auth-context'

export default class ComponentD extends Component {
  render() {
    return (
      <div>
        Component D - {this.context}
        <ComponentE/>
      </div>
    );
  }
}

ComponentD.contextType = UserContext 
export default ComponentD 

