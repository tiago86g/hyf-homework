import React from 'react';
import TodoItem from './TodoItem';

class Border extends React.Component {
  render() {
    return (
      <div
        style={{
          border: '2px solid black',
          maxWidth: 300,
          margin: 9,
          padding: 15
        }}>
        <TodoItem />
      </div>
    );
  }
}
export default Border;
