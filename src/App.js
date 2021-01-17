import React, {Component} from 'react';
import './App.css';
import Photo from './Photo'
import Table from './Table'

class App extends Component
 {
  render(){
  return (
    <div className="App">
    
    <Photo />
    <Table />
      
    </div>
  );
  }
}

export default App;
