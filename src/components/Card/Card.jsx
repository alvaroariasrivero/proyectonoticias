import React, { Component } from "react";

class Card extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }  

  render() {
    const {title, category, content, picture, date} = this.props.info
    return <div>
      <p>{title}</p>
      <p>{category}</p>
      <p>{content}</p>
      <img src={picture} alt={title} />
      <p>Date: {date}</p>
      <button onClick={this.props.delete}>Delete</button>
    </div>;
  }
}

export default Card;
