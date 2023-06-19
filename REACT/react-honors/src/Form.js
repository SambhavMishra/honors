import React, { Component } from 'react';

export default class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userName: '',
            comments: '',
        }
    }

    handleUserNameChange = (event) => {
        this.setState({
            userName: event.target.value 
        })
    }

    handleComments = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.userName} ${this.state.comments}`)
        event.preventDefault()
    }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <label>UserName:</label>
            <input type="text"
                value = {this.state.userName} 
                onChange = {this.handleUserNameChange}>
            </input>
            <label>Comments:</label>
            <textarea
                value = {this.state.comments}
                onChange = {this.handleComments}>
            </textarea>
            <button type="submit">Submit</button>
        </form>
    );
  }
}
