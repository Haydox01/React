import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import Hello from './Components/Hello';
import Message from './Components/Message';
import Counter from './Components/Counter';
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';
import EventBind from './Components/EventBind';

class App extends Component {
  render(){
   return(
    <div className="App">
      <EventBind />
      {/* <Counter /> */}
      {/* <FunctionClick />
      <ClassClick /> */}
      {/* { <Message /> }
      <Greet name = "Bruce" heroName= "Batman" >
        <p>This is children props</p>
      </Greet>
      <Greet name = "Clark" heroName= "Spiderman" >
        <button>Action</button>
      </Greet>
      <Greet name = "James" />



      <Welcome name = "Bruce" heroName= "Batman" />
      <Welcome name = "Clark" heroName= "Spiderman" />

      <Hello /> */}
    </div>
    );
  }
}

export default App;
