import React, { Component } from 'react';
import { TodoList } from './TodoList';
import { Counter } from './Counter';
import { TodoForm } from './TodoForm';

export class App extends Component {
  state = {
    todosArray: []
  };
  editTodo = id => {};

  deleteTodo = id => {
    const todosArray = this.state.todosArray.filter(todo => {
      return todo.id !== id;
    });
    this.setState({ todosArray });
  };

  completeTodo = id => {
    const todosArray = this.state.todosArray.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }

      return todo;
    });
    this.setState({ todosArray });
  };

  addTodo = todo => {
    todo.id = Math.random();
    const todosArray = this.state.todosArray;
    todosArray.push(todo);
    this.setState({ todosArray });
  };

  componentDidMount() {
    fetch(
      'https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw'
    )
      .then(response => response.json())
      .then(data => this.setState({ todosArray: data }));
  }

  render() {
    return (
      <div>
        <Counter />
        <TodoForm addTodo={this.addTodo} />
        <TodoList
          todosArray={this.state.todosArray}
          deleteTodo={this.deleteTodo}
          completeTodo={this.completeTodo}
          editTodo={this.editTodo}
        />
      </div>
    );
  }
}
