import React, { Component, Fragment } from "react";
import Nav from "../Nav/Nav";
import {userContext} from '../../context/userContext';
import './Head.css';

class Head extends Component {
  render() {
    return (
    <header>
      <Nav/>
      <userContext.Consumer>
        {
          ({user, logout}) => user ?
          <Fragment>
              <h3 className="salute">Hola {user}</h3>
              <button onClick={logout}>Logout</button>
          </Fragment>
          : ('')
        }
      </userContext.Consumer>
    </header>)
  }
}

export default Head;
