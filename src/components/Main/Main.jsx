import React, { Component } from "react";
import {Routes, Route} from 'react-router-dom';
import Home from '../Home';
import Form from '../Form';
import ListNews from '../ListNews'
import axios from "axios";

class Main extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      newsList: [
        {
          title:'',
          topic:'',
          content:'',
          picture:''
        }
      ]
    }
  }
  
  createNew = (title, topic, content, picture) => {
    const newArticle = {title, topic, content, picture}
    this.setState({ newsList: [...this.state.newsList, newArticle] })
  }

  deleteNew = (i) => {
    const news = this.state.newsList.filter((article,j)=>j!==i)
    this.setState({newsList:news})
  }

  
  async componentDidMount(){
    const resp = await axios.get('https://api.nytimes.com/svc/topstories/v2/world.json?api-key=oBciP6bzjII9KOYaKq4ExvlphprXcVGG');
    const data = await resp.data;
    const info = {
      'title': data.results[0].title,
      'topic': data.results[0].section,
      'content': data.results[0].abstract,
      'picture': data.results[0].multimedia[0].url
    }
    console.log('Esto es info', info)
    this.setState({
      newsList: [info]
    })
  }

  render() {
    return (
    <main>
      <Routes>
        <Route path='/' element={<Home/>} exact/>
        <Route path='/form' element={<Form createNew={this.createNew}/>}/>
        <Route path='/list' element={<ListNews newsList={this.state} deleteNew={this.deleteNew} load={this.componentDidMount}/>}/>
      </Routes>
    </main>)
  }
}

export default Main;
