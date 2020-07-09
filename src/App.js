import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";

import Home from "./component/Home";
import Aboutus from "./component/Aboutus";
import Contactus from "./component/Contactus";
import Signin from "./component/sign";
import Login from "./component/Login";
import Fillin from "./component/fillin";
import Signinteacher from "./component/signteacher";
import Profile from "./component/profile and update will use later/profileDent";
import loginstudent from "./component/loginstudent";
import PCard from "./component/profile and update will use later/allpage";
import SHome from "./component/student/studentHome";
import Signupall from "./component/signupall";

import HomeTeacher from "./component/teacher/HomeTeacher";

class App extends Component {
  pri = () => {
    console.log("farah");
  };
  test = () => {
    console.log("test");
  };
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/" component={Home} exact></Route>
              <Route path="/about" component={Aboutus}></Route>
              <Route path="/contact" component={Contactus}></Route>
              <Route path="/sign" component={Signin}></Route>
              <Route path="/login" component={Login}></Route>
              <Route path="/fillin" component={Fillin}></Route>
              <Route path="/signteacher" component={Signinteacher}></Route>
              <Route path="/loginstudent" component={loginstudent}></Route>
              <Route path="/student/studentHome" component={SHome}></Route>
              <Route
                path="/teacher/HomeTeacher"
                component={HomeTeacher}
              ></Route>

              <Route path="/signupall" component={Signupall}></Route>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
