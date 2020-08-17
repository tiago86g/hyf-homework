import React, { Component } from 'react';

export class Counter extends Component {
  state = { seconds: 0 };

  componentDidMount() {
    setInterval(() => {
      return this.setState(state => {
        return {
          seconds: state.seconds + 1
        };
      });
    }, 1000);
  }
  render() {
    return (
      <>
        <h1>To Do List</h1>
        <h2>You been in this website for {this.state.seconds} seconds</h2>
      </>
    );
  }
}
