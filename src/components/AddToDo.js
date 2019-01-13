import React, { Component } from 'react'

export default class AddToDo extends Component {

    state = {
        title:''
    }
    onchange = (e)=>{
       this.setState({[e.target.name]:e.target.value});
    }
    onSubmit = (e)=>{
        e.preventDefault();
        this.props.addToDo(this.state.title);
        this.setState({ title:'' });
    }
  render() {
    return (
      <form onSubmit={this.onSubmit} >
        <input onChange={this.onchange} type="text" name="title" placeholder="Add Todo" value={this.state.title}/>
        <input type="submit" value="Add"/>
      </form>
    )
  }
}
