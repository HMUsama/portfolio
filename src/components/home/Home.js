import React, { Component } from 'react'
import {Cell,Grid} from 'react-mdl'
import './Home.css';
import usama from '../assets/Usama.jpg'
import Icon from './Icons'
import WOW from 'wowjs'

class  Home extends Component {
  componentDidMount(){
    new WOW.WOW().init();
  }
  render() {
    return (
      <div style={{width:'100%',margin:'auto'}}>
       <Grid className="landing-grid">
          <Cell col={12}>
                <img src={usama} alt="Profile Pice" className="avatar-img"/>
                <div className="banner-text">
                  <center>
                    <h1 className="animated  fadeInDown " data-wow-iteration="1">
                      FullStack Developer
                    </h1>
                  </center>
                  <p className="animated  fadeInUp " data-wow-iteration="1"> 
                  HTML/CSS Bootstrap | javaScript | React | React Native |  NodeJs|Express|MongoDB</p>
                  <Icon/>
                  <div className="social-links">
                  {/* <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square"  
                  aria-hidden="true"/>
                  </a> */}
                  <hr/>
                </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Home;
