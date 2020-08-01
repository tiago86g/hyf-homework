import React from 'react';
import { TodoList } from './TodoList';

const todos = [
  { name: 'Learn State', when: 'Wed Sep 13 2017' },
  { name: 'Learn SetState', when: 'Thu Sep 14 2017' },
  { name: 'Learn DidAmount', when: 'Fri Sep 15 2017' }
];

export class App extends React.Component {
  render() {
    return <TodoList todos={todos} />;
  }
  // inserir TODO e TODOLIST
}
