import React, { Component } from 'react';
import Route from 'react-router-dom/Route'
import Agregar from './pages/agregar'
import List from './pages/List'
import Home from './pages/home'
import { BrowserRouter } from 'react-router-dom'
import Nav from "./components/Navbar"

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Nav />
            <Route exact path="/" component={Home} />
            <Route path="/agregar" component={Agregar} />
            <Route path="/List" component={List} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
