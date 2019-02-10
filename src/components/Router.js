import React from 'react'
// import './App.css';
import {Switch,Route} from 'react-router-dom'
import Home from './home/Home'
import Resume from './resume/Resume'
import Project from './projects/Projects'
import Contact from './contact/Contact'
import AboutMe from './about/AboutMe'
import NavbarIcon from './Styling/NavbarIcon'

const Router =() => (
    <Switch>
        {/* <Router> */}
            <Route exact path="/" component={Home} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/project" component={Project} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/aboutMe" component={AboutMe} />
            <Route  path="*" component={NavbarIcon} />
        {/* </Router> */}
    </Switch>
)
export default Router;
