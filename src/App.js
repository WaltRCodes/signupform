import React, { Component } from 'react'
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
      age: 0,
      gender: '',
      occupation: '' 
    }

    this.createComponent = this.createComponent.bind(this);
    this.takeName = this.takeName.bind(this);
    this.takePassword = this.takePassword.bind(this);
    this.takeAge = this.takeAge.bind(this);
    this.takeGender = this.takeGender.bind(this);
    this.takeOccupation = this.takeOccupation.bind(this);
  }
  
  createComponent(event){
  }

  takeName(event){
    this.setState({username: event.target.value});
  }

  takePassword(event){
    this.setState({password: event.target.value});
  }

  takeAge(event){
    this.setState({age: event.target.value});
  }

  takeGender(event){
    this.setState({gender: event.target.value});
  }

  takeOccupation(event){
    this.setState({occupation: event.target.value});
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}
