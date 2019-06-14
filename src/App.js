import React, { Component } from 'react';
// import JSON from './db.json'; // JSON dh alias
import { BrowserRouter , Route } from 'react-router-dom';
// components
import Home from './components/home'; 
import Header from './components/header'; 
import Footer from './components/footer'; 
import Teams from './components/teams';
import Team from './components/team';



class App extends Component {

  render() {

    return (
      <BrowserRouter>
        <div>
            <Header />
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/teams' component={Teams}></Route>
            <Route exact path='/team/:id' component={Team}></Route>
            <Footer />
        </div>
      </BrowserRouter>
    )
  }

}

export default App;
