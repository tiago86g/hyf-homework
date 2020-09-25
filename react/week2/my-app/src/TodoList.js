import React from 'react';
import AddTodoForm from './AddTodoForm';
import TodoItem from './TodoItem';

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
              <TodoItem
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

export default TodoList;
