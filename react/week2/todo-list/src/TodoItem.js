import React, { Component } from 'react';

export class TodoItem extends Component {
  state = {
    task: ''
  };

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (event.target.task.value === '') {
      this.props.addTodo({
        task: 'Do nothing, just relax'
      });
    } else {
      this.props.addTodo(this.state);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          id='task'
          placeholder='write your task here'
          onChange={this.handleChange}></input>
        <input type='submit' value='add todo'></input>
      </form>
    );
  }
}
