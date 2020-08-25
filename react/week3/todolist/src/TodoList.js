import React from 'react';
// import { TodoItem } from './TodoItem';

export function TodoList(props) {
  const { todosArray } = props;
  const { deleteTodo, completeTodo, editTodo, handleChange } = props;

  const length = todosArray.length;
  const mappedTodos = length ? (
    todosArray.map(todo => {
      return (
        <div
          key={todo.id}
          style={{
            border: '1px solid black',
            padding: '4px 4px',
            marginBottom: '2px'
          }}>
          {todo.isEditing ? (
            <form>
              <input
                type='text'
                id='description'
                placeholder='write your task here'
                onChange={event => handleChange(todo.id, event)}
                // value={todo.description}
                required></input>

              <input
                type='date'
                id='deadline'
                min={new Date().toISOString().slice(0, 10)}
                max='2020-12-31'
                onChange={event => handleChange(todo.id, event)}
                // value={todo.deadline}
                required></input>

              <button onClick={() => {}}>done</button>
            </form>
          ) : (
            <div>
              <input
                type='checkbox'
                checked={todo.completed ? 'checked' : ''}
                onChange={() => completeTodo(todo.id)}
              />

              <span
                style={{
                  textDecorationLine: todo.completed ? 'line-through' : 'none',
                  fontWeight: 'bold'
                }}
                id={todo.id}>
                {`${todo.description} `}
              </span>

              <span
                style={{
                  textDecorationLine: todo.completed ? 'line-through' : 'none'
                }}
                id={todo.id}>
                >> {todo.deadline}
              </span>

              <button onClick={() => deleteTodo(todo.id)}>delete task</button>
              <button onClick={() => editTodo(todo.id)}>edit</button>
            </div>
          )}
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
