import React from 'react';

const TodoItem = ({ todo, toggleCompleted, deleteTodo }) => (
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

export default TodoItem;
