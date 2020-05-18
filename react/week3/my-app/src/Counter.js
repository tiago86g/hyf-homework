import React from 'react';

class Counter extends React.Component {
  state = { value: 0 };

  componentDidMount() {
    this.timer = setInterval(this.counter, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  counter = () => {
    const currentValue = this.state.value;
    this.setState({
      value: currentValue + 1
    });
  };

  render() {
    return <p>You have used {this.state.value} sec on this website</p>;
  }
}

export default Counter;
