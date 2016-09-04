import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from 'modules/index';
import Button from 'react-button';

class App extends Component {

  constructor(props) {
    super(props);
  }
  getInitialState() {
    return { todoText: '' };
  }
  onChangeInputValue(e) {
    console.log(e.target.value);
    this.setState({ todoText: e.target.value });
  }
  render() {
    return (
      <div>
        <h3>TO-DO Manager</h3>
        <input type="text" placeholder="write a note" onChange={this.onChangeInputValue} />
        <Button onClick={this.props.addTodo(this.state.todoText)}>Add Todo </Button>
      </div>
      );
  }
}

export default connect(state => ({
  todos: state.todos,
}), { addTodo })(App);
