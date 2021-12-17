import React, { Component, Fragment } from "react";
import Nav from "../Nav/Nav";
import {userContext} from '../../context/userContext';
import './Head.css';
import Button from '@mui/material/Button';

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
              <Button variant="contained" onClick={logout}>Logout</Button>
          </Fragment>
          : ('')
        }
      </userContext.Consumer>
    </header>)
  }
}

export default Head;
