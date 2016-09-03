import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from 'modules/index';
import Button from 'react-button';

class App extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>TO-DO Manager</h3>
        <input type="text" />
        <Button onClick={this.props.addTodo}>Add Todo </Button>
      </div>
      );
  }
}

export default connect(state => ({
  todos: state.todos,
}), { addTodo })(App);
