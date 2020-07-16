import React, { Component } from "react";
import { Icon, Input, Button, Card ,Modal} from "antd";

import * as firebase from "firebase";
import "./sign";

class Login extends Component {
  state = {
    email: "",
    password: "",
    visible: false,
    erorr:''
  };

  addEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  addPassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  login = () => {
    console.log('doneeeeehere')
    var email = this.state.email;
    var password = this.state.password;

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorM = error.code;
        console.log("error", errorM);
        console.log('doneeeee')
        // ...
      })
      .catch(function (error) {

        console.error("Error adding document: ", error);
        
        console.log('doneeeee')
      }).then(()=>{
        console.log('log')
        console.log( 'userr',firebase.auth().currentUser.uid)
        this.setState({
          visible:true,
        
        })
        this.props.history.push( "/student/studentHome")
      })
      
  };
  signup = () => {
    this.props.history.push("./sign");
  };


        
 
  
 
  render(){
    return(
      <div >
        <div style={{float:'right',marginTop:120}}>
       
     
     

          <Card
         
            className="card"
            title={
              <h2
                style={{ color: "#002266", marginTop: 20, fontWeight: "bold" }}
              >
                log in
              </h2>
            }
            style={{ width: 450, height: 450, marginTop: 40, marginRight: 200, boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2)'}}
          >
            <Input
              style={{ marginTop: 20, height: 35 }}
              prefix={<Icon type="user" style={{ color: "#4d4dff" }} />}
              placeholder="Username"
              onChange={this.addEmail}
            />
            <Input
              style={{ height: 35, marginTop: 30, marginBottom: 20 }}
              onChange={this.addPassword}
              prefix={<Icon type="lock" style={{ color: "#4d4dff" }} />}
              type="password"
              placeholder="Password"
            />
            <a href="./signupall">forgot password </a>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              onClick={this.login}
              style={{ width: 400, marginTop: 30, marginBottom: 25 }}
            >
              Log in
            </Button>
            Or <a href="./signupall">create acount </a>
            <Modal
          title="Basic Modal"
          visible={this.state.visible}
         
        >
          <p>successful log in</p>
       
       
        </Modal>
          </Card>

          </div>
          
          <div  style={{float: 'left' ,width:'45%',height:670,marginTop:0,backgroundColor:"#f4f7f8"}} >
          <div style={{ backgroundColor:'#3676eb',height:120,width:'100%'  }}>
            
            </div>
            
            <div style={{marginTop:100}}>
              <div style={{marginLeft:80}}>
              <h1 style={{color:'#3676eb'}}>strive for greatness and success</h1>
            
              </div>
             
            </div>
                     
 <img style={{backgroundColor:'red', width:'25%',height:'25%',opacity:'0,5' ,marginLeft:200
  ,filter: 'alpha(opacity=50)'}}  src={require("./NewLogo.png")} onClick={this.pri} alt="img"/>
            
           </div>
             
     
      </div>
    );
  }
}

export default Login;
