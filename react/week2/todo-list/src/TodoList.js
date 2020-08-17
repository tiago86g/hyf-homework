import React from 'react';
// import { TodoItem } from './TodoItem';

export function TodoList(props) {
  const { todosArray } = props;
  const { deleteTodo, completeTodo } = props;
  const length = todosArray.length;
  const mappedTodos = length ? (
    todosArray.map(todo => {
      return (
        <div key={todo.id}>
          <span
            style={{
              textDecorationLine: todo.completed ? 'line-through' : 'none'
            }}
            id={todo.id}>
            {todo.task}
          </span>
          <span>
            <input
              type='checkbox'
              checked={todo.completed ? 'checked' : ''}
              onChange={() => completeTodo(todo.id)}></input>
          </span>
          <span>
            <button onClick={() => deleteTodo(todo.id)}>Delete task</button>
          </span>
        </div>
      );
    })
  ) : (
    <p>Nothing todo, now you can drink a beer :)</p>
  );

  return (
    <div>
      <div>
        <h2>My list</h2>
      </div>
      <div>{mappedTodos}</div>
    </div>
  );
}
