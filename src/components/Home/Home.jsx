import React, { Component } from "react";
import {userContext} from '../../context/userContext';
import './Home.css'
import Button from '@mui/material/Button';

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
            <Button variant="contained" type="submit">Send</Button>
          </div>
        </form>
      </div>
    );
  }
}

export default Home;
