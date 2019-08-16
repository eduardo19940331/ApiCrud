import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import * as decode from 'jwt-decode';

import Agregar from './pages/agregar'
import List from './pages/List'
import Home from './pages/home'
import Register from './pages/Register'
import Navbar from "./components/Navbar"
import Landing from "./pages/Landing"
import Login from './pages/Login';
import Profile from './pages/Profile';

const isAuthenticated = () => {
    const token = localStorage.getItem('usertoken');
    let isvalid = true;
    try{
      isvalid = decode(token);
    }catch(e){
      return false;
    }
    console.log(isvalid)
    return isvalid;
};

const MyRoute = (props) => (
  isAuthenticated()
  ?<Route {...props} />
  :<Redirect to="/login" />
)

class App extends Component {
    render() {
        return (
          <Router>
            <div className="App">
              <Navbar />
                <Route exact path="/" component={Landing} />
                <div className="container">
                  <MyRoute exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                  <MyRoute exact path="/profile" component={Profile} />
                  <MyRoute exact path="/ticket/admin" component={List} />
                  <Route exact path="/home" component={Home} />
                </div>
            </div>
          </Router>
        )
    }
}
export default App;
