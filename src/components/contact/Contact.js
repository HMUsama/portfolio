import React, { Component } from 'react'
import {Grid,Cell,List,ListItem,ListItemContent} from 'react-mdl'
import './Contect.css'
import usama from '../assets/Usama.jpg'

class Contact extends Component {
  render() {
    return (
      <div>
        <div className="contact-body">
          <Grid className="contect-gird" >
            <Cell col={6}>
            <h2>Muhammad Usama</h2>
             <img src={usama}alt="loading" 
             style={{height:'250px'}}
             />
             <p style={{margin:'auto',width:'75%',padding:'1em'}}>
             Experienced <strong>MERN Stack Developer</strong> with a demonstrated history of working in the
            computer software industry. Skilled in React.js, Express.js, Bootstrap, 
            Cascading Style Sheets (CSS), Node.js, and React Native.Engineering Professional knowledge 
            having a Bachelor's degree in Software Engineering from <strong> ILMA university</strong>
             </p>
             </Cell>

            <Cell col={6}> 
               <h2>Contect Me</h2>
               <hr/> 
               <div className="contact-list">
                <List>
                    <ListItem>
                      <ListItemContent style={{fontSize:'25px',fontFamily:'Anton'}}>
                      <i className="fa fa-phone-square" aria-hidden="true"/>
                        0312-2974028
                      </ListItemContent>
                    </ListItem>
                    <ListItem>
                      <ListItemContent style={{fontSize:'25px',fontFamily:'Anton'}}>
                      <i className="fa fa-github" aria-hidden="true"/>
                       <a href="https://github.com/HMUsama" style={{color:'black'}}>HM Usama</a>
                      </ListItemContent>
                    </ListItem>
                    <ListItem>
                      <ListItemContent style={{fontSize:'25px',fontFamily:'Anton'}}>
                      <i className="fa fa-envelope" aria-hidden="true"/>
                      MuhammadUsama995@yahoo.com
                      </ListItemContent>
                    </ListItem>
                    <ListItem>
                      <ListItemContent style={{fontSize:'25px',fontFamily:'Anton'}}>
                      <i className="fa fa-linkedin" aria-hidden="true"/>
                      <a href="https://www.linkedin.com/in/muhammad-usama-b3516215b/" style={{color:'black'}}>Muhammad Usama</a>
                      </ListItemContent>
                    </ListItem>
                  </List>
               </div>
               
            </Cell>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Contact;
