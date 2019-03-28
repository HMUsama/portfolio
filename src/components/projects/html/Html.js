import React, { Component } from 'react'
import './Html.css'
import pice1 from '../../assets/upwork.png'
import pice2 from '../../assets/olx.jpg'
import WOW from 'wowjs'

class Html extends Component {
  componentDidMount(){
    new WOW.WOW().init();
  }
  render() {
    return (
      <div>
         <div className="row">
            <div className='col s12 m3 '>
               <div className="animated  bounceInLeft " data-wow-iteration="1">
               
                  <section>
                    <div class="profile-box">
                  
                      <img src={pice1}/>
                      <a class="twitter" href="https://responsivepwa.firebaseapp.com/" target="_blank">
                      <div class="box-content">
                        <h3>UpWork App</h3>
                        <ul class="social-links">
                          <li></li>
                          <li></li>
                          <li></li>
                        </ul>
                      </div>
                      </a>
                    </div>
                  </section>
              </div>
          </div>
          
              <div className='col s8 m3 offset-m1'>
                <div className="animated  bounceInUp " data-wow-iteration="1">
                  <section>
                      <div class="profile-box">
                        <img src={pice2}/>
                        <a class="twitter" href="https://olx-haica.firebaseapp.com/index.html" target="_blank">
                        <div class="box-content">
                          <h3>OLX App</h3>
                          <ul class="social-links">
                            <li></li>
                            <li></li>
                            <li></li>
                          </ul>
                        </div>
                        </a>
                      </div>
                  </section>
                 </div>
              </div>
            </div>
      </div>
    );
  }
}

export default Html;
