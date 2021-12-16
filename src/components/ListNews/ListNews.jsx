import React, { Component } from "react";
import Card from "../Card/Card";


class ListNews extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }

  paintNews = () => {
    return this.props.newsList.newsList.map((article,i)=> <Card info={article} delete={()=>this.props.deleteNew(i)} key={i}/>)

  }
  
  render() {
    return <div>{this.paintNews()}</div>;
  }
}

export default ListNews;
