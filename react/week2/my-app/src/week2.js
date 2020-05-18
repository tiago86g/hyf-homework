import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';

const TodoListItem = ({ todo, toggleCompleted, deleteTodo }) => (
  <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
    <div>{todo.name}</div>
    <div>{todo.description}</div>
    <input
      type='checkbox'
      checked={todo.completed}
      onChange={toggleCompleted}
    />
    <button onClick={deleteTodo}>Delete Todo</button>
  </li>
);

class TodoList extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        description: 'Get out of bed',
        completed: false
      },
      {
        id: 2,
        description: 'Brush teeth',
        completed: false
      },
      {
        id: 3,
        description: 'Eat breakfast',
        completed: false
      }
    ]
  };

  addTodoItem = () => {
    const newTodo = {
      description: 'Eat lanch',
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  toggleComplete = currentIndex => {
    this.setState({
      todos: this.state.todos.map((todo, index) => {
        if (currentIndex === index) {
          return {
            ...todo,
            completed: !todo.completed
          };
        } else {
          return todo;
        }
      })
    });
  };

  deleteTodo = currentIndex => {
    this.setState({
      todos: this.state.todos.filter((_todos, index) => currentIndex !== index)
    });
  };

  render() {
    const noTodos = !this.state.todos.length;
    return (
      <>
        {noTodos ? (
          'No items!'
        ) : (
          <ul>
            {this.state.todos.map((todo, index) => (
              <TodoListItem
                key={index}
                todo={todo}
                toggleComplete={() => this.toggleComplete(index)}
                deleteTodo={() => this.deleteTodo(index)}
              />
            ))}
          </ul>
        )}
        <button onClick={this.addTodoItem}>Add Todo</button>
      </>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <h1>My todo list</h1>
    <TodoList />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

//--------------------------------- UPDATED ------------------------------------------------------

import React from 'react';
import ReactDOM from 'react-dom';

const TodoListItem = ({ todo, toggleCompleted, deleteTodo }) => (
  <div
    style={{
      border: '2px solid black',
      maxWidth: 300,
      margin: 9,
      padding: 15
    }}>
    <li
      style={{ textDecoration: todo.completed ? 'line-through red' : 'none' }}>
      <input
        type='checkbox'
        checked={todo.completed}
        onChange={toggleCompleted}
      />
      <span
        style={{
          paddingRight: 5,
          paddingLeft: 5
        }}>
        {todo.description}
      </span>
      <button
        style={{
          backgroundColor: 'yellow'
        }}
        onClick={deleteTodo}>
        Delete Todo
      </button>
    </li>
  </div>
);

class AddTodoForm extends React.Component {
  state = {
    value: ''
  };

  handleChange = event =>
    this.setState({
      value: event.target.value
    });
  render() {
    const { addTodoItem } = this.props;

    return (
      <form
        onSubmit={event => {
          event.preventDefault();
          addTodoItem(this.state.value);
          this.setState({
            value: ''
          });
        }}>
        <input
          type='text'
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button
          style={{
            backgroundColor: 'lightGreen'
          }}
          type='submit'>
          Add a todo
        </button>
        ;
      </form>
    );
  }
}

class TodoList extends React.Component {
  state = {
    todos: [
      {
        description: 'Get out of bed',
        completed: false
      },
      {
        description: 'Brush teeth',
        completed: false
      },
      {
        description: 'Eat breakfast',
        completed: false
      }
    ]
  };

  addTodoItem = description => {
    const newTodo = {
      description,
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  toggleCompleted = currentIndex => {
    this.setState({
      todos: this.state.todos.map((todo, index) => {
        if (currentIndex === index) {
          return {
            ...todo,
            completed: !todo.completed
          };
        } else {
          return todo;
        }
      })
    });
  };

  deleteTodo = currentIndex => {
    this.setState({
      todos: this.state.todos.filter((_todos, index) => currentIndex !== index)
    });
  };

  render() {
    const noTodos = !this.state.todos.length;
    return (
      <>
        <AddTodoForm addTodoItem={this.addTodoItem} />
        {noTodos ? (
          'No items!'
        ) : (
          <ul style={{ listStyle: 'none', paddingLeft: '0px' }}>
            {this.state.todos.map((todo, index) => (
              <TodoListItem
                style={{ border: '2px', borderColor: 'black' }}
                key={index}
                todo={todo}
                toggleCompleted={() => this.toggleCompleted(index)}
                deleteTodo={() => this.deleteTodo(index)}
              />
            ))}
          </ul>
        )}
      </>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <h1>Todo list</h1>
    <TodoList />
  </React.StrictMode>,
  document.getElementById('root')
);
