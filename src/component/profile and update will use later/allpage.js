import React, { Component } from 'react';
import {Card , Button , Popconfirm, message} from 'antd';

import * as firebase from 'firebase'

export default class PCard  extends  Component{
 
    state={
      list:[],
     ListForId:[],
      check:"",
      
  }
    confirm = (item)=> {
    console.log(item)
    
      this.update(item)
    }
    cancel = ()=> {   
    
  
      console.log("gbg");
      message.error('Click on No');
    }
    componentDidMount(){
        
    this.getData()
      
    }
    getData = ()=>{
      const db = firebase.firestore();
   
      let newList =[]
  
      db.collection("patients").get().then((userSnapshot) => {
      console.log( userSnapshot.docs)
        
        userSnapshot.docs.map(doc =>{
       console.log(doc)
        let x= doc.data()
    
        x.id=doc.id
        newList.push(x)    
           } );
  
  
          newList=newList.filter((item)=>item.check!==true)
      
        this.setState({
          list:newList
        })
        
    })
    }
    update=(i)=>{
    
  
      
   
      const db = firebase.firestore();
  
     let  washingtonRef = db.collection("patients").doc(i)
     let  user = firebase.auth().currentUser;
   
    return washingtonRef.update({
      check: true,
      id:user.uid
    })
  
    .then(()=> {
        console.log("Document successfully updated!");
    }).then(()=>{
  
    
      this.getData()
  
    })
    .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    })
  
          
  
    }
    render(){
  
      const {list}=this.state
  
     
      return(
      
        <div style={{backgroundColor:"#e6e6fa",height:'100%'}}>
     
                  <div style={{backgroundColor:"#e6e6fa"}}>
      {

       list.map((item,index)=>{
       
        return(

          <div style={{paddingTop:100,backgroundColor:'#e6e6fa'}}> 
       
          <div  style={{backgroundColor:"#e6e6fa"}}>
      
        
          <Card  title={<h4 style={{height:10,marginTop:3,fontWeight:'bold' ,marginRight:30,textAlign:"right"}}>{item.Name}</h4> }  style={{ width: 800,height:230 ,marginLeft:220,marginBottom:0, paddingTop:0}}>
                   <div style={{textAlign:"right",display:"flex",height: 200}}>
                   <div style={{float:"right",height: 200,marginLeft:50}}> 
                    <h3 style={{fontSize:18}}> <label style={{fontSize:18,marginRight:7}}> Name</label>:{item.Name} </h3>
                    <h3 style={{fontSize:18}}> <label style={{fontSize:18,marginRight:7}}> Phone Number </label>:{item.Phone} </h3>
                
                    <h3 style={{fontSize:18}}> <label style={{fontSize:18,marginRight:7}}> Email</label>:{item.Email}</h3>
                
                    <div style={{marginTop:0}}>
          <Popconfirm
          title="Are you sure delete this task?"
          onConfirm={()=>this.confirm(item.id)}
          onCancel={this.cancel}
          okText="Yes"
          cancelText="No"
        >
                  <Button type="primary" style={{width:200,marginRight:60}}> select this  </Button>
        </Popconfirm>
        </div>
                    </div> 
                    <div style={{float:"left",height: 200,marginLeft:160}}>
                 
                    <h3 style={{fontSize:18}}> <label style={{fontSize:18,marginRight:7}}> Age  :</label> {item.Age}</h3>
                    <h3 style={{fontSize:18}}> <label style={{fontSize:18,marginRight:7}}>Notes :</label>{item.Notes}</h3>
                    <h3 style={{fontSize:18}}> <label style={{fontSize:18,marginRight:7}}> treatment: </label>Orthodontics</h3>
                   
                    
      
          </div>
          
        
          </div>
                    
        
                    </Card>
                 
                     
                    {/* <Card  title={<h4 style={{height:10,marginTop:3,fontWeight:'bold' ,marginRight:30}}>{item.Name}</h4> }  style={{ width: 900,height:200 ,marginLeft:220,marginBottom:40, marginTop:10}}>
                   
                   
                    <label>{item.age}</label><h4>:االعمر</h4><label>16</label>
                    <label>{item.id}</label><h4>:االعمر</h4><label>16</label>
                    
                    
                    <Popconfirm
            title="Are you sure delete this task?"
            onConfirm={()=>this.confirm(item.id)}
            onCancel={this.cancel}
            okText="Yes"
            cancelText="No"
          >
                    <Button  > select this  </Button>
          </Popconfirm>
                    
                    
                  </Card>*/}
        
                  </div>
                  </div>
                    )}

        )}   
</div>
    </div>
      )
    }
  }
  