import React, { Component } from 'react';
import { TodoList } from './TodoList';
import { Counter } from './Counter';
import { TodoForm } from './TodoForm';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todosArray: [
        {
          id: 1,
          description: 'Get out of bed',
          deadline: '2019-06-14',
          completed: false,
          isEditing: false
        },
        {
          id: 2,
          description: 'Brush teeth',
          deadline: '2019-07-14',
          completed: false,
          isEditing: false
        },
        {
          id: 3,
          description: 'Eat breakfast',
          deadline: '2019-07-14',
          completed: false,
          isEditing: false
        }
      ]
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id, event) {
    const todos = this.state.todosArray.map(todo => {
      if (id === todo.id) {
        return { ...todo, [event.target.id]: event.target.value };
      }
      return todo;
    });
    this.setState({ todos });
  }
  editTodo = (id, isEditingMode) => {
    // if (isEditingMode) {
    //   const todosArray = this.state.todosArray.map(todo => {
    //     if (id === todo.id) {
    //       return {
    //         ...todo,
    //         editing: false
    //       };
    //     }
    //     return todo;
    //   });
    //   this.setState({ todosArray });
    // } else {
    const todosArray = this.state.todosArray.map(todo => {
      if (id === todo.id) {
        return {
          ...todo,
          isEditing: true
        };
      }
      return todo;
    });
    this.setState({ todosArray });
    //}
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
  };

  // componentDidMount() {
  //   fetch(
  //     'https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw'
  //   )
  //     .then(response => response.json())
  //     .then(data => this.setState({ todosArray: data }));
  // }

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
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}
