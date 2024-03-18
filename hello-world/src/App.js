import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import Hello from './Components/Hello';

class App extends Component {
  render(){
   return(
    <div className="App">
      <Greet name = "Bruce" heroName= "Batman" />
      <Greet name = "Clark" heroName= "Spiderman" />
      <Greet name = "James" />



      {/* <Welcome />
      <Hello /> */}
    </div>
    );
  }
}

export default App;
