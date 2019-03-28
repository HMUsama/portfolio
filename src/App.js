import React, { Component } from 'react'
import './App.css'
import { Navigation,  Content,Layout,Header,Drawer } from 'react-mdl'
// import {Navigation} from 'react-mdl'
// import NavbarIcon from './components/Styling/NavbarIcon'
import { Link } from 'react-router-dom'
import usama from './components/assets/Usama.jpg'
import Router from './components/Router'


class App extends Component {
  render() {
    return (
      <div className="App">
            <div className="demo-big-content">
            <Layout>
                <Header className="Header-color" title="Profile" scroll>
                    <Navigation>
                      <Link to='/home'>Home</Link>
                      <Link to='/project'>Projects</Link>
                      <Link to='/contact'>Contact</Link>
                      <Link to='/aboutMe'>About Me</Link>
                    </Navigation>
                </Header>
                <Drawer  className="Side-link">
                <img src={usama} className="profile" />
                    <Navigation >
                      <Link to='/home'>Home</Link>
                      <Link to='/project'>Projects</Link>
                      <Link to='/contact'>Contact</Link>
                      <Link to='/aboutMe'>About Me</Link>
                    </Navigation>
                </Drawer>
                <Content>
                    {/* <div className="page-content" > */}
                  <Router/>
                    {/* </div> */}
                </Content>
           </Layout>
        </div>
      </div>
    );
  }
}

export default App;
