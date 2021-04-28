import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import {v4 as uuid} from "uuid";
import './App.css';
import { Component } from 'react';


class App extends Component{

  state={
    todos:[
      {
        id:uuid(),
        title:'take out the trash',
        completed:false
      },
      {
        id:uuid(),
        title:'work out',
        completed:false
      },
      {
        id:uuid(),
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
      id:uuid(),
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
