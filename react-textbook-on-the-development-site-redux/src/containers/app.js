import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addTodo } from '../actions/index';
import TodoList from '../components/todoList';

class AppContainer extends Component {
  render() {
    return (
      <Fragment>
        <button
          onClick={this.props.addTodo('foo')}
        >Add ToDo</button>
        <TodoList list={this.props.state.todos.list} />
      </Fragment>

    )
  }
}

const mapStateToProps = state => {
  return {state}
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addTodo }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
