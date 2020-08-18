import React, { Component } from 'react';
import { TodoList } from './TodoList';
import { Counter } from './Counter';
import { TodoItem } from './TodoItem';

export class App extends Component {
  state = {
    todosArray: [
      {
        id: 1,
        task: 'Get out of bed',
        completed: false
      },
      {
        id: 2,
        task: 'Brush teeth',
        completed: false
      },
      {
        id: 3,
        task: 'Eat breakfast',
        completed: false
      }
    ]
  };

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
    console.log(todo, todosArray);
  };

  render() {
    return (
      <div>
        <Counter />
        <TodoItem addTodo={this.addTodo} />
        <TodoList
          todosArray={this.state.todosArray}
          deleteTodo={this.deleteTodo}
          completeTodo={this.completeTodo}
        />
      </div>
    );
  }
}
