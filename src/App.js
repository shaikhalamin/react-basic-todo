import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
//import uuid from 'uuid';
import axios from 'axios';

import Header from './components/layouts/Header';
import Todos from './components/Todos';
import AddToDo from './components/AddToDo';
import About from './components/pages/About';


class App extends Component {

  state = {
    todos: [
      ]
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
    .then(res => this.setState({ todos:res.data }));
    
  }

  addToDo = (title)=>{
    
    axios.post('https://jsonplaceholder.typicode.com/posts',{title:title,completed:false})
    .then(res => this.setState({todos:[...this.state.todos,res.data]}));
  }

  markComplete = (id)=>{
    this.setState({ todos: this.state.todos.map((todo)=>{
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    }) })
  }

  delTodo = (id)=>{
    //console.log(id);
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({ todos: [...this.state.todos.filter((todo)=> todo.id !== id )] }));
  }


  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" render={ props => (
            <React.Fragment>
              <AddToDo addToDo={this.addToDo}/>
              <Todos todos={ this.state.todos } markComplete={this.markComplete} delTodo={this.delTodo}/>
            </React.Fragment>
          )} />
          <Route path="/about" component={About}/>
        </div>
      </Router>
    );
  }
}

export default App;
