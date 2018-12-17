import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
// import { hashHistory} from 'react-router'
import Myfoot from './compontent/foot.js';//脚
import Myhead from './compontent/head.js';//头
import Home from './page/home'
import Right from './page/right'

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Router >
          <div>
            <Myhead></Myhead>
            <Switch>
              <Route exact path='/' component={Home}></Route>
              <Route path='/right' component={Right}></Route>
            </Switch>
          </div>
        </Router>
        <Myfoot></Myfoot>
      </div>
    );
  }
}

export default App;
