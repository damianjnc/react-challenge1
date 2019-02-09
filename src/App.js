import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    persons: [
      {name: 'damian', myusername: 'damianjnc'},
      {name: 'giulia', myusername: 'giulia123'}
    ]
  }

  render() {
    return (
      <div className="App">
        <UserOutput myusername={this.state.persons[0].myusername} />
        <UserOutput userid='halinka1234' />
        <UserOutput />
      </div>
    );
  }
}

export default App;
