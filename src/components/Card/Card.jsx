import React, { Component } from "react";
import './Card.css';

class Card extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }  

  render() {
    const {title, category, content, picture, date} = this.props.info
    return (
        <div className="card">
          <p className="titular">{title}</p>
          <p className="info">Category: {category}</p>
          <p className="content">{content}</p>
          <img src={picture} alt={title} className="picture"/>
          <p className="info">Date: {date}</p>
          <button onClick={this.props.delete}>Delete</button>
        </div>
    );
  }
}

export default Card;
