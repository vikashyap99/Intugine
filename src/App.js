import React,{Component} from 'react';
import Header from './Components/Header' 
import Main from './Components/MainComponenet' 
import './App.css';

class App extends Component {

  render(){
    return (
      <div className="App">
        <Header />   
        <Main />
      </div>
    );
  }
  
}

export default App;
