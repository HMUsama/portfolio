import React, { Component } from 'react'
import './Reactjs.css'
import pice1 from '../../assets/Clot.png'
import pice2 from '../../assets/N.J.jpg'
import WOW from 'wowjs'

class Reactjs extends Component {

  componentDidMount(){
    new WOW.WOW().init();
  }
  render() {
    return (
      <div>
        <div className="animated  bounceInLeft " data-wow-iteration="1">
        <div class="wrap">
          <a href="#" title=""className="a">
            <div>
              <img src={pice1}/>
            </div>
            <span><h3>Campus App</h3>
              <p>This application is made on React Redux and 
              </p>
            </span>
          </a>
        </div>
        </div>
        <div className="animated  bounceInRight " data-wow-iteration="1">
        <div class="wrap">
          <a href="#" title=""className="a">
            <div>
              <img src={pice2}/>
            </div>
            <span><h3>Meeting App</h3>
              <p>This application is made on React 
              </p>
            </span>
          </a>
        </div>
        </div>
      </div>
    );
  }
}

export default Reactjs;
