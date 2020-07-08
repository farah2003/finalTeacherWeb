import React, { Component } from 'react';
import { Button,Card,Icon } from 'antd';
import "./studentHome"

import * as firebase from 'firebase'

class ProfileStudent extends Component{

  state={
    list:[],

    check:"",
    UserName:'',
    Phone:'',
    Name:'',
    Email:'',
    userid:""
}

async componentWillMount(){
  const  user = firebase.auth().currentUser;
  let userid =user.uid 
   await this.setState({
    userid
   })
   console.log(userid)
   this.getuserCard()
    this.getUseInfo()
  
  }
  getuserCard = async()=>{

 
     const db = firebase.firestore();

   
  
    let user =   await firebase.auth().currentUser
  //  const id= await user.uid

   //  
   console.log('state',this.state.userid)
    let newList =[]
   
   /* db.collection("Student").where('id','==',user.uid).get().then((userSnapshot) => {

        
      userSnapshot.docs.map((doc) => {
        
          console.log( 'cardfor user ', doc.data())
      let x= doc.data()
  
         console.log(x) 
      newList.push(x)    
      } );  
    this.setState({
        list:newList
      })
    
})*/
  }
  getUseInfo=async ()=>{
    const db = firebase.firestore();
    

    let user =   await firebase.auth().currentUser
  // const  id= await user.uid
    db.collection("Student").doc(user.uid).get().then((userdoc) =>{

        console.log(userdoc.data())
  
      var card=userdoc.data().savecard
  console.log(card)
  
      })
  
  }
  move1=()=>{
   console.log('hello')
      this.props.history.push("./studentHome")
     }
  render(){

    const {list}=this.state
    return(
      
   
     
      <div style={{flex:1}}>
        {/*header*/}
        <div style={{height:60,backgroundColor:"#001a33"}}>
        <div style={{paddingTop:18,float:"right",marginRight:70}}>
         <Icon  type="home" style={{ color: 'white',fontSize: '28px',paddingTop:0,marginRight:36 }}
         onClick={this.move1} />
         <Icon  type="setting" style={{fontSize: '27px', color: 'white' }} />
          </div>
          <div>
          <label className="Label" style={{marginLeft:120 ,paddingTop:60,color:'white',fontFamily: 'Satisfy',fontSize:30}}>Dent Guide</label>
          </div>
        
        </div>
     {/*profil*/}
        <div style={{width:"900", backgroundColor:"#e6e6fa",height:200,marginTop:0,marginBottom:130}}>

        <div style={{width:500,height:200,display:"flex",paddingTop:50}} >

<div style={{height:300,float:"left"}}>
<img src={require('../profile and update will use later/image.png' )} style={{ border:"6px solid #f2f2f2",width:"70%",height:"60%",borderRadius:"50%",marginLeft:90,marginTop:60,marginBottom:50,}} />
</div>

<div style={{float:"right",height:400,marginTop:150,marginLeft:30,width:400}}>
<h2>{this.state.UserName}</h2>
<h4>student level 5</h4>

  

</div>
</div>
       
        </div>
        

      
                      


 


 <div style={{display:"flex",backgroundColor:"#e6e6fa",height:650}}>
{/*inf*/}
<div style={{float:"left",width:300,marginLeft:100,marginTop:50}}>

<div style={{display:"flex"}}>
<div style={{float:"right",marginRight:20}}>
<Icon  type="user" style={{fontSize: '20px', color: '#4d4dff' }} />
</div>
<div style={{float:"left"}}>
<h4>{this.state.Name}</h4>
</div>
</div>
<div style={{display:"flex"}}>
<div style={{float:"right",marginRight:20}}>
<Icon type="mail" style={{ color: '#4d4dff',fontSize: '20px' }} />
</div>
<div style={{float:"left"}}>
<h4> {this.state.Email}</h4>
</div>
</div>
<div style={{display:"flex"}}>
<div style={{float:"right",marginRight:20}}>
<Icon  type="phone" style={{ color: '#4d4dff',fontSize: '20px' }} />
</div>
<div style={{float:"left"}}>
<h4>{this.state.Phone}</h4>
<Button style={{color:"#4d4dff",width:200,backgroundColor: '#03a9f4',height:40, width: 200,borderRadius:30,marginRight:100,
    marginBottom:20}}><h4 style={{color:'white'}}>EDIT</h4></Button>
          
</div>

</div>


</div>

{/*card*/}
<div style={{float:"right"}}>
<h1 style={{marginLeft:90,marginBottom:30,marginTop:30}}> selected</h1>
 { list.map((item,index)=>{
 return(

<div>
 
<Card  title={<h4 style={{height:10,marginTop:3,fontWeight:'bold' ,marginRight:30}}>{item.Name}</h4> }  style={{ width: 700,height:200 ,marginLeft:90,marginBottom:40, marginTop:10}}>
<div style={{textAlign:"right",display:"flex",height: 200}}>
             <div style={{float:"left",height: 200,marginLeft:50}}> 
              <h3 style={{fontSize:18}}> <label style={{fontSize:18,marginRight:7}}> Name</label>{item.Name}</h3>
              <h3 style={{fontSize:18}}> <label style={{fontSize:18,marginRight:7}}> Phone Number</label>{item.Phone}</h3>
          
              <h3 style={{fontSize:18}}> <label style={{fontSize:18,marginRight:7}}> Email</label>{item.Email} </h3>
          
        
              </div> 
              <div style={{float:"right",height: 200,marginLeft:180}}>
           

              <h3 style={{fontSize:18}}> <label style={{fontSize:18,marginRight:7}}>Age</label>:{item.Age}</h3>
              <h3 style={{fontSize:18}}> <label style={{fontSize:18,marginRight:7}}> treatment</label>: Orthodontics </h3>
              <h3 style={{fontSize:18}}> <label style={{fontSize:18,marginRight:7}}> Note</label>:{item.Notes} </h3>
              

    </div>
    
  
    </div> 
          
  
          
          </Card>


</div>


 ) })}
 </div>
 
 </div>



   
      
   
 
  </div>        
    )
  }
}

export default ProfileStudent;
