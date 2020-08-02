import React from 'react';
import ReactDOM from 'react-dom';

class TodoItem extends React.Component {
  render() {
    return (
      <li>
        Task: <b>{this.props.name}</b>. When: {this.props.when}
      </li>
    );
  }
}

class TodoList extends React.Component {
  render() {
    const todoArray = this.props.todo;
    const todoMapped = todoArray.map(todoItem => {
      return <TodoItem name={todoItem.name} when={todoItem.when} />;
    });
    return <ul> {todoMapped} </ul>;
  }
}

const todos = [
  { name: 'Get out of bed', when: 'Wed Sep 13 2017' },
  { name: 'Brush teeth', when: 'Thu Sep 14 2017' },
  { name: 'Eat breakfast', when: 'Fri Sep 15 2017' }
];

function App() {
  return (
    <div>
      <h1>Todo list</h1>
      <TodoList todo={todos} />
    </div>
  );
}

const root = document.getElementById('root');

ReactDOM.render(<App />, root);
