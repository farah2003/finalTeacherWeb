import React, { Component } from "react";
import 'antd/dist/antd.css';
import { Icon, Input, Button, Card } from "antd";
import { Radio } from 'antd';
import { NavLink } from "react-router-dom";
import Nav from "./homeHeader";

export default class Signupall extends Component {
state={
  value:""
}

  onChange4 = e => {
    console.log('radio4 checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };
  goTeacher=()=>{
    this.props.history.push( "/signteacher")
  }
  goStudent=()=>{
    this.props.history.push( "/sign")
  }
  render() {

    
    return (
      <div style={{backgroundColor:"#f4f7f8"}}>
        <Nav style={{ position: "fixed" }}></Nav>
        <div style={{marginTop:0,backgroundColor:"#f4f7f8",display:'flex',justifyContent:'center',marginTop:80,marginBottom:100}}>
        <div style={{width:'85%'}}>
        <div style={{float:'right'}}>
       
     
     

          <Card
            className="card"
           
            style={{ width: 550, height: 450,marginRight:24,height:500}}
          >
             <div style={{marginTop:60}}>
           <div style={{display:'flex',justifyContent:'center'}}>
             <h3>Join Toutor PS  as a</h3>
            </div>
          
       <div style={{display:'flex',justifyContent:'center'}}>
          <Radio.Group defaultValue="a" buttonStyle="solid"onChange={this.onChange4} >
      <Radio.Button value="a" style={{width:130,textAlign:'center',height:40}} onClick={this.goStudent}>Student</Radio.Button>
      <Radio.Button value="b" style={{width:130,textAlign:'center',height:40}}onClick={this.goTeacher} >Teacher</Radio.Button>

    </Radio.Group>
    </div>
    </div>
    <div style={{marginTop:50}}>
    <img style={{backgroundColor:'red', width:'50%',height:'50%',opacity:'0,5' ,marginLeft:110
  ,filter: 'alpha(opacity=50)'}}  src={require("./logo.png")} onClick={this.pri} alt="img"/>
            
    </div>
          </Card>

          </div>
          
          <div  style={{float: 'left' ,width:550,height:500,backgroundColor:"#1761e8",marginLeft:24}} >
            <h1>fhjfhjfhfjhfjdk</h1>
            
           </div>
             
     
      </div>
        </div>
      </div>
    );
  }
}
