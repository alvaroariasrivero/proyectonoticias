import React, { Component } from "react";
import './Card.css';
import Button from '@mui/material/Button';

class Card extends Component {

  render() {
    const {title, category, content, picture, date} = this.props.info
    return (
        <div className="card">
          <p className="titular">{title}</p>
          <p className="info">Category: {category}</p>
          <p className="content">{content}</p>
          <img src={picture} alt={title} className="picture"/>
          <p className="info">Date: {date}</p>
          <Button variant="contained" onClick={this.props.delete}>Delete</Button>
        </div>
    );
  }
}

export default Card;
