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
  }

  takePassword(event){
  }

  takeAge(event){
  }

  takeGender(event){
  }

  takeOccupation(event){
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}
