import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
    <form>
      <label htmlFor='text'>Nombre: </label>
      <input type="text" name='name'/>
      <input type="submit" />
    </form>);
  }
}

export default Home;
