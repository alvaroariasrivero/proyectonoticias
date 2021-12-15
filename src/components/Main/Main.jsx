import React, { Component } from "react";
import {Routes, Route} from 'react-router-dom';
import Home from '../Home'
import Form from '../Form'
import ListNews from '../ListNews'

class Main extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      newsList: [
        {
          title: "Ataca el hombre vaya",
          topic: "Desgracia",
          content: "Vaya hombre vaya",
          picture: 'http://img.desmotivaciones.es/201101/olioil_1.jpg'
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

  render() {
    return (
    <main>
      <Routes>
        <Route path='/' element={<Home/>} exact/>
        <Route path='/form' element={<Form createNew={this.createNew}/>}/>
        <Route path='/list' element={<ListNews newsList={this.state} deleteNew={this.deleteNew}/>}/>
      </Routes>
    </main>)
  }
}

export default Main;
