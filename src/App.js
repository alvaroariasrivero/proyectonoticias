import './App.css';
import Header from './components/Head'
import Main from './components/Main'
import Footer from './components/Footer'
import { BrowserRouter } from 'react-router-dom';
import { Component } from 'react';
import {userContext} from './context/userContext';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      user: '',
      login: this.login,
      logout: this.logout
    }
  }
    
  login = (user) => {
    this.setState({user})
  }

  logout = () => {
    this.setState({user:''})
  }

  render()
  {return (
    <div className="App">
      <BrowserRouter>
        <userContext.Provider value={this.state}>
          <Header/>
          <Main/>
        </userContext.Provider>
      </BrowserRouter>
      <Footer/>      
    </div>
  );}
}

export default App;
