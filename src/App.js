import React, { Component } from 'react';
import logo from './logo.svg';
import PhoneForm from './components/PhoneForm'
import './App.css';

class App extends Component {
  id=2
  state={
    information:[
      {
        id:0,
        name : '김민준',
        phone :'010-0000-0000'
      },
      {
        id:1,
        name : '황윤선',
        phone :'010-0000-0000'
      }
    ]
  }
  handleCreate = (data) =>{
    const {information} = this.state;
    this.setState({
      information: information.concat({id : this.id++, ...data})
    })
  }

  render() {
    return (
      <div>
      <PhoneForm
        onCreate={this.handleCreate}
      />
      {JSON.stringify(this.state.information)}
      </div>
    );
  }
}

export default App;
