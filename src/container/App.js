import React, { Component } from 'react';
import './App.scss';
import MyMenu from '../components/common/MyMenu.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../components/pages/MyHome';
import About from '../components/pages/MyAbout';
import Skills from '../components/pages/MySkills';
import Project from '../components/pages/MyProject';
import Hobby from '../components/pages/MyHobby';
import Blog from '../components/pages/MyBlog';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flipState: false,
      active: '/'
    }
  }
  render() {
    return (
      <Router>
        <div className="App">
          <div className="bg">
            <MyMenu />
            <div className="main">
              <div className={'main-panel flip' + this.state.flipState ? 'out' : 'in' }>
                <div className="wrapper">
                  <Switch>
                    <div className='view_box'>
                      <Route exact path="/" component={Home} />
                      <Route path="/about" component={About} />
                      <Route path="/skills" component={Skills} />
                      <Route path="/project" component={Project} />
                      <Route path="/hobby" component={Hobby} />
                      <Route path="/blog" component={Blog} />
                    </div>
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
