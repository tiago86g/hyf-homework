import React from 'react';

export class Todo extends React.Component {
  render() {
    return (
      <li>
        Task: <b>{this.props.name}</b> When:<b>{this.props.when}</b>
      </li>
    );
  }
}
