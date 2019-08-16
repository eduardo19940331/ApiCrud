import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import Agregar from './pages/agregar'
import List from './pages/List'
import Home from './pages/home'
import Register from './pages/Register'
import Navbar from "./components/Navbar"
import Landing from "./pages/Landing"
import Login from './pages/Login';
import Profile from './pages/Profile';

//const Landing = () => <h1>Contenido no autorizado</h1>

class App extends Component {
    render() {
        return (
          <Router>
            <div className="App">
              <Navbar />
                <Route exact path="/" component={Landing} />
                <div className="container">
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/profile" component={Profile} />
                  <Route exact path="/ticket/admin" component={List} />
                  <Route exact path="/home" component={Home} />
                </div>
            </div>
          </Router>
        )
    }
}
export default App;
