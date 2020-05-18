import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import Counter from './Counter';

ReactDOM.render(
  <React.StrictMode>
    <h1>Todo list</h1>
    <TodoList />
    <Counter />
  </React.StrictMode>,
  document.getElementById('root')
);
