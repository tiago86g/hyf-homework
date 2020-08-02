import React from 'react';
import { Todo } from './Todo';

export class TodoList extends React.Component {
  render() {
    const todos = this.props.todos;
    const todosMapped = todos.map(t => {
      return <Todo name={t.name} when={t.when} />;
    });
    return <ul>{todosMapped}</ul>;
  }
}
