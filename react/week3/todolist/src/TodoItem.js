import React, { Component } from 'react';

export class TodoItem extends Component {
  state = {
    description: '',
    deadline: ''
  };

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(
      'event.target.description.value :>> ',
      event.target.deadline.value
    );
    if (event.target.description.value === '') {
      this.props.addTodo({
        description: 'Do nothing, just relax',
        deadline: 'ramdom date'
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
          id='description'
          placeholder='write your task here'
          onChange={this.handleChange}></input>
        <input type='date' id='deadline' onChange={this.handleChange}></input>
        <input type='submit' value='add todo'></input>
      </form>
    );
  }
}
