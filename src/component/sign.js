import React, { Component } from 'react'; 

import { Input, Button,Card,Icon } from 'antd';
import './profile and update will use later/allpage'
import './choose'

import * as firebase from 'firebase'



class Signin extends Component{
  state={
    name:"",
    FullName:"",
    PhoneNum:"",
    email:"",
    password: ""
  }
  addEmail=(e)=>{

    this.setState({
      email:e.target.value
    })
  }
  addName=(e)=>{
    this.setState({
      name:e.target.value
    })
   
    

  }

  addFullName=(e)=>{
    this.setState({
      FullName:e.target.value
    })

  }
  addNumber=(e)=>{
    this.setState({
      PhoneNum:e.target.value
    })
    

  }
  addPassword=(e)=>{
    this.setState({
      password:e.target.value
    })
    

  }
  
   goToChoose= async()=>{
   var firstN=this.state.name;
    var lastN=this.state.FullName;
    var PhoneNum=this.state.PhoneNum;
    var email=this.state.email
    var password=this.state.password

    const db = firebase.firestore();


    firebase.auth().createUserWithEmailAndPassword(email,
     password).catch(function (error) {
        // Handle Errors here.
        var errorM = error.code;
        
     console.log('eee',errorM)
        // ...
    }).then(()=>{
      var user = firebase.auth().currentUser;
  
      console.log('user',user.uid)
      

    db.collection("Users").doc(user.uid).set({
        Name: firstN,
       UsersName: lastN,
        phone: PhoneNum,
        Email:email,
        Password:password,
        savecard:[],
        rating:""
        

    })
        .then(function (docRef) {
          console.log('hereeeeeeeeeeee')
          
            
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        })
    }).then(()=>{
      this.props.history.push( "/student/studentHome")
    })

   

  }
 

    
    
   
  
  
 




  render(){
    return(
      <div>
         <div style={{float:'right',marginRight:'10%'}}>
  
     

<Card className="card"   title={<h2 style={{color:'#002266',marginTop:15,fontWeight:'bold',height: 30}}>signing Up as Student</h2> }  style={{ width: 500,height:620 ,marginTop:30, boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2)'}}>
        
<div > 


<h4 style={{marginTop:20,fontWeight:'bold',color:'#002266'}}>Full name  </h4>
<Input   prefix={<Icon type="user" style={{ color: '#4d4dff' }} />} onChange={this.addName}  style={{height:35}} />


<h4 style={{marginTop:20,fontWeight:'bold',color:'#002266'}}>  User Name </h4>
<Input   prefix={<Icon type="user" style={{ color: '#4d4dff' }} />} onChange={this.addFullName}  style={{height:35}}/>

<h4 style={{marginTop:20,fontWeight:'bold',color:'#002266'}}> Your Email</h4>
<Input  onChange={this.addEmail}   style={{height:35}}  prefix={<Icon type="mail" style={{ color: '#4d4dff' }} />}/>


<h4 style={{marginTop:20,fontWeight:'bold',color:'#002266'}}> Password </h4>
<Input.Password onChange={this.addPassword}  prefix={<Icon type="lock" style={{ color: '#4d4dff' }} />}  style={{height:35}}/>


<h4 style={{marginTop:20,fontWeight:'bold',color:'#002266'}}>Your Phone Number</h4>
<Input onChange={this.addNumber}   style={{height:35}}  prefix={<Icon type="phone" style={{ color: '#4d4dff' }} />} />



</div>
<div style={{marginTop:30}}> 
  <Button type="primary" htmlType="submit" className="login-form-button" 
  onClick={this.goToChoose} style={{width:450,height:40}}> 
 sign up
</Button>
</div>
        </Card>
      
  
      
        </div>  
        <div  style={{float: 'left' ,width:'45%',height:670,marginTop:0,backgroundColor:"#f4f7f8c4"}} >
          <div style={{ backgroundColor:'#3676eb',height:120,width:'100%'  }}>
            
          </div>
            <div style={{marginTop:100}}>
              <div style={{marginLeft:80}}>
              <h1 style={{color:'#3676eb'}} >The 1000 mile journey start with</h1>
              <h1 style={{marginLeft:180,color:'#3676eb'}}>steps</h1>
             
              </div>
             
            </div>
                     
 <img style={{backgroundColor:'red', width:'25%',height:'25%',opacity:'0,5' ,marginLeft:200
  ,filter: 'alpha(opacity=50)'}}  src={require("./LOGO LOG IN.png")} onClick={this.pri} alt="img"/>
            
           </div>
        </div>
    )
  }
}

export default Signin ;