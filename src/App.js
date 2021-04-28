import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';

import './App.css';
import { Component } from 'react';

class App extends Component{

  state={
    todos:[
      {
        id:1,
        title:'take out the trash',
        completed:false
      },
      {
        id:2,
        title:'work out',
        completed:false
      },
      {
        id:3,
        title:'go for a walk',
        completed:false
      }
    ]
  }


  //Toggle Complete
  markComplete=(id)=>{
    this.setState(
      {
        todos:this.state.todos.map(todo=>{
          if(todo.id === id){
            todo.completed=!todo.completed
          }
          return todo;
        })
      }
    );
  }

  //delete function
  delTodo=(id)=>{
    this.setState(
      {
        todos:[...this.state.todos.filter(todo=>todo.id!==id)]
      }
    );
  }

  addTodo=(title)=>{
    const newTodo={
      id:4,
      title,
      completed:false
    }
    this.setState({todos:[...this.state.todos,newTodo]});
  }

  render(){

    return(
      <div className="App">
        <div className='container'>
          <Header />
          <AddTodo addTodo={this.addTodo}/>
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
        </div>
      </div> 
    );
  }
}

export default App;
