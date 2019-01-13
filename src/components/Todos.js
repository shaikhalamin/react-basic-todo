import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Todo from './Todo';

class Todos extends Component {


  render() {
    return (
      <div>
        {this.props.todos.map((todo)=>(
            <Todo key={todo.id} todo={todo} markComplete={this.props.markComplete} 
            delTodo={this.props.delTodo} />
        ))}
      </div>
    )
  }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;
