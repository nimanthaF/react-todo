import Todos from './components/Todos';

import './App.css';
import { Component } from 'react';

class App extends Component{

  state={
    todos:[
      {
        id:1,
        title:'tkae out the trash',
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

  render(){

    return(
      <div className="App">
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
