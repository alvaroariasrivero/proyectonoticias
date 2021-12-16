import React, { Component } from "react";
import {Routes, Route} from 'react-router-dom';
import Home from '../Home';
import Form from '../Form';
import ListNews from '../ListNews';
import axios from "axios";

class Main extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      newsList: [
        {
          title:'',
          category:'',
          content:'',
          picture:''
        }
      ]
    }
  }
  
  createNew = (title, category, content, picture) => {
    const newArticle = {title, category, content, picture}
    this.setState({ newsList: [...this.state.newsList, newArticle] })
  }

  deleteNew = (i) => {
    const news = this.state.newsList.filter((article,j)=>j!==i)
    this.setState({newsList:news})
  }

  
  async componentDidMount(){
    const resp = await axios.get('https://api.nytimes.com/svc/topstories/v2/world.json?api-key=oBciP6bzjII9KOYaKq4ExvlphprXcVGG');
    const data = resp.data;

    const newArray = data.results.map(element => {
      return {
        'title': element.title,
        'category': element.section,
        'content': element.abstract,
        'picture': element.multimedia[0].url,
        'date': element.updated_date.slice(0, 10)
      }
    })
    const info = newArray.slice(0, 5);

    this.setState({
      newsList: info
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
