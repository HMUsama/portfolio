import React, { Component } from 'react'
import {Tabs,Tab} from 'react-mdl'
import Reactjs from './reactjs/Reactjs'
import Nodejs from './nodejs/Nodejs'
import JavaScript from './javascript/JavaScript'
import Html from './html/Html'

class Projects extends Component {
  constructor(props){
    super(props)
    this.state={
      activeTab:0
    }
  }
  toggleCategories(){
    const {activeTab} =this.state;
    if(activeTab===0){
      return(
        <Html/>
      )
    }else if(activeTab===1){
      return(
        <JavaScript/>
      )
    }else if(activeTab===2){
      return(
        <Reactjs/>
      )
    }else if(activeTab ===3){
        return(
          <Nodejs/>
        )
    }
  }
  render() {
    return (
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab}
         onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
            <Tab>HTML/Css</Tab>
            <Tab>JavaScript</Tab>
            <Tab>React js</Tab>
            {/* <Tab>React Native</Tab> */}
            <Tab>Node js</Tab>
        </Tabs>
        <section>
          <div className="content">
          {this.toggleCategories()}
          </div>
        </section>
      </div>
    );
  }
}

export default Projects;
