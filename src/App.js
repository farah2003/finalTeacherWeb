import React, { Component } from 'react';
import { BrowserRouter, Route,Switch}from "react-router-dom"

import './App.css';

import Home   from './component/Home';
import Aboutus from './component/Aboutus';
import Contactus  from './component/Contactus';
import Signin   from './component/sign';
import Login   from './component/Login';
import Fillin from './component/fillin';
import Mainfordent  from './component/ForDentist/main'
import Profile from './component/ForDentist/profileDent'
import FiratTab from './component/ForDentist/page1'
import SecandPage from './component/ForDentist/page2'
import ThirdPage from './component/ForDentist/page3'
import FPage from './component/ForDentist/page4'
import FIFPage from './component/ForDentist/page5'
import  SPage from './component/ForDentist/page6'
import PCard from './component/ForDentist/allpage'

import DHome from './component/ForDentist/HomeDent'



class App extends Component{

pri=()=>{
  console.log('fg f')
}
test=()=>{
  console.log('test')
}
  render(){
    return(
      
      <div>
     
     
    <BrowserRouter>
    <div>
     
    <Switch>
    <Route path="/" component={Home} exact></Route>
    <Route path="/about"component={Aboutus}></Route>
    <Route path="/contact"component={Contactus}></Route>
    <Route path="/sign"component={Signin}></Route>
    <Route path="/login"component={Login}></Route>
    <Route path="/fillin"component={Fillin}></Route>
    <Route path="/ForDentist/main"component={Mainfordent }></Route>
    <Route path='/ForDentist/profileDent' component={Profile}></Route>
    <Route path='/ForDentist/page1' component={FiratTab}></Route>
    <Route path='/ForDentist/page2' component={SecandPage}></Route>
    <Route path='/ForDentist/page3' component={ThirdPage }></Route>
    <Route path='/ForDentist/page4' component={FPage}></Route>
    <Route path='/ForDentist/page5' component={FIFPage}></Route>
    <Route path='/ForDentist/page6' component={SPage}></Route>
    <Route path='/ForDentist/allpage' component={PCard}></Route>

    <Route path='/ForDentist/HomeDent' component={DHome}></Route>

    </Switch>
    </div>
    </BrowserRouter>

  


    </div>
      
  
    )
  }
}

export default App;
