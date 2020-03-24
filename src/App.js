import React,{Component} from 'react';
import Window from "./components/Window"
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {

    }
  }
  render(){
    return (
      <>
      <div>
      <Window /> 
      </div>
      </>
       );  
  }
  
}

export default App;
