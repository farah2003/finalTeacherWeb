import React, { Component } from 'react';
import { Icon, Input, Button, Card } from 'antd';



import * as firebase from 'firebase'
import './sign'


class Login extends Component{
  state={
    email:"",
    password: ""
  }
  addEmail=(e)=>{

    this.setState({
      email:e.target.value
    })
  }
  addPassword=(e)=>{
    this.setState({
      password:e.target.value
    })
    

  }
  login=()=>{
 
    var email=this.state.email
    var password=this.state.password

    
    firebase.auth().signInWithEmailAndPassword(email,
      password).catch(function (error) {
         // Handle Errors here.
         var errorM = error.code;
         console.log('error',errorM)
         // ...
     }).catch(function (error) {
             console.error("Error adding document: ", error);
         }).then(
          this.props.history.push( './choose')

         )}
     signup=()=>{
       
      this.props.history.push('./sign')
     }
 
  render(){
    return(
      <div >
        <div style={{float:'right'}}>
          <h1 style={{fontFamily:"Satisfy" ,fontSize:50,marginTop:40,color:'#002266'}}>Dent Guide</h1>

        <Card className="card"   title={<h2 style={{color:'#002266',marginTop:20,fontWeight:'bold'}}>log in</h2> }  style={{ width: 450,height:450 ,marginTop:40,marginRight:200}}>
     

            <Input
            style={{marginTop:20,height:35}}
            
              prefix={<Icon type="user" style={{ color: '#4d4dff' }} />}
              placeholder="Username"
              onChange={this.addEmail}
            />
 
       
 
            <Input style={{height:35,marginTop:30,marginBottom:20}}
            
            onChange={this.addPassword}
              prefix={<Icon type="lock" style={{ color: '#4d4dff' }} />}
              type="password"
              placeholder="Password"
            />
          
    
          <a href='./sign'>forgot password </a>
   
          <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.login} style={{width:400,marginTop:30,marginBottom:25}}>
            Log in
          </Button>
          Or <a href='./sign'>create acount </a>
          </Card>
          </div>
          <div  style={{float: 'left' ,width:'45%',height:670,marginTop:0}} >
                     
 <img style={{backgroundColor:'red', width:'100%',height:'100%',opacity:'0,5' 
  ,filter: 'alpha(opacity=50)'}}  src={require("../login.jpg")} onClick={this.pri} alt="img"/>
            
           </div>
             
      </div>
     
    )
  }
  
}

export default Login;
