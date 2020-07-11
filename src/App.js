import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      login: false,
      logout: false,
      member: false,
      active: false,
      Deactivated: false,
      order: false
    }
  }
  render(){
    return(<div></div>)
  }
}

export default App;
