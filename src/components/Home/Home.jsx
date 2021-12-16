import React, { Component } from "react";
import {userContext} from '../../context/userContext';
import './Home.css'

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
    this.setState({user});
    const{login} = this.context;
    login(user)
  }
  
  render() {
    return (
      <div className="user">
        <form onSubmit={this.handleSubmit}>
          <div className="name">
            <label htmlFor='user'>Nombre: </label>
            <input type="text" name='user'/>
            <input type="submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default Home;
