import React, { Component } from 'react';
import Info from './components/Info';
export default class Form extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
      age: 0,
      gender: '',
      occupation: '',
      div: '' 
    }

    this.createComponent = this.createComponent.bind(this);
    this.takeName = this.takeName.bind(this);
    this.takePassword = this.takePassword.bind(this);
    this.takeAge = this.takeAge.bind(this);
    this.takeGender = this.takeGender.bind(this);
    this.takeOccupation = this.takeOccupation.bind(this);
  }
  
  createComponent(event){
    event.preventDefault();
    this.setState({div: <Info 
      username={this.state.username}
      password={this.state.password}
      age={this.state.age}
      gender={this.state.gender}
      occupation={this.state.occupation}
    />});
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
        <form onSubmit={this.createComponent}>
          <label>
              Username
              <input type="text" onChange={this.takeName} placeholder="username"/>
          </label>
          <br />
          <label>
              Password
              <input type="password" onChange={this.takePassword} placeholder="password"/>
          </label>
          <br />
          <label>
              Age
              <input type="number" onChange={this.takeAge} placeholder="age"/>
          </label>
          <br />
          <label>
            Gender:
              Male
              <input type="radio" name="gender" value="Male" onChange={this.takeGender}/>
              Female
              <input type="radio" name="gender" value="Female" onChange={this.takeGender}/>
              Other
              <input type="radio" name="gender" value="Other" onChange={this.takeGender}/>
          </label>
          <br />
          <label>
              Occupation
              <input type="text" onChange={this.takeOccupation} placeholder="occupation"/>
          </label>
          <br />
        <label>
              <input type="submit" value="Submit"/>
        </label>
        </form>
        {this.state.div}
      </div>
    )
  }
}
