import React from 'react';

class AddTodoForm extends React.Component {
  state = {
    value: ''
  };

  handleChange = event =>
    this.setState({
      value: event.target.value
    });
  render() {
    const { addTodoItem } = this.props;

    return (
      <form
        onSubmit={event => {
          event.preventDefault();
          addTodoItem(this.state.value);
          this.setState({
            value: ''
          });
        }}>
        <input
          type='text'
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button
          style={{
            backgroundColor: 'lightGreen'
          }}
          type='submit'>
          Add a todo
        </button>
      </form>
    );
  }
}

export default AddTodoForm;
