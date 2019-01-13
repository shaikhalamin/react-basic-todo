import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Todo extends Component {

    getStyle = ()=>{
        
        return {
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            backgroundColor:'#f4f4f4',
            padding:'10px',
            borderBottom:'1px #ccc dotted'
        }
        
    }

  render() {
    const { id,title } = this.props.todo;

    return (
      <div style={ this.getStyle() }>
        <p id={id}>
        <input type="checkbox" onChange={this.props.markComplete.bind(this,id)} /> { ' ' }
        {title}
        <button onClick={this.props.delTodo.bind(this,id)} style={btnStyle}>X</button>
        </p>
      </div>
    )
  }
}

Todo.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    background:'orange',
    color:'blue',
    cursor:'pointer' 
}

export default Todo;