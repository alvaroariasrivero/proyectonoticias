import React, { Component } from "react";
import {Link} from 'react-router-dom';

class Nav extends Component {
  render() {
    return <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/form'>New's Creator</Link></li>
        <li><Link to='/list'>New's List</Link></li>
      </ul>
    </nav>
  }
}

export default Nav;
