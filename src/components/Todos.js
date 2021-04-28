import React, {Component} from 'react';
import Todoitem from './Todoitem';
import Proptypes from 'prop-types'

class Todos extends Component{

  markComplete=()=>{
    console.log('Hello')
  }

  render(){
    return this.props.todos.map((todo)=>(
      <Todoitem key={todo.id} todo={todo} markComplete=
      {this.props.markComplete} delTodo={this.props.delTodo}/>
    )); 
  } 
}

//Prop-types
Todos.propTypes={
  todos:Proptypes.array.isRequired
}

export default Todos;
