

import React, { Component } from 'react';
import { Input , Checkbox,Button, Card } from 'antd';


import darkTheme from '@ant-design/dark-theme'

import * as firebase from 'firebase'
import {Layout} from 'antd';
const { Header } = Layout;
const { TextArea } = Input;


class Fillin extends Component{
  state={
    name:'',
    phone:'',
    age:'',
    email:'',
    notes:'',
    disease:'',
    defaultChecked:'',
    idA:'',
    idB:'',
    idC:'',
    idD:'',
    idE:'',
    idF:'',
    

  }
    
  addName=(e)=>{
    this.setState({
      name:e.target.value
      
    })

  }
     
  addPhone=(e)=>{
    this.setState({
      phone:e.target.value
    })
  }
     
  addAge=(e)=>{
    this.setState({
      age:e.target.value
    })
  }
     
  addEmail=(e)=>{
    this.setState({
      email:e.target.value
    })
  }
  addNotes=(e)=>{
    this.setState({
      notes:e.target.value
    })
  }
     
  addDisease=(e)=>{
    this.setState({
      disease:e.target.value
    })
  }
  checkA=(e)=>{

    
    this.setState({
      idA:''
    })
    console.log(e.target.checked)
    if (e.target.checked===true){
      console.log('A')
    this.setState({
      idA:e.target.checked
    })
    }
    else{
      this.setState({
        idA:''
      }) 
    }
  }
    checkB=(e)=>{
      console.log(e.target.checked)
      if (e.target.checked===true){
      this.setState({
        idB:e.target.checked
      })
      }
    else{
      this.setState({
        idB:''
      }) 
   
    }}
     
      checkC=(e)=>{
        console.log(e.target.checked)
        if (e.target.checked===true){
        this.setState({
          idC:e.target.checked
        })
        
        }
      else{
        this.setState({
          idC:''
        })
      }}
   
        checkD=(e)=>{
          console.log(e.target.checked)
          if (e.target.checked===true){
          this.setState({
            idD:e.target.checked
          })
         
          }
          else{
            this.setState({
              idD:''
            }) 
          }
        }

   checkF=(e)=>{
     console.log(e.target.checked)
    if (e.target.checked===true){
       this.setState({
       idF:e.target.checked
              })
 
      }
    else{
      this.setState({
        idF:''
         })
    }}
      checkE=(e)=>{
     console.log(e.target.checked)
     if (e.target.checked===true){
       this.setState({
       idF:e.target.checked
       })
       this.setState({
       idF:''
        }) 
       }}


  send=()=>{
    console.log('bbb',this.state.idB)
    var name=this.state.name;
    var phone=this.state.phone;
    var age=this.state.age;
    var email=this.state.email
    var notes=this.state.notes
     var disease=this.state.disease
     var idA =this.state.idA
     var idB =this.state.idB
     var idC =this.state.idC
     var idD =this.state.idD
     var idF =this.state.idF
     var idE =this.state.idE
   
    const db = firebase.firestore();


db.collection("patients").add({

        Name: name,
       Phone:phone,
        Age: age,
        Email:email,
        Notes:notes,
        Disease:disease,
        calssA: idA,
        classB:idB,
        classC:idC,
        classD:idD,
        classE:idE,
        classF:idF


    }).then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        })
   
  
  }
  
           
  render(){
  
    return(
      
      <div style={{backgroundColor:"#e6e6fa"}} >
        <div style={{paddingBottom:20}}>
      <Layout className="layout">
        <Header style={{ backgroundColor: darkTheme , width:'100%',height:60}}  > 
          
         <h1 style={{color:'white'}}>Fill in</h1>
        </Header>
     
        </Layout>
      </div >
         
          <div style={{ width:200}}>

    <Card className="card"   title={<h2 style={{marginTop:0,fontWeight:'bold',textAlign:"left" ,marginRight:30,color:'#002266'}}> Form</h2> }  style={{textAlign:"left", width: 800,height:900 ,marginTop:40,marginLeft:230,marginBottom:10}}>
      
            
             
          
              <div style={{marginRight:40}}>

             
              <h3 className="h3"> Patient Name </h3>
              <Input  onChange={this.addName} style={{width:500}} />
              <h3  className="h3" > Phone number </h3>
              <Input onChange={this.addPhone} style={{width:500}}/>
              <h3  className="h3"> Age </h3>
              <Input  onChange={this.addAge} style={{width:500}}/>
              <h3  className="h3"> Email addresss </h3>
              <Input  onChange={this.addEmail} style={{width:500}} />
             

              <h3  className="h3"> Another Note </h3>
              <TextArea rows={4} onChange={this.addNotes} style={{width:500}}/>
              
              <h3  className="h3"> Chronic diseases and others </h3>
              <TextArea rows={4} onChange={this.addDisease} style={{width:500}}/>

              <h3  className="h3">The treatment you need </h3>
            <div style={{alignItems:'flex_start'}}> 
        <div>
             <Checkbox onChange={this.checkA}/> Orthodontics

              </div>

              <div>
           <Checkbox onChange={this.checkB}/>   nerve treatment
              </div>
              <div>
            <Checkbox onChange={this.checkC}/>  Denture
            
              </div>
              <div>
            <Checkbox onChange={this.checkD}/>  Molar filling
            
          
              </div>
              <div>
             <Checkbox onChange={this.checkE}/>  tooth removal
            
              </div>
              <div>
       <Checkbox onChange={this.checkF}/>        Cleaning teeth
            
              </div>
              </div>
 
              <Button type="primary" style={{color:" #466995",width:230,marginTop:20}} onClick={this.send}>
              <h2 style={{fontFamily:'AdventPro-Bold	', color:'white'}}>send</h2>
           </Button>
         
       
           </div>
       
        
              </Card>
              </div>
       
      </div>
      
       
      
      
              
              
           




        
       


    )
  }
  
}

export default Fillin;
