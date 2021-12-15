import React, { Component } from "react";

class Card extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }  

  render() {
    const {title, topic, content, picture} = this.props.info
    return <div>
      <p>{title}</p>
      <p>{topic}</p>
      <p>{content}</p>
      <img src={picture} alt={title} />
      <button onClick={this.props.delete}>Delete</button>
    </div>;
  }
}

export default Card;
