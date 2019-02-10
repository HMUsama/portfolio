import React, { Component } from 'react'
import './JavaScript.css'
// import usama from './assets/Usama.jpg'
import WOW from 'wowjs'

class JavaScript extends Component {
  componentDidMount(){
    new WOW.WOW().init();
  }
  render() {
    return (
      <div className="animated  bounce " data-wow-iteration="1">
       <div className="card ">
  <img src="//unsplash.it/705/705" alt="" class="cardimg"/>
  <div class="cardbody">
    <div class="cardtitle">OLX App</div>
    <div class="cardtext">
      This is made to JavaScript and backEnd is use to Firebsae
    </div>
    <div class="cta">
      <input type="button" class="button" value="View More"/>
    </div>
  </div>  
</div>
      </div>
    );
  }
}

export default JavaScript;
