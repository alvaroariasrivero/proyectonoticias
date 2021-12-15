import React, { Component } from "react";

class Form extends Component {
  
  handleSubmit = (event) => {
    event.preventDefault();
    const title = event.target.elements.title.value;
    const topic = event.target.elements.topic.value;
    const content = event.target.elements.content.value;
    const picture = event.target.elements.picture.value;
    console.log("Estos son los datos del form:", title, topic, content, picture)
    this.props.createNew(title, topic, content, picture)
  }
  render() {
    return <div>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="title">Title: </label>
                <input type="text" name="title" />
                <label htmlFor="topic">Topic: </label>
                <input type="text" name="topic" />
                <label htmlFor="content">Content: </label>
                <textarea name="content"/>
                <label htmlFor="picture">Picture: </label>
                <input type="url" name="picture" />
                <input type="submit"/>
            </form>
          </div>;
  }
}

export default Form;
