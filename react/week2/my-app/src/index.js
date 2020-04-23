import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';

ReactDOM.render(
  <React.StrictMode>
    <h1>Todo list</h1>
    <TodoList />
  </React.StrictMode>,
  document.getElementById('root')
);
