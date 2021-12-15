import React, { Component } from "react";
import {userContext} from '../../context/userContext';

class Home extends Component {
  static contextType = userContext

  constructor(props) {
    super(props)
  
    this.state = {
       user:''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const user = event.target.elements.user.value;
    console.log('Esto es user', user);
    this.setState({user});
    const{login} = this.context;
    login(user)
  }
  
  render() {
    return (
    <form onSubmit={this.handleSubmit}>
      <label htmlFor='user'>Nombre: </label>
      <input type="text" name='user'/>
      <input type="submit" />
    </form>);
  }
}

export default Home;
